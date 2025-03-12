'use client';

import Link from 'next/link';

export default function Menu() {
    return (
        <nav>
            <Link href="/">Current year</Link>
            <Link href="/2024">2024</Link>
            <Link href="/2023">2023</Link>
        </nav>
    );
}