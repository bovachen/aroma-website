'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useLanguage } from '@/lib/i18n';
import styles from './Hero.module.css';

export default function Hero() {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      containerRef.current.style.setProperty('--parallax', `${window.scrollY * 0.4}px`);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className={styles.hero} ref={containerRef} id="home">
      <div className={styles.imageWrap}>
        <Image
          src="/hero.png"
          alt="Aurora Diffuser Mist"
          fill
          priority
          quality={95}
          style={{ objectFit: 'cover', objectPosition: 'center' }}
        />
        <div className={styles.overlay} />
      </div>

      <div className={styles.content}>
        <motion.span
          className={styles.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {t.hero.label}
        </motion.span>

        <motion.h1
          className={styles.title}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {t.hero.title1}
          <br />
          {t.hero.title2}
        </motion.h1>

        <motion.p
          className={styles.subtitle}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          {t.hero.subtitle}
        </motion.p>

        <motion.div
          className={styles.ctas}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <a href="#products" className="btn-primary">{t.hero.exploreProducts}</a>
          <a href="#scent-notes" className="btn-outline" style={{ color: '#fff', borderColor: 'rgba(255,255,255,0.5)' }}>
            {t.hero.scentSeries}
          </a>
        </motion.div>
      </div>

      <motion.div
        className={styles.scroll}
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
      >
        <div className={styles.scrollLine} />
        <span className={styles.scrollText}>{t.hero.scrollDown}</span>
      </motion.div>
    </section>
  );
}
