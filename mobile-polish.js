(function () {
  function ensureMobileShell() {
    var sidebar = document.querySelector(".sidebar");
    var topbar = document.querySelector(".topbar");
    if (!sidebar || !topbar) return;

    var backdrop = document.querySelector(".drawer-backdrop");
    if (!backdrop) {
      backdrop = document.createElement("div");
      backdrop.className = "drawer-backdrop";
      document.body.appendChild(backdrop);
      backdrop.addEventListener("click", closeMenu);
    }

    var button = topbar.querySelector(".mobile-menu-btn");
    if (!button) {
      button = document.createElement("button");
      button.type = "button";
      button.className = "mobile-menu-btn";
      button.setAttribute("aria-label", "Abrir menu");
      button.textContent = "☰";
      topbar.insertBefore(button, topbar.firstChild);
      button.addEventListener("click", openMenu);
    }

    sidebar.querySelectorAll(".sb-btn").forEach(function (item) {
      if (item.dataset.mobilePolished) return;
      item.dataset.mobilePolished = "1";
      item.addEventListener("click", closeMenu);
    });

    var user = sidebar.querySelector(".sb-user");
    if (user && !user.dataset.mobilePolished) {
      user.dataset.mobilePolished = "1";
      user.addEventListener("click", closeMenu);
    }

    var publicButton = Array.from(sidebar.querySelectorAll("button")).find(function (item) {
      return item.textContent.indexOf("Horários para cliente") !== -1;
    });
    if (publicButton && !publicButton.dataset.mobilePolished) {
      publicButton.dataset.mobilePolished = "1";
      publicButton.addEventListener("click", closeMenu);
    }
  }

  function openMenu() {
    var sidebar = document.querySelector(".sidebar");
    var backdrop = document.querySelector(".drawer-backdrop");
    if (sidebar) {
      sidebar.classList.add("open");
      sidebar.style.transform = "translateX(0)";
    }
    if (backdrop) backdrop.classList.add("show");
    document.body.style.overflow = "hidden";
  }

  function closeMenu() {
    var sidebar = document.querySelector(".sidebar");
    var backdrop = document.querySelector(".drawer-backdrop");
    if (sidebar) {
      sidebar.classList.remove("open");
      sidebar.style.transform = "translateX(-104%)";
    }
    if (backdrop) backdrop.classList.remove("show");
    document.body.style.overflow = "";
  }

  var observer = new MutationObserver(ensureMobileShell);
  observer.observe(document.documentElement, { childList: true, subtree: true });
  window.addEventListener("resize", function () {
    if (window.innerWidth > 960) closeMenu();
  });
  document.addEventListener("DOMContentLoaded", ensureMobileShell);
  setInterval(ensureMobileShell, 800);
  ensureMobileShell();
})();
