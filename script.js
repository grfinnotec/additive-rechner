const calculatorConfig = {
  betaAccess: {
    enabled: true,
    sessionStorageKey: "innotecAdditiveBetaAccess",
    passwordHash:
      "295eb11a4e48b621e885431b79ec80f2ce742abc0b291eeecb779b24f10c833a"
  },
  locale: "de-DE",
  currency: "EUR",
  minServicesPerDay: 1,
  defaultServicesPerDay: 5,
  minRevenuePerService: 0,
  workingDaysPerWeek: 5,
  workingWeeksPerYear: 50,
  revenuePerService: 21,
  unitsRequiredPerService: 1,
  recommendedPackCount: 12,
  pricing: {
    regularUnitPrice: 11.21,
    packageUnitPrice: 8.12,
    unitsPerPack: 24,
    bulkCartonThreshold: 10,
    completePackagePackCount: 12,
    completePackagePrice: 2338.56,
    completePackageRegularValue: 3228.48
  },
  ctaButtonLabel: "Zusammenstellung anfragen",
  requestButtonLabel: "Berechnung senden",
  requestEmail: {
    recipient: "",
    subjectPrefix: "Additive-Rechner Anfrage"
  },
  introText: {
    priceBasis:
      "Basis: 250 Arbeitstage pro Jahr. Pro Service wird eine Flasche gerechnet. Eine Flasche kostet regulär 11,21 €. Ab 10 Kartons bzw. 240 Flaschen wird mit 8,12 € je Flasche gerechnet."
  },
  products: [
    {
      articleNumber: "1201",
      name: "Injection Clean",
      description:
        "Injection Clean ist ein leistungsstarker Reiniger bzw. Kraftstoffzusatz für das gesamte Einspritzsystem von Benzin- und Dieselmotoren.",
      shortBenefit:
        "Bindet und verbrennt wasserversetzten Kraftstoff, unterstützt Benzin- und Dieselmotoren und optimiert die Kraftstoffeffizienz.",
      articleMasterNameGerman: "Einspritzsystem-Reiniger",
      packageContent: "250 ml Flasche",
      articleMasterSalesUnit: 24,
      productPhotoFileName: "1201_Injection Clean - Produktfoto_Web.jpg",
      productCutoutFileName: "1201_Injection Clean - Produktfoto_Freigestellt.png",
      image: "assets/1201-injection-clean.png",
      unitsPerPack: null,
      regularUnitPrice: null,
      packageUnitPrice: null,
      defaultPacks: 3
    },
    {
      articleNumber: "1202",
      name: "Valve Clean",
      description:
        "Valve Clean reinigt Einlassventile, Ansaugtrakt und Brennraum bei 2- und 4-Takt-Motoren.",
      shortBenefit:
        "Für Benzin- und Dieselmotoren, optimiert die Kraftstoffeffizienz und schützt vor Kohleansatz und Korrosion.",
      articleMasterNameGerman: "Ventil-Reiniger",
      packageContent: "250 ml Flasche",
      articleMasterSalesUnit: 24,
      productPhotoFileName: "1202_Valve Clean - Produktfoto_Web.jpg",
      productCutoutFileName: "1202_Valve Clean - Produktfoto_Freigestellt.png",
      image: "assets/1202-valve-clean.png",
      unitsPerPack: null,
      regularUnitPrice: null,
      packageUnitPrice: null,
      defaultPacks: 3
    },
    {
      articleNumber: "1203",
      name: "Diesel Plus",
      description:
        "Diesel Plus ist ein Additiv zur Systempflege von Dieselmotoren, verbessert die Verbrennung und unterstützt den Kaltstart.",
      shortBenefit:
        "Verbesserte Verbrennung, verbesserter Kaltstart, optimierter Kraftstoffverbrauch und Schutz vor Pilzwachstum im Tank.",
      articleMasterNameGerman: "Pflege- und Service-Additiv für Diesel",
      packageContent: "250 ml Flasche",
      articleMasterSalesUnit: 24,
      productPhotoFileName: "1203_Diesel Plus - Produktfoto_Web.jpg",
      productCutoutFileName: "1203_Diesel Plus - Produktfoto_Freigestellt.png",
      image: "assets/1203-diesel-plus.png",
      unitsPerPack: null,
      regularUnitPrice: null,
      packageUnitPrice: null,
      defaultPacks: 2
    },
    {
      articleNumber: "1204",
      name: "Fuel Plus",
      description:
        "Fuel Plus ist ein Additiv für Benzinmotoren und E85-Systeme, optimiert die Verbrennung und schützt das Kraftstoffsystem.",
      shortBenefit:
        "Verbessert die Verbrennung von bleifreiem Benzin und Bioethanol, optimiert den Kraftstoffverbrauch und reduziert den Schadstoffausstoß.",
      articleMasterNameGerman: "Pflege- und Service-Additiv für Benzin",
      packageContent: "250 ml Flasche",
      articleMasterSalesUnit: 24,
      productPhotoFileName: "1204_Fuel Plus - Produktfoto_Web.jpg",
      productCutoutFileName: "1204_Fuel Plus - Produktfoto_Freigestellt.png",
      image: "assets/1204-fuel-plus.png",
      unitsPerPack: null,
      regularUnitPrice: null,
      packageUnitPrice: null,
      defaultPacks: 2
    },
    {
      articleNumber: "1199",
      name: "AdBlue Additive",
      description:
        "SCR- und AdBlue-Systemreiniger für die einfache Reinigung des Kraftstoffsystems im bestehenden Serviceablauf.",
      shortBenefit:
        "Verhindert Kristallbildung, löst vorhandene Kristalle auf und verbessert die Effizienz des SCR-Systems.",
      articleMasterNameGerman: "SCR- und AdBlue-Systemreiniger",
      packageContent: "250 ml Flasche",
      articleMasterSalesUnit: 24,
      productPhotoFileName: "abad.jpg",
      productCutoutFileName: null,
      image: "assets/1199-adblue-additive.png",
      unitsPerPack: null,
      regularUnitPrice: null,
      packageUnitPrice: null,
      defaultPacks: 2
    }
  ]
};

const state = {
  servicesPerDay: calculatorConfig.defaultServicesPerDay,
  revenuePerService: calculatorConfig.revenuePerService,
  packsByArticle: Object.fromEntries(
    calculatorConfig.products.map((product) => [product.articleNumber, product.defaultPacks])
  ),
  lastCalculation: null
};

const elements = {
  authGate: document.querySelector("#authGate"),
  authForm: document.querySelector("#authForm"),
  betaPassword: document.querySelector("#betaPassword"),
  authMessage: document.querySelector("#authMessage"),
  servicesPerDay: document.querySelector("#servicesPerDay"),
  revenuePerService: document.querySelector("#revenuePerService"),
  annualRevenue: document.querySelector("#annualRevenue"),
  annualMargin: document.querySelector("#annualMargin"),
  potentialHint: document.querySelector("#potentialHint"),
  serviceStats: document.querySelector("#serviceStats"),
  offerMetrics: document.querySelector("#offerMetrics"),
  packageSummary: document.querySelector("#packageSummary"),
  productGrid: document.querySelector("#productGrid"),
  recommendedStatus: document.querySelector("#recommendedStatus"),
  ctaText: document.querySelector("#ctaText"),
  ctaButton: document.querySelector("#ctaButton"),
  submitButton: document.querySelector("#submitButton"),
  requestForm: document.querySelector("#requestForm"),
  formMessage: document.querySelector("#formMessage")
};

const moneyFormatter = new Intl.NumberFormat(calculatorConfig.locale, {
  style: "currency",
  currency: calculatorConfig.currency
});

const numberFormatter = new Intl.NumberFormat(calculatorConfig.locale, {
  maximumFractionDigits: 0
});

async function getSha256Hex(value) {
  if (!window.crypto?.subtle) {
    throw new Error("Crypto API unavailable");
  }

  const encodedValue = new TextEncoder().encode(value);
  const hashBuffer = await window.crypto.subtle.digest("SHA-256", encodedValue);
  return Array.from(new Uint8Array(hashBuffer))
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
}

function unlockBetaAccess() {
  document.body.classList.remove("auth-locked");
  document.body.classList.add("auth-unlocked");
  elements.authGate?.setAttribute("hidden", "");
}

function initBetaAccess() {
  if (!calculatorConfig.betaAccess.enabled) {
    unlockBetaAccess();
    return;
  }

  if (sessionStorage.getItem(calculatorConfig.betaAccess.sessionStorageKey) === "ok") {
    unlockBetaAccess();
    return;
  }

  elements.authGate?.removeAttribute("hidden");
  elements.betaPassword?.focus();
}

function toCents(value) {
  return Math.round(Number(value) * 100);
}

function formatMoneyFromCents(cents) {
  if (cents === null || Number.isNaN(cents)) {
    return "Noch offen";
  }

  return moneyFormatter.format(cents / 100);
}

function formatNumber(value) {
  if (value === null || Number.isNaN(value)) {
    return "Noch offen";
  }

  return numberFormatter.format(value);
}

function getIntegerInputValue(input, minValue) {
  const parsedValue = Number.parseInt(input.value, 10);
  if (Number.isNaN(parsedValue)) {
    return minValue;
  }

  return Math.max(minValue, parsedValue);
}

function getDecimalInputValue(input, minValue) {
  const normalizedValue = input.value.replace(",", ".");
  const parsedValue = Number.parseFloat(normalizedValue);
  if (Number.isNaN(parsedValue)) {
    return minValue;
  }

  return Math.max(minValue, parsedValue);
}

function getServiceVolume() {
  const servicesPerWeek = state.servicesPerDay * calculatorConfig.workingDaysPerWeek;
  const servicesPerMonth = Math.round((servicesPerWeek * calculatorConfig.workingWeeksPerYear) / 12);
  const servicesPerYear = servicesPerWeek * calculatorConfig.workingWeeksPerYear;

  return {
    servicesPerDay: state.servicesPerDay,
    servicesPerWeek,
    servicesPerMonth,
    servicesPerYear
  };
}

function getProductRows(totalPacks) {
  const isBulkPriceActive = totalPacks >= calculatorConfig.pricing.bulkCartonThreshold;

  return calculatorConfig.products.map((product) => {
    const packs = state.packsByArticle[product.articleNumber] || 0;
    const unitsPerPack = product.unitsPerPack ?? calculatorConfig.pricing.unitsPerPack;
    const regularUnitPrice = product.regularUnitPrice ?? calculatorConfig.pricing.regularUnitPrice;
    const packageUnitPrice = isBulkPriceActive
      ? product.packageUnitPrice ?? calculatorConfig.pricing.packageUnitPrice
      : regularUnitPrice;
    const units = packs * unitsPerPack;
    const regularValueCents = units * toCents(regularUnitPrice);
    const packageCostCents = units * toCents(packageUnitPrice);

    return {
      ...product,
      unitsPerPack,
      regularUnitPrice,
      packageUnitPrice,
      packs,
      units,
      regularValueCents,
      packageCostCents,
      savingsCents: regularValueCents - packageCostCents,
      isBulkPriceActive
    };
  });
}

function getCoveredServices(totalUnits) {
  if (calculatorConfig.unitsRequiredPerService <= 0) {
    return null;
  }

  return Math.floor(totalUnits / calculatorConfig.unitsRequiredPerService);
}

function getCalculation() {
  const serviceVolume = getServiceVolume();
  const totalPacks = Object.values(state.packsByArticle).reduce((sum, packs) => sum + packs, 0);
  const products = getProductRows(totalPacks);
  const totalUnits = products.reduce((sum, product) => sum + product.units, 0);
  const regularValueCents = products.reduce((sum, product) => sum + product.regularValueCents, 0);
  const packageCostCents = products.reduce((sum, product) => sum + product.packageCostCents, 0);
  const savingsCents = regularValueCents - packageCostCents;
  const coveredServices = getCoveredServices(totalUnits);
  const reachMonths =
    coveredServices === null || serviceVolume.servicesPerMonth === 0
      ? null
      : coveredServices / serviceVolume.servicesPerMonth;
  const annualRevenueCents =
    serviceVolume.servicesPerYear * toCents(state.revenuePerService);
  const annualMarginCents = annualRevenueCents - packageCostCents;
  const packageRevenueCents =
    coveredServices === null ? null : coveredServices * toCents(state.revenuePerService);
  const packageMarginCents =
    packageRevenueCents === null ? null : packageRevenueCents - packageCostCents;
  const configuredCompletePackagePriceCents = toCents(calculatorConfig.pricing.completePackagePrice);
  const configuredCompletePackageRegularValueCents = toCents(
    calculatorConfig.pricing.completePackageRegularValue
  );

  return {
    serviceVolume,
    products,
    totalPacks,
    totalUnits,
    coveredServices,
    reachMonths,
    totals: {
      regularValueCents,
      packageCostCents,
      savingsCents,
      annualRevenueCents,
      annualMarginCents,
      packageRevenueCents,
      packageMarginCents,
      configuredCompletePackagePriceCents,
      configuredCompletePackageRegularValueCents
    }
  };
}

function renderServiceStats(serviceVolume) {
  const stats = [
    ["Pro Tag", serviceVolume.servicesPerDay],
    ["Pro Woche", serviceVolume.servicesPerWeek],
    ["Pro Monat", serviceVolume.servicesPerMonth],
    ["Pro Jahr", serviceVolume.servicesPerYear]
  ];

  elements.serviceStats.innerHTML = stats
    .map(
      ([label, value]) => `
        <div class="stat-card">
          <span>${label}</span>
          <strong>${formatNumber(value)}</strong>
        </div>
      `
    )
    .join("");
}

function renderOfferMetrics(calculation) {
  const completePackageSavingsCents =
    calculation.totals.configuredCompletePackageRegularValueCents -
    calculation.totals.configuredCompletePackagePriceCents;
  if (!elements.offerMetrics) {
    return;
  }

  const metrics = [
    ["Paketpreis", formatMoneyFromCents(calculation.totals.configuredCompletePackagePriceCents)],
    ["Regulär", formatMoneyFromCents(calculation.totals.configuredCompletePackageRegularValueCents)],
    ["Preisvorteil", formatMoneyFromCents(completePackageSavingsCents)]
  ];

  elements.offerMetrics.innerHTML = metrics
    .map(
      ([label, value]) => `
        <div class="offer-metric">
          <span>${label}</span>
          <strong>${value}</strong>
        </div>
      `
    )
    .join("");
}

function renderPackageSummary(calculation) {
  const reachMonths =
    calculation.reachMonths === null
      ? "Noch offen"
      : `${new Intl.NumberFormat(calculatorConfig.locale, {
          minimumFractionDigits: 1,
          maximumFractionDigits: 1
        }).format(calculation.reachMonths)} Monate`;

  const cards = [
    {
      title: "Paketumfang",
      rows: [
        ["Kartons", formatNumber(calculation.totalPacks)],
        ["Stück gesamt", formatNumber(calculation.totalUnits)]
      ]
    },
    {
      title: "Reichweite",
      rows: [
        ["Services abgedeckt", formatNumber(calculation.coveredServices)],
        ["Voraussichtlich", reachMonths]
      ]
    },
    {
      title: "Preisvorteil",
      note: `Standardpaket: ${formatNumber(calculatorConfig.pricing.completePackagePackCount)} Kartons mit ${formatNumber(calculatorConfig.pricing.unitsPerPack)} Flaschen`,
      rows: [
        ["Regulär", formatMoneyFromCents(calculation.totals.regularValueCents)],
        ["Paketpreis", formatMoneyFromCents(calculation.totals.packageCostCents)],
        ["Ihr Vorteil", formatMoneyFromCents(calculation.totals.savingsCents)]
      ]
    },
    {
      title: "Potential",
      rows: [
        ["Umsatz", formatMoneyFromCents(calculation.totals.annualRevenueCents)],
        ["Marge", formatMoneyFromCents(calculation.totals.annualMarginCents)]
      ]
    }
  ];

  elements.packageSummary.innerHTML = cards
    .map(
      (card) => `
        <section class="summary-card">
          <h3>${card.title}</h3>
          <dl>
            ${card.rows
              .map(
                ([label, value]) => `
                  <div>
                    <dt>${label}</dt>
                    <dd>${value}</dd>
                  </div>
                `
              )
              .join("")}
          </dl>
          ${card.note ? `<p class="summary-note">${card.note}</p>` : ""}
        </section>
      `
    )
    .join("");
}

function renderProducts(productRows) {
  elements.productGrid.innerHTML = productRows
    .map(
      (product) => {
        const detailText = [
          product.articleMasterNameGerman,
          product.packageContent,
          product.articleMasterSalesUnit
            ? `VE laut Artikelstamm: ${formatNumber(product.articleMasterSalesUnit)}`
            : "",
          product.shortBenefit
        ]
          .filter(Boolean)
          .join(" · ");

        return `
          <section class="product-card" data-article-number="${product.articleNumber}">
            <div class="product-image">
              <img src="${product.image}" alt="" data-placeholder-image />
              <span>Bild ergänzen</span>
            </div>

            <div class="product-body">
              <div class="product-title-row">
                <div>
                  <h3>${product.name}</h3>
                  <p>${product.description}</p>
                </div>
                <span class="article-number">${product.articleNumber}</span>
              </div>

              <p class="product-detail">${detailText}</p>
            </div>

            <div class="product-side">
              <span>Kartons</span>
              <div class="quantity-control">
                <button class="step-btn" type="button" data-product-step="${product.articleNumber}" data-step="-1" aria-label="Kartons für Artikel ${product.articleNumber} verringern">−</button>
                <label class="sr-only" for="packs-${product.articleNumber}">Kartons für Artikel ${product.articleNumber}</label>
                <input id="packs-${product.articleNumber}" type="number" min="0" step="1" inputmode="numeric" value="${product.packs}" data-product-input="${product.articleNumber}" />
                <button class="step-btn" type="button" data-product-step="${product.articleNumber}" data-step="1" aria-label="Kartons für Artikel ${product.articleNumber} erhöhen">+</button>
              </div>
              <strong>${formatNumber(product.units)} Stück</strong>
            </div>
          </section>
        `;
      }
    )
    .join("");
}

function renderRecommendedStatus(totalPacks) {
  const recommended = calculatorConfig.recommendedPackCount;

  if (recommended === null) {
    elements.recommendedStatus.textContent = "Empfohlene Paketgröße noch nicht konfiguriert";
    return;
  }

  const difference = recommended - totalPacks;
  const missingCartonText = difference === 1 ? "1 Karton" : `${formatNumber(difference)} Kartons`;
  const extraCartons = Math.abs(difference);
  const extraCartonText = extraCartons === 1 ? "1 zusätzliche Karton" : `${formatNumber(extraCartons)} zusätzliche Kartons`;

  if (difference > 0) {
    elements.recommendedStatus.className = "status-pill status-missing";
    elements.recommendedStatus.textContent = `Nur noch ${missingCartonText}, um Ihr vollständiges Paket abzuschließen.`;
  } else if (difference < 0) {
    elements.recommendedStatus.className = "status-pill status-extra";
    elements.recommendedStatus.textContent = `Sie haben ${extraCartonText} ausgewählt. Diese werden zu denselben Konditionen berechnet.`;
  } else {
    elements.recommendedStatus.className = "status-pill status-complete";
    elements.recommendedStatus.textContent = "Perfekt – Ihr vollständiges 12-Karton-Paket ist komplett.";
  }
}

function renderPotential(calculation) {
  elements.revenuePerService.value = state.revenuePerService;
  elements.annualRevenue.textContent = formatMoneyFromCents(calculation.totals.annualRevenueCents);
  elements.annualMargin.textContent = formatMoneyFromCents(calculation.totals.annualMarginCents);
  elements.potentialHint.textContent = `Jahresumsatz: Services pro Tag x ${formatMoneyFromCents(
    toCents(state.revenuePerService)
  )} x ${formatNumber(calculation.serviceVolume.servicesPerYear / calculation.serviceVolume.servicesPerDay)} Arbeitstage. Marge: Jahresumsatz minus aktueller Paketpreis. ${calculatorConfig.introText.priceBasis}`;
}

function renderCta(calculation) {
  elements.ctaButton.textContent = calculatorConfig.ctaButtonLabel;
  elements.submitButton.textContent = calculatorConfig.requestButtonLabel;

  const coveredServicesText =
    calculation.coveredServices === null
      ? "eine noch fachlich zu definierende Anzahl an Services"
      : `${formatNumber(calculation.coveredServices)} Services`;
  const revenueText =
    calculation.totals.packageRevenueCents === null
      ? "dem später hinterlegten Umsatzwert"
      : formatMoneyFromCents(calculation.totals.packageRevenueCents);

  if (calculation.totals.packageRevenueCents === null) {
    elements.ctaText.innerHTML = `Mit der gewählten Zusammenstellung können Sie voraussichtlich <strong>${coveredServicesText}</strong> abdecken. Das konkrete Umsatzpotenzial wird automatisch ergänzt, sobald Umsatz je Service fachlich hinterlegt ist.`;
    return;
  }

  elements.ctaText.innerHTML = `Mit der gewählten Zusammenstellung können Sie voraussichtlich <strong>${coveredServicesText}</strong> abdecken und dabei ein Umsatzpotenzial von <strong>${revenueText}</strong> erzielen.`;
}

function render() {
  const calculation = getCalculation();
  state.lastCalculation = calculation;

  renderPotential(calculation);
  renderServiceStats(calculation.serviceVolume);
  renderPackageSummary(calculation);
  renderProducts(calculation.products);
  renderRecommendedStatus(calculation.totalPacks);
  renderCta(calculation);
  bindRenderedImageFallbacks();
}

function bindRenderedImageFallbacks() {
  document.querySelectorAll("[data-placeholder-image]").forEach((image) => {
    image.addEventListener(
      "error",
      () => {
        image.hidden = true;
      },
      { once: true }
    );
  });
}

function setServicesPerDay(value) {
  state.servicesPerDay = Math.max(calculatorConfig.minServicesPerDay, Math.round(value));
  elements.servicesPerDay.value = state.servicesPerDay;
  render();
}

function setRevenuePerService(value) {
  state.revenuePerService = Math.round(Math.max(calculatorConfig.minRevenuePerService, value) * 100) / 100;
  render();
}

function setProductPacks(articleNumber, value) {
  state.packsByArticle[articleNumber] = Math.max(0, Math.round(value));
  render();
}

function buildRequestPayload(formData) {
  const calculation = state.lastCalculation || getCalculation();

  return {
    company: formData.get("company").trim(),
    contact: formData.get("contact").trim(),
    email: formData.get("email").trim(),
    phone: formData.get("phone").trim(),
    consultant: formData.get("consultant").trim(),
    message: formData.get("message").trim(),
    requestType: formData.get("requestType"),
    servicesPerDay: calculation.serviceVolume.servicesPerDay,
    revenuePerService: state.revenuePerService,
    servicesPerWeek: calculation.serviceVolume.servicesPerWeek,
    servicesPerMonth: calculation.serviceVolume.servicesPerMonth,
    servicesPerYear: calculation.serviceVolume.servicesPerYear,
    products: calculation.products.map((product) => ({
      articleNumber: product.articleNumber,
      name: product.name,
      packs: product.packs,
      units: product.units,
      packageCost: product.packageCostCents / 100
    })),
    totals: {
      regularValue: calculation.totals.regularValueCents / 100,
      packageCost: calculation.totals.packageCostCents / 100,
      savings: calculation.totals.savingsCents / 100,
      annualRevenue: calculation.totals.annualRevenueCents / 100,
      annualMargin: calculation.totals.annualMarginCents / 100,
      coveredServices: calculation.coveredServices,
      packageRevenue: calculation.totals.packageRevenueCents === null ? null : calculation.totals.packageRevenueCents / 100,
      packageMargin: calculation.totals.packageMarginCents === null ? null : calculation.totals.packageMarginCents / 100
    }
  };
}

function formatMoneyValue(value) {
  return moneyFormatter.format(value);
}

function buildRequestEmailSubject(payload) {
  const companyText = payload.company ? ` - ${payload.company}` : "";
  return `${calculatorConfig.requestEmail.subjectPrefix}${companyText}`;
}

function buildRequestEmailBody(payload) {
  const selectedProducts = payload.products
    .filter((product) => product.packs > 0)
    .map(
      (product) =>
        `- ${product.articleNumber} ${product.name}: ${formatNumber(product.packs)} Kartons / ${formatNumber(
          product.units
        )} Stück / ${formatMoneyValue(product.packageCost)}`
    )
    .join("\n");

  return [
    "Hallo,",
    "",
    "über den Innotec Additive-Rechner wurde folgende Anfrage vorbereitet:",
    "",
    "Kontaktdaten",
    `Firma: ${payload.company}`,
    `Ansprechpartner: ${payload.contact}`,
    `E-Mail: ${payload.email}`,
    `Telefon: ${payload.phone || "-"}`,
    `Zuständiger Verkaufsberater: ${payload.consultant || "-"}`,
    `Auswahl: ${payload.requestType === "order" ? "Konkrete Bestellung" : "Kontaktanfrage"}`,
    "",
    "Berechnung",
    `Services pro Tag: ${formatNumber(payload.servicesPerDay)}`,
    `Umsatz pro Service: ${formatMoneyValue(payload.revenuePerService)}`,
    `Services pro Jahr: ${formatNumber(payload.servicesPerYear)}`,
    `Jahresumsatz: ${formatMoneyValue(payload.totals.annualRevenue)}`,
    `Jahresmarge: ${formatMoneyValue(payload.totals.annualMargin)}`,
    `Abgedeckte Services mit Paket: ${formatNumber(payload.totals.coveredServices)}`,
    `Regulärer Warenwert: ${formatMoneyValue(payload.totals.regularValue)}`,
    `Paketpreis: ${formatMoneyValue(payload.totals.packageCost)}`,
    `Preisvorteil: ${formatMoneyValue(payload.totals.savings)}`,
    "",
    "Produktauswahl",
    selectedProducts || "- Keine Kartons ausgewählt",
    "",
    "Nachricht",
    payload.message || "-",
    "",
    "Viele Grüße"
  ].join("\n");
}

function openRequestEmail(payload) {
  const subject = encodeURIComponent(buildRequestEmailSubject(payload));
  const body = encodeURIComponent(buildRequestEmailBody(payload));
  const recipient = encodeURIComponent(calculatorConfig.requestEmail.recipient.trim());
  window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
}

function clearInvalidState(form) {
  form.querySelectorAll(".invalid").forEach((field) => field.classList.remove("invalid"));
}

function markInvalidFields(form) {
  form.querySelectorAll(":invalid").forEach((field) => field.classList.add("invalid"));
}

function handleSubmit(event) {
  event.preventDefault();
  const form = event.currentTarget;
  clearInvalidState(form);

  if (!form.checkValidity()) {
    markInvalidFields(form);
    elements.formMessage.textContent = "Bitte füllen Sie die Pflichtfelder korrekt aus.";
    elements.formMessage.className = "form-message error";
    return;
  }

  const payload = buildRequestPayload(new FormData(form));

  sendRequest(payload);
  elements.formMessage.textContent = "Der Mailentwurf wurde vorbereitet. Bitte prüfen und im Mailprogramm senden.";
  elements.formMessage.className = "form-message success";
}

function sendRequest(payload) {
  openRequestEmail(payload);
}

async function handleAuthSubmit(event) {
  event.preventDefault();
  elements.authMessage.textContent = "";
  elements.authMessage.className = "form-message";

  try {
    const passwordHash = await getSha256Hex(elements.betaPassword.value);
    if (passwordHash !== calculatorConfig.betaAccess.passwordHash) {
      elements.authMessage.textContent = "Das Passwort ist nicht korrekt.";
      elements.authMessage.className = "form-message error";
      elements.betaPassword.select();
      return;
    }

    sessionStorage.setItem(calculatorConfig.betaAccess.sessionStorageKey, "ok");
    elements.betaPassword.value = "";
    unlockBetaAccess();
  } catch (error) {
    elements.authMessage.textContent = "Der Beta-Zugang konnte in diesem Browser nicht geprüft werden.";
    elements.authMessage.className = "form-message error";
  }
}

function bindEvents() {
  elements.authForm?.addEventListener("submit", handleAuthSubmit);

  elements.servicesPerDay.addEventListener("input", (event) => {
    setServicesPerDay(getIntegerInputValue(event.currentTarget, calculatorConfig.minServicesPerDay));
  });

  elements.revenuePerService.addEventListener("input", (event) => {
    setRevenuePerService(getDecimalInputValue(event.currentTarget, calculatorConfig.minRevenuePerService));
  });

  document.addEventListener("click", (event) => {
    const serviceStepButton = event.target.closest("[data-step-target='servicesPerDay']");
    if (serviceStepButton) {
      const step = Number.parseInt(serviceStepButton.dataset.step, 10);
      setServicesPerDay(state.servicesPerDay + step);
      return;
    }

    const revenueStepButton = event.target.closest("[data-step-target='revenuePerService']");
    if (revenueStepButton) {
      const step = Number.parseFloat(revenueStepButton.dataset.step);
      setRevenuePerService(state.revenuePerService + step);
      return;
    }

    const productStepButton = event.target.closest("[data-product-step]");
    if (productStepButton) {
      const step = Number.parseInt(productStepButton.dataset.step, 10);
      const articleNumber = productStepButton.dataset.productStep;
      setProductPacks(articleNumber, (state.packsByArticle[articleNumber] || 0) + step);
    }
  });

  document.addEventListener("input", (event) => {
    if (!event.target.matches("[data-product-input]")) {
      return;
    }

    setProductPacks(event.target.dataset.productInput, getIntegerInputValue(event.target, 0));
  });

  elements.requestForm.addEventListener("submit", handleSubmit);
}

bindEvents();
initBetaAccess();
render();
