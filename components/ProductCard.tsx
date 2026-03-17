'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/data/products';
import { useLanguage } from '@/lib/i18n';
import styles from './ProductCard.module.css';

interface Props {
  product: Product;
  index: number;
}

export default function ProductCard({ product, index }: Props) {
  const { t, locale } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      whileHover={{ y: -6 }}
      className={styles.card}
    >
      <Link href={`/products/${product.id}`}>
        <div className={styles.imageWrap}>
          <Image
            src={product.image}
            alt={product.name[locale]}
            fill
            style={{ objectFit: 'cover' }}
          />
          <div className={styles.imageOverlay} />
          <span className={styles.category}>{product.category[locale]}</span>
        </div>
        <div className={styles.body}>
          <div className={styles.top}>
            <h3 className={styles.name}>{product.name[locale]}</h3>
            <span className={styles.price}>{product.price}</span>
          </div>
          <p className={styles.tagline}>{product.tagline[locale]}</p>
          <div className={styles.scentPreview}>
            {product.scentNotes.map((note) => (
              <div
                key={note.type}
                className={styles.scentDot}
                style={{ background: note.color }}
                title={`${t.scentTypes[note.type]}: ${note.ingredients[locale]}`}
              />
            ))}
            <span className={styles.scentLabel}>
              {product.scentNotes.map((n) => t.scentTypes[n.type]).join(' · ')}
            </span>
          </div>
          <div className={styles.cta}>
            <span>{t.products.viewDetails}</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
