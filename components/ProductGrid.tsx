'use client';

import { useLanguage } from '@/lib/i18n';
import { products } from '@/data/products';
import ProductCard from './ProductCard';
import styles from './ProductGrid.module.css';

export default function ProductGrid() {
  const { t } = useLanguage();
  return (
    <section className={styles.section} id="products">
      <div className="container">
        <div className={styles.header}>
          <span className="section-label">{t.products.sectionLabel}</span>
          <h2 className={styles.title}>{t.products.title}</h2>
        </div>
        <div className={styles.grid}>
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
