import { Card, CardContent } from "@/components/ui/card";

const newsItems = [
    {
        title: "Apple announces new AI features across its ecosystem",
        source: "Company News",
        time: "Sample Preview",
    },
    {
        title: "Technology stocks lead market gains as AI demand grows",
        source: "Market News",
        time: "Sample Preview",
    },
    {
        title: "Analysts monitor earnings growth and future product roadmap",
        source: "Research",
        time: "Sample Preview",
    },
];

export function NewsFeed() {
    return (
        <Card className="mt-8 border-slate-800 bg-slate-900 text-white">
            <CardContent className="p-6">
                <p className="text-sm text-green-400">Latest News</p>
                <h2 className="mt-2 text-2xl font-bold">Company & Market Updates</h2>

                <div className="mt-6 space-y-4">
                    {newsItems.map((item) => (
                        <div
                            key={item.title}
                            className="rounded-xl border border-slate-800 bg-slate-950 p-4"
                        >
                            <p className="text-sm text-green-400">{item.source}</p>
                            <h3 className="mt-1 font-semibold">{item.title}</h3>
                            <p className="mt-1 text-sm text-slate-400">{item.time}</p>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
}