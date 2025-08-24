$(document).ready(function () {
  // Carrossel de serviços
  $('.servicos-carousel').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    infinite: true,
    accessibility: true,
    adaptiveHeight: true,
    lazyLoad: 'ondemand', // carrega imagens sob demanda para otimizar performance
    responsive: [
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 }
      }
    ],
  });

  // Carrossel de marcas
  $('.marcas-carousel').slick({
    slidesToShow: 5,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    dots: false,
    infinite: true,
    pauseOnHover: true,
    accessibility: true,
    adaptiveHeight: true,
    lazyLoad: 'ondemand',
    responsive: [
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 }
      }
    ],
  });

  // Carrossel de depoimentos
  $('.depoimentos-carousel').slick({
    slidesToShow: 1,
    arrows: true,
    dots: true,
    autoplay: false,
    accessibility: true,
    adaptiveHeight: true,
    lazyLoad: 'ondemand',
  });

  // Carrossel de clientes
  $('.clientes-carousel').slick({
    slidesToShow: 4,
    arrows: true,
    dots: false,
    infinite: true,
    accessibility: true,
    adaptiveHeight: true,
    lazyLoad: 'ondemand',
    responsive: [
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 }
      }
    ],
  });

  // Aumenta foco nos botões para melhor acessibilidade via teclado
  $('.slick-arrow, .slick-dots button').attr('tabindex', '0');
});
