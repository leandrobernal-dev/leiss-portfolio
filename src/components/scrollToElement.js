import $ from "jquery";

export default function ScrollToElement(e) {
  e.preventDefault();
  const ePos = $(e.target.getAttribute("href"))[0].offsetTop;
  window.scrollTo({
    top: ePos - 70,
    behavior: "smooth",
  });
}
