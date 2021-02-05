'use strict';

(function () {
  document.querySelector('.logo__title').style.display = 'none';
  setTimeout(() => {
    document.querySelector('.logo__title').style.display = 'inline'
  }, 1700);
  setTimeout(() => {
    document.querySelector('.logo__email').style.display = 'block'
  }, 2600);
  setTimeout(() => {
    document.querySelector('.logo__address').style.display = 'block'
  }, 2600);
})();