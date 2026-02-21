import type { Metadata } from 'next';
import ContactContent from './ContactContent';

export const metadata: Metadata = {
    title: "Contact Manzo | Wholesale Inquiries & Support",
    description: "Get in touch for wholesale inquiries, support, and business partnerships with Manzo.",
    openGraph: {
        title: "Contact Us - Manzo Wholesale",
        description: "Wholesale inquiries and general support for your business needs.",
    }
};

export default function ContactPage() {
    return <ContactContent />;
}
