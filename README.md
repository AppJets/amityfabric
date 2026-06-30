# Amity Fabric Analytics

A web rebuild of three Amity University analytics dashboards, styled to the
Microsoft Fabric / Fluent design language with a navy-blue brand theme.

## Pages
- **index.html** — Admissions Overview (KPI cards, semester/gender/year-trend charts, data table)
- **occupancy.html** — Live Room Occupancy (utilization KPIs, rooms-by-floor/type donuts, classes-by-batch, capacity-by-floor, availability grid)
- **rooms.html** — Search Available Rooms (peak-hour area chart, floor-utilization table, room schedule)

## Stack
- Static HTML + CSS (`assets/styles.css`) — no build step
- [Chart.js](https://www.chartjs.org/) via CDN, configured in `assets/charts.js`
- Power BI / Fabric colour palette; importable theme at `assets/amity-fabric-theme.json`

## Run locally
```bash
npx serve .
```
Then open http://localhost:3000 (or the printed port).

## Deploy
Static site — deploy the folder as-is to Vercel, Netlify, or any static host.
