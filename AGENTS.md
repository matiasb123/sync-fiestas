# AGENTS.md — SYNC / sync-fiestas

Este repositorio es la fuente de verdad del sitio web de SYNC.

## Regla principal
Trabajá como un agente senior responsable de un producto en producción:
1. inspeccioná el estado actual;
2. entendé el objetivo comercial;
3. implementá con el menor cambio necesario;
4. verificá visualmente desktop + mobile;
5. ejecutá lint/build;
6. corregí regresiones;
7. resumí qué cambiaste y qué queda pendiente.

No declares una tarea terminada si solo modificaste código sin verificar el resultado.

## Producto y posicionamiento
Marca: SYNC.
Descriptor principal: Experiencias interactivas para eventos.

SYNC es entretenimiento interactivo para eventos creado por el equipo detrás de Karaoken Shows.

No es una productora general de eventos, agencia de RRHH, catering, alquiler técnico ni solamente una empresa de trivias.

El hilo conductor es: hacer participar a los invitados.

Producto estrella: trivias personalizadas en vivo.

Oferta ampliada:
- host / conductor en vivo;
- DJ / operador;
- juegos multimedia;
- rankings y premiaciones;
- sorteos;
- social wall;
- karaoke opcional;
- técnica y operación cuando haga falta.

No mencionar Crowdpurr públicamente.

## Formatos
### BLOQUE INTERACTIVO
45–90 minutos.
Debe sentirse como: “Sumo un bloque espectacular dentro de un evento que ya está organizado.”

Base:
- trivias personalizadas;
- conductor;
- DJ / operador;
- ranking / premiación;
- técnica necesaria o integración con la del salón.

Opcionales:
- juegos multimedia;
- sorteos;
- karaoke;
- social wall.

### EVENTO FULL
Hasta 6 horas.
Debe sentirse como: “Nos ocupamos del entretenimiento durante toda la fiesta.”

Incluye:
- DJ;
- conducción integral;
- trivias;
- juegos;
- sorteos;
- baile;
- coordinación / operación;
- técnica cuando corresponde.

Opcionales:
- karaoke;
- social wall.

## Prioridad comercial
1. Corporativos.
2. Sociales.

Corporativos:
- fin de año;
- aniversarios;
- encuentros internos;
- celebraciones;
- team building lúdico.

No llevar SYNC hacia consultoría de RRHH o gamificación compleja.

Sociales:
- cumpleaños de adultos;
- casamientos;
- 15;
- aniversarios.

No liderar la marca con Kids.

## Respaldo
Frase aprobada:
“SYNC nace del equipo detrás de Karaoken Shows.”

Claims aprobados para el equipo:
- 17 años de experiencia;
- +5.000 eventos realizados por el equipo;
- +290 reseñas en Google;
- cientos de empresas y organizaciones atendidas.

No atribuir esa historia directamente a SYNC como si la nueva marca hubiera existido todo ese tiempo.

Google Reviews:
https://maps.app.goo.gl/djVvNZNHfwS8qsja9

Las reseñas en `src/data/reviews.ts` son reales y aprobadas.
No inventar testimonios, empresas, cargos, casos, eventos, métricas o clientes.

## Clientes / logos
`src/data/clients.ts` contiene la lista aprobada.

Usar logos reales.

Prioridad:
1. asset oficial / brand kit;
2. web oficial;
3. Wikimedia Commons si es inequívoco;
4. otra fuente fiable solo si no hay alternativa.

Preferir SVG. Segunda opción: PNG transparente de buena calidad.

Nunca:
- recrear logos con tipografías aproximadas;
- generar logos con IA;
- deformar proporciones;
- mostrar logos demasiado chicos.

Presentación preferida:
- 8–12 marcas reconocibles, grandes y claras;
- luego, si aporta, una única cinta suave con el resto.

Evitar dos marquees agresivos simultáneos.

## Jerarquía de la Home
La Home debe convertir por sí sola.

Orden comercial deseado:
1. Header
2. Hero
3. Credenciales
4. Logos principales
5. Google Reviews / testimonios
6. Respaldo breve Karaoken Shows
7. Qué hace SYNC
8. Trivia como producto estrella
9. Bloque Interactivo vs Evento Full
10. Cómo funciona
11. Corporativos vs Sociales
12. Técnica
13. SYNC en acción / media
14. Trayectoria si aporta
15. Complementarios
16. FAQ
17. CTA / WhatsApp
18. Footer

No es una regla pixel-perfect, pero social proof debe aparecer alto y trivia no debe comerse toda la identidad de SYNC.

## Hero
H1 aprobado:
“Experiencias interactivas para eventos”

Bajada base:
“Trivias personalizadas, conducción en vivo y DJ para hacer participar a todos.”

Idea secundaria:
“Podés sumarnos durante 45–90 minutos o dejar en nuestras manos el entretenimiento de toda la fiesta.”

CTA:
“Consultar disponibilidad”

CTA secundario:
“Ver cómo funciona”

Respaldo corto:
“Una nueva propuesta del equipo de Karaoken Shows.”

### Video de fondo
Puede ser IA como atmósfera, no como prueba documental.

Debe:
- autoplay;
- muted;
- loop;
- playsInline;
- poster/fallback;
- object-fit: cover;
- overlay oscuro suficiente;
- no controles;
- no audio;
- estar optimizado;
- respetar `prefers-reduced-motion`.

No rotular IA como “material real”, “evento real” o equivalente.

El evento es protagonista:
- público;
- pantalla;
- celulares;
- participación;
- luces;
- host secundario;
- DJ/técnica secundaria.

Evitar primeros planos humanos IA.

## Identidad visual
Conservar:
- negro / near-black;
- lima eléctrico;
- violeta;
- blanco / off-white.

Debe sentirse:
- moderna;
- premium;
- energética;
- interactiva;
- adulta;
- corporate-friendly.

No debe sentirse:
- SaaS;
- crypto;
- Bluetooth;
- cyberpunk;
- infantil;
- plantilla corporativa genérica;
- brutalismo editorial excesivo.

### Contraste
Sobre negro/violeta oscuro: lima puede ser protagonista.
Sobre blanco/crema: no usar lima para texto principal o titulares grandes si pierde contraste. Usar negro o violeta oscuro.

Legibilidad > pureza de paleta.

## Copy
Español de Argentina.
Directo, concreto, comercial, fácil de escanear.

Evitar humo de agencia:
- “transformamos momentos en experiencias inolvidables”
- “creamos conexiones que trascienden”
- “llevamos tu evento al siguiente nivel”

Preferir explicar qué pasa realmente.

## WhatsApp
CTA principal.
Mantener mensajes específicos para general, trivia, Bloque y Full cuando aporten.
No agregar fricción innecesaria.
El icono flotante debe ser el icono real de WhatsApp.

## Media / videos
Separar:
- Hero: atmosférico, puede ser IA.
- Videos protagonistas: estándar de realismo mucho mayor.
- Material real: puede editarse sutilmente, no falsificarse.

No crear testimonios falsos a cámara.

## Dominio / naming
La decisión `fiestas.com.ar` vs `synceventos.com` no está cerrada.

No cambiar:
- dominio;
- canonical;
- emails;
- redirects;
- SEO de migración;
sin pedido explícito.

Marca visible: SYNC.
No renombrar a “SYNC Eventos” salvo pedido explícito.

## Ingeniería
Proyecto:
- React 19;
- vinext/Vite;
- TypeScript;
- CSS global / TSX;
- Vercel;
- GitHub `matiasb123/sync-fiestas`;
- producción `main`.

Seguir patrones existentes antes de introducir frameworks/librerías nuevas.

No commitear:
- API keys;
- tokens;
- secretos;
- `.env` sensibles.

## Git / repo
El repositorio es la fuente de verdad.
No trabajar sobre copias sueltas sin sincronizar.

Usar hilos/worktrees separados solo para tareas independientes.

Antes de integrar:
- revisar diff;
- revisar visualmente;
- correr checks;
- evitar cambios laterales innecesarios.

## QA obligatorio
Antes de decir “terminado”:

```bash
npm run lint
npm run build
```

En cambios visuales revisar:
- desktop;
- mobile;
- header;
- CTA;
- overflow;
- contraste;
- imágenes/logos;
- textos cortados;
- animaciones;
- carga del hero/media.

Si hay errores preexistentes, reportarlos claramente.

## Performance
- mobile first-class;
- optimizar video;
- lazy load fuera del hero;
- SVG para logos cuando sea posible;
- no bloquear LCP con decoración;
- poster/fallback para video;
- no sacrificar conversión por animación.

## Scope discipline
No convertir una tarea específica en un rediseño total.

Si el usuario pide “arreglá logos”, no cambiar packs, naming, dominio o toda la estructura salvo necesidad técnica.

Problemas fuera de alcance: reportarlos, no reescribir silenciosamente.

## Método de trabajo
Para tareas medianas/grandes:

### A. Inspección
- leer este AGENTS.md;
- inspeccionar archivos relevantes;
- entender estado actual.

### B. Plan interno
- definir archivos a tocar;
- criterios de aceptación;
- riesgos.

### C. Implementación
Cambios coherentes y acotados.

### D. Verificación
- lint;
- build;
- desktop;
- mobile;
- comportamiento real.

### E. Autocorrección
Si algo se ve obviamente mal, corregirlo antes de entregar.

### F. Entrega
Responder corto con:
- qué cambió;
- archivos principales;
- checks ejecutados;
- limitaciones;
- URL/deploy si corresponde.

## Estándar “hiper pro”
Optimizar para:
- conversión;
- claridad;
- credibilidad;
- coherencia;
- responsive;
- buen gusto;
- mantenibilidad.

No sobreingenierizar.

El resultado debe parecer trabajo de una agencia digital premium con criterio comercial, no una demo generada automáticamente.

## Modelo / esfuerzo
Este archivo no cambia por sí solo el modelo activo.

Guía de trabajo:
- tareas rutinarias: modelo económico;
- implementación compleja: modelo intermedio;
- arquitectura, dirección visual, decisiones ambiguas o auditoría final: modelo más capaz;
- no usar razonamiento máximo en cambios triviales.

Con el plan actual, gastar capacidad alta solo donde agrega valor.

## Prioridades actuales
1. logos reales, grandes y mejor jerarquizados;
2. social proof más arriba;
3. reseñas Google reales visibles;
4. corregir contraste del lima en fondos claros;
5. integrar video de fondo hero cuando se apruebe;
6. rebalancear Home para que SYNC no parezca solo trivia;
7. refinar packs, media, logo y landings.

No rehacer todo en una sola pasada.
