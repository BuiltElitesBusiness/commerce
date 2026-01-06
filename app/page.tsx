export default function HomePage() {
  return (
    <main
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(180deg, #0b0b0b 0%, #111 100%)',
        color: '#fff',
        padding: '80px 24px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
      {/* HERO */}
      <section style={{ textAlign: 'center', maxWidth: '900px' }}>
        <h1 style={{ fontSize: '48px', marginBottom: '16px' }}>
          Velvet Private
        </h1>

        <p style={{ fontSize: '20px', opacity: 0.85, marginBottom: '32px' }}>
          Luxury companions & massage services in the UK
        </p>

        <a
          href="https://wa.me/447000000000"
          target="_blank"
          style={{
            display: 'inline-block',
            padding: '16px 36px',
            backgroundColor: '#c9a24d',
            color: '#000',
            fontWeight: 'bold',
            borderRadius: '8px',
            textDecoration: 'none',
            fontSize: '16px'
          }}
        >
          Book via WhatsApp
        </a>
      </section>

      {/* COMPANIONS */}
      <section
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
          A curated selection of high-end companions and professional massage therapists.
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
              borderRadius: '16px',
              overflow: 'hidden',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
          >
            <img
              src="https://via.placeholder.com/400x520"
              style={{
                width: '100%',
                height: '360px',
                objectFit: 'cover'
              }}
            />

            <div style={{ padding: '16px' }}>
              <h3>Angelina</h3>
              <p style={{ opacity: 0.7 }}>London</p>

              <a
                href="https://wa.me/447000000000"
                target="_blank"
                style={{
                  color: '#c9a24d',
                  textDecoration: 'none',
                  fontWeight: 'bold'
                }}
              >
                Book via WhatsApp
              </a>
            </div>
          </div>

          {/* CARD 2 */}
          <div
            style={{
              background: '#111',
              borderRadius: '16px',
              overflow: 'hidden',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
          >
            <img
              src="https://via.placeholder.com/400x520"
              style={{
                width: '100%',
                height: '360px',
                objectFit: 'cover'
              }}
            />

            <div style={{ padding: '16px' }}>
              <h3>Sophia</h3>
              <p style={{ opacity: 0.7 }}>Manchester</p>

              <a
                href="https://wa.me/447000000000"
                target="_blank"
                style={{
                  color: '#c9a24d',
                  textDecoration: 'none',
                  fontWeight: 'bold'
                }}
              >
                Book via WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
