$('[data-gallery]').flickity({
  cellAlign: 'center',
  freeScroll: true,
  autoPlay: true,
  contain: true,
  lazyLoad: 3,
  imagesLoaded: true,
  pageDots: false,
  wrapAround: true,
  setGallerySize: false
});

$('[data-library-gallery]').flickity({
  cellAlign: 'left',
  freeScroll: true,
  contain: true,
  pageDots: false,
  wrapAround: true,
  imagesLoaded: true,
  setGallerySize: false
});
