import Feature from '../components/Feature';
import Pricing from '../components/Pricing';
import Hero from '../components/Hero';
import Layout from '../components/Layout/Layout';
import SeoHead from '../components/SeoHead';
import Asdf from '../components/Asdf';

export default function Home() {
  return (
    <>
      <SeoHead title="Kursus IT" />
      <Layout>
        <Hero />
        <Asdf />
        <Feature />
        <Pricing />
      </Layout>
    </>
  );
}
