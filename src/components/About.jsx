const skills = [
  { title: 'Backend', items: ['Python', 'Django', 'Node.js', 'Java'] },
  { title: 'Bases de datos', items: ['PostgreSQL', 'MySQL', 'SQL Server'] },
  { title: 'Servidores', items: ['Ubuntu Server', 'Docker', 'Portainer', 'Git y Gitea'] },
  { title: 'Redes', items: ['Routers y redes LAN', 'Cámaras IP', 'VPN con Tailscale'] },
  { title: 'Frontend y móvil', items: ['React', 'Angular', 'Ionic', 'Kotlin'] },
];

const experience = [
  {
    role: 'Técnico de seguridad electrónica y redes',
    place: 'Televigilancia - Seguridad Inteligente',
    date: 'Noviembre de 2026 – actualidad',
    points: [
      'Instalo y mantengo alarmas, cámaras y cercas eléctricas en empresas, casas y conjuntos residenciales.',
      'Configuro las redes y conecto los equipos a la central de monitoreo.',
      'Atiendo fallas en sitio y capacito a los clientes en el uso de su sistema.',
    ],
  },
  {
    role: 'Asistente de ventas de equipos electrónicos',
    place: 'Tienda de computadores',
    date: 'Abril – octubre de 2024',
    points: ['Atendí a más de 200 clientes, manejé inventario y di soporte técnico básico.'],
  },
  {
    role: 'Coordinador de eventos',
    place: 'Ferias y conciertos',
    date: '2023 – 2024',
    points: ['Lideré equipos de hasta 10 personas en logística, proveedores y montaje.'],
  },
];

const certifications = [
  'Seguridad eléctrica (20 h) – ARL AXA Colpatria, 2026',
  'Seguridad vial para trabajadores (15 h) – ARL AXA Colpatria, 2026',
  'Python Essentials 1 y 2 – Cisco Networking Academy, 2023',
  'JavaScript Essentials 1 – Cisco Networking Academy, 2023',
  'NoSQL and DBaaS 101 – IBM, 2024',
  'Getting Started with Enterprise Data Science – IBM',
  'Azure Fundamentals: conceptos de la nube – Microsoft Learn (logro)',
];

function About() {
  return (
    <section id="about">
      <h2>Sobre mí</h2>
      <p style={{ fontSize: '1.08rem', maxWidth: 700, margin: '0 auto' }}>
        Combino dos mundos: el desarrollo de software y el trabajo técnico en campo.
        Programo sobre todo en Python con Django, y en casa convertí un portátil en un servidor
        con Ubuntu Server y Docker donde corren mis propias aplicaciones. En mi trabajo configuro
        redes y equipos de seguridad todos los días, así que entiendo bien cómo se conecta todo.
      </p>

      <h3>Habilidades técnicas</h3>
      <div className="skills-grid">
        {skills.map((group) => (
          <div key={group.title} className="skill-group">
            <h4>{group.title}</h4>
            <ul>
              {group.items.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
        ))}
      </div>

      <h3>Experiencia</h3>
      <div style={{ display: 'grid', gap: 16, maxWidth: 700, margin: '0 auto', textAlign: 'left' }}>
        {experience.map((job) => (
          <div key={job.role} className="project-card">
            <h4 style={{ margin: 0 }}>{job.role}</h4>
            <p style={{ margin: '4px 0', opacity: 0.8 }}>{job.place} · {job.date}</p>
            <ul>
              {job.points.map((p) => <li key={p}>{p}</li>)}
            </ul>
          </div>
        ))}
      </div>

      <h3>Educación</h3>
      <p style={{ maxWidth: 700, margin: '0 auto' }}>
        Ingeniería de Sistemas, 8.º semestre – Universidad Corhuila (en curso)
      </p>

      <h3>Certificaciones</h3>
      <ul style={{ maxWidth: 700, margin: '0 auto', textAlign: 'left' }}>
        {certifications.map((c) => <li key={c}>{c}</li>)}
      </ul>

      <h3>Habilidades personales</h3>
      <ul style={{ maxWidth: 400, margin: '0 auto', textAlign: 'left' }}>
        <li>Trabajo en equipo y liderazgo</li>
        <li>Comunicación clara con clientes</li>
        <li>Resolución de problemas</li>
        <li>Aprendizaje rápido</li>
      </ul>
    </section>
  );
}

export default About;
