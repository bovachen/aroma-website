'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ScentNote } from '@/data/products';
import { useLanguage } from '@/lib/i18n';
import styles from './ScentNotes.module.css';

interface Props {
  notes: ScentNote[];
}

export default function ScentNotes({ notes }: Props) {
  const { t, locale } = useLanguage();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <div ref={ref} className={styles.wrapper} id="scent-notes">
      <div className={styles.header}>
        <span className="section-label">{t.scentNotes.sectionLabel}</span>
        <h2 className={styles.title}>{t.scentNotes.title}</h2>
        <p className={styles.desc}>{t.scentNotes.desc}</p>
      </div>

      <div className={styles.timeline}>
        {notes.map((note, index) => (
          <div key={note.type} className={styles.item}>
            {index < notes.length - 1 && (
              <motion.div
                className={styles.connector}
                initial={{ scaleX: 0 }}
                animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
                transition={{ duration: 0.8, delay: 0.4 + index * 0.4 }}
              />
            )}

            <motion.div
              className={styles.node}
              initial={{ scale: 0, opacity: 0 }}
              animate={inView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
              transition={{ duration: 0.6, delay: index * 0.4, type: 'spring', stiffness: 200 }}
            >
              <motion.div
                className={styles.glow}
                style={{ background: note.color }}
                animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.7, 0.4] }}
                transition={{ repeat: Infinity, duration: 3 + index * 0.5, delay: index * 0.3 }}
              />
              <motion.div
                className={styles.dot}
                style={{ background: note.color }}
                whileHover={{ scale: 1.2 }}
              />
            </motion.div>

            <motion.div
              className={styles.text}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.4 }}
            >
              <span className={styles.noteType}>
                {t.scentTypes[note.type]}
              </span>
              <span className={styles.ingredients}>
                {note.ingredients[locale]}
              </span>
              <p className={styles.noteDesc}>{note.description[locale]}</p>
              <span className={styles.duration}>{note.duration}</span>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}
