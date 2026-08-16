"use client";

import { useState } from "react";

const Arrow = () => <span aria-hidden="true">↗</span>;

const faq = [
  ["¿Cómo participan los invitados?", "Con su celular, desde un enlace simple. No necesitan descargar una aplicación."],
  ["¿Las trivias son personalizadas?", "Sí. Creamos las preguntas alrededor de tu empresa, protagonistas o invitados."],
  ["¿Qué equipamiento necesitan?", "Podemos llevar pantalla, sonido, micrófonos e iluminación, o integrarnos a la técnica del salón."],
  ["¿Cuánto dura el Bloque Interactivo?", "Entre 45 y 90 minutos, pensado para sumar un momento de alto impacto dentro de tu evento."],
  ["¿Trabajan con eventos corporativos y sociales?", "Sí. Diseñamos cada propuesta para fiestas de empresa, cumpleaños, casamientos, 15 y celebraciones privadas."],
  ["¿Pueden sumar karaoke?", "Sí, como un complemento opcional dentro de la experiencia."],
];

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const consult = "#contacto";

  return (
    <main>
      <header className="header">
        <a className="brand" href="#inicio" aria-label="VERTIX, inicio">VERTIX<span>.</span><small>Juegos interactivos para eventos</small></a>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="Abrir menú">{menuOpen ? "×" : "☰"}</button>
        <nav className={menuOpen ? "nav open" : "nav"} aria-label="Principal">
          <a href="#inicio">Inicio</a><a href="#como-funciona">Cómo funciona</a><a href="#corporativos">Corporativos</a><a href="#sociales">Sociales</a><a href="#experiencia">Videos</a><a href="#nosotros">Nosotros</a><a href="#contacto">Contacto</a>
        </nav>
        <a className="button header-cta" href={consult}>Consultar disponibilidad <Arrow /></a>
      </header>

      <section id="inicio" className="hero">
        <div className="hero-copy"><p className="eyebrow">VERTIX / BUENOS AIRES</p><h1>Juegos interactivos<br /><em>para eventos.</em></h1><p className="lead">Trivias personalizadas, conducción en vivo y DJ para hacer participar a todos.</p><p className="sublead">Podés sumarnos durante 45–90 minutos o dejar en nuestras manos el entretenimiento de toda la fiesta.</p><div className="actions"><a className="button lime" href={consult}>Consultar disponibilidad <Arrow /></a><a className="text-link" href="#como-funciona">Ver cómo funciona <span>↓</span></a></div></div>
        <div className="hero-visual" aria-label="Experiencia VERTIX en vivo"><div className="screen"><span>01 / TRIVIA EN VIVO</span><strong>¿Quién conoce<br />más al equipo?</strong><div className="bars"><i></i><i></i><i></i></div></div><div className="host">HOST<br /><b>EN VIVO</b></div><div className="phone">A<br /><b>RESPONDER</b></div><div className="orbit orbit-one"></div><div className="orbit orbit-two"></div><p className="visual-note">PANTALLA · HOST · CELULARES · DJ</p></div>
      </section>

      <section className="credentials"><div><b>+5.000</b><span>eventos realizados por nuestro equipo</span></div><div><b>+300</b><span>reseñas 5 estrellas</span></div><div><b>cientos</b><span>de empresas</span></div><div><b>real</b><span>experiencia en eventos</span></div></section>

      <section className="trivia section"><div className="section-label">01 — EL PRODUCTO ESTRELLA</div><div className="split"><div><h2>Una trivia hecha<br /><em>para tu evento.</em></h2><p className="large-copy">Convertimos información sobre la empresa, los protagonistas o los invitados en un juego en vivo.</p><a className="text-link lime-text" href={consult}>Quiero una trivia para mi evento <Arrow /></a></div><ol className="steps"><li><span>01</span>Personalizamos las preguntas</li><li><span>02</span>Los invitados responden desde sus celulares</li><li><span>03</span>El host guía el juego en vivo</li><li><span>04</span>Resultados y rankings en pantalla</li><li><span>05</span>Cerramos con premiación</li></ol></div><div className="trivia-board"><div className="board-top">TRIVIA PERSONALIZADA <span>RANKING EN VIVO</span></div><div className="quiz-question">¿Cuál fue el hito del año?</div><div className="answers"><span>La expansión</span><span>El lanzamiento</span><span>El aniversario</span></div><div className="board-rank"><b>01</b> Equipo Norte <i></i><b>02</b> Equipo Centro <i></i><b>03</b> Equipo Sur <i></i></div></div></section>

      <section className="formats section"><div className="section-label">02 — DOS FORMAS DE CONTRATAR</div><h2>Elegí cómo querés<br /><em>sumarlo a tu evento.</em></h2><div className="format-grid"><article className="format-card"><p className="card-number">01 / BLOQUE INTERACTIVO</p><h3>45–90<br />minutos</h3><p>Un bloque de alto impacto dentro de un evento que ya tiene su estructura organizada.</p><ul><li>3 trivias personalizadas</li><li>Host + DJ / operación</li><li>Pantalla, sonido y micrófonos</li><li>Ranking y premiación</li></ul><small>Opcionales: juegos multimedia · karaoke · sorteos · social wall</small><a className="button dark" href={consult}>Consultar Bloque Interactivo <Arrow /></a></article><article className="format-card full"><p className="card-number">02 / EVENTO FULL</p><h3>Hasta<br />6 horas</h3><p>Nos ocupamos del entretenimiento de principio a fin.</p><ul><li>DJ y conducción integral</li><li>Trivias y juegos multimedia</li><li>Baile, sorteos y premios</li><li>Equipo de conducción y operación</li></ul><small>Karaoke opcional · social wall · técnica completa cuando hace falta</small><a className="button lime" href={consult}>Consultar Evento Full <Arrow /></a></article></div></section>

      <section id="como-funciona" className="how section"><div className="section-label">03 — ASÍ DE SIMPLE</div><div className="how-head"><h2>Vos elegís la fecha.<br /><em>Nosotros activamos la fiesta.</em></h2><p>Una experiencia profesional, fácil de contratar y lista para hacer participar a todos.</p></div><div className="how-grid"><article><b>01</b><h3>Nos contás sobre el evento</h3><p>Fecha, lugar, invitados y algunos datos básicos.</p></article><article><b>02</b><h3>Preparamos la experiencia</h3><p>Personalizamos las trivias y organizamos el contenido.</p></article><article><b>03</b><h3>Nosotros conducimos todo</h3><p>Llegamos, montamos o nos integramos al salón.</p></article><article><b>04</b><h3>Los invitados juegan</h3><p>Compiten, se ríen y ven los resultados en pantalla.</p></article></div></section>

      <section className="audiences"><article id="corporativos"><p className="eyebrow">PARA EMPRESAS</p><h2>Eventos<br /><em>corporativos.</em></h2><p>Trivias personalizadas, conducción y juegos para fiestas de empresa, aniversarios, encuentros internos y celebraciones.</p><a className="text-link" href={consult}>Ver propuesta corporativa <Arrow /></a></article><article id="sociales"><p className="eyebrow">PARA CELEBRAR</p><h2>Eventos<br /><em>sociales.</em></h2><p>Juegos personalizados para cumpleaños, casamientos, fiestas de 15 y celebraciones privadas.</p><a className="text-link" href={consult}>Ver propuesta social <Arrow /></a></article></section>

      <section className="tech section"><div><div className="section-label">04 — TODO LISTO PARA JUGAR</div><h2>Nos ocupamos también<br /><em>de la técnica.</em></h2></div><div className="tech-items"><span>SONIDO</span><span>PANTALLA</span><span>PROYECTOR</span><span>MICRÓFONOS</span><span>ILUMINACIÓN</span><span>OPERACIÓN</span></div><p>Podemos llevar el equipamiento completo o trabajar con la técnica ya disponible en el salón.</p></section>

      <section id="experiencia" className="experience"><div className="experience-copy"><p className="eyebrow">EXPERIENCIA REAL</p><h2>La energía no<br /><em>se explica.</em></h2><p>Se vive entre pantallas, preguntas, risas, música y ganas de ganar.</p><a href={consult} className="button lime">Pedinos videos reales <Arrow /></a></div><div className="experience-art"><div className="crowd">▲ ▲ ▲ ▲ ▲ ▲</div><div className="big-question">¿QUIÉN<br />VA GANANDO?</div><div className="score">01<br /><b>4820</b></div></div></section>

      <section id="nosotros" className="about section"><div className="section-label">05 — NOSOTROS</div><div className="split"><h2>Una propuesta nueva.<br /><em>Un equipo con historia.</em></h2><div><p className="large-copy">VERTIX nace del equipo detrás de Karaoken Shows, con años de experiencia produciendo entretenimiento para eventos sociales y corporativos.</p><p>No vendemos una app ni una producción imposible: llevamos juegos, conducción, música y técnica para que tu evento se sienta vivo.</p><p className="signature">by <b>Karaoken Shows</b></p></div></div></section>

      <section className="extras section"><div className="section-label">06 — COMPLEMENTOS</div><h2>También podemos sumar</h2><div className="extra-grid"><span>Juegos multimedia</span><span>Karaoke</span><span>Sorteos conducidos</span><span>Social wall</span></div></section>

      <section className="faq section"><div className="section-label">07 — PREGUNTAS FRECUENTES</div><h2>Todo claro.<br /><em>Antes de empezar.</em></h2><div className="faq-list">{faq.map(([question, answer], index) => <div className="faq-item" key={question}><button onClick={() => setOpenFaq(openFaq === index ? null : index)} aria-expanded={openFaq === index}><span>{question}</span><b>{openFaq === index ? "−" : "+"}</b></button>{openFaq === index && <p>{answer}</p>}</div>)}</div></section>

      <section id="contacto" className="contact"><div><p className="eyebrow">HABLEMOS</p><h2>¿Querés hacer<br /><em>participar a todos?</em></h2><p>Contanos fecha, zona y tipo de evento y te recomendamos la opción más adecuada.</p><a className="whatsapp" href="https://wa.me/5491100000000" target="_blank" rel="noreferrer">WhatsApp <Arrow /></a></div><form onSubmit={(e) => e.preventDefault()}><label>Nombre<input required placeholder="Tu nombre" /></label><div className="form-row"><label>Teléfono<input required placeholder="Tu teléfono" /></label><label>Email<input type="email" required placeholder="tu@email.com" /></label></div><div className="form-row"><label>Tipo de evento<select defaultValue=""><option value="" disabled>Seleccionar</option><option>Corporativo</option><option>Social</option></select></label><label>Fecha<input type="date" /></label></div><div className="form-row"><label>Zona<input placeholder="¿Dónde es?" /></label><label>Invitados<input placeholder="Cantidad aproximada" /></label></div><label>Mensaje<textarea placeholder="Contanos un poco más" rows={3}></textarea></label><button className="button lime" type="submit">Consultar disponibilidad <Arrow /></button></form></section>
      <footer><a className="brand" href="#inicio">VERTIX<span>.</span><small>Juegos interactivos para eventos</small></a><span>fiestas.com.ar</span><span>Una propuesta by Karaoken Shows</span></footer>
    </main>
  );
}
