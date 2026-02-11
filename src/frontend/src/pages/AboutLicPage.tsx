import { Shield, TrendingUp, Users, Award } from 'lucide-react';

export default function AboutLicPage() {
  return (
    <div className="bg-white">
      {/* Page Header with Overlay */}
      <section className="relative bg-lic-primary py-12">
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/10"></div>
        <div className="container relative mx-auto px-4">
          <h1 className="text-center text-4xl font-bold text-white md:text-5xl">About LIC</h1>
        </div>
      </section>

      {/* About LIC Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-6 text-3xl font-bold text-lic-text">
              Life Insurance Corporation of India
            </h2>
            <div className="space-y-4 text-lg leading-relaxed text-lic-text/80">
              <p>
                <strong className="text-lic-primary">Life Insurance Corporation of India (LIC)</strong> is India's largest and most trusted life insurance provider. 
                Established in 1956, LIC has been securing millions of Indian families with comprehensive life insurance protection and investment solutions.
              </p>
            </div>

            <div className="mt-8">
              <h3 className="mb-4 text-2xl font-semibold text-lic-text">LIC offers:</h3>
              <ul className="space-y-3 text-lg text-lic-text/80">
                <li className="flex items-start gap-3">
                  <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-lic-primary text-white">✓</span>
                  <span>Protection Plans</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-lic-primary text-white">✓</span>
                  <span>Savings & Investment Plans</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-lic-primary text-white">✓</span>
                  <span>Child Future Plans</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-lic-primary text-white">✓</span>
                  <span>Pension & Retirement Plans</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-lic-primary text-white">✓</span>
                  <span>Health Riders & Add-ons</span>
                </li>
              </ul>
            </div>

            <p className="mt-8 text-xl font-semibold text-lic-primary">
              LIC stands for trust, stability, and financial security.
            </p>
          </div>
        </div>
      </section>

      {/* History & Trust */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="mb-6 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-lic-primary">
                <Award className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-lic-text">LIC History & Trust</h2>
            </div>
            <div className="space-y-4 text-lg leading-relaxed text-lic-text/80">
              <p>
                Since its establishment in 1956, LIC has been the cornerstone of financial security for Indian families. 
                With over 65 years of dedicated service, LIC has built an unparalleled reputation for reliability and trustworthiness.
              </p>
              <p>
                As a government-backed institution, LIC provides the assurance and stability that families need when planning for their future. 
                Our commitment to policyholders has made us the preferred choice for generations of Indians.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="mb-6 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-lic-primary">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-lic-text">Mission & Values</h2>
            </div>
            <div className="space-y-4 text-lg leading-relaxed text-lic-text/80">
              <p>
                LIC's mission is to provide financial security to every Indian family through accessible and affordable life insurance products. 
                We believe in protecting the financial future of our policyholders and their loved ones.
              </p>
              <p>
                Our core values include integrity, customer-centricity, transparency, and social responsibility. 
                We are committed to serving the nation and contributing to India's economic growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why LIC is Reliable */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="mb-6 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-lic-primary">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-lic-text">Why LIC is Reliable</h2>
            </div>
            <div className="space-y-4 text-lg leading-relaxed text-lic-text/80">
              <p>
                LIC maintains one of the highest claim settlement ratios in the industry, ensuring that families receive the financial support they need when it matters most.
              </p>
              <p>
                With a vast network of branches and agents across India, LIC provides personalized service and support to policyholders in every corner of the country.
              </p>
              <p>
                Our financial strength and prudent investment strategies ensure that your premiums are managed responsibly, delivering consistent returns and guaranteed benefits.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Government Backing */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="mb-6 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-lic-primary">
                <Users className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-lic-text">Government-backed Credibility</h2>
            </div>
            <div className="space-y-4 text-lg leading-relaxed text-lic-text/80">
              <p>
                As a government-owned corporation, LIC offers unmatched security and peace of mind. 
                Your investments are backed by the Government of India, providing an additional layer of protection and trust.
              </p>
              <p>
                This government backing ensures that LIC remains committed to serving the public interest, 
                offering policies that are designed to benefit policyholders rather than maximize profits.
              </p>
              <p>
                Choose LIC for the confidence that comes with knowing your family's financial future is protected by India's most trusted institution.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
