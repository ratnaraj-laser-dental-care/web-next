'use client';

import { useState } from 'react';

interface BookingFormProps {
  serviceName?: string;
}

const BookingForm = ({ serviceName = "Our Service" }: BookingFormProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    // time: '',
    notes: ''
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('idle');
    setErrorMsg('');

    // Validation
    if (!formData.name.trim() || !formData.phone.trim()) {
      setErrorMsg('Name and phone are required');
      setStatus('error');
      return;
    }

    setLoading(true);
    try {
      const res = await fetch('/api/appendBooking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name.trim(),
          phone: formData.phone.trim(),
          email: formData.email.trim(),
          preferredDate: formData.date,
          // time: formData.time,
          service: serviceName,
          note: formData.notes.trim(),
          source: 'service-booking'
        })
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || 'Failed to book appointment');

      setStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        date: '',
        // time: '',
        notes: ''
      });
    } catch (err: any) {
      setErrorMsg(err?.message || 'Submission failed');
      setStatus('error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="rounded-lg bg-white p-8 shadow-lg dark:bg-gray-800">
      <h3 className="mb-6 text-2xl font-bold text-black dark:text-white">
        Book Your Appointment
      </h3>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Name */}
        <div>
          <label className="mb-3 block text-sm font-medium text-black dark:text-white">
            Full Name *
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            className="w-full rounded border border-gray-300 bg-transparent px-4 py-3 text-black outline-none transition focus:border-primary dark:border-gray-600 dark:text-white"
            required
          />
        </div>

        {/* Email */}
        <div>
          <label className="mb-3 block text-sm font-medium text-black dark:text-white">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="w-full rounded border border-gray-300 bg-transparent px-4 py-3 text-black outline-none transition focus:border-primary dark:border-gray-600 dark:text-white"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="mb-3 block text-sm font-medium text-black dark:text-white">
            Phone Number *
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter your phone number"
            className="w-full rounded border border-gray-300 bg-transparent px-4 py-3 text-black outline-none transition focus:border-primary dark:border-gray-600 dark:text-white"
            required
          />
        </div>

        {/* Date */}
        <div>
          <label className="mb-3 block text-sm font-medium text-black dark:text-white">
            Preferred Date
          </label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full rounded border border-gray-300 bg-transparent px-4 py-3 text-black outline-none transition focus:border-primary dark:border-gray-600 dark:text-white"
          />
        </div>

        {/* Time */}
        {/* <div>
          <label className="mb-3 block text-sm font-medium text-black dark:text-white">
            Preferred Time
          </label>
          <select
            name="time"
            value={formData.time}
            onChange={handleChange}
            className="w-full rounded border border-gray-300 bg-transparent px-4 py-3 text-black outline-none transition focus:border-primary dark:border-gray-600 dark:text-white"
          >
            <option value="">Select time</option>
            <option value="09:00">9:00 AM</option>
            <option value="10:00">10:00 AM</option>
            <option value="11:00">11:00 AM</option>
            <option value="12:00">12:00 PM</option>
            <option value="14:00">2:00 PM</option>
            <option value="15:00">3:00 PM</option>
            <option value="16:00">4:00 PM</option>
            <option value="17:00">5:00 PM</option>
          </select>
        </div> */}

        {/* Notes */}
        <div>
          <label className="mb-3 block text-sm font-medium text-black dark:text-white">
            Additional Notes
          </label>
          <textarea
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            placeholder="Tell us about your dental concerns or preferences..."
            rows={4}
            className="w-full rounded border border-gray-300 bg-transparent px-4 py-3 text-black outline-none transition focus:border-primary dark:border-gray-600 dark:text-white"
          />
        </div>

        {/* Status Messages */}
        {status === 'error' && (
          <div className="rounded-lg bg-red-100 p-4 text-red-700 dark:bg-red-900 dark:text-red-100">
            {errorMsg}
          </div>
        )}

        {status === 'success' && (
          <div className="rounded-lg bg-green-100 p-4 text-green-700 dark:bg-green-900 dark:text-green-100">
            Appointment request submitted successfully! We'll contact you soon to confirm.
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full rounded bg-primary px-6 py-3 font-semibold text-white transition hover:bg-opacity-90 disabled:opacity-50"
        >
          {loading ? 'Booking...' : 'Book Appointment'}
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
