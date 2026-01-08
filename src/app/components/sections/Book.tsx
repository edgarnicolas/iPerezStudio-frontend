import { useState } from 'react';
import { Calendar, Camera } from 'lucide-react';

export function Book() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    sessionType: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock form submission
    alert('Booking request submitted! We will contact you shortly.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      date: '',
      sessionType: '',
      message: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="book" className="min-h-screen bg-white py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Book a <span className="text-red-600">Session</span>
          </h2>
          <p className="text-gray-600 text-lg">Reserve your photography session today</p>
        </div>

        <div className="bg-gray-50 rounded-lg p-8 border-2 border-red-600/20">
          <div className="flex justify-center mb-6">
            <div className="flex items-center space-x-2">
              <Calendar className="w-8 h-8 text-red-600" />
              <Camera className="w-8 h-8 text-black" />
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 mb-2">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-red-600"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-red-600"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="(555) 123-4567"
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-red-600"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Preferred Date *</label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-red-600"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Session Type *</label>
              <select
                name="sessionType"
                value={formData.sessionType}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-red-600"
                required
              >
                <option value="">Select a session type</option>
                <option value="portrait">Portrait Session</option>
                <option value="wedding">Wedding Photography</option>
                <option value="event">Event Photography</option>
                <option value="fashion">Fashion/Editorial</option>
                <option value="headshot">Professional Headshots</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Additional Details</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your vision for the session..."
                rows={4}
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-red-600 resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full px-8 py-4 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors text-lg font-semibold"
            >
              Submit Booking Request
            </button>
          </form>

          <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-sm text-gray-700">
              <strong>Note:</strong> Submitting this form is a booking request. We will contact you within 24 hours to confirm availability and discuss session details.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
