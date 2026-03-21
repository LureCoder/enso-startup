import productDetailsData from "@/data/productDetails.json";
import ProductDetailsClient from "./ProductDetailsClient";
import ProductNotFound from "./ProductNotFound";

// Generate static params for all products
export function generateStaticParams() {
  return productDetailsData.products.map((product) => ({
    id: product.slug,
  }));
}

export default async function ProductDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = productDetailsData.products.find((p) => p.slug === id);

  if (!product) {
    return <ProductNotFound />;
  }

  return <ProductDetailsClient product={product} />;
}
