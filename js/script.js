'use strict';

(function () {
  document.querySelector('.logo__title').style.display = 'none';
  setTimeout(() => {
    document.querySelector('.logo__title').style.display = 'inline'
  }, 1700);
  setTimeout(() => {
    document.querySelector('.contacts').style.display = 'inline'
  }, 2000);
})();