import useScrollAnimation from './animate';



const Timeline = () => {
    useScrollAnimation('.animate');
    return (
      <div className="timeline-container">
  
        <div className="timeline-item">
  
            <div className="timeline-dot"></div>
  
            <div className="timeline-content animate">
              <h2>Identification des besoins</h2>
              <p>
                Analyse des processus existants. Identification des lacunes et des opportunités. Définition des objectifs de la digitalisation.
              </p>
            </div>
  
        </div>
  
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content animate">
            <h2>Élaboration de la stratégie</h2>
            <p>
              Développement d'une stratégie de digitalisation. Choix des technologies et plateformes. Elaboration d'un plan d'action détaillé.
            </p>
          </div>
        </div>
  
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content animate">
            <h2>Mise en place des outils</h2>
            <p>
              Intégration de système de gestion (ERP, CRM, etc.). Mise en place de solutions de marketing digital. Formation du personnel sur les nouvelles technologies.
            </p>
          </div>
        </div>
  
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content animate">
            <h2>Lancement ou refonte du site web</h2>
            <p>
              Développement du site web avec une approche conviviale. Intégration des fonctionnalités e-commerce si nécessaire. Tests approfondis pour assurer la qualité.
            </p>
          </div>
        </div>
  
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content animate">
            <h2>Stratégie Marketing en ligne</h2>
            <p>
              Lancement des campagnes de marketing digital. Utilisation des réseaux sociaux, du référencement, etc. Suivi des performances et ajustement.
            </p>
          </div>
        </div>
  
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content animate">
            <h2>Optimisation continue</h2>
            <p>
              Collecte et analyse de données pour l'optimisation. Mise à jour régulière du site web et des outils. Adaptation aux évolutions du marché et des technologies.
            </p>
          </div>
        </div>
  
      </div>
    );
  };

  export default Timeline;