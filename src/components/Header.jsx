function Header() {
  return (
    <header style={{
      zIndex: 100,
      background: '#232946',
      boxShadow: '0 2px 12px rgba(0,0,0,0.09)',
      padding: '0.5rem 0'
    }}>
      <nav style={{
        maxWidth: 900,
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 1.5rem'
      }}>
        <span style={{
          fontWeight: 700,
          color: '#fff',
          fontSize: '1.25rem',
          letterSpacing: 2,
          background: 'linear-gradient(90deg, #646cff 60%, #535bf2 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>Julián Gutiérrez</span>
        <ul style={{
          display: 'flex',
          gap: '1.2rem',
          listStyle: 'none',
          margin: 0,
          padding: 0
        }}>
          <li><a href="#home" style={{ color: '#fff', fontWeight: 500 }}>Inicio</a></li>
          <li><a href="#about" style={{ color: '#fff', fontWeight: 500 }}>Sobre mí</a></li>
          <li><a href="#projects" style={{ color: '#fff', fontWeight: 500 }}>Proyectos</a></li>
          <li><a href="#contact" style={{ color: '#fff', fontWeight: 500 }}>Contacto</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
