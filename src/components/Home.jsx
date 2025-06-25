function Home() {
  return (
    <section id="home" style={{ textAlign: 'center' }}>
      {/* Foto de perfil */}
      <img 
        src="/JULIAN ANDRES GUTIERREZ ORDOÑES.jpg" 
        alt="Julian Andres Gutierrez Ordoñes" 
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
      <h1>Julián Andrés Gutiérrez Ordoñez</h1>
      <h2 style={{ fontWeight: 400, color: '#535bf2', marginBottom: 12 }}>Desarrollador Full Stack | Ingeniería de Sistemas</h2>
      <p style={{ maxWidth: 600, margin: '0 auto', fontSize: '1.1rem' }}>
        Soy un apasionado desarrollador de software con experiencia en proyectos web y móviles. 
        Me especializo en crear soluciones eficientes y escalables, siempre enfocado en la mejora continua y el aprendizaje de nuevas tecnologías. 
        Busco aportar valor a equipos de trabajo y enfrentar nuevos retos profesionales.
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
        <a href="https://linkedin.com/in/julianandresgutierrez" className="btn" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://github.com/Gutierrezor" className="btn" target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
    </section>
  );
}

export default Home;
