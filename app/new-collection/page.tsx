import type { Metadata } from 'next';
import NewCollectionContent from './NewCollectionContent';

export const metadata: Metadata = {
    title: "New Collection | Latest Wholesale Mens Fashion",
    description: "Discover the latest trends in wholesale mens fashion. New arrivals for the season from leading manufacturers.",
    openGraph: {
        title: "New Collection - Manzo Wholesale",
        description: "Stay ahead of trends with our newest mens wholesale clothing arrivals.",
    }
};

export default function NewCollectionPage() {
    return <NewCollectionContent />;
}
