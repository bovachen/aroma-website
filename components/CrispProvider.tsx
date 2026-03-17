'use client';

import { useEffect } from 'react';

declare global {
  interface Window {
    $crisp: unknown[];
    CRISP_WEBSITE_ID: string;
  }
}

export default function CrispProvider() {
  useEffect(() => {
    // 替换为您的 Crisp Website ID
    const CRISP_ID = 'YOUR_CRISP_WEBSITE_ID';
    window.$crisp = [];
    window.CRISP_WEBSITE_ID = CRISP_ID;
    const script = document.createElement('script');
    script.src = 'https://client.crisp.chat/l.js';
    script.async = true;
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return null;
}
