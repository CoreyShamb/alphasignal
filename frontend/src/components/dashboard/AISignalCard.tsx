import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export function AISignalCard() {
    return (
        <Card className="mt-8 border-slate-800 bg-slate-900 text-white">
            <CardContent className="p-6">
                <div className="flex items-center justify-between">
                    <div>
                        <p className="text-sm text-green-400">AI Analysis</p>
                        <h2 className="mt-2 text-2xl font-bold">AlphaSignal Rating</h2>
                    </div>

                    <Badge className="bg-green-500/10 text-green-400">
                        Bullish
                    </Badge>
                </div>

                <div className="mt-6 grid gap-4 md:grid-cols-3">
                    <div>
                        <p className="text-sm text-slate-400">Confidence Score</p>
                        <p className="text-2xl font-bold text-green-400">62%</p>
                    </div>

                    <div>
                        <p className="text-sm text-slate-400">Risk Level</p>
                        <p className="text-2xl font-bold text-yellow-400">Medium</p>
                    </div>

                    <div>
                        <p className="text-sm text-slate-400">Trend Outlook</p>
                        <p className="text-2xl font-bold">Positive</p>
                    </div>
                </div>

                <p className="mt-6 text-slate-400">
                    Sample preview: AlphaSignal evaluates company data, market trends,
                    news sentiment, and technical indicators to generate an investor
                    research outlook.
                </p>
            </CardContent>
        </Card>
    );
}