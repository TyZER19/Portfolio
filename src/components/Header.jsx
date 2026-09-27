import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function Header({ activeSection }) {
  const { i18n, t } = useTranslation();

  const switchLang = (lang) => {
    i18n.changeLanguage(lang);
  };

  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  const switchTheme = () => {
    setDarkMode((prev) => !prev);
  };

  useEffect(() => {
    const root = document.documentElement;

    if (darkMode) {
      root.classList.add("dark-theme");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark-theme");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const [showNav, setShowNav] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setShowNav(false);
      } else {
        setShowNav(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={showNav ? "navbar" : "navbar hidden"}>
      <section className="header__section">
        <div className="header__container">
          <a href="#home" className="logo">
            TyZER
          </a>

          <nav className="nav">
            <a
              href="#about"
              className={`nav__links ${activeSection === "about" ? "active" : ""}`}
            >
              {t("about")}
            </a>
            <a
              href="#skills"
              className={`nav__links ${activeSection === "skills" ? "active" : ""}`}
            >
              {t("skills")}
            </a>
            <a
              href="#projects"
              className={`nav__links ${activeSection === "projects" ? "active" : ""}`}
            >
              {t("projects")}
            </a>
            <a
              href="#contact"
              className={`nav__links ${activeSection === "contact" ? "active" : ""}`}
            >
              {t("contact")}
            </a>
          </nav>

          <div className="header__actions">
            <div className="header__actions_lang">
              <button
                className={i18n.language === "ru" ? "active" : ""}
                onClick={() => switchLang("ru")}
              >
                {" "}
                RU
              </button>

              <button
                className={i18n.language === "en" ? "active" : ""}
                onClick={() => switchLang("en")}
              >
                EN
              </button>
            </div>

            <button
              className={`header__actions_theme ${darkMode ? "dark" : ""}`}
              onClick={switchTheme}
            >
              <span className="header__actions_theme-icon">
                {darkMode ? "☀" : "☾"}
              </span>

              <span className="header__actions_theme-circle"></span>
            </button>
          </div>
        </div>
      </section>
    </header>
  );
}
