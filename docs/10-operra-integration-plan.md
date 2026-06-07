# Operra Integration Plan

## Purpose

AlphaSignal will use Operra as its backend infrastructure layer.

## Operra Responsibilities

- Authentication
- User management
- Organizations
- Subscription billing
- API keys
- Rate limiting
- Usage tracking
- Analytics
- Stripe integration

## AlphaSignal Responsibilities

- Stock market data
- Company intelligence
- Financial news
- AI analysis
- Watchlists
- Learning center
- Stock research dashboard

## Architecture

AlphaSignal Web
→ AlphaSignal Market Services
→ Operra Infrastructure API

## Initial Integration Priorities

1. Connect AlphaSignal login/register to Operra auth
2. Use Operra user accounts
3. Use Operra billing plans for Free, Pro, and Elite
4. Track AI requests and stock searches through Operra usage analytics
5. Add API key support later for developer access

## AlphaSignal Plans

### Free
- Basic dashboard
- Limited watchlist
- Limited AI summaries

### Pro
- Advanced dashboard
- Unlimited watchlist
- More AI analysis
- Alerts

### Elite
- Prediction engine
- Backtesting
- Portfolio analysis
- Advanced market scanner
