import { useState } from "react";
import Header from "./components/Header.jsx";
import Main from "./components/Main.jsx";

import { useTranslation } from "react-i18next";

export default function App() {

  const [activeSection, setActiveSection] = useState("home");

  const { t } = useTranslation();

  return (
    <>
      <Header activeSection={activeSection} />

      <Main setActiveSection={setActiveSection} />

      <p className="main__bottom">{t("bottomText")}</p>
    </>
  );
}
