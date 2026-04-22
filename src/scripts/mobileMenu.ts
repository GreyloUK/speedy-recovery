function init() {
  const toggle = document.querySelector<HTMLButtonElement>("[data-mobile-menu-toggle]");
  const menu = document.querySelector<HTMLElement>("[data-mobile-menu]");
  const closeBtns = document.querySelectorAll<HTMLButtonElement>("[data-mobile-menu-close]");

  if (!toggle || !menu) return;

  const open = () => {
    menu.dataset.open = "true";
    toggle.setAttribute("aria-expanded", "true");
    document.documentElement.style.overflow = "hidden";
  };
  const close = () => {
    delete menu.dataset.open;
    toggle.setAttribute("aria-expanded", "false");
    document.documentElement.style.overflow = "";
  };

  toggle.addEventListener("click", () => {
    menu.dataset.open === "true" ? close() : open();
  });
  closeBtns.forEach((btn) => btn.addEventListener("click", close));

  menu.querySelectorAll("a").forEach((a) => a.addEventListener("click", close));

  menu.querySelectorAll<HTMLButtonElement>("[data-mm-expand]").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const group = btn.closest<HTMLElement>("[data-mm-group]");
      if (!group) return;
      const isOpen = group.dataset.open === "true";
      if (isOpen) {
        delete group.dataset.open;
        btn.setAttribute("aria-expanded", "false");
      } else {
        group.dataset.open = "true";
        btn.setAttribute("aria-expanded", "true");
      }
    });
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") close();
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}

export {};
