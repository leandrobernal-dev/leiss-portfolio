import React from "react";
import $ from "jquery";

import ScrollToElement from "./scrollToElement";

import logo from "../assets/images/logo2.svg";

export default function Header() {
  const [menuShow, setMenuShow] = React.useState(false);
  function showMenu() {
    $("menu")[0].classList.toggle("show-menu");
    setMenuShow(!menuShow);
  }

  window.addEventListener("scroll", () => {
    if (window.scrollY > 70) {
      $("header")[0].classList.add("fixed-header");
    } else {
      $("header")[0].classList.remove("fixed-header");
    }
  });

  const [scroll, setScroll] = React.useState(window.scrollY);
  React.useEffect(() => {
    const sections = document.querySelectorAll("section");
    const links = document.querySelectorAll("nav a");
    sections.forEach((section) => {
      const pos = section.getBoundingClientRect().y;
      const offset = section.offsetHeight / 2;

      if (pos < offset) {
        links.forEach((link) => {
          link.classList.remove("active-nav");
          if (link.getAttribute("href") === "#" + section.id) {
            link.classList.add("active-nav");
          }
        });
      }
    });
  }, [scroll]);

  window.onscroll = () => {
    setScroll(window.scrollY);
  };
  return (
    <header>
      <nav>
        <img alt="leiss designs logo" className="logo" src={logo} />
        <menu>
          <ul>
            <li>
              <a onClick={ScrollToElement} href="#home">
                home
              </a>
            </li>
            <li>
              <a onClick={ScrollToElement} href="#about">
                about me
              </a>
            </li>
            <li>
              <a onClick={ScrollToElement} href="#services">
                my services
              </a>
            </li>
            <li>
              <a onClick={ScrollToElement} href="#projects">
                projects
              </a>
            </li>
            <li>
              <a onClick={ScrollToElement} href="#contact">
                contact me
              </a>
            </li>
          </ul>
        </menu>
        <i
          onClick={showMenu}
          className={
            menuShow
              ? "fa-solid fa-xmark menu-btn"
              : "fa-solid fa-bars menu-btn"
          }
        ></i>
      </nav>
    </header>
  );
}
