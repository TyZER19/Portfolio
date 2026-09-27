import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();

  return (
    <section id="about" className="about__section">
      <div className="about container">
        <div className="about__inner">
          <h3 className="about__title">{t("aboutMe")}</h3>
          <div className="about__texts">
            <p className="about__text">{t("aboutTextOne")}</p>
            <p className="about__text">{t("aboutTextTwo")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
