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
const walletOverlayPills = document.querySelector("[data-wallet-overlay-pills]");
const walletOverlayLimitValue = document.querySelector("[data-wallet-overlay-limit-value]");
const walletOverlayLimitFill = document.querySelector("[data-wallet-overlay-limit-fill]");
const walletOverlaySummary = document.querySelector("[data-wallet-overlay-tone]");
const walletOverlayIcon = document.querySelector("[data-wallet-overlay-icon]");
const walletOverlayModeSwitch = document.querySelector("[data-wallet-overlay-mode-switch]");
const walletOverlayPrimaryAction = document.querySelector("[data-wallet-overlay-primary-action]");
const walletOverlayDirectoryCopy = document.querySelector("[data-wallet-overlay-directory-copy]");
const walletOverlaySelectCopy = document.querySelector("[data-wallet-overlay-select-copy]");
const walletOverlayHistory = document.querySelector("[data-wallet-overlay-history]");
const walletOverlayScroll = document.querySelector("[data-wallet-overlay-scroll]");
const walletOverlayViewAllHistory = document.querySelector("[data-wallet-overlay-view-all-history]");
const walletOverlayCloseButtons = document.querySelectorAll("[data-wallet-overlay-close]");
const walletDirectoryOpenButtons = document.querySelectorAll("[data-wallet-directory-open]");
const merchantDirectoryOverlay = document.querySelector("[data-merchant-directory-overlay]");
const merchantDirectoryTitle = document.querySelector("[data-merchant-directory-title]");
const merchantDirectoryCount = document.querySelector("[data-merchant-directory-count]");
const merchantDirectorySummaryCopy = document.querySelector("[data-merchant-directory-summary-copy]");
const merchantDirectorySearchCopy = document.querySelector("[data-merchant-directory-search-copy]");
const merchantDirectoryChips = document.querySelector("[data-merchant-directory-chips]");
const merchantDirectoryList = document.querySelector("[data-merchant-directory-list]");
const merchantDirectoryCloseButtons = document.querySelectorAll("[data-merchant-directory-close]");
const merchantDirectoryScroll = document.querySelector("[data-merchant-directory-scroll]");
const manageCardsOpenButtons = document.querySelectorAll("[data-manage-cards-open]");
const manageCardsOverlay = document.querySelector("[data-manage-cards-overlay]");
const manageCardsCloseButtons = document.querySelectorAll("[data-manage-cards-close]");
const manageCardsPanel = document.querySelector(".manage-cards-panel");

let toastTimer;
let activeWalletTone = "meal";

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
    icon: '<svg aria-hidden="true"><use href="#icon-qr-code" /></svg>',
    toast: "Scan & Pay launched",
  },
  card: {
    label: "Card Access",
    detail: "Use for gifting and card-led redemption.",
    icon: '<svg aria-hidden="true"><use href="#icon-card" /></svg>',
    toast: "Card access opened",
  },
};

const walletOverlayContent = {
  meal: {
    directoryCopy: "250+ merchants",
    selectCopy: "Request a new food outlet",
    searchCopy: "Search food merchants near you",
    summaryCopy: "Cafes, grocers, and dining partners that accept Meal Wallet",
    viewAllToast: "Meal Wallet statement opened",
    monthlyLimit: "₹40,000",
    limitProgress: 16,
    categories: ["Nearby", "Cafe", "Groceries", "Dining"],
    merchants: [
      { name: "WeWork counter", subtitle: "Cafe · 0.3 km", meta: "Open now", reward: "Meal", icon: "icon-food" },
      { name: "Star Bazaar", subtitle: "Groceries · 1.1 km", meta: "Open now", reward: "Meal", icon: "icon-bag" },
      { name: "Subway", subtitle: "Dining · 0.8 km", meta: "Closes 10 PM", reward: "Meal", icon: "icon-food" },
      { name: "FreshMenu", subtitle: "Dining · 1.2 km", meta: "Open now", reward: "Meal", icon: "icon-food" },
      { name: "Nature's Basket", subtitle: "Groceries · 2.0 km", meta: "Closes 11 PM", reward: "Meal", icon: "icon-bag" },
      { name: "Cafe Coffee Day", subtitle: "Cafe · 0.9 km", meta: "Open now", reward: "Meal", icon: "icon-food" },
    ],
    history: [
      { merchant: "WeWork counter", reference: "Ref ID: 1277834681", date: "15 Mar 2026", amount: "- ₹1,000", icon: "icon-food" },
      { merchant: "Star Bazaar", reference: "Ref ID: 1277834604", date: "12 Mar 2026", amount: "- ₹2,000", icon: "icon-bag" },
    ],
  },
  fuel: {
    directoryCopy: "140+ fuel stations",
    selectCopy: "Suggest a fuel partner",
    searchCopy: "Search fuel stations and QR merchants",
    summaryCopy: "Fuel, mobility, and QR merchants available for this wallet",
    viewAllToast: "Fuel Wallet statement opened",
    monthlyLimit: "₹12,000",
    limitProgress: 26,
    categories: ["Nearby", "Fuel", "Service", "QR Pay"],
    merchants: [
      { name: "Shell Select", subtitle: "Fuel station · 0.6 km", meta: "Tap + QR", reward: "Fuel", icon: "icon-fuel" },
      { name: "HP Petrol Pump", subtitle: "Fuel station · 1.4 km", meta: "Tap + QR", reward: "Fuel", icon: "icon-fuel" },
      { name: "Park+ Fastag Hub", subtitle: "Mobility · 2.1 km", meta: "QR only", reward: "Fuel", icon: "icon-car" },
      { name: "IndianOil COCO", subtitle: "Fuel station · 2.5 km", meta: "Tap only", reward: "Fuel", icon: "icon-fuel" },
      { name: "Bharat Petroleum", subtitle: "Fuel station · 3.0 km", meta: "Tap + QR", reward: "Fuel", icon: "icon-fuel" },
      { name: "DriveU Mobility", subtitle: "Mobility · Online", meta: "QR only", reward: "Fuel", icon: "icon-car" },
    ],
    history: [
      { merchant: "Shell Select", reference: "Ref ID: 2277834607", date: "16 Mar 2026", amount: "- ₹2,200", icon: "icon-car" },
      { merchant: "HP Petrol Pump", reference: "Ref ID: 2277834588", date: "11 Mar 2026", amount: "- ₹1,450", icon: "icon-car" },
    ],
  },
  misc: {
    directoryCopy: "UPI QR merchants",
    selectCopy: "Suggest reimbursement merchant",
    searchCopy: "Search reimbursement-friendly merchants",
    summaryCopy: "UPI QR merchants eligible for reimbursement-led spends",
    viewAllToast: "Reimbursement Wallet statement opened",
    monthlyLimit: "₹15,000",
    limitProgress: 61,
    categories: ["Nearby", "Pharmacy", "Travel", "Services"],
    merchants: [
      { name: "Apollo Pharmacy", subtitle: "Pharmacy · 0.4 km", meta: "UPI QR", reward: "Reimbursement", icon: "icon-receipt" },
      { name: "Urban Company", subtitle: "Services · Online", meta: "UPI QR", reward: "Reimbursement", icon: "icon-settings" },
      { name: "Cleartrip Counter", subtitle: "Travel · 1.7 km", meta: "UPI QR", reward: "Reimbursement", icon: "icon-send" },
      { name: "Tata 1mg", subtitle: "Pharmacy · Online", meta: "UPI QR", reward: "Reimbursement", icon: "icon-receipt" },
      { name: "MakeMyTrip Desk", subtitle: "Travel · 2.8 km", meta: "UPI QR", reward: "Reimbursement", icon: "icon-send" },
      { name: "Cult Fit Center", subtitle: "Wellness · 1.9 km", meta: "UPI QR", reward: "Reimbursement", icon: "icon-settings" },
    ],
    history: [
      { merchant: "Apollo Pharmacy", reference: "Ref ID: 3277834582", date: "14 Mar 2026", amount: "- ₹850", icon: "icon-money" },
      { merchant: "Urban Company", reference: "Ref ID: 3277834539", date: "10 Mar 2026", amount: "- ₹1,600", icon: "icon-money" },
    ],
  },
  gift: {
    directoryCopy: "Gift redemption brands",
    selectCopy: "Suggest gift partner",
    searchCopy: "Search gift redemption partners",
    summaryCopy: "Brand partners and redemption destinations for Gift Wallet",
    viewAllToast: "Gift Wallet statement opened",
    monthlyLimit: "₹10,000",
    limitProgress: 62,
    categories: ["Nearby", "Fashion", "Lifestyle", "Gift Cards"],
    merchants: [
      { name: "Amazon Pay", subtitle: "Gift cards · Online", meta: "Redeem now", reward: "Gift", icon: "icon-gift" },
      { name: "Lifestyle Store", subtitle: "Fashion · 2.4 km", meta: "Redeem now", reward: "Gift", icon: "icon-bag" },
      { name: "Shoppers Stop", subtitle: "Lifestyle · 1.9 km", meta: "Redeem now", reward: "Gift", icon: "icon-grid" },
      { name: "Myntra", subtitle: "Fashion · Online", meta: "Redeem now", reward: "Gift", icon: "icon-bag" },
      { name: "BookMyShow", subtitle: "Entertainment · Online", meta: "Redeem now", reward: "Gift", icon: "icon-gift" },
      { name: "Croma", subtitle: "Electronics · 3.1 km", meta: "Redeem now", reward: "Gift", icon: "icon-grid" },
    ],
    history: [
      { merchant: "Amazon Pay", reference: "Ref ID: 4277834561", date: "13 Mar 2026", amount: "- ₹1,500", icon: "icon-bag" },
      { merchant: "Lifestyle Store", reference: "Ref ID: 4277834518", date: "08 Mar 2026", amount: "- ₹2,400", icon: "icon-card" },
    ],
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

function renderPrimaryAction(action) {
  if (!walletOverlayPrimaryAction || !action) return;
  const idleLetters = Array.from(action.label)
    .map((char) => `<span class="wallet-cta-letter">${char === " " ? "&nbsp;" : char}</span>`)
    .join("");
  walletOverlayPrimaryAction.dataset.toast = action.toast;
  walletOverlayPrimaryAction.innerHTML = `
    <span class="wallet-overlay-cta-icon" aria-hidden="true">${action.icon}</span>
    <span class="wallet-overlay-cta-copy">
      <strong class="wallet-cta-text" aria-label="${action.label}">
        <span class="wallet-cta-text-layer is-idle">${idleLetters}</span>
      </strong>
      <span>${action.detail}</span>
    </span>
    <span class="wallet-overlay-cta-arrow" aria-hidden="true"><svg><use href="#icon-arrow-right" /></svg></span>
  `;
  walletOverlayPrimaryAction.onclick = () => showToast(action.toast);
}

function renderModeSwitch(actionKeys, selectedKey) {
  if (!walletOverlayModeSwitch) return;
  if (actionKeys.length < 2) {
    walletOverlayModeSwitch.hidden = true;
    walletOverlayModeSwitch.replaceChildren();
    return;
  }

  walletOverlayModeSwitch.hidden = false;
  walletOverlayModeSwitch.replaceChildren();

  actionKeys.forEach((actionKey) => {
    const action = walletActionCatalog[actionKey];
    if (!action) return;
    const button = document.createElement("button");
    button.type = "button";
    button.className = `wallet-overlay-mode-button${actionKey === selectedKey ? " is-active" : ""}`;
    button.innerHTML = `${action.icon}<span>${action.label}</span>`;
    button.addEventListener("click", () => {
      renderModeSwitch(actionKeys, actionKey);
      renderPrimaryAction(action);
    });
    walletOverlayModeSwitch.append(button);
  });
}

function createHistoryItem(item) {
  const article = document.createElement("article");
  article.className = `transaction-item${item.positive ? " positive" : ""}`;
  article.innerHTML = `
    <span class="transaction-icon" aria-hidden="true"><svg><use href="#${item.icon || "icon-arrow-right"}" /></svg></span>
    <span class="transaction-meta">
      <strong>${item.merchant}</strong>
      <span>${item.reference}</span>
    </span>
    <span class="transaction-amount${item.positive ? " positive" : ""}">
      <strong>${item.amount}</strong>
      <span>${item.date}</span>
    </span>
  `;
  return article;
}

function createMerchantChip(label, isActive) {
  const chip = document.createElement("button");
  chip.type = "button";
  chip.className = `merchant-directory-chip${isActive ? " is-active" : ""}`;
  chip.textContent = label;
  chip.addEventListener("click", () => showToast(`${label} filter applied`));
  return chip;
}

function createMerchantItem(item) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "merchant-directory-item";
  button.innerHTML = `
    <span class="merchant-directory-item-icon" aria-hidden="true"><svg><use href="#${item.icon}" /></svg></span>
    <span class="merchant-directory-item-copy">
      <strong>${item.name}</strong>
      <span>${item.subtitle}</span>
    </span>
    <span class="merchant-directory-item-meta">
      <strong>${item.reward}</strong>
      <span>${item.meta}</span>
    </span>
  `;
  button.addEventListener("click", () => showToast(`${item.name} selected`));
  return button;
}

toastButtons.forEach((button) => {
  button.addEventListener("click", () => {
    showToast(button.dataset.toast);
  });
});

walletOverlayViewAllHistory?.addEventListener("click", (event) => {
  event.preventDefault();
  if (walletOverlayViewAllHistory.dataset.toast) showToast(walletOverlayViewAllHistory.dataset.toast);
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

function closeMerchantDirectory() {
  if (!merchantDirectoryOverlay) return;
  merchantDirectoryOverlay.classList.remove("is-open");
  document.body.classList.remove("is-merchant-directory-open");
  window.setTimeout(() => {
    merchantDirectoryOverlay.hidden = true;
  }, 280);
}

function closeManageCardsOverlay() {
  if (!manageCardsOverlay) return;
  manageCardsOverlay.classList.remove("is-open");
  window.setTimeout(() => {
    manageCardsOverlay.hidden = true;
  }, 280);
}

function openMerchantDirectory() {
  if (!merchantDirectoryOverlay || !merchantDirectoryList || !merchantDirectoryChips) return;
  const content = walletOverlayContent[activeWalletTone] || walletOverlayContent.meal;
  const activeWalletButton = Array.from(walletButtons).find((button) => button.classList.contains(activeWalletTone));
  const walletName = activeWalletButton?.dataset.walletName || "Wallet";

  if (merchantDirectoryTitle) merchantDirectoryTitle.textContent = walletName;
  if (merchantDirectoryCount) merchantDirectoryCount.textContent = content.directoryCopy;
  if (merchantDirectorySummaryCopy) merchantDirectorySummaryCopy.textContent = content.summaryCopy;
  if (merchantDirectorySearchCopy) merchantDirectorySearchCopy.textContent = content.searchCopy;

  merchantDirectoryChips.replaceChildren();
  content.categories.forEach((label, index) => {
    merchantDirectoryChips.append(createMerchantChip(label, index === 0));
  });

  merchantDirectoryList.replaceChildren();
  content.merchants.forEach((item) => {
    merchantDirectoryList.append(createMerchantItem(item));
  });

  merchantDirectoryOverlay.hidden = false;
  document.body.classList.add("is-merchant-directory-open");
  window.requestAnimationFrame(() => {
    if (merchantDirectoryScroll) merchantDirectoryScroll.scrollTop = 0;
    merchantDirectoryOverlay.classList.add("is-open");
  });
}

function openManageCardsOverlay() {
  if (!manageCardsOverlay) return;
  manageCardsOverlay.hidden = false;
  window.requestAnimationFrame(() => {
    if (manageCardsPanel) manageCardsPanel.scrollTop = 0;
    manageCardsOverlay.classList.add("is-open");
  });
  showToast("Manage Cards opened");
}

function openWalletOverlay(button) {
  if (!walletOverlay || !walletOverlayPills || !walletOverlaySummary) return;

  const walletName = button.dataset.walletName || "Wallet";
  const walletBalance = button.dataset.walletBalance || "";
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
  const overlayContent = walletOverlayContent[walletTone] || walletOverlayContent.meal;
  const primaryActionKey = actionKeys.includes("tap") ? "tap" : actionKeys[0];
  const primaryAction = primaryActionKey ? walletActionCatalog[primaryActionKey] : null;

  walletButtons.forEach((wallet) => {
    const isTarget = wallet === button;
    wallet.classList.toggle("is-active", isTarget);
    wallet.setAttribute("aria-pressed", String(isTarget));
  });
  activeWalletTone = walletTone;

  if (walletOverlayName) walletOverlayName.textContent = walletName;
  if (walletOverlayBalance) walletOverlayBalance.textContent = walletBalance;
  if (walletOverlayLimitValue) walletOverlayLimitValue.textContent = overlayContent.monthlyLimit;
  if (walletOverlayLimitFill) walletOverlayLimitFill.style.width = `${overlayContent.limitProgress}%`;
  if (walletOverlayDirectoryCopy) walletOverlayDirectoryCopy.textContent = overlayContent.directoryCopy;
  if (walletOverlaySelectCopy) walletOverlaySelectCopy.textContent = overlayContent.selectCopy;
  if (walletOverlayViewAllHistory) walletOverlayViewAllHistory.dataset.toast = overlayContent.viewAllToast;

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

  if (walletOverlayPrimaryAction && primaryAction) {
    renderModeSwitch(actionKeys, primaryActionKey);
    renderPrimaryAction(primaryAction);
  }

  if (walletOverlayHistory) {
    walletOverlayHistory.replaceChildren();
    overlayContent.history.forEach((item) => {
      walletOverlayHistory.append(createHistoryItem(item));
    });
  }

  walletOverlay.hidden = false;
  window.requestAnimationFrame(() => {
    if (walletOverlayScroll) walletOverlayScroll.scrollTop = 0;
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

walletDirectoryOpenButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.stopPropagation();
    openMerchantDirectory();
  });
});

merchantDirectoryCloseButtons.forEach((button) => {
  button.addEventListener("click", closeMerchantDirectory);
});

manageCardsOpenButtons.forEach((button) => {
  button.addEventListener("click", openManageCardsOverlay);
});

manageCardsCloseButtons.forEach((button) => {
  button.addEventListener("click", closeManageCardsOverlay);
});

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeCardOverlay();
    closeWalletOverlay();
    closeMerchantDirectory();
    closeManageCardsOverlay();
  }
});

applyMode(false);
