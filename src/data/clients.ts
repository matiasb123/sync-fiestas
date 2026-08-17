export type Client = {
  name: string;
  asset?: string;
};

// Keep this list as the single place to add, remove, reorder, or replace client assets.
export const clients: Client[] = [
  { name: "Facebook", asset: "/clients/facebook.svg" },
  { name: "Mercado Libre" }, { name: "McDonald's", asset: "/clients/mcdonalds.svg" }, { name: "Shell", asset: "/clients/shell.svg" },
  { name: "Toyota", asset: "/clients/toyota.svg" }, { name: "Tenaris" }, { name: "Telecom" }, { name: "DHL", asset: "/clients/dhl.svg" },
  { name: "Farmacity" }, { name: "HSBC", asset: "/clients/hsbc.svg" }, { name: "ICBC" }, { name: "Bank of China" },
  { name: "Volvo", asset: "/clients/volvo.svg" }, { name: "Scania", asset: "/clients/scania.svg" }, { name: "Quilmes" }, { name: "Easy" },
  { name: "Falabella" }, { name: "La Caja" }, { name: "Banco Provincia" }, { name: "Banco Ciudad" }, { name: "Banco Patagonia" },
  { name: "Bunge" }, { name: "Baker Hughes" }, { name: "AES" }, { name: "RE/MAX" }, { name: "Grant Thornton Argentina" },
  { name: "AppsFlyer" }, { name: "AVEVA" }, { name: "Roemmers" }, { name: "Hospital Italiano" }, { name: "Brinks" },
  { name: "Ribeiro" }, { name: "Colonia Express" }, { name: "Laboratorios Servier" }, { name: "Sartorius", asset: "/clients/sartorius.svg" },
  { name: "Thermomix" }, { name: "Covance" }, { name: "Casino Buenos Aires" }, { name: "SUTERH" },
];
