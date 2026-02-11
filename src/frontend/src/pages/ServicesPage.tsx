import { FileText, Users, TrendingUp, Shield, Heart, Briefcase, HelpCircle } from 'lucide-react';

export default function ServicesPage() {
  return (
    <div className="bg-white">
      {/* Page Header with Overlay */}
      <section className="relative bg-lic-primary py-12">
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/10"></div>
        <div className="container relative mx-auto px-4">
          <h1 className="text-center text-4xl font-bold text-white md:text-5xl">Our Services</h1>
          <p className="mt-4 text-center text-xl text-white/95">
            Comprehensive LIC services for your financial security
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Service 1 */}
            <div className="rounded-lg border-2 border-gray-200 bg-white p-6 transition-all hover:border-lic-primary hover:shadow-lg">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-lic-primary">
                <FileText className="h-6 w-6 text-white" />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-lic-text">Policy Consultation</h3>
              <p className="text-lic-text/70">
                Expert guidance to help you choose the right LIC policy based on your financial goals and family needs.
              </p>
            </div>

            {/* Service 2 */}
            <div className="rounded-lg border-2 border-gray-200 bg-white p-6 transition-all hover:border-lic-primary hover:shadow-lg">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-lic-primary">
                <Users className="h-6 w-6 text-white" />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-lic-text">New Policy Purchase</h3>
              <p className="text-lic-text/70">
                Assistance with purchasing new LIC policies with complete documentation support and guidance.
              </p>
            </div>

            {/* Service 3 */}
            <div className="rounded-lg border-2 border-gray-200 bg-white p-6 transition-all hover:border-lic-primary hover:shadow-lg">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-lic-primary">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-lic-text">Premium Payment Support</h3>
              <p className="text-lic-text/70">
                Help with premium payments, reminders, and ensuring your policy remains active and in good standing.
              </p>
            </div>

            {/* Service 4 */}
            <div className="rounded-lg border-2 border-gray-200 bg-white p-6 transition-all hover:border-lic-primary hover:shadow-lg">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-lic-primary">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-lic-text">Claim Assistance</h3>
              <p className="text-lic-text/70">
                Complete support for claim processing, documentation, and ensuring timely settlement for your family.
              </p>
            </div>

            {/* Service 5 */}
            <div className="rounded-lg border-2 border-gray-200 bg-white p-6 transition-all hover:border-lic-primary hover:shadow-lg">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-lic-primary">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-lic-text">Policy Revival</h3>
              <p className="text-lic-text/70">
                Assistance with reviving lapsed policies and restoring your insurance coverage with minimal hassle.
              </p>
            </div>

            {/* Service 6 */}
            <div className="rounded-lg border-2 border-gray-200 bg-white p-6 transition-all hover:border-lic-primary hover:shadow-lg">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-lic-primary">
                <Briefcase className="h-6 w-6 text-white" />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-lic-text">Loan Facility</h3>
              <p className="text-lic-text/70">
                Guidance on availing loans against your LIC policy for emergency financial needs.
              </p>
            </div>

            {/* Service 7 */}
            <div className="rounded-lg border-2 border-gray-200 bg-white p-6 transition-all hover:border-lic-primary hover:shadow-lg">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-lic-primary">
                <HelpCircle className="h-6 w-6 text-white" />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-lic-text">Policy Review & Updates</h3>
              <p className="text-lic-text/70">
                Regular policy reviews, nominee updates, address changes, and other administrative support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Closing Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-lic-text">
              Committed to Your Financial Security
            </h2>
            <p className="text-lg leading-relaxed text-lic-text/80">
              As your dedicated LIC Development Officer, I provide personalized service and ongoing support 
              to ensure your insurance needs are met with professionalism and care. Your family's financial 
              security is my priority.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
