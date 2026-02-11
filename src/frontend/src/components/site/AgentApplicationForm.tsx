import { useState } from 'react';
import { useSubmitAgentApplication } from '../../hooks/useSubmitAgentApplication';
import { Loader2, CheckCircle } from 'lucide-react';

export default function AgentApplicationForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    age: '',
    location: '',
    notes: '',
  });

  const { mutate: submitApplication, isPending, isSuccess, isError, error } = useSubmitAgentApplication();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name.trim() || !formData.phone.trim() || !formData.age.trim()) {
      alert('Please fill in your name, phone number, and age.');
      return;
    }

    const age = parseInt(formData.age, 10);
    if (isNaN(age) || age < 18) {
      alert('You must be at least 18 years old to apply.');
      return;
    }

    // Email validation
    if (formData.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      alert('Please enter a valid email address.');
      return;
    }

    submitApplication(
      {
        name: formData.name.trim(),
        phone: formData.phone.trim(),
        email: formData.email.trim(),
        age: BigInt(age),
        location: formData.location.trim(),
        notes: formData.notes.trim(),
      },
      {
        onSuccess: () => {
          // Reset form on success
          setFormData({
            name: '',
            phone: '',
            email: '',
            age: '',
            location: '',
            notes: '',
          });
        },
      }
    );
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
            <p className="font-semibold">Application submitted successfully!</p>
            <p className="text-sm">We will contact you shortly to discuss the next steps.</p>
          </div>
        </div>
      )}

      {isError && (
        <div className="mb-6 rounded-lg bg-red-50 p-4 text-red-800">
          <p className="font-semibold">Error submitting application</p>
          <p className="text-sm">{error?.message || 'Please try again later.'}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="mb-2 block font-semibold text-lic-text">
            Full Name <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            disabled={isPending || isSuccess}
            className="w-full rounded-md border-2 border-gray-300 px-4 py-3 transition-colors focus:border-lic-primary focus:outline-none disabled:bg-gray-100 disabled:cursor-not-allowed"
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
            disabled={isPending || isSuccess}
            className="w-full rounded-md border-2 border-gray-300 px-4 py-3 transition-colors focus:border-lic-primary focus:outline-none disabled:bg-gray-100 disabled:cursor-not-allowed"
            placeholder="Your phone number"
          />
        </div>

        <div>
          <label htmlFor="email" className="mb-2 block font-semibold text-lic-text">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            disabled={isPending || isSuccess}
            className="w-full rounded-md border-2 border-gray-300 px-4 py-3 transition-colors focus:border-lic-primary focus:outline-none disabled:bg-gray-100 disabled:cursor-not-allowed"
            placeholder="Your email address"
          />
        </div>

        <div>
          <label htmlFor="age" className="mb-2 block font-semibold text-lic-text">
            Age <span className="text-red-600">*</span>
          </label>
          <input
            type="number"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
            min="18"
            disabled={isPending || isSuccess}
            className="w-full rounded-md border-2 border-gray-300 px-4 py-3 transition-colors focus:border-lic-primary focus:outline-none disabled:bg-gray-100 disabled:cursor-not-allowed"
            placeholder="Your age"
          />
        </div>

        <div>
          <label htmlFor="location" className="mb-2 block font-semibold text-lic-text">
            Location / City
          </label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            disabled={isPending || isSuccess}
            className="w-full rounded-md border-2 border-gray-300 px-4 py-3 transition-colors focus:border-lic-primary focus:outline-none disabled:bg-gray-100 disabled:cursor-not-allowed"
            placeholder="Your city or location"
          />
        </div>

        <div>
          <label htmlFor="notes" className="mb-2 block font-semibold text-lic-text">
            Additional Information
          </label>
          <textarea
            id="notes"
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            rows={4}
            disabled={isPending || isSuccess}
            className="w-full rounded-md border-2 border-gray-300 px-4 py-3 transition-colors focus:border-lic-primary focus:outline-none disabled:bg-gray-100 disabled:cursor-not-allowed"
            placeholder="Tell us about your background, experience, or any questions you have..."
          />
        </div>

        <button
          type="submit"
          disabled={isPending || isSuccess}
          className="w-full rounded-full bg-lic-primary px-8 py-4 text-lg font-semibold text-white transition-colors hover:bg-lic-primary/90 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {isPending ? (
            <span className="flex items-center justify-center gap-2">
              <Loader2 className="h-5 w-5 animate-spin" />
              Submitting...
            </span>
          ) : isSuccess ? (
            'Application Submitted'
          ) : (
            'Submit Application'
          )}
        </button>
      </form>
    </div>
  );
}
