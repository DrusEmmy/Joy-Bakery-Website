// window.alert("hello");
const WA_NUMBER = "2347046738087"; // digits only, confirm with her

document.querySelectorAll("[data-wa-msg]").forEach((el) => {
  const msg = el.dataset.waMsg;
  el.href =
    `https://wa.me/${WA_NUMBER}` +
    (msg ? `?text=${encodeURIComponent(msg)}` : "");
  el.target = "_blank";
  el.rel = "noopener";
});

const carousels = document.querySelectorAll(".carousel");

carousels.forEach((carousel) => {
  const track = carousel.querySelector(".carousel__track");
  const prevBtn = carousel.querySelector(".carousel__btn--prev");
  const nextBtn = carousel.querySelector(".carousel__btn--next");

  if (!track || !prevBtn || !nextBtn) return;

  const updateButtons = () => {
    const hasOverflow = track.scrollWidth > track.clientWidth + 1;

    if (!hasOverflow) {
      prevBtn.hidden = true;
      nextBtn.hidden = true;
      return;
    }

    const atStart = track.scrollLeft <= 2;
    const atEnd = track.scrollLeft + track.clientWidth >= track.scrollWidth - 2;

    prevBtn.hidden = atStart;
    nextBtn.hidden = atEnd;
  };

  const getScrollAmount = () => {
    const firstCard = track.firstElementChild;
    if (!firstCard) return track.clientWidth * 0.8;

    const gap = parseFloat(getComputedStyle(track).gap) || 0;
    return firstCard.offsetWidth + gap;
  };

  prevBtn.addEventListener("click", () => {
    track.scrollBy({ left: -getScrollAmount(), behavior: "smooth" });
  });

  nextBtn.addEventListener("click", () => {
    track.scrollBy({ left: getScrollAmount(), behavior: "smooth" });
  });

  track.addEventListener("scroll", updateButtons, { passive: true });
  window.addEventListener("resize", updateButtons);
  window.addEventListener("load", updateButtons);

  updateButtons();
});

const menuWrap = document.getElementById("header__button");
const burger = document.getElementById("header__button--hamburger");

const setMenu = (open) => {
  menuWrap.classList.toggle("is-open", open);
  burger.setAttribute("aria-expanded", String(open));
  burger.setAttribute("aria-label", open ? "Close menu" : "Open menu");
};

burger.addEventListener("click", () =>
  setMenu(!menuWrap.classList.contains("is-open")),
);
document
  .querySelectorAll("#header__nav-box a")
  .forEach((a) => a.addEventListener("click", () => setMenu(false)));
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") setMenu(false);
});
document.addEventListener("click", (e) => {
  if (!menuWrap.contains(e.target)) setMenu(false);
});
window.matchMedia("(min-width: 64rem)").addEventListener("change", (e) => {
  if (e.matches) setMenu(false);
});
