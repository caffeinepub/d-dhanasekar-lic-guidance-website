import { Link } from '@tanstack/react-router';
import { Phone, MessageCircle, Shield, TrendingUp, Users, Award, FileText, Heart } from 'lucide-react';
import { getPhoneLink, getWhatsAppLink } from '../lib/contactLinks';

export default function HomePage() {
  return (
    <div className="bg-white">
      {/* Hero Section with Overlay */}
      <section className="relative bg-lic-primary py-16 md:py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/10"></div>
        <div className="container relative mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
              Secure Your Family's Future with Trusted LIC Policies
            </h1>
            <p className="mb-8 text-xl text-white/95 md:text-2xl">
              Expert guidance from D. Dhanasekar – Development Officer, Villupuram
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href={getPhoneLink()}
                className="inline-flex items-center gap-2 rounded-full bg-lic-accent px-8 py-4 text-lg font-semibold text-lic-primary transition-transform hover:scale-105"
              >
                <Phone className="h-5 w-5" />
                Call Now – 9095077994
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full border-2 border-white bg-transparent px-8 py-4 text-lg font-semibold text-white transition-colors hover:bg-white hover:text-lic-primary"
              >
                <MessageCircle className="h-5 w-5" />
                Get Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-6 text-center text-3xl font-bold text-lic-text md:text-4xl">
              Your Trusted LIC Partner in Villupuram
            </h2>
            <div className="space-y-4 text-lg leading-relaxed text-lic-text/80">
              <p>
                I am <strong className="text-lic-primary">D. Dhanasekar</strong>, a dedicated LIC Development Officer serving Villupuram. 
                I help individuals and families choose the right insurance policy based on their financial goals and protection needs.
              </p>
              <p>
                Whether you need life protection, child education planning, retirement solutions, or savings schemes — 
                I provide personalized guidance to help you make informed decisions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose LIC */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-lic-text md:text-4xl">
            Why Choose LIC?
          </h2>
          <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-lic-primary">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-lic-text">Government-backed trust</h3>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-lic-primary">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-lic-text">65+ years of reliability</h3>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-lic-primary">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-lic-text">High claim settlement ratio</h3>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-lic-primary">
                <FileText className="h-8 w-8 text-white" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-lic-text">Comprehensive policy options</h3>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-lic-primary">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-lic-text">Long-term wealth creation</h3>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-lic-primary">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-lic-text">Trusted by millions</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Policy Categories Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-lic-text md:text-4xl">
            Explore Our Policy Categories
          </h2>
          <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Link
              to="/policies"
              hash="term-insurance"
              className="group rounded-lg border-2 border-gray-200 bg-white p-6 transition-all hover:border-lic-primary hover:shadow-lg"
            >
              <h3 className="mb-2 text-xl font-semibold text-lic-primary group-hover:text-lic-accent">
                Term Insurance Plans
              </h3>
              <p className="text-lic-text/70">Pure protection at affordable premiums</p>
            </Link>
            <Link
              to="/policies"
              hash="endowment"
              className="group rounded-lg border-2 border-gray-200 bg-white p-6 transition-all hover:border-lic-primary hover:shadow-lg"
            >
              <h3 className="mb-2 text-xl font-semibold text-lic-primary group-hover:text-lic-accent">
                Endowment Plans
              </h3>
              <p className="text-lic-text/70">Insurance plus savings combined</p>
            </Link>
            <Link
              to="/policies"
              hash="money-back"
              className="group rounded-lg border-2 border-gray-200 bg-white p-6 transition-all hover:border-lic-primary hover:shadow-lg"
            >
              <h3 className="mb-2 text-xl font-semibold text-lic-primary group-hover:text-lic-accent">
                Money Back Plans
              </h3>
              <p className="text-lic-text/70">Regular payouts during policy term</p>
            </Link>
            <Link
              to="/policies"
              hash="child-plans"
              className="group rounded-lg border-2 border-gray-200 bg-white p-6 transition-all hover:border-lic-primary hover:shadow-lg"
            >
              <h3 className="mb-2 text-xl font-semibold text-lic-primary group-hover:text-lic-accent">
                Child Plans
              </h3>
              <p className="text-lic-text/70">Secure your child's education and future</p>
            </Link>
            <Link
              to="/policies"
              hash="pension"
              className="group rounded-lg border-2 border-gray-200 bg-white p-6 transition-all hover:border-lic-primary hover:shadow-lg"
            >
              <h3 className="mb-2 text-xl font-semibold text-lic-primary group-hover:text-lic-accent">
                Pension & Retirement Plans
              </h3>
              <p className="text-lic-text/70">Build retirement corpus with guaranteed income</p>
            </Link>
            <Link
              to="/policies"
              hash="ulip"
              className="group rounded-lg border-2 border-gray-200 bg-white p-6 transition-all hover:border-lic-primary hover:shadow-lg"
            >
              <h3 className="mb-2 text-xl font-semibold text-lic-primary group-hover:text-lic-accent">
                ULIP Plans
              </h3>
              <p className="text-lic-text/70">Market-linked investment with life cover</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Contact CTA */}
      <section className="relative bg-lic-primary py-16">
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        <div className="container relative mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
              Ready to Secure Your Family's Future?
            </h2>
            <p className="mb-8 text-xl text-white/95">
              Get personalized policy guidance today
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href={getPhoneLink()}
                className="inline-flex items-center gap-2 rounded-full bg-lic-accent px-8 py-4 text-lg font-semibold text-lic-primary transition-transform hover:scale-105"
              >
                <Phone className="h-5 w-5" />
                Call 9095077994
              </a>
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border-2 border-white bg-transparent px-8 py-4 text-lg font-semibold text-white transition-colors hover:bg-white hover:text-lic-primary"
              >
                <MessageCircle className="h-5 w-5" />
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
