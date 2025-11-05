import { useState } from 'react';
import { Menu, X, Bot, Sparkles } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: 'Solutions', href: '#services' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-black/5 dark:border-white/10 bg-white/70 dark:bg-neutral-950/60 backdrop-blur supports-[backdrop-filter]:bg-white/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="group flex items-center gap-2 font-semibold">
            <span className="relative inline-flex h-9 w-9 items-center justify-center rounded-xl bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 shadow-sm">
              <Bot size={18} />
              <Sparkles size={14} className="absolute -right-1 -bottom-1 text-violet-500" />
            </span>
            <span className="text-neutral-900 dark:text-white">BrightsideAuto</span>
          </a>

          <nav className="hidden md:flex items-center gap-1 text-sm">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-md px-3 py-2 text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/10 transition"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="ml-2 inline-flex items-center rounded-lg bg-gradient-to-tr from-violet-600 via-fuchsia-500 to-orange-400 px-4 py-2 text-white shadow-sm hover:opacity-95 transition"
            >
              Get started
            </a>
          </nav>

          <button
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-neutral-700 dark:text-neutral-200 hover:bg-black/5 dark:hover:bg-white/10"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-md px-3 py-2 text-neutral-700 dark:text-neutral-200 hover:bg-black/5 dark:hover:bg-white/10"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                className="rounded-md px-3 py-2 bg-gradient-to-tr from-violet-600 via-fuchsia-500 to-orange-400 text-white"
                onClick={() => setOpen(false)}
              >
                Get started
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
