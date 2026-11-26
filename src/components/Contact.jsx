function Contact() {
  return (
    <section id="contact">
      <h2>Contacto</h2>
      <div>
        <p>📧 <a href="mailto:juliangutierrezor@gmail.com">juliangutierrezor@gmail.com</a></p>
        <p>🔗 <a href="https://www.linkedin.com/in/julianandresgutierrez" target="_blank">LinkedIn</a></p>
        <p>💻 <a href="https://github.com/Gutierrezor" target="_blank">GitHub</a></p>

        {/* Botones de CV */}
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '1rem' }}>
          <a
            href="/cv.html"
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            📄 Ver y descargar CV
          </a>

        </div>
      </div>
    </section>
  );
}

export default Contact;

