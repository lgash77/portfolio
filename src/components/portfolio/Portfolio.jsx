// Portfolio.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./portfolio.css";
import Menu from './Menu';

const Portfolio = () => {
  const [items, setItems] = useState(Menu);

  const filterItem = (categoryItem) => {
    const updatedItems = Menu.filter((curElem) => curElem.category === categoryItem);
    setItems(updatedItems);
  };

  return (
    <section className="portfolio container section" id="portfolio">
      <h2 className="section__title">Projects</h2>

      <div className="portfolio__filters">
        <span className="portfolio__item" onClick={() => setItems(Menu)}>All</span>
        <span className="portfolio__item" onClick={() => filterItem("Data Analytics")}>Data Analytics</span>
        <span className="portfolio__item" onClick={() => filterItem("Machine Learning")}>Machine Learning</span>
        <span className="portfolio__item" onClick={() => filterItem("Visualization")}>Visualization</span>
        <span className="portfolio__item" onClick={() => filterItem("SQL & Database")}>SQL & Database</span>
        <span className="portfolio__item" onClick={() => filterItem("Web UI/UX")}>Web UI/UX</span>
      </div>

      <div className="portfolio__container grid">
        {items.map(({ id, image, title, category, link }) => (
          <Link to={link} className="portfolio__card" key={id}>

            <div className="portfolio__thumbnail">
              <img src={image} alt={title} className="portfolio__img" />
              <div className="portfolio__mask"></div>
            </div>

            <span className="portfolio__category">{category}</span>
            <h3 className="portfolio__title">{title}</h3>

          </Link>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
