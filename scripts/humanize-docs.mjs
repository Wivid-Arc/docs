import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DOCS_DIR = path.join(__dirname, '..');

const DESCRIPTIONS = {
  'agenturlankar.mdx': 'Publika länkar kopplade till en specifik agentur.',
  'agenturprofil.mdx': 'Profil och uppgifter för en företagskund eller agentur.',
  'allmanna-installningar.mdx': 'Grunduppgifter för företaget och webbplatsen.',
  'anpassad-kod.mdx': 'Projektunik CSS och JavaScript på den publika webbplatsen.',
  'anvandare.mdx': 'Vilka personer som har tillgång till projektet.',
  'arkiv-evenemang.mdx': 'Den publika samlingssidan för evenemang.',
  'arkiv-upplevelser.mdx': 'Samlingssidan för upplevelser.',
  'arkiv.mdx': 'Den publika samlingssidan för inlägg.',
  'automationer.mdx': 'Utskick som triggas automatiskt.',
  'avboka-bokning.mdx': 'Avboka en bokning från bokningsdetaljen.',
  'betalningar-bokning.mdx': 'Hur bokningar betalas och intäkter hanteras.',
  'bild-evenemang.mdx': 'Bildblock i evenemang – lägg in en bild med alt-text och format.',
  'bild-inlagg.mdx': 'Bildblock i inlägg – lägg in en bild med alt-text och format.',
  'bild-med-funktioner.mdx': 'Funktioner eller fördelar med egen bild per punkt.',
  'bild-med-text.mdx': 'Bild eller video tillsammans med rubrik, text och knappar.',
  'bildgalleri.mdx': 'Flera bilder i samma sektion.',
  'bokningsdetalj.mdx': 'All information om en enskild bokning.',
  'bokningsinstallningar.mdx': 'Regler som gäller för bokningssystemet som helhet.',
  'bokningskalender.mdx': 'Bokningskalender för upplevelser på sidan.',
  'border-radius.mdx': 'Hur rundade hörn olika element ska ha.',
  'byt-mellan-projekt.mdx': 'Växla snabbt mellan projekt du har tillgång till.',
  'changelog.mdx': 'Vad som är nytt i Wivid Arc, månad för månad.',
  'checkout-falt.mdx': 'Extra frågor som visas när kunden bokar en upplevelse.',
  'cookies.mdx': 'Cookiebaren och scripts som laddas på webbplatsen.',
  'datum-och-tider.mdx': 'Tillfällen då upplevelsen kan bokas.',
  'doman.mdx': 'Koppla domäner till webbplatsen.',
  'egen-html.mdx': 'Specialinnehåll med egen HTML-kod.',
  'en-prisplan.mdx': 'Ett enda paket eller erbjudande.',
  'fakturering-agentur.mdx': 'Fakturering för agenturer.',
  'faq-evenemang.mdx': 'Frågor och svar i ett evenemang.',
  'faq-inlagg.mdx': 'Frågor och svar i ett inlägg.',
  'farger.mdx': 'Webbplatsens grundfärger.',
  'favicon.mdx': 'Webbplatsens lilla ikon i webbläsaren.',
  'filer.mdx': 'Webbplatsens mediabibliotek.',
  'filtrera-kalender.mdx': 'Fokusera kalendern på rätt upplevelser och utförare.',
  'fordelar-evenemang.mdx': 'Korta punkter eller highlights i ett evenemang.',
  'fordelar-inlagg.mdx': 'Korta punkter eller takeaways i ett inlägg.',
  'formular-block.mdx': 'Formulär direkt på sidan.',
  'formular-evenemang.mdx': 'Formulär direkt på en evenemangssida.',
  'formular-inlagg.mdx': 'Formulär direkt i ett inlägg.',
  'globala-block.mdx': 'Block som återanvänds på flera sidor.',
  'google-recensioner.mdx': 'Recensioner och betyg från Google.',
  'huvudbanner-v1.mdx': 'Klassisk hero-sektion för sidans viktigaste budskap.',
  'huvudbanner-v2.mdx': 'Hero med text på ena sidan och valbart innehåll i högerkolumnen.',
  'ikoner.mdx': 'Fördelar, funktioner eller steg med ikon och kort text.',
  'importera-exportera-bokningar.mdx': 'Exportera och importera bokningar från listan.',
  'inlaggskort.mdx': 'Inlägg från blogg eller artikelarkiv i kortformat.',
  'inloggningsmetoder.mdx': 'Hur du loggar in på ditt konto.',
  'instagram-flode.mdx': 'Inlägg från Instagram på sidan.',
  'introduktion-analys.mdx': 'Statistik och prestanda för webbplatsen.',
  'introduktion-aurora-booking.mdx': 'Kalender, bokningar och upplevelser i Aurora booking.',
  'introduktion-evenemang-block.mdx': 'Blocken du kan använda i ett evenemang.',
  'introduktion-inlagg-block.mdx': 'Blocken du kan använda i ett inlägg.',
  'introduktion-marknadsforing.mdx': 'E-post och marknadsföringsverktyg.',
  'introduktion-polar-cms.mdx': 'Innehåll, sidor, menyer och utseende för webbplatsen.',
  'introduktion-redigera-evenemang.mdx': 'Så fungerar evenemangsredigeraren.',
  'introduktion-redigera-inlagg.mdx': 'Så fungerar inläggsredigeraren.',
  'introduktion-redigera-sida.mdx': 'Så fungerar sidredigeraren – block för block.',
  'introduktion-sidansblock.mdx': 'Överblick över block som bygger upp sidinnehåll.',
  'introduktion-sidfot.mdx': 'Sidfoten avslutar varje sida – så hanterar du den.',
  'introduktion-sidhuvud.mdx': 'Sidhuvudet högst upp – så hanterar du det.',
  'kampanjanalys.mdx': 'Resultat efter att en kampanj har skickats.',
  'kampanjer.mdx': 'Alla e-postkampanjer för projektet.',
  'karta.mdx': 'Karta med text, knappar och platsinformation.',
  'kontoinstallningar.mdx': 'Information som hör till ditt personliga konto.',
  'kort.mdx': 'Flera kort med titel, text, bild och knapp.',
  'kundprofil.mdx': 'Information om en privat kund.',
  'lagg-till-gast.mdx': 'Lägg till en gäst manuellt från kalendern.',
  'logotyp.mdx': 'Webbplatsens logotyper.',
  'logotyper.mdx': 'Logotyper för kunder, partners eller certifieringar.',
  'losenord.mdx': 'Byt lösenord för ditt konto.',
  'mallar.mdx': 'Återanvändbara e-postupplägg för kampanjer.',
  'nyhetsbrev-block.mdx': 'Anmälan till nyhetsbrev på sidan.',
  'omboka-bokning.mdx': 'Flytta en bokning till ett annat tillfälle för samma upplevelse.',
  'omdirigeringar.mdx': 'Styr hur gamla URL:er pekar vidare till nya sidor.',
  'oversikt-agentur.mdx': 'Företagskunder och återförsäljare.',
  'oversikt-bokningar.mdx': 'Alla bokningar – skapade online eller manuellt i adminpanelen.',
  'oversikt-epost.mdx': 'Nyhetsbrev och e-postmarknadsföring.',
  'oversikt-evenemang.mdx': 'Webbplatsens publika evenemang.',
  'oversikt-formular.mdx': 'Webbplatsens formulär.',
  'oversikt-inlagg.mdx': 'Artiklar, nyheter och blogginlägg.',
  'oversikt-kalender.mdx': 'Bokningsbara datum och tider för upplevelser.',
  'oversikt-kunder.mdx': 'Privata kunder som bokat eller lagts till manuellt.',
  'oversikt-meny.mdx': 'Webbplatsens navigationsmenyer.',
  'oversikt-presentkort.mdx': 'Presentkortskoder och saldon.',
  'oversikt-rabatter.mdx': 'Rabattkoder och kampanjer.',
  'oversikt-sidor.mdx': 'Webbplatsens sidor.',
  'oversikt-upplevelser.mdx': 'Det kunder kan boka.',
  'oversikt-utseende.mdx': 'Webbplatsens visuella grundinställningar.',
  'oversikt.mdx': 'Snabb överblick över projektet från dashboarden.',
  'policyer.mdx': 'Webbplatsens juridiska texter.',
  'prenumeranter.mdx': 'Mottagare för e-postkampanjer.',
  'presentkort-kop.mdx': 'Låt besökare köpa presentkort.',
  'prestanda.mdx': 'Teknisk prestanda för webbplatsen.',
  'priser-och-biljetter.mdx': 'Vad kunden kan välja i bokningsflödet.',
  'prisplaner.mdx': 'Flera paket eller prisnivåer sida vid sida.',
  'pristabell.mdx': 'Rader och kolumner med jämförbar information.',
  'quick-start.mdx': 'Snabb väg in i adminpanelen.',
  'radera-agentur.mdx': 'Ta bort, återställ eller radera agentur. Sparas i 30 dagar.',
  'radera-evenemang.mdx': 'Ta bort, återställ eller radera evenemang. Sparas i 30 dagar.',
  'radera-formular.mdx': 'Ta bort, återställ eller radera formulär. Sparas i 30 dagar.',
  'radera-inlagg.mdx': 'Ta bort, återställ eller radera inlägg. Sparas i 30 dagar.',
  'radera-konto.mdx': 'Radera ditt konto – vad som händer och hur du gör.',
  'radera-kund.mdx': 'Ta bort kundinformation. Bokningar påverkas inte.',
  'radera-meny.mdx': 'Ta bort, återställ eller radera meny. Sparas i 30 dagar.',
  'radera-presentkort.mdx': 'Ta bort, återställ eller radera presentkort. Sparas i 30 dagar.',
  'radera-rabatt.mdx': 'Ta bort, återställ eller radera rabatt. Sparas i 30 dagar.',
  'radera-sida.mdx': 'Ta bort, återställ eller radera sida. Sparas i 30 dagar.',
  'radera-upplevelse.mdx': 'Ta bort, återställ eller radera upplevelse. Sparas i 30 dagar.',
  'raknare.mdx': 'Statistik, resultat eller nyckeltal.',
  'recensioner.mdx': 'Manuellt inlagda kundcitat eller omdömen.',
  'redigera-formular.mdx': 'Bygg formulärets innehåll och inställningar.',
  'redigera-kampanj.mdx': 'Bygg kampanjens innehåll och välj mottagare.',
  'redigera-meny.mdx': 'Bygg upp menyns struktur.',
  'redigera-presentkort.mdx': 'Uppdatera presentkort från presentkortslistan.',
  'redigera-rabatt.mdx': 'Uppdatera rabatt från rabattlistan.',
  'redigera-tillfalle.mdx': 'Ändra datum, tid och kapacitet från kalendern.',
  'redigera-upplevelse.mdx': 'Innehåll och bokningsinformation för upplevelsen.',
  'se-inskick.mdx': 'Svar som skickats in via ett formulär.',
  'seo-installningar.mdx': 'Grundinställningar för SEO över hela webbplatsen.',
  'seo-optimering-evenemang.mdx': 'SEO för evenemang – inställningar och poäng i listan.',
  'seo-optimering-inlagg.mdx': 'SEO för inlägg – inställningar och poäng i listan.',
  'seo-optimering.mdx': 'SEO för sidor – inställningar och poäng i listan.',
  'seo-upplevelser.mdx': 'SEO för upplevelser i upplevelsens inställningar.',
  'sessioner.mdx': 'Besök på webbplatsen – hur sessioner räknas.',
  'sidfot.mdx': 'Huvudblocket för webbplatsens footer.',
  'sidhuvud.mdx': 'Navigationsytan högst upp på sidan.',
  'skapa-agentur.mdx': 'Så skapar du en ny agentur.',
  'skapa-bokning.mdx': 'Så skapar du en bokning manuellt.',
  'skapa-ditt-konto.mdx': 'Skapa konto efter inbjudan.',
  'skapa-evenemang.mdx': 'Så skapar du ett nytt evenemang.',
  'skapa-formular.mdx': 'Så skapar du ett nytt formulär.',
  'skapa-inlagg.mdx': 'Så skapar du ett nytt inlägg.',
  'skapa-kund.mdx': 'Så lägger du till en ny kund.',
  'skapa-meny.mdx': 'Så skapar du en ny meny.',
  'skapa-presentkort.mdx': 'Så skapar du ett nytt presentkort.',
  'skapa-rabatt.mdx': 'Så skapar du en ny rabatt.',
  'skapa-sida.mdx': 'Så skapar du en ny sida från sidlistan.',
  'skapa-tillfalle.mdx': 'Så skapar du ett nytt tillfälle i kalendern.',
  'skapa-upplevelse.mdx': 'Så skapar du en ny upplevelse.',
  'skicka-meddelande-till-gaster.mdx': 'Meddelande till gäster bokade på ett tillfälle.',
  'snabbfakta.mdx': 'Kort information som hjälper kunden förstå upplevelsen.',
  'sociala-medier.mdx': 'Länkar till företagets sociala kanaler.',
  'sprak.mdx': 'Vilka språk webbplatsen använder.',
  'statistik.mdx': 'Samlad bild av hur webbplatsen används.',
  'textinnehall-evenemang.mdx': 'Huvudblocket för brödtext i ett evenemang.',
  'textinnehall-sida.mdx': 'Längre textsektioner på sidor.',
  'textinnehall.mdx': 'Huvudblocket för brödtext i ett inlägg.',
  'textstorlekar.mdx': 'Storlek på rubriker och texter.',
  'tidslinje.mdx': 'Steg, årtal eller processer i ordning.',
  'topbar.mdx': 'Smal rad ovanför sidhuvudet.',
  'topp-sidor.mdx': 'Sidor med flest sidvisningar under valt intervall.',
  'tvafaktorsautentisering.mdx': 'Extra skydd vid inloggning med tvåstegsverifiering.',
  'typsnitt.mdx': 'Fonter webbplatsen ska använda.',
  'upplevelsekort.mdx': 'Upplevelser från Aurora booking i kortformat.',
  'valkommen.mdx': 'Webbplats och bokning i samma adminpanel – Polar CMS och Aurora booking.',
  'vanliga-fragor.mdx': 'Frågor och svar i en tydlig lista.',
};

const BODY_OVERRIDES = {
  'skapa-sida.mdx': (body) =>
    body.replace(
      /## Duplicera en befintlig sida\n\nDu kan också skapa en ny sida genom att duplicera en sida som redan finns\.\n\nDet är användbart om du vill återanvända samma layout, blockstruktur eller grundinnehåll\./,
      '## Duplicera en befintlig sida\n\nDuplicera en befintlig sida om du vill återanvända layout och block.'
    ),
  'skapa-inlagg.mdx': (body) =>
    body
      .replace(
        /Du kan också skapa ett nytt inlägg genom att duplicera ett inlägg som redan finns\.\n\nDet är användbart om du vill återanvända samma struktur, block, bildspråk eller upplägg\./,
        'Duplicera ett befintligt inlägg om du vill återanvända struktur och block.'
      )
      .replace(/## Nästa steg\n\n/, '## Fortsätt med\n\n'),
  'skapa-evenemang.mdx': (body) =>
    body
      .replace(
        /Du kan också skapa ett nytt evenemang genom att duplicera ett evenemang som redan finns\.\n\nDet är användbart om flera evenemang har liknande upplägg, innehåll eller struktur\./,
        'Duplicera ett befintligt evenemang om flera har liknande upplägg.'
      )
      .replace(/## Nästa steg\n\n/, '## Fortsätt med\n\n'),
  'skapa-agentur.mdx': (body) => body.replace(/## Nästa steg\n\n/, '## Fortsätt med\n\n'),
  'quick-start.mdx': (body) => body.replace(/## Nästa steg\n\n/, '## Fortsätt med\n\n'),
  'introduktion-polar-cms.mdx': (body) =>
    body
      .replace(
        /Polar CMS är uppdelat i flera delar som tillsammans styr webbplatsen\.\n\n/,
        ''
      )
      .replace(/## När ska du använda Polar CMS\?\n\nAnvänd Polar CMS när du vill:\n\n/, '## Använd Polar CMS för att\n\n')
      .replace(/## Nästa steg\n\nOm du är ny i Polar CMS rekommenderar vi att du börjar med sidorna nedan\.\n\n/, '## Kom igång\n\n'),
  'valkommen.mdx': (body) =>
    body
      .replace(
        /Polar CMS är webbverktyget där du hanterar innehåll, sidor, inlägg, menyer, formulär, SEO och utseende på din webbplats\./,
        'Innehåll, sidor, inlägg, menyer, formulär, SEO och utseende.'
      )
      .replace(
        /Aurora booking är bokningssystemet där du hanterar kalender, bokningar, upplevelser, kunder, rabatter och presentkort\./,
        'Kalender, bokningar, upplevelser, kunder, rabatter och presentkort.'
      )
      .replace(
        /Du kan till exempel använda adminpanelen för att:\n\n/,
        'I adminpanelen kan du:\n\n'
      )
      .replace(
        /- \*\*Introduktion\*\* hjälper dig att komma igång och innehåller gemensamma guider för dashboard, konto, företag och inställningar\.\n- \*\*Polar CMS\*\* innehåller guider för webbplatsens innehåll, struktur och utseende\.\n- \*\*Aurora booking\*\* innehåller guider för bokningar, kunder, upplevelser och erbjudanden\.\n- \*\*Changelog\*\* visar nyheter och ändringar i plattformen\./,
        '- **Introduktion** – kom igång, dashboard, konto och inställningar\n- **Polar CMS** – innehåll, struktur och utseende\n- **Aurora booking** – bokningar, kunder och upplevelser\n- **Changelog** – nyheter och ändringar'
      ),
  'oversikt.mdx': (body) =>
    body
      .replace(/Här kan du bland annat se:\n\n/, 'På dashboarden ser du:\n\n')
      .replace(/## Nästa steg\n\n/, '## Kom igång\n\n'),
  'oversikt-sidor.mdx': (body) =>
    body.replace(/## Nästa steg\n\n/, '## Kom igång\n\n'),
  'datum-och-tider.mdx': (body) =>
    body.replace(
      /Det är användbart för upplevelser som återkommer varje vecka, varje dag eller enligt ett återkommande schema\./,
      'Passar upplevelser som återkommer varje vecka, dagligen eller enligt schema.'
    ),
  'changelog.mdx': (body) => {
    const updates = `<Update label="Juni 2026">
  **Dokumentation, tydligare adminflöden och bättre bokningshantering.**

  Polar CMS och Aurora Booking har fått komplett dokumentation. Gemensamma guider för dashboard, konto och inställningar ligger nu under **Introduktion**.

  Adminpanelen har tydligare hjälptexter, statusar och redigeringsflöden. Bokningslistor, betalningsstatus och kundflöden är enklare att följa. SEO, språkhantering, metadata och cookiehantering har också uppdaterats. Sidbyggaren stödjer nu egen HTML för projektunika kodsnippets.
</Update>

<Update label="Maj 2026">
  **Kundkonto, språk, domän och säkerhet.**

  Kundkonto med engångskod har fått tydligare inloggning, avbokning och kunddetaljer. Språk-, domän- och DNS-hantering fungerar bättre för flerspråkiga webbplatser. Omdirigering vid slugändringar gäller nu fler innehållstyper.

  Återkommande tider för upplevelser är enklare att hantera. Användarhantering, inbjudningar och tvåstegsverifiering har uppdaterats. Nyhetsbrev, formulär, bildhantering, sitemap och betalningskonto har också fått stabilare hantering.
</Update>

<Update label="April 2026">
  **Bokning, editor och publika kundflöden.**

  Bokningskalender, upplevelser, datum, priser och gästhantering har uppdaterats. Presentkortsköp finns i checkout. Kundkonto och faktureringsprofiler är mer robusta.

  Sidredigeraren varnar vid osparade ändringar och har bättre blockförhandsvisningar. Pris-, tabell- och navigationsblock har förbättrade redigeringsflöden. Flerspråkigt innehåll, domäner, Google-recensioner och Cookie Consent har också fått bättre stöd.
</Update>`;
    return body.replace(/<Update label="Juni 2026">[\s\S]*?<\/Update>\n\n<Update label="Maj 2026">[\s\S]*?<\/Update>\n\n<Update label="April 2026">[\s\S]*?<\/Update>/, updates);
  },
};

function humanizeBody(body, file) {
  if (BODY_OVERRIDES[file]) {
    body = BODY_OVERRIDES[file](body);
  }

  // "## Vad listan visar\n\nXlistan visar bland annat:\n\n" -> "## Xlistan\n\n"
  body = body.replace(
    /## Vad listan visar\n\n([^\n]+?) visar bland annat:\n\n/g,
    (_, name) => `## ${name.charAt(0).toUpperCase()}${name.slice(1)}\n\n`
  );

  // "Xlistan visar bland annat:\n\n" without heading (oversikt-sidor etc)
  body = body.replace(/^([A-ZÅÄÖ][^\n]+listan) visar bland annat:\n\n/gm, '## $1\n\n');

  // "Tabellen visar bland annat:"
  body = body.replace(/^Tabellen visar bland annat:\n\n/gm, '## Användartabellen\n\n');

  // "Mallistan visar bland annat:" etc when under ## Vad listan visar already fixed
  body = body.replace(/ visar bland annat:\n\n/g, ':\n\n');

  // "Du kan bland annat se:"
  body = body.replace(/Du kan bland annat se:\n\n/g, 'I vyn ser du:\n\n');

  // SEO "bland annat metadata"
  body = body.replace(/SEO-poängen kan påverkas av bland annat /g, 'SEO-poängen påverkas av ');

  // "Där hanterar du bland annat logotyp"
  body = body.replace(/Där hanterar du bland annat /g, 'Där hanterar du ');

  // "För bilder kan du bland annat arbeta med"
  body = body.replace(/För bilder kan du bland annat arbeta med /g, 'För bilder kan du arbeta med ');

  // Softer "Du kan också" when it's redundant intro
  body = body.replace(
    /Du kan också söka på /g,
    'Sök på '
  );
  body = body.replace(
    /Du kan också filtrera på:\n\n/g,
    'Filtrera på:\n\n'
  );
  body = body.replace(
    /Du kan också spara filter som egna kalendervyer\./g,
    'Spara filter som egna kalendervyer.'
  );
  body = body.replace(
    /Du kan också dra och ändra tider direkt i kalendern\./g,
    'Dra och ändra tider direkt i kalendern.'
  );
  body = body.replace(
    /Du kan också radera sidan permanent direkt, utan att vänta på 30-dagarsperioden\./g,
    'Radera sidan permanent direkt, utan att vänta på 30-dagarsperioden.'
  );
  body = body.replace(
    /Du kan också öppna inställningarna från /g,
    'Öppna inställningarna från '
  );
  body = body.replace(
    /Du kan också klicka på SEO-mätaren i sidlistan för att se vad som påverkar sidans poäng\./g,
    'Klicka på SEO-mätaren i sidlistan för att se vad som påverkar poängen.'
  );
  body = body.replace(
    /Du kan också öppna upplevelsen och redigera tillfället under \*\*Datum\*\*\./g,
    'Öppna upplevelsen och redigera tillfället under **Datum**.'
  );
  body = body.replace(
    /Du kan också använda åtgärdsmenyn för att:\n\n/g,
    'I åtgärdsmenyn kan du:\n\n'
  );

  // "## Vad listan visar\n\nXlistan visar:\n\n" -> "## Xlistan\n\n"
  body = body.replace(
    /## Vad listan visar\n\n([^\n]+?) visar:\n\n/g,
    (_, name) => `## ${name.charAt(0).toUpperCase()}${name.slice(1)}\n\n`
  );

  // Duplicate list headings: "## Vad du ser i listan\n\n## Xlistan"
  body = body.replace(/## Vad du ser i listan\n\n## /g, '## ');

  // Stray slash artifact
  body = body.replace(/\n\/\n\n(?=1\. Logga in)/g, '\n\n');

  // SEO score list intro
  body = body.replace(/SEO-poängen kan påverkas av bland annat:\n\n/g, 'SEO-poängen påverkas av:\n\n');

  // Help section heading
  body = body.replace(/## Behöver du hjälp\?\n\n/g, '## Hjälp\n\n');

  // Intro analys/aurora headings
  body = body.replace(/## Vad du använder Analys till\n\nAnalys hjälper dig att:\n\n/g, '## Använd Analys för att\n\n');
  body = body.replace(/## Vad du använder Aurora Booking till\n\nAurora Booking hjälper dig att:\n\n/g, '## Använd Aurora Booking för att\n\n');

  // Topp-sidor
  body = body.replace(
    /## Vad listan visar\n\nTopp-sidor visar sidor sorterade efter flest sidvisningar\./,
    '## Topp-sidor\n\nVisar sidor sorterade efter flest sidvisningar.'
  );
  body = body.replace(/## När ska du använda topp-sidor\?\n\n/g, '## Använd topp-sidor för att\n\n');

  // Editor top bar – less repetitive grammar
  body = body.replace(/\*\*Tillbaka\*\* tar dig tillbaka till sidlistan\./g, '**Tillbaka** – till sidlistan.');
  body = body.replace(/\*\*Tillbaka\*\* tar dig tillbaka till inläggslistan\./g, '**Tillbaka** – till inläggslistan.');
  body = body.replace(/\*\*Tillbaka\*\* tar dig tillbaka till evenemangslistan\./g, '**Tillbaka** – till evenemangslistan.');
  body = body.replace(/Sidväljaren i mitten låter dig växla till en annan sida\./g, 'Sidväljaren i mitten – byt sida.');
  body = body.replace(/Inläggsväljaren i mitten låter dig växla till ett annat inlägg\./g, 'Inläggsväljaren i mitten – byt inlägg.');
  body = body.replace(/Evenemangsväljaren i mitten låter dig växla till ett annat evenemang\./g, 'Evenemangsväljaren i mitten – byt evenemang.');
  body = body.replace(/\*\*Ångra\*\* och \*\*Gör om\*\* låter dig backa eller återställa ändringar\./g, '**Ångra** och **Gör om** – backa eller återställ ändringar.');
  body = body.replace(/Enhetsväljaren låter dig kontrollera sidan i olika vyer\./g, 'Enhetsväljaren – kontrollera sidan i olika vyer.');
  body = body.replace(/Enhetsväljaren låter dig kontrollera inlägget i olika vyer\./g, 'Enhetsväljaren – kontrollera inlägget i olika vyer.');
  body = body.replace(/Enhetsväljaren låter dig kontrollera evenemanget i olika vyer\./g, 'Enhetsväljaren – kontrollera evenemanget i olika vyer.');

  // "När ska du" sections
  body = body.replace(/## När ska du använda mallar\?\n\n/g, '## Använd mallar för att\n\n');
  body = body.replace(/## När ska du använda global SEO\?\n\n/g, '## Använd global SEO för att\n\n');
  body = body.replace(/## När ska du följa upp\?\n\n/g, '## Följ upp när\n\n');

  return body;
}

function updateDescription(fm, file) {
  if (!DESCRIPTIONS[file]) {
    console.warn('Missing description for', file);
    return fm;
  }
  return fm.replace(/^description:.*$/m, `description: "${DESCRIPTIONS[file]}"`);
}

const files = fs.readdirSync(DOCS_DIR).filter((f) => f.endsWith('.mdx'));
let descCount = 0;
let bodyCount = 0;

for (const file of files) {
  const filePath = path.join(DOCS_DIR, file);
  const raw = fs.readFileSync(filePath, 'utf8');
  const match = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) continue;

  let fm = match[1];
  let body = match[2];
  const origFm = fm;
  const origBody = body;

  fm = updateDescription(fm, file);
  body = humanizeBody(body, file);

  if (fm !== origFm) descCount++;
  if (body !== origBody) bodyCount++;

  fs.writeFileSync(filePath, `---\n${fm}\n---\n${body}`);
}

console.log(`Updated descriptions: ${descCount}/${files.length}`);
console.log(`Updated body: ${bodyCount}/${files.length}`);

// Audit
const patterns = ['Här visar vi', 'Ska du ', 'Behöver du', 'Här i **', 'Med blocket', 'Vill du ', 'Det är användbart', 'bland annat', 'Här håller vi', 'Här lär du', 'Här går vi'];
let issues = 0;
for (const file of files) {
  const c = fs.readFileSync(path.join(DOCS_DIR, file), 'utf8');
  for (const p of patterns) {
    if (c.includes(p)) {
      console.log('REMAINING:', p, 'in', file);
      issues++;
    }
  }
}
console.log('Remaining pattern hits:', issues);
