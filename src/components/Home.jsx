function Home() {
  return (
    <section id="home" style={{ textAlign: 'center' }}>
      {/* Foto de perfil */}
      <img
        src="/JULIAN ANDRES GUTIERREZ ORDOÑES.jpg"
        alt="Julián Andrés Gutiérrez Ordóñez"
        style={{
          width: '180px',
          height: '180px',
          borderRadius: '50%',
          objectFit: 'cover',
          border: '4px solid #646cff',
          marginBottom: '1.2rem',
          boxShadow: '0 2px 16px rgba(100,108,255,0.13)'
        }}
      />
      <h1>Julián Andrés Gutiérrez Ordóñez</h1>
      <h2 style={{ fontWeight: 400, color: '#535bf2', marginBottom: 12 }}>
        Desarrollador Backend Python · Django | Técnico en seguridad electrónica y redes
      </h2>
      <p style={{ maxWidth: 650, margin: '0 auto', fontSize: '1.1rem' }}>
        Estudiante de 8.º semestre de Ingeniería de Sistemas en la Universidad Corhuila (Neiva, Huila).
        Me enfoco en el backend con Python y Django, administro mi propio servidor Linux con Docker
        y trabajo como técnico en Televigilancia configurando redes, cámaras y alarmas.
        Busco una práctica o un cargo junior en desarrollo backend o infraestructura.
      </p>
      {/* Botones de contacto rápido */}
      <div style={{
        marginTop: 24,
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: 16
      }}>
        <a href="mailto:juliangutierrezor@gmail.com" className="btn">Email</a>
        <a href="https://www.linkedin.com/in/julianandresgutierrez" className="btn" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://github.com/Gutierrezor" className="btn" target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
    </section>
  );
}

export default Home;
