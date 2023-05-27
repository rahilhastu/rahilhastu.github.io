(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/styles.css":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--13-1!./node_modules/postcss-loader/src??embedded!./src/styles.css ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
exports.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Stylish&display=swap);"]);
exports.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Vibur&display=swap);"]);
exports.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Chilanka&display=swap);"]);
// Module
exports.push([module.i, "\n/* You can add global styles to this file, and also import other style files */\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  scrollbar-color: #fc766a #282626;\n  scrollbar-width: thin;\n}\n::-webkit-scrollbar {\n  height: 12px;\n  width: 5px;\n  background: #282626;\n  -webkit-border-radius: 1ex;\n}\n/* #fc766a #282626; */\n::-webkit-scrollbar-thumb {\n  background: #fc766a;\n  -webkit-border-radius: 1ex;\n  -webkit-box-shadow: 0px 1px 2px rgba(0, 0, 0, 0);\n}\n::-webkit-scrollbar-corner {\n  background: #1a1a1a;\n}\n.SEO {\n  color: #282626;\n  position: absolute;\n}\nbody {\n  background: #282626;\n  overflow: hidden;\n  height: 100vh;\n  font-family: \"Stylish\", \"Sans-Serif\";\n}\n.home-main-section,\n.contact-page-section {\n  display: flex;\n  align-items: stretch;\n  justify-content: space-between;\n  flex-grow: 1;\n  padding: 0 100px;\n}\n.home-main-section .bigR,\n.home-main-section .cuberotate,\n.home-main-section .contact-map {\n  flex-grow: 1;\n  flex-direction: column;\n  display: flex;\n  align-items: stretch;\n  justify-content: flex-end;\n}\n.container-work {\n  overflow-x: hidden;\n  overflow-y: visible;\n  height: 500vh;\n  scrollbar-color: auto;\n}\n.work-nav {\n  position: fixed !important;\n}\n.title {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: stretch;\n  flex-grow: 1;\n  font-size: 0;\n  line-height: 60px;\n  color: white;\n  z-index: 1;\n}\n.title span {\n  display: inline-block;\n  white-space: nowrap;\n  font-size: 3vw;\n  opacity: 0;\n}\n.title .subtitle {\n  font-weight: normal;\n  font-size: 1vw;\n  line-height: 30px;\n  color: #585858;\n  opacity: 0;\n  transition: opacity 1.5s ease-in;\n}\n.bounce {\n  color: #fc766a;\n  animation-name: bounce;\n  animation-duration: 2.5s;\n  transition: all 5s;\n}\n/* .comeout {\n  animation: comeout ease;\n} */\n@keyframes comeout {\n  0% {\n    opacity: 0;\n  }\n\n  100% {\n    opacity: 1;\n  }\n}\n@keyframes bounce {\n  0%,\n  20%,\n  50%,\n  80%,\n  100% {\n    transform: translateY(0);\n  }\n  40% {\n    transform: translateY(-10px);\n  }\n  60% {\n    transform: translateY(-8px);\n  }\n}\n.full-height-grow {\n  display: flex;\n  flex-direction: column;\n}\n.container {\n  max-width: 1800px;\n  margin: 0 10%;\n  /* padding: 0 100px; */\n}\n.loader-wrapper {\n  position: fixed;\n  top: 0;\n  background: #282626;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  z-index: 4;\n  left: 0;\n}\n.loading-logo {\n  background: url('r_final_cropped.png');\n  transform: rotate(-14deg);\n  background-size: contain;\n  background-repeat: no-repeat;\n  width: 100px;\n  height: 50px;\n  margin-left: 30px;\n  animation: bouncyLogo 0.4s infinite;\n  animation-direction: alternate;\n  transition: animation ease;\n}\n@keyframes bouncyLogo {\n  0% {\n    transform: translateY(-10px) rotate(-14deg);\n  }\n  100% {\n    transform: translateY(0px) rotate(-14deg);\n  }\n}\n.loading-text {\n  color: #585858;\n  opacity: 1;\n  font-size: 1vw;\n  font-family: \"Vibur\", cursive;\n  margin: 20px 20px;\n  text-transform: uppercase;\n}\n.better-experience {\n  display: none;\n}\n.loading-percentage {\n  color: #585858;\n  opacity: 1;\n  font-size: 1vw;\n  font-family: \"Vibur\", cursive;\n  margin: 5px 20px;\n}\n.loading-bar {\n  height: 1px;\n  width: 200px;\n  background-color: #fc766a46;\n}\n.loading-complete {\n  width: 0%;\n  height: 1px;\n  background-color: #fc766a;\n}\n.hideUp,\n.hideDown,\n.hideLeft,\n.hideRight {\n  opacity: 1;\n  /* display: none; */\n  transition: all 1s ease-out;\n}\n.hideUp {\n  transform: translateY(-100vh);\n  visibility: hidden;\n}\n.hideDown {\n  transform: translateY(+100vh);\n  visibility: hidden;\n}\n.hideRight {\n  transform: translateX(-100vw);\n  visibility: hidden;\n}\n.hideLeft {\n  transform: translateX(+100vw);\n  visibility: hidden;\n}\n.sideNav {\n  position: absolute;\n  top: 0px;\n  width: 5vw;\n  height: 100vh;\n  background: #2c2c2c;\n  z-index: 3;\n  left: 0;\n}\n.logo {\n  width: 5vw;\n  height: 10vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\na {\n  cursor: pointer !important;\n  z-index: 1;\n  position: absolute;\n}\n.links {\n  width: 5vw;\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  top: 0;\n  justify-content: center;\n  align-items: center;\n  min-height: 200px;\n}\n.unordered {\n  width: 5vw;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\nli {\n  list-style: none;\n  width: 5vw;\n  height: 7vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 10px 0 10px 0;\n}\n.far,\n.fas,\n.fab {\n  font-size: 1.3rem;\n  color: #ffffff;\n  fill: none;\n  opacity: 0.5;\n}\nli:hover .fas,\nli:hover .far {\n  display: none;\n}\n.linkName {\n  display: none;\n}\nli:hover .linkName {\n  transition: all 1s;\n  display: inline-block;\n  color: #fc766a;\n  text-align: justify;\n  width: -webkit-max-content;\n  width: max-content;\n  font-size: 1vw;\n}\n.fab:hover {\n  color: #fc766a;\n}\n.active {\n  color: #fc766a;\n  opacity: 1;\n  animation: rotateLink 0.5s ease;\n  transition: all 0.5s ease;\n}\n.social-media {\n  display: flex;\n  flex-direction: column;\n  place-items: center;\n}\n.media {\n  height: 2vh;\n  width: 1vw;\n}\n.fab {\n  cursor: pointer;\n}\n.fa-angle-up {\n  display: none !important;\n}\n.fa-angle-up-display {\n  display: flex !important;\n  cursor: pointer;\n}\n.fa-angle-down {\n  display: block;\n  cursor: pointer;\n}\n.fa-angle-down-display {\n  display: none !important;\n}\n.clickTodisplay {\n  display: flex !important;\n}\n.fa-angle-up:hover,\n.fa-angle-down:hover {\n  color: #fc766a;\n}\n.media-tray {\n  display: none;\n  flex-direction: column;\n  place-content: center;\n  width: 4vw;\n}\n.row-1,\n.row-2,\n.row-3 {\n  display: flex;\n  flex-direction: row;\n  place-content: space-evenly;\n  padding: 1vh 0;\n}\n@keyframes rotateLink {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\nli[id=\"0\"]:hover .linkName::after {\n  content: \"Home\" !important;\n}\nli[id=\"1\"]:hover .linkName::after {\n  content: \"About Me\" !important;\n}\nli[id=\"2\"]:hover .linkName::after {\n  content: \"Skills\" !important;\n}\nli[id=\"3\"]:hover .linkName::after {\n  content: \"Work\" !important;\n}\nli[id=\"4\"]:hover .linkName::after {\n  content: \"Contact Me\" !important;\n}\nli[id=\"4\"]:hover .linkName {\n  font-size: 0.8vw;\n}\nli a {\n  text-decoration: none;\n}\n.circles {\n  position: absolute;\n  height: 100vh;\n  width: 100%;\n  z-index: -1;\n}\n.circles li {\n  position: relative;\n  background: #fc766a;\n  opacity: 0.1;\n}\n.circles li:nth-child(1) {\n  height: 150px;\n  width: 150px;\n  border-radius: 76px;\n  right: -28%;\n  top: 10%;\n}\n.circles li:nth-child(2) {\n  height: 50px;\n  width: 50px;\n  border-radius: 29px;\n  right: 10%;\n  left: 83%;\n  top: -9%;\n}\n.circles li:nth-child(3) {\n  height: 250px;\n  width: 250px;\n  border-radius: 158px;\n  bottom: -36%;\n  right: -3%;\n}\n.circles li:nth-child(4) {\n  height: 350px;\n  width: 350px;\n  border-radius: 200px;\n  bottom: -26%;\n  left: 81%;\n}\n/* .loader-wrapper {\n  position: fixed;\n  top: 0;\n  background: #282626;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  z-index: 4;\n  left: 0;\n} */\n.fadeBar {\n  transform: translateY(-15px);\n  opacity: 0;\n  transition: all 0.5s ease-out;\n}\n@media (max-width: 1024px) {\n  .container {\n    margin: 0;\n  }\n  .full-height-grow {\n    display: block;\n  }\n\n  .home-main-section {\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    place-content: center;\n  }\n  .contact-main-section {\n    padding: 0 50px !important;\n  }\n\n  .home-main-section .bigR,\n  .home-main-section .cuberotate,\n  .home-main-section .contact-map {\n    flex-direction: column;\n    width: 100%;\n    height: 80vh;\n  }\n  .title {\n    line-height: 30px;\n    flex-grow: 0;\n    align-items: center;\n  }\n\n  .title span {\n    font-size: 5vw;\n  }\n\n  .title .subtitle {\n    font-size: 3vw;\n  }\n  .container-work {\n    margin: 0 0 0 10vw;\n  }\n\n  .contact-page-section {\n    padding: 0 30px !important;\n    flex-direction: column;\n    align-items: center;\n    justify-content: flex-start;\n  }\n  .loading-text,\n  .loading-percentage {\n    font-size: 2.5vw;\n  }\n  .loading-bar {\n    height: 2px;\n  }\n  .loader-wrapper {\n    position: absolute;\n  }\n  .sideNav {\n    width: 7vw;\n  }\n  .logo {\n    width: 7vw;\n  }\n  .links {\n    width: 7vw;\n  }\n  li:hover .linkName {\n    font-size: 3vw;\n  }\n  li[id=\"4\"]:hover .linkName {\n    font-size: 2.5vw;\n  }\n  li[id=\"4\"]:hover .linkName::after {\n    content: \"Contact\" !important;\n  }\n  li[id=\"1\"]:hover .linkName::after {\n    content: \"About\" !important;\n  }\n  .circles li:nth-child(4) {\n    display: none;\n  }\n\n  .fab {\n    font-size: 0.7em;\n  }\n  .row-1,\n  .row-2,\n  .row-3 {\n    padding: 1.5vh;\n  }\n  .media-tray {\n    width: 13vw;\n  }\n  .media {\n    height: 1vh;\n    width: 2vw;\n  }\n  .better-experience {\n    display: block;\n    color: #585858;\n    opacity: 1;\n    font-size: 2vw;\n    font-family: \"Vibur\", cursive;\n    margin: 5px 20px;\n    text-transform: uppercase;\n  }\n  .better-experience::after {\n    content: \"For better Experience switch to a Bigger screen!\";\n  }\n}\n", "",{"version":3,"sources":["styles.css"],"names":[],"mappings":"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;IACE,SAAS;EACX;EACA;IACE,cAAc;EAChB;;EAEA;IACE,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB;IACvB,qBAAqB;EACvB;EACA;IACE,0BAA0B;EAC5B;;EAEA;;;IAGE,sBAAsB;IACtB,WAAW;IACX,YAAY;EACd;EACA;IACE,iBAAiB;IACjB,YAAY;IACZ,mBAAmB;EACrB;;EAEA;IACE,cAAc;EAChB;;EAEA;IACE,cAAc;EAChB;EACA;IACE,kBAAkB;EACpB;;EAEA;IACE,0BAA0B;IAC1B,sBAAsB;IACtB,mBAAmB;IACnB,2BAA2B;EAC7B;EACA;;IAEE,gBAAgB;EAClB;EACA;IACE,WAAW;EACb;EACA;IACE,kBAAkB;EACpB;EACA;IACE,UAAU;EACZ;EACA;IACE,UAAU;EACZ;EACA;IACE,UAAU;EACZ;EACA;IACE,cAAc;EAChB;EACA;IACE,gBAAgB;EAClB;EACA;IACE,6BAA6B;EAC/B;EACA;IACE,2BAA2B;EAC7B;EACA;IACE,aAAa;EACf;;EAEA;IACE,gBAAgB;EAClB;EACA;;;IAGE,cAAc;EAChB;EACA;IACE,WAAW;EACb;EACA;IACE,WAAW;IACX,UAAU;EACZ;EACA;IACE,cAAc;IACd,cAAc;IACd,UAAU;IACV,cAAc;IACd,6BAA6B;IAC7B,gBAAgB;IAChB,yBAAyB;EAC3B;EACA;IACE,2DAA2D;EAC7D;AACF","file":"styles.css","sourcesContent":["/* You can add global styles to this file, and also import other style files */\n@import url(\"https://fonts.googleapis.com/css2?family=Stylish&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Vibur&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Chilanka&display=swap\");\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  scrollbar-color: #fc766a #282626;\n  scrollbar-width: thin;\n}\n\n::-webkit-scrollbar {\n  height: 12px;\n  width: 5px;\n  background: #282626;\n  -webkit-border-radius: 1ex;\n}\n/* #fc766a #282626; */\n::-webkit-scrollbar-thumb {\n  background: #fc766a;\n  -webkit-border-radius: 1ex;\n  -webkit-box-shadow: 0px 1px 2px rgba(0, 0, 0, 0);\n}\n\n::-webkit-scrollbar-corner {\n  background: #1a1a1a;\n}\n\n.SEO {\n  color: #282626;\n  position: absolute;\n}\n\nbody {\n  background: #282626;\n  overflow: hidden;\n  height: 100vh;\n  font-family: \"Stylish\", \"Sans-Serif\";\n}\n\n.home-main-section,\n.contact-page-section {\n  display: flex;\n  align-items: stretch;\n  justify-content: space-between;\n  flex-grow: 1;\n  padding: 0 100px;\n}\n\n.home-main-section .bigR,\n.home-main-section .cuberotate,\n.home-main-section .contact-map {\n  flex-grow: 1;\n  flex-direction: column;\n  display: flex;\n  align-items: stretch;\n  justify-content: flex-end;\n}\n.container-work {\n  overflow-x: hidden;\n  overflow-y: visible;\n  height: 500vh;\n  scrollbar-color: auto;\n}\n\n.work-nav {\n  position: fixed !important;\n}\n\n.title {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: stretch;\n  flex-grow: 1;\n  font-size: 0;\n  line-height: 60px;\n  color: white;\n  z-index: 1;\n}\n\n.title span {\n  display: inline-block;\n  white-space: nowrap;\n  font-size: 3vw;\n  opacity: 0;\n}\n\n.title .subtitle {\n  font-weight: normal;\n  font-size: 1vw;\n  line-height: 30px;\n  color: #585858;\n  opacity: 0;\n  transition: opacity 1.5s ease-in;\n}\n\n.bounce {\n  color: #fc766a;\n  animation-name: bounce;\n  animation-duration: 2.5s;\n  transition: all 5s;\n}\n\n/* .comeout {\n  animation: comeout ease;\n} */\n\n@keyframes comeout {\n  0% {\n    opacity: 0;\n  }\n\n  100% {\n    opacity: 1;\n  }\n}\n\n@keyframes bounce {\n  0%,\n  20%,\n  50%,\n  80%,\n  100% {\n    transform: translateY(0);\n  }\n  40% {\n    transform: translateY(-10px);\n  }\n  60% {\n    transform: translateY(-8px);\n  }\n}\n\n.full-height-grow {\n  display: flex;\n  flex-direction: column;\n}\n\n.container {\n  max-width: 1800px;\n  margin: 0 10%;\n  /* padding: 0 100px; */\n}\n\n.loader-wrapper {\n  position: fixed;\n  top: 0;\n  background: #282626;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  z-index: 4;\n  left: 0;\n}\n\n.loading-logo {\n  background: url(\"./assets/images/r_final_cropped.png\");\n  transform: rotate(-14deg);\n  background-size: contain;\n  background-repeat: no-repeat;\n  width: 100px;\n  height: 50px;\n  margin-left: 30px;\n  animation: bouncyLogo 0.4s infinite;\n  animation-direction: alternate;\n  transition: animation ease;\n}\n\n@keyframes bouncyLogo {\n  0% {\n    transform: translateY(-10px) rotate(-14deg);\n  }\n  100% {\n    transform: translateY(0px) rotate(-14deg);\n  }\n}\n\n.loading-text {\n  color: #585858;\n  opacity: 1;\n  font-size: 1vw;\n  font-family: \"Vibur\", cursive;\n  margin: 20px 20px;\n  text-transform: uppercase;\n}\n\n.better-experience {\n  display: none;\n}\n\n.loading-percentage {\n  color: #585858;\n  opacity: 1;\n  font-size: 1vw;\n  font-family: \"Vibur\", cursive;\n  margin: 5px 20px;\n}\n\n.loading-bar {\n  height: 1px;\n  width: 200px;\n  background-color: #fc766a46;\n}\n\n.loading-complete {\n  width: 0%;\n  height: 1px;\n  background-color: #fc766a;\n}\n\n.hideUp,\n.hideDown,\n.hideLeft,\n.hideRight {\n  opacity: 1;\n  /* display: none; */\n  transition: all 1s ease-out;\n}\n\n.hideUp {\n  transform: translateY(-100vh);\n  visibility: hidden;\n}\n\n.hideDown {\n  transform: translateY(+100vh);\n  visibility: hidden;\n}\n\n.hideRight {\n  transform: translateX(-100vw);\n  visibility: hidden;\n}\n\n.hideLeft {\n  transform: translateX(+100vw);\n  visibility: hidden;\n}\n\n.sideNav {\n  position: absolute;\n  top: 0px;\n  width: 5vw;\n  height: 100vh;\n  background: #2c2c2c;\n  z-index: 3;\n  left: 0;\n}\n\n.logo {\n  width: 5vw;\n  height: 10vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\na {\n  cursor: pointer !important;\n  z-index: 1;\n  position: absolute;\n}\n\n.links {\n  width: 5vw;\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  top: 0;\n  justify-content: center;\n  align-items: center;\n  min-height: 200px;\n}\n\n.unordered {\n  width: 5vw;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\nli {\n  list-style: none;\n  width: 5vw;\n  height: 7vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 10px 0 10px 0;\n}\n\n.far,\n.fas,\n.fab {\n  font-size: 1.3rem;\n  color: #ffffff;\n  fill: none;\n  opacity: 0.5;\n}\n\nli:hover .fas,\nli:hover .far {\n  display: none;\n}\n\n.linkName {\n  display: none;\n}\n\nli:hover .linkName {\n  transition: all 1s;\n  display: inline-block;\n  color: #fc766a;\n  text-align: justify;\n  width: max-content;\n  font-size: 1vw;\n}\n\n.fab:hover {\n  color: #fc766a;\n}\n\n.active {\n  color: #fc766a;\n  opacity: 1;\n  animation: rotateLink 0.5s ease;\n  transition: all 0.5s ease;\n}\n\n.social-media {\n  display: flex;\n  flex-direction: column;\n  place-items: center;\n}\n\n.media {\n  height: 2vh;\n  width: 1vw;\n}\n\n.fab {\n  cursor: pointer;\n}\n.fa-angle-up {\n  display: none !important;\n}\n.fa-angle-up-display {\n  display: flex !important;\n  cursor: pointer;\n}\n.fa-angle-down {\n  display: block;\n  cursor: pointer;\n}\n.fa-angle-down-display {\n  display: none !important;\n}\n.clickTodisplay {\n  display: flex !important;\n}\n\n.fa-angle-up:hover,\n.fa-angle-down:hover {\n  color: #fc766a;\n}\n\n.media-tray {\n  display: none;\n  flex-direction: column;\n  place-content: center;\n  width: 4vw;\n}\n\n.row-1,\n.row-2,\n.row-3 {\n  display: flex;\n  flex-direction: row;\n  place-content: space-evenly;\n  padding: 1vh 0;\n}\n\n@keyframes rotateLink {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\nli[id=\"0\"]:hover .linkName::after {\n  content: \"Home\" !important;\n}\nli[id=\"1\"]:hover .linkName::after {\n  content: \"About Me\" !important;\n}\nli[id=\"2\"]:hover .linkName::after {\n  content: \"Skills\" !important;\n}\nli[id=\"3\"]:hover .linkName::after {\n  content: \"Work\" !important;\n}\nli[id=\"4\"]:hover .linkName::after {\n  content: \"Contact Me\" !important;\n}\nli[id=\"4\"]:hover .linkName {\n  font-size: 0.8vw;\n}\n\nli a {\n  text-decoration: none;\n}\n\n.circles {\n  position: absolute;\n  height: 100vh;\n  width: 100%;\n  z-index: -1;\n}\n\n.circles li {\n  position: relative;\n  background: #fc766a;\n  opacity: 0.1;\n}\n\n.circles li:nth-child(1) {\n  height: 150px;\n  width: 150px;\n  border-radius: 76px;\n  right: -28%;\n  top: 10%;\n}\n\n.circles li:nth-child(2) {\n  height: 50px;\n  width: 50px;\n  border-radius: 29px;\n  right: 10%;\n  left: 83%;\n  top: -9%;\n}\n.circles li:nth-child(3) {\n  height: 250px;\n  width: 250px;\n  border-radius: 158px;\n  bottom: -36%;\n  right: -3%;\n}\n.circles li:nth-child(4) {\n  height: 350px;\n  width: 350px;\n  border-radius: 200px;\n  bottom: -26%;\n  left: 81%;\n}\n\n/* .loader-wrapper {\n  position: fixed;\n  top: 0;\n  background: #282626;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  z-index: 4;\n  left: 0;\n} */\n\n.fadeBar {\n  transform: translateY(-15px);\n  opacity: 0;\n  transition: all 0.5s ease-out;\n}\n\n@media (max-width: 1024px) {\n  .container {\n    margin: 0;\n  }\n  .full-height-grow {\n    display: block;\n  }\n\n  .home-main-section {\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    place-content: center;\n  }\n  .contact-main-section {\n    padding: 0 50px !important;\n  }\n\n  .home-main-section .bigR,\n  .home-main-section .cuberotate,\n  .home-main-section .contact-map {\n    flex-direction: column;\n    width: 100%;\n    height: 80vh;\n  }\n  .title {\n    line-height: 30px;\n    flex-grow: 0;\n    align-items: center;\n  }\n\n  .title span {\n    font-size: 5vw;\n  }\n\n  .title .subtitle {\n    font-size: 3vw;\n  }\n  .container-work {\n    margin: 0 0 0 10vw;\n  }\n\n  .contact-page-section {\n    padding: 0 30px !important;\n    flex-direction: column;\n    align-items: center;\n    justify-content: flex-start;\n  }\n  .loading-text,\n  .loading-percentage {\n    font-size: 2.5vw;\n  }\n  .loading-bar {\n    height: 2px;\n  }\n  .loader-wrapper {\n    position: absolute;\n  }\n  .sideNav {\n    width: 7vw;\n  }\n  .logo {\n    width: 7vw;\n  }\n  .links {\n    width: 7vw;\n  }\n  li:hover .linkName {\n    font-size: 3vw;\n  }\n  li[id=\"4\"]:hover .linkName {\n    font-size: 2.5vw;\n  }\n  li[id=\"4\"]:hover .linkName::after {\n    content: \"Contact\" !important;\n  }\n  li[id=\"1\"]:hover .linkName::after {\n    content: \"About\" !important;\n  }\n  .circles li:nth-child(4) {\n    display: none;\n  }\n\n  .fab {\n    font-size: 0.7em;\n  }\n  .row-1,\n  .row-2,\n  .row-3 {\n    padding: 1.5vh;\n  }\n  .media-tray {\n    width: 13vw;\n  }\n  .media {\n    height: 1vh;\n    width: 2vw;\n  }\n  .better-experience {\n    display: block;\n    color: #585858;\n    opacity: 1;\n    font-size: 2vw;\n    font-family: \"Vibur\", cursive;\n    margin: 5px 20px;\n    text-transform: uppercase;\n  }\n  .better-experience::after {\n    content: \"For better Experience switch to a Bigger screen!\";\n  }\n}\n"]}]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--13-1!../node_modules/postcss-loader/src??embedded!./styles.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/styles.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ 2:
/*!******************************!*\
  !*** multi ./src/styles.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/rahilhastu/Desktop/bvxz/newWebsiteAngular/src/styles.css */"./src/styles.css");


/***/ })

},[[2,"runtime"]]]);
//# sourceMappingURL=styles.js.map