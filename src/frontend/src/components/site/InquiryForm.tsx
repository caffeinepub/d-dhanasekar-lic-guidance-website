import { useState } from 'react';
import { useSubmitInquiry } from '../../hooks/useSubmitInquiry';
import { Loader2, CheckCircle } from 'lucide-react';

export default function InquiryForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    policyInterest: '',
    message: '',
  });

  const { mutate: submitInquiry, isPending, isSuccess, isError, error } = useSubmitInquiry();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name.trim() || !formData.phone.trim()) {
      alert('Please fill in at least your name and phone number.');
      return;
    }

    submitInquiry(formData, {
      onSuccess: () => {
        // Reset form on success
        setFormData({
          name: '',
          phone: '',
          email: '',
          policyInterest: '',
          message: '',
        });
      },
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="rounded-lg border-2 border-gray-200 bg-white p-6 md:p-8">
      {isSuccess && (
        <div className="mb-6 flex items-center gap-3 rounded-lg bg-green-50 p-4 text-green-800">
          <CheckCircle className="h-6 w-6 flex-shrink-0" />
          <div>
            <p className="font-semibold">Thank you for your inquiry!</p>
            <p className="text-sm">We will contact you shortly.</p>
          </div>
        </div>
      )}

      {isError && (
        <div className="mb-6 rounded-lg bg-red-50 p-4 text-red-800">
          <p className="font-semibold">Error submitting inquiry</p>
          <p className="text-sm">{error?.message || 'Please try again later.'}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="mb-2 block font-semibold text-lic-text">
            Name <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full rounded-md border-2 border-gray-300 px-4 py-3 transition-colors focus:border-lic-primary focus:outline-none"
            placeholder="Your full name"
          />
        </div>

        <div>
          <label htmlFor="phone" className="mb-2 block font-semibold text-lic-text">
            Phone Number <span className="text-red-600">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full rounded-md border-2 border-gray-300 px-4 py-3 transition-colors focus:border-lic-primary focus:outline-none"
            placeholder="Your phone number"
          />
        </div>

        <div>
          <label htmlFor="email" className="mb-2 block font-semibold text-lic-text">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full rounded-md border-2 border-gray-300 px-4 py-3 transition-colors focus:border-lic-primary focus:outline-none"
            placeholder="Your email address"
          />
        </div>

        <div>
          <label htmlFor="policyInterest" className="mb-2 block font-semibold text-lic-text">
            Type of Policy Interested In
          </label>
          <select
            id="policyInterest"
            name="policyInterest"
            value={formData.policyInterest}
            onChange={handleChange}
            className="w-full rounded-md border-2 border-gray-300 px-4 py-3 transition-colors focus:border-lic-primary focus:outline-none"
          >
            <option value="">Select a policy type</option>
            <option value="Term Insurance">Term Insurance</option>
            <option value="Endowment Plans">Endowment Plans</option>
            <option value="Money Back Plans">Money Back Plans</option>
            <option value="Child Plans">Child Plans</option>
            <option value="Pension & Retirement Plans">Pension & Retirement Plans</option>
            <option value="ULIP Plans">ULIP Plans</option>
            <option value="Not Sure">Not Sure / Need Guidance</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="mb-2 block font-semibold text-lic-text">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="w-full rounded-md border-2 border-gray-300 px-4 py-3 transition-colors focus:border-lic-primary focus:outline-none"
            placeholder="Tell us about your requirements..."
          />
        </div>

        <button
          type="submit"
          disabled={isPending}
          className="w-full rounded-full bg-lic-primary px-8 py-4 text-lg font-semibold text-white transition-colors hover:bg-lic-primary/90 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {isPending ? (
            <span className="flex items-center justify-center gap-2">
              <Loader2 className="h-5 w-5 animate-spin" />
              Submitting...
            </span>
          ) : (
            'Submit Inquiry'
          )}
        </button>
      </form>
    </div>
  );
}
