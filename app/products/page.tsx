import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import ProductList from "@/components/ProductList";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Our Collection | Manzo",
  description:
    "Browse our full collection of premium wholesale mens fashion. High-quality male clothing and mens wear for retailers.",
};

export default function ProductsPage() {
  return (
    <main className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <div className="flex-grow pt-24">
        <ProductList />
      </div>
      <Footer className="bg-white" />
    </main>
  );
}
