import Hero from '@/components/Hero';
import ScentNotes from '@/components/ScentNotes';
import ProductGrid from '@/components/ProductGrid';
import About from '@/components/About';
import { products } from '@/data/products';
import Footer from '@/components/Footer';

// 首页默认展示第一款产品的香调（Aurora 香薰机）
const featuredProduct = products[0];

export default function HomePage() {
  return (
    <main>
      <Hero />

      {/* 香调展示区 */}
      <section style={{ background: 'var(--color-surface)', padding: '100px 0' }}>
        <div className="container">
          <ScentNotes notes={featuredProduct.scentNotes} />
        </div>
      </section>

      {/* 产品网格 */}
      <ProductGrid />

      {/* 品牌故事 + 定制 */}
      <About />

      <Footer />
    </main>
  );
}
