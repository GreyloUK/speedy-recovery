function init() {
  const items = document.querySelectorAll<HTMLElement>("[data-has-sub]");
  if (!items.length) return;

  const closeAll = (except?: HTMLElement) => {
    items.forEach((el) => {
      if (el === except) return;
      delete el.dataset.open;
      el.querySelector<HTMLButtonElement>("[data-dropdown-toggle]")?.setAttribute(
        "aria-expanded",
        "false",
      );
    });
  };

  items.forEach((item) => {
    const toggle = item.querySelector<HTMLButtonElement>("[data-dropdown-toggle]");
    if (!toggle) return;

    toggle.addEventListener("click", (e) => {
      e.preventDefault();
      const isOpen = item.dataset.open === "true";
      closeAll(item);
      if (isOpen) {
        delete item.dataset.open;
        toggle.setAttribute("aria-expanded", "false");
      } else {
        item.dataset.open = "true";
        toggle.setAttribute("aria-expanded", "true");
      }
    });
  });

  document.addEventListener("click", (e) => {
    const target = e.target as Node;
    const openItem = document.querySelector<HTMLElement>('[data-has-sub][data-open="true"]');
    if (openItem && !openItem.contains(target)) closeAll();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeAll();
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}

export {};
