import React from 'react';
import './Aboutme.scss';
import meinBild from './Kutay3.jpg';

const Aboutme = () => {
  return (
    <div className='Aboutme'>
      <div className='informations-container'>
        <div className='information'>
          <h4>Über mich</h4>
          <p>
          Ich bin ein leidenschaftlicher Programmierer und habe mich stark auf die Verwendung von React.js in der Webentwicklung spezialisiert. Meine Leidenschaft besteht darin, faszinierende Webanwendungen zu entwickeln, die nicht nur gut aussehen, sondern auch eine reibungslose Benutzererfahrung bieten. Ich setze meine Energie darauf, komplexe Probleme durch React-Komponenten zu lösen und dabei stets die neuesten Entwicklungspraktiken zu berücksichtigen.
          </p>
        </div>
        <div className='information'>
          <h4>Projekte mit API-Anbindung</h4>
          <p>
          Während meiner Entwicklungsreise habe ich gelernt, wie man verschiedene APIs in meine Projekte einbindet, um innovative und datengetriebene Anwendungen zu schaffen. Die Integration von APIs hat es mir ermöglicht, die Funktionalität meiner Webanwendungen zu erweitern, indem ich Echtzeitdaten nutze und somit interaktive und dynamische Features für ein verbessertes Nutzererlebnis bereitstelle.
          </p>
        </div>
        <div className='information'>
          <h4>Arbeiten mit verschiedenen Design-Frameworks</h4>
          <p>
          Neben meiner Expertise in React.js habe ich auch umfassende Erfahrungen mit anderen Frontend-Tools wie Bootstrap und Material UI gesammelt. Diese Frameworks haben mir geholfen, vielseitige und ansprechende Benutzeroberflächen zu gestalten, indem ich mich auf die Erstellung ästhetisch ansprechender Designs konzentriere, ohne dabei die Benutzerfreundlichkeit aus den Augen zu verlieren.
          </p>
        </div>
        <div className='information'>
            <h4>Immer offen für Neues</h4>
            <p>Meine Begeisterung für die Softwareentwicklung treibt mich dazu an, kontinuierlich nach neuen Technologien und Trends Ausschau zu halten. Ich bin immer bestrebt, mein Wissen zu erweitern und meine Fähigkeiten zu verbessern, sei es durch das Lernen neuer Programmiersprachen, die Erkundung innovativer Frameworks oder die Vertiefung meines Verständnisses für bewährte Entwicklungsmethoden.</p>
        </div>
      </div>
      <div>
        <img src={meinBild} alt="" className='mein-bild'/>
      </div>
    </div>
  );
};

export default Aboutme;