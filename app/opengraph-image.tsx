import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Abdelrhman Adel - Front-End Developer'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #0f172a 0%, #581c87 50%, #0f172a 100%)',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        {/* Decorative circles */}
        <div
          style={{
            position: 'absolute',
            top: -100,
            right: -100,
            width: 400,
            height: 400,
            borderRadius: '50%',
            background: 'rgba(124, 58, 237, 0.3)',
            filter: 'blur(60px)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: -100,
            left: -100,
            width: 400,
            height: 400,
            borderRadius: '50%',
            background: 'rgba(139, 92, 246, 0.2)',
            filter: 'blur(60px)',
          }}
        />

        {/* Content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 20,
          }}
        >
          {/* Avatar/Logo */}
          <div
            style={{
              width: 120,
              height: 120,
              borderRadius: 24,
              background: 'linear-gradient(135deg, #7c3aed 0%, #581c87 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 56,
              fontWeight: 'bold',
              color: 'white',
              boxShadow: '0 20px 40px rgba(124, 58, 237, 0.4)',
            }}
          >
            AA
          </div>

          {/* Name */}
          <h1
            style={{
              fontSize: 72,
              fontWeight: 'bold',
              color: 'white',
              margin: 0,
              marginTop: 20,
              letterSpacing: '-2px',
            }}
          >
            Abdelrhman Adel
          </h1>

          {/* Title */}
          <p
            style={{
              fontSize: 32,
              color: '#c4b5fd',
              margin: 0,
              fontWeight: 500,
            }}
          >
            Front-End Developer & Software Engineer
          </p>

          {/* Tech Stack */}
          <div
            style={{
              display: 'flex',
              gap: 16,
              marginTop: 30,
            }}
          >
            {['React', 'Next.js', 'Angular', 'TypeScript'].map((tech) => (
              <div
                key={tech}
                style={{
                  padding: '12px 24px',
                  borderRadius: 50,
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  color: 'white',
                  fontSize: 20,
                  fontWeight: 500,
                }}
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
