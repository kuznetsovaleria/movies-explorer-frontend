import React from "react";
import './AboutProject.css'

function AboutProject() {
  return (
    <section className="about-project" id="about-project">
      <h3 className="about-project__title">О проекте</h3>
      <div className="about-project__columns">
        <div className="about-project__column">
          <h4 className="about-project__subtitle">Дипломный проект включал 5 этапов</h4>
          <p className="about-project__text">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </div>
        <div className="about-project__column">
          <h4 className="about-project__subtitle">На выполнение диплома ушло 5 недель</h4>
          <p className="about-project__text">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>
      <div className="about-project__weeks">
        <p className="about-project__weeks-description about-project__weeks-description_green">1 неделя</p>
        <p className="about-project__weeks-description about-project__weeks-description_grey">4 недели</p>
        <p className="about-project__weeks-description">Back-end</p>
        <p className="about-project__weeks-description">Front-end</p>
      </div>
    </section>
  );
}

export default AboutProject;
