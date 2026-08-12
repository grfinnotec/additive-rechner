# Additive-Rechner

Eigenständige HTML-Anwendung für den Innotec Additive-Rechner. Die Anwendung
berechnet Servicevolumen, Paketwerte und wirtschaftliche Kennzahlen vollständig
im Browser.

## Lokaler Start

`index.html` direkt im Browser öffnen. Es ist keine Installation, kein Framework
und keine Build-Pipeline erforderlich.

## Beta-Passwortschutz

Die Seite enthält einen einfachen clientseitigen Beta-Zugangsschutz. Das aktuell
gesetzte vorläufige Passwort lautet:

```text
INTC2026
```

Der Passwort-Hash liegt in `script.js` unter
`calculatorConfig.betaAccess.passwordHash`. Soll das Passwort geändert werden,
muss für das neue Passwort ein SHA-256-Hash erzeugt und dort ersetzt werden.

Wichtig für GitHub Pages: Dieser Schutz verhindert vor allem versehentlichen
Zugriff. Da GitHub Pages statische Dateien ausliefert, ersetzt er keinen echten
serverseitigen Login.

## Dateien

- `index.html`: Aufbau der Anwendung und Formularstruktur
- `styles.css`: Innotec-nahe Gestaltung auf Basis des Bindemittel-Vergleichs
- `script.js`: zentrale Konfiguration, Berechnungen, Validierung und Ausgabe
- `assets/product-placeholder.webp`: Platzhalter für noch fehlende Produktbilder
- `assets/1201-injection-clean.png`: Produktbild Injection Clean
- `assets/1202-valve-clean.png`: Produktbild Valve Clean
- `assets/1203-diesel-plus.png`: Produktbild Diesel Plus
- `assets/1204-fuel-plus.png`: Produktbild Fuel Plus
- `assets/1199-adblue-additive.png`: Produktbild AdBlue Additive
- `assets/innotec-horizontal.png`: Innotec Logo im Kopfbereich
- `Artikelstamm.xlsx`: lokale Arbeitskopie der bereitgestellten Artikelstamm-Datei

## Artikelstamm als Datenbasis

Die Artikel `1201`, `1202`, `1203` und `1204` wurden aus
`Artikelstamm.xlsx` übernommen. Verwendet wurden Produktname, deutsche
Artikelbezeichnung, Gebinde, Verkaufseinheit, Kurzbeschreibung,
Nutzen-Stichworte und Bilddateinamen. Die gelieferten freigestellten
Produktbilder wurden lokal in `assets/` kopiert und in der Konfiguration
verknüpft.

Der Artikel `1199` wurde nachträglich aus dem PIM-Kontext ergänzt und ist als
`AdBlue Additive` mit Produktbild in der Konfiguration vorhanden.

Die Verkaufseinheit im Artikelstamm beträgt bei den gefundenen Additiven `24`.
Die Rechnerlogik verwendet deshalb `24` Flaschen je Karton. Ab `10` Kartons
beziehungsweise `240` Flaschen wird mit dem Paketpreis `8,12 €` je Flasche
gerechnet; darunter gilt der reguläre Preis `11,21 €` je Flasche.

## Zentrale Konfiguration

Alle fachlichen Werte liegen am Anfang von `script.js` im Objekt
`calculatorConfig`.

Wichtige Felder:

- `workingDaysPerWeek`: Arbeitstage pro Woche
- `workingWeeksPerYear`: Arbeitswochen pro Jahr
- `revenuePerService`: Startwert Umsatz je Service, aktuell `21`
- `unitsRequiredPerService`: Produktmenge je Service, aktuell `1` Flasche
- `recommendedPackCount`: empfohlene Gesamtanzahl Kartons, aktuell `12`
- `pricing.regularUnitPrice`: regulärer Produktpreis pro Stück, aktuell `11.21`
- `pricing.packageUnitPrice`: Paketpreis pro Stück ab 10 Kartons, aktuell `8.12`
- `pricing.unitsPerPack`: Stück je Karton, aktuell `24`
- `pricing.bulkCartonThreshold`: Schwelle für den Paketpreis, aktuell `10`
- `pricing.completePackagePackCount`: vollständiges Paket aus zwölf Kartons, aktuell `12`
- `pricing.completePackagePrice`: Paketpreis des vollständigen Pakets, aktuell `2338.56`
- `pricing.completePackageRegularValue`: regulärer Vergleichswert des vollständigen Pakets, aktuell `3228.48`
- `ctaButtonLabel`: Beschriftung des CTA-Buttons
- `requestEmail.recipient`: Empfängeradresse für den Mailentwurf, aktuell leer
- `requestEmail.subjectPrefix`: Betreff-Präfix für den Mailentwurf
- `products`: Artikelstammdaten, Preise, Packungsgröße und Startmengen

Geldbeträge werden intern in Cent berechnet, damit Rundungsfehler vermieden
werden.

Die Start-Zusammenstellung ist aktuell zwölf Kartons über fünf Artikel verteilt.
Dadurch ergibt sich der vollständige Paketpreis von `2.338,56 €` und ein
regulärer Vergleichswert von `3.228,48 €`.

Die Marge im Hauptrechner wird als Differenz zwischen ausmultipliziertem
Jahresumsatz und aktuellem Paketpreis berechnet:

```text
Marge = Services pro Tag x Umsatz pro Service x 250 Arbeitstage - Paketpreis
```

## Noch offene fachliche Angaben

- finale Kurzbeschreibungen
- finaler CTA-Text
- Empfängeradresse für Anfragen
- finaler Datenschutztext beim Formular

## Mailentwurf und spätere API-Anbindung

Die aktuelle Version validiert das Formular, erstellt ein strukturiertes
Datenobjekt und öffnet über `mailto:` das Standardmailprogramm mit vorausgefülltem
Betreff und Body. Der Versand erfolgt anschließend bewusst im Mailprogramm durch
den Nutzer.

Die Zieladresse wird in `script.js` unter `calculatorConfig.requestEmail.recipient`
gepflegt. Ist sie leer, öffnet sich der Mailentwurf ohne Empfänger.

Eine spätere echte API-Anbindung kann weiterhin in der Funktion
`sendRequest(payload)` umgesetzt werden.
