const projects = [
  {
    name: 'LifeManager (MiHub)',
    description:
      'Aplicación full-stack para organizar notas, calendario, recordatorios, hábitos y finanzas personales desde un solo panel. Corre en mi servidor y se sincroniza entre PC, tablet y celular.',
    tech: 'React, TypeScript, NestJS, Prisma, PostgreSQL, Docker',
    link: 'https://github.com/Gutierrezor/life-manager-app',
  },
  {
    name: 'Homelab: servidor propio',
    description:
      'Convertí un portátil sin uso en un servidor con Ubuntu Server. Corren en Docker Portainer, Gitea, Immich, Uptime Kuma y Homepage, con acceso remoto por Tailscale y respaldos automáticos a Google Drive.',
    tech: 'Ubuntu Server, Docker, Tailscale, rclone, cron',
    link: 'https://github.com/Gutierrezor/respaldo-homelab',
  },
  {
    name: 'App Clima',
    description:
      'Aplicación de escritorio que consulta el clima de cualquier ciudad: temperatura, sensación térmica, humedad, viento y presión, con manejo de errores de conexión.',
    tech: 'Python, Tkinter, API REST',
    link: 'https://github.com/Gutierrezor/app_clima',
  },
  {
    name: 'Generador de contraseñas',
    description:
      'Programa que genera contraseñas seguras eligiendo la longitud y si lleva mayúsculas, números y caracteres especiales, usando el módulo secrets de Python.',
    tech: 'Python',
    link: 'https://github.com/Gutierrezor/passwordGene',
  },
  {
    name: 'Gestión de Turnos',
    description:
      'Sistema web para gestionar turnos, con inicio de sesión y exportación de datos a Excel para facilitar el trabajo administrativo.',
    tech: 'Node.js, MySQL',
  },
];

function Projects() {
  return (
    <section id="projects">
      <h2>Proyectos destacados</h2>
      <div style={{ display: 'grid', gap: 24 }}>
        {projects.map((p) => (
          <div key={p.name} className="project-card">
            <h3>{p.name}</h3>
            <p>{p.description}</p>
            <p><strong>Tecnologías:</strong> {p.tech}</p>
            {p.link && (
              <a href={p.link} target="_blank" rel="noopener noreferrer" className="btn">
                Ver en GitHub
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
