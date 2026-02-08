# Google Sheets append setup

1. Create a Google Cloud project and enable the Google Sheets API.
2. Create a Service Account and generate a JSON key.
3. In the target Google Sheet, click Share and add the service-account email (from the JSON) with Editor permission.
4. Add these environment variables to your deployment environment (do NOT commit the JSON to git):

```
GOOGLE_SERVICE_ACCOUNT_JSON='<<contents of the service account JSON file as a single-line JSON string>>'
SPREADSHEET_ID='your_spreadsheet_id_here'
SHEET_NAME='Sheet1'
```

Notes:
- `SPREADSHEET_ID` is the ID from the sheet URL: `https://docs.google.com/spreadsheets/d/<SPREADSHEET_ID>/...`
- For local development, you can put the JSON into a `.env.local` file but ensure it's in `.gitignore`.
- The API route is `POST /api/appendBooking` and expects a JSON body with: `name`, `phone`, and optional `email`, `service`, `preferredDate`, `note`, `source`.

Example request body:

```json
{
  "name":"Amit Mishra",
  "phone":"+919876543210",
  "email":"amit@example.com",
  "service":"Cleaning",
  "preferredDate":"2026-02-20",
  "note":"Morning preferred",
  "source":"website"
}
```

Behavior:
- Server uses a service account to call `spreadsheets.values.append`.
- The endpoint retries transient errors (429 / 5xx) with exponential backoff.
- If Sheets is not available, consider writing to a local DB or CSV fallback (not implemented here).
