'use strict';

// Filter project cards — 対象は #portfolio 内の .row.project-card すべて（.portfolio-cards 外の先頭カードも含む）
var previousClickedMenuLink;

$('.portfolio-menu').on('click', 'a', function (event) {
  event.preventDefault();

  var $link = $(this);

  if (previousClickedMenuLink) {
    previousClickedMenuLink.removeClass('portfolio-menu__link--active');
  }
  $link.addClass('portfolio-menu__link--active');
  previousClickedMenuLink = $link;

  var targetTag = $link.attr('data-portfolio-target-tag');
  var portfolioItems = $('#portfolio .row.project-card');

  if (targetTag === 'all') {
    portfolioItems.fadeIn({ duration: 300 });
  } else {
    portfolioItems.hide();
    portfolioItems
      .filter('[data-portfolio-tag="' + targetTag + '"]')
      .fadeIn({ duration: 300 });
  }
});
