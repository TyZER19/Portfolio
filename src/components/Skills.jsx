import skillImg from "../../public/images/skill-img.avif";
import git from "../assets/icons/GIT.svg";
import figma from "../assets/icons/Figma.svg";
import css from "../assets/icons/CSS.svg";
import html from "../assets/icons/HTML.svg";
import react from "../assets/icons/React.svg";
import js from "../assets/icons/JS.svg";
import scss from "../assets/icons/SCSS.svg";

import { useTranslation } from "react-i18next";


export default function Skills() {

  const { t } = useTranslation();
  
  
  return (
    <section id="skills" className="skills">
      <h3 className="skills__title">{t('skillsText')}</h3>

      <div className="skills__container container">
        <img src={skillImg} alt="" className="skills__img" />
        <div className="skills__right">
          <div className="skills__items">
            <div className="skills__item">
              <span>
                <img src={html} alt="" className="icon" />
              </span>
              <span>HTML</span>
            </div>

            <div className="skills__item">
              <span>
                <img src={css} alt="" className="icon" />
              </span>
              <span>CSS</span>
            </div>

            <div className="skills__item">
              <span>
                <img src={js} alt="" className="icon" />
              </span>
              <span>Java Script</span>
            </div>

            <div className="skills__item">
              <span>
                <img src={react} alt="" className="icon" />
              </span>
              <span>React</span>
            </div>

            <div className="skills__item">
              <span>
                <img src={scss} alt="" className="icon" />
              </span>
              <span>SCSS</span>
            </div>

            <div className="skills__item">
              <span>
                <img src={git} alt="" className="icon" />
              </span>
              <span>Git</span>
            </div>

            <div className="skills__item">
              <span>
                <img src={figma} alt="" className="icon" />
              </span>
              <span>Figma</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
