import Spline from '@splinetool/react-spline';
import { ArrowRight, Shield, Sparkles, Star } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative" aria-labelledby="hero-title">
      <div className="absolute inset-0 pointer-events-none [mask-image:radial-gradient(80%_60%_at_50%_0%,black,transparent)]">
        <div className="absolute inset-x-0 top-0 mx-auto h-40 max-w-5xl bg-gradient-to-r from-violet-600/30 via-fuchsia-500/30 to-orange-400/30 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center py-16 md:py-24">
        <motion.div
          className="relative z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-black/10 dark:border-white/10 px-3 py-1 text-xs text-neutral-700 dark:text-neutral-200">
            <Sparkles size={14} className="text-violet-600" />
            Proven AI automations for modern teams
          </div>

          <h1 id="hero-title" className="mt-4 text-4xl md:text-6xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
            Automate the work. 
            <span className="block bg-gradient-to-r from-violet-600 via-fuchsia-500 to-orange-400 bg-clip-text text-transparent">Accelerate the growth.</span>
          </h1>

          <p className="mt-6 text-lg text-neutral-600 dark:text-neutral-300 max-w-xl">
            BrightsideAuto designs, ships, and scales production-grade AI voice and workflow systems that cut costs and unlock new revenue.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#contact" className="inline-flex items-center justify-center rounded-lg bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 px-6 py-3 font-medium shadow-sm hover:opacity-90 transition">
              Start a project
              <ArrowRight className="ml-2" size={18} />
            </a>
            <a href="#services" className="inline-flex items-center justify-center rounded-lg border border-neutral-300 dark:border-neutral-700 px-6 py-3 font-medium text-neutral-800 dark:text-neutral-100 hover:bg-black/5 dark:hover:bg-white/10 transition">
              Explore solutions
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-neutral-600 dark:text-neutral-300">
            <div className="flex items-center gap-2">
              <Shield size={16} />
              <span>Security-first</span>
            </div>
            <div className="flex items-center gap-2">
              <Star size={16} className="text-amber-500" />
              <span>Results-driven</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="relative h-[420px] sm:h-[520px] lg:h-[620px] rounded-2xl overflow-hidden shadow-2xl border border-black/5 dark:border-white/10"
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-white/10 to-transparent dark:from-neutral-950/60 dark:via-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
