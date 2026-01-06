export const metadata = {
  description: 'Luxury companions & massage services in the UK',
  openGraph: {
    type: 'website'
  }
}

export default function HomePage() {
  return (
    <main
      style={{
        minHeight: '100vh',
        backgroundColor: '#0b0b0b',
        color: '#ffffff',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '60px 20px'
      }}
    >
      {/* HERO */}
      <div style={{ textAlign: 'center', maxWidth: '800px' }}>
        <h1 style={{ fontSize: '52px', marginBottom: '20px' }}>
          Velvet Private
        </h1>

        <p style={{ fontSize: '20px', opacity: 0.85, marginBottom: '40px' }}>
          Luxury, discreet and sensual companions & massage services in the UK
        </p>

        <a
          href="https://wa.me/447000000000"
          target="_blank"
          style={{
            display: 'inline-block',
            padding: '16px 36px',
            backgroundColor: '#c9a24d',
            color: '#000',
            textDecoration: 'none',
            fontWeight: 'bold',
            borderRadius: '8px'
          }}
        >
          Book via WhatsApp
        </a>
      </div>

      {/* COMPANIONS */}
      <div
        style={{
          marginTop: '100px',
          width: '100%',
          maxWidth: '1200px'
        }}
      >
        <h2 style={{ fontSize: '34px', marginBottom: '12px' }}>
          Our Companions
        </h2>

        <p style={{ fontSize: '18px', opacity: 0.8, marginBottom: '40px' }}>
          A curated selection of high-end companions and professional massage
          therapists available across the UK.
        </p>

        {/* GRID */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '28px'
          }}
        >
          {/* CARD 1 */}
          <div
            style={{
              background: '#111',
              borderRadius: '14px',
              overflow: 'hidden'
            }}
          >
            <img
              src="https://via.placeholder.com/400x520"
              style={{ width: '100%', height: '360px', objectFit: 'cover' }}
            />
            <div style={{ padding: '16px' }}>
              <h3>Angelina</h3>
              <p style={{ opacity: 0.7 }}>London</p>
              <a
                href="https://wa.me/447000000000"
                target="_blank"
                style={{ color: '#c9a24d', textDecoration: 'none' }}
              >
                Book via WhatsApp
              </a>
            </div>
          </div>

          {/* CARD 2 */}
          <div
            style={{
              background: '#111',
              borderRadius: '14px',
              overflow: 'hidden'
            }}
          >
            <img
              src="https://via.placeholder.com/400x520"
              style={{ width: '100%', height: '360px', objectFit: 'cover' }}
            />
            <div style={{ padding: '16px' }}>
              <h3>Sophia</h3>
              <p style={{ opacity: 0.7 }}>Manchester</p>
              <a
                href="https://wa.me/447000000000"
                target="_blank"
                style={{ color: '#c9a24d', textDecoration: 'none' }}
              >
                Book via WhatsApp
              </a>
            </div>
          </div>

          {/* CARD 3 */}
          <div
            style={{
              background: '#111',
              borderRadius: '14px',
              overflow: 'hidden'
            }}
          >
            <img
              src="https://via.placeholder.com/400x520"
              style={{ width: '100%', height: '360px', objectFit: 'cover' }}
            />
            <div style={{ padding: '16px' }}>
              <h3>Isabella</h3>
              <p style={{ opacity: 0.7 }}>Birmingham</p>
              <a
                href="https://wa.me/447000000000"
                target="_blank"
                style={{ color: '#c9a24d', textDecoration: 'none' }}
              >
                Book via WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
