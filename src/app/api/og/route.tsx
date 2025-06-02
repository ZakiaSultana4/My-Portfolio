import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const title = searchParams.get('title') || 'Zakia Sultana | Front-End Developer'

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          padding: 60,
          background: 'linear-gradient(135deg, #a78bfa, #f472b6)',
          color: '#fff',
          fontFamily: 'sans-serif',
        }}
      >
        {/* Title */}
        <div
          style={{
            fontSize: 60,
            fontWeight: 900,
            lineHeight: 1.2,
            marginBottom: 40,
            textAlign: 'center',
            textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
          }}
        >
          {title}
        </div>

        {/* Card Section */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            backgroundColor: '#ffffff',
            color: '#111827',
            borderRadius: 24,
            padding: '32px 48px',
            width: '100%',
            maxWidth: 900,
            boxShadow: '0 12px 40px rgba(0,0,0,0.15)',
            gap: 32,
            margin: '0 auto',
          }}
        >
          {/* Profile Image */}
          <img
            src="https://zakia-sultana.vercel.app/logo.png"
            width={120}
            height={120}
            style={{
              borderRadius: '100%',
              objectFit: 'cover',
              border: '4px solid #a78bfa',
            }}
            alt="Zakia Sultana"
          />

          {/* Info */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ fontSize: 32, fontWeight: 700 }}>Zakia Sultana</div>
            <div style={{ fontSize: 22, color: '#4b5563', marginTop: 4 }}>
              Junior Front-End Web Developer
            </div>
            <div style={{ fontSize: 20, color: '#6366f1', marginTop: 8 }}>
              zakia-sultana.vercel.app
            </div>
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  )
}
