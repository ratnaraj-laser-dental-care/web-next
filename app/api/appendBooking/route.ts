import { NextResponse } from 'next/server'
import { google } from 'googleapis'

type BookingBody = {
  name: string
  phone: string
  email?: string
  service?: string
  preferredDate?: string
  note?: string
  source?: string
}

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms))

async function getSheetsClient() {
  const credsJson = process.env.GOOGLE_SERVICE_ACCOUNT_JSON
  if (!credsJson) throw new Error('Missing GOOGLE_SERVICE_ACCOUNT_JSON')
  const creds = JSON.parse(credsJson)
  const auth = new google.auth.JWT(
    creds.client_email,
    undefined,
    creds.private_key,
    ['https://www.googleapis.com/auth/spreadsheets']
  )
  await auth.authorize()
  return google.sheets({ version: 'v4', auth })
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as BookingBody
    const { name, phone, email, service, preferredDate, note, source } = body
    if (!name || !phone) {
      return NextResponse.json({ error: 'name and phone are required' }, { status: 400 })
    }

    const spreadsheetId = process.env.SPREADSHEET_ID
    const sheetName = process.env.SHEET_NAME || 'Sheet1'
    if (!spreadsheetId) {
      return NextResponse.json({ error: 'Spreadsheet not configured' }, { status: 500 })
    }

    const sheets = await getSheetsClient()

    const timestamp = new Date().toISOString()
    const values = [[timestamp, name, phone, email || '', service || '', preferredDate || '', note || '', source || 'web']]

    const maxAttempts = 5
    let attempt = 0
    while (true) {
      try {
        await sheets.spreadsheets.values.append({
          spreadsheetId,
          range: `${sheetName}!A1`,
          valueInputOption: 'RAW',
          insertDataOption: 'INSERT_ROWS',
          requestBody: { values }
        })
        return NextResponse.json({ ok: true })
      } catch (err: any) {
        attempt += 1
        const status = err?.code || err?.response?.status
        if (attempt >= maxAttempts || !(status === 429 || (status >= 500 && status < 600))) {
          console.error('Sheets append failed:', err)
          return NextResponse.json({ error: 'Failed to append to sheet' }, { status: 502 })
        }
        const backoff = Math.min(1000 * 2 ** attempt + Math.floor(Math.random() * 1000), 32000)
        await sleep(backoff)
      }
    }
  } catch (e) {
    console.error('appendBooking error', e)
    return NextResponse.json({ error: 'Invalid request or server error' }, { status: 400 })
  }
}

export const runtime = 'nodejs'
