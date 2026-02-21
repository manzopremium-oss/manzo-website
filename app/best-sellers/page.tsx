import type { Metadata } from 'next';
import BestSellersContent from './BestSellersContent';

export const metadata: Metadata = {
    title: "Best Sellers | Trending Wholesale Male Clothing",
    description: "Shop our most popular wholesale mens wear. Proven best sellers for your retail business.",
    openGraph: {
        title: "Best Sellers - Manzo",
        description: "Proven trending wholesale male clothing and mens wear.",
    }
};

export default function BestSellersPage() {
    return <BestSellersContent />;
}
