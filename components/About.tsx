'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/i18n';
import styles from './About.module.css';

export default function About() {
  const { t } = useLanguage();
  return (
    <section className={styles.section} id="about">
      <div className="container">
        <div className={styles.inner}>
          <motion.div
            className={styles.left}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8 }}
          >
            <span className="section-label">{t.about.sectionLabel}</span>
            <h2 className={styles.title}>
              {t.about.title1}
              <br />
              {t.about.title2}
            </h2>
            <p className={styles.text}>{t.about.p1}</p>
            <p className={styles.text}>{t.about.p2}</p>
            <div className={styles.stats}>
              {[
                { num: t.about.stat1Num, label: t.about.stat1Label },
                { num: t.about.stat2Num, label: t.about.stat2Label },
                { num: t.about.stat3Num, label: t.about.stat3Label },
              ].map((stat) => (
                <div key={stat.label} className={styles.stat}>
                  <span className={styles.statNum}>{stat.num}</span>
                  <span className={styles.statLabel}>{stat.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className={styles.right}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className={styles.quoteCard}>
              <div className={styles.quoteIcon}>&ldquo;</div>
              <blockquote className={styles.quote}>{t.about.quoteText}</blockquote>
              <cite className={styles.quoteCite}>{t.about.quoteSource}</cite>
            </div>
            <div className={styles.customCard}>
              <h3>{t.about.customTitle}</h3>
              <p>{t.about.customDesc}</p>
              <a href="mailto:hello@aethel.com" className="btn-primary" style={{ marginTop: '8px', display: 'inline-flex' }}>
                {t.about.customCta}
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
