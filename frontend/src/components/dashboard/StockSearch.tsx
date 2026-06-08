// src/components/dashboard/StockSearch.tsx

import { Input } from "@/components/ui/input";

export function StockSearch() {
    return (
        <Input
            placeholder="Search stocks, ETFs, or companies..."
            className="border-slate-800 bg-slate-900 text-white"
        />
    );
}