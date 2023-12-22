import { useEffect, useState } from 'react';

const useScrollAnimation = (selector) => {
  const [visibleElements, setVisibleElements] = useState([]);

  useEffect(() => {
    const elements = document.querySelectorAll(selector);

    function checkVisibility() {
      elements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;

        if (rect.top <= windowHeight * 0.75 && !visibleElements.includes(element)) {
          element.classList.add('active');
          setVisibleElements((prevVisibleElements) => [...prevVisibleElements, element]);
        } else if (rect.top > windowHeight * 0.75 && visibleElements.includes(element)) {
          element.classList.remove('active');
          setVisibleElements((prevVisibleElements) =>
            prevVisibleElements.filter((el) => el !== element)
          );
        }
      });
    }

    // Déclencher la vérification de visibilité au chargement de la page
    checkVisibility();

    // Déclencher la vérification de visibilité au défilement de la page
    window.addEventListener('scroll', checkVisibility);

    // Nettoyer les écouteurs d'événements lors du démontage du composant
    return () => {
      window.removeEventListener('scroll', checkVisibility);
    };
  }, [selector, visibleElements]);

  // Réinitialiser les éléments visibles lorsque la page est remontée en haut
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setVisibleElements([]);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Aucune dépendance pour garantir que cela s'exécute une seule fois

  return null; // Retournez un composant vide pour être utilisé dans les composants où l'animation est nécessaire
};

export default useScrollAnimation;
