import { Phone } from 'lucide-react';
import { getPhoneLink } from '../lib/contactLinks';

export default function PolicyDetailsPage() {
  return (
    <div className="bg-white">
      {/* Page Header with Overlay */}
      <section className="relative bg-lic-primary py-12">
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/10"></div>
        <div className="container relative mx-auto px-4">
          <h1 className="text-center text-4xl font-bold text-white md:text-5xl">Policy Details</h1>
          <p className="mt-4 text-center text-xl text-white/95">
            Choose the right LIC policy for your needs
          </p>
        </div>
      </section>

      {/* Call CTA at top */}
      <section className="border-b-2 border-lic-accent bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center gap-4 text-center">
            <p className="text-lg font-semibold text-lic-text">
              Need help choosing the right policy?
            </p>
            <a
              href={getPhoneLink()}
              className="inline-flex items-center gap-2 rounded-full bg-lic-accent px-8 py-3 text-lg font-semibold text-lic-primary transition-transform hover:scale-105"
            >
              <Phone className="h-5 w-5" />
              Call Now – 9095077994
            </a>
          </div>
        </div>
      </section>

      {/* Term Insurance Plans */}
      <section id="term-insurance" className="scroll-mt-20 py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-6 text-3xl font-bold text-lic-primary">1️⃣ Term Insurance Plans</h2>
            <p className="mb-6 text-lg leading-relaxed text-lic-text/80">
              Pure protection plans offering high coverage at affordable premiums. Ideal for income earners securing their family's future.
            </p>
            
            <div className="mb-6">
              <h3 className="mb-3 text-xl font-semibold text-lic-text">Benefits:</h3>
              <ul className="space-y-2 text-lg text-lic-text/80">
                <li className="flex items-start gap-3">
                  <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-lic-primary text-sm text-white">✓</span>
                  <span>High sum assured at low premium</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-lic-primary text-sm text-white">✓</span>
                  <span>Financial protection for your family</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-lic-primary text-sm text-white">✓</span>
                  <span>Tax benefits under Section 80C</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-lic-primary text-sm text-white">✓</span>
                  <span>Optional riders for enhanced coverage</span>
                </li>
              </ul>
            </div>

            <div className="mb-6 rounded-lg bg-gray-50 p-4">
              <h3 className="mb-2 text-xl font-semibold text-lic-text">Ideal for:</h3>
              <p className="text-lg text-lic-text/80">
                Salaried individuals, business owners, and primary income earners seeking maximum protection at minimal cost.
              </p>
            </div>

            <a
              href={getPhoneLink()}
              className="inline-flex items-center gap-2 rounded-full bg-lic-primary px-6 py-3 font-semibold text-white transition-colors hover:bg-lic-primary/90"
            >
              <Phone className="h-5 w-5" />
              Call to Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Endowment Plans */}
      <section id="endowment" className="scroll-mt-20 bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-6 text-3xl font-bold text-lic-primary">2️⃣ Endowment Plans</h2>
            <p className="mb-6 text-lg leading-relaxed text-lic-text/80">
              Combination of insurance and savings, providing maturity benefits along with life cover.
            </p>
            
            <div className="mb-6">
              <h3 className="mb-3 text-xl font-semibold text-lic-text">Benefits:</h3>
              <ul className="space-y-2 text-lg text-lic-text/80">
                <li className="flex items-start gap-3">
                  <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-lic-primary text-sm text-white">✓</span>
                  <span>Life insurance protection plus savings</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-lic-primary text-sm text-white">✓</span>
                  <span>Guaranteed maturity benefits</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-lic-primary text-sm text-white">✓</span>
                  <span>Bonus accumulation over policy term</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-lic-primary text-sm text-white">✓</span>
                  <span>Loan facility against policy value</span>
                </li>
              </ul>
            </div>

            <div className="mb-6 rounded-lg bg-white p-4">
              <h3 className="mb-2 text-xl font-semibold text-lic-text">Ideal for:</h3>
              <p className="text-lg text-lic-text/80">
                Individuals seeking both protection and disciplined savings for future goals like marriage, education, or home purchase.
              </p>
            </div>

            <a
              href={getPhoneLink()}
              className="inline-flex items-center gap-2 rounded-full bg-lic-primary px-6 py-3 font-semibold text-white transition-colors hover:bg-lic-primary/90"
            >
              <Phone className="h-5 w-5" />
              Call to Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Money Back Plans */}
      <section id="money-back" className="scroll-mt-20 py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-6 text-3xl font-bold text-lic-primary">3️⃣ Money Back Plans</h2>
            <p className="mb-6 text-lg leading-relaxed text-lic-text/80">
              Regular payouts during the policy term along with maturity benefits.
            </p>
            
            <div className="mb-6">
              <h3 className="mb-3 text-xl font-semibold text-lic-text">Benefits:</h3>
              <ul className="space-y-2 text-lg text-lic-text/80">
                <li className="flex items-start gap-3">
                  <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-lic-primary text-sm text-white">✓</span>
                  <span>Periodic survival benefits during policy term</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-lic-primary text-sm text-white">✓</span>
                  <span>Life cover throughout the policy period</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-lic-primary text-sm text-white">✓</span>
                  <span>Maturity benefit at the end of term</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-lic-primary text-sm text-white">✓</span>
                  <span>Bonus additions for enhanced returns</span>
                </li>
              </ul>
            </div>

            <div className="mb-6 rounded-lg bg-gray-50 p-4">
              <h3 className="mb-2 text-xl font-semibold text-lic-text">Ideal for:</h3>
              <p className="text-lg text-lic-text/80">
                Those needing regular liquidity for periodic financial needs while maintaining life insurance protection.
              </p>
            </div>

            <a
              href={getPhoneLink()}
              className="inline-flex items-center gap-2 rounded-full bg-lic-primary px-6 py-3 font-semibold text-white transition-colors hover:bg-lic-primary/90"
            >
              <Phone className="h-5 w-5" />
              Call to Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Child Plans */}
      <section id="child-plans" className="scroll-mt-20 bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-6 text-3xl font-bold text-lic-primary">4️⃣ Child Plans</h2>
            <p className="mb-6 text-lg leading-relaxed text-lic-text/80">
              Secure your child's education and future milestones.
            </p>
            
            <div className="mb-6">
              <h3 className="mb-3 text-xl font-semibold text-lic-text">Benefits:</h3>
              <ul className="space-y-2 text-lg text-lic-text/80">
                <li className="flex items-start gap-3">
                  <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-lic-primary text-sm text-white">✓</span>
                  <span>Guaranteed funds for child's education</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-lic-primary text-sm text-white">✓</span>
                  <span>Premium waiver in case of parent's demise</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-lic-primary text-sm text-white">✓</span>
                  <span>Maturity benefits at key milestones</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-lic-primary text-sm text-white">✓</span>
                  <span>Flexible payout options</span>
                </li>
              </ul>
            </div>

            <div className="mb-6 rounded-lg bg-white p-4">
              <h3 className="mb-2 text-xl font-semibold text-lic-text">Ideal for:</h3>
              <p className="text-lg text-lic-text/80">
                Parents ensuring their child's education and future dreams are financially secure, regardless of life's uncertainties.
              </p>
            </div>

            <a
              href={getPhoneLink()}
              className="inline-flex items-center gap-2 rounded-full bg-lic-primary px-6 py-3 font-semibold text-white transition-colors hover:bg-lic-primary/90"
            >
              <Phone className="h-5 w-5" />
              Call to Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Pension & Retirement Plans */}
      <section id="pension" className="scroll-mt-20 py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-6 text-3xl font-bold text-lic-primary">5️⃣ Pension & Retirement Plans</h2>
            <p className="mb-6 text-lg leading-relaxed text-lic-text/80">
              Build a retirement corpus and enjoy guaranteed pension income after retirement.
            </p>
            
            <div className="mb-6">
              <h3 className="mb-3 text-xl font-semibold text-lic-text">Benefits:</h3>
              <ul className="space-y-2 text-lg text-lic-text/80">
                <li className="flex items-start gap-3">
                  <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-lic-primary text-sm text-white">✓</span>
                  <span>Regular pension income after retirement</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-lic-primary text-sm text-white">✓</span>
                  <span>Lump sum corpus at vesting age</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-lic-primary text-sm text-white">✓</span>
                  <span>Tax benefits on contributions</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-lic-primary text-sm text-white">✓</span>
                  <span>Multiple annuity options available</span>
                </li>
              </ul>
            </div>

            <div className="mb-6 rounded-lg bg-gray-50 p-4">
              <h3 className="mb-2 text-xl font-semibold text-lic-text">Ideal for:</h3>
              <p className="text-lg text-lic-text/80">
                Working professionals building a substantial retirement corpus to ensure financial independence in their golden years.
              </p>
            </div>

            <a
              href={getPhoneLink()}
              className="inline-flex items-center gap-2 rounded-full bg-lic-primary px-6 py-3 font-semibold text-white transition-colors hover:bg-lic-primary/90"
            >
              <Phone className="h-5 w-5" />
              Call to Learn More
            </a>
          </div>
        </div>
      </section>

      {/* ULIP Plans */}
      <section id="ulip" className="scroll-mt-20 bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-6 text-3xl font-bold text-lic-primary">6️⃣ ULIP Plans</h2>
            <p className="mb-6 text-lg leading-relaxed text-lic-text/80">
              Market-linked insurance plans providing investment growth opportunities along with life cover.
            </p>
            
            <div className="mb-6">
              <h3 className="mb-3 text-xl font-semibold text-lic-text">Benefits:</h3>
              <ul className="space-y-2 text-lg text-lic-text/80">
                <li className="flex items-start gap-3">
                  <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-lic-primary text-sm text-white">✓</span>
                  <span>Dual benefit of insurance and investment</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-lic-primary text-sm text-white">✓</span>
                  <span>Potential for higher returns through market exposure</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-lic-primary text-sm text-white">✓</span>
                  <span>Flexibility to switch between funds</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-lic-primary text-sm text-white">✓</span>
                  <span>Tax benefits under Section 80C</span>
                </li>
              </ul>
            </div>

            <div className="mb-6 rounded-lg bg-white p-4">
              <h3 className="mb-2 text-xl font-semibold text-lic-text">Ideal for:</h3>
              <p className="text-lg text-lic-text/80">
                Investors seeking wealth creation through market-linked returns while maintaining life insurance protection for their family.
              </p>
            </div>

            <a
              href={getPhoneLink()}
              className="inline-flex items-center gap-2 rounded-full bg-lic-primary px-6 py-3 font-semibold text-white transition-colors hover:bg-lic-primary/90"
            >
              <Phone className="h-5 w-5" />
              Call to Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="relative border-t-2 border-lic-accent bg-lic-primary py-12">
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        <div className="container relative mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-white">
              Ready to Choose the Right Policy?
            </h2>
            <p className="mb-6 text-xl text-white/95">
              Call now for personalized guidance
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
    </div>
  );
}
