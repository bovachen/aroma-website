'use client';

import { useLanguage } from '@/lib/i18n';

interface Props {
  styles: Record<string, string>;
}

export default function FooterClient({ styles }: Props) {
  const { t } = useLanguage();
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.brand}>
            <span className={styles.logo}>Willonack</span>
            <p>{t.footer.tagline}</p>
            <p>{t.footer.subTagline}</p>
          </div>
          <div className={styles.links}>
            <div className={styles.group}>
              <h4>{t.footer.products}</h4>
              <a href="/#products">{t.footer.diffuser}</a>
              <a href="/#products">{t.footer.essentialOil}</a>
              <a href="/#products">{t.footer.candle}</a>
              <a href="/#products">{t.footer.reedDiffuser}</a>
            </div>
            <div className={styles.group}>
              <h4>{t.footer.services}</h4>
              <a href="mailto:hello@willonack.com">{t.footer.bespoke}</a>
              <a href="mailto:hello@willonack.com">{t.footer.collaboration}</a>
              <a href="/#about">{t.footer.aboutUs}</a>
            </div>
            <div className={styles.group}>
              <h4>{t.footer.contact}</h4>
              <a href="https://wa.me/+8613800138000" target="_blank" rel="noreferrer">{t.footer.whatsapp}</a>
              <a href="mailto:hello@willonack.com">hello@willonack.com</a>
            </div>
          </div>
        </div>
        <div className={styles.bottom}>
          <span>© {new Date().getFullYear()} Willonack · {t.footer.copyright}</span>
          <span>{t.footer.motto}</span>
        </div>
      </div>
    </footer>
  );
}
