const calculatorConfig = {
  locale: "de-DE",
  currency: "EUR",
  minServicesPerDay: 1,
  defaultServicesPerDay: 1,
  minRevenuePerService: 0,
  workingDaysPerWeek: 5,
  workingWeeksPerYear: 50,
  revenuePerService: 21,
  unitsRequiredPerService: 1,
  recommendedPackCount: 10,
  pricing: {
    regularUnitPrice: 11.21,
    packageUnitPrice: 8.12,
    unitsPerPack: 24,
    bulkCartonThreshold: 10,
    completePackagePackCount: 10,
    completePackagePrice: 1948.8,
    completePackageRegularValue: 2690.4
  },
  ctaButtonLabel: "Zusammenstellung anfragen",
  requestButtonLabel: "Berechnung senden",
  requestEmail: {
    recipient: "",
    subjectPrefix: "Additive-Rechner Anfrage"
  },
  introText: {
    priceBasis:
      "Basis: 250 Arbeitstage pro Jahr. Pro Service wird eine Flasche gerechnet. Eine Flasche kostet regulär 11,21 €. Ab 10 Kartons beziehungsweise 240 Flaschen wird mit 8,12 € je Flasche gerechnet."
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
      websiteUrl: "https://www.innotec.at/1201",
      unitsPerPack: null,
      regularUnitPrice: null,
      packageUnitPrice: null,
      defaultPacks: 2
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
      websiteUrl: "https://www.innotec.at/1202",
      unitsPerPack: null,
      regularUnitPrice: null,
      packageUnitPrice: null,
      defaultPacks: 2
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
      websiteUrl: "https://www.innotec.at/1203",
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
      websiteUrl: "https://www.innotec.at/1204",
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
      websiteUrl: "https://www.innotec.at/1199",
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
  servicesPerDay: document.querySelector("#servicesPerDay"),
  revenuePerService: document.querySelector("#revenuePerService"),
  serviceStats: document.querySelector("#serviceStats"),
  productTotals: document.querySelector("#productTotals"),
  productGrid: document.querySelector("#productGrid"),
  recommendedStatus: document.querySelector("#recommendedStatus"),
  ctaText: document.querySelector("#ctaText"),
  ctaButton: document.querySelector("#ctaButton"),
  pdfButton: document.querySelector("#pdfButton"),
  formSection: document.querySelector("#formSection"),
  submitButton: document.querySelector("#submitButton"),
  requestForm: document.querySelector("#requestForm"),
  formMessage: document.querySelector("#formMessage")
};

const moneyFormatter = new Intl.NumberFormat(calculatorConfig.locale, {
  style: "currency",
  currency: calculatorConfig.currency,
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
});

const numberFormatter = new Intl.NumberFormat(calculatorConfig.locale, {
  maximumFractionDigits: 0
});

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

function getSelectedUnitTotalForPricing() {
  return calculatorConfig.products.reduce((sum, product) => {
    const packs = state.packsByArticle[product.articleNumber] || 0;
    const unitsPerPack = product.unitsPerPack ?? calculatorConfig.pricing.unitsPerPack;
    return sum + packs * unitsPerPack;
  }, 0);
}

function getProductRows(totalUnitsForPricing) {
  const bulkUnitThreshold =
    calculatorConfig.pricing.bulkCartonThreshold * calculatorConfig.pricing.unitsPerPack;
  const isBulkPriceActive = totalUnitsForPricing >= bulkUnitThreshold;

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
  const totalUnitsForPricing = getSelectedUnitTotalForPricing();
  const products = getProductRows(totalUnitsForPricing);
  const totalUnits = products.reduce((sum, product) => sum + product.units, 0);
  const regularValueCents = products.reduce((sum, product) => sum + product.regularValueCents, 0);
  const packageCostCents = products.reduce((sum, product) => sum + product.packageCostCents, 0);
  const savingsCents = regularValueCents - packageCostCents;
  const coveredServices = getCoveredServices(totalUnits);
  const reachMonths =
    coveredServices === null || serviceVolume.servicesPerMonth === 0
      ? null
      : coveredServices / serviceVolume.servicesPerMonth;
  const revenueGeneratingServices =
    coveredServices === null
      ? serviceVolume.servicesPerYear
      : Math.min(coveredServices, serviceVolume.servicesPerYear);
  const annualRevenueCents = revenueGeneratingServices * toCents(state.revenuePerService);
  const annualMarginCents = annualRevenueCents - packageCostCents;
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
      configuredCompletePackagePriceCents,
      configuredCompletePackageRegularValueCents
    }
  };
}

function renderServiceStats(serviceVolume) {
  const stats = [
    ["Pro Woche", serviceVolume.servicesPerWeek],
    ["Pro Monat", serviceVolume.servicesPerMonth],
    ["Pro Jahr", serviceVolume.servicesPerYear]
  ];

  elements.serviceStats.innerHTML = stats
    .map(
      ([label, value]) => `
        <div class="mini-stat">
          <span>${label}</span>
          <strong>${formatNumber(value)}</strong>
        </div>
      `
    )
    .join("");
}

function renderProducts(productRows) {
  elements.productGrid.innerHTML = productRows
    .map(
      (product) => {
        const productTitle = product.websiteUrl
          ? `<a class="product-link" href="${product.websiteUrl}" target="_blank" rel="noopener noreferrer">${product.name}</a>`
          : product.name;
        const detailText = [
          product.articleMasterNameGerman,
          product.packageContent,
          `ArtNr.: ${product.articleNumber}`,
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
                  <h3>${productTitle}</h3>
                  <p>${product.description}</p>
                </div>
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

function renderProductTotals(calculation) {
  const savingsPercent =
    calculation.totals.regularValueCents === 0
      ? 0
      : (calculation.totals.savingsCents / calculation.totals.regularValueCents) * 100;
  const savingsPercentText = new Intl.NumberFormat(calculatorConfig.locale, {
    maximumFractionDigits: 0
  }).format(Math.trunc(savingsPercent));

  elements.productTotals.innerHTML = `
    <div class="sum-item sum-units">
      <span>Stück gesamt</span>
      <strong>${formatNumber(calculation.totalUnits)}</strong>
    </div>
    <div class="sum-saving">
      <span>Paketpreis</span>
      <strong>${formatMoneyFromCents(calculation.totals.packageCostCents)}</strong>
      <del>statt ${formatMoneyFromCents(calculation.totals.regularValueCents)}</del>
      <em>Du sparst ${formatMoneyFromCents(calculation.totals.savingsCents)} / ${savingsPercentText} %</em>
    </div>
    <div class="sum-item sum-focus">
      <span>Dein Umsatzpotential</span>
      <strong>${formatMoneyFromCents(calculation.totals.annualRevenueCents)}</strong>
    </div>
    <div class="sum-item sum-focus">
      <span>Dein Profit</span>
      <strong>${formatMoneyFromCents(calculation.totals.annualMarginCents)}</strong>
    </div>
  `;
}

function renderRecommendedStatus(totalPacks) {
  const recommended = calculatorConfig.recommendedPackCount;

  if (recommended === null) {
    elements.recommendedStatus.textContent = "Paketgröße offen";
    return;
  }

  const difference = recommended - totalPacks;

  if (totalPacks === 0) {
    elements.recommendedStatus.className = "status-pill status-neutral";
    elements.recommendedStatus.textContent = "Wähle deine Kartons aus";
  } else if (difference > 0) {
    elements.recommendedStatus.className = "status-pill status-missing";
    elements.recommendedStatus.textContent =
      difference === 1
        ? "Noch 1 Karton bis zum Paketpreis"
        : `Noch ${formatNumber(difference)} Kartons bis zum Paketpreis`;
  } else if (difference < 0) {
    elements.recommendedStatus.className = "status-pill status-extra";
    const extraCartons = Math.abs(difference);
    elements.recommendedStatus.textContent =
      extraCartons === 1
        ? "+1 Karton über der Paketgrenze"
        : `+${formatNumber(extraCartons)} Kartons über der Paketgrenze`;
  } else {
    elements.recommendedStatus.className = "status-pill status-complete";
    elements.recommendedStatus.textContent = "Paketpreis ab 10 Kartons erreicht";
  }
}

function renderResult(calculation) {
  elements.revenuePerService.value = state.revenuePerService;
}

function renderCta(calculation) {
  elements.ctaButton.textContent = calculatorConfig.ctaButtonLabel;
  elements.submitButton.textContent = calculatorConfig.requestButtonLabel;

  elements.ctaText.innerHTML = "";
}

function render() {
  const calculation = getCalculation();
  state.lastCalculation = calculation;

  renderResult(calculation);
  renderServiceStats(calculation.serviceVolume);
  renderProducts(calculation.products);
  renderProductTotals(calculation);
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
      requiredServices: calculation.serviceVolume.servicesPerYear
    }
  };
}

function formatMoneyValue(value) {
  return moneyFormatter.format(Number(value));
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
    `Auswahl: ${payload.requestType === "order" ? "Konkrete Bestellung" : "Kontaktanfrage"}`,
    "",
    "Berechnung",
    `Services pro Tag: ${formatNumber(payload.servicesPerDay)}`,
    `Umsatz pro Service: ${formatMoneyValue(payload.revenuePerService)}`,
    `Services pro Jahr: ${formatNumber(payload.servicesPerYear)}`,
    `Abgedeckte Services mit Paket: ${formatNumber(payload.totals.coveredServices)}`,
    `Benötigte Services pro Jahr: ${formatNumber(payload.totals.requiredServices)}`,
    `Dein Umsatzpotential: ${formatMoneyValue(payload.totals.annualRevenue)}`,
    `Dein Profit: ${formatMoneyValue(payload.totals.annualMargin)}`,
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
    elements.formMessage.textContent = "Bitte fülle die Pflichtfelder korrekt aus.";
    elements.formMessage.className = "form-message error";
    return;
  }

  const payload = buildRequestPayload(new FormData(form));

  sendRequest(payload);
  elements.formMessage.textContent = "Der Mailentwurf wurde vorbereitet. Bitte prüfe ihn und sende ihn im Mailprogramm.";
  elements.formMessage.className = "form-message success";
}

function sendRequest(payload) {
  openRequestEmail(payload);
}

function toggleRequestForm() {
  const isOpening = elements.formSection.classList.contains("is-collapsed");
  elements.formSection.classList.toggle("is-collapsed", !isOpening);
  elements.ctaButton.setAttribute("aria-expanded", String(isOpening));

  if (isOpening) {
    elements.formSection.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function exportPdf() {
  window.print();
}

function bindEvents() {
  elements.ctaButton?.setAttribute("aria-controls", "formSection");
  elements.ctaButton?.setAttribute("aria-expanded", "false");
  elements.ctaButton?.addEventListener("click", toggleRequestForm);
  elements.pdfButton?.addEventListener("click", exportPdf);

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
render();

