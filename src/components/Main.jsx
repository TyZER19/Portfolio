import About from "./About";
import Contact from "./Contact";
import Hero from "./Hero";
import Projects from "./Projects";
import Skills from "./Skills";
import { useEffect } from "react";



export default function Main({ setActiveSection }) {

useEffect(() => {
  const sections = document.querySelectorAll("main section");

  const observer = new IntersectionObserver(
    (entries) => {
      const visibleSections = [...entries]
        .filter((entry) => entry.isIntersecting)
        .sort(
          (a, b) =>
            Math.abs(a.boundingClientRect.top) -
            Math.abs(b.boundingClientRect.top)
        );

      if (visibleSections.length > 0) {
        setActiveSection(visibleSections[0].target.id);
      }
    },
    {
      threshold: 0.44,
    }
  );

  sections.forEach((section) => observer.observe(section));

  return () => observer.disconnect();
}, [setActiveSection]);


		return (
			
	<main className="main">
		<Hero />
		<About />
		<Skills />
		<Projects />
		<Contact/>
	</main>

		)
}
