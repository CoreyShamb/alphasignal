import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { MarketOverview } from "@/components/dashboard/MarketOverview";
import { StockSearch } from "@/components/dashboard/StockSearch";
import { CompanyProfile } from "@/components/dashboard/CompanyProfile";
import { AISignalCard } from "@/components/dashboard/AISignalCard";
import { NewsFeed } from "@/components/dashboard/NewsFeed";

export default function DashboardPage() {
    return (
        <main className="min-h-screen bg-[#0B1120] px-6 py-8 text-white">
            <div className="mx-auto max-w-7xl">
                <div className="mb-8 flex items-center justify-between">
                    <div>
                        <p className="text-sm text-green-400">Market Intelligence</p>
                        <h1 className="text-4xl font-bold">Dashboard</h1>
                    </div>

                    <Badge className="bg-green-500/10 text-green-400">
                        Dashboard Preview
                    </Badge>
                </div>

                <StockSearch />

                <MarketOverview />
            </div>
        </main>
    );
}