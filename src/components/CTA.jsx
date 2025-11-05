import { ArrowRight, Phone } from 'lucide-react';

export default function CTA() {
  return (
    <section id="contact" className="relative py-20 sm:py-24">
      <div className="absolute inset-0 -z-0 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)] pointer-events-none">
        <div className="absolute inset-x-0 top-0 mx-auto h-64 max-w-3xl bg-gradient-to-r from-violet-600 via-fuchsia-500 to-orange-400 blur-3xl opacity-25" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-black/5 dark:border-white/10 bg-neutral-900 text-white dark:bg-neutral-900">
          <div className="grid lg:grid-cols-2">
            <div className="p-8 sm:p-12">
              <h3 className="text-2xl md:text-3xl font-bold">Bring AI to the bright side</h3>
              <p className="mt-3 text-neutral-300">
                Tell us about your goals and we’ll propose a fast, pragmatic roadmap to automate the right workflows first.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <a href="mailto:aryansingh8117@gmail.com" className="inline-flex items-center justify-center rounded-md bg-white text-neutral-900 px-6 py-3 font-medium shadow hover:opacity-90 transition">
                  aryansingh8117@gmail.com
                  <ArrowRight size={18} className="ml-2" />
                </a>
                <a href="tel:+919315692224" className="inline-flex items-center justify-center rounded-md border border-white/20 px-6 py-3 font-medium text-white hover:bg-white/10 transition">
                  <Phone size={18} className="mr-2" />
                  +91 93156 92224
                </a>
              </div>
              <p className="mt-3 text-xs text-neutral-400">Average kickoff in 7 days. Month-to-month engagement.</p>
            </div>
            <div className="relative p-8 sm:p-12 bg-gradient-to-br from-violet-600/20 via-fuchsia-500/10 to-orange-400/20">
              <ul className="space-y-4 text-sm">
                {[
                  'Free assessment of your current stack',
                  'Security-first architecture & guardrails',
                  'Pilot in 2–4 weeks with measurable KPIs',
                  'Ongoing optimization & reporting',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-white/90 text-neutral-900">•</span>
                    <span className="text-neutral-100/90">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
