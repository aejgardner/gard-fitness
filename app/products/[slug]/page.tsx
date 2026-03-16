import { notFound } from "next/navigation";

const products = [
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

type ProductPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { slug } = await params;

  const product = products.find((item) => item.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <main className="min-h-screen p-10">
      <div className="mx-auto max-w-4xl">
        <p className="text-sm text-gray-500">Product detail</p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight">
          {product.name}
        </h1>
        <p className="mt-4 text-lg text-gray-600">{product.description}</p>
        <p className="mt-6 text-2xl font-semibold">£{product.price}</p>
      </div>
    </main>
  );
}
