# Mijn Website (Gratis te hosten)

Dit is een complete, statische website die je **gratis** online kunt zetten, zonder kosten.

## Snel starten (GitHub Pages – 100% gratis)
1. Maak een gratis account op GitHub (als je die nog niet hebt).
2. Maak een nieuw repository, bijvoorbeeld `mijn-website`.
3. Upload alle bestanden uit deze map naar het repository (of gebruik VS Code met de Git-extensie).
4. Ga in GitHub naar **Settings › Pages** en kies:
   - **Source:** `Deploy from a branch`
   - **Branch:** `main` en `/ (root)`
5. Klik **Save**. Wacht ±1 minuut en bezoek de link die GitHub toont, bv. `https://jouwnaam.github.io/mijn-website/`.

> Tip: Pas in de HTML `<link rel="canonical">` en Open Graph `og:image` aan je echte URL aan.

## Alternatieven (ook gratis)
- **Netlify:** koppel je GitHub repo, kies het project, geen build nodig. Deployt automatisch.
- **Vercel:** idem, selecteer het repo, framework: “Other”, geen build command nodig.

## Aanpassen
- Verander teksten in `index.html`, `over.html`, `projecten.html` en `contact.html`.
- Vervang `assets/img/placeholder.png` door screenshots van je projecten.
- Pas kleuren en lettertypes aan in `assets/css/style.css`.
- Update het e-mailadres in `contact.html` (mailto:). Voor een echte backend kun je later Formspree of een serverless functie gebruiken.

## Offline & PWA
Er is een simpele service worker (`sw.js`) en `manifest.webmanifest`. Dit maakt de site cachebaar en “toevoegbaar aan het startscherm”.

## Ontwikkelen in VS Code
- Installeer de extensie **Live Server** om lokaal te testen.
- Open de map in VS Code en klik “Go Live” om `index.html` te bekijken.

## Licentie
Doe ermee wat je wilt. Succes! 🚀
