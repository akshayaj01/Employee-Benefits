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
const claimsOpenButton = document.querySelector("[data-claims-open]");
const claimsAssistant = document.querySelector("[data-claims-assistant]");
const claimsCloseButtons = document.querySelectorAll("[data-claims-close]");
const claimsStatus = document.querySelector("[data-claims-status]");
const claimsThread = document.querySelector("[data-claims-thread]");
const claimsWorkspace = document.querySelector("[data-claims-workspace]");
const claimsScroll = document.querySelector("[data-claims-scroll]");
const claimsInput = document.querySelector("[data-claims-input]");
const claimsSendButton = document.querySelector("[data-claims-send]");
const claimsActionButtons = document.querySelectorAll("[data-claims-action]");

let toastTimer;
let activeWalletTone = "meal";

function syncPageScrollLock() {
  const hasOpenOverlay = [cardOverlay, walletOverlay, merchantDirectoryOverlay, manageCardsOverlay, claimsAssistant].some((overlay) =>
    overlay?.classList.contains("is-open")
  );
  document.body.classList.toggle("is-overlay-open", hasOpenOverlay);
}

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

const claimCategories = {
  telephone: {
    label: "Telephone & Internet",
    helper: "Mobile, broadband and home internet bills",
    icon: "icon-card",
    tone: "meal",
    required: ["Bill period", "Invoice number", "Employee name"],
    draft: {
      category: "Telephone & Internet",
      vendor: "Airtel Broadband",
      amount: "₹2,149",
      billDate: "30 Apr 2026",
      billPeriod: "",
      invoiceNumber: "AIR-APR-7781",
      employeeName: "V Sharma",
      uploadedDocument: "airtel-broadband-apr.pdf",
      walletBalance: "₹9,100",
      status: "Draft needs attention",
      vehicleNumber: "",
      courseName: "",
      managerApproval: "",
      completionCertificate: "",
    },
    errors: [
      ["period", "Missing bill period", "I could not find the month covered by this bill.", "Add Apr 2026"],
      ["duplicate", "Duplicate month", "There is already a Telephone & Internet claim for Apr 2026.", "Mark as alternate bill"],
      ["name", "Name mismatch", "Bill shows V Sharma, while profile shows Virat Sharma.", "Confirm employee name"],
      ["amount", "Amount mismatch", "OCR total and line-item total differ by ₹51.", "Use invoice total"],
    ],
  },
  fuel: {
    label: "Fuel and Maintenance",
    helper: "Fuel bills, servicing, repair and maintenance",
    icon: "icon-fuel",
    tone: "fuel",
    required: ["Vehicle number", "Invoice number", "Clear receipt"],
    draft: {
      category: "Fuel and Maintenance",
      vendor: "Shell Select",
      amount: "₹3,280",
      billDate: "11 May 2026",
      billPeriod: "",
      invoiceNumber: "SHL-8831",
      employeeName: "Virat Sharma",
      uploadedDocument: "shell-fuel-receipt.jpg",
      walletBalance: "₹9,100",
      status: "Draft needs attention",
      vehicleNumber: "",
      courseName: "",
      managerApproval: "",
      completionCertificate: "",
    },
    errors: [
      ["vehicle", "Missing vehicle number", "Fuel claims need the vehicle number for policy validation.", "Add KA 03 MX 9911"],
      ["blur", "Blurry receipt", "Some tax and invoice fields may be unreliable.", "Replace with clear receipt"],
      ["future", "Future bill date", "One OCR pass detected a future bill date.", "Use detected date"],
      ["lines", "Multiple line items", "Fuel and store purchases appear together.", "Claim fuel amount only"],
    ],
  },
  development: {
    label: "Professional Development Expenses",
    helper: "Courses, certifications, events and learning invoices",
    icon: "icon-trophy",
    tone: "misc",
    required: ["Manager approval", "Completion certificate", "Course invoice"],
    draft: {
      category: "Professional Development Expenses",
      vendor: "Coursera",
      amount: "₹14,999",
      billDate: "02 May 2026",
      billPeriod: "",
      invoiceNumber: "CRS-2026-771",
      employeeName: "Virat Sharma",
      uploadedDocument: "coursera-payment-screenshot.png",
      walletBalance: "₹9,100",
      status: "Draft needs attention",
      vehicleNumber: "",
      courseName: "",
      managerApproval: "Missing",
      completionCertificate: "Missing",
    },
    errors: [
      ["approval", "Missing manager approval", "Professional development claims need approval before submission.", "Attach approval"],
      ["certificate", "Missing completion certificate", "Please attach completion proof or certificate.", "Attach certificate"],
      ["course", "Course name missing", "I found the platform name but not the eligible course name.", "Add course name"],
      ["screenshot", "Payment screenshot instead of invoice", "Policy needs an invoice, not only a payment screenshot.", "Replace with invoice"],
    ],
  },
};

const claimState = {
  stage: "empty",
  selectedCategory: "telephone",
  draft: { ...claimCategories.telephone.draft },
  errors: [],
  isThinking: false,
  messages: [
    {
      role: "bot",
      text: "Hi, I’m your Claims Assistant. Upload a bill and I’ll extract details, check policy rules, and help you submit a reimbursement claim.",
    },
  ],
  claimId: "",
};

function cloneClaimDraft(categoryKey) {
  return { ...claimCategories[categoryKey].draft };
}

function addClaimMessage(role, text) {
  claimState.messages.push({ role, text, time: claimState.messages.length > 2 ? "9:41 AM" : "9:40 AM" });
}

function syncClaimsComposer() {
  if (!claimsInput || !claimsSendButton) return;
  const hasText = Boolean(claimsInput.value.trim());
  claimsSendButton.disabled = !hasText;
  claimsSendButton.setAttribute("aria-disabled", String(!hasText));
}

function getClaimErrors() {
  const errors = claimCategories[claimState.selectedCategory].errors;
  return errors
    .filter(([id]) => {
      const draft = claimState.draft;
      if (id === "period") return !draft.billPeriod;
      if (id === "duplicate") return !draft.invoiceNumber.includes("ALT");
      if (id === "name") return draft.employeeName !== "Virat Sharma";
      if (id === "amount") return draft.amount === "₹2,149";
      if (id === "vehicle") return !draft.vehicleNumber;
      if (id === "blur") return draft.uploadedDocument === "shell-fuel-receipt.jpg";
      if (id === "future") return draft.billDate.includes("2027");
      if (id === "lines") return draft.amount === "₹3,280";
      if (id === "approval") return draft.managerApproval === "Missing";
      if (id === "certificate") return draft.completionCertificate === "Missing";
      if (id === "course") return !draft.courseName;
      if (id === "screenshot") return draft.uploadedDocument.endsWith(".png");
      return false;
    })
    .slice(0, 3)
    .map(([id, title, detail, action]) => ({ id, title, detail, action }));
}

function resolveClaimError(id) {
  const draft = claimState.draft;
  if (id === "period") draft.billPeriod = "Apr 2026";
  if (id === "duplicate") draft.invoiceNumber = `${draft.invoiceNumber}-ALT`;
  if (id === "name") draft.employeeName = "Virat Sharma";
  if (id === "amount") draft.amount = "₹2,098";
  if (id === "vehicle") draft.vehicleNumber = "KA 03 MX 9911";
  if (id === "blur") draft.uploadedDocument = "clear-shell-fuel-receipt.jpg";
  if (id === "future") draft.billDate = "11 May 2026";
  if (id === "lines") draft.amount = "₹2,840";
  if (id === "approval") draft.managerApproval = "Attached";
  if (id === "certificate") draft.completionCertificate = "Attached";
  if (id === "course") draft.courseName = "Advanced Product Strategy";
  if (id === "screenshot") draft.uploadedDocument = "coursera-tax-invoice.pdf";
  draft.status = "Draft updated";
  claimState.errors = claimState.errors.filter((error) => error.id !== id);
  addClaimMessage("user", "Fix applied");
  addClaimMessage("bot", "Updated the draft. You can validate again when ready.");
  renderClaimsAssistant();
}

function openClaimsAssistant() {
  if (!claimsAssistant) return;
  closeCardOverlay();
  closeWalletOverlay();
  closeMerchantDirectory();
  closeManageCardsOverlay();
  claimsAssistant.hidden = false;
  if (claimState.stage === "empty" && claimState.messages.length === 0) {
    claimState.messages = [{ role: "bot", text: "Hi, I’m your Claims Assistant. Upload a bill or choose a category to begin." }];
  }
  syncClaimsComposer();
  renderClaimsAssistant();
  window.requestAnimationFrame(() => {
    claimsAssistant.classList.add("is-open");
    syncPageScrollLock();
  });
}

function closeClaimsAssistant() {
  if (!claimsAssistant) return;
  claimsAssistant.classList.remove("is-open");
  syncPageScrollLock();
  window.setTimeout(() => {
    claimsAssistant.hidden = true;
  }, 260);
}

function chooseClaimCategory(categoryKey) {
  claimState.selectedCategory = categoryKey;
  claimState.draft = cloneClaimDraft(categoryKey);
  claimState.errors = [];
  claimState.isThinking = false;
  claimState.stage = "upload";
  addClaimMessage("user", claimCategories[categoryKey].label);
  addClaimMessage("bot", `Selected ${claimCategories[categoryKey].label}. I’ll look for ${claimCategories[categoryKey].required.join(", ")}.`);
  renderClaimsAssistant();
}

function simulateClaimUpload() {
  const category = claimCategories[claimState.selectedCategory];
  claimState.stage = "scanning";
  claimState.draft = cloneClaimDraft(claimState.selectedCategory);
  claimState.errors = [];
  claimState.isThinking = false;
  addClaimMessage("user", "Upload bill");
  addClaimMessage("bot", "Scanning bill… extracting vendor, amount, dates, invoice number and employee name.");
  renderClaimsAssistant();
  window.setTimeout(() => {
    claimState.stage = "draft";
    claimState.errors = getClaimErrors();
    addClaimMessage("bot", `I found a ${category.label} claim. I prepared a draft and highlighted what needs attention.`);
    renderClaimsAssistant();
  }, 950);
}

function validateClaimPolicy() {
  claimState.stage = "validating";
  claimState.isThinking = false;
  addClaimMessage("user", "Validate policy");
  addClaimMessage("bot", "Validating policy… checking limits, duplicates and required documents.");
  renderClaimsAssistant();
  window.setTimeout(() => {
    claimState.errors = getClaimErrors();
    if (claimState.errors.length) {
      claimState.stage = "errors";
      addClaimMessage("bot", "A few items need quick correction before submission.");
    } else {
      claimState.stage = "review";
      claimState.draft.status = "Ready to submit";
      addClaimMessage("bot", "Everything looks good. Please review the final claim.");
    }
    renderClaimsAssistant();
  }, 850);
}

function submitClaim() {
  claimState.stage = "success";
  claimState.isThinking = false;
  claimState.claimId = `CLM-${Math.floor(100000 + Math.random() * 900000)}`;
  claimState.draft.status = "Submitted";
  addClaimMessage("user", "Submit claim");
  addClaimMessage("bot", `Submitted successfully. Your claim ID is ${claimState.claimId}.`);
  renderClaimsAssistant();
}

function updateClaimField(field, value) {
  claimState.draft[field] = value;
}

function renderClaimsAssistant() {
  if (!claimsStatus || !claimsThread || !claimsWorkspace) return;
  const draft = claimState.draft;
  const showStatus = !["empty", "category", "upload", "scanning"].includes(claimState.stage);
  claimsStatus.hidden = !showStatus;
  claimsStatus.innerHTML = `
    <article class="transaction-item">
      <span class="transaction-icon" aria-hidden="true"><svg><use href="#icon-receipt" /></svg></span>
      <span class="transaction-meta"><strong>Claim status</strong><span>${draft.status}</span></span>
    </article>
    <article class="transaction-item">
      <span class="transaction-icon" aria-hidden="true"><svg><use href="#icon-money" /></svg></span>
      <span class="transaction-meta"><strong>Wallet balance</strong><span>${draft.walletBalance}</span></span>
    </article>
    <article class="transaction-item">
      <span class="transaction-icon" aria-hidden="true"><svg><use href="#icon-grid" /></svg></span>
      <span class="transaction-meta"><strong>Category</strong><span>${draft.category}</span></span>
    </article>
  `;
  claimsThread.innerHTML = claimState.messages
    .map((message) => renderClaimMessage(message))
    .join("") + (claimState.isThinking ? renderClaimMessage({ role: "bot", text: `<span class="claims-mini-typing"><i></i><i></i><i></i></span>`, typing: true }) : "");
  claimsWorkspace.innerHTML = renderClaimsWorkspace();
  bindClaimsWorkspaceActions();
  syncClaimsComposer();
  window.requestAnimationFrame(() => {
    claimsScroll?.scrollTo({ top: claimsScroll.scrollHeight, behavior: "smooth" });
  });
}

function renderClaimsWorkspace() {
  if (claimState.stage === "empty") return renderClaimsEmptyState();
  if (claimState.stage === "category") return renderClaimsCategoryPicker();
  if (claimState.stage === "upload") return renderClaimsUploadState();
  if (claimState.stage === "scanning") return renderClaimsLoading("Scanning bill…", "Reading the bill and extracting claim details.");
  if (claimState.stage === "validating") return renderClaimsLoading("Validating policy…", "Checking duplicates, limits and required documents.");
  if (claimState.stage === "success") return renderClaimsSuccess();
  return `
    ${renderClaimDraftCard()}
    ${claimState.errors.length ? renderClaimErrors() : ""}
    ${claimState.stage === "review" ? renderClaimReview() : ""}
    <div class="claims-action-grid wallet-overlay-mode-switch">
      <button type="button" class="wallet-overlay-mode-button" data-claims-workspace-action="validate">Validate policy</button>
      <button type="button" class="wallet-overlay-mode-button is-active" data-claims-workspace-action="${claimState.stage === "review" ? "submit" : "review"}">${claimState.stage === "review" ? "Submit claim" : "Review"}</button>
    </div>
  `;
}

function renderClaimMessage(message) {
  const isUser = message.role === "user";
  const typingClass = message.typing ? " is-typing" : "";
  const time = message.time || "9:40 AM";
  return `
    <div class="claims-message-row ${isUser ? "user" : "bot"}">
      ${isUser ? "" : `<span class="claims-avatar" aria-hidden="true"><svg><use href="#icon-headset" /></svg></span>`}
      <div class="claims-message ${isUser ? "user" : "bot"}${typingClass}">
        <span class="claims-message-text">${message.text}</span>
        ${message.typing ? "" : `<span class="claims-message-meta">${time}${isUser ? `<svg aria-hidden="true"><use href="#icon-checks" /></svg>` : ""}</span>`}
      </div>
    </div>
  `;
}

function renderClaimsEmptyState() {
  return `
    <section class="claims-empty-card wallet-overlay-summary gift">
      <h3>Start a reimbursement claim</h3>
      <p>Upload a bill for OCR extraction or choose a category first. Everything here is mocked locally for product review.</p>
      <div class="claims-action-grid wallet-overlay-mode-switch">
        <button type="button" class="wallet-overlay-mode-button is-active" data-claims-workspace-action="upload">Upload bill</button>
        <button type="button" class="wallet-overlay-mode-button" data-claims-workspace-action="category">Choose category</button>
      </div>
    </section>
  `;
}

function renderClaimsCategoryPicker() {
  return `
    <section class="claims-category-shell wallet-overlay-summary gift">
      <div class="claims-category-grid wallet-merchant-grid">
        ${Object.entries(claimCategories)
          .map(([key, category]) => `
            <button type="button" class="claims-category-card wallet-merchant-card ${category.tone} ${claimState.selectedCategory === key ? "is-selected" : ""}" data-claims-category="${key}">
              <span class="wallet-merchant-icon merchant-directory-icon" aria-hidden="true"><svg><use href="#${category.icon}" /></svg></span>
              <strong>${category.label}</strong>
            </button>
          `)
          .join("")}
      </div>
    </section>
  `;
}

function renderClaimsUploadState() {
  const category = claimCategories[claimState.selectedCategory];
  return `
    <section class="claims-upload-card wallet-overlay-summary ${category.tone}">
      <span><svg><use href="#icon-plus" /></svg></span>
      <h3>Upload ${category.label} bill</h3>
      <p>PDF, PNG or JPG accepted. This prototype simulates upload and OCR.</p>
      <div class="claims-required-docs wallet-overlay-pill-row">
        ${category.required.map((item) => `<small class="wallet-rail-pill is-active">${item}</small>`).join("")}
      </div>
      <button type="button" class="wallet-overlay-cta claims-primary-action" data-claims-workspace-action="upload">
        <span class="wallet-overlay-cta-copy"><strong>Simulate upload</strong></span>
      </button>
    </section>
  `;
}

function renderClaimsLoading(title, detail) {
  return `
    <section class="claims-loading-card merchant-directory-summary">
      <span class="claims-typing"><i></i><i></i><i></i></span>
      <div>
        <strong>${title}</strong>
        <p>${detail}</p>
      </div>
    </section>
  `;
}

function renderClaimDraftCard() {
  const draft = claimState.draft;
  const categoryKey = claimState.selectedCategory;
  const tone = claimCategories[categoryKey].tone;
  const fields = [
    ["category", "Category"],
    ["vendor", "Vendor"],
    ["amount", "Amount"],
    ["billDate", "Bill date"],
    ["billPeriod", "Bill period"],
    ["invoiceNumber", "Invoice number"],
    ["employeeName", "Employee name"],
  ];
  if (categoryKey === "fuel") fields.push(["vehicleNumber", "Vehicle number"]);
  if (categoryKey === "development") fields.push(["courseName", "Course name"], ["managerApproval", "Manager approval"], ["completionCertificate", "Completion certificate"]);
  return `
    <section class="claims-draft-card wallet-overlay-summary ${tone}">
      <div class="claims-card-head wallet-overlay-section-head">
        <div>
          <span>Extracted draft</span>
          <h3>${draft.category}</h3>
        </div>
        <small class="wallet-rail-pill is-active">${draft.status}</small>
      </div>
      <div class="claims-draft-hero">
        <span>Claim amount</span>
        <strong>${draft.amount || "Add amount"}</strong>
      </div>
      <div class="claims-document-card merchant-directory-item">
        <span class="merchant-directory-item-icon"><svg><use href="#icon-receipt" /></svg></span>
        <div class="merchant-directory-item-copy">
          <strong>${draft.uploadedDocument}</strong>
          <small>${claimState.stage === "review" ? "Ready for submission" : "Uploaded and scanned"}</small>
        </div>
        <button type="button" class="merchant-directory-chip" data-claims-workspace-action="upload">Replace</button>
      </div>
      <div class="claims-field-grid transaction-list">
        ${fields
          .map(([field, label]) => `
            <label class="claims-field-row transaction-item ${isClaimFieldMissing(field) ? "needs-attention" : ""}">
              <span class="transaction-icon" aria-hidden="true"><svg><use href="#icon-receipt" /></svg></span>
              <span class="transaction-meta">
                <strong>${label}</strong>
                <input value="${draft[field] || ""}" placeholder="Add ${label.toLowerCase()}" data-claims-field="${field}" />
              </span>
            </label>
          `)
          .join("")}
      </div>
    </section>
  `;
}

function isClaimFieldMissing(field) {
  const draft = claimState.draft;
  return (field === "billPeriod" && claimState.selectedCategory === "telephone" && !draft.billPeriod)
    || (field === "vehicleNumber" && claimState.selectedCategory === "fuel" && !draft.vehicleNumber)
    || (field === "courseName" && claimState.selectedCategory === "development" && !draft.courseName)
    || (field === "managerApproval" && draft.managerApproval === "Missing")
    || (field === "completionCertificate" && draft.completionCertificate === "Missing");
}

function renderClaimErrors() {
  return `
    <section class="claims-error-stack">
      ${claimState.errors
        .map((error) => `
          <article class="claims-error-card merchant-directory-item">
            <span class="merchant-directory-item-icon"><svg><use href="#icon-bell" /></svg></span>
            <div class="merchant-directory-item-copy">
              <strong>${error.title}</strong>
              <span>${error.detail}</span>
              <button type="button" class="merchant-directory-chip" data-claims-fix="${error.id}">${error.action}</button>
            </div>
          </article>
        `)
        .join("")}
    </section>
  `;
}

function renderClaimReview() {
  const draft = claimState.draft;
  return `
    <section class="claims-review-card wallet-overlay-summary gift">
      <span>Final review</span>
      <h3>Ready to submit</h3>
      <div class="claims-review-amount">
        <span>Total reimbursement</span>
        <strong>${draft.amount}</strong>
      </div>
      <div class="claims-review-list transaction-list">
        ${[
        ["Category", draft.category],
        ["Vendor", draft.vendor],
        ["Amount", draft.amount],
        ["Bill date", draft.billDate],
        ["Document", draft.uploadedDocument],
        ["Wallet balance", draft.walletBalance],
      ].map(([label, value]) => `
          <article class="transaction-item">
            <span class="transaction-icon" aria-hidden="true"><svg><use href="#icon-receipt" /></svg></span>
            <span class="transaction-meta"><strong>${label}</strong><span>${value || "-"}</span></span>
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

function renderClaimsSuccess() {
  return `
    <section class="claims-success-card wallet-overlay-summary gift">
      <span><svg><use href="#icon-receipt" /></svg></span>
      <h3>Claim submitted</h3>
      <p>Your reimbursement claim has been sent for approval.</p>
      <strong>${claimState.claimId}</strong>
      <div class="claims-success-meta">
        <p><span>Amount</span><strong>${claimState.draft.amount}</strong></p>
        <p><span>Category</span><strong>${claimState.draft.category}</strong></p>
      </div>
      <div class="claims-tracking-card">
        <p><i></i>Submitted</p>
        <p><i></i>Manager review</p>
        <p><i></i>Finance check</p>
        <p><i></i>Payout</p>
      </div>
      <button type="button" class="wallet-overlay-cta claims-primary-action" data-claims-workspace-action="reset">
        <span class="wallet-overlay-cta-copy"><strong>Start another claim</strong></span>
      </button>
    </section>
  `;
}

function bindClaimsWorkspaceActions() {
  claimsWorkspace?.querySelectorAll("[data-claims-category]").forEach((button) => {
    button.addEventListener("click", () => chooseClaimCategory(button.dataset.claimsCategory));
  });
  claimsWorkspace?.querySelectorAll("[data-claims-workspace-action]").forEach((button) => {
    button.addEventListener("click", () => handleClaimsAction(button.dataset.claimsWorkspaceAction));
  });
  claimsWorkspace?.querySelectorAll("[data-claims-fix]").forEach((button) => {
    button.addEventListener("click", () => resolveClaimError(button.dataset.claimsFix));
  });
  claimsWorkspace?.querySelectorAll("[data-claims-field]").forEach((input) => {
    input.addEventListener("input", () => updateClaimField(input.dataset.claimsField, input.value));
  });
}

function handleClaimsAction(action) {
  if (action === "upload") simulateClaimUpload();
  if (action === "category") {
    claimState.stage = "category";
    addClaimMessage("user", "Choose category");
    addClaimMessage("bot", "Choose the reimbursement category that best matches your bill.");
    renderClaimsAssistant();
  }
  if (action === "drafts") {
    claimState.stage = "draft";
    addClaimMessage("user", "View drafts");
    addClaimMessage("bot", "Here is your latest reimbursement draft.");
    renderClaimsAssistant();
  }
  if (action === "validate") validateClaimPolicy();
  if (action === "review") {
    claimState.errors = getClaimErrors();
    claimState.stage = claimState.errors.length ? "errors" : "review";
    addClaimMessage("user", "Review claim");
    addClaimMessage("bot", claimState.errors.length ? "Resolve these items first, then we can review." : "Here is the final review.");
    renderClaimsAssistant();
  }
  if (action === "submit") submitClaim();
  if (action === "reset") {
    claimState.stage = "empty";
    claimState.selectedCategory = "telephone";
    claimState.draft = cloneClaimDraft("telephone");
    claimState.errors = [];
    claimState.isThinking = false;
    claimState.claimId = "";
    claimState.messages = [{ role: "bot", text: "Ready for another claim. Upload a bill or choose a category to begin." }];
    renderClaimsAssistant();
  }
}

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
    </span>
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

claimsOpenButton?.addEventListener("click", () => {
  openClaimsAssistant();
});

claimsCloseButtons.forEach((button) => {
  button.addEventListener("click", closeClaimsAssistant);
});

claimsActionButtons.forEach((button) => {
  button.addEventListener("click", () => handleClaimsAction(button.dataset.claimsAction));
});

claimsSendButton?.addEventListener("click", () => {
  const text = claimsInput?.value.trim();
  if (!text) return;
  addClaimMessage("user", text);
  claimsInput.value = "";
  claimState.isThinking = true;
  syncClaimsComposer();
  renderClaimsAssistant();
  window.setTimeout(() => {
    claimState.isThinking = false;
    addClaimMessage("bot", "I can help with upload, category selection, validation, corrections, review or submission.");
    renderClaimsAssistant();
  }, 240);
});

claimsInput?.addEventListener("keydown", (event) => {
  if (event.key === "Enter") claimsSendButton?.click();
});

claimsInput?.addEventListener("input", syncClaimsComposer);

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
  syncPageScrollLock();
  window.setTimeout(() => {
    cardOverlay.hidden = true;
  }, 320);
}

function closeWalletOverlay() {
  if (!walletOverlay) return;
  walletOverlay.classList.remove("is-open");
  syncPageScrollLock();
  window.setTimeout(() => {
    walletOverlay.hidden = true;
  }, 280);
}

function closeMerchantDirectory() {
  if (!merchantDirectoryOverlay) return;
  merchantDirectoryOverlay.classList.remove("is-open");
  document.body.classList.remove("is-merchant-directory-open");
  syncPageScrollLock();
  window.setTimeout(() => {
    merchantDirectoryOverlay.hidden = true;
  }, 280);
}

function closeManageCardsOverlay() {
  if (!manageCardsOverlay) return;
  manageCardsOverlay.classList.remove("is-open");
  syncPageScrollLock();
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
    syncPageScrollLock();
  });
}

function openManageCardsOverlay() {
  if (!manageCardsOverlay) return;
  manageCardsOverlay.hidden = false;
  window.requestAnimationFrame(() => {
    if (manageCardsPanel) manageCardsPanel.scrollTop = 0;
    manageCardsOverlay.classList.add("is-open");
    syncPageScrollLock();
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
    syncPageScrollLock();
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
    syncPageScrollLock();
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
    closeClaimsAssistant();
  }
});

applyMode(false);
if (window.location.hash === "#claims") openClaimsAssistant();
