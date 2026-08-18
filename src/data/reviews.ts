export type Review = {
  name: string;
  quote: string;
  context?: string;
  avatar?: string;
  rating: 5;
};

// Add only verbatim, approved Google reviews here. The UI intentionally renders no review cards until then.
export const reviews: Review[] = [
  { name: "Alejandra Gallelli", context: "Evento social / adultos", rating: 5, quote: "EXCELENTE!!! Los súper recomiendo: súper puntuales, los chicos re profesionales, respetuosos y buena onda. Animaron la fiesta increíblemente y pasamos una noche soñada. Eduardo el conductor es lo máximo. Los vamos a volver a contratar: tenés fiesta asegurada. Matías, súper claro desde el primer momento; realmente un placer." },
  { name: "Ceci Morkunas", context: "Evento social / adultos", rating: 5, quote: "Excelente servicio, calidad de sonido, iluminación y animación de Edu y Víctor. Toda la atención desde el primer contacto fue muy buena. Cumplieron con todo, muy buena la onda durante el desarrollo del evento, hasta el final. Recomendable 100%." },
  { name: "Mayra Maioli", context: "Evento social / adultos", rating: 5, quote: "Muy divertido! Súper recomendable! Eduardo un 10 en la conducción y Diego en la consola buscando temas y haciendo bailar a todos!" },
  { name: "Sabrina Weintraub", context: "Evento social / adultos", rating: 5, quote: "Espectacular servicio!! Muy divertido, tienen en cuenta todo lo que solicitás, le ponen toda la onda! Lo súper recomiendo." },
  { name: "Paula Tuñon", context: "Evento social", rating: 5, quote: "Pasamos un buen momento grandes y chicos. La propuesta es integradora y divertida. Se adaptan a lo que uno necesita." },
  { name: "Verónica Gimenez", context: "Evento social", rating: 5, quote: "Los súper recomiendo!! Puntualidad y profesionalismo!! La pasamos genial, nos divertimos muchísimo!! Edu el animador un genio total!! Gracias y pronto volveremos a llamarlos!!" },
];
