import { Phone, TrendingUp, Users, Award, Briefcase, GraduationCap, CheckCircle } from 'lucide-react';
import { getPhoneLink } from '../lib/contactLinks';
import AgentApplicationForm from '../components/site/AgentApplicationForm';

export default function JoinAsAgentPage() {
  return (
    <div className="bg-white">
      {/* Hero Section with Overlay */}
      <section className="relative bg-lic-primary py-16 md:py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/10"></div>
        <div className="container relative mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
              Build Your Career as an LIC Agent
            </h1>
            <p className="mb-8 text-xl text-white/95 md:text-2xl">
              Join India's most trusted life insurance company and help families secure their future
            </p>
            <a
              href={getPhoneLink()}
              className="inline-flex items-center gap-2 rounded-full bg-lic-accent px-8 py-4 text-lg font-semibold text-lic-primary transition-transform hover:scale-105"
            >
              <Phone className="h-5 w-5" />
              Call Now – 9095077994
            </a>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-6 text-3xl font-bold text-lic-text md:text-4xl">
              Why Become an LIC Agent?
            </h2>
            <p className="text-lg leading-relaxed text-lic-text/80">
              As an LIC Development Officer, you'll represent India's largest and most trusted life insurance provider. 
              Build a rewarding career helping families protect their financial future while earning attractive income and incentives.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-lic-text md:text-4xl">
            Benefits of Joining LIC
          </h2>
          <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-center rounded-lg bg-white p-6 text-center shadow-sm">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-lic-primary">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-lic-text">Attractive Income</h3>
              <p className="text-lic-text/70">
                Earn competitive commissions and performance-based incentives with unlimited earning potential
              </p>
            </div>

            <div className="flex flex-col items-center rounded-lg bg-white p-6 text-center shadow-sm">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-lic-primary">
                <Briefcase className="h-8 w-8 text-white" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-lic-text">Flexible Work Schedule</h3>
              <p className="text-lic-text/70">
                Work at your own pace and manage your time effectively while building your client base
              </p>
            </div>

            <div className="flex flex-col items-center rounded-lg bg-white p-6 text-center shadow-sm">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-lic-primary">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-lic-text">Recognition & Rewards</h3>
              <p className="text-lic-text/70">
                Receive awards, bonuses, and recognition for outstanding performance and achievements
              </p>
            </div>

            <div className="flex flex-col items-center rounded-lg bg-white p-6 text-center shadow-sm">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-lic-primary">
                <GraduationCap className="h-8 w-8 text-white" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-lic-text">Comprehensive Training</h3>
              <p className="text-lic-text/70">
                Get professional training and ongoing support to develop your skills and product knowledge
              </p>
            </div>

            <div className="flex flex-col items-center rounded-lg bg-white p-6 text-center shadow-sm">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-lic-primary">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-lic-text">Build Your Network</h3>
              <p className="text-lic-text/70">
                Expand your professional network and create lasting relationships in your community
              </p>
            </div>

            <div className="flex flex-col items-center rounded-lg bg-white p-6 text-center shadow-sm">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-lic-primary">
                <CheckCircle className="h-8 w-8 text-white" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-lic-text">Job Security</h3>
              <p className="text-lic-text/70">
                Work with a government-backed institution offering stability and long-term career prospects
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-center text-3xl font-bold text-lic-text md:text-4xl">
              Eligibility Criteria
            </h2>
            <div className="rounded-lg border-2 border-gray-200 bg-white p-8">
              <ul className="space-y-4 text-lg">
                <li className="flex items-start gap-3">
                  <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-lic-primary text-sm text-white">✓</span>
                  <span className="text-lic-text/80">
                    <strong className="text-lic-text">Age:</strong> Minimum 18 years old
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-lic-primary text-sm text-white">✓</span>
                  <span className="text-lic-text/80">
                    <strong className="text-lic-text">Education:</strong> Minimum 10th standard pass (12th preferred)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-lic-primary text-sm text-white">✓</span>
                  <span className="text-lic-text/80">
                    <strong className="text-lic-text">Communication:</strong> Good communication skills in local language
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-lic-primary text-sm text-white">✓</span>
                  <span className="text-lic-text/80">
                    <strong className="text-lic-text">Commitment:</strong> Willingness to learn and help people secure their future
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-lic-primary text-sm text-white">✓</span>
                  <span className="text-lic-text/80">
                    <strong className="text-lic-text">Background:</strong> No prior experience required – we provide complete training
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-center text-3xl font-bold text-lic-text md:text-4xl">
              What You'll Need
            </h2>
            <div className="rounded-lg border-2 border-gray-200 bg-white p-8">
              <ul className="space-y-4 text-lg">
                <li className="flex items-start gap-3">
                  <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-lic-primary text-sm text-white">✓</span>
                  <span className="text-lic-text/80">
                    Valid government-issued ID proof (Aadhaar, PAN, etc.)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-lic-primary text-sm text-white">✓</span>
                  <span className="text-lic-text/80">
                    Educational certificates (10th/12th mark sheets)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-lic-primary text-sm text-white">✓</span>
                  <span className="text-lic-text/80">
                    Recent passport-size photographs
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-lic-primary text-sm text-white">✓</span>
                  <span className="text-lic-text/80">
                    Bank account details for commission payments
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-lic-primary text-sm text-white">✓</span>
                  <span className="text-lic-text/80">
                    Complete the mandatory IRDA certification exam (we'll guide you through this)
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-4 text-center text-3xl font-bold text-lic-text md:text-4xl">
              Apply Now
            </h2>
            <p className="mb-8 text-center text-lg text-lic-text/80">
              Take the first step towards a rewarding career with LIC. Fill out the form below and we'll contact you with next steps.
            </p>
            <AgentApplicationForm />
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="relative bg-lic-primary py-16">
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        <div className="container relative mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
              Have Questions?
            </h2>
            <p className="mb-8 text-xl text-white/95">
              Call us today to learn more about becoming an LIC agent
            </p>
            <a
              href={getPhoneLink()}
              className="inline-flex items-center gap-2 rounded-full bg-lic-accent px-8 py-4 text-lg font-semibold text-lic-primary transition-transform hover:scale-105"
            >
              <Phone className="h-5 w-5" />
              Call 9095077994
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
