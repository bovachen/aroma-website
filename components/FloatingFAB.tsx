'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useLanguage } from '@/lib/i18n';
import styles from './FloatingFAB.module.css';

const WHATSAPP_NUMBER = '+8613800138000'; // 替换为真实 WhatsApp 号码
const EMAIL = 'hello@willonack.com';

const contactButtons = [
  {
    id: 'whatsapp',
    labelEn: 'WhatsApp',
    labelZh: 'WhatsApp',
    color: '#25D366',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
    action: 'whatsapp',
  },
  {
    id: 'wechat',
    labelEn: 'WeChat',
    labelZh: '微信',
    color: '#07C160',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
        <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 01.213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 00.167-.054l1.903-1.114a.864.864 0 01.717-.098 10.16 10.16 0 002.837.403c.276 0 .543-.027.811-.05-.857-2.578.157-4.972 1.932-6.446 1.703-1.415 3.882-1.98 5.853-1.838-.576-3.583-4.196-6.348-8.596-6.348zM5.785 5.991c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 01-1.162 1.178A1.17 1.17 0 014.623 7.17c0-.651.52-1.18 1.162-1.18zm5.813 0c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 01-1.162 1.178 1.17 1.17 0 01-1.162-1.178c0-.651.52-1.18 1.162-1.18zm5.34 2.867c-1.797-.052-3.746.512-5.28 1.786-1.72 1.428-2.687 3.72-1.78 6.22.942 2.453 3.666 4.229 6.884 4.229.826 0 1.622-.12 2.361-.336a.722.722 0 01.598.082l1.584.926a.272.272 0 00.14.047c.134 0 .24-.11.24-.247 0-.06-.023-.12-.038-.177l-.327-1.233a.582.582 0 01-.023-.156.49.49 0 01.201-.398C23.024 18.48 24 16.82 24 14.98c0-3.21-2.931-5.837-7.062-6.122zm-3.74 2.629c.535 0 .969.44.969.982a.976.976 0 01-.969.983.976.976 0 01-.969-.983c0-.542.434-.982.97-.982zm4.844 0c.535 0 .969.44.969.982a.976.976 0 01-.969.983.976.976 0 01-.969-.983c0-.542.434-.982.969-.982z" />
      </svg>
    ),
    action: 'wechat',
  },
  {
    id: 'email',
    labelEn: 'Email',
    labelZh: '发邮件',
    color: '#C9A87C',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="20" height="20">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 01-2.06 0L2 7" strokeLinecap="round" />
      </svg>
    ),
    action: 'email',
  },
];

export default function FloatingFAB() {
  const { locale } = useLanguage();
  const [open, setOpen] = useState(false);
  const [showWechat, setShowWechat] = useState(false);

  const handleAction = (action: string) => {
    if (action === 'whatsapp') {
      window.open(`https://wa.me/${WHATSAPP_NUMBER}`, '_blank');
    } else if (action === 'wechat') {
      setShowWechat(true);
      setOpen(false);
    } else if (action === 'email') {
      window.location.href = `mailto:${EMAIL}`;
    }
  };

  return (
    <>
      {/* 微信二维码弹窗 */}
      <AnimatePresence>
        {showWechat && (
          <>
            <motion.div
              className={styles.backdrop}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowWechat(false)}
            />
            <motion.div
              className={styles.wechatModal}
              initial={{ opacity: 0, scale: 0.85, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.85, y: 20 }}
              transition={{ type: 'spring', stiffness: 280, damping: 24 }}
            >
              <button className={styles.closeBtn} onClick={() => setShowWechat(false)} aria-label="Close">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
                  <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" />
                </svg>
              </button>
              <div className={styles.wechatQR}>
                <Image
                  src="/wechat-qr.png"
                  alt="WeChat QR Code"
                  width={220}
                  height={220}
                  style={{ objectFit: 'contain', borderRadius: 8 }}
                />
              </div>
              <p className={styles.wechatTitle}>
                {locale === 'zh' ? '扫码添加微信' : 'Scan to add on WeChat'}
              </p>
              <p className={styles.wechatSub}>
                {locale === 'zh' ? '打开微信扫一扫，咨询产品与定制' : 'Open WeChat and scan the QR code'}
              </p>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* 主浮动按钮 */}
      <div className={styles.fab}>
        <AnimatePresence>
          {open && (
            <div className={styles.list}>
              {contactButtons.map((btn, i) => (
                <motion.div
                  key={btn.id}
                  className={styles.item}
                  initial={{ opacity: 0, y: 16, scale: 0.85 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 16, scale: 0.85 }}
                  transition={{ duration: 0.22, delay: i * 0.07 }}
                >
                  <span className={styles.itemLabel}>
                    {locale === 'zh' ? btn.labelZh : btn.labelEn}
                  </span>
                  <motion.button
                    className={styles.itemBtn}
                    style={{ background: btn.color }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleAction(btn.action)}
                    aria-label={btn.labelEn}
                  >
                    {btn.icon}
                  </motion.button>
                </motion.div>
              ))}
            </div>
          )}
        </AnimatePresence>

        <motion.button
          className={styles.main}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setOpen(!open)}
          aria-label="Contact us"
        >
          <motion.div
            animate={{ rotate: open ? 45 : 0 }}
            transition={{ duration: 0.3, type: 'spring', stiffness: 300 }}
          >
            {open ? (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="22" height="22">
                <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="22" height="22">
                <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            )}
          </motion.div>
        </motion.button>
      </div>
    </>
  );
}
