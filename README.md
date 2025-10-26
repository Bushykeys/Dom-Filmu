# dom-filmu — Netlify + Decap CMS

Nowa, czysta wersja strony (Tailwind) z panelem **/admin** (Decap CMS).

## Szybki start

1. **GitHub**
   - Zaloguj się na GitHub i utwórz nowe repo, np. `dom-filmu`.
   - Prześlij **całą** zawartość tego folderu do repo (drag & drop).
2. **Netlify**
   - Wejdź na https://app.netlify.com/ → **Add new site** → **Import from Git** → wybierz repo.
   - W zakładce **Identity** → **Enable Identity**.
   - W **Identity → Services** → **Enable Git Gateway**.
   - W **Identity → Invite users** dodaj swój e‑mail (otrzymasz link do logowania).
3. **Zaloguj się do CMS**
   - Otwórz `https://YOUR-SITE.netlify.app/admin` i zaloguj się (przez link z maila).
4. **Edytuj treści**
   - Produkty i kategorie: w menu **Produkty** oraz **Ustawienia**.
   - Obrazy wrzucaj do folderu **images** (CMS to zrobi za Ciebie).

## Domena dom-filmu.pl

W Netlify → **Site settings → Domain management** → **Add custom domain** → wpisz `dom-filmu.pl`.
W DNS (u rejestratora domeny) dodaj rekordy **A**/**CNAME** zgodnie z instrukcją Netlify.

## Struktura danych

- `/data/settings.json` — liczba kolumn, kolejność kategorii.
- `/data/products.json` — lista produktów (tytuł, obraz, cena, kategoria, opcjonalne bullet‑pointy).
- `/script.js` — renderuje katalog na podstawie powyższych plików.

## Uwaga dot. obrazów

Dodałem ścieżki do obrazów (np. `/images/bmpcc4k.png`). Wgraj swoje grafiki o tych nazwach
albo zmień pola **image** w panelu CMS na poprawne pliki/ścieżki.
