function init() {
  document.querySelectorAll<HTMLElement>("[data-faq-item]").forEach((item) => {
    const button = item.querySelector<HTMLButtonElement>("[data-faq-trigger]");
    const panel = item.querySelector<HTMLElement>("[data-faq-panel]");
    if (!button || !panel) return;

    button.addEventListener("click", () => {
      const open = item.dataset.open === "true";
      if (open) {
        delete item.dataset.open;
        button.setAttribute("aria-expanded", "false");
      } else {
        item.dataset.open = "true";
        button.setAttribute("aria-expanded", "true");
      }
    });
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}

export {};
