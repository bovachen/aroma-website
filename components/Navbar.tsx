'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useLanguage } from '@/lib/i18n';
import { localeNames, type Locale } from '@/lib/config';
import styles from './Navbar.module.css';

export default function Navbar() {
  const { t, locale, setLocale } = useLanguage();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const toggleLocale = () => {
    setLocale(locale === 'en' ? 'zh' : 'en');
  };

  const navLinks = [
    { label: t.nav.home, href: '/#home' },
    { label: t.nav.scentNotes, href: '/#scent-notes' },
    { label: t.nav.products, href: '/#products' },
    { label: t.nav.about, href: '/#about' },
  ];

  return (
    <motion.header
      className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, delay: 0.1 }}
    >
      <div className={styles.inner}>
        <Link href="/" className={styles.logo}>
          Willonack
        </Link>
        <nav className={styles.nav}>
          {navLinks.map((l) => (
            <a key={l.label} href={l.href} className={styles.navLink}>
              {l.label}
            </a>
          ))}
        </nav>
        <div className={styles.right}>
          {/* 语言切换按钮 */}
          <button
            className={styles.langBtn}
            onClick={toggleLocale}
            aria-label="Switch language"
            title={locale === 'en' ? '切换到中文' : 'Switch to English'}
          >
            <span className={styles.langIcon}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="14" height="14">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                <path d="M2 12h20" />
              </svg>
            </span>
            <span className={styles.langText}>
              {locale === 'en' ? '中文' : 'EN'}
            </span>
          </button>
          <a href="/#products" className={styles.cta}>
            {t.nav.explore}
          </a>
        </div>
      </div>
    </motion.header>
  );
}
