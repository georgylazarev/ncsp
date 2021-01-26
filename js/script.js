'use strict';

(function () {
  document.querySelector('.logo__image--left').style.display = 'none';
  document.querySelector('.logo__image--right').style.display = 'none';
  document.querySelector('.logo__title').style.display = 'none';
  document.querySelector('.logo__image--left').style.display = 'block';
  setTimeout(() => {
    document.querySelector('.logo__image--right').style.display = 'block'
  }, 1100);
  setTimeout(() => {
    document.querySelector('.logo__title').style.display = 'inline'
  }, 2400);
})();