import Link from 'next/link';
import React from 'react'

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="py-10 px-6 bg-gray-900 text-gray-300 text-center">
            <p className="font-medium mb-2">
                &copy; {currentYear} SavoStore. All rights reserved.
            </p>
            <div className="space-x-4">
                <Link href="/terms">Terms</Link>
                <Link href="/privacy">Privacy</Link>
                <a href="mailto:contact@shippingpro.com">Contact</a>
            </div>
        </footer>
    );
};

export default Footer;