"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation'
import React from 'react'

const NavLink = ({ href, children }: { href: string, children: React.ReactNode }) => {

    const pathname = usePathname();
    const isActive = pathname === href;

    return (
        <Link
            href={href}
            className={isActive ? 'underline font-medium' : 'font-medium hover:text-blue-500 transition-colors'}
        >
            {children}
        </Link>
    )
}

export default NavLink