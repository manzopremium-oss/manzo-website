import type { Metadata } from 'next';
import MenContent from './MenContent';

export const metadata: Metadata = {
    title: "Men's Wholesale Clothing | Manzo Fashion",
    description: "Explore Manzo's extensive collection of premium men's wholesale clothing. High-quality fashion manufacturers for the modern man.",
    openGraph: {
        title: "Men's Wholesale Clothing - Manzo",
        description: "Premium wholesale male clothing and mens wear collections.",
    }
};

export default function MenPage() {
    return <MenContent />;
}
