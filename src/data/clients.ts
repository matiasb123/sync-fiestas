export type Client = {
  name: string;
  asset: string;
  darkBackground?: boolean;
};

// Approved client identity files are kept in public/clients. Casino Buenos Aires is
// included following the client's explicit approval; Roemmers remains excluded pending review.
export const clients: Client[] = [
  { name: "Facebook", asset: "/clients/facebook.svg" },
  { name: "Mercado Libre", asset: "/clients/mercado-libre.svg" },
  { name: "McDonald's", asset: "/clients/mcdonalds.svg" },
  { name: "Shell", asset: "/clients/shell.svg" },
  { name: "Toyota", asset: "/clients/toyota.svg" },
  { name: "Tenaris", asset: "/clients/tenaris.svg" },
  { name: "Telecom", asset: "/clients/telecom.svg" },
  { name: "DHL", asset: "/clients/dhl.svg" },
  { name: "Farmacity", asset: "/clients/farmacity.svg" },
  { name: "HSBC", asset: "/clients/hsbc.svg" },
  { name: "ICBC", asset: "/clients/icbc.svg" },
  { name: "Bank of China", asset: "/clients/bank-of-china.png" },
  { name: "Volvo", asset: "/clients/volvo.svg" },
  { name: "Scania", asset: "/clients/scania.svg" },
  { name: "Quilmes", asset: "/clients/quilmes-color.png" },
  { name: "Easy", asset: "/clients/easy.svg" },
  { name: "Falabella", asset: "/clients/falabella.svg" },
  { name: "La Caja", asset: "/clients/la-caja.png" },
  { name: "Banco Provincia", asset: "/clients/banco-provincia.svg" },
  { name: "Banco Ciudad", asset: "/clients/banco-ciudad.svg" },
  { name: "Banco Patagonia", asset: "/clients/banco-patagonia.svg" },
  { name: "Bunge", asset: "/clients/bunge.svg" },
  { name: "Baker Hughes", asset: "/clients/baker-hughes.svg" },
  { name: "AES", asset: "/clients/aes.svg" },
  { name: "RE/MAX", asset: "/clients/remax.svg" },
  { name: "Grant Thornton Argentina", asset: "/clients/grant-thornton-argentina.png" },
  { name: "AppsFlyer", asset: "/clients/appsflyer.svg" },
  { name: "AVEVA", asset: "/clients/aveva.svg" },
  { name: "Hospital Italiano", asset: "/clients/hospital-italiano.svg" },
  { name: "Brinks", asset: "/clients/brinks.svg" },
  { name: "Colonia Express", asset: "/clients/colonia-express-color.png" },
  { name: "Laboratorios Servier", asset: "/clients/laboratorios-servier.svg" },
  { name: "Sartorius", asset: "/clients/sartorius.svg" },
  { name: "Thermomix", asset: "/clients/thermomix.svg" },
  { name: "Casino Buenos Aires", asset: "/clients/casino-buenos-aires.png" },
  { name: "SUTERH", asset: "/clients/suterh.png" },
];

export const featuredClientNames = [
  "Facebook", "Mercado Libre", "McDonald's", "Toyota",
  "Shell", "DHL", "Tenaris", "Farmacity",
  "HSBC", "Quilmes", "Telecom", "ICBC",
];

export const marqueeClientNames = clients
  .map((client) => client.name)
  .filter((name) => !featuredClientNames.includes(name));
