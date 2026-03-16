import Link from "next/link";

const products = [
  { id: "1", slug: "resistance-bands", name: "Resistance Bands", price: 20 },
  { id: "2", slug: "yoga-mat", name: "Yoga Mat", price: 35 },
  { id: "3", slug: "foam-roller", name: "Foam Roller", price: 25 },
];

export default function ProductsPage() {
  return (
    <main className="min-h-screen p-10">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-3xl font-bold tracking-tight">Products</h1>
        <p className="mt-2 text-gray-600">
          Browse the first Gard Fitness product listings.
        </p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <Link
              key={product.id}
              href={`/products/${product.slug}`}
              className="rounded-xl border border-gray-200 p-5 transition hover:shadow-md"
            >
              <h2 className="text-xl font-semibold">{product.name}</h2>
              <p className="mt-3 text-gray-600">£{product.price}</p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
