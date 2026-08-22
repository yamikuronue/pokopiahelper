# Pokopia Companion

Phone-friendly static helper for **Pokopia**: look up foods by flavor (with Mosslax Eat buffs) and track museum fossils. No backend — progress lives in your browser’s `localStorage`.

## Features

- **Foods** — filter by Neutral / Sweet / Spicy / Dry / Bitter / Sour, with Mosslax buff notes
- **Fossils** — checklist for all 22 pieces across 9 displays; autosaves on this device
- **Export / Import** — JSON backup of fossil progress
- **Custom icons** — no ripped game art
- **Docker** — nginx Alpine image for one-command deploy

## Quick start (local)

Open `index.html` in a browser, or serve the folder:

```bash
npx --yes serve .
```

Then visit the URL it prints (usually `http://localhost:3000`).

## Docker

```bash
docker compose up --build
```

App: [http://localhost:8080](http://localhost:8080)

Or:

```bash
docker build -t pokopia-companion .
docker run --rm -p 8080:80 pokopia-companion
```

## Security notes

- Static files only — no accounts, no API, no database
- Fossil state stays on-device (`localStorage` key `pokopia-companion:v1`)
- nginx adds CSP and basic hardening headers
- Clearing site data wipes checklist progress (use Export first)

## Data sources

Food flavors / Mosslax effects and fossil piece lists are compiled from community guides (e.g. Nintendo Life, museum checklists). Names may vary slightly by localization.

## Credits

Fan companion for personal use. Pokopia and Pokémon © Nintendo / The Pokémon Company / Game Freak. Not affiliated.
