const toastRegion = document.querySelector("[data-toast-region]");
const filterButtons = document.querySelectorAll("[data-filter]");
const transactions = document.querySelectorAll("[data-wallet]");
const virtualCardToggle = document.querySelector("[data-virtual-card-toggle]");
const cardOverlay = document.querySelector("[data-card-overlay]");
const overlayCloseButtons = document.querySelectorAll("[data-card-overlay-close]");
const walletButtons = document.querySelectorAll("[data-wallet-card]");
const toastButtons = document.querySelectorAll("[data-toast]");
const pluspayToggle = document.querySelector("[data-pluspay-toggle]");

let toastTimer;

function showToast(message) {
  if (!toastRegion) return;
  window.clearTimeout(toastTimer);
  toastRegion.textContent = message;
  toastRegion.classList.add("is-visible");
  toastTimer = window.setTimeout(() => {
    toastRegion.classList.remove("is-visible");
  }, 2200);
}

toastButtons.forEach((button) => {
  button.addEventListener("click", () => {
    showToast(button.dataset.toast);
  });
});

pluspayToggle?.addEventListener("click", () => {
  const nextState = pluspayToggle.getAttribute("aria-pressed") !== "true";
  pluspayToggle.setAttribute("aria-pressed", String(nextState));
  showToast(nextState ? "Pluspay enabled" : "Pluspay disabled");
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

virtualCardToggle?.addEventListener("click", () => {
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
    walletButtons.forEach((wallet) => {
      wallet.classList.remove("is-active");
      wallet.setAttribute("aria-pressed", "false");
    });
    button.classList.add("is-active");
    button.setAttribute("aria-pressed", "true");
    showToast(button.dataset.walletCta);
  });
});

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeCardOverlay();
  }
});
