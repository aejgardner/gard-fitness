import { notFound } from "next/navigation";
import { getProductBySlug } from "@/lib/products";

type ProductPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { slug } = await params;

  const product = getProductBySlug(slug);

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
