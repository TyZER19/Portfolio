
import { useTranslation } from "react-i18next";

export default function Contact() {

    const { t } = useTranslation();

  return (
    <section id="contact" className="contact">
      <div className="contact__container container">
        <h3 className="contact__title">{t("contactTitle")}</h3>
        <p className="contact__text">
          {t("contactText")}
        </p>

        <form action="#" className="contact__form">
          <input
            type="text"
            placeholder={t("yourName")}
            className="contact__input"
          />
          <input
            type="email"
            placeholder={t("yourEmail")}
            className="contact__input"
          />
          <input
            type="tel"
            placeholder={t("yourPhone")}
            className="contact__input"
          />
          <textarea
            name="message"
            placeholder={t("yourMessage")}
            className="contact__message"
          ></textarea>


										<button type="submit" className="contact__btn">{t("sendMessage")}</button>
        </form>

								<div className="contact__me">
									<div className="contact__block">
										<span>✉️</span>
										<p className="contact__block_title">{t("email")}</p>
										<span className="contact__block_text">tyzer1916@gmail.com</span>
									</div>

									<div className="contact__block">
										<span>📞</span>
										<p className="contact__block_title">{t("phone")}</p>
										<span className="contact__block_text">+998 (93) 589-64-31</span>
									</div>

									<div className="contact__block">
										<span>📍</span>
										<p className="contact__block_title">{t("location")}</p>
										<span className="contact__block_text">Uzbekistan, Tashkent</span>
									</div>

								</div>
      </div>
    </section>
  );
}
