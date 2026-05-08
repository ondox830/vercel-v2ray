export default function Home() {
  return (
    <main style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center',
      padding: '2rem',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>V2Ray on Vercel</h1>
      <p style={{ fontSize: '1.2rem', color: '#666', textAlign: 'center', maxWidth: '600px' }}>
        This is a V2Ray proxy service running on Vercel with Speed Insights enabled.
      </p>
      <div style={{ marginTop: '2rem', padding: '1rem', background: '#f5f5f5', borderRadius: '8px' }}>
        <p style={{ margin: 0, color: '#333' }}>
          ✓ Speed Insights Active
        </p>
      </div>
    </main>
  )
}
