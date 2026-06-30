# Skrivguide för Wivid Arc-dokumentation

Intern guide för ton och formulering i Mintlify-docs. Målet är tydliga instruktioner som låter naturliga – inte mallgenererade.

## Språk och ton

- **Språk:** svenska
- **Tilltal:** du-form
- **Fokus:** kund- och adminpanel – beskriv vad användaren gör, inte produktens filosofi
- **Stil:** direkt och praktisk. Familjär ton är okej, men undvik retoriska frågor och utfyllnad

## Frontmatter (`description`)

- Max 1–2 meningar
- Beskriv *vad sidan gör*, inte hur du hittar den
- Variera inledningar mellan sidor – samma mall på 40 sidor känns robotgenererat

### Bra

- `Alla bokningar – skapade online eller manuellt i adminpanelen.`
- `Så skapar du en ny sida från sidlistan.`
- `Ta bort, återställ eller radera inlägg. Borttaget sparas i 30 dagar.`
- `Bildblock i inlägg – lägg in en bild med alt-text.`

### Undvik som standard

| Undvik | Varför |
|--------|--------|
| `Ska du skapa X? Här visar vi hur.` | Mallfras på alla skapa-sidor |
| `Behöver du ta bort X? ... här ser du hur.` | Mallfras på alla radera-sidor |
| `Här i **Avsnitt** hanterar du...` | Upprepas på nästan varje översikt |
| `Med blocket **X** kan du...` | Upprepas på alla block-sidor |
| `Vill du förbättra synligheten?` | Onödig inledning på SEO-sidor |
| `Här visar vi`, `Här lär du`, `Här går vi igenom` | Fyller ut utan att tillföra info |

## Brödtext

- Börja direkt med innehåll – rubrik, steg eller lista
- Ingen intro-mening före listor om listan talar för sig själv
- Behåll exakta UI-etiketter: **Webbplats**, **Duplicera**, **Spara**, etc.
- Behåll MDX-komponenter (`<Steps>`, `<Tip>`, `<Warning>`, `<CardGroup>`) – ändra bara prosa

### Undvik i brödtext

- `Det är användbart om...` / `Det passar när...`
- `bland annat:` före listor
- `Du kan också...` / `Du kan även...` i början av meningar (om det inte tillför ny info)
- Identiska sektionsrubriker överallt: `## Vad listan visar`, `## Nästa steg` (byt ut eller slå ihop med listan)
- Topprad-listor med samma grammatik: `**X** tar dig...`, `**Y** visar...`, `**Z** låter dig...`

### Changelog

- Korta stycken, 2–3 meningar per månad
- Färre kommatecken-uppräkningar
- Undvik `har förbättrats`, `har stärkts` i varje mening – skriv vad som ändrats i stället

## Sidtyper – exempel

### Intro / välkommen

**Före (description):**
`Välkommen till Polar CMS – här bygger och sköter du webbplatsens innehåll och utseende.`

**Efter:**
`Polar CMS – innehåll, sidor, menyer och utseende för webbplatsen.`

**Före (Card):**
`Polar CMS är webbverktyget där du hanterar innehåll, sidor, inlägg, menyer, formulär, SEO och utseende på din webbplats.`

**Efter:**
`Innehåll, sidor, inlägg, menyer, formulär, SEO och utseende.`

### Översikt

**Före:**
```
## Vad listan visar

Bokningslistan visar bland annat:

- bokningsnummer
```

**Efter:**
```
## Bokningslistan

- bokningsnummer
```

### Skapa (how-to)

**Före (description):**
`Ska du skapa en ny sida? Här visar vi hur.`

**Efter:**
`Så skapar du en ny sida från sidlistan.`

Brödtext före `<Steps>` ska vara kort eller saknas helt.

### Blockreferens

**Före (description):**
`Med blocket **Bild** kan du lägga in en bild i ett inlägg.`

**Efter:**
`Bildblock i inlägg – lägg in en bild med alt-text och format.`

### Radera

**Före:**
`Behöver du ta bort ett inlägg? Det finns kvar i 30 dagar och kan återställas – här ser du hur.`

**Efter:**
`Ta bort, återställ eller radera inlägg. Borttaget sparas i 30 dagar.`

## Checklista före publicering

1. Läs description högt – låter den som en annan sida?
2. Finns intro-meningar som bara upprepar rubriken?
3. Är UI-namn korrekta och fetmarkerade?
4. Kör mallfrase-kontroll och `npx mintlify@latest validate`
