import productDetailsData from "@/data/productDetails.json";
import ProductDetailsClient from "./ProductDetailsClient";

// Generate static params for all products
export function generateStaticParams() {
  return productDetailsData.products.map((product) => ({
    id: product.id.toString(),
  }));
}

export default async function ProductDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const productId = parseInt(id);
  const product = productDetailsData.products.find((p) => p.id === productId);

  if (!product) {
    return (
      <div className="container py-20 text-center">
        <h1 className="text-2xl font-bold">Product not found</h1>
        <a href="/products" className="text-primary mt-4 inline-block">
          Back to Products
        </a>
      </div>
    );
  }

  return <ProductDetailsClient product={product} />;
}
