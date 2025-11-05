import { Bot, Headphones, Settings, Rocket, CheckCircle2, Gauge } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    icon: Bot,
    title: 'AI Voice Agents',
    desc: '24/7 autonomous voice agents for inbound and outbound calls. Bookings, lead qualification, and follow-ups handled automatically.',
    bullets: ['Natural speech', 'CRM integration', 'Analytics dashboard'],
  },
  {
    icon: Headphones,
    title: 'Support Automation',
    desc: 'Deflect tickets and resolve issues instantly with AI that understands your docs, product, and tone of voice.',
    bullets: ['Omnichannel', 'Secure & compliant', 'Human handoff'],
  },
  {
    icon: Settings,
    title: 'Workflow Orchestration',
    desc: 'Connect your stack and automate repetitive work: enrichment, routing, summaries, and reporting.',
    bullets: ['Zapier/Make/HubSpot', 'Custom APIs', 'QA & monitoring'],
  },
  {
    icon: Rocket,
    title: 'Go-to-Market Boost',
    desc: 'Outbound sequencing with AI personalization to increase meetings booked and shorten sales cycles.',
    bullets: ['Multi-channel', 'Personalized at scale', 'Compliance ready'],
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-20 sm:py-28 bg-gradient-to-b from-white to-neutral-50 dark:from-neutral-950 dark:to-neutral-900/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">Solutions that ship results</h2>
          <p className="mt-4 text-neutral-600 dark:text-neutral-300">
            We design, build, and maintain automation systems that measurably reduce costs and unlock new revenue.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ icon: Icon, title, desc, bullets }, idx) => (
            <motion.div
              key={title}
              className="group relative rounded-2xl border border-black/5 dark:border-white/10 bg-white/70 dark:bg-neutral-900/60 backdrop-blur p-6 hover:shadow-xl transition-shadow overflow-hidden"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.05 * idx }}
            >
              <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-gradient-to-tr from-violet-600/10 via-fuchsia-500/10 to-orange-400/10 blur-2xl" />
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-tr from-violet-600 via-fuchsia-500 to-orange-400 text-white shadow-sm">
                <Icon size={18} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-neutral-900 dark:text-white">{title}</h3>
              <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">{desc}</p>
              <ul className="mt-4 space-y-2 text-sm text-neutral-700 dark:text-neutral-200">
                {bullets.map((b) => (
                  <li key={b} className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-violet-600" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-start gap-3 rounded-2xl border border-black/5 dark:border-white/10 bg-white/70 dark:bg-neutral-900/60 backdrop-blur p-6 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3 text-neutral-700 dark:text-neutral-200">
            <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-neutral-900 text-white dark:bg-white dark:text-neutral-900">
              <Gauge size={16} />
            </div>
            <p>
              Typical pilots launch in 2–4 weeks with <span className="font-semibold">30–60% cost savings</span>.
            </p>
          </div>
          <a href="#contact" className="inline-flex items-center rounded-lg bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 px-4 py-2 text-sm font-medium shadow-sm hover:opacity-90 transition">
            Book a discovery call
          </a>
        </div>
      </div>
    </section>
  );
}
