export interface ScentNote {
  type: '前调' | '中调' | '后调';
  ingredients: { en: string; zh: string };
  description: { en: string; zh: string };
  duration: string;
  color: string;
}

export interface Product {
  id: string;
  name: { en: string; zh: string };
  tagline: { en: string; zh: string };
  description: { en: string; zh: string };
  details: { en: string; zh: string };
  image: string;
  price: string;
  volume: string;
  category: { en: string; zh: string };
  scentNotes: ScentNote[];
}

export const products: Product[] = [
  {
    id: 'aurora-diffuser',
    name: { en: 'Aurora Diffuser', zh: 'Aurora 香薰机' },
    tagline: { en: 'Mist like dawn. A quiet beginning.', zh: '雾气如晨，安静开场' },
    description: {
      en: 'Ultrasonic cold-mist technology atomises essential oil molecules into ultra-fine particles that disperse evenly through any space. The matte ceramic shell merges with natural light, becoming the quietest presence in your room.',
      zh: '超声波冷雾技术，将精油分子化为极细微粒，均匀弥散于空间之中。哑光陶瓷外壳，与自然光线相融，成为房间里最安静的存在。',
    },
    details: {
      en: '300 ml capacity. Runs 8–10 hours continuously. Built-in timer and adjustable night light. Compatible with all Willonack oils. Coverage: 30–60 m².',
      zh: '容量 300ml，可持续工作 8–10 小时。内置定时器及亮度可调夜灯，兼容全系列精油。适用面积 30–60 m²。',
    },
    image: '/hero.png',
    price: '¥ 680',
    volume: '300 ml',
    category: { en: 'Diffuser', zh: '香薰机' },
    scentNotes: [
      {
        type: '前调',
        ingredients: { en: 'Bergamot · Lemon', zh: '佛手柑 · 柠檬' },
        description: { en: 'Bright and airy, like the first ray of morning light', zh: '轻盈明亮，如清晨第一缕阳光' },
        duration: '0–15 min',
        color: '#E8D5A3',
      },
      {
        type: '中调',
        ingredients: { en: 'Lavender · Jasmine', zh: '薰衣草 · 茉莉' },
        description: { en: 'A gentle bloom that softly spreads through the air', zh: '温柔绽放，在空气中缓缓铺开' },
        duration: '15–60 min',
        color: '#D4B8C7',
      },
      {
        type: '后调',
        ingredients: { en: 'Sandalwood · Vanilla', zh: '檀木 · 香草' },
        description: { en: 'Deep and lingering, a warmth that stays', zh: '深沉悠长，在肌肤上留下余韵' },
        duration: '2–5 hrs',
        color: '#C9A87C',
      },
    ],
  },
  {
    id: 'citrus-bloom',
    name: { en: 'Citrus Bloom Oil', zh: '柑橘之境 精油' },
    tagline: { en: 'Clear · Vibrant · Awakening', zh: '清透·活力·焕醒' },
    description: {
      en: 'Featuring Calabrian bergamot as the lead note, complemented by Sicilian lemon and sweet orange, this oil awakens dormant senses. The fresh citrus accord brings lightness through the day.',
      zh: '以意大利卡拉布里亚佛手柑为主调，辅以西西里柠檬与甜橙，唤醒沉睡的感官。清新的果香带来一整天的轻盈感。',
    },
    details: {
      en: '10 ml roller bottle. Pure plant extracts, additive-free. Apply directly to wrists and neck. Shelf life: 24 months.',
      zh: '10ml 滚珠装，纯植物提取，无添加，适合直接涂抹于手腕、颈部。保质期 24 个月。',
    },
    image: '/product-citrus.png',
    price: '¥ 220',
    volume: '10 ml',
    category: { en: 'Essential Oil', zh: '精油' },
    scentNotes: [
      {
        type: '前调',
        ingredients: { en: 'Bergamot · Sweet Orange', zh: '佛手柑 · 甜橙' },
        description: { en: 'A crisp burst of citrus energy', zh: '清爽果香，迸发清晨活力' },
        duration: '0–20 min',
        color: '#F0D080',
      },
      {
        type: '中调',
        ingredients: { en: 'Lemongrass · White Tea', zh: '柠檬草 · 白茶' },
        description: { en: 'Delicate and translucent, like a gentle breeze', zh: '清淡透明，如微风拂过' },
        duration: '20–45 min',
        color: '#D8E8C0',
      },
      {
        type: '后调',
        ingredients: { en: 'Musk · Cedarwood', zh: '麝香 · 雪松' },
        description: { en: 'Soft woods that anchor the scent', zh: '轻柔木质，缓缓落地' },
        duration: '1–3 hrs',
        color: '#C8B898',
      },
    ],
  },
  {
    id: 'rose-reverie',
    name: { en: 'Rose Reverie Diffuser', zh: '玫瑰梦境 藤条香薰' },
    tagline: { en: 'Silently diffusing into every corner', zh: '无声地，弥散于每个角落' },
    description: {
      en: 'Crafted from Bulgarian rose absolute, iris root and white musk. Reed sticks draw fragrance naturally—no flame required, 365 days of continuous floral poetry.',
      zh: '精选保加利亚玫瑰原精，与鸢尾根、白麝香调配而成。藤条自然导香，无需明火，365 天持续为空间注入花语。',
    },
    details: {
      en: '150 ml glass bottle with 8 reed sticks. Flip sticks once daily to strengthen diffusion. Ideal for 15–25 m² rooms such as bedrooms and studies.',
      zh: '150ml 玻璃瓶装，附 8 根藤条，建议每日翻转一次加速扩散。适用于卧室、书房等 15–25 m² 空间。',
    },
    image: '/product-rose.png',
    price: '¥ 380',
    volume: '150 ml',
    category: { en: 'Reed Diffuser', zh: '藤条香薰' },
    scentNotes: [
      {
        type: '前调',
        ingredients: { en: 'Bulgarian Rose · Lychee', zh: '保加利亚玫瑰 · 荔枝' },
        description: { en: 'Rich and romantic, a beautiful entrance', zh: '馥郁柔美，浪漫登场' },
        duration: '0–30 min',
        color: '#F0C0C8',
      },
      {
        type: '中调',
        ingredients: { en: 'Iris · Peony', zh: '鸢尾 · 牡丹' },
        description: { en: 'Refined florals that carry throughout the day', zh: '清雅花香，贯穿始终' },
        duration: 'Continuous',
        color: '#D8A8C0',
      },
      {
        type: '后调',
        ingredients: { en: 'White Musk · Ambergris', zh: '白麝香 · 龙涎香' },
        description: { en: 'Silky smooth, utterly mesmerising', zh: '极致柔滑，令人沉醉' },
        duration: 'Long-lasting',
        color: '#C9A87C',
      },
    ],
  },
  {
    id: 'midnight-sandalwood',
    name: { en: 'Midnight Sandalwood Candle', zh: '午夜檀境 香薰蜡烛' },
    tagline: { en: 'In the flame, find stillness', zh: '在火焰里，遇见沉静' },
    description: {
      en: 'Soy wax with a copper wick. Burns approximately 60 hours. Indian old-growth sandalwood and benzoin resin interweave to slowly settle the space into deep, quiet serenity.',
      zh: '大豆蜡烛体，铜芯，燃烧时间约 60 小时。印度老山檀香与安息香脂交织，让空间慢慢沉入深邃的宁静。',
    },
    details: {
      en: '240 g. Burn at least 2 hours each session to avoid tunnelling. Trim wick to 5 mm before first use. The matte ceramic jar is reusable.',
      zh: '240g，建议每次燃烧不少于 2 小时以避免隧道效应。首次点燃前请修剪烛芯至 5mm。哑光陶瓷杯可重复利用。',
    },
    image: '/product-sandalwood.png',
    price: '¥ 298',
    volume: '240 g',
    category: { en: 'Candle', zh: '香薰蜡烛' },
    scentNotes: [
      {
        type: '前调',
        ingredients: { en: 'Black Pepper · Cardamom', zh: '黑胡椒 · 豆蔻' },
        description: { en: 'A subtly spicy opener—mysterious and restrained', zh: '微辛开场，神秘而克制' },
        duration: '0–15 min',
        color: '#D0B060',
      },
      {
        type: '中调',
        ingredients: { en: 'Old Sandalwood · Ebony', zh: '老山檀香 · 乌木' },
        description: { en: 'Deep woody heart that soothes the soul', zh: '深沉木质，沁人心脾' },
        duration: '15–60 min',
        color: '#A08060',
      },
      {
        type: '后调',
        ingredients: { en: 'Benzoin · Tonka Bean', zh: '安息香 · 零陵香豆' },
        description: { en: 'Sweet warmth, like the embrace of night', zh: '甜润暖香，如夜的拥抱' },
        duration: '2–4 hrs',
        color: '#806040',
      },
    ],
  },
  {
    id: 'noir-diffuser',
    name: { en: 'Noir Smart Diffuser', zh: 'Noir 智能香薰机' },
    tagline: { en: 'Minimalist design, intelligent scent', zh: '极简设计，智慧香气' },
    description: {
      en: 'Magnetic split structure—base and atomiser separate with one click for easy cleaning. App-controlled with custom timer, intensity and lighting modes. Works with voice assistants.',
      zh: '磁吸分体式结构，底座与雾化头可一键分离，清洁便捷。APP 控制，可自定义定时、浓度、灯光模式，支持语音助手联动。',
    },
    details: {
      en: '500 ml large-capacity tank for all-night operation. Silent design <25 dB. Suitable for bedrooms, meditation rooms, or open-plan offices.',
      zh: '容量 500ml，超大水箱满足整夜运行。静音设计 <25dB。适用于卧室、冥想室或开放式办公空间。',
    },
    image: '/product-diffuser2.png',
    price: '¥ 980',
    volume: '500 ml',
    category: { en: 'Diffuser', zh: '香薰机' },
    scentNotes: [
      {
        type: '前调',
        ingredients: { en: 'Blackcurrant · Violet Leaf', zh: '黑加仑 · 紫罗兰叶' },
        description: { en: 'Deep fruity notes, an elegant overture', zh: '深邃果香，优雅揭幕' },
        duration: '0–10 min',
        color: '#9080B0',
      },
      {
        type: '中调',
        ingredients: { en: 'Rose · Patchouli', zh: '玫瑰 · 广藿香' },
        description: { en: 'Rich and complex, full of layered depth', zh: '馥郁复杂，层次丰富' },
        duration: '10–45 min',
        color: '#C080A0',
      },
      {
        type: '后调',
        ingredients: { en: 'Labdanum · Civet', zh: '劳丹脂 · 麝猫香' },
        description: { en: 'Animalic warmth that lingers long', zh: '动物香调，久久萦绕' },
        duration: '3–6 hrs',
        color: '#8060A0',
      },
    ],
  },
];
