function Projects() {
  return (
    <section id="projects">
      <h2>Proyectos Destacados</h2>
      <div style={{ display: 'grid', gap: 24 }}>
        <div className="project-card">
          <h3>Gestión de Turnos</h3>
          <p>
            Plataforma web para la gestión eficiente de turnos, con autenticación segura y exportación de datos.
            Permite optimizar procesos administrativos y mejorar la experiencia del usuario.
          </p>
          <p><strong>Tecnologías:</strong> Node.js, MySQL, Express, React</p>
          <a
            href="https://github.com/Gutierrezor"
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            Ver en GitHub
          </a>
        </div>
        <div className="project-card">
          <h3>RecordatorioApp</h3>
          <p>
            Aplicación móvil desarrollada en Kotlin para Android, que permite crear, editar y gestionar recordatorios de manera intuitiva.
          </p>
          <p><strong>Tecnologías:</strong> Kotlin, Android Studio</p>
           <a
            href="https://github.com/Gutierrezor/RecordatorioApp"
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            Ver en GitHub
          </a>
        </div>
        <div className="project-card">
          <h3>App Clima</h3>
          <p>
            Aplicación web desarrollada en React que permite consultar el clima de cualquier ciudad en tiempo real utilizando una API externa.
          </p>
          <p><strong>Tecnologías:</strong> React, JavaScript, API REST</p>
          <a
            href="https://github.com/Gutierrezor/app_clima"
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            Ver en GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
