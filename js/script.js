import initScrollSuave from './modules/scroll-suave.js';
import initActiveOption from './modules/opcao.js';
import initAnimaValor from './modules/valor-debitado.js';
import MenuMobile from './modules/menu-mobile.js';

initScrollSuave();
initActiveOption();
initAnimaValor();

const menuMobile = new MenuMobile('[data-menu="button"]', '[data-menu="list"]');
menuMobile.init();

