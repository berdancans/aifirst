// src/pages/index.tsx

export default function Home() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: '#181818',
        color: '#fff',
        fontFamily: 'Inter, sans-serif',
        textAlign: 'center',
        padding: '2rem',
        backgroundImage: 'radial-gradient(circle at top left, #2c2c2c 0%, #181818 100%)',
      }}
    >
      <img
        src="/Untitled_design-removebg-preview.png"
        alt="AI-FIRST Logo"
        style={{ width: '350px', marginBottom: '36px' }}
      />

      <h1
        style={{
          fontSize: '2.4rem',
          fontWeight: 'bold',
          marginBottom: '0.3rem',
        }}
      >
        Berdan Can Gürel
      </h1>

      <h2
        style={{
          fontStyle: 'italic',
          fontWeight: 'normal',
          fontSize: '1.2rem',
          color: '#ccc',
          marginBottom: '2rem',
        }}
      >
        Vision Owner
      </h2>

      <p
        style={{
          fontSize: '1rem',
          maxWidth: '400px',
          marginBottom: '1.8rem',
          lineHeight: '1.7',
        }}
      >
        Yapay zekayla çalışan değil, düşünen sistemler kuruyoruz. <br />
        Bu sistemlerin hiçbirine rastgele zihin dahil olmaz.
      </p>

      <div style={{ fontSize: '1rem', lineHeight: '1.8' }}>
        <p>
          📞{' '}
          <a
            href="https://wa.me/905347327080"
            style={{
              color: '#ffc107',
              textDecoration: 'none',
              transition: 'color 0.3s ease',
            }}
            onMouseOver={(e) => (e.currentTarget.style.color = '#fff')}
            onMouseOut={(e) => (e.currentTarget.style.color = '#ffc107')}
          >
            +90 534 732 7080
          </a>
        </p>
        <p>
          📧{' '}
          <a
            href="mailto:gurelberdancan@gmail.com"
            style={{
              color: '#ffc107',
              textDecoration: 'none',
              transition: 'color 0.3s ease',
            }}
            onMouseOver={(e) => (e.currentTarget.style.color = '#fff')}
            onMouseOut={(e) => (e.currentTarget.style.color = '#ffc107')}
          >
            gurelberdancan@gmail.com
          </a>
        </p>
      </div>
    </div>
  );
}
