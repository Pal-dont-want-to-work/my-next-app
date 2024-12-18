import HeroSection from "./component/hero_section";
import ContentSection from "./component/content";
import ProductGrid from "./component/product";
import ContactUs from "./component/contact";
export default function Home() {
  return (
    <main>
      <HeroSection />
      <ContentSection />
      <ProductGrid />
      <ContactUs />
      {/* 其他页面内容 */}
    </main>
  )
}
