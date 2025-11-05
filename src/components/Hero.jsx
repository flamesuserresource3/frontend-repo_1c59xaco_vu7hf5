import Spline from '@splinetool/react-spline';
import { ArrowRight, Shield, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative" aria-labelledby="hero-title">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center py-16 md:py-24">
        <div className="relative z-10">
          <h1 id="hero-title" className="text-4xl md:text-6xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
            AI Automation for modern teams
            <span className="block bg-gradient-to-r from-violet-600 via-fuchsia-500 to-orange-400 bg-clip-text text-transparent">
              by BrightsideAuto
            </span>
          </h1>
          <p className="mt-6 text-lg text-neutral-600 dark:text-neutral-300 max-w-xl">
            Launch voice agents, automate support, and streamline operations with production-grade AI systems. We build, deploy, and optimize end-to-end automations tailored to your business.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#contact" className="inline-flex items-center justify-center rounded-md bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 px-6 py-3 font-medium shadow-sm hover:opacity-90 transition">
              Start a project
              <ArrowRight className="ml-2" size={18} />
            </a>
            <a href="#services" className="inline-flex items-center justify-center rounded-md border border-neutral-300 dark:border-neutral-700 px-6 py-3 font-medium text-neutral-800 dark:text-neutral-100 hover:bg-black/5 dark:hover:bg-white/10 transition">
              Explore solutions
            </a>
          </div>
          <div className="mt-8 flex items-center gap-6 text-sm text-neutral-600 dark:text-neutral-300">
            <div className="flex items-center gap-2">
              <Shield size={16} />
              <span>Enterprise-ready</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles size={16} />
              <span>Fast delivery</span>
            </div>
          </div>
        </div>

        <div className="relative h-[420px] sm:h-[520px] lg:h-[620px] rounded-2xl overflow-hidden">
          <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-white/10 to-transparent dark:from-neutral-950/60 dark:via-transparent" />
        </div>
      </div>
    </section>
  );
}
