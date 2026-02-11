import { Phone, MapPin, Briefcase, User, MessageCircle } from 'lucide-react';
import { getPhoneLink, getWhatsAppLink } from '../lib/contactLinks';
import InquiryForm from '../components/site/InquiryForm';
import VillupuramMapEmbed from '../components/site/VillupuramMapEmbed';

export default function ContactPage() {
  return (
    <div className="bg-white">
      {/* Page Header with Overlay */}
      <section className="relative bg-lic-primary py-12">
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/10"></div>
        <div className="container relative mx-auto px-4">
          <h1 className="text-center text-4xl font-bold text-white md:text-5xl">Contact Us</h1>
          <p className="mt-4 text-center text-xl text-white/95">
            Get in touch for personalized LIC guidance
          </p>
        </div>
      </section>

      {/* Contact Details Cards */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col items-center rounded-lg border-2 border-gray-200 bg-white p-6 text-center">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-lic-primary">
                <User className="h-6 w-6 text-white" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-lic-text">Name</h3>
              <p className="text-lic-text/80">D. Dhanasekar</p>
            </div>

            <div className="flex flex-col items-center rounded-lg border-2 border-gray-200 bg-white p-6 text-center">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-lic-primary">
                <Briefcase className="h-6 w-6 text-white" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-lic-text">Designation</h3>
              <p className="text-lic-text/80">LIC Development Officer</p>
            </div>

            <div className="flex flex-col items-center rounded-lg border-2 border-gray-200 bg-white p-6 text-center">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-lic-primary">
                <MapPin className="h-6 w-6 text-white" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-lic-text">Location</h3>
              <p className="text-lic-text/80">Villupuram</p>
            </div>

            <div className="flex flex-col items-center rounded-lg border-2 border-gray-200 bg-white p-6 text-center">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-lic-primary">
                <Phone className="h-6 w-6 text-white" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-lic-text">Phone</h3>
              <a href={getPhoneLink()} className="text-lic-primary hover:text-lic-accent">
                9095077994
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Buttons */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold text-lic-text">
              Ready to Get Started?
            </h2>
            <p className="mb-8 text-lg text-lic-text/80">
              Contact us today for expert LIC policy guidance
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href={getPhoneLink()}
                className="inline-flex items-center gap-2 rounded-full bg-lic-primary px-8 py-4 text-lg font-semibold text-white transition-transform hover:scale-105"
              >
                <Phone className="h-5 w-5" />
                Call 9095077994
              </a>
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-green-600 px-8 py-4 text-lg font-semibold text-white transition-transform hover:scale-105"
              >
                <MessageCircle className="h-5 w-5" />
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-4 text-center text-3xl font-bold text-lic-text">
              Send Us an Inquiry
            </h2>
            <p className="mb-8 text-center text-lg text-lic-text/80">
              Fill out the form below and we'll get back to you shortly
            </p>
            <InquiryForm />
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl">
            <h2 className="mb-8 text-center text-3xl font-bold text-lic-text">
              Find Us in Villupuram
            </h2>
            <VillupuramMapEmbed />
          </div>
        </div>
      </section>
    </div>
  );
}
