import Link from "next/link";

export function Navbar() {
    return (
        <nav className="border-b border-border">
            <div className="mx-auto flex h-16 max-w-7x1 items-center justify-between px-6">
                <Link href="/" className="font-bold text-x1">
                    ⚡ AlphaSignal
                </Link>

                <div className="flex items-center gap-6">
                    <Link href="/dashboard">Dashboard</Link>
                    <Link href="/research">Stocks</Link>
                    <Link href="/watchlist">Research</Link>
                    <Link href="/learn">Watchlist</Link>
                    <Link href="/pricing">Learn</Link>
                    <Link href="/stocks">Pricing</Link>
                </div>
            </div>
        </nav>
    );
}