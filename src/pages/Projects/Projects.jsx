import React from 'react';
import './Projects.scss';
import LearnJapaneseProject from './LearnJapanese.png';
import FoodOrderProject from './FoodOrder.png';

const Projects = () => {
  const LearnJapaneseLink = 'https://main--superb-crostata-13a274.netlify.app/';

  const FoodOrderLink = 'https://imaginative-naiad-aa9a90.netlify.app/';

  return (
    <div className="Projects">
      <div className="project-container">
        <div className="project-information">
          <h4>Learn Japanese</h4>
          <p>In this project I worked with a local API to display all the vocabularies. I explained the differences between the 3 writing systems in japanese language to make clear which one you should learn first and why.</p>
          <p>In this project you can</p>
          <ul>
            <li>safe vocabularies into your vocabulary list</li>
            <li>do exercises to learn more effectively</li>
            <li>learn about the three writing systems use in Japan</li>
          </ul>
          <p>Currently, only the "Hiragana" language is available.</p>
        </div>
        <div>
          <a href={LearnJapaneseLink} target="_blank" rel="noopener noreferrer">
            <img src={LearnJapaneseProject} alt="" className="project-img" />
          </a>
        </div>
      </div>

      <div className="project-container">
        <div className="project-information">
          <h4>Food Order</h4>
          <p>This is the first project i made</p>
          <p>In this project you can</p>
          <ul>
            <li>
              add food to your cart and also remove them if you change your mind
            </li>
            <li>choose the amount of the food you want to order</li>
          </ul>
        </div>

        <div>
          <a href={FoodOrderLink} target="_blank" rel="noopener noreferrer">
            <img src={FoodOrderProject} alt="" className="project-img" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
