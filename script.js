  const bar = document.getElementById("bar");
  const nav = document.getElementById("navbar");
  const close = document.getElementById("close");

  bar.addEventListener("click", () => {
    nav.classList.add("active");
    document.body.classList.add("menu-open");  // prevent horizontal scroll
  });

  close.addEventListener("click", () => {
    nav.classList.remove("active");
    document.body.classList.remove("menu-open");
  });


