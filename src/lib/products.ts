export type Product = {
  id: string;
  slug: string;
  name: string;
  price: number;
  description: string;
};

export const products: Product[] = [
  {
    id: "1",
    slug: "resistance-bands",
    name: "Resistance Bands",
    price: 20,
    description: "Versatile bands for strength, mobility, and warm-ups.",
  },
  {
    id: "2",
    slug: "yoga-mat",
    name: "Yoga Mat",
    price: 35,
    description: "A supportive mat for yoga, stretching, and floor workouts.",
  },
  {
    id: "3",
    slug: "foam-roller",
    name: "Foam Roller",
    price: 25,
    description: "Recovery support for sore muscles and mobility work.",
  },
];

export function getProductBySlug(slug: string) {
  return products.find((p) => p.slug === slug);
}
