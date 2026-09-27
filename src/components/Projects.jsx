import toDo from "../../public/images/to-do.png";
import pointGame from "../../public/images/point-game.png";
import alohaLite from "../../public/images/aloha-lite.png";
import brutalism from "../../public/images/brutalism.png";
import clothing from "../../public/images/clothing.png";
import fengShui from "../../public/images/feng-shui.png";
import mountain from "../../public/images/mountain.png";
import oku from "../../public/images/oku.png";
import perfumeLine from "../../public/images/perfume-line.png";
import porsche from "../../public/images/porsche.png";

import { useTranslation } from "react-i18next";

export default function Projects() {
  const { t } = useTranslation();

  return (
    <section id="projects" className="projects">
      <h3 className="projects__title">{t("myProjects")}</h3>
      <div className="projects__container container">
        <div className="project">
          <img src={toDo} alt="" className="project__img" />
          <h3 className="project__title">To-Do</h3>
          <p className="project__text">HTML, SCSS, JS</p>
          <a href="" className="project__link">
            {t('view')}
          </a>
        </div>

        <div className="project">
          <img src={pointGame} alt="" className="project__img" />
          <h3 className="project__title">Point game</h3>
          <p className="project__text">HTML, CSS, JS</p>
          <a href="" className="project__link">
            {t('view')}
          </a>
        </div>

        <div className="project">
          <img src={alohaLite} alt="" className="project__img" />
          <h3 className="project__title">Aloha lite</h3>
          <p className="project__text">HTML, CSS, Figma</p>
          <a href="" className="project__link">
            {t('view')}
          </a>
        </div>

        <div className="project">
          <img src={brutalism} alt="" className="project__img" />
          <h3 className="project__title">Brutalism</h3>
          <p className="project__text">HTML, CSS, Figma</p>
          <a href="" className="project__link">
            {t('view')}
          </a>
        </div>

        <div className="project">
          <img src={clothing} alt="" className="project__img" />
          <h3 className="project__title">Clothing</h3>
          <p className="project__text">HTML, CSS, Figma</p>
          <a href="" className="project__link">
            {t("view")}
          </a>
        </div>

        <div className="project">
          <img src={fengShui} alt="" className="project__img" />
          <h3 className="project__title">Feng Shui</h3>
          <p className="project__text">HTML, CSS, Figma</p>
          <a href="" className="project__link">
            {t("view")}
          </a>
        </div>

        <div className="project">
          <img src={mountain} alt="" className="project__img" />
          <h3 className="project__title">Mountain</h3>
          <p className="project__text">HTML, CSS, Figma</p>
          <a href="" className="project__link">
            {t("view")}
          </a>
        </div>

        <div className="project">
          <img src={oku} alt="" className="project__img" />
          <h3 className="project__title">Oku</h3>
          <p className="project__text">HTML, CSS, Figma</p>
          <a href="" className="project__link">
            {t("view")}
          </a>
        </div>

        <div className="project">
          <img src={perfumeLine} alt="" className="project__img" />
          <h3 className="project__title">Perfume Line</h3>
          <p className="project__text">HTML, CSS, Figma</p>
          <a href="" className="project__link">
            {t("view")}
          </a>
        </div>

        <div className="project">
          <img src={porsche} alt="" className="project__img" />
          <h3 className="project__title">Porsche</h3>
          <p className="project__text">React, HTML, SCSS, Figma</p>
          <a href="" className="project__link">
            {t("view")}
          </a>
        </div>

        <div className="project">
          <h3 className="project__title">{t('comingSoon')}</h3>
        </div>
      </div>
    </section>
  );
}
