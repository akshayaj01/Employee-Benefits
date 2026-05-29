const toastRegion = document.querySelector("[data-toast-region]");
const filterButtons = document.querySelectorAll("[data-filter]");
const transactions = document.querySelectorAll("[data-wallet]");
const virtualCardToggle = document.querySelector("[data-virtual-card-toggle]");
const balanceCard = document.querySelector(".balance-card");
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
const manageWalletCarousel = document.querySelector(".manage-cards-wallet-carousel");
const manageWalletButtons = document.querySelectorAll("[data-manage-wallet]");
const manageOnlineButton = document.querySelector("[data-manage-online-toggle]");
const manageWalletCount = document.querySelector("[data-manage-wallet-count]");
const manageWalletDots = document.querySelectorAll(".manage-cards-wallet-dots i");
const manageAccessCopy = document.querySelector("[data-manage-access-copy]");
const manageAccessValue = document.querySelector("[data-manage-access-value]");
const manageLimitCopy = document.querySelector("[data-manage-limit-copy]");
const manageLimitValue = document.querySelector("[data-manage-limit-value]");
const manageLimitProgress = document.querySelector("[data-manage-limit-progress]");
const manageLimitUsed = document.querySelector("[data-manage-limit-used]");
const manageLimitTotal = document.querySelector("[data-manage-limit-total]");
const manageOnlineCopy = document.querySelector("[data-manage-online-copy]");
const manageStatusCopy = document.querySelector("[data-manage-status-copy]");
const manageSensitiveFields = document.querySelectorAll("[data-card-sensitive]");
const manageRevealButtons = document.querySelectorAll("[data-card-reveal]");
const managePreviewNumber = document.querySelector("[data-manage-preview-number]");
const managePreviewHolder = document.querySelector("[data-manage-preview-holder]");
const managePreviewExpiry = document.querySelector("[data-manage-preview-expiry]");
const manageWalletType = document.querySelector("[data-manage-wallet-type]");
const manageFreezeButton = document.querySelector("[data-manage-freeze-toggle]");
const manageFreezeTitle = document.querySelector("[data-manage-freeze-title]");
const manageFreezeCopy = document.querySelector("[data-manage-freeze-copy]");
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
const tapPayDiscovery = document.querySelector("[data-tap-pay-discovery]");

let toastTimer;
let activeWalletTone = "meal";
let activeManageWalletKey = "meal";
const manageWalletState = {
  meal: {
    label: "Meal Wallet",
    balance: "₹6,400",
    summary: "Available balance for daily essentials",
    accessCopy: "Groceries, Restaurants, Food Delivery",
    accessValue: "Allowed",
    limitUsed: 4200,
    limitTotal: 10000,
    online: true,
    frozen: false,
    card: { number: "4521 8890 4432 7845", holder: "John Doe", expiry: "05 / 29", cvv: "731", last4: "7845" },
    reveal: { number: false, cvv: false },
  },
  fuel: {
    label: "Fuel Wallet",
    balance: "₹3,150",
    summary: "Available balance for commute spends",
    accessCopy: "Fuel Stations, Mobility, Auto Care",
    accessValue: "Allowed",
    limitUsed: 4200,
    limitTotal: 10000,
    online: true,
    frozen: false,
    card: { number: "4521 8890 4432 7846", holder: "John Doe", expiry: "05 / 29", cvv: "731", last4: "7846" },
    reveal: { number: false, cvv: false },
  },
  misc: {
    label: "Reimbursement Wallet",
    balance: "₹9,100",
    summary: "Available balance for claim-based spends",
    accessCopy: "Claims, QR Payments, Approved Vendors",
    accessValue: "Allowed",
    limitUsed: 4200,
    limitTotal: 10000,
    online: true,
    frozen: false,
    card: { number: "4521 8890 4432 7847", holder: "John Doe", expiry: "05 / 29", cvv: "731", last4: "7847" },
    reveal: { number: false, cvv: false },
  },
  gift: {
    label: "Gift Wallet",
    balance: "6,200 pts",
    summary: "Available balance for gifting spends",
    accessCopy: "Gift Cards, Online Stores, Brand Partners",
    accessValue: "Allowed",
    limitUsed: 4200,
    limitTotal: 10000,
    online: true,
    frozen: false,
    card: { number: "4521 8890 4432 7848", holder: "John Doe", expiry: "05 / 29", cvv: "731", last4: "7848" },
    reveal: { number: false, cvv: false },
  },
};

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
      { merchant: "Subway", reference: "Ref ID: 1277834591", date: "09 Mar 2026", amount: "- ₹480", icon: "icon-food" },
      { merchant: "FreshMenu", reference: "Ref ID: 1277834528", date: "06 Mar 2026", amount: "- ₹725", icon: "icon-food" },
      { merchant: "Nature's Basket", reference: "Ref ID: 1277834495", date: "03 Mar 2026", amount: "- ₹1,240", icon: "icon-bag" },
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
      { merchant: "Park+ Fastag Hub", reference: "Ref ID: 2277834562", date: "08 Mar 2026", amount: "- ₹650", icon: "icon-car" },
      { merchant: "IndianOil COCO", reference: "Ref ID: 2277834517", date: "05 Mar 2026", amount: "- ₹2,000", icon: "icon-fuel" },
      { merchant: "Bharat Petroleum", reference: "Ref ID: 2277834490", date: "02 Mar 2026", amount: "- ₹1,800", icon: "icon-fuel" },
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
      { merchant: "Apollo Pharmacy", reference: "Ref ID: 3277834582", date: "14 Mar 2026", amount: "- ₹850", icon: "icon-money", status: "Processed" },
      { merchant: "Urban Company", reference: "Ref ID: 3277834539", date: "10 Mar 2026", amount: "- ₹1,600", icon: "icon-money", status: "Under review" },
      { merchant: "Tata 1mg", reference: "Ref ID: 3277834506", date: "07 Mar 2026", amount: "- ₹940", icon: "icon-receipt", status: "Processed" },
      { merchant: "Cleartrip Counter", reference: "Ref ID: 3277834481", date: "04 Mar 2026", amount: "- ₹2,300", icon: "icon-send", status: "Denied" },
      { merchant: "Cult Fit Center", reference: "Ref ID: 3277834455", date: "01 Mar 2026", amount: "- ₹1,200", icon: "icon-settings", status: "Under review" },
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
      { merchant: "Myntra", reference: "Ref ID: 4277834492", date: "05 Mar 2026", amount: "- ₹1,100", icon: "icon-bag" },
      { merchant: "BookMyShow", reference: "Ref ID: 4277834468", date: "02 Mar 2026", amount: "- ₹800", icon: "icon-gift" },
      { merchant: "Croma", reference: "Ref ID: 4277834437", date: "28 Feb 2026", amount: "- ₹2,000", icon: "icon-grid" },
    ],
  },
};

const claimsMockData = {
  canonicalClaim: {
    id: "CLM-2026-0428",
    category: "Telephone & Internet",
    title: "Telephone claim",
    vendor: "Airtel Broadband",
    amount: "₹2,149",
    billDate: "30 Apr 2026",
    submittedDate: "30 Apr 2026",
    approvedDate: "1 May 2026",
    reimbursedDate: "5 May 2026, 2:45 PM",
    balanceAvailable: "₹9,100",
    uploadedDocument: {
      name: "airtel-broadband.pdf",
      size: "248 KB",
      uploadedOn: "30 Apr 2026",
      type: "PDF",
    },
    extractedDetails: {
      vendor: "Airtel Broadband",
      amount: "₹2,149",
      billDate: "30 Apr 2026",
      category: "Telephone & Internet",
      accountNumber: "XXXX XXXX 1234",
      confidenceByField: {
        vendor: "High",
        amount: "High",
        billDate: "High",
        category: "Medium",
        accountNumber: "Medium",
      },
    },
    anomalies: [
      {
        id: "duplicate",
        type: "duplicate",
        severity: "warning",
        title: "Possible duplicate detected",
        description: "We found a similar claim for Airtel Broadband on 28 Apr 2026 for ₹2,149.",
        requiredAction: "Confirm this is not a duplicate and submit a declaration.",
        similarClaim: { id: "CLM-2026-0487", date: "28 Apr 2026", amount: "₹2,149" },
        resolved: false,
      },
      {
        id: "dateWindow",
        type: "dateWindow",
        severity: "warning",
        title: "Bill date outside policy window",
        description: "This bill date appears to be older than the allowed reimbursement period.",
        requiredAction: "Attach prior approval or explain why the expense is being claimed now.",
        resolved: false,
      },
      {
        id: "lowConfidenceOCR",
        type: "lowConfidenceOCR",
        severity: "error",
        title: "Low-confidence OCR",
        description: "The scan is blurry or missing key information. Details may be incomplete.",
        requiredAction: "Re-upload bill or enter missing details manually.",
        resolved: false,
      },
      {
        id: "personalUsage",
        type: "personalUsage",
        severity: "error",
        title: "Possible personal usage",
        description: "This amount is higher than typical plans. It may include personal usage or mixed usage.",
        requiredAction: "Confirm this is a work expense and submit a compliance declaration.",
        resolved: false,
      },
      {
        id: "limitExceeded",
        type: "limitExceeded",
        severity: "warning",
        title: "Amount exceeds available limit",
        description: "This claim amount is higher than the remaining eligible balance for this category.",
        requiredAction: "Submit eligible amount, edit amount, or ask a policy question.",
        resolved: false,
      },
    ],
    declarations: [
      "I confirm this claim is accurate, work-related, not claimed before, and complies with the company’s reimbursement policy.",
    ],
    decisionSummary: "All policy checks passed. Amount within limits and required document attached.",
  },
  promptCards: [
    { id: "telephone", title: "Telephone claim", subtitle: "Submit a telephone or internet bill", icon: "icon-card" },
    { id: "meal", title: "Meal claim", subtitle: "Submit meal expenses", icon: "icon-food" },
    { id: "fuel", title: "Fuel claim", subtitle: "Submit fuel expenses", icon: "icon-fuel" },
    { id: "upload", title: "Upload a bill", subtitle: "Scan and extract details", icon: "icon-receipt" },
  ],
  history: [
    { id: "CLM-2026-0428", title: "Telephone & Internet", vendor: "Airtel Broadband", amount: "₹2,149", date: "30 Apr 2026", status: "Pending", icon: "icon-card" },
    { id: "CLM-2026-0417", title: "Meal claim", vendor: "Team lunch with client", amount: "₹1,250", date: "29 Apr 2026", status: "Approved", icon: "icon-food" },
    { id: "CLM-2026-0398", title: "Fuel claim", vendor: "Drive to client site", amount: "₹1,980", date: "27 Apr 2026", status: "Approved", icon: "icon-fuel" },
    { id: "CLM-2026-0384", title: "Travel claim", vendor: "Bengaluru to Mumbai", amount: "₹4,850", date: "24 Apr 2026", status: "Rejected", icon: "icon-send" },
    { id: "CLM-2026-0372", title: "Cab/Taxi", vendor: "Airport pickup", amount: "₹720", date: "22 Apr 2026", status: "Approved", icon: "icon-car" },
    { id: "CLM-2026-0366", title: "Software subscription", vendor: "Notion Labs, Inc.", amount: "₹1,299", date: "25 Apr 2026", status: "Pending", icon: "icon-receipt" },
    { id: "CLM-2026-0341", title: "Travel claim", vendor: "Delhi to Bengaluru", amount: "₹6,320", date: "29 Apr 2026", status: "Pending", icon: "icon-send" },
  ],
  dashboard: {
    totalBalance: "₹9,100",
    availableBalance: "₹6,951",
    pendingPayouts: "₹2,149",
    monthlyTotalClaims: 12,
    monthlyClaimedAmount: "₹18,450",
    monthlyReimbursedAmount: "₹8,320",
    statusCounts: [
      { label: "Under review", count: 3, amount: "₹2,840", status: "pending" },
      { label: "Approved", count: 5, amount: "₹8,320", status: "approved" },
      { label: "Rejected", count: 1, amount: "₹1,240", status: "rejected" },
      { label: "Reimbursed", count: 4, amount: "₹6,180", status: "reimbursed" },
    ],
    recentActivity: [
      { vendor: "Airtel Broadband", amount: "₹2,149", status: "Approved", meta: "Bill date: 30 Apr 2026" },
      { vendor: "Telephone & Internet", amount: "₹1,299", status: "Under review", meta: "Bill date: 25 Apr 2026" },
      { vendor: "Mobile Recharge", amount: "₹799", status: "Rejected", meta: "Bill date: 20 Apr 2026" },
      { vendor: "Electricity Bill", amount: "₹1,880", status: "Reimbursed", meta: "Bill date: 15 Apr 2026" },
    ],
  },
};

const claimState = {
  view: "home",
  messages: [],
  scanningProgress: 0,
  uploaded: false,
  selectedClaim: null,
  anomalyResolved: false,
  supportingDocumentAttached: false,
  declarationAccepted: [false],
  claimSubmitted: false,
  trackStatus: "submitted",
  historyFilter: "All",
  historySearch: "",
  selectedHistoryId: "CLM-2026-0428",
  manualDetails: {
    vendor: "Airtel Broadband",
    amount: "₹2,149",
    billDate: "30 Apr 2026",
  },
  isThinking: false,
};

function createBaseClaimMessages() {
  return [
    {
      id: "intro",
      role: "assistant",
      text: "Hi, I’m your Claims Assistant. Upload a bill, ask questions, and I’ll extract details, check policy rules, detect anomalies, and help with compliance declarations before submission.",
      time: "9:41 AM",
    },
  ];
}

function resetClaimJourney() {
  claimState.view = "home";
  claimState.messages = createBaseClaimMessages();
  claimState.scanningProgress = 0;
  claimState.uploaded = false;
  claimState.selectedClaim = null;
  claimState.anomalyResolved = false;
  claimState.supportingDocumentAttached = false;
  claimState.declarationAccepted = [false];
  claimState.claimSubmitted = false;
  claimState.trackStatus = "submitted";
  claimState.historyFilter = "All";
  claimState.historySearch = "";
  claimState.selectedHistoryId = "CLM-2026-0428";
  claimState.isThinking = false;
}

resetClaimJourney();

function addClaimMessage(role, text, type = "normal") {
  claimState.messages.push({
    id: `msg-${Date.now()}-${claimState.messages.length}`,
    role,
    text,
    type,
    time: claimState.messages.length > 1 ? "9:42 AM" : "9:41 AM",
  });
}

function syncClaimsComposer() {
  if (!claimsInput || !claimsSendButton) return;
  const hasText = Boolean(claimsInput.value.trim());
  claimsSendButton.disabled = !hasText;
  claimsSendButton.setAttribute("aria-disabled", String(!hasText));
  claimsInput.placeholder = claimState.view === "track" ? "Ask about this claim..." : claimState.view === "detail" ? "Ask a question about this claim..." : "Ask or upload a bill...";
}

function getClaimAssistantReply(text) {
  const message = text.toLowerCase();
  const claim = claimsMockData.canonicalClaim;
  if (/(policy|eligible|limit|allowed)/.test(message)) {
    return `For ${claim.category}, the assistant checks bill date, duplicate claims, available balance, and whether the expense is work related. This mock flow flags anything that needs clarification before submission.`;
  }
  if (/(status|track|approved|pending|reimbursed|payout)/.test(message)) {
    return `Claim ${claim.id} is currently shown as ${claimState.trackStatus.replace("-", " ")}. You can use the status controls to simulate Pending → Approved → Reimbursed.`;
  }
  if (/(duplicate|same bill|other claim)/.test(message)) {
    return "The duplicate check compares vendor, amount, bill period, and employee profile. In production this would call a claims history and policy rules API.";
  }
  if (/(ocr|scan|extract|bill)/.test(message)) {
    return "The OCR result is mocked here. In production, this is where a real OCR/document AI service would extract bill fields and confidence scores.";
  }
  return `I can help with claim status, policy eligibility, OCR extraction, duplicate checks, compliance declarations, and payout timing for ${claim.vendor}.`;
}

function addLiveClaimBotMessage(text, delay = 520) {
  claimState.isThinking = true;
  renderClaimsAssistant();
  window.setTimeout(() => {
    claimState.isThinking = false;
    addClaimMessage("assistant", text);
    renderClaimsAssistant();
  }, delay);
}

function openClaimsAssistant() {
  if (!claimsAssistant) return;
  closeCardOverlay();
  closeWalletOverlay();
  closeMerchantDirectory();
  closeManageCardsOverlay();
  claimsAssistant.hidden = false;
  if (!claimState.messages.length) resetClaimJourney();
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

function goToClaimsView(view) {
  claimState.view = view;
  claimState.isThinking = false;
  renderClaimsAssistant();
}

function goToClaimsHome() {
  resetClaimJourney();
  renderClaimsAssistant();
}

function startTelephoneClaim() {
  claimState.selectedClaim = "telephone";
  claimState.view = "claimStart";
  claimState.messages = [
    { id: "start-1", role: "assistant", text: "Sure — let’s start your Telephone & Internet claim.", time: "9:41 AM" },
    { id: "start-2", role: "user", text: "<strong>Telephone claim</strong><br><span>Telephone & Internet</span>", time: "9:41 AM" },
    { id: "start-3", role: "assistant", text: "Great. Please upload your bill so I can extract the details and check policy compliance.", time: "9:41 AM" },
  ];
  renderClaimsAssistant();
}

function openUploadFlow(addMessage = false) {
  claimState.view = "upload";
  claimState.uploaded = false;
  claimState.scanningProgress = 0;
  if (addMessage) {
    claimState.messages = [
      { id: "upload-1", role: "assistant", text: "Upload your bill and I’ll extract vendor, amount, bill date, category, and account details.", time: "9:41 AM" },
    ];
  }
  renderClaimsAssistant();
}

function selectMockBill() {
  claimState.uploaded = true;
  renderClaimsAssistant();
}

function startMockScan() {
  claimState.view = "scanning";
  claimState.scanningProgress = 0;
  addClaimMessage("assistant", "I’m reading the bill and extracting the important details.");
  renderClaimsAssistant();
  const scanTimer = window.setInterval(() => {
    claimState.scanningProgress = Math.min(100, claimState.scanningProgress + 20);
    renderClaimsAssistant();
    if (claimState.scanningProgress >= 100) {
      window.clearInterval(scanTimer);
      window.setTimeout(() => {
        claimState.view = "extracted";
        addClaimMessage("assistant", "Here’s what I found. Please review the extracted details.");
        renderClaimsAssistant();
      }, 320);
    }
  }, 260);
  // Integration point: replace this timer with OCR/document AI progress events.
}

function confirmExtractedDetails() {
  claimState.view = "aiReview";
  addClaimMessage("user", "Looks correct");
  addClaimMessage("assistant", "I’ll now check policy limits, duplicates, required documents, and compliance declarations.");
  window.setTimeout(() => {
    addClaimMessage("assistant", "I’ve reviewed the bill details. Something similar may have already been submitted.", "warning");
    renderClaimsAssistant();
  }, 260);
  renderClaimsAssistant();
  // Integration point: call policy, duplicate, and compliance checks here.
}

function resolveDuplicateClaim(response = "Not a duplicate — different period.") {
  claimState.anomalyResolved = true;
  addClaimMessage("user", response);
  addClaimMessage("assistant", "Great, please confirm with a short declaration.");
  renderClaimsAssistant();
}

function toggleDeclaration(index) {
  claimState.declarationAccepted[index] = !claimState.declarationAccepted[index];
  renderClaimsAssistant();
}

function continueAfterDeclaration() {
  if (!claimState.declarationAccepted.every(Boolean)) {
    showToast("Please accept all declarations to continue");
    return;
  }
  claimState.view = "submitReady";
  addClaimMessage("assistant", "Thanks. I’ve recorded your clarification and declaration.", "success");
  renderClaimsAssistant();
}

function submitCanonicalClaim() {
  claimState.claimSubmitted = true;
  claimState.view = "track";
  claimState.trackStatus = "submitted";
  addClaimMessage("user", "Submit claim");
  addClaimMessage("assistant", "Your claim has been submitted successfully. We’ll keep you updated at every step.", "success");
  renderClaimsAssistant();
  // Integration point: replace this with a real claim submission API call.
}

function updateTrackStatus(status) {
  claimState.view = "track";
  claimState.trackStatus = status;
  renderClaimsAssistant();
}

function renderClaimsAssistant() {
  if (!claimsStatus || !claimsThread || !claimsWorkspace) return;
  claimsStatus.hidden = true;
  claimsThread.innerHTML = renderClaimsThread();
  claimsWorkspace.innerHTML = renderClaimsWorkspace();
  bindClaimsWorkspaceActions();
  syncClaimsComposer();
  window.requestAnimationFrame(() => {
    if (["home", "history", "dashboard", "detail"].includes(claimState.view)) {
      claimsScroll?.scrollTo({ top: 0, behavior: "auto" });
      return;
    }
    claimsScroll?.scrollTo({ top: claimsScroll.scrollHeight, behavior: "smooth" });
  });
}

function renderClaimsThread() {
  const shouldShowThread = !["history", "filteredHistory", "detail", "dashboard", "upload", "track"].includes(claimState.view);
  if (!shouldShowThread) return "";
  const messages = claimState.messages.map((message) => renderClaimMessage(message)).join("");
  return messages + (claimState.isThinking ? renderClaimMessage({ role: "assistant", text: `<span class="claims-mini-typing"><i></i><i></i><i></i></span>`, typing: true }) : "");
}

function renderClaimMessage(message) {
  const isUser = message.role === "user";
  const typingClass = message.typing ? " is-typing" : "";
  const variantClass = message.type ? ` is-${message.type}` : "";
  const time = message.time || "9:41 AM";
  return `
    <div class="claims-message-row ${isUser ? "user" : "bot"}">
      ${isUser ? "" : `<span class="claims-avatar" aria-hidden="true"><svg><use href="#icon-headset" /></svg></span>`}
      <div class="claims-message ${isUser ? "user" : "bot"}${typingClass}${variantClass}">
        <span class="claims-message-text">${message.text}</span>
        ${message.typing ? "" : `<span class="claims-message-meta">${time}${isUser ? `<svg aria-hidden="true"><use href="#icon-checks" /></svg>` : ""}</span>`}
      </div>
    </div>
  `;
}

function renderClaimsWorkspace() {
  if (claimState.view === "home") return renderClaimsHome();
  if (claimState.view === "claimStart") return renderClaimStartActions();
  if (claimState.view === "upload") return renderUploadScreen();
  if (claimState.view === "scanning") return renderScanningScreen();
  if (claimState.view === "extracted") return renderExtractedDetailsScreen();
  if (claimState.view === "aiReview") return renderAIReviewScreen();
  if (claimState.view === "submitReady") return renderSubmitReadyScreen();
  if (claimState.view === "track") return renderTrackClaimScreen();
  if (claimState.view === "history") return renderClaimHistoryScreen("All");
  if (claimState.view === "filteredHistory") return renderClaimHistoryScreen("Pending");
  if (claimState.view === "detail") return renderClaimDetailScreen();
  if (claimState.view === "dashboard") return renderClaimDashboardScreen();
  return renderClaimsHome();
}

function renderClaimsHome() {
  return `
    <section class="claims-home">
      ${renderClaimsQuickActions()}
      <div class="claims-prompt-section">
        <h3>Try asking me about</h3>
        <div class="claims-prompt-grid">
          ${claimsMockData.promptCards.map((card) => renderPromptCard(card)).join("")}
        </div>
      </div>
    </section>
  `;
}

function renderClaimsQuickActions() {
  const actions = [
    ["history", "History", "icon-receipt"],
    ["track", "Track claim", "icon-refresh"],
    ["dashboard", "Claim dashboard", "icon-grid"],
    ["policy", "Policy help", "icon-help"],
  ];
  return `
    <div class="claims-quick-action-grid" aria-label="Claims quick actions">
      ${actions.map(([action, label, icon]) => `
        <button type="button" class="claims-quick-action-card" data-claims-workspace-action="${action}">
          <span aria-hidden="true"><svg><use href="#${icon}" /></svg></span>
          <strong>${label}</strong>
        </button>
      `).join("")}
    </div>
  `;
}

function renderPromptCard(card) {
  const action = card.id === "telephone" ? "start-telephone" : card.id === "upload" ? "upload-start" : "policy";
  return `
    <button type="button" class="claims-prompt-card" data-claims-workspace-action="${action}">
      <span aria-hidden="true"><svg><use href="#${card.icon}" /></svg></span>
      <strong>${card.title}</strong>
      <small>${card.subtitle}</small>
    </button>
  `;
}

function renderClaimStartActions() {
  return `
    <section class="claims-upload-options-card">
      <h3>Upload your bill</h3>
      <div class="claims-upload-option-grid">
        ${[
          ["Upload bill", "From device", "icon-plus"],
          ["Take photo", "Use camera", "icon-eye"],
          ["Choose PDF", "Select file", "icon-receipt"],
        ].map(([title, subtitle, icon]) => `
          <button type="button" class="claims-upload-option" data-claims-workspace-action="upload-start">
            <span aria-hidden="true"><svg><use href="#${icon}" /></svg></span>
            <strong>${title}</strong>
            <small>${subtitle}</small>
          </button>
        `).join("")}
      </div>
    </section>
  `;
}

function renderClaimStepper(activeStep) {
  const steps = ["Upload", "Review", "Verify", "Submit"];
  return `
    <div class="claim-stepper" aria-label="Claim progress">
      ${steps.map((step, index) => {
        const stepNumber = index + 1;
        const isActive = stepNumber === activeStep;
        const isDone = stepNumber < activeStep;
        return `
          <span class="${isActive ? "is-active" : ""} ${isDone ? "is-done" : ""}">
            <i>${isDone ? "✓" : stepNumber}</i>
            <small>${step}</small>
          </span>
        `;
      }).join("")}
    </div>
  `;
}

function renderUploadScreen() {
  const claim = claimsMockData.canonicalClaim;
  return `
    <section class="claims-screen">
      ${renderClaimStepper(1)}
      <button type="button" class="upload-bill-card" data-claims-workspace-action="mock-upload">
        <span aria-hidden="true"><svg><use href="#icon-receipt" /></svg></span>
        <strong>Upload your bill</strong>
        <p>Drag & drop an image or PDF, or tap to browse</p>
        <small>JPG, PNG, PDF • Max 10MB</small>
      </button>
      ${claimState.uploaded ? renderBillPreviewCard() : ""}
      <div class="claims-tips-card">
        <strong>Tips for a better scan</strong>
        <span>✓ Ensure all edges are visible</span>
        <span>✓ No shadows or blur</span>
        <span>✓ Good lighting</span>
      </div>
      ${claimState.uploaded ? `<button type="button" class="wallet-overlay-cta claims-primary-action" data-claims-workspace-action="start-scan"><span class="wallet-overlay-cta-copy"><strong>Start scan</strong></span></button>` : ""}
      <p class="claims-integration-note">Mock upload selected: ${claim.uploadedDocument.name}. Real file validation and storage APIs plug in here.</p>
    </section>
  `;
}

function renderBillPreviewCard() {
  const doc = claimsMockData.canonicalClaim.uploadedDocument;
  return `
    <article class="bill-preview-card">
      <span aria-hidden="true"><svg><use href="#icon-receipt" /></svg></span>
      <div>
        <strong>${doc.name}</strong>
        <small>${doc.type} • ${doc.size}</small>
      </div>
      <button type="button" data-claims-workspace-action="mock-upload">Replace</button>
    </article>
  `;
}

function renderScanningScreen() {
  return `
    <section class="claims-screen">
      ${renderClaimStepper(1)}
      ${renderBillPreviewCard()}
      <article class="scanning-progress-card">
        <span class="claims-typing"><i></i><i></i><i></i></span>
        <div>
          <strong>Scanning your bill…</strong>
          <p>Extracting text and details</p>
        </div>
        <em>${claimState.scanningProgress}%</em>
        <span class="claims-progress-track"><i style="width: ${claimState.scanningProgress}%"></i></span>
      </article>
    </section>
  `;
}

function renderExtractedDetailsScreen() {
  return `
    <section class="claims-screen">
      ${renderClaimStepper(2)}
      ${renderExtractedDetailsCard()}
      <div class="claims-action-grid wallet-overlay-mode-switch">
        <button type="button" class="wallet-overlay-mode-button is-active" data-claims-workspace-action="confirm-details">Submit</button>
      </div>
    </section>
  `;
}

function renderExtractedDetailsCard() {
  const details = claimsMockData.canonicalClaim.extractedDetails;
  return `
    <section class="extracted-details-card claims-draft-card wallet-overlay-summary gift">
      <div class="claims-card-head wallet-overlay-section-head">
        <div>
          <span>Extracted details</span>
          <h3>Telephone & Internet</h3>
        </div>
        <small class="wallet-rail-pill is-active">Review</small>
      </div>
      ${[
        ["vendor", "Vendor", details.vendor],
        ["billDate", "Bill date", details.billDate],
        ["amount", "Amount", details.amount],
        ["category", "Category", details.category],
        ["accountNumber", "Account / Number", details.accountNumber],
      ].map(([field, label, value]) => renderExtractedDetailRow(field, label, value, details.confidenceByField[field] || "High")).join("")}
    </section>
  `;
}

function renderExtractedDetailRow(field, label, value, confidence) {
  const currentValue = claimState.manualDetails[field] || value;
  const dateValue = parseClaimDateValue(currentValue);
  return `
    <label class="claims-field-row transaction-item is-filled">
      <span class="transaction-icon" aria-hidden="true"><svg><use href="#icon-checks" /></svg></span>
      <span class="transaction-meta">
        <strong>${label} <em>${confidence}</em></strong>
        ${field === "billDate" ? `
          <span class="claims-detail-date-entry">
            <input value="${currentValue}" data-claims-field="${field}" data-claims-date-display aria-label="${label}" />
            <button type="button" class="claims-period-calendar claims-detail-calendar" data-claims-date-trigger aria-label="Update bill date">
              <svg aria-hidden="true"><use href="#icon-calendar" /></svg>
            </button>
            <input class="claims-period-picker" type="date" value="${dateValue}" data-claims-date-picker aria-label="${label}" />
          </span>
        ` : `<input value="${currentValue}" data-claims-field="${field}" aria-label="${label}" />`}
      </span>
    </label>
  `;
}

function parseClaimDateValue(value) {
  const match = String(value || "").match(/^(\d{1,2})\s+([A-Za-z]{3})\s+(\d{4})$/);
  if (!match) return "";
  const months = {
    Jan: "01",
    Feb: "02",
    Mar: "03",
    Apr: "04",
    May: "05",
    Jun: "06",
    Jul: "07",
    Aug: "08",
    Sep: "09",
    Oct: "10",
    Nov: "11",
    Dec: "12",
  };
  const month = months[match[2]];
  if (!month) return "";
  return `${match[3]}-${month}-${match[1].padStart(2, "0")}`;
}

function formatClaimDateValue(value) {
  if (!value) return "";
  const [year, month, day] = value.split("-");
  const date = new Date(Number(year), Number(month) - 1, Number(day));
  if (Number.isNaN(date.getTime())) return "";
  return date.toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" }).replace(",", "");
}

function renderAIReviewScreen() {
  return `
    <section class="claims-screen">
      ${renderClaimStepper(3)}
      ${renderPolicyReviewCard()}
      ${renderAnomalyCard(claimsMockData.canonicalClaim.anomalies[0])}
      ${claimState.anomalyResolved ? renderComplianceDeclarationCard() : renderQuickReplyChips(["Not a duplicate", "Yes, same bill", "Show me the other claim"])}
      <div class="claims-edge-scenarios">
        <button type="button" data-claims-workspace-action="edge-date">Bill date issue</button>
        <button type="button" data-claims-workspace-action="edge-ocr">Low OCR</button>
        <button type="button" data-claims-workspace-action="edge-usage">Personal usage</button>
        <button type="button" data-claims-workspace-action="edge-limit">Limit exceeded</button>
      </div>
    </section>
  `;
}

function renderPolicyReviewCard() {
  return `
    <article class="policy-review-card">
      <span aria-hidden="true"><svg><use href="#icon-refresh" /></svg></span>
      <div>
        <strong>AI policy review</strong>
        <p>Checking policy limits, duplicates, required documents, and compliance declarations.</p>
      </div>
    </article>
  `;
}

function renderAnomalyCard(anomaly) {
  if (anomaly.type === "dateWindow") {
    return `
      <article class="anomaly-card warning">
        <strong>${anomaly.title}</strong>
        <p>${anomaly.description}</p>
        <div class="claim-mini-card"><span>Detected bill date</span><strong>30 Apr 2024</strong><span>Allowed window: 1 May 2024 - Today</span></div>
        ${renderQuickReplyChips(["Attach proof", "It was missed earlier", "Provide explanation"])}
        ${claimState.supportingDocumentAttached ? renderSupportingDocumentUploadCard(true) : renderSupportingDocumentUploadCard(false)}
      </article>
    `;
  }
  if (anomaly.type === "lowConfidenceOCR") {
    return `
      <article class="anomaly-card danger">
        <strong>${anomaly.title}</strong>
        <p>${anomaly.description}</p>
        <ul><li>Vendor: Not detected</li><li>Amount: Unclear</li><li>Bill date: Detected</li></ul>
        <div class="claims-manual-grid">
          <input data-claims-field="vendor" placeholder="e.g., Airtel Broadband" value="${claimState.manualDetails.vendor}" />
          <input data-claims-field="amount" placeholder="e.g., 2,149" value="${claimState.manualDetails.amount}" />
          <input data-claims-field="billDate" placeholder="30 Apr 2026" value="${claimState.manualDetails.billDate}" />
        </div>
        ${renderQuickReplyChips(["Re-upload bill", "Enter manually"])}
      </article>
    `;
  }
  if (anomaly.type === "personalUsage") {
    return `
      <article class="anomaly-card danger">
        <strong>${anomaly.title}</strong>
        <p>${anomaly.description}</p>
        ${renderQuickReplyChips(["This is a work expense", "Mixed usage", "Not sure"])}
      </article>
    `;
  }
  if (anomaly.type === "limitExceeded") {
    return `
      <article class="anomaly-card warning">
        <strong>${anomaly.title}</strong>
        <p>${anomaly.description}</p>
        <div class="claims-metric-grid">
          <span><small>Claim amount</small><strong>₹12,149</strong></span>
          <span><small>Available limit</small><strong>₹9,100</strong></span>
          <span><small>Eligible</small><strong>₹9,100</strong></span>
          <span><small>Not eligible</small><strong>₹3,049</strong></span>
        </div>
        ${renderQuickReplyChips(["Submit eligible amount", "Edit amount", "Ask policy question"])}
      </article>
    `;
  }
  return `
    <article class="anomaly-card warning">
      <strong>${anomaly.title}</strong>
      <p>${anomaly.description}</p>
      <div class="claim-mini-card">
        <span>Similar claim</span>
        <strong>Claim ID: ${anomaly.similarClaim.id}</strong>
        <span>${anomaly.similarClaim.date} • ${anomaly.similarClaim.amount}</span>
      </div>
      <p>Is this the same bill? Please confirm it is not a duplicate and submit a declaration.</p>
    </article>
  `;
}

function renderQuickReplyChips(replies) {
  return `<div class="quick-reply-chips">${replies.map((reply) => `<button type="button" data-claims-reply="${reply}">${reply}</button>`).join("")}</div>`;
}

function renderSupportingDocumentUploadCard(isAttached) {
  return `
    <article class="supporting-document-card">
      <span aria-hidden="true"><svg><use href="#icon-receipt" /></svg></span>
      <div>
        <strong>${isAttached ? "Approval_Late_Claim.pdf" : "Attach prior approval"}</strong>
        <small>${isAttached ? "Uploaded • 9:42 AM" : "PDF, PNG, JPG accepted"}</small>
      </div>
      <button type="button" data-claims-workspace-action="attach-proof">${isAttached ? "Replace" : "Attach"}</button>
    </article>
  `;
}

function renderComplianceDeclarationCard() {
  const declarations = claimsMockData.canonicalClaim.declarations;
  return `
    <section class="compliance-declaration-card">
      <div class="claims-card-head wallet-overlay-section-head">
        <div>
          <span>Required action</span>
          <h3>Compliance declaration</h3>
        </div>
        <small class="wallet-rail-pill is-active">Required</small>
      </div>
      ${declarations.map((item, index) => `
        <label class="claims-checkbox-row">
          <input type="checkbox" ${claimState.declarationAccepted[index] ? "checked" : ""} data-claims-declaration="${index}" />
          <span>${item}</span>
        </label>
      `).join("")}
      <button type="button" class="wallet-overlay-cta claims-primary-action" ${claimState.declarationAccepted.every(Boolean) ? "" : "disabled"} data-claims-workspace-action="declaration-continue">
        <span class="wallet-overlay-cta-copy"><strong>I Agree & Continue</strong></span>
      </button>
      <small class="claims-helper-text">Continue is enabled after the declaration is accepted.</small>
    </section>
  `;
}

function renderSubmitReadyScreen() {
  return `
    <section class="claims-screen">
      ${renderClaimStepper(4)}
      <section class="claims-review-card wallet-overlay-summary gift">
        <span>Ready to submit</span>
        <h3>Telephone & Internet</h3>
        <div class="claims-review-amount"><span>Claim amount</span><strong>₹2,149</strong></div>
        <p>Clarification and declaration are recorded. Submit this claim for review.</p>
        <button type="button" class="wallet-overlay-cta claims-primary-action" data-claims-workspace-action="submit-claim">
          <span class="wallet-overlay-cta-copy"><strong>Submit claim</strong></span>
        </button>
      </section>
    </section>
  `;
}

function renderTrackClaimScreen() {
  const claim = claimsMockData.canonicalClaim;
  const statusCopy = {
    submitted: ["Your claim has been submitted successfully.", "We’ll keep you updated at every step."],
    pending: ["Your claim is under review.", "Our team and assistant are reviewing your claim. We may request more information if needed."],
    approved: ["Great news! Your claim is approved.", "It will be reimbursed in the next payout cycle."],
    reimbursed: ["Reimbursement successful!", "₹2,149 has been credited to your account."],
  };
  return `
    <section class="claims-screen">
      <div class="claims-subscreen-head"><h3>Track Claim</h3><button type="button" data-claims-workspace-action="home">Assistant home</button></div>
      <section class="claim-summary-card">
        <div><span>Claim ID</span><strong>${claim.id}</strong></div>
        <div><span>Category</span><strong>${claim.category}</strong></div>
        <div><span>Claim amount</span><strong>${claim.amount}</strong></div>
        <div><span>Submitted on</span><strong>${claim.submittedDate}</strong></div>
      </section>
      ${renderClaimStatusTimeline(claimState.trackStatus)}
      <article class="claim-status-note ${claimState.trackStatus}">
        <span aria-hidden="true"><svg><use href="#${claimState.trackStatus === "approved" || claimState.trackStatus === "reimbursed" ? "icon-checks" : "icon-headset"}" /></svg></span>
        <div><strong>${statusCopy[claimState.trackStatus][0]}</strong><p>${statusCopy[claimState.trackStatus][1]}</p></div>
      </article>
      ${claimState.trackStatus === "approved" ? renderApprovalSummary() : ""}
      <div class="claims-action-grid wallet-overlay-mode-switch">
        <button type="button" class="wallet-overlay-mode-button" data-claims-track="submitted">Submitted</button>
        <button type="button" class="wallet-overlay-mode-button" data-claims-track="pending">Pending review</button>
        <button type="button" class="wallet-overlay-mode-button" data-claims-track="approved">Approved</button>
        <button type="button" class="wallet-overlay-mode-button" data-claims-track="reimbursed">Reimbursed</button>
      </div>
    </section>
  `;
}

function renderApprovalSummary() {
  const claim = claimsMockData.canonicalClaim;
  return `
    <section class="approval-summary-card">
      <strong>Approval summary</strong>
      <span>Claim type: ${claim.category}</span>
      <span>Amount: ${claim.amount}</span>
      <span>Claim ID: ${claim.id}</span>
      <span>Approved on: ${claim.approvedDate}</span>
      <span>Payout: Paid in next cycle</span>
    </section>
  `;
}

function renderClaimStatusTimeline(activeStatus = "submitted") {
  const steps = [
    ["submitted", "Submitted", "30 Apr 2026, 9:41 AM"],
    ["pending", "Pending review", "30 Apr 2026, 10:15 AM"],
    ["approved", "Approved", "1 May 2026, 11:20 AM"],
    ["reimbursed", "Reimbursed", "5 May 2026, 2:45 PM"],
  ];
  const activeIndex = steps.findIndex(([id]) => id === activeStatus);
  return `
    <section class="claim-status-timeline">
      <h4>Claim status</h4>
      ${steps.map(([id, label, date], index) => `
        <article class="${index < activeIndex ? "is-complete" : ""} ${index === activeIndex ? "is-current" : ""}">
          <i>${index <= activeIndex ? "✓" : ""}</i>
          <div><strong>${label}</strong><span>${index <= activeIndex ? date : "Upcoming"}</span></div>
        </article>
      `).join("")}
    </section>
  `;
}

function renderClaimHistoryScreen(filter = "All") {
  const activeFilter = filter === "Pending" ? "Pending" : claimState.historyFilter;
  const search = claimState.historySearch.trim().toLowerCase();
  const claims = claimsMockData.history.filter((claim) => {
    const matchesFilter = activeFilter === "All" || claim.status === activeFilter;
    const matchesSearch = !search || `${claim.title} ${claim.vendor}`.toLowerCase().includes(search);
    return matchesFilter && matchesSearch;
  });
  return `
    <section class="claims-screen">
      <div class="claims-subscreen-head"><h3>Claim history</h3><button type="button" data-claims-workspace-action="home">Assistant home</button></div>
      <label class="claims-search-bar"><svg><use href="#icon-search" /></svg><input value="${claimState.historySearch}" placeholder="Search claims by category, vendor..." data-claims-history-search /></label>
      <div class="claims-filter-row">
        ${["All", "Pending", "Approved", "Rejected"].map((item) => `<button type="button" class="${activeFilter === item ? "active" : ""}" data-claims-filter="${item}">${item}</button>`).join("")}
      </div>
      ${activeFilter === "Pending" ? `<div class="claims-filter-summary"><strong>Pending (${claims.length})</strong><button type="button" data-claims-workspace-action="clear-filter">Clear filters</button></div>` : ""}
      <div class="claim-history-list">
        ${claims.length ? claims.map(renderClaimHistoryListItem).join("") : renderEmptyClaimsState(activeFilter === "All" ? "No claims yet" : "No claims match this filter")}
      </div>
    </section>
  `;
}

function renderClaimHistoryListItem(claim) {
  return `
    <button type="button" class="claim-history-item" data-claims-detail="${claim.id}">
      <span class="transaction-icon"><svg><use href="#${claim.icon}" /></svg></span>
      <span class="transaction-meta"><strong>${claim.title}</strong><span>${claim.vendor}</span></span>
      <span class="transaction-amount"><strong>${claim.amount}</strong><span>${claim.date}</span>${renderStatusBadge(claim.status)}</span>
    </button>
  `;
}

function renderEmptyClaimsState(copy) {
  return `<article class="claims-empty-inline"><strong>${copy}</strong><button type="button" data-claims-workspace-action="start-telephone">Start a claim</button></article>`;
}

function renderClaimDetailScreen() {
  const claim = claimsMockData.canonicalClaim;
  return `
    <section class="claims-screen">
      <div class="claims-subscreen-head"><h3>Claim details</h3><button type="button" data-claims-workspace-action="home">Assistant home</button></div>
      <section class="claim-detail-summary">
        ${renderStatusBadge("Approved")}
        <div class="claim-detail-title"><div><strong>${claim.category}</strong><span>${claim.vendor}</span></div><strong>${claim.amount}</strong></div>
        <small>${claim.id}</small>
        <div class="claims-detail-chip-row"><span>Bill date<br><strong>${claim.billDate}</strong></span><span>Vendor<br><strong>${claim.vendor}</strong></span><span>Category<br><strong>${claim.category}</strong></span></div>
      </section>
      ${renderClaimStatusTimeline("approved")}
      <article class="supporting-document-card">
        <span aria-hidden="true"><svg><use href="#icon-receipt" /></svg></span>
        <div><strong>airtel-broadband-bill-apr.pdf</strong><small>Uploaded on 30 Apr 2026</small></div>
        <button type="button" data-toast="Document preview opened">View</button>
      </article>
      <section class="decision-summary-card"><strong>Decision summary</strong><p>${claim.decisionSummary}</p><button type="button" data-claims-workspace-action="thread">View full thread</button></section>
    </section>
  `;
}

function renderClaimDashboardScreen() {
  const dashboard = claimsMockData.dashboard;
  return `
    <section class="claims-screen">
      <div class="claims-subscreen-head"><h3>Claim dashboard</h3><button type="button" data-claims-workspace-action="home">Assistant home</button></div>
      <section class="dashboard-balance-card">
        <span>Total reimbursement balance</span>
        <strong>${dashboard.totalBalance}</strong>
        <div><p><small>Available balance</small><b>${dashboard.availableBalance}</b></p><p><small>Pending payouts</small><b>${dashboard.pendingPayouts}</b></p></div>
      </section>
      <section class="dashboard-month-card"><span>This month: Apr 2026</span><div><p><b>${dashboard.monthlyTotalClaims}</b><small>Total claims</small></p><p><b>${dashboard.monthlyClaimedAmount}</b><small>Claimed amount</small></p><p><b>${dashboard.monthlyReimbursedAmount}</b><small>Reimbursed</small></p></div></section>
      <div class="dashboard-metric-grid">${dashboard.statusCounts.map((metric) => renderMetricCard(metric)).join("")}</div>
      <section class="dashboard-chart-card">
        <h4>Status analytics</h4>
        <div class="claims-donut" aria-hidden="true"><span>12<br><small>Total</small></span></div>
        <div class="dashboard-insights"><p>Average approval time <strong>2.4 days</strong></p><p>Pending payout amount <strong>${dashboard.pendingPayouts}</strong></p><p>Approved this month <strong>5</strong></p></div>
      </section>
      <section class="dashboard-activity-card"><h4>Recent activity</h4>${dashboard.recentActivity.map((item) => `<article><span>${item.vendor}<small>${item.meta}</small></span><strong>${item.amount}<em>${item.status}</em></strong></article>`).join("")}</section>
      <section class="dashboard-activity-card"><h4>Upcoming reimbursements</h4><article><span>2 payouts scheduled<small>Next payout on 07 May 2026</small></span><strong>${dashboard.pendingPayouts}</strong></article></section>
      <div class="dashboard-action-list">${[["Start a claim", "start-telephone"], ["Track claim", "track"], ["View history", "history"], ["Ask policy question", "policy"]].map(([label, action]) => `<button type="button" data-claims-workspace-action="${action}">${label}<svg><use href="#icon-arrow-right" /></svg></button>`).join("")}</div>
    </section>
  `;
}

function renderMetricCard(metric) {
  return `<article class="metric-card ${metric.status}"><span>${metric.label}</span><strong>${metric.count}</strong><small>${metric.amount}</small></article>`;
}

function renderStatusBadge(status) {
  const key = status.toLowerCase().replace(/\s+/g, "-");
  return `<span class="status-badge ${key}">${status}</span>`;
}

function bindClaimsWorkspaceActions() {
  claimsWorkspace?.querySelectorAll("[data-claims-workspace-action]").forEach((button) => {
    button.addEventListener("click", () => handleClaimsAction(button.dataset.claimsWorkspaceAction));
  });
  claimsWorkspace?.querySelectorAll("[data-claims-reply]").forEach((button) => {
    button.addEventListener("click", () => handleClaimsReply(button.dataset.claimsReply));
  });
  claimsWorkspace?.querySelectorAll("[data-claims-declaration]").forEach((input) => {
    input.addEventListener("change", () => toggleDeclaration(Number(input.dataset.claimsDeclaration)));
  });
  claimsWorkspace?.querySelectorAll("[data-claims-field]").forEach((input) => {
    input.addEventListener("input", () => {
      claimState.manualDetails[input.dataset.claimsField] = input.value;
    });
  });
  claimsWorkspace?.querySelectorAll("[data-claims-date-display]").forEach((input) => {
    input.addEventListener("click", () => {
      const picker = input.closest(".claims-detail-date-entry")?.querySelector("[data-claims-date-picker]");
      picker?.showPicker?.();
    });
  });
  claimsWorkspace?.querySelectorAll("[data-claims-date-trigger]").forEach((button) => {
    button.addEventListener("click", () => {
      const picker = button.closest(".claims-detail-date-entry")?.querySelector("[data-claims-date-picker]");
      picker?.showPicker?.();
    });
  });
  claimsWorkspace?.querySelectorAll("[data-claims-date-picker]").forEach((picker) => {
    picker.addEventListener("change", () => {
      const dateEntry = picker.closest(".claims-detail-date-entry");
      const displayInput = dateEntry?.querySelector("[data-claims-date-display]");
      const formattedDate = formatClaimDateValue(picker.value);
      if (!displayInput || !formattedDate) return;
      displayInput.value = formattedDate;
      claimState.manualDetails.billDate = formattedDate;
    });
  });
  claimsWorkspace?.querySelectorAll("[data-claims-track]").forEach((button) => {
    button.addEventListener("click", () => updateTrackStatus(button.dataset.claimsTrack));
  });
  claimsWorkspace?.querySelectorAll("[data-claims-filter]").forEach((button) => {
    button.addEventListener("click", () => {
      claimState.historyFilter = button.dataset.claimsFilter;
      claimState.view = button.dataset.claimsFilter === "Pending" ? "filteredHistory" : "history";
      renderClaimsAssistant();
    });
  });
  claimsWorkspace?.querySelectorAll("[data-claims-history-search]").forEach((input) => {
    input.addEventListener("input", () => {
      claimState.historySearch = input.value;
      renderClaimsAssistant();
    });
  });
  claimsWorkspace?.querySelectorAll("[data-claims-detail]").forEach((button) => {
    button.addEventListener("click", () => {
      claimState.selectedHistoryId = button.dataset.claimsDetail;
      goToClaimsView("detail");
    });
  });
}

function handleClaimsReply(reply) {
  if (reply === "Not a duplicate") resolveDuplicateClaim("Not a duplicate — different period.");
  else if (reply === "Attach proof") {
    claimState.supportingDocumentAttached = true;
    addClaimMessage("user", "Attaching email approval for late claim.");
    addClaimMessage("assistant", "Thanks! I’ll review the approval and update the claim.");
    renderClaimsAssistant();
  } else if (reply === "This is a work expense") {
    resolveDuplicateClaim("This is a work expense.");
  } else {
    addClaimMessage("user", reply);
    addLiveClaimBotMessage(getClaimAssistantReply(reply), 420);
  }
}

function handleClaimsAction(action) {
  if (action === "home") goToClaimsHome();
  if (action === "history") goToClaimsView("history");
  if (action === "track") goToClaimsView("track");
  if (action === "dashboard") goToClaimsView("dashboard");
  if (action === "start-telephone") startTelephoneClaim();
  if (action === "upload" || action === "upload-start") openUploadFlow(action === "upload");
  if (action === "mock-upload") selectMockBill();
  if (action === "start-scan") startMockScan();
  if (action === "confirm-details") confirmExtractedDetails();
  if (action === "edit-details") showToast("Fields are editable inline");
  if (action === "declaration-continue") continueAfterDeclaration();
  if (action === "submit-claim") submitCanonicalClaim();
  if (action === "clear-filter") {
    claimState.historyFilter = "All";
    claimState.historySearch = "";
    goToClaimsView("history");
  }
  if (action === "thread") {
    claimState.messages = [
      { role: "assistant", text: "Here is the full thread for this Airtel Broadband claim. The duplicate concern was resolved with your declaration.", time: "9:41 AM" },
      { role: "user", text: "Not a duplicate — different period.", time: "9:42 AM" },
      { role: "assistant", text: "All checks passed and the claim was approved.", time: "9:43 AM", type: "success" },
    ];
    goToClaimsView("aiReview");
  }
  if (action === "policy") addLiveClaimBotMessage("I can explain eligible categories, duplicate checks, reimbursement windows, available balance, and required declarations.", 420);
  if (action?.startsWith("edge-")) {
    const map = { "edge-date": 1, "edge-ocr": 2, "edge-usage": 3, "edge-limit": 4 };
    addClaimMessage("assistant", "Here’s another possible edge scenario the assistant can handle.", "warning");
    claimsWorkspace.innerHTML = `<section class="claims-screen">${renderClaimStepper(3)}${renderAnomalyCard(claimsMockData.canonicalClaim.anomalies[map[action]])}</section>`;
    bindClaimsWorkspaceActions();
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

function initializeTapPayDiscovery() {
  if (!tapPayDiscovery) return;

  window.requestAnimationFrame(() => {
    tapPayDiscovery.classList.add("is-visible");
  });

  tapPayDiscovery.addEventListener("click", () => {
    const tapWallet = Array.from(walletButtons).find((button) =>
      (button.dataset.walletActions || "")
        .split(",")
        .map((value) => value.trim())
        .includes("tap")
    );
    if (tapWallet) {
      openWalletOverlay(tapWallet);
      return;
    }
    showToast("Tap & Pay settings opened");
  });
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
  const statusKey = item.status ? item.status.toLowerCase().replace(/\s+/g, "-") : "";
  const status = item.status ? `<span class="transaction-status ${statusKey}">${item.status}</span>` : "";
  article.innerHTML = `
    <span class="transaction-icon" aria-hidden="true"><svg><use href="#${item.icon || "icon-arrow-right"}" /></svg></span>
    <span class="transaction-meta">
      <strong>${item.merchant}</strong>
      <span>${item.reference}</span>
    </span>
    <span class="transaction-amount${item.positive ? " positive" : ""}">
      <strong>${item.amount}</strong>
      <span>${item.date}</span>
      ${status}
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

function createMerchantItem(item, hasExtraBottomSpace = false) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "merchant-directory-item";
  if (hasExtraBottomSpace) button.classList.add("has-extra-bottom-space");
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

function renderManageWalletState() {
  const state = manageWalletState[activeManageWalletKey];
  if (!state) return;

  const progress = Math.round((state.limitUsed / state.limitTotal) * 100);
  const onlineEnabled = Boolean(state.online);
  const frozen = Boolean(state.frozen);

  if (manageWalletType) manageWalletType.textContent = state.label;
  if (manageFreezeTitle) manageFreezeTitle.textContent = `Freeze ${state.label}`;
  if (manageFreezeCopy) manageFreezeCopy.textContent = frozen ? `${state.label} is frozen` : `Pause ${state.label} instantly`;
  manageFreezeButton?.classList.toggle("is-enabled", frozen);
  manageFreezeButton?.setAttribute("aria-pressed", String(frozen));
  manageFreezeButton?.querySelector(".manage-cards-toggle")?.setAttribute("aria-checked", String(frozen));
  if (manageAccessCopy) manageAccessCopy.textContent = state.accessCopy;
  if (manageAccessValue) manageAccessValue.textContent = state.accessValue;
  if (manageOnlineCopy) manageOnlineCopy.textContent = `Online merchant transactions ${onlineEnabled ? "enabled" : "disabled"}`;
  manageOnlineButton?.classList.toggle("is-enabled", onlineEnabled);
  manageOnlineButton?.setAttribute("aria-pressed", String(onlineEnabled));
  manageOnlineButton?.querySelector(".manage-cards-toggle")?.setAttribute("aria-checked", String(onlineEnabled));
  if (manageLimitCopy) manageLimitCopy.textContent = `${formatCurrency(state.limitUsed)} of ${formatCurrency(state.limitTotal)}`;
  if (manageLimitValue) manageLimitValue.textContent = `${progress}% used`;
  if (manageLimitUsed) manageLimitUsed.textContent = `${formatCurrency(state.limitUsed)} used`;
  if (manageLimitTotal) manageLimitTotal.textContent = `${formatCurrency(state.limitTotal)} limit`;
  if (manageLimitProgress) manageLimitProgress.style.width = `${progress}%`;
  if (manageStatusCopy) manageStatusCopy.textContent = "Your card is active and ready to use";
  if (managePreviewNumber) managePreviewNumber.textContent = state.reveal.number ? state.card.number : "**** **** **** 7845";
  if (managePreviewHolder) managePreviewHolder.textContent = state.card.holder;
  if (managePreviewExpiry) managePreviewExpiry.textContent = state.card.expiry;
  manageSensitiveFields.forEach((field) => {
    const key = field.dataset.cardSensitive;
    if (key === "number") field.textContent = state.reveal.number ? state.card.number : `**** **** **** ${state.card.last4}`;
    if (key === "holder") field.textContent = state.card.holder;
    if (key === "expiry") field.textContent = state.card.expiry;
    if (key === "cvv") field.textContent = state.reveal.cvv ? state.card.cvv : "•••";
  });
  manageRevealButtons.forEach((button) => {
    const key = button.dataset.cardReveal;
    if (!Object.prototype.hasOwnProperty.call(state.reveal, key)) return;
    button.setAttribute("aria-label", `${state.reveal[key] ? "Hide" : "Reveal"} ${key === "cvv" ? "CVV" : "card number"}`);
  });
  manageWalletButtons.forEach((button) => {
    const walletState = manageWalletState[button.dataset.walletKey];
    const statusBadge = button.querySelector(".manage-cards-status-badge");
    button.classList.toggle("is-frozen", Boolean(walletState?.frozen));
    if (statusBadge) statusBadge.textContent = walletState?.frozen ? "Frozen" : "Active";
  });
}

function selectManageWallet(button, announce = true) {
  activeManageWalletKey = button.dataset.walletKey || "meal";
  const state = manageWalletState[activeManageWalletKey] || manageWalletState.meal;
  const selectedIndex = Math.max(0, Array.from(manageWalletButtons).indexOf(button));

  manageWalletButtons.forEach((walletButton, index) => {
    const isSelected = walletButton === button;
    walletButton.classList.toggle("is-selected", isSelected);
    walletButton.setAttribute("aria-pressed", String(isSelected));
    manageWalletDots[index]?.classList.toggle("is-active", isSelected);
  });
  if (manageWalletCount) manageWalletCount.textContent = `${selectedIndex + 1}/${manageWalletButtons.length}`;

  renderManageWalletState();
  if (announce) showToast(`${state.label} selected`);
}

manageWalletButtons.forEach((button) => {
  button.addEventListener("click", () => {
    selectManageWallet(button);
    button.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
  });
});

manageWalletDots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    const targetWallet = manageWalletButtons[index];
    if (!targetWallet) return;
    selectManageWallet(targetWallet);
    targetWallet.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
  });
});

manageWalletCarousel?.addEventListener("scroll", () => {
  window.clearTimeout(manageWalletCarousel.scrollTimer);
  manageWalletCarousel.scrollTimer = window.setTimeout(() => {
    const carouselCenter = manageWalletCarousel.getBoundingClientRect().left + manageWalletCarousel.clientWidth / 2;
    const nearestButton = Array.from(manageWalletButtons).reduce((nearest, button) => {
      const currentRect = button.getBoundingClientRect();
      const nearestRect = nearest.getBoundingClientRect();
      const currentDistance = Math.abs(currentRect.left + currentRect.width / 2 - carouselCenter);
      const nearestDistance = Math.abs(nearestRect.left + nearestRect.width / 2 - carouselCenter);
      return currentDistance < nearestDistance ? button : nearest;
    }, manageWalletButtons[0]);
    if (nearestButton && !nearestButton.classList.contains("is-selected")) selectManageWallet(nearestButton, false);
  }, 90);
});

manageOnlineButton?.addEventListener("click", () => {
  const state = manageWalletState[activeManageWalletKey];
  if (!state) return;
  state.online = !state.online;
  renderManageWalletState();
  showToast(`${state.label} online transactions ${state.online ? "enabled" : "disabled"}`);
});

manageFreezeButton?.addEventListener("click", () => {
  const state = manageWalletState[activeManageWalletKey];
  if (!state) return;
  state.frozen = !state.frozen;
  renderManageWalletState();
  showToast(`${state.label} ${state.frozen ? "frozen" : "unfrozen"}`);
});

function formatCurrency(value) {
  return `₹${Number(value).toLocaleString("en-IN")}`;
}

manageRevealButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const state = manageWalletState[activeManageWalletKey];
    const key = button.dataset.cardReveal;
    if (!state || !Object.prototype.hasOwnProperty.call(state.reveal, key)) return;
    state.reveal[key] = !state.reveal[key];
    button.setAttribute("aria-label", `${state.reveal[key] ? "Hide" : "Reveal"} ${key === "cvv" ? "CVV" : "card number"}`);
    renderManageWalletState();
  });
});
renderManageWalletState();

claimsOpenButton?.addEventListener("click", () => {
  openClaimsAssistant();
});

claimsCloseButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (claimState.view && claimState.view !== "home") {
      goToClaimsHome();
      return;
    }
    closeClaimsAssistant();
  });
});

claimsActionButtons.forEach((button) => {
  button.addEventListener("click", () => handleClaimsAction(button.dataset.claimsAction));
});

claimsSendButton?.addEventListener("click", () => {
  const text = claimsInput?.value.trim();
  if (!text) return;
  addClaimMessage("user", text);
  claimsInput.value = "";
  syncClaimsComposer();
  addLiveClaimBotMessage(getClaimAssistantReply(text), 720);
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
  content.merchants.forEach((item, index) => {
    merchantDirectoryList.append(createMerchantItem(item, index === content.merchants.length - 1));
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
  showToast("Manage Wallets opened");
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
    if (walletTone === "meal" && actionKey === "tap") return;
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

balanceCard?.addEventListener("click", (event) => {
  if (document.body.classList.contains("is-pluspay")) return;
  if (event.target.closest("[data-virtual-card-toggle]")) return;
  virtualCardToggle?.click();
});

overlayCloseButtons.forEach((button) => {
  button.addEventListener("click", closeCardOverlay);
});

walletButtons.forEach((button) => {
  button.addEventListener("click", () => {
    openWalletOverlay(button);
  });
});

initializeTapPayDiscovery();

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
