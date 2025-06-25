function Contact() {
  return (
    <section id="contact">
      <h2>Contacto</h2>
      <div>
        <p>📧 juliangutierrezor@gmail.com</p>
        <p>🔗 <a href="https://linkedin.com/in/julianandresgutierrez" target="_blank">LinkedIn</a></p>
        <p>💻 <a href="https://github.com/Gutierrezor" target="_blank">GitHub</a></p>

        {/* Botones de CV */}
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '1rem' }}>
          <a
            href="/CV_JulianGutierrez_2025.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            👁️ Ver CV
          </a>
          <a
            href="/CV_JulianGutierrez_2025.pdf"
            download
            className="btn"
          >
            📄 Descargar CV
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;

