import { useState } from 'react';
import { Menu, X, Bot } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: 'Solutions', href: '#services' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 dark:bg-neutral-900/70 border-b border-black/5 dark:border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2 font-semibold">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-tr from-violet-600 via-fuchsia-500 to-orange-400 text-white">
              <Bot size={18} />
            </span>
            <span className="text-neutral-900 dark:text-white">BrightsideAuto</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm text-neutral-600 dark:text-neutral-300">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="hover:text-neutral-900 dark:hover:text-white transition-colors">
                {item.label}
              </a>
            ))}
            <a href="#contact" className="inline-flex items-center rounded-md bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 px-4 py-2 text-sm font-medium shadow-sm hover:opacity-90 transition">
              Get started
            </a>
          </nav>

          <button
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-neutral-700 dark:text-neutral-200 hover:bg-black/5 dark:hover:bg-white/10"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
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
                className="rounded-md px-3 py-2 bg-neutral-900 text-white dark:bg-white dark:text-neutral-900"
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
