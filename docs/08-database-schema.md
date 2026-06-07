# AlphaSignal Database Schema

## User

- id
- email
- name
- subscriptionTier
- createdAt

## Watchlist

- id
- userId
- name

## WatchlistStock

- id
- watchlistId
- ticker

## Stock

- id
- ticker
- companyName
- sector
- industry

## News

- id
- ticker
- headline
- summary
- source
- publishedAt

## Analysis

- id
- ticker
- bullishScore
- bearishScore
- confidenceScore
- riskScore
- generatedAt
