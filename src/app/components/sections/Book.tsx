import { useRef, useState } from "react";
import { Calendar, Camera } from "lucide-react";
import EmailJS from "@emailjs/browser";

export function Book() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    preferredDate: "",
    sessionType: "",
    additionalDetails: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  const formRef = useRef<HTMLFormElement>(null);

  //credentials for emailjs or any other service can be added here
  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const BOOKING_TEMPLATE = import.meta.env.VITE_EMAILJS_BOOKING_TEMPLATE_ID;
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (isSubmitting) return; // Prevent multiple submissions

    if (!formRef.current) {
      setStatus("error");
      return;
    }

    setIsSubmitting(true);
    setStatus("submitting");

    try {
      //EmailJS sending logic would go here
      await EmailJS.sendForm(
        SERVICE_ID,
        BOOKING_TEMPLATE,
        formRef.current!,
        PUBLIC_KEY
      );

      // Here you would integrate with EmailJS or another email service
      setStatus("success");
      setFormData({
        name: "",
        email: "",
        phoneNumber: "",
        preferredDate: "",
        sessionType: "",
        additionalDetails: "",
      });
    } catch (error) {
      setStatus("error");
      console.error("Error submitting booking request:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="book" className="min-h-screen bg-white py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Book a <span className="text-red-600">Session</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Reserve your photography session today
          </p>
        </div>

        <div className="bg-gray-50 rounded-lg p-8 border-2 border-red-600/20">
          <div className="flex justify-center mb-6">
            <div className="flex items-center space-x-2">
              <Calendar className="w-8 h-8 text-red-600" />
              <Camera className="w-8 h-8 text-black" />
            </div>
          </div>

          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
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
                  placeholder="your@example.com"
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-red-600"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  placeholder="(555) 123-4567"
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-red-600"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2">
                  Preferred Date *
                </label>
                <input
                  type="date"
                  name="preferredDate"
                  value={formData.preferredDate}
                  //add min of three weeks from today
                  min={new Date(
                    Date.now() + 21 * 24 * 60 * 60 * 1000
                  )
                    .toISOString()
                    .split("T")[0]}
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
              <label className="block text-gray-700 mb-2">
                Additional Details
              </label>
              <textarea
                name="additionalDetails"
                value={formData.additionalDetails}
                onChange={handleChange}
                placeholder="Tell us about your vision for the session..."
                rows={4}
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-red-600 resize-none"
              />
            </div>

            <button
              disabled={isSubmitting}
              type="submit"
              className="w-full px-8 py-4 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors text-lg font-semibold"
            >
              {isSubmitting ? "Submitting..." : "Submit Booking Request"}
            </button>
          </form>
         

          <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-sm text-gray-700">
              <strong>Note:</strong> Submitting this form is a booking request.
              We will contact you within 24 hours to confirm availability and
              discuss session details.
            </p>
            {status === "success" && (
            <p className="mt-4 text-green-600 font-medium">
              Your booking request has been submitted successfully!
            </p>
          )}
          {status === "error" && (
            <p className="mt-4 text-red-600 font-medium">
              There was an error submitting your booking request. Please try
              again later.
            </p>
          )}
          </div>
        </div>
      </div>
    </section>
  );
}
