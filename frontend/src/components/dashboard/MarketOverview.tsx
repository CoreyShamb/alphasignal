import { Card, CardContent } from "@/components/ui/card";

export function MarketOverview() {
    return (
        <div className="grid gap-6 md:grid-cols-4">
            <Card className="border-slate-800 bg-slate-900 text-white">
                <CardContent className="p-6">
                    <p className="text-sm text-slate-400">S&P 500</p>
                    <h3 className="mt-2 text-2xl font-bold">5,306.04</h3>
                    <p className="text-green-400">+0.67%</p>
                </CardContent>
            </Card>

            <Card className="border-slate-800 bg-slate-900 text-white">
                <CardContent className="p-6">
                    <p className="text-sm text-slate-400">NASDAQ</p>
                    <h3 className="mt-2 text-2xl font-bold">18,738.69</h3>
                    <p className="text-green-400">+1.11%</p>
                </CardContent>
            </Card>

            <Card className="border-slate-800 bg-slate-900 text-white">
                <CardContent className="p-6">
                    <p className="text-sm text-slate-400">AI Signal</p>
                    <h3 className="mt-2 text-2xl font-bold">Bullish</h3>
                    <p className="text-green-400">62% Confidence</p>
                </CardContent>
            </Card>

            <Card className="border-slate-800 bg-slate-900 text-white">
                <CardContent className="p-6">
                    <p className="text-sm text-slate-400">Risk Level</p>
                    <h3 className="mt-2 text-2xl font-bold">Medium</h3>
                    <p className="text-yellow-400">Volatility Active</p>
                </CardContent>
            </Card>
        </div>
    );
}