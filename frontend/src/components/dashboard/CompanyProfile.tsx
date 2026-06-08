import { Card, CardContent } from "@/components/ui/card";

export function CompanyProfile() {
    return (
        <Card className="mt-8 border-slate-800 bg-slate-900 text-white">
            <CardContent className="p-6">
                <p className="text-sm text-green-400">Company Intelligence</p>
                <h2 className="mt-2 text-2xl font-bold">Apple Inc. (AAPL)</h2>
                <p className="mt-2 text-slate-400">
                    Apple designs, manufactures, and markets smartphones, personal
                    computers, tablets, wearables, and related services.
                </p>

                <div className="mt-6 grid gap-4 md:grid-cols-4">
                    <div>
                        <p className="text-sm text-slate-400">Sector</p>
                        <p className="font-semibold">Technology</p>
                    </div>
                    <div>
                        <p className="text-sm text-slate-400">Industry</p>
                        <p className="font-semibold">Consumer Electronics</p>
                    </div>
                    <div>
                        <p className="text-sm text-slate-400">Exchange</p>
                        <p className="font-semibold">NASDAQ</p>
                    </div>
                    <div>
                        <p className="text-sm text-slate-400">Source</p>
                        <p className="font-semibold">Sample Preview</p>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}