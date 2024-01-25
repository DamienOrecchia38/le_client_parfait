    // Initialiser le carrousel
    $(document).ready(function(){
        $('.carousel').slick({
          dots: true, // Affiche les indicateurs de pagination (points)
          infinite: true, // Active la lecture en boucle du carrousel
          speed: 200, // Vitesse de transition entre les slide (millisecondes)
          slidesToShow: 1, // Nombre de slide à afficher à la fois
          slidesToScroll: 1, // Nombre de slide à faire défiler à chaque changement
          autoplay: true, // Active la lecture automatique
          autoplaySpeed: 2000 // Durée entre chaque changement des slide en mode automatique (millisecondes)
        });
      });