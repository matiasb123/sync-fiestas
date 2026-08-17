export type Review = {
  name: string;
  quote: string;
  context?: string;
  avatar?: string;
  rating: 5;
};

// Add only verbatim, approved Google reviews here. The UI intentionally renders no review cards until then.
export const reviews: Review[] = [];
