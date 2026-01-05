import { Carousel } from 'components/carousel';
import { ThreeItemGrid } from 'components/grid/three-items';
import Footer from 'components/layout/footer';

export const metadata = {
  description:
    'High-performance ecommerce store built with Next.js, Vercel, and Shopify.',
  openGraph: {
    type: 'website'
  }
};

export default function HomePage() {
  return (
      <main style={{ 
      minHeight: '100vh',
      backgroundColor: '#0e0e0e',
      color: '#ffffff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '40px'
    }}>
      <div>
        <h1 style={{ fontSize: '48px', marginBottom: '20px' }}>
          Velvet Private
        </h1>

        <p style={{ fontSize: '20px', marginBottom: '30px', opacity: 0.8 }}>
          Luxury companions & massage services in the UK
        </p>

        <a
          href="https://wa.me/447000000000"
          target="_blank"
          style={{
            display: 'inline-block',
            padding: '15px 30px',
            backgroundColor: '#c9a24d',
            color: '#000',
            textDecoration: 'none',
            fontWeight: 'bold',
            borderRadius: '6px'
          }}
        <p style={{ fontSize: '18px', marginBottom: '20px' }}>
  Discreet, high-end companions available across the UK.
</p>

<a ...>
  Book via WhatsApp
</a>

</div>
          
    
