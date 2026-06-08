import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0B1120] text-white">
      <section className="mx-auto flex max-w-7x1 flex-col items-center px-6 py-48 text-center">
        <p className="mb-4 text-sm font-medium text-green-400">
          AI-Powered Stock Intelligence
        </p>

        <h1 className="max-w-5xl text-6xl font-bold tracking-tight md:text-7xl">
          Understand the Market.
          <br />
          Identify Opportunities.
          <br />
          Invest with Confidence.
        </h1>

        <p className="mt-6 max-w-2x1 text-lg text-slate-300">
          Real-time market intelligence, AI-powered stock analysis,
          company research, financial news, and investor education
          all in one platform.
        </p>

        <div className="mt-8 flex gap-4">
          <Button className="bg-green-500 text-black hover:bg-green-400">
            Get Started
          </Button>
          <Button variant="outline" className="border-slate-600 bg-transparent text-white hover:bg-slate-800">
            View Dashboard
          </Button>
        </div>

        <div className="mt-16 grid w-full gap-6 md:grid-cols-3">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold">Market Intelligence</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Track stocks, sectors, trends, and market movement.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold">AI Analysis</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Get bullish, neutral, and bearish insights with risk scoring.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold">Company Research</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Review company news, goals, financials, and future plans.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-20 w-full rounded-2xl border border-slate-800 bg-slate-950/80 p-6 shadow-2xl">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <p className="text-sm text-green-400">AlphaSignal Platform Preview</p>
              <h2 className="text-2xl font-bold">AlphaSignal Dashboard</h2>
            </div>
            <span className="rounded-full bg-blue-500/10 px-3 py-1 text-sm text-blue-400">
              Dashboard Preview
            </span>
          </div>

          <div className="grid gap-4 md:grid-cols-4">
            <div className="rounded-xl border border-slate-800 bg-slate-900 p-4">
              <p className="text-sm text-slate-400">S&P 500</p>
              <h3 className="mt-2 text-2xl font-bold">5,306.04</h3>
              <p className="text-sm text-green-400">+0.67%</p>
            </div>

            <div className="rounded-xl border border-slate-800 bg-slate-900 p-4">
              <p className="text-sm text-slate-400">NASDAQ</p>
              <h3 className="mt-2 text-2xl font-bold">18,738.69</h3>
              <p className="text-sm text-green-400">+1.11%</p>
            </div>

            <div className="rounded-xl border border-slate-800 bg-slate-900 p-4">
              <p className="text-sm text-slate-400">AI Signal</p>
              <h3 className="mt-2 text-2xl font-bold">Bullish</h3>
              <p className="text-sm text-green-400">62% Confidence</p>
            </div>

            <div className="rounded-xl border border-slate-800 bg-slate-900 p-4">
              <p className="text-sm text-slate-400">Risk Level</p>
              <h3 className="mt-2 text-2xl font-bold">Medium</h3>
              <p className="text-sm text-yellow-400">Volatility Active</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
