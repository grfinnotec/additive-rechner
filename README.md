# Innotec Additive-Rechner

Statische HTML-Anwendung für den Innotec Additive-Rechner. Die Seite berechnet
auf Basis weniger Eingaben das Servicevolumen, die empfohlene Produktmenge,
den Paketwert und das mögliche Umsatz- beziehungsweise Margenpotenzial.

Die Anwendung läuft vollständig im Browser. Es gibt keinen Server, keine
Datenbank, kein Framework und keine Build-Pipeline.

## Lokaler Start

`index.html` direkt im Browser öffnen.

Für GitHub Pages reicht es, den Ordner als statische Website zu veröffentlichen.
Die Startdatei ist `index.html`.

## Aktueller Funktionsumfang

- Eingabe für `Services pro Tag`, Startwert aktuell `1`
- Eingabe für `Umsatz pro Service`, Startwert aktuell `21 €`
- automatische Hochrechnung auf Woche, Monat und Jahr
- Produktauswahl mit Plus-/Minus-Steuerung je Artikel
- Berechnung von Stückzahl, Paketpreis, regulärem Vergleichswert und Ersparnis
- Berechnung von Umsatzpotenzial und Profit
- Produktnamen als externe Links zur Innotec-Website
- Anfrageformular mit vorbereitetem Mailentwurf über `mailto:`
- PDF-Ausgabe über den Druckdialog des Browsers
- responsives Layout für Desktop, Tablet und Smartphone

## Aktuelle Paketlogik

Die Rechnerlogik verwendet ein Aktionspaket aus fünf 10er-Packs.

| Wert | Aktueller Stand |
| --- | ---: |
| Regulärer Produktpreis pro Stück | `11,21 €` |
| Paketpreis pro Stück im 10er-Pack | `8,12 €` |
| Preis eines 10er-Packs je Artikel | `81,20 €` |
| Vollständiges Paket aus fünf 10er-Packs | `406,00 €` |
| Regulärer Vergleichswert des vollständigen Pakets | `560,50 €` |

Die Start-Zusammenstellung ist aktuell je ein 10er-Pack für diese fünf Artikel:

- `1201` Injection Clean
- `1202` Valve Clean
- `1203` Diesel Plus
- `1204` Fuel Plus
- `1199` AdBlue Additive

## Datenbasis

Die Artikel `1201`, `1202`, `1203` und `1204` wurden aus
`Artikelstamm.xlsx` übernommen. Verwendet wurden Produktname, deutsche
Artikelbezeichnung, Gebinde, Verkaufseinheit, Kurzbeschreibung,
Nutzen-Stichworte und Bilddateinamen.

Der Artikel `1199` wurde ergänzend als `AdBlue Additive` in die Konfiguration
aufgenommen.

Die gelieferten freigestellten Produktbilder und das Innotec-Logo liegen lokal
im Ordner `assets/`.

## Projektdateien

- `index.html`: Seitenstruktur, Formular und Einstiegspunkt
- `styles.css`: Layout, Design, responsive Darstellung und Druckansicht
- `script.js`: Konfiguration, Berechnungen, Ausgabe und Formularlogik
- `assets/`: Logo, Produktbilder, Favicon und Platzhalterbild
- `Artikelstamm.xlsx`: lokale Arbeitskopie der bereitgestellten Artikeldaten
- `codex_auftrag_additive_rechner.md`: ursprüngliche Anforderung

## Zentrale Konfiguration

Alle fachlichen Werte stehen am Anfang von `script.js` im Objekt
`calculatorConfig`.

Wichtige Felder:

- `defaultServicesPerDay`: Startwert für Services pro Tag, aktuell `1`
- `workingDaysPerWeek`: Arbeitstage pro Woche, aktuell `5`
- `workingWeeksPerYear`: Arbeitswochen pro Jahr, aktuell `50`
- `revenuePerService`: Umsatz je Service, aktuell `21`
- `unitsRequiredPerService`: Produktmenge je Service, aktuell `1` Flasche
- `recommendedPackCount`: empfohlene Gesamtanzahl Packs, aktuell `5`
- `pricing.regularUnitPrice`: regulärer Stückpreis, aktuell `11.21`
- `pricing.packageUnitPrice`: Aktions-Stückpreis, aktuell `8.12`
- `pricing.unitsPerPack`: Stück je Pack, aktuell `10`
- `pricing.completePackagePrice`: Paketpreis, aktuell `406`
- `pricing.completePackageRegularValue`: regulärer Vergleichswert, aktuell `560.5`
- `requestEmail.recipient`: Zieladresse für den Mailentwurf, aktuell leer
- `products`: Artikeldaten, Bildpfade, Website-Links und Startmengen

Geldbeträge werden intern in Cent berechnet, um Rundungsfehler zu vermeiden.

## Berechnungslogik

```text
Services pro Woche = Services pro Tag x 5
Services pro Jahr = Services pro Woche x 50
Abgedeckte Services = ausgewählte Stückzahl / Produktmenge je Service
Umsatzpotenzial = Services pro Jahr x Umsatz pro Service
Profit = Umsatzpotenzial - Paketpreis
Ersparnis = regulärer Warenwert - Paketpreis
```

## Veröffentlichung

Die Seite kann direkt über GitHub Pages veröffentlicht werden.

Wichtig:

- Es gibt aktuell keinen Passwortschutz mehr.
- Statische GitHub-Pages-Seiten bieten keinen echten serverseitigen Login.
- Sensible Daten oder nicht öffentliche Preise sollten dort nur veröffentlicht
  werden, wenn die Seite bewusst öffentlich erreichbar sein darf.

## Offene fachliche Punkte

- finale Empfängeradresse für Anfragen
- finaler Datenschutztext beim Formular
- finale Prüfung der Produkt-URLs auf der öffentlichen Website
- finale fachliche Freigabe der Kurzbeschreibungen

## Changelog

### 2026-08-19

- README neu strukturiert und Changelog ergänzt.
- Passwortschutz vollständig entfernt; die Seite öffnet direkt.
- Startwert `Services pro Tag` von `5` auf `1` geändert.
- Paketlogik auf fünf 10er-Packs umgestellt.
- Preislogik auf `11,21 €` regulär und `8,12 €` im 10er-Pack aktualisiert.
- Paketwerte auf `81,20 €` je 10er-Pack, `406,00 €` Gesamtpaket und
  `560,50 €` regulären Vergleichswert angepasst.
- Artikelnummern aus der separaten Pill-Darstellung entfernt und als
  `ArtNr.: ...` in den Produkt-Fließtext übernommen.
- Produktnamen als Links zur Innotec-Website umgesetzt.
- Loginfenster und zugehörige Passwortlogik aus HTML, CSS und JavaScript
  entfernt.
- Mobile Darstellung nachgeschärft, damit Produktkarten, Statushinweise und
  Mengenfelder auf Smartphone-Breite sauber umbrechen.

### Vorheriger Arbeitsstand

- Grundversion als einzelne statische HTML-Anwendung aufgebaut.
- Produktbilder und Innotec-Logo lokal in `assets/` eingebunden.
- Artikeldaten aus dem bereitgestellten Artikelstamm in `script.js`
  übernommen.
- Anfrageformular mit Mailentwurf und PDF-Ausgabe über den Browserdruckdialog
  ergänzt.
