export type Client = {
  name: string;
  asset?: string;
};

// Keep this list as the single place to add, remove, reorder, or replace client assets.
export const clients: Client[] = [
  { name: "Facebook", asset: "/clients/facebook.svg" },
  { name: "Mercado Libre", asset: "/clients/mercadolibre.svg" }, { name: "McDonald's", asset: "/clients/mcdonalds.svg" }, { name: "Shell", asset: "/clients/shell.svg" },
  { name: "Toyota", asset: "/clients/toyota.svg" }, { name: "Tenaris" }, { name: "Telecom", asset: "/clients/telecom.svg" }, { name: "DHL", asset: "/clients/dhl.svg" },
  { name: "Farmacity" }, { name: "HSBC", asset: "/clients/hsbc.svg" }, { name: "ICBC", asset: "/clients/icbc.svg" }, { name: "Bank of China" },
  { name: "Volvo", asset: "/clients/volvo.svg" }, { name: "Scania", asset: "/clients/scania.svg" }, { name: "Quilmes" }, { name: "Easy" },
  { name: "Falabella" }, { name: "La Caja" }, { name: "Banco Provincia" }, { name: "Banco Ciudad" }, { name: "Banco Patagonia" },
  { name: "Bunge" }, { name: "Baker Hughes" }, { name: "AES" }, { name: "RE/MAX" }, { name: "Grant Thornton Argentina" },
  { name: "AppsFlyer" }, { name: "AVEVA" }, { name: "Roemmers" }, { name: "Hospital Italiano" }, { name: "Brinks" },
  { name: "Colonia Express" }, { name: "Laboratorios Servier" }, { name: "Sartorius", asset: "/clients/sartorius.svg" },
  { name: "Thermomix" }, { name: "Casino Buenos Aires" }, { name: "SUTERH" },
];

export const featuredClientNames = [
  "Mercado Libre", "McDonald's", "Toyota", "Shell", "Facebook", "Telecom",
  "DHL", "Tenaris", "Farmacity", "HSBC", "ICBC", "Quilmes",
];
