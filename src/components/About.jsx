function About() {
  return (
    <section id="about">
      <h2>Sobre mí</h2>
      <p style={{ fontSize: '1.08rem', maxWidth: 700 }}>
        Soy estudiante de Ingeniería de Sistemas con enfoque en el desarrollo web y móvil.
        Me destaco por mi proactividad, creatividad y capacidad para trabajar en equipo.
        Disfruto resolver problemas complejos y mantenerme actualizado en las últimas tendencias tecnológicas.
      </p>
      <h3>Habilidades técnicas</h3>
      <ul style={{ columns: 2, maxWidth: 400, margin: '0 auto', fontSize: '1rem' }}>
        <li>JavaScript / TypeScript</li>
        <li>React</li>
        <li>Node.js</li>
        <li>MySQL</li>
        <li>Kotlin</li>
        <li>Android</li>
        <li>Angular</li>
        <li>Ionic</li>
        <li>HTML5 & CSS3</li>
        <li>Git & GitHub</li>
      </ul>
      <h3>Habilidades blandas</h3>
      <ul style={{ maxWidth: 400, margin: '0 auto', fontSize: '1rem' }}>
        <li>Comunicación efectiva</li>
        <li>Trabajo en equipo</li>
        <li>Gestión del tiempo</li>
        <li>Adaptabilidad</li>
        <li>Pensamiento crítico</li>
      </ul>
    </section>
  );
}

export default About;
