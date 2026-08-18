"use client";

import { FormEvent, useState } from "react";
import { clients, featuredClientNames, marqueeClientNames } from "../src/data/clients";
import { reviews } from "../src/data/reviews";

const WHATSAPP = "5491168770400";
const wa = (message: string) => `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`;
const general = wa("Hola, quería consultar disponibilidad para una experiencia interactiva.");
const trivia = wa("Hola, quería consultar por las trivias personalizadas.");
const block = wa("Hola, quería consultar disponibilidad y precio del Bloque Interactivo.");
const full = wa("Hola, quería consultar disponibilidad y precio del Evento Full.");
const Arrow = () => <span aria-hidden="true">↗</span>;

const faq = [
  ["¿Cómo participan los invitados?", "Participan desde sus celulares, a través de un enlace simple durante el evento."],
  ["¿Necesitan descargar una aplicación?", "No. Pueden jugar desde el navegador de su celular."],
  ["¿Las trivias son personalizadas?", "Sí. Armamos preguntas sobre la empresa, los protagonistas o los invitados."],
  ["¿Cuánto dura el Bloque Interactivo?", "Entre 45 y 90 minutos, según la dinámica del evento."],
  ["¿Qué incluye el Evento Full?", "DJ, conducción, musicalización, trivias, juegos, sorteos, baile y operación durante toda la fiesta."],
  ["¿Llevan sonido y pantalla?", "Podemos llevar el equipamiento necesario o integrarnos a la técnica del salón."],
  ["¿Pueden usar la técnica del salón?", "Sí, siempre que sea compatible con la propuesta."],
  ["¿Pueden sumar karaoke?", "Sí, como bloque opcional dentro del entretenimiento."],
];

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", email: "", event: "", date: "", zone: "", guests: "", message: "" });
  const update = (key: keyof typeof form, value: string) => setForm({ ...form, [key]: value });
  const featuredClients = clients.filter((client) => featuredClientNames.includes(client.name) && client.asset);
  const marqueeClients = clients.filter((client) => marqueeClientNames.includes(client.name) && client.asset);
  const sendForm = (event: FormEvent) => {
    event.preventDefault();
    const rows = [
      "Hola, quería consultar disponibilidad para una experiencia interactiva.",
      `Nombre: ${form.name}`,
      `Teléfono: ${form.phone}`,
      form.email && `Email: ${form.email}`,
      form.event && `Tipo de evento: ${form.event}`,
      form.date && `Fecha: ${form.date}`,
      form.zone && `Zona: ${form.zone}`,
      form.guests && `Invitados aproximados: ${form.guests}`,
      form.message && `Mensaje: ${form.message}`,
    ].filter(Boolean).join("\n");
    window.open(wa(rows), "_blank", "noopener,noreferrer");
  };

  return <main>
    <header className="header">
      <a className="brand" href="#inicio" aria-label="SYNC, inicio">SYNC<span>.</span><small>Experiencias interactivas para eventos</small></a>
      <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="Abrir menú">{menuOpen ? "×" : "☰"}</button>
      <nav className={menuOpen ? "nav open" : "nav"} aria-label="Principal"><a href="#inicio">Inicio</a><a href="#como-funciona">Cómo funciona</a><a href="#corporativos">Corporativos</a><a href="#sociales">Sociales</a><a href="#en-vivo">Videos</a><a href="#nosotros">Nosotros</a><a href="#contacto">Contacto</a></nav>
      <a className="button header-cta" href={general} target="_blank" rel="noreferrer">Consultar disponibilidad <Arrow /></a>
    </header>

    <section id="inicio" className="hero">
      <video className="hero-video" autoPlay muted loop playsInline aria-hidden="true"><source src="/sync-hero-v3.mp4" type="video/mp4" /></video><div className="hero-video-overlay" aria-hidden="true"></div>
      <div className="hero-copy"><p className="eyebrow">SYNC / BUENOS AIRES</p><h1>Experiencias interactivas<br /><em>para eventos.</em></h1><p className="lead">Trivias personalizadas, conducción en vivo y DJ para hacer participar a todos.</p><p className="sublead">Podés sumarnos durante 45–90 minutos o dejar en nuestras manos el entretenimiento de toda la fiesta.</p><p className="hero-trust">Una nueva propuesta del equipo de Karaoken Shows.</p><div className="actions"><a className="button lime" href={general} target="_blank" rel="noreferrer">Consultar disponibilidad <Arrow /></a><a className="text-link" href="#como-funciona">Ver cómo funciona <span>↓</span></a></div></div>
    </section>

    <section className="credentials" aria-label="Trayectoria del equipo detrás de SYNC"><div className="trust-fixed"><p><span className="trust-mark trust-mark-years" aria-hidden="true"></span><b>17 AÑOS</b><small>de experiencia en eventos</small></p><p><span className="trust-mark trust-mark-events" aria-hidden="true"></span><b>+1.000 EVENTOS</b><small>corporativos y sociales</small></p><p><span className="trust-mark trust-mark-google" aria-hidden="true">G</span><b>+300 RESEÑAS</b><small><strong>★★★★★</strong> en Google</small></p></div></section>

    <section className="proof section"><div><div className="section-label">EMPRESAS</div><h2>Empresas que confiaron<br /><em>en nuestro equipo.</em></h2><p>Durante nuestra trayectoria trabajamos en eventos para empresas y organizaciones de distintos rubros.</p></div><div><div className="featured-logo-grid" aria-label="Empresas que confiaron en nuestro equipo">{featuredClients.map((client) => <div className="featured-client-mark" key={client.name} title={client.name}><img src={client.asset} alt={client.name} loading="lazy" /></div>)}</div><div className="company-marquees" aria-label="Más empresas que confiaron en nuestro equipo"><div className="company-track">{[...marqueeClients, ...marqueeClients, ...marqueeClients, ...marqueeClients].map((client, index) => <div className="client-mark" key={`a-${index}`} title={client.name}><img src={client.asset} alt={client.name} loading="lazy" /></div>)}</div></div></div></section>

    <section className="sync-intro section"><div><p className="section-label">QUÉ ES SYNC</p><h2>Hacemos participar<br /><em>a todo el evento.</em></h2></div><div className="sync-intro-copy"><p>Combinamos trivias personalizadas, conducción en vivo, juegos y DJ para que los invitados dejen de mirar y empiecen a participar.</p><div className="sync-pillars"><article><b>TRIVIAS</b><span>Personalizadas para cada evento.</span></article><article><b>CONDUCCIÓN</b><span>Un host que guía y mantiene el ritmo.</span></article><article><b>JUEGOS</b><span>Dinámicas para hacer participar al grupo.</span></article><article><b>DJ</b><span>Música y operación integradas a la experiencia.</span></article></div></div></section>

    <section className="trivia section"><div className="section-label">01 — PRODUCTO ESTRELLA</div><div className="split"><div><h2>Una trivia hecha<br /><em>para tu evento.</em></h2><p className="large-copy">Convertimos información sobre la empresa, los protagonistas o los invitados en un juego en vivo.</p><p className="no-app">No necesitan descargar ninguna aplicación.</p><a className="text-link lime-text" href={trivia} target="_blank" rel="noreferrer">Quiero una trivia para mi evento <Arrow /></a></div><ol className="steps"><li><span>01</span>Personalizamos las preguntas</li><li><span>02</span>Los invitados responden desde sus celulares</li><li><span>03</span>El host conduce el juego en vivo</li><li><span>04</span>Resultados y rankings aparecen en pantalla</li><li><span>05</span>Cerramos con premiación</li></ol></div><div className="trivia-board"><div className="board-top">TRIVIA PERSONALIZADA <span>RANKING EN VIVO</span></div><div className="quiz-question">¿Cuál fue el hito del año?</div><div className="answers"><span>La expansión</span><span>El lanzamiento</span><span>El aniversario</span></div><div className="board-rank"><b>01</b> Equipo Norte <i></i><b>02</b> Equipo Centro <i></i><b>03</b> Equipo Sur <i></i></div></div><p className="trivia-footnote">La trivia es nuestro producto estrella, pero también podemos combinarla con juegos, música, sorteos y conducción integral.</p></section>

    <section className="formats section"><div className="section-label">02 — DOS FORMAS DE CONTRATAR</div><h2>Elegí cómo querés<br /><em>sumarlo a tu evento.</em></h2><div className="format-grid"><article className="format-card"><p className="card-number">01 / BLOQUE INTERACTIVO</p><h3>45–90<br />minutos</h3><p>Un bloque de entretenimiento dentro de un evento que ya tiene su estructura organizada.</p><ul><li>3 trivias personalizadas</li><li>Host / conductor en vivo</li><li>DJ / operador</li><li>Pantalla, proyección, sonido y micrófonos</li><li>Ranking y premiación</li></ul><p className="optionals">Opcionales</p><small>Juegos multimedia · Sorteos · Karaoke · Social wall</small><a className="button dark" href={block} target="_blank" rel="noreferrer">Consultar Bloque Interactivo <Arrow /></a></article><article className="format-card full"><p className="card-number">02 / EVENTO FULL</p><h3>Hasta<br />6 horas</h3><p>Nos ocupamos del entretenimiento durante toda la fiesta.</p><ul><li>DJ, conducción y musicalización</li><li>Trivias personalizadas</li><li>Juegos multimedia</li><li>Sorteos y premios</li><li>Tandas de baile</li><li>Coordinación y operación</li></ul><p className="optionals">Opcionales</p><small>Karaoke · Social wall · Técnica completa cuando sea necesaria</small><a className="button lime" href={full} target="_blank" rel="noreferrer">Consultar Evento Full <Arrow /></a></article></div></section>

    <section id="como-funciona" className="how section"><div className="section-label">03 — CÓMO FUNCIONA</div><div className="how-head"><h2>Así de<br /><em>simple.</em></h2><p>Nos contás lo básico. Nosotros preparamos el contenido y llevamos la dinámica al evento.</p></div><div className="how-grid"><article><b>01</b><h3>Nos contás sobre el evento</h3><p>Fecha, lugar, cantidad de invitados y algunos datos.</p></article><article><b>02</b><h3>Preparamos la experiencia</h3><p>Personalizamos las trivias y organizamos el contenido.</p></article><article><b>03</b><h3>Nos ocupamos de la operación</h3><p>Llegamos con nuestra técnica o nos integramos a la del salón.</p></article><article><b>04</b><h3>Los invitados participan</h3><p>Juegan, compiten y ven resultados y rankings en pantalla.</p></article></div></section>

    <section className="quick-trust"><div><p className="section-label">RESPALDO</p><h2>Una nueva propuesta del equipo de <em>Karaoken Shows.</em></h2></div><div><p>SYNC nace del equipo detrás de Karaoken Shows, con 17 años de experiencia, más de 5.000 eventos realizados y cientos de empresas atendidas.</p><p className="trust-signoff">by Karaoken Shows</p><a className="text-link" href="https://www.showdekaraoke.com/" target="_blank" rel="noreferrer">Conocer Karaoken Shows <Arrow /></a></div></section>
    <section className="reviews section" data-review-widget-slot="google-reviews"><div><div className="section-label">RESEÑAS</div><h2>Más de 290 reseñas<br /><em>en Google.</em></h2><p>Opiniones reales de clientes del equipo detrás de SYNC.</p><div className="google-proof"><img src="/clients/google.svg" alt="Google" /><span>★★★★★</span><strong>5.0</strong><small>+290 reseñas</small></div><a className="button review-cta" href="https://maps.app.goo.gl/djVvNZNHfwS8qsja9" target="_blank" rel="noreferrer">Ver todas las reseñas en Google <Arrow /></a></div>{reviews.length > 0 && <div className="review-slots">{reviews.map((review) => <article key={review.name}><span className="review-stars">★★★★★</span><p>{review.quote}</p><footer><b>{review.name}</b></footer></article>)}</div>}</section>

    <section className="audiences"><article id="corporativos"><p className="eyebrow">PARA EMPRESAS</p><h2>Experiencias interactivas<br /><em>para empresas.</em></h2><p>Trivias personalizadas, conducción y música para fiestas de fin de año, aniversarios, encuentros internos y celebraciones corporativas.</p><p className="audience-detail">Historia, cultura, productos, integrantes, acontecimientos y preguntas internas.</p><a className="text-link" href={general} target="_blank" rel="noreferrer">Ver corporativos <Arrow /></a></article><article id="sociales"><p className="eyebrow">PARA CELEBRAR</p><h2>Experiencias interactivas<br /><em>para fiestas.</em></h2><p>Trivias y juegos personalizados alrededor de los protagonistas, amigos, familia e invitados.</p><p className="audience-detail">Cumpleaños, casamientos, fiestas de 15 y aniversarios.</p><a className="text-link" href={general} target="_blank" rel="noreferrer">Ver sociales <Arrow /></a></article></section>

    <section className="tech section"><div><div className="section-label">04 — TÉCNICA CUANDO HACE FALTA</div><h2>Nos ocupamos también<br /><em>de la técnica.</em></h2></div><div className="tech-items"><span>SONIDO</span><span>PANTALLA</span><span>PROYECTOR</span><span>MICRÓFONOS INALÁMBRICOS</span><span>ILUMINACIÓN</span><span>OPERACIÓN</span></div><p>Podemos llevar el equipamiento necesario o trabajar con la técnica ya disponible en el salón.</p></section>

    <section id="en-vivo" className="experience"><div className="experience-copy"><p className="eyebrow">MATERIAL REAL</p><h2>SYNC<br /><em>en vivo.</em></h2><p>Host, pantalla, celulares, música y gente participando al mismo tiempo.</p><a href={general} target="_blank" rel="noreferrer" className="button lime">Pedinos videos reales <Arrow /></a></div><div className="experience-art"><span className="placeholder-label">ESPACIO PARA VIDEOS, FOTOS Y CAPTURAS REALES</span><div className="big-question">¿QUIÉN<br />VA GANANDO?</div><div className="score">01<br /><b>4820</b></div></div></section>

    <section id="nosotros" className="about section"><div className="section-label">07 — RESPALDO</div><div className="split"><h2>Una propuesta nueva.<br /><em>Un equipo con historia.</em></h2><div><p className="large-copy">SYNC nace del equipo de Karaoken Shows.</p><p>Durante 17 años realizamos más de 5.000 eventos sociales y corporativos, trabajando con cientos de empresas y construyendo una reputación respaldada por más de 290 opiniones en Google.</p><p>Ahora aplicamos esa experiencia a una propuesta especializada en experiencias interactivas para eventos.</p><div className="trust-points"><span>17 años</span><span>+5.000 eventos</span><span>+290 reseñas</span><span>Cientos de empresas</span></div><a className="text-link trajectory-link" href="https://www.showdekaraoke.com/" target="_blank" rel="noreferrer">Conocer Karaoken Shows <Arrow /></a><p className="signature">by <b>Karaoken Shows</b></p></div></div></section>

    <section className="extras section"><div className="section-label">08 — COMPLEMENTOS</div><h2>También podemos sumar</h2><div className="extra-grid"><article><b>Juegos multimedia</b><span>Dinámicas por equipos o participantes, con o sin celular.</span></article><article><b>Karaoke</b><span>Bloques opcionales como parte del entretenimiento.</span></article><article><b>Sorteos</b><span>Sorteos personalizados, musicalizados y conducidos en vivo.</span></article><article><b>Social wall</b><span>Fotos de los invitados en pantalla durante el evento.</span></article></div></section>

    <section className="faq section"><div><div className="section-label">09 — PREGUNTAS FRECUENTES</div><h2>Preguntas<br /><em>frecuentes.</em></h2></div><div className="faq-list">{faq.map(([question, answer], index) => <div className="faq-item" key={question}><button onClick={() => setOpenFaq(openFaq === index ? null : index)} aria-expanded={openFaq === index}><span>{question}</span><b>{openFaq === index ? "−" : "+"}</b></button>{openFaq === index && <p>{answer}</p>}</div>)}</div></section>

    <section id="contacto" className="contact"><div><p className="eyebrow">CONSULTÁ DISPONIBILIDAD</p><h2>¿Querés hacer<br /><em>participar a todos?</em></h2><p>Contanos fecha, zona y tipo de evento y te recomendamos la opción más adecuada.</p><a className="whatsapp" href={general} target="_blank" rel="noreferrer">Escribir por WhatsApp <Arrow /></a></div><form onSubmit={sendForm}><label>Nombre<input required value={form.name} onChange={(e) => update("name", e.target.value)} placeholder="Tu nombre" /></label><div className="form-row"><label>Teléfono<input required value={form.phone} onChange={(e) => update("phone", e.target.value)} placeholder="Tu teléfono" /></label><label>Email <small>(opcional)</small><input type="email" value={form.email} onChange={(e) => update("email", e.target.value)} placeholder="tu@email.com" /></label></div><div className="form-row"><label>Tipo de evento<select value={form.event} onChange={(e) => update("event", e.target.value)}><option value="">Seleccionar</option><option>Corporativo</option><option>Social</option></select></label><label>Fecha<input type="date" value={form.date} onChange={(e) => update("date", e.target.value)} /></label></div><div className="form-row"><label>Zona<input value={form.zone} onChange={(e) => update("zone", e.target.value)} placeholder="¿Dónde es?" /></label><label>Invitados<input value={form.guests} onChange={(e) => update("guests", e.target.value)} placeholder="Cantidad aproximada" /></label></div><label>Mensaje<textarea value={form.message} onChange={(e) => update("message", e.target.value)} placeholder="Contanos un poco más" rows={3}></textarea></label><button className="button lime" type="submit">Consultar disponibilidad <Arrow /></button></form></section>
    <a className="whatsapp-float" href={general} target="_blank" rel="noreferrer" aria-label="Consultar por WhatsApp"><svg viewBox="0 0 32 32" aria-hidden="true"><path d="M16 3.2a12.6 12.6 0 0 0-10.9 19L3.5 28.8l6.8-1.8A12.7 12.7 0 1 0 16 3.2Zm0 22.9a10.3 10.3 0 0 1-5.2-1.4l-.4-.2-4 1 1.1-3.8-.3-.4a10.3 10.3 0 1 1 8.8 4.8Zm5.6-7.7c-.3-.2-1.9-.9-2.2-1s-.5-.2-.7.2-.8 1-1 1.2-.4.2-.7 0a8.3 8.3 0 0 1-2.4-1.5 9 9 0 0 1-1.7-2.1c-.2-.3 0-.5.1-.7l.5-.5c.2-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-1-2.3c-.3-.7-.6-.6-.8-.6h-.7c-.2 0-.5.1-.8.4s-1 1-1 1.8 1 1.7 1.1 1.8a12 12 0 0 0 4.7 4.1c.6.3 1.1.5 1.5.7.6.2 1.2.2 1.7.1.5-.1 1.9-.8 2.2-1.5s.3-1.3.2-1.5c-.1-.1-.3-.2-.6-.4Z" /></svg></a>
    <footer><a className="brand" href="#inicio">SYNC<span>.</span><small>Experiencias interactivas para eventos</small></a><span>fiestas.com.ar</span><span>Una propuesta by Karaoken Shows</span></footer>
  </main>;
}
