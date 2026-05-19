const toastRegion = document.querySelector("[data-toast-region]");
const filterButtons = document.querySelectorAll("[data-filter]");
const transactions = document.querySelectorAll("[data-wallet]");
const virtualCardToggle = document.querySelector("[data-virtual-card-toggle]");
const cardOverlay = document.querySelector("[data-card-overlay]");
const overlayCloseButtons = document.querySelectorAll("[data-card-overlay-close]");
const walletButtons = document.querySelectorAll("[data-wallet-card]");
const toastButtons = document.querySelectorAll("[data-toast]");
const pluspayToggle = document.querySelector("[data-pluspay-toggle]");
const pluspayLabel = document.querySelector("[data-pluspay-label]");
const swapTextNodes = document.querySelectorAll("[data-lens-text][data-pluspay-text]");
const lensFilterButton = document.querySelector('[data-filter="all"]');
const walletOverlay = document.querySelector("[data-wallet-overlay]");
const walletOverlayName = document.querySelector("[data-wallet-overlay-name]");
const walletOverlayBalance = document.querySelector("[data-wallet-overlay-balance]");
const walletOverlayDescription = document.querySelector("[data-wallet-overlay-description]");
const walletOverlayPills = document.querySelector("[data-wallet-overlay-pills]");
const walletOverlayActions = document.querySelector("[data-wallet-overlay-actions]");
const walletOverlaySummary = document.querySelector("[data-wallet-overlay-tone]");
const walletOverlayIcon = document.querySelector("[data-wallet-overlay-icon]");
const walletOverlayEligibility = document.querySelector("[data-wallet-overlay-eligibility]");
const walletOverlayRoute = document.querySelector("[data-wallet-overlay-route]");
const walletOverlayCloseButtons = document.querySelectorAll("[data-wallet-overlay-close]");

let toastTimer;

const walletActionCatalog = {
  tap: {
    label: "Tap & Pay",
    detail: "Contactless checkout with card or phone.",
    icon: '<svg aria-hidden="true"><use href="#icon-nfc" /></svg>',
    toast: "Tap & Pay launched",
  },
  scan: {
    label: "Scan & Pay",
    detail: "Scan a merchant QR from this wallet.",
    icon: '<i class="ri-qr-scan-2-line" aria-hidden="true"></i>',
    toast: "Scan & Pay launched",
  },
  card: {
    label: "Card Access",
    detail: "Use for gifting and card-led redemption.",
    icon: '<svg aria-hidden="true"><use href="#icon-card" /></svg>',
    toast: "Card access opened",
  },
};

function showToast(message) {
  if (!toastRegion) return;
  window.clearTimeout(toastTimer);
  toastRegion.textContent = message;
  toastRegion.classList.add("is-visible");
  toastTimer = window.setTimeout(() => {
    toastRegion.classList.remove("is-visible");
  }, 2200);
}

function createOverlayPill(actionKey) {
  const action = walletActionCatalog[actionKey];
  if (!action) return null;
  const pill = document.createElement("span");
  pill.className = "wallet-rail-pill is-active";
  pill.innerHTML = `${action.icon}${action.label}`;
  return pill;
}

function createOverlayAction(actionKey) {
  const action = walletActionCatalog[actionKey];
  if (!action) return null;
  const button = document.createElement("button");
  button.type = "button";
  button.className = "wallet-overlay-action";
  button.innerHTML = `
    <span class="wallet-overlay-action-icon" aria-hidden="true">${action.icon}</span>
    <span class="wallet-overlay-action-copy">
      <strong>${action.label}</strong>
      <span>${action.detail}</span>
    </span>
    <span class="wallet-overlay-action-arrow" aria-hidden="true"><svg><use href="#icon-arrow-right" /></svg></span>
  `;
  button.addEventListener("click", () => showToast(action.toast));
  return button;
}

toastButtons.forEach((button) => {
  button.addEventListener("click", () => {
    showToast(button.dataset.toast);
  });
});

function applyMode(isPluspay) {
  document.body.classList.toggle("is-pluspay", isPluspay);
  pluspayToggle?.setAttribute("aria-pressed", String(isPluspay));

  if (pluspayLabel) {
    pluspayLabel.textContent = isPluspay ? "Lens" : "Pluspay";
  }

  swapTextNodes.forEach((node) => {
    node.textContent = isPluspay ? node.dataset.pluspayText : node.dataset.lensText;
  });

  if (isPluspay) {
    closeCardOverlay();
    closeWalletOverlay();
    filterButtons.forEach((chip) => {
      chip.classList.remove("active");
      chip.setAttribute("aria-selected", "false");
    });
    lensFilterButton?.classList.add("active");
    lensFilterButton?.setAttribute("aria-selected", "true");
    transactions.forEach((transaction) => {
      transaction.classList.remove("is-hidden");
    });
  }
}

pluspayToggle?.addEventListener("click", () => {
  const nextState = pluspayToggle.getAttribute("aria-pressed") !== "true";
  applyMode(nextState);
  showToast(nextState ? "Switched to Pluspay" : "Switched to Lens");
});

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedWallet = button.dataset.filter;
    filterButtons.forEach((chip) => {
      chip.classList.remove("active");
      chip.setAttribute("aria-selected", "false");
    });
    button.classList.add("active");
    button.setAttribute("aria-selected", "true");

    transactions.forEach((transaction) => {
      const shouldShow = selectedWallet === "all" || transaction.dataset.wallet === selectedWallet;
      transaction.classList.toggle("is-hidden", !shouldShow);
    });
  });
});

function closeCardOverlay() {
  if (!cardOverlay || !virtualCardToggle) return;
  virtualCardToggle.setAttribute("aria-expanded", "false");
  cardOverlay.classList.remove("is-open");
  window.setTimeout(() => {
    cardOverlay.hidden = true;
  }, 320);
}

function closeWalletOverlay() {
  if (!walletOverlay) return;
  walletOverlay.classList.remove("is-open");
  window.setTimeout(() => {
    walletOverlay.hidden = true;
  }, 280);
}

function openWalletOverlay(button) {
  if (!walletOverlay || !walletOverlayActions || !walletOverlayPills || !walletOverlaySummary) return;

  const walletName = button.dataset.walletName || "Wallet";
  const walletBalance = button.dataset.walletBalance || "";
  const walletDescription = button.dataset.walletDetail || "";
  const actionKeys = (button.dataset.walletActions || "")
    .split(",")
    .map((value) => value.trim())
    .filter(Boolean);
  const walletTone = button.classList.contains("fuel")
    ? "fuel"
    : button.classList.contains("misc")
      ? "misc"
      : button.classList.contains("gift")
        ? "gift"
        : "meal";
  const routeMap = {
    meal: "RuPay",
    fuel: "Tap + QR",
    misc: "PPI on UPI",
    gift: "Card linked",
  };
  const eligibilityMap = {
    meal: "Food merchants",
    fuel: "Fuel + QR merchants",
    misc: "UPI QR enabled",
    gift: "Gift partners",
  };

  walletButtons.forEach((wallet) => {
    const isTarget = wallet === button;
    wallet.classList.toggle("is-active", isTarget);
    wallet.setAttribute("aria-pressed", String(isTarget));
  });

  if (walletOverlayName) walletOverlayName.textContent = walletName;
  if (walletOverlayBalance) walletOverlayBalance.textContent = walletBalance;
  if (walletOverlayDescription) walletOverlayDescription.textContent = walletDescription;
  if (walletOverlayEligibility) walletOverlayEligibility.textContent = eligibilityMap[walletTone] || "Merchant enabled";
  if (walletOverlayRoute) walletOverlayRoute.textContent = routeMap[walletTone] || "Wallet route";

  walletOverlaySummary.classList.remove("meal", "fuel", "misc", "gift");
  walletOverlaySummary.classList.add(walletTone);

  if (walletOverlayIcon) {
    walletOverlayIcon.classList.remove("meal-icon", "fuel-icon", "misc-icon", "gift-icon");
    walletOverlayIcon.classList.add(`${walletTone}-icon`);
    const sourceIcon = button.querySelector(".wallet-icon");
    if (sourceIcon) {
      walletOverlayIcon.innerHTML = sourceIcon.innerHTML;
    }
  }

  walletOverlayPills.replaceChildren();
  actionKeys.forEach((actionKey) => {
    const pill = createOverlayPill(actionKey);
    if (pill) walletOverlayPills.append(pill);
  });

  walletOverlayActions.replaceChildren();
  actionKeys.forEach((actionKey) => {
    const action = createOverlayAction(actionKey);
    if (action) walletOverlayActions.append(action);
  });

  walletOverlay.hidden = false;
  window.requestAnimationFrame(() => {
    walletOverlay.classList.add("is-open");
  });
  showToast(button.dataset.walletCta || `${walletName} opened`);
}

virtualCardToggle?.addEventListener("click", () => {
  if (document.body.classList.contains("is-pluspay")) return;
  if (!cardOverlay) return;
  virtualCardToggle.setAttribute("aria-expanded", "true");
  cardOverlay.hidden = false;
  window.requestAnimationFrame(() => {
    cardOverlay.classList.add("is-open");
  });
  showToast("Virtual card details revealed");
});

overlayCloseButtons.forEach((button) => {
  button.addEventListener("click", closeCardOverlay);
});

walletButtons.forEach((button) => {
  button.addEventListener("click", () => {
    openWalletOverlay(button);
  });
});

walletOverlayCloseButtons.forEach((button) => {
  button.addEventListener("click", closeWalletOverlay);
});

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeCardOverlay();
    closeWalletOverlay();
  }
});

applyMode(false);
