/*!
 * sweetalert2 v6.11.4
 * Released under the MIT License.
 */
(function(global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() : typeof define === 'function' && define.amd ? define(factory) : (global.Sweetalert2 = factory());
}(this, (function() {
    'use strict';
    var styles = "body.swal2-shown {\n  overflow-y: hidden; }\n\nbody.swal2-iosfix {\n  position: fixed;\n  left: 0;\n  right: 0; }\n\n.swal2-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  position: fixed;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  padding: 10px;\n  background-color: transparent;\n  z-index: 1060; }\n  .swal2-container.swal2-top {\n    -webkit-box-align: start;\n        -ms-flex-align: start;\n            align-items: flex-start; }\n  .swal2-container.swal2-top-left {\n    -webkit-box-align: start;\n        -ms-flex-align: start;\n            align-items: flex-start;\n    -webkit-box-pack: start;\n        -ms-flex-pack: start;\n            justify-content: flex-start; }\n  .swal2-container.swal2-top-right {\n    -webkit-box-align: start;\n        -ms-flex-align: start;\n            align-items: flex-start;\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end; }\n  .swal2-container.swal2-center {\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n  .swal2-container.swal2-center-left {\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: start;\n        -ms-flex-pack: start;\n            justify-content: flex-start; }\n  .swal2-container.swal2-center-right {\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end; }\n  .swal2-container.swal2-bottom {\n    -webkit-box-align: end;\n        -ms-flex-align: end;\n            align-items: flex-end; }\n  .swal2-container.swal2-bottom-left {\n    -webkit-box-align: end;\n        -ms-flex-align: end;\n            align-items: flex-end;\n    -webkit-box-pack: start;\n        -ms-flex-pack: start;\n            justify-content: flex-start; }\n  .swal2-container.swal2-bottom-right {\n    -webkit-box-align: end;\n        -ms-flex-align: end;\n            align-items: flex-end;\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end; }\n  .swal2-container.swal2-grow-fullscreen > .swal2-modal {\n    display: -webkit-box !important;\n    display: -ms-flexbox !important;\n    display: flex !important;\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n    -ms-flex-item-align: stretch;\n        align-self: stretch;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center; }\n  .swal2-container.swal2-grow-row > .swal2-modal {\n    display: -webkit-box !important;\n    display: -ms-flexbox !important;\n    display: flex !important;\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n    -ms-flex-line-pack: center;\n        align-content: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center; }\n  .swal2-container.swal2-grow-column {\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column; }\n    .swal2-container.swal2-grow-column.swal2-top, .swal2-container.swal2-grow-column.swal2-center, .swal2-container.swal2-grow-column.swal2-bottom {\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center; }\n    .swal2-container.swal2-grow-column.swal2-top-left, .swal2-container.swal2-grow-column.swal2-center-left, .swal2-container.swal2-grow-column.swal2-bottom-left {\n      -webkit-box-align: start;\n          -ms-flex-align: start;\n              align-items: flex-start; }\n    .swal2-container.swal2-grow-column.swal2-top-right, .swal2-container.swal2-grow-column.swal2-center-right, .swal2-container.swal2-grow-column.swal2-bottom-right {\n      -webkit-box-align: end;\n          -ms-flex-align: end;\n              align-items: flex-end; }\n    .swal2-container.swal2-grow-column > .swal2-modal {\n      display: -webkit-box !important;\n      display: -ms-flexbox !important;\n      display: flex !important;\n      -webkit-box-flex: 1;\n          -ms-flex: 1;\n              flex: 1;\n      -ms-flex-line-pack: center;\n          align-content: center;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center; }\n  .swal2-container:not(.swal2-top):not(.swal2-top-left):not(.swal2-top-right):not(.swal2-center-left):not(.swal2-center-right):not(.swal2-bottom):not(.swal2-bottom-left):not(.swal2-bottom-right) > .swal2-modal {\n    margin: auto; }\n  @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {\n    .swal2-container .swal2-modal {\n      margin: 0 !important; } }\n  .swal2-container.swal2-fade {\n    -webkit-transition: background-color .1s;\n    transition: background-color .1s; }\n  .swal2-container.swal2-shown {\n    background-color: rgba(0, 0, 0, 0.4); }\n\n.swal2-modal {\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  background-color: #fff;\n  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  border-radius: 5px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  text-align: center;\n  overflow-x: hidden;\n  overflow-y: auto;\n  display: none;\n  position: relative;\n  max-width: 100%; }\n  .swal2-modal:focus {\n    outline: none; }\n  .swal2-modal.swal2-loading {\n    overflow-y: hidden; }\n  .swal2-modal .swal2-title {\n    color: #595959;\n    font-size: 30px;\n    text-align: center;\n    font-weight: 600;\n    text-transform: none;\n    position: relative;\n    margin: 0 0 .4em;\n    padding: 0;\n    display: block;\n    word-wrap: break-word; }\n  .swal2-modal .swal2-buttonswrapper {\n    margin-top: 15px; }\n    .swal2-modal .swal2-buttonswrapper:not(.swal2-loading) .swal2-styled[disabled] {\n      opacity: .4;\n      cursor: no-drop; }\n    .swal2-modal .swal2-buttonswrapper.swal2-loading .swal2-styled.swal2-confirm {\n      -webkit-box-sizing: border-box;\n              box-sizing: border-box;\n      border: 4px solid transparent;\n      border-color: transparent;\n      width: 40px;\n      height: 40px;\n      padding: 0;\n      margin: 7.5px;\n      vertical-align: top;\n      background-color: transparent !important;\n      color: transparent;\n      cursor: default;\n      border-radius: 100%;\n      -webkit-animation: rotate-loading 1.5s linear 0s infinite normal;\n              animation: rotate-loading 1.5s linear 0s infinite normal;\n      -webkit-user-select: none;\n         -moz-user-select: none;\n          -ms-user-select: none;\n              user-select: none; }\n    .swal2-modal .swal2-buttonswrapper.swal2-loading .swal2-styled.swal2-cancel {\n      margin-left: 30px;\n      margin-right: 30px; }\n    .swal2-modal .swal2-buttonswrapper.swal2-loading :not(.swal2-styled).swal2-confirm::after {\n      display: inline-block;\n      content: '';\n      margin-left: 5px;\n      vertical-align: -1px;\n      height: 15px;\n      width: 15px;\n      border: 3px solid #999999;\n      -webkit-box-shadow: 1px 1px 1px #fff;\n              box-shadow: 1px 1px 1px #fff;\n      border-right-color: transparent;\n      border-radius: 50%;\n      -webkit-animation: rotate-loading 1.5s linear 0s infinite normal;\n              animation: rotate-loading 1.5s linear 0s infinite normal; }\n  .swal2-modal .swal2-styled {\n    border: 0;\n    border-radius: 3px;\n    -webkit-box-shadow: none;\n            box-shadow: none;\n    color: #fff;\n    cursor: pointer;\n    font-size: 17px;\n    font-weight: 500;\n    margin: 15px 5px 0;\n    padding: 10px 32px; }\n    .swal2-modal .swal2-styled:focus {\n      outline: none;\n      -webkit-box-shadow: 0 0 0 2px #fff, 0 0 0 4px rgba(50, 100, 150, 0.4);\n              box-shadow: 0 0 0 2px #fff, 0 0 0 4px rgba(50, 100, 150, 0.4); }\n  .swal2-modal .swal2-image {\n    margin: 20px auto;\n    max-width: 100%; }\n  .swal2-modal .swal2-close {\n    background: transparent;\n    border: 0;\n    margin: 0;\n    padding: 0;\n    width: 38px;\n    height: 40px;\n    font-size: 36px;\n    line-height: 40px;\n    font-family: serif;\n    position: absolute;\n    top: 5px;\n    right: 8px;\n    cursor: pointer;\n    color: #cccccc;\n    -webkit-transition: color .1s ease;\n    transition: color .1s ease; }\n    .swal2-modal .swal2-close:hover {\n      color: #d55; }\n  .swal2-modal > .swal2-input,\n  .swal2-modal > .swal2-file,\n  .swal2-modal > .swal2-textarea,\n  .swal2-modal > .swal2-select,\n  .swal2-modal > .swal2-radio,\n  .swal2-modal > .swal2-checkbox {\n    display: none; }\n  .swal2-modal .swal2-content {\n    font-size: 18px;\n    text-align: center;\n    font-weight: 300;\n    position: relative;\n    float: none;\n    margin: 0;\n    padding: 0;\n    line-height: normal;\n    color: #545454;\n    word-wrap: break-word; }\n  .swal2-modal .swal2-input,\n  .swal2-modal .swal2-file,\n  .swal2-modal .swal2-textarea,\n  .swal2-modal .swal2-select,\n  .swal2-modal .swal2-radio,\n  .swal2-modal .swal2-checkbox {\n    margin: 20px auto; }\n  .swal2-modal .swal2-input,\n  .swal2-modal .swal2-file,\n  .swal2-modal .swal2-textarea {\n    width: 100%;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    font-size: 18px;\n    border-radius: 3px;\n    border: 1px solid #d9d9d9;\n    -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.06);\n            box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.06);\n    -webkit-transition: border-color .3s, -webkit-box-shadow .3s;\n    transition: border-color .3s, -webkit-box-shadow .3s;\n    transition: border-color .3s, box-shadow .3s;\n    transition: border-color .3s, box-shadow .3s, -webkit-box-shadow .3s; }\n    .swal2-modal .swal2-input.swal2-inputerror,\n    .swal2-modal .swal2-file.swal2-inputerror,\n    .swal2-modal .swal2-textarea.swal2-inputerror {\n      border-color: #f27474 !important;\n      -webkit-box-shadow: 0 0 2px #f27474 !important;\n              box-shadow: 0 0 2px #f27474 !important; }\n    .swal2-modal .swal2-input:focus,\n    .swal2-modal .swal2-file:focus,\n    .swal2-modal .swal2-textarea:focus {\n      outline: none;\n      border: 1px solid #b4dbed;\n      -webkit-box-shadow: 0 0 3px #c4e6f5;\n              box-shadow: 0 0 3px #c4e6f5; }\n    .swal2-modal .swal2-input::-webkit-input-placeholder,\n    .swal2-modal .swal2-file::-webkit-input-placeholder,\n    .swal2-modal .swal2-textarea::-webkit-input-placeholder {\n      color: #cccccc; }\n    .swal2-modal .swal2-input:-ms-input-placeholder,\n    .swal2-modal .swal2-file:-ms-input-placeholder,\n    .swal2-modal .swal2-textarea:-ms-input-placeholder {\n      color: #cccccc; }\n    .swal2-modal .swal2-input::-ms-input-placeholder,\n    .swal2-modal .swal2-file::-ms-input-placeholder,\n    .swal2-modal .swal2-textarea::-ms-input-placeholder {\n      color: #cccccc; }\n    .swal2-modal .swal2-input::placeholder,\n    .swal2-modal .swal2-file::placeholder,\n    .swal2-modal .swal2-textarea::placeholder {\n      color: #cccccc; }\n  .swal2-modal .swal2-range input {\n    float: left;\n    width: 80%; }\n  .swal2-modal .swal2-range output {\n    float: right;\n    width: 20%;\n    font-size: 20px;\n    font-weight: 600;\n    text-align: center; }\n  .swal2-modal .swal2-range input,\n  .swal2-modal .swal2-range output {\n    height: 43px;\n    line-height: 43px;\n    vertical-align: middle;\n    margin: 20px auto;\n    padding: 0; }\n  .swal2-modal .swal2-input {\n    height: 43px;\n    padding: 0 12px; }\n    .swal2-modal .swal2-input[type='number'] {\n      max-width: 150px; }\n  .swal2-modal .swal2-file {\n    font-size: 20px; }\n  .swal2-modal .swal2-textarea {\n    height: 108px;\n    padding: 12px; }\n  .swal2-modal .swal2-select {\n    color: #545454;\n    font-size: inherit;\n    padding: 5px 10px;\n    min-width: 40%;\n    max-width: 100%; }\n  .swal2-modal .swal2-radio {\n    border: 0; }\n    .swal2-modal .swal2-radio label:not(:first-child) {\n      margin-left: 20px; }\n    .swal2-modal .swal2-radio input,\n    .swal2-modal .swal2-radio span {\n      vertical-align: middle; }\n    .swal2-modal .swal2-radio input {\n      margin: 0 3px 0 0; }\n  .swal2-modal .swal2-checkbox {\n    color: #545454; }\n    .swal2-modal .swal2-checkbox input,\n    .swal2-modal .swal2-checkbox span {\n      vertical-align: middle; }\n  .swal2-modal .swal2-validationerror {\n    background-color: #f0f0f0;\n    margin: 0 -20px;\n    overflow: hidden;\n    padding: 10px;\n    color: gray;\n    font-size: 16px;\n    font-weight: 300;\n    display: none; }\n    .swal2-modal .swal2-validationerror::before {\n      content: '!';\n      display: inline-block;\n      width: 24px;\n      height: 24px;\n      border-radius: 50%;\n      background-color: #ea7d7d;\n      color: #fff;\n      line-height: 24px;\n      text-align: center;\n      margin-right: 10px; }\n\n@supports (-ms-accelerator: true) {\n  .swal2-range input {\n    width: 100% !important; }\n  .swal2-range output {\n    display: none; } }\n\n@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {\n  .swal2-range input {\n    width: 100% !important; }\n  .swal2-range output {\n    display: none; } }\n\n.swal2-icon {\n  width: 80px;\n  height: 80px;\n  border: 4px solid transparent;\n  border-radius: 50%;\n  margin: 20px auto 30px;\n  padding: 0;\n  position: relative;\n  -webkit-box-sizing: content-box;\n          box-sizing: content-box;\n  cursor: default;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none; }\n  .swal2-icon.swal2-error {\n    border-color: #f27474; }\n    .swal2-icon.swal2-error .swal2-x-mark {\n      position: relative;\n      display: block; }\n    .swal2-icon.swal2-error [class^='swal2-x-mark-line'] {\n      position: absolute;\n      height: 5px;\n      width: 47px;\n      background-color: #f27474;\n      display: block;\n      top: 37px;\n      border-radius: 2px; }\n      .swal2-icon.swal2-error [class^='swal2-x-mark-line'][class$='left'] {\n        -webkit-transform: rotate(45deg);\n                transform: rotate(45deg);\n        left: 17px; }\n      .swal2-icon.swal2-error [class^='swal2-x-mark-line'][class$='right'] {\n        -webkit-transform: rotate(-45deg);\n                transform: rotate(-45deg);\n        right: 16px; }\n  .swal2-icon.swal2-warning {\n    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;\n    color: #f8bb86;\n    border-color: #facea8;\n    font-size: 60px;\n    line-height: 80px;\n    text-align: center; }\n  .swal2-icon.swal2-info {\n    font-family: 'Open Sans', sans-serif;\n    color: #3fc3ee;\n    border-color: #9de0f6;\n    font-size: 60px;\n    line-height: 80px;\n    text-align: center; }\n  .swal2-icon.swal2-question {\n    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;\n    color: #87adbd;\n    border-color: #c9dae1;\n    font-size: 60px;\n    line-height: 80px;\n    text-align: center; }\n  .swal2-icon.swal2-success {\n    border-color: #a5dc86; }\n    .swal2-icon.swal2-success [class^='swal2-success-circular-line'] {\n      border-radius: 50%;\n      position: absolute;\n      width: 60px;\n      height: 120px;\n      -webkit-transform: rotate(45deg);\n              transform: rotate(45deg); }\n      .swal2-icon.swal2-success [class^='swal2-success-circular-line'][class$='left'] {\n        border-radius: 120px 0 0 120px;\n        top: -7px;\n        left: -33px;\n        -webkit-transform: rotate(-45deg);\n                transform: rotate(-45deg);\n        -webkit-transform-origin: 60px 60px;\n                transform-origin: 60px 60px; }\n      .swal2-icon.swal2-success [class^='swal2-success-circular-line'][class$='right'] {\n        border-radius: 0 120px 120px 0;\n        top: -11px;\n        left: 30px;\n        -webkit-transform: rotate(-45deg);\n                transform: rotate(-45deg);\n        -webkit-transform-origin: 0 60px;\n                transform-origin: 0 60px; }\n    .swal2-icon.swal2-success .swal2-success-ring {\n      width: 80px;\n      height: 80px;\n      border: 4px solid rgba(165, 220, 134, 0.2);\n      border-radius: 50%;\n      -webkit-box-sizing: content-box;\n              box-sizing: content-box;\n      position: absolute;\n      left: -4px;\n      top: -4px;\n      z-index: 2; }\n    .swal2-icon.swal2-success .swal2-success-fix {\n      width: 7px;\n      height: 90px;\n      position: absolute;\n      left: 28px;\n      top: 8px;\n      z-index: 1;\n      -webkit-transform: rotate(-45deg);\n              transform: rotate(-45deg); }\n    .swal2-icon.swal2-success [class^='swal2-success-line'] {\n      height: 5px;\n      background-color: #a5dc86;\n      display: block;\n      border-radius: 2px;\n      position: absolute;\n      z-index: 2; }\n      .swal2-icon.swal2-success [class^='swal2-success-line'][class$='tip'] {\n        width: 25px;\n        left: 14px;\n        top: 46px;\n        -webkit-transform: rotate(45deg);\n                transform: rotate(45deg); }\n      .swal2-icon.swal2-success [class^='swal2-success-line'][class$='long'] {\n        width: 47px;\n        right: 8px;\n        top: 38px;\n        -webkit-transform: rotate(-45deg);\n                transform: rotate(-45deg); }\n\n.swal2-progresssteps {\n  font-weight: 600;\n  margin: 0 0 20px;\n  padding: 0; }\n  .swal2-progresssteps li {\n    display: inline-block;\n    position: relative; }\n  .swal2-progresssteps .swal2-progresscircle {\n    background: #3085d6;\n    border-radius: 2em;\n    color: #fff;\n    height: 2em;\n    line-height: 2em;\n    text-align: center;\n    width: 2em;\n    z-index: 20; }\n    .swal2-progresssteps .swal2-progresscircle:first-child {\n      margin-left: 0; }\n    .swal2-progresssteps .swal2-progresscircle:last-child {\n      margin-right: 0; }\n    .swal2-progresssteps .swal2-progresscircle.swal2-activeprogressstep {\n      background: #3085d6; }\n      .swal2-progresssteps .swal2-progresscircle.swal2-activeprogressstep ~ .swal2-progresscircle {\n        background: #add8e6; }\n      .swal2-progresssteps .swal2-progresscircle.swal2-activeprogressstep ~ .swal2-progressline {\n        background: #add8e6; }\n  .swal2-progresssteps .swal2-progressline {\n    background: #3085d6;\n    height: .4em;\n    margin: 0 -1px;\n    z-index: 10; }\n\n[class^='swal2'] {\n  -webkit-tap-highlight-color: transparent; }\n\n@-webkit-keyframes showSweetAlert {\n  0% {\n    -webkit-transform: scale(0.7);\n            transform: scale(0.7); }\n  45% {\n    -webkit-transform: scale(1.05);\n            transform: scale(1.05); }\n  80% {\n    -webkit-transform: scale(0.95);\n            transform: scale(0.95); }\n  100% {\n    -webkit-transform: scale(1);\n            transform: scale(1); } }\n\n@keyframes showSweetAlert {\n  0% {\n    -webkit-transform: scale(0.7);\n            transform: scale(0.7); }\n  45% {\n    -webkit-transform: scale(1.05);\n            transform: scale(1.05); }\n  80% {\n    -webkit-transform: scale(0.95);\n            transform: scale(0.95); }\n  100% {\n    -webkit-transform: scale(1);\n            transform: scale(1); } }\n\n@-webkit-keyframes hideSweetAlert {\n  0% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    opacity: 1; }\n  100% {\n    -webkit-transform: scale(0.5);\n            transform: scale(0.5);\n    opacity: 0; } }\n\n@keyframes hideSweetAlert {\n  0% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    opacity: 1; }\n  100% {\n    -webkit-transform: scale(0.5);\n            transform: scale(0.5);\n    opacity: 0; } }\n\n.swal2-show {\n  -webkit-animation: showSweetAlert .3s;\n          animation: showSweetAlert .3s; }\n  .swal2-show.swal2-noanimation {\n    -webkit-animation: none;\n            animation: none; }\n\n.swal2-hide {\n  -webkit-animation: hideSweetAlert .15s forwards;\n          animation: hideSweetAlert .15s forwards; }\n  .swal2-hide.swal2-noanimation {\n    -webkit-animation: none;\n            animation: none; }\n\n@-webkit-keyframes animate-success-tip {\n  0% {\n    width: 0;\n    left: 1px;\n    top: 19px; }\n  54% {\n    width: 0;\n    left: 1px;\n    top: 19px; }\n  70% {\n    width: 50px;\n    left: -8px;\n    top: 37px; }\n  84% {\n    width: 17px;\n    left: 21px;\n    top: 48px; }\n  100% {\n    width: 25px;\n    left: 14px;\n    top: 45px; } }\n\n@keyframes animate-success-tip {\n  0% {\n    width: 0;\n    left: 1px;\n    top: 19px; }\n  54% {\n    width: 0;\n    left: 1px;\n    top: 19px; }\n  70% {\n    width: 50px;\n    left: -8px;\n    top: 37px; }\n  84% {\n    width: 17px;\n    left: 21px;\n    top: 48px; }\n  100% {\n    width: 25px;\n    left: 14px;\n    top: 45px; } }\n\n@-webkit-keyframes animate-success-long {\n  0% {\n    width: 0;\n    right: 46px;\n    top: 54px; }\n  65% {\n    width: 0;\n    right: 46px;\n    top: 54px; }\n  84% {\n    width: 55px;\n    right: 0;\n    top: 35px; }\n  100% {\n    width: 47px;\n    right: 8px;\n    top: 38px; } }\n\n@keyframes animate-success-long {\n  0% {\n    width: 0;\n    right: 46px;\n    top: 54px; }\n  65% {\n    width: 0;\n    right: 46px;\n    top: 54px; }\n  84% {\n    width: 55px;\n    right: 0;\n    top: 35px; }\n  100% {\n    width: 47px;\n    right: 8px;\n    top: 38px; } }\n\n@-webkit-keyframes rotatePlaceholder {\n  0% {\n    -webkit-transform: rotate(-45deg);\n            transform: rotate(-45deg); }\n  5% {\n    -webkit-transform: rotate(-45deg);\n            transform: rotate(-45deg); }\n  12% {\n    -webkit-transform: rotate(-405deg);\n            transform: rotate(-405deg); }\n  100% {\n    -webkit-transform: rotate(-405deg);\n            transform: rotate(-405deg); } }\n\n@keyframes rotatePlaceholder {\n  0% {\n    -webkit-transform: rotate(-45deg);\n            transform: rotate(-45deg); }\n  5% {\n    -webkit-transform: rotate(-45deg);\n            transform: rotate(-45deg); }\n  12% {\n    -webkit-transform: rotate(-405deg);\n            transform: rotate(-405deg); }\n  100% {\n    -webkit-transform: rotate(-405deg);\n            transform: rotate(-405deg); } }\n\n.swal2-animate-success-line-tip {\n  -webkit-animation: animate-success-tip .75s;\n          animation: animate-success-tip .75s; }\n\n.swal2-animate-success-line-long {\n  -webkit-animation: animate-success-long .75s;\n          animation: animate-success-long .75s; }\n\n.swal2-success.swal2-animate-success-icon .swal2-success-circular-line-right {\n  -webkit-animation: rotatePlaceholder 4.25s ease-in;\n          animation: rotatePlaceholder 4.25s ease-in; }\n\n@-webkit-keyframes animate-error-icon {\n  0% {\n    -webkit-transform: rotateX(100deg);\n            transform: rotateX(100deg);\n    opacity: 0; }\n  100% {\n    -webkit-transform: rotateX(0deg);\n            transform: rotateX(0deg);\n    opacity: 1; } }\n\n@keyframes animate-error-icon {\n  0% {\n    -webkit-transform: rotateX(100deg);\n            transform: rotateX(100deg);\n    opacity: 0; }\n  100% {\n    -webkit-transform: rotateX(0deg);\n            transform: rotateX(0deg);\n    opacity: 1; } }\n\n.swal2-animate-error-icon {\n  -webkit-animation: animate-error-icon .5s;\n          animation: animate-error-icon .5s; }\n\n@-webkit-keyframes animate-x-mark {\n  0% {\n    -webkit-transform: scale(0.4);\n            transform: scale(0.4);\n    margin-top: 26px;\n    opacity: 0; }\n  50% {\n    -webkit-transform: scale(0.4);\n            transform: scale(0.4);\n    margin-top: 26px;\n    opacity: 0; }\n  80% {\n    -webkit-transform: scale(1.15);\n            transform: scale(1.15);\n    margin-top: -6px; }\n  100% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    margin-top: 0;\n    opacity: 1; } }\n\n@keyframes animate-x-mark {\n  0% {\n    -webkit-transform: scale(0.4);\n            transform: scale(0.4);\n    margin-top: 26px;\n    opacity: 0; }\n  50% {\n    -webkit-transform: scale(0.4);\n            transform: scale(0.4);\n    margin-top: 26px;\n    opacity: 0; }\n  80% {\n    -webkit-transform: scale(1.15);\n            transform: scale(1.15);\n    margin-top: -6px; }\n  100% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    margin-top: 0;\n    opacity: 1; } }\n\n.swal2-animate-x-mark {\n  -webkit-animation: animate-x-mark .5s;\n          animation: animate-x-mark .5s; }\n\n@-webkit-keyframes rotate-loading {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n@keyframes rotate-loading {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n";
    var defaultParams = {
        title: '',
        titleText: '',
        text: '',
        html: '',
        type: null,
        customClass: '',
        target: 'body',
        animation: true,
        allowOutsideClick: true,
        allowEscapeKey: true,
        allowEnterKey: true,
        showConfirmButton: true,
        showCancelButton: false,
        preConfirm: null,
        confirmButtonText: 'OK',
        confirmButtonAriaLabel: '',
        confirmButtonColor: '#3085d6',
        confirmButtonClass: null,
        cancelButtonText: 'Cancel',
        cancelButtonAriaLabel: '',
        cancelButtonColor: '#aaa',
        cancelButtonClass: null,
        buttonsStyling: true,
        reverseButtons: false,
        focusConfirm: true,
        focusCancel: false,
        showCloseButton: false,
        closeButtonAriaLabel: 'Close this dialog',
        showLoaderOnConfirm: false,
        imageUrl: null,
        imageWidth: null,
        imageHeight: null,
        imageAlt: '',
        imageClass: null,
        timer: null,
        width: 500,
        padding: 20,
        background: '#fff',
        input: null,
        inputPlaceholder: '',
        inputValue: '',
        inputOptions: {},
        inputAutoTrim: true,
        inputClass: null,
        inputAttributes: {},
        inputValidator: null,
        grow: false,
        position: 'center',
        progressSteps: [],
        currentProgressStep: null,
        progressStepsDistance: '40px',
        onBeforeOpen: null,
        onOpen: null,
        onClose: null,
        useRejections: true
    };
    var swalPrefix = 'swal2-';
    var prefix = function prefix(items) {
        var result = {};
        for (var i in items) {
            result[items[i]] = swalPrefix + items[i];
        }
        return result;
    };
    var swalClasses = prefix(['container', 'shown', 'iosfix', 'modal', 'overlay', 'fade', 'show', 'hide', 'noanimation', 'close', 'title', 'content', 'buttonswrapper', 'confirm', 'cancel', 'icon', 'image', 'input', 'file', 'range', 'select', 'radio', 'checkbox', 'textarea', 'inputerror', 'validationerror', 'progresssteps', 'activeprogressstep', 'progresscircle', 'progressline', 'loading', 'styled', 'top', 'top-left', 'top-right', 'center', 'center-left', 'center-right', 'bottom', 'bottom-left', 'bottom-right', 'grow-row', 'grow-column', 'grow-fullscreen']);
    var iconTypes = prefix(['success', 'warning', 'info', 'question', 'error']);
    var consolePrefix = 'SweetAlert2:';
    var colorLuminance = function colorLuminance(hex, lum) {
        hex = String(hex).replace(/[^0-9a-f]/gi, '');
        if (hex.length < 6) {
            hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
        }
        lum = lum || 0;
        var rgb = '#';
        for (var i = 0; i < 3; i++) {
            var c = parseInt(hex.substr(i * 2, 2), 16);
            c = Math.round(Math.min(Math.max(0, c + c * lum), 255)).toString(16);
            rgb += ('00' + c).substr(c.length);
        }
        return rgb;
    };
    var uniqueArray = function uniqueArray(arr) {
        var result = [];
        for (var i in arr) {
            if (result.indexOf(arr[i]) === -1) {
                result.push(arr[i]);
            }
        }
        return result;
    };
    var warn = function warn(message) {
        console.warn(consolePrefix + ' ' + message);
    };
    var error = function error(message) {
        console.error(consolePrefix + ' ' + message);
    };
    var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
        return typeof obj;
    } : function(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    var asyncGenerator = function() {
        function AwaitValue(value) {
            this.value = value;
        }

        function AsyncGenerator(gen) {
            var front, back;

            function send(key, arg) {
                return new Promise(function(resolve, reject) {
                    var request = {
                        key: key,
                        arg: arg,
                        resolve: resolve,
                        reject: reject,
                        next: null
                    };
                    if (back) {
                        back = back.next = request;
                    } else {
                        front = back = request;
                        resume(key, arg);
                    }
                });
            }

            function resume(key, arg) {
                try {
                    var result = gen[key](arg);
                    var value = result.value;
                    if (value instanceof AwaitValue) {
                        Promise.resolve(value.value).then(function(arg) {
                            resume("next", arg);
                        }, function(arg) {
                            resume("throw", arg);
                        });
                    } else {
                        settle(result.done ? "return" : "normal", result.value);
                    }
                } catch (err) {
                    settle("throw", err);
                }
            }

            function settle(type, value) {
                switch (type) {
                    case "return":
                        front.resolve({
                            value: value,
                            done: true
                        });
                        break;
                    case "throw":
                        front.reject(value);
                        break;
                    default:
                        front.resolve({
                            value: value,
                            done: false
                        });
                        break;
                }
                front = front.next;
                if (front) {
                    resume(front.key, front.arg);
                } else {
                    back = null;
                }
            }
            this._invoke = send;
            if (typeof gen.return !== "function") {
                this.return = undefined;
            }
        }
        if (typeof Symbol === "function" && Symbol.asyncIterator) {
            AsyncGenerator.prototype[Symbol.asyncIterator] = function() {
                return this;
            };
        }
        AsyncGenerator.prototype.next = function(arg) {
            return this._invoke("next", arg);
        };
        AsyncGenerator.prototype.throw = function(arg) {
            return this._invoke("throw", arg);
        };
        AsyncGenerator.prototype.return = function(arg) {
            return this._invoke("return", arg);
        };
        return {
            wrap: function(fn) {
                return function() {
                    return new AsyncGenerator(fn.apply(this, arguments));
                };
            },
            await: function(value) {
                return new AwaitValue(value);
            }
        };
    }();
    var _extends = Object.assign || function(target) {
        for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];
            for (var key in source) {
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                }
            }
        }
        return target;
    };
    var modalParams = _extends({}, defaultParams);
    var queue = [];
    if (typeof Promise === 'undefined') {
        error('This package requires a Promise library, please include a shim to enable it in this browser (See: https://github.com/limonte/sweetalert2/wiki/Migration-from-SweetAlert-to-SweetAlert2#1-ie-support)');
    }
    var setParameters = function setParameters(params) {
        if (typeof params.target === 'string' && !document.querySelector(params.target) || typeof params.target !== 'string' && !params.target.appendChild) {
            warn('Target parameter is not valid, defaulting to "body"');
            params.target = 'body';
        }
        var modal = void 0;
        var oldModal = getModal();
        var targetElement = typeof params.target === 'string' ? document.querySelector(params.target) : params.target;
        if (oldModal && targetElement && oldModal.parentNode !== targetElement.parentNode) {
            modal = init(params);
        } else {
            modal = oldModal || init(params);
        }
        for (var param in params) {
            if (!sweetAlert$1.isValidParameter(param)) {
                warn('Unknown parameter "' + param + '"');
            }
        }
        modal.style.width = typeof params.width === 'number' ? params.width + 'px' : params.width;
        modal.style.padding = params.padding + 'px';
        modal.style.background = params.background;
        var successIconParts = modal.querySelectorAll('[class^=swal2-success-circular-line], .swal2-success-fix');
        for (var i = 0; i < successIconParts.length; i++) {
            successIconParts[i].style.background = params.background;
        }
        var container = getContainer();
        var title = getTitle();
        var content = getContent();
        var buttonsWrapper = getButtonsWrapper();
        var confirmButton = getConfirmButton();
        var cancelButton = getCancelButton();
        var closeButton = getCloseButton();
        if (params.titleText) {
            title.innerText = params.titleText;
        } else {
            title.innerHTML = params.title.split('\n').join('<br />');
        }
        if (params.text || params.html) {
            if (_typeof(params.html) === 'object') {
                content.innerHTML = '';
                if (0 in params.html) {
                    for (var _i = 0; _i in params.html; _i++) {
                        content.appendChild(params.html[_i].cloneNode(true));
                    }
                } else {
                    content.appendChild(params.html.cloneNode(true));
                }
            } else if (params.html) {
                content.innerHTML = params.html;
            } else if (params.text) {
                content.textContent = params.text;
            }
            show(content);
        } else {
            hide(content);
        }
        if (params.position in swalClasses) {
            addClass(container, swalClasses[params.position]);
        }
        if (params.grow && typeof params.grow === 'string') {
            var growClass = 'grow-' + params.grow;
            if (growClass in swalClasses) {
                addClass(container, swalClasses[growClass]);
            }
        }
        if (params.showCloseButton) {
            closeButton.setAttribute('aria-label', params.closeButtonAriaLabel);
            show(closeButton);
        } else {
            hide(closeButton);
        }
        modal.className = swalClasses.modal;
        if (params.customClass) {
            addClass(modal, params.customClass);
        }
        var progressStepsContainer = getProgressSteps();
        var currentProgressStep = parseInt(params.currentProgressStep === null ? sweetAlert$1.getQueueStep() : params.currentProgressStep, 10);
        if (params.progressSteps.length) {
            show(progressStepsContainer);
            empty(progressStepsContainer);
            if (currentProgressStep >= params.progressSteps.length) {
                warn('Invalid currentProgressStep parameter, it should be less than progressSteps.length ' + '(currentProgressStep like JS arrays starts from 0)');
            }
            params.progressSteps.forEach(function(step, index) {
                var circle = document.createElement('li');
                addClass(circle, swalClasses.progresscircle);
                circle.innerHTML = step;
                if (index === currentProgressStep) {
                    addClass(circle, swalClasses.activeprogressstep);
                }
                progressStepsContainer.appendChild(circle);
                if (index !== params.progressSteps.length - 1) {
                    var line = document.createElement('li');
                    addClass(line, swalClasses.progressline);
                    line.style.width = params.progressStepsDistance;
                    progressStepsContainer.appendChild(line);
                }
            });
        } else {
            hide(progressStepsContainer);
        }
        var icons = getIcons();
        for (var _i2 = 0; _i2 < icons.length; _i2++) {
            hide(icons[_i2]);
        }
        if (params.type) {
            var validType = false;
            for (var iconType in iconTypes) {
                if (params.type === iconType) {
                    validType = true;
                    break;
                }
            }
            if (!validType) {
                error('Unknown alert type: ' + params.type);
                return false;
            }
            var icon = modal.querySelector('.' + swalClasses.icon + '.' + iconTypes[params.type]);
            show(icon);
            if (params.animation) {
                switch (params.type) {
                    case 'success':
                        addClass(icon, 'swal2-animate-success-icon');
                        addClass(icon.querySelector('.swal2-success-line-tip'), 'swal2-animate-success-line-tip');
                        addClass(icon.querySelector('.swal2-success-line-long'), 'swal2-animate-success-line-long');
                        break;
                    case 'error':
                        addClass(icon, 'swal2-animate-error-icon');
                        addClass(icon.querySelector('.swal2-x-mark'), 'swal2-animate-x-mark');
                        break;
                    default:
                        break;
                }
            }
        }
        var image = getImage();
        if (params.imageUrl) {
            image.setAttribute('src', params.imageUrl);
            image.setAttribute('alt', params.imageAlt);
            show(image);
            if (params.imageWidth) {
                image.setAttribute('width', params.imageWidth);
            } else {
                image.removeAttribute('width');
            }
            if (params.imageHeight) {
                image.setAttribute('height', params.imageHeight);
            } else {
                image.removeAttribute('height');
            }
            image.className = swalClasses.image;
            if (params.imageClass) {
                addClass(image, params.imageClass);
            }
        } else {
            hide(image);
        }
        if (params.showCancelButton) {
            cancelButton.style.display = 'inline-block';
        } else {
            hide(cancelButton);
        }
        if (params.showConfirmButton) {
            removeStyleProperty(confirmButton, 'display');
        } else {
            hide(confirmButton);
        }
        if (!params.showConfirmButton && !params.showCancelButton) {
            hide(buttonsWrapper);
        } else {
            show(buttonsWrapper);
        }
        confirmButton.innerHTML = params.confirmButtonText;
        cancelButton.innerHTML = params.cancelButtonText;
        confirmButton.setAttribute('aria-label', params.confirmButtonAriaLabel);
        cancelButton.setAttribute('aria-label', params.cancelButtonAriaLabel);
        if (params.buttonsStyling) {
            confirmButton.style.backgroundColor = params.confirmButtonColor;
            cancelButton.style.backgroundColor = params.cancelButtonColor;
        }
        confirmButton.className = swalClasses.confirm;
        addClass(confirmButton, params.confirmButtonClass);
        cancelButton.className = swalClasses.cancel;
        addClass(cancelButton, params.cancelButtonClass);
        if (params.buttonsStyling) {
            addClass(confirmButton, swalClasses.styled);
            addClass(cancelButton, swalClasses.styled);
        } else {
            removeClass(confirmButton, swalClasses.styled);
            removeClass(cancelButton, swalClasses.styled);
            confirmButton.style.backgroundColor = confirmButton.style.borderLeftColor = confirmButton.style.borderRightColor = '';
            cancelButton.style.backgroundColor = cancelButton.style.borderLeftColor = cancelButton.style.borderRightColor = '';
        }
        if (params.animation === true) {
            removeClass(modal, swalClasses.noanimation);
        } else {
            addClass(modal, swalClasses.noanimation);
        }
        if (params.showLoaderOnConfirm && !params.preConfirm) {
            warn('showLoaderOnConfirm is set to true, but preConfirm is not defined.\n' + 'showLoaderOnConfirm should be used together with preConfirm, see usage example:\n' + 'https://limonte.github.io/sweetalert2/#ajax-request');
        }
    };
    var openModal = function openModal(animation, onBeforeOpen, onComplete) {
        var container = getContainer();
        var modal = getModal();
        if (onBeforeOpen !== null && typeof onBeforeOpen === 'function') {
            onBeforeOpen(modal);
        }
        if (animation) {
            addClass(modal, swalClasses.show);
            addClass(container, swalClasses.fade);
            removeClass(modal, swalClasses.hide);
        } else {
            removeClass(modal, swalClasses.fade);
        }
        show(modal);
        container.style.overflowY = 'hidden';
        if (animationEndEvent && !hasClass(modal, swalClasses.noanimation)) {
            modal.addEventListener(animationEndEvent, function swalCloseEventFinished() {
                modal.removeEventListener(animationEndEvent, swalCloseEventFinished);
                container.style.overflowY = 'auto';
            });
        } else {
            container.style.overflowY = 'auto';
        }
        addClass(document.documentElement, swalClasses.shown);
        addClass(document.body, swalClasses.shown);
        addClass(container, swalClasses.shown);
        fixScrollbar();
        iOSfix();
        states.previousActiveElement = document.activeElement;
        if (onComplete !== null && typeof onComplete === 'function') {
            setTimeout(function() {
                onComplete(modal);
            });
        }
    };
    var fixScrollbar = function fixScrollbar() {
        if (states.previousBodyPadding !== null) {
            return;
        }
        if (document.body.scrollHeight > window.innerHeight) {
            states.previousBodyPadding = document.body.style.paddingRight;
            document.body.style.paddingRight = measureScrollbar() + 'px';
        }
    };
    var undoScrollbar = function undoScrollbar() {
        if (states.previousBodyPadding !== null) {
            document.body.style.paddingRight = states.previousBodyPadding;
            states.previousBodyPadding = null;
        }
    };
    var iOSfix = function iOSfix() {
        var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
        if (iOS && !hasClass(document.body, swalClasses.iosfix)) {
            var offset = document.body.scrollTop;
            document.body.style.top = offset * -1 + 'px';
            addClass(document.body, swalClasses.iosfix);
        }
    };
    var undoIOSfix = function undoIOSfix() {
        if (hasClass(document.body, swalClasses.iosfix)) {
            var offset = parseInt(document.body.style.top, 10);
            removeClass(document.body, swalClasses.iosfix);
            document.body.style.top = '';
            document.body.scrollTop = offset * -1;
        }
    };
    var sweetAlert$1 = function sweetAlert() {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }
        if (args[0] === undefined) {
            error('SweetAlert2 expects at least 1 attribute!');
            return false;
        }
        var params = _extends({}, modalParams);
        switch (_typeof(args[0])) {
            case 'string':
                params.title = args[0];
                params.html = args[1];
                params.type = args[2];
                break;
            case 'object':
                _extends(params, args[0]);
                params.extraParams = args[0].extraParams;
                if (params.input === 'email' && params.inputValidator === null) {
                    params.inputValidator = function(email) {
                        return new Promise(function(resolve, reject) {
                            var emailRegex = /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
                            if (emailRegex.test(email)) {
                                resolve();
                            } else {
                                reject('Invalid email address');
                            }
                        });
                    };
                }
                if (params.input === 'url' && params.inputValidator === null) {
                    params.inputValidator = function(url) {
                        return new Promise(function(resolve, reject) {
                            var urlRegex = /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)$/;
                            if (urlRegex.test(url)) {
                                resolve();
                            } else {
                                reject('Invalid URL');
                            }
                        });
                    };
                }
                break;
            default:
                error('Unexpected type of argument! Expected "string" or "object", got ' + _typeof(args[0]));
                return false;
        }
        setParameters(params);
        var container = getContainer();
        var modal = getModal();
        return new Promise(function(resolve, reject) {
            if (params.timer) {
                modal.timeout = setTimeout(function() {
                    sweetAlert.closeModal(params.onClose);
                    if (params.useRejections) {
                        reject('timer');
                    } else {
                        resolve({
                            dismiss: 'timer'
                        });
                    }
                }, params.timer);
            }
            var getInput = function getInput(inputType) {
                inputType = inputType || params.input;
                if (!inputType) {
                    return null;
                }
                switch (inputType) {
                    case 'select':
                    case 'textarea':
                    case 'file':
                        return getChildByClass(modal, swalClasses[inputType]);
                    case 'checkbox':
                        return modal.querySelector('.' + swalClasses.checkbox + ' input');
                    case 'radio':
                        return modal.querySelector('.' + swalClasses.radio + ' input:checked') || modal.querySelector('.' + swalClasses.radio + ' input:first-child');
                    case 'range':
                        return modal.querySelector('.' + swalClasses.range + ' input');
                    default:
                        return getChildByClass(modal, swalClasses.input);
                }
            };
            var getInputValue = function getInputValue() {
                var input = getInput();
                if (!input) {
                    return null;
                }
                switch (params.input) {
                    case 'checkbox':
                        return input.checked ? 1 : 0;
                    case 'radio':
                        return input.checked ? input.value : null;
                    case 'file':
                        return input.files.length ? input.files[0] : null;
                    default:
                        return params.inputAutoTrim ? input.value.trim() : input.value;
                }
            };
            if (params.input) {
                setTimeout(function() {
                    var input = getInput();
                    if (input) {
                        focusInput(input);
                    }
                }, 0);
            }
            var confirm = function confirm(value) {
                if (params.showLoaderOnConfirm) {
                    sweetAlert.showLoading();
                }
                if (params.preConfirm) {
                    params.preConfirm(value, params.extraParams).then(function(preConfirmValue) {
                        sweetAlert.closeModal(params.onClose);
                        resolve(preConfirmValue || value);
                    }, function(error$$1) {
                        sweetAlert.hideLoading();
                        if (error$$1) {
                            sweetAlert.showValidationError(error$$1);
                        }
                    });
                } else {
                    sweetAlert.closeModal(params.onClose);
                    if (params.useRejections) {
                        resolve(value);
                    } else {
                        resolve({
                            value: value
                        });
                    }
                }
            };
            var onButtonEvent = function onButtonEvent(event) {
                var e = event || window.event;
                var target = e.target || e.srcElement;
                var confirmButton = getConfirmButton();
                var cancelButton = getCancelButton();
                var targetedConfirm = confirmButton && (confirmButton === target || confirmButton.contains(target));
                var targetedCancel = cancelButton && (cancelButton === target || cancelButton.contains(target));
                switch (e.type) {
                    case 'mouseover':
                    case 'mouseup':
                        if (params.buttonsStyling) {
                            if (targetedConfirm) {
                                confirmButton.style.backgroundColor = colorLuminance(params.confirmButtonColor, -0.1);
                            } else if (targetedCancel) {
                                cancelButton.style.backgroundColor = colorLuminance(params.cancelButtonColor, -0.1);
                            }
                        }
                        break;
                    case 'mouseout':
                        if (params.buttonsStyling) {
                            if (targetedConfirm) {
                                confirmButton.style.backgroundColor = params.confirmButtonColor;
                            } else if (targetedCancel) {
                                cancelButton.style.backgroundColor = params.cancelButtonColor;
                            }
                        }
                        break;
                    case 'mousedown':
                        if (params.buttonsStyling) {
                            if (targetedConfirm) {
                                confirmButton.style.backgroundColor = colorLuminance(params.confirmButtonColor, -0.2);
                            } else if (targetedCancel) {
                                cancelButton.style.backgroundColor = colorLuminance(params.cancelButtonColor, -0.2);
                            }
                        }
                        break;
                    case 'click':
                        if (targetedConfirm && sweetAlert.isVisible()) {
                            sweetAlert.disableButtons();
                            if (params.input) {
                                var inputValue = getInputValue();
                                if (params.inputValidator) {
                                    sweetAlert.disableInput();
                                    params.inputValidator(inputValue, params.extraParams).then(function() {
                                        sweetAlert.enableButtons();
                                        sweetAlert.enableInput();
                                        confirm(inputValue);
                                    }, function(error$$1) {
                                        sweetAlert.enableButtons();
                                        sweetAlert.enableInput();
                                        if (error$$1) {
                                            sweetAlert.showValidationError(error$$1);
                                        }
                                    });
                                } else {
                                    confirm(inputValue);
                                }
                            } else {
                                confirm(true);
                            }
                        } else if (targetedCancel && sweetAlert.isVisible()) {
                            sweetAlert.disableButtons();
                            sweetAlert.closeModal(params.onClose);
                            if (params.useRejections) {
                                reject('cancel');
                            } else {
                                resolve({
                                    dismiss: 'cancel'
                                });
                            }
                        }
                        break;
                    default:
                }
            };
            var buttons = modal.querySelectorAll('button');
            for (var i = 0; i < buttons.length; i++) {
                buttons[i].onclick = onButtonEvent;
                buttons[i].onmouseover = onButtonEvent;
                buttons[i].onmouseout = onButtonEvent;
                buttons[i].onmousedown = onButtonEvent;
            }
            getCloseButton().onclick = function() {
                sweetAlert.closeModal(params.onClose);
                if (params.useRejections) {
                    reject('close');
                } else {
                    resolve({
                        dismiss: 'close'
                    });
                }
            };
            container.onclick = function(e) {
                if (e.target !== container) {
                    return;
                }
                if (params.allowOutsideClick) {
                    sweetAlert.closeModal(params.onClose);
                    if (params.useRejections) {
                        reject('overlay');
                    } else {
                        resolve({
                            dismiss: 'overlay'
                        });
                    }
                }
            };
            var buttonsWrapper = getButtonsWrapper();
            var confirmButton = getConfirmButton();
            var cancelButton = getCancelButton();
            if (params.reverseButtons) {
                confirmButton.parentNode.insertBefore(cancelButton, confirmButton);
            } else {
                confirmButton.parentNode.insertBefore(confirmButton, cancelButton);
            }
            var setFocus = function setFocus(index, increment) {
                var focusableElements = getFocusableElements(params.focusCancel);
                for (var _i3 = 0; _i3 < focusableElements.length; _i3++) {
                    index = index + increment;
                    if (index === focusableElements.length) {
                        index = 0;
                    } else if (index === -1) {
                        index = focusableElements.length - 1;
                    }
                    var el = focusableElements[index];
                    if (isVisible(el)) {
                        return el.focus();
                    }
                }
            };
            var handleKeyDown = function handleKeyDown(event) {
                var e = event || window.event;
                if (e.key === 'Enter') {
                    if (e.target === getInput()) {
                        sweetAlert.clickConfirm();
                        e.preventDefault();
                    }
                } else if (e.key === 'Tab') {
                    var targetElement = e.target || e.srcElement;
                    var focusableElements = getFocusableElements(params.focusCancel);
                    var btnIndex = -1;
                    for (var _i4 = 0; _i4 < focusableElements.length; _i4++) {
                        if (targetElement === focusableElements[_i4]) {
                            btnIndex = _i4;
                            break;
                        }
                    }
                    if (!e.shiftKey) {
                        setFocus(btnIndex, 1);
                    } else {
                        setFocus(btnIndex, -1);
                    }
                    e.stopPropagation();
                    e.preventDefault();
                } else if (['ArrowLeft', 'ArrowRight', 'ArrowUp', 'Arrowdown'].indexOf(e.key) !== -1) {
                    if (document.activeElement === confirmButton && isVisible(cancelButton)) {
                        cancelButton.focus();
                    } else if (document.activeElement === cancelButton && isVisible(confirmButton)) {
                        confirmButton.focus();
                    }
                } else if (e.key === 'Escape' && params.allowEscapeKey === true) {
                    sweetAlert.closeModal(params.onClose);
                    if (params.useRejections) {
                        reject('esc');
                    } else {
                        resolve({
                            dismiss: 'esc'
                        });
                    }
                }
            };
            if (!window.onkeydown || window.onkeydown.toString() !== handleKeyDown.toString()) {
                states.previousWindowKeyDown = window.onkeydown;
                window.onkeydown = handleKeyDown;
            }
            if (params.buttonsStyling) {
                confirmButton.style.borderLeftColor = params.confirmButtonColor;
                confirmButton.style.borderRightColor = params.confirmButtonColor;
            }
            sweetAlert.hideLoading = sweetAlert.disableLoading = function() {
                if (!params.showConfirmButton) {
                    hide(confirmButton);
                    if (!params.showCancelButton) {
                        hide(getButtonsWrapper());
                    }
                }
                removeClass(buttonsWrapper, swalClasses.loading);
                removeClass(modal, swalClasses.loading);
                modal.removeAttribute('aria-busy');
                confirmButton.disabled = false;
                cancelButton.disabled = false;
            };
            sweetAlert.getTitle = function() {
                return getTitle();
            };
            sweetAlert.getContent = function() {
                return getContent();
            };
            sweetAlert.getInput = function() {
                return getInput();
            };
            sweetAlert.getImage = function() {
                return getImage();
            };
            sweetAlert.getButtonsWrapper = function() {
                return getButtonsWrapper();
            };
            sweetAlert.getConfirmButton = function() {
                return getConfirmButton();
            };
            sweetAlert.getCancelButton = function() {
                return getCancelButton();
            };
            sweetAlert.enableButtons = function() {
                confirmButton.disabled = false;
                cancelButton.disabled = false;
            };
            sweetAlert.disableButtons = function() {
                confirmButton.disabled = true;
                cancelButton.disabled = true;
            };
            sweetAlert.enableConfirmButton = function() {
                confirmButton.disabled = false;
            };
            sweetAlert.disableConfirmButton = function() {
                confirmButton.disabled = true;
            };
            sweetAlert.enableInput = function() {
                var input = getInput();
                if (!input) {
                    return false;
                }
                if (input.type === 'radio') {
                    var radiosContainer = input.parentNode.parentNode;
                    var radios = radiosContainer.querySelectorAll('input');
                    for (var _i5 = 0; _i5 < radios.length; _i5++) {
                        radios[_i5].disabled = false;
                    }
                } else {
                    input.disabled = false;
                }
            };
            sweetAlert.disableInput = function() {
                var input = getInput();
                if (!input) {
                    return false;
                }
                if (input && input.type === 'radio') {
                    var radiosContainer = input.parentNode.parentNode;
                    var radios = radiosContainer.querySelectorAll('input');
                    for (var _i6 = 0; _i6 < radios.length; _i6++) {
                        radios[_i6].disabled = true;
                    }
                } else {
                    input.disabled = true;
                }
            };
            sweetAlert.showValidationError = function(error$$1) {
                var validationError = getValidationError();
                validationError.innerHTML = error$$1;
                show(validationError);
                var input = getInput();
                if (input) {
                    input.setAttribute('aria-invalid', true);
                    input.setAttribute('aria-describedBy', swalClasses.validationerror);
                    focusInput(input);
                    addClass(input, swalClasses.inputerror);
                }
            };
            sweetAlert.resetValidationError = function() {
                var validationError = getValidationError();
                hide(validationError);
                var input = getInput();
                if (input) {
                    input.removeAttribute('aria-invalid');
                    input.removeAttribute('aria-describedBy');
                    removeClass(input, swalClasses.inputerror);
                }
            };
            sweetAlert.getProgressSteps = function() {
                return params.progressSteps;
            };
            sweetAlert.setProgressSteps = function(progressSteps) {
                params.progressSteps = progressSteps;
                setParameters(params);
            };
            sweetAlert.showProgressSteps = function() {
                show(getProgressSteps());
            };
            sweetAlert.hideProgressSteps = function() {
                hide(getProgressSteps());
            };
            sweetAlert.enableButtons();
            sweetAlert.hideLoading();
            sweetAlert.resetValidationError();
            var inputTypes = ['input', 'file', 'range', 'select', 'radio', 'checkbox', 'textarea'];
            var input = void 0;
            for (var _i7 = 0; _i7 < inputTypes.length; _i7++) {
                var inputClass = swalClasses[inputTypes[_i7]];
                var inputContainer = getChildByClass(modal, inputClass);
                input = getInput(inputTypes[_i7]);
                if (input) {
                    for (var j in input.attributes) {
                        if (input.attributes.hasOwnProperty(j)) {
                            var attrName = input.attributes[j].name;
                            if (attrName !== 'type' && attrName !== 'value') {
                                input.removeAttribute(attrName);
                            }
                        }
                    }
                    for (var attr in params.inputAttributes) {
                        input.setAttribute(attr, params.inputAttributes[attr]);
                    }
                }
                inputContainer.className = inputClass;
                if (params.inputClass) {
                    addClass(inputContainer, params.inputClass);
                }
                hide(inputContainer);
            }
            var populateInputOptions = void 0;
            switch (params.input) {
                case 'text':
                case 'email':
                case 'password':
                case 'number':
                case 'tel':
                case 'url':
                    input = getChildByClass(modal, swalClasses.input);
                    input.value = params.inputValue;
                    input.placeholder = params.inputPlaceholder;
                    input.type = params.input;
                    show(input);
                    break;
                case 'file':
                    input = getChildByClass(modal, swalClasses.file);
                    input.placeholder = params.inputPlaceholder;
                    input.type = params.input;
                    show(input);
                    break;
                case 'range':
                    var range = getChildByClass(modal, swalClasses.range);
                    var rangeInput = range.querySelector('input');
                    var rangeOutput = range.querySelector('output');
                    rangeInput.value = params.inputValue;
                    rangeInput.type = params.input;
                    rangeOutput.value = params.inputValue;
                    show(range);
                    break;
                case 'select':
                    var select = getChildByClass(modal, swalClasses.select);
                    select.innerHTML = '';
                    if (params.inputPlaceholder) {
                        var placeholder = document.createElement('option');
                        placeholder.innerHTML = params.inputPlaceholder;
                        placeholder.value = '';
                        placeholder.disabled = true;
                        placeholder.selected = true;
                        select.appendChild(placeholder);
                    }
                    populateInputOptions = function populateInputOptions(inputOptions) {
                        for (var optionValue in inputOptions) {
                            var option = document.createElement('option');
                            option.value = optionValue;
                            option.innerHTML = inputOptions[optionValue];
                            if (params.inputValue.toString() === optionValue) {
                                option.selected = true;
                            }
                            select.appendChild(option);
                        }
                        show(select);
                        select.focus();
                    };
                    break;
                case 'radio':
                    var radio = getChildByClass(modal, swalClasses.radio);
                    radio.innerHTML = '';
                    populateInputOptions = function populateInputOptions(inputOptions) {
                        for (var radioValue in inputOptions) {
                            var radioInput = document.createElement('input');
                            var radioLabel = document.createElement('label');
                            var radioLabelSpan = document.createElement('span');
                            radioInput.type = 'radio';
                            radioInput.name = swalClasses.radio;
                            radioInput.value = radioValue;
                            if (params.inputValue.toString() === radioValue) {
                                radioInput.checked = true;
                            }
                            radioLabelSpan.innerHTML = inputOptions[radioValue];
                            radioLabel.appendChild(radioInput);
                            radioLabel.appendChild(radioLabelSpan);
                            radioLabel.for = radioInput.id;
                            radio.appendChild(radioLabel);
                        }
                        show(radio);
                        var radios = radio.querySelectorAll('input');
                        if (radios.length) {
                            radios[0].focus();
                        }
                    };
                    break;
                case 'checkbox':
                    var checkbox = getChildByClass(modal, swalClasses.checkbox);
                    var checkboxInput = getInput('checkbox');
                    checkboxInput.type = 'checkbox';
                    checkboxInput.value = 1;
                    checkboxInput.id = swalClasses.checkbox;
                    checkboxInput.checked = Boolean(params.inputValue);
                    var label = checkbox.getElementsByTagName('span');
                    if (label.length) {
                        checkbox.removeChild(label[0]);
                    }
                    label = document.createElement('span');
                    label.innerHTML = params.inputPlaceholder;
                    checkbox.appendChild(label);
                    show(checkbox);
                    break;
                case 'textarea':
                    var textarea = getChildByClass(modal, swalClasses.textarea);
                    textarea.value = params.inputValue;
                    textarea.placeholder = params.inputPlaceholder;
                    show(textarea);
                    break;
                case null:
                    break;
                default:
                    error('Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "' + params.input + '"');
                    break;
            }
            if (params.input === 'select' || params.input === 'radio') {
                if (params.inputOptions instanceof Promise) {
                    sweetAlert.showLoading();
                    params.inputOptions.then(function(inputOptions) {
                        sweetAlert.hideLoading();
                        populateInputOptions(inputOptions);
                    });
                } else if (_typeof(params.inputOptions) === 'object') {
                    populateInputOptions(params.inputOptions);
                } else {
                    error('Unexpected type of inputOptions! Expected object or Promise, got ' + _typeof(params.inputOptions));
                }
            }
            openModal(params.animation, params.onBeforeOpen, params.onOpen);
            if (!params.allowEnterKey) {
                if (document.activeElement) {
                    document.activeElement.blur();
                }
            } else if (params.focusCancel && isVisible(cancelButton)) {
                cancelButton.focus();
            } else if (params.focusConfirm && isVisible(confirmButton)) {
                confirmButton.focus();
            } else {
                setFocus(-1, 1);
            }
            getContainer().scrollTop = 0;
        });
    };
    sweetAlert$1.isVisible = function() {
        return !!getModal();
    };
    sweetAlert$1.queue = function(steps) {
        queue = steps;
        var resetQueue = function resetQueue() {
            queue = [];
            document.body.removeAttribute('data-swal2-queue-step');
        };
        var queueResult = [];
        return new Promise(function(resolve, reject) {
            (function step(i, callback) {
                if (i < queue.length) {
                    document.body.setAttribute('data-swal2-queue-step', i);
                    sweetAlert$1(queue[i]).then(function(result) {
                        queueResult.push(result);
                        step(i + 1, callback);
                    }, function(dismiss) {
                        resetQueue();
                        reject(dismiss);
                    });
                } else {
                    resetQueue();
                    resolve(queueResult);
                }
            })(0);
        });
    };
    sweetAlert$1.getQueueStep = function() {
        return document.body.getAttribute('data-swal2-queue-step');
    };
    sweetAlert$1.insertQueueStep = function(step, index) {
        if (index && index < queue.length) {
            return queue.splice(index, 0, step);
        }
        return queue.push(step);
    };
    sweetAlert$1.deleteQueueStep = function(index) {
        if (typeof queue[index] !== 'undefined') {
            queue.splice(index, 1);
        }
    };
    sweetAlert$1.close = sweetAlert$1.closeModal = function(onComplete) {
        var container = getContainer();
        var modal = getModal();
        if (!modal) {
            return;
        }
        removeClass(modal, swalClasses.show);
        addClass(modal, swalClasses.hide);
        clearTimeout(modal.timeout);
        resetPrevState();
        var removeModalAndResetState = function removeModalAndResetState() {
            if (container.parentNode) {
                container.parentNode.removeChild(container);
            }
            removeClass(document.documentElement, swalClasses.shown);
            removeClass(document.body, swalClasses.shown);
            undoScrollbar();
            undoIOSfix();
        };
        if (animationEndEvent && !hasClass(modal, swalClasses.noanimation)) {
            modal.addEventListener(animationEndEvent, function swalCloseEventFinished() {
                modal.removeEventListener(animationEndEvent, swalCloseEventFinished);
                if (hasClass(modal, swalClasses.hide)) {
                    removeModalAndResetState();
                }
            });
        } else {
            removeModalAndResetState();
        }
        if (onComplete !== null && typeof onComplete === 'function') {
            setTimeout(function() {
                onComplete(modal);
            });
        }
    };
    sweetAlert$1.clickConfirm = function() {
        return getConfirmButton().click();
    };
    sweetAlert$1.clickCancel = function() {
        return getCancelButton().click();
    };
    sweetAlert$1.showLoading = sweetAlert$1.enableLoading = function() {
        var modal = getModal();
        if (!modal) {
            sweetAlert$1('');
        }
        modal = getModal();
        var buttonsWrapper = getButtonsWrapper();
        var confirmButton = getConfirmButton();
        var cancelButton = getCancelButton();
        show(buttonsWrapper);
        show(confirmButton, 'inline-block');
        addClass(buttonsWrapper, swalClasses.loading);
        addClass(modal, swalClasses.loading);
        confirmButton.disabled = true;
        cancelButton.disabled = true;
        modal.setAttribute('aria-busy', true);
        modal.focus();
    };
    sweetAlert$1.isValidParameter = function(paramName) {
        return defaultParams.hasOwnProperty(paramName) || paramName === 'extraParams';
    };
    sweetAlert$1.setDefaults = function(userParams) {
        if (!userParams || (typeof userParams === 'undefined' ? 'undefined' : _typeof(userParams)) !== 'object') {
            return error('the argument for setDefaults() is required and has to be a object');
        }
        for (var param in userParams) {
            if (!sweetAlert$1.isValidParameter(param)) {
                warn('Unknown parameter "' + param + '"');
                delete userParams[param];
            }
        }
        _extends(modalParams, userParams);
    };
    sweetAlert$1.resetDefaults = function() {
        modalParams = _extends({}, defaultParams);
    };
    sweetAlert$1.noop = function() {};
    sweetAlert$1.version = '6.11.4';
    sweetAlert$1.default = sweetAlert$1;
    var states = {
        previousWindowKeyDown: null,
        previousActiveElement: null,
        previousBodyPadding: null
    };
    var init = function init(params) {
        var c = getContainer();
        if (c) {
            c.parentNode.removeChild(c);
        }
        if (typeof document === 'undefined') {
            error('SweetAlert2 requires document to initialize');
            return;
        }
        var container = document.createElement('div');
        container.className = swalClasses.container;
        container.innerHTML = sweetHTML;
        var targetElement = typeof params.target === 'string' ? document.querySelector(params.target) : params.target;
        targetElement.appendChild(container);
        var modal = getModal();
        var input = getChildByClass(modal, swalClasses.input);
        var file = getChildByClass(modal, swalClasses.file);
        var range = modal.querySelector('.' + swalClasses.range + ' input');
        var rangeOutput = modal.querySelector('.' + swalClasses.range + ' output');
        var select = getChildByClass(modal, swalClasses.select);
        var checkbox = modal.querySelector('.' + swalClasses.checkbox + ' input');
        var textarea = getChildByClass(modal, swalClasses.textarea);
        input.oninput = function() {
            sweetAlert$1.resetValidationError();
        };
        file.onchange = function() {
            sweetAlert$1.resetValidationError();
        };
        range.oninput = function() {
            sweetAlert$1.resetValidationError();
            rangeOutput.value = range.value;
        };
        range.onchange = function() {
            sweetAlert$1.resetValidationError();
            range.previousSibling.value = range.value;
        };
        select.onchange = function() {
            sweetAlert$1.resetValidationError();
        };
        checkbox.onchange = function() {
            sweetAlert$1.resetValidationError();
        };
        textarea.oninput = function() {
            sweetAlert$1.resetValidationError();
        };
        return modal;
    };
    var sweetHTML = ('\n <div role="dialog" aria-modal="true" aria-labelledby="' + swalClasses.title + '" aria-describedby="' + swalClasses.content + '" class="' + swalClasses.modal + '" tabindex="-1">\n   <ul class="' + swalClasses.progresssteps + '"></ul>\n   <div class="' + swalClasses.icon + ' ' + iconTypes.error + '">\n     <span class="swal2-x-mark"><span class="swal2-x-mark-line-left"></span><span class="swal2-x-mark-line-right"></span></span>\n   </div>\n   <div class="' + swalClasses.icon + ' ' + iconTypes.question + '">?</div>\n   <div class="' + swalClasses.icon + ' ' + iconTypes.warning + '">!</div>\n   <div class="' + swalClasses.icon + ' ' + iconTypes.info + '">i</div>\n   <div class="' + swalClasses.icon + ' ' + iconTypes.success + '">\n     <div class="swal2-success-circular-line-left"></div>\n     <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>\n     <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>\n     <div class="swal2-success-circular-line-right"></div>\n   </div>\n   <img class="' + swalClasses.image + '" />\n   <h2 class="' + swalClasses.title + '" id="' + swalClasses.title + '"></h2>\n   <div id="' + swalClasses.content + '" class="' + swalClasses.content + '"></div>\n   <input class="' + swalClasses.input + '" />\n   <input type="file" class="' + swalClasses.file + '" />\n   <div class="' + swalClasses.range + '">\n     <output></output>\n     <input type="range" />\n   </div>\n   <select class="' + swalClasses.select + '"></select>\n   <div class="' + swalClasses.radio + '"></div>\n   <label for="' + swalClasses.checkbox + '" class="' + swalClasses.checkbox + '">\n     <input type="checkbox" />\n   </label>\n   <textarea class="' + swalClasses.textarea + '"></textarea>\n   <div class="' + swalClasses.validationerror + '" id="' + swalClasses.validationerror + '"></div>\n   <div class="' + swalClasses.buttonswrapper + '">\n     <button type="button" class="' + swalClasses.confirm + '">OK</button>\n     <button type="button" class="' + swalClasses.cancel + '">Cancel</button>\n   </div>\n   <button type="button" class="' + swalClasses.close + '">\xD7</button>\n </div>\n').replace(/(^|\n)\s*/g, '');
    var getContainer = function getContainer() {
        return document.body.querySelector('.' + swalClasses.container);
    };
    var getModal = function getModal() {
        return getContainer() ? getContainer().querySelector('.' + swalClasses.modal) : null;
    };
    var getIcons = function getIcons() {
        var modal = getModal();
        return modal.querySelectorAll('.' + swalClasses.icon);
    };
    var elementByClass = function elementByClass(className) {
        return getContainer() ? getContainer().querySelector('.' + className) : null;
    };
    var getTitle = function getTitle() {
        return elementByClass(swalClasses.title);
    };
    var getContent = function getContent() {
        return elementByClass(swalClasses.content);
    };
    var getImage = function getImage() {
        return elementByClass(swalClasses.image);
    };
    var getProgressSteps = function getProgressSteps() {
        return elementByClass(swalClasses.progresssteps);
    };
    var getValidationError = function getValidationError() {
        return elementByClass(swalClasses.validationerror);
    };
    var getConfirmButton = function getConfirmButton() {
        return elementByClass(swalClasses.confirm);
    };
    var getCancelButton = function getCancelButton() {
        return elementByClass(swalClasses.cancel);
    };
    var getButtonsWrapper = function getButtonsWrapper() {
        return elementByClass(swalClasses.buttonswrapper);
    };
    var getCloseButton = function getCloseButton() {
        return elementByClass(swalClasses.close);
    };
    var getFocusableElements = function getFocusableElements() {
        var focusableElementsWithTabindex = Array.from(getModal().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])')).sort(function(a, b) {
            a = parseInt(a.getAttribute('tabindex'));
            b = parseInt(b.getAttribute('tabindex'));
            if (a > b) {
                return 1;
            } else if (a < b) {
                return -1;
            }
            return 0;
        });
        var otherFocusableElements = Array.prototype.slice.call(getModal().querySelectorAll('button, input:not([type=hidden]), textarea, select, a, [tabindex="0"]'));
        return uniqueArray(focusableElementsWithTabindex.concat(otherFocusableElements));
    };
    var hasClass = function hasClass(elem, className) {
        if (elem.classList) {
            return elem.classList.contains(className);
        }
        return false;
    };
    var focusInput = function focusInput(input) {
        input.focus();
        if (input.type !== 'file') {
            var val = input.value;
            input.value = '';
            input.value = val;
        }
    };
    var addClass = function addClass(elem, className) {
        if (!elem || !className) {
            return;
        }
        var classes = className.split(/\s+/).filter(Boolean);
        classes.forEach(function(className) {
            elem.classList.add(className);
        });
    };
    var removeClass = function removeClass(elem, className) {
        if (!elem || !className) {
            return;
        }
        var classes = className.split(/\s+/).filter(Boolean);
        classes.forEach(function(className) {
            elem.classList.remove(className);
        });
    };
    var getChildByClass = function getChildByClass(elem, className) {
        for (var i = 0; i < elem.childNodes.length; i++) {
            if (hasClass(elem.childNodes[i], className)) {
                return elem.childNodes[i];
            }
        }
    };
    var show = function show(elem, display) {
        if (!display) {
            display = 'block';
        }
        elem.style.opacity = '';
        elem.style.display = display;
    };
    var hide = function hide(elem) {
        elem.style.opacity = '';
        elem.style.display = 'none';
    };
    var empty = function empty(elem) {
        while (elem.firstChild) {
            elem.removeChild(elem.firstChild);
        }
    };
    var isVisible = function isVisible(elem) {
        return elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length;
    };
    var removeStyleProperty = function removeStyleProperty(elem, property) {
        if (elem.style.removeProperty) {
            elem.style.removeProperty(property);
        } else {
            elem.style.removeAttribute(property);
        }
    };
    var animationEndEvent = function() {
        var testEl = document.createElement('div');
        var transEndEventNames = {
            'WebkitAnimation': 'webkitAnimationEnd',
            'OAnimation': 'oAnimationEnd oanimationend',
            'animation': 'animationend'
        };
        for (var i in transEndEventNames) {
            if (transEndEventNames.hasOwnProperty(i) && testEl.style[i] !== undefined) {
                return transEndEventNames[i];
            }
        }
        return false;
    }();
    var resetPrevState = function resetPrevState() {
        window.onkeydown = states.previousWindowKeyDown;
        if (states.previousActiveElement && states.previousActiveElement.focus) {
            var x = window.scrollX;
            var y = window.scrollY;
            states.previousActiveElement.focus();
            if (x && y) {
                window.scrollTo(x, y);
            }
        }
    };
    var measureScrollbar = function measureScrollbar() {
        var supportsTouch = 'ontouchstart' in window || navigator.msMaxTouchPoints;
        if (supportsTouch) {
            return 0;
        }
        var scrollDiv = document.createElement('div');
        scrollDiv.style.width = '50px';
        scrollDiv.style.height = '50px';
        scrollDiv.style.overflow = 'scroll';
        document.body.appendChild(scrollDiv);
        var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
        document.body.removeChild(scrollDiv);
        return scrollbarWidth;
    };
    var injectCSS = function injectCSS() {
        var css = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
        var head = document.head || document.getElementsByTagName('head')[0];
        var style = document.createElement('style');
        style.type = 'text/css';
        head.appendChild(style);
        if (style.styleSheet) {
            style.styleSheet.cssText = css;
        } else {
            style.appendChild(document.createTextNode(css));
        }
    };
    injectCSS(styles);
    return sweetAlert$1;
})));
if (window.Sweetalert2) window.sweetAlert = window.swal = window.Sweetalert2;
"use strict";
! function(e) {
    e.fn.number_counter = function(t) {
        var n = e.extend({
                start_value: 0,
                end_value: 100,
                duration: 1e3,
                delimiter: ",",
                round: !0,
                before: null,
                after: null
            }, t),
            r = {
                DOWN: 0,
                UP: 1
            },
            a = 1e3,
            u = e(this),
            l = Math.ceil(n.duration / (1e3 / 60)),
            i = n.start_value,
            o = (n.end_value - n.start_value) / l,
            f = n.start_value < n.end_value ? r.UP : r.DOWN;
        "function" == typeof n.before && n.before(u),
            function e() {
                if (i !== n.end_value) {
                    var t = i + o;
                    i = f === r.UP ? t > n.end_value ? n.end_value : t : t < n.end_value ? n.end_value : t, n.round && (t = Math.round(i)), n.delimiter && t >= a && (t = function(e) {
                        var t = e.toString();
                        if (t.length > 3) {
                            for (var r = t.length % 3, a = r || 3, u = t.slice(0, a); a < t.length; a += 3) u += n.delimiter + t.slice(a, a + 3);
                            return u
                        }
                        return e
                    }(t)), u.text(t), requestAnimationFrame(e)
                } else "function" == typeof n.after && n.after(u, i)
            }()
    }
}(jQuery);
/*!
   Copyright 2008-2019 SpryMedia Ltd.

 This source file is free software, available under the following license:
   MIT license - http://datatables.net/license

 This source file is distributed in the hope that it will be useful, but
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY
 or FITNESS FOR A PARTICULAR PURPOSE. See the license files for details.

 For details please refer to: http://www.datatables.net
 DataTables 1.10.20
 ©2008-2019 SpryMedia Ltd - datatables.net/license
*/
var $jscomp = $jscomp || {};
$jscomp.scope = {};
$jscomp.findInternal = function(f, z, y) {
    f instanceof String && (f = String(f));
    for (var p = f.length, H = 0; H < p; H++) {
        var L = f[H];
        if (z.call(y, L, H, f)) return {
            i: H,
            v: L
        }
    }
    return {
        i: -1,
        v: void 0
    }
};
$jscomp.ASSUME_ES5 = !1;
$jscomp.ASSUME_NO_NATIVE_MAP = !1;
$jscomp.ASSUME_NO_NATIVE_SET = !1;
$jscomp.SIMPLE_FROUND_POLYFILL = !1;
$jscomp.defineProperty = $jscomp.ASSUME_ES5 || "function" == typeof Object.defineProperties ? Object.defineProperty : function(f, z, y) {
    f != Array.prototype && f != Object.prototype && (f[z] = y.value)
};
$jscomp.getGlobal = function(f) {
    return "undefined" != typeof window && window === f ? f : "undefined" != typeof global && null != global ? global : f
};
$jscomp.global = $jscomp.getGlobal(this);
$jscomp.polyfill = function(f, z, y, p) {
    if (z) {
        y = $jscomp.global;
        f = f.split(".");
        for (p = 0; p < f.length - 1; p++) {
            var H = f[p];
            H in y || (y[H] = {});
            y = y[H]
        }
        f = f[f.length - 1];
        p = y[f];
        z = z(p);
        z != p && null != z && $jscomp.defineProperty(y, f, {
            configurable: !0,
            writable: !0,
            value: z
        })
    }
};
$jscomp.polyfill("Array.prototype.find", function(f) {
    return f ? f : function(f, y) {
        return $jscomp.findInternal(this, f, y).v
    }
}, "es6", "es3");
(function(f) {
    "function" === typeof define && define.amd ? define(["jquery"], function(z) {
        return f(z, window, document)
    }) : "object" === typeof exports ? module.exports = function(z, y) {
        z || (z = window);
        y || (y = "undefined" !== typeof window ? require("jquery") : require("jquery")(z));
        return f(y, z, z.document)
    } : f(jQuery, window, document)
})(function(f, z, y, p) {
    function H(a) {
        var b, c, d = {};
        f.each(a, function(e, h) {
            (b = e.match(/^([^A-Z]+?)([A-Z])/)) && -1 !== "a aa ai ao as b fn i m o s ".indexOf(b[1] + " ") && (c = e.replace(b[0], b[2].toLowerCase()), d[c] = e, "o" === b[1] && H(a[e]))
        });
        a._hungarianMap = d
    }

    function L(a, b, c) {
        a._hungarianMap || H(a);
        var d;
        f.each(b, function(e, h) {
            d = a._hungarianMap[e];
            d === p || !c && b[d] !== p || ("o" === d.charAt(0) ? (b[d] || (b[d] = {}), f.extend(!0, b[d], b[e]), L(a[d], b[d], c)) : b[d] = b[e])
        })
    }

    function Ga(a) {
        var b = q.defaults.oLanguage,
            c = b.sDecimal;
        c && Ha(c);
        if (a) {
            var d = a.sZeroRecords;
            !a.sEmptyTable && d && "No data available in table" === b.sEmptyTable && M(a, a, "sZeroRecords", "sEmptyTable");
            !a.sLoadingRecords && d && "Loading..." === b.sLoadingRecords && M(a, a, "sZeroRecords", "sLoadingRecords");
            a.sInfoThousands && (a.sThousands = a.sInfoThousands);
            (a = a.sDecimal) && c !== a && Ha(a)
        }
    }

    function jb(a) {
        F(a, "ordering", "bSort");
        F(a, "orderMulti", "bSortMulti");
        F(a, "orderClasses", "bSortClasses");
        F(a, "orderCellsTop", "bSortCellsTop");
        F(a, "order", "aaSorting");
        F(a, "orderFixed", "aaSortingFixed");
        F(a, "paging", "bPaginate");
        F(a, "pagingType", "sPaginationType");
        F(a, "pageLength", "iDisplayLength");
        F(a, "searching", "bFilter");
        "boolean" === typeof a.sScrollX && (a.sScrollX = a.sScrollX ? "100%" : "");
        "boolean" === typeof a.scrollX && (a.scrollX = a.scrollX ? "100%" : "");
        if (a = a.aoSearchCols)
            for (var b = 0, c = a.length; b < c; b++) a[b] && L(q.models.oSearch, a[b])
    }

    function kb(a) {
        F(a, "orderable", "bSortable");
        F(a, "orderData", "aDataSort");
        F(a, "orderSequence", "asSorting");
        F(a, "orderDataType", "sortDataType");
        var b = a.aDataSort;
        "number" !== typeof b || f.isArray(b) || (a.aDataSort = [b])
    }

    function lb(a) {
        if (!q.__browser) {
            var b = {};
            q.__browser = b;
            var c = f("<div/>").css({
                    position: "fixed",
                    top: 0,
                    left: -1 * f(z).scrollLeft(),
                    height: 1,
                    width: 1,
                    overflow: "hidden"
                }).append(f("<div/>").css({
                    position: "absolute",
                    top: 1,
                    left: 1,
                    width: 100,
                    overflow: "scroll"
                }).append(f("<div/>").css({
                    width: "100%",
                    height: 10
                }))).appendTo("body"),
                d = c.children(),
                e = d.children();
            b.barWidth = d[0].offsetWidth - d[0].clientWidth;
            b.bScrollOversize = 100 === e[0].offsetWidth && 100 !== d[0].clientWidth;
            b.bScrollbarLeft = 1 !== Math.round(e.offset().left);
            b.bBounding = c[0].getBoundingClientRect().width ? !0 : !1;
            c.remove()
        }
        f.extend(a.oBrowser, q.__browser);
        a.oScroll.iBarWidth = q.__browser.barWidth
    }

    function mb(a, b, c, d, e, h) {
        var g = !1;
        if (c !== p) {
            var k = c;
            g = !0
        }
        for (; d !== e;) a.hasOwnProperty(d) && (k = g ? b(k, a[d], d, a) : a[d], g = !0, d += h);
        return k
    }

    function Ia(a, b) {
        var c = q.defaults.column,
            d = a.aoColumns.length;
        c = f.extend({}, q.models.oColumn, c, {
            nTh: b ? b : y.createElement("th"),
            sTitle: c.sTitle ? c.sTitle : b ? b.innerHTML : "",
            aDataSort: c.aDataSort ? c.aDataSort : [d],
            mData: c.mData ? c.mData : d,
            idx: d
        });
        a.aoColumns.push(c);
        c = a.aoPreSearchCols;
        c[d] = f.extend({}, q.models.oSearch, c[d]);
        ma(a, d, f(b).data())
    }

    function ma(a, b, c) {
        b = a.aoColumns[b];
        var d = a.oClasses,
            e = f(b.nTh);
        if (!b.sWidthOrig) {
            b.sWidthOrig = e.attr("width") || null;
            var h = (e.attr("style") || "").match(/width:\s*(\d+[pxem%]+)/);
            h && (b.sWidthOrig = h[1])
        }
        c !== p && null !== c && (kb(c), L(q.defaults.column, c, !0), c.mDataProp === p || c.mData || (c.mData = c.mDataProp), c.sType && (b._sManualType = c.sType), c.className && !c.sClass && (c.sClass = c.className), c.sClass && e.addClass(c.sClass), f.extend(b, c), M(b, c, "sWidth", "sWidthOrig"), c.iDataSort !== p && (b.aDataSort = [c.iDataSort]), M(b, c, "aDataSort"));
        var g = b.mData,
            k = U(g),
            l = b.mRender ? U(b.mRender) : null;
        c = function(a) {
            return "string" === typeof a && -1 !== a.indexOf("@")
        };
        b._bAttrSrc = f.isPlainObject(g) && (c(g.sort) || c(g.type) || c(g.filter));
        b._setter = null;
        b.fnGetData = function(a, b, c) {
            var d = k(a, b, p, c);
            return l && b ? l(d, b, a, c) : d
        };
        b.fnSetData = function(a, b, c) {
            return Q(g)(a, b, c)
        };
        "number" !== typeof g && (a._rowReadObject = !0);
        a.oFeatures.bSort || (b.bSortable = !1, e.addClass(d.sSortableNone));
        a = -1 !== f.inArray("asc", b.asSorting);
        c = -1 !== f.inArray("desc", b.asSorting);
        b.bSortable && (a || c) ? a && !c ? (b.sSortingClass = d.sSortableAsc, b.sSortingClassJUI = d.sSortJUIAscAllowed) : !a && c ? (b.sSortingClass = d.sSortableDesc, b.sSortingClassJUI = d.sSortJUIDescAllowed) : (b.sSortingClass = d.sSortable, b.sSortingClassJUI = d.sSortJUI) : (b.sSortingClass = d.sSortableNone, b.sSortingClassJUI = "")
    }

    function aa(a) {
        if (!1 !== a.oFeatures.bAutoWidth) {
            var b = a.aoColumns;
            Ja(a);
            for (var c = 0, d = b.length; c < d; c++) b[c].nTh.style.width = b[c].sWidth
        }
        b = a.oScroll;
        "" === b.sY && "" === b.sX || na(a);
        A(a, null, "column-sizing", [a])
    }

    function ba(a, b) {
        a = oa(a, "bVisible");
        return "number" === typeof a[b] ? a[b] : null
    }

    function ca(a, b) {
        a = oa(a, "bVisible");
        b = f.inArray(b, a);
        return -1 !== b ? b : null
    }

    function W(a) {
        var b = 0;
        f.each(a.aoColumns, function(a, d) {
            d.bVisible && "none" !== f(d.nTh).css("display") && b++
        });
        return b
    }

    function oa(a, b) {
        var c = [];
        f.map(a.aoColumns, function(a, e) {
            a[b] && c.push(e)
        });
        return c
    }

    function Ka(a) {
        var b = a.aoColumns,
            c = a.aoData,
            d = q.ext.type.detect,
            e, h, g;
        var k = 0;
        for (e = b.length; k < e; k++) {
            var f = b[k];
            var n = [];
            if (!f.sType && f._sManualType) f.sType = f._sManualType;
            else if (!f.sType) {
                var m = 0;
                for (h = d.length; m < h; m++) {
                    var w = 0;
                    for (g = c.length; w < g; w++) {
                        n[w] === p && (n[w] = I(a, w, k, "type"));
                        var u = d[m](n[w], a);
                        if (!u && m !== d.length - 1) break;
                        if ("html" === u) break
                    }
                    if (u) {
                        f.sType = u;
                        break
                    }
                }
                f.sType || (f.sType = "string")
            }
        }
    }

    function nb(a, b, c, d) {
        var e, h, g, k = a.aoColumns;
        if (b)
            for (e = b.length - 1; 0 <= e; e--) {
                var l = b[e];
                var n = l.targets !== p ? l.targets : l.aTargets;
                f.isArray(n) || (n = [n]);
                var m = 0;
                for (h = n.length; m < h; m++)
                    if ("number" === typeof n[m] && 0 <= n[m]) {
                        for (; k.length <= n[m];) Ia(a);
                        d(n[m], l)
                    } else if ("number" === typeof n[m] && 0 > n[m]) d(k.length +
                    n[m], l);
                else if ("string" === typeof n[m]) {
                    var w = 0;
                    for (g = k.length; w < g; w++)("_all" == n[m] || f(k[w].nTh).hasClass(n[m])) && d(w, l)
                }
            }
        if (c)
            for (e = 0, a = c.length; e < a; e++) d(e, c[e])
    }

    function R(a, b, c, d) {
        var e = a.aoData.length,
            h = f.extend(!0, {}, q.models.oRow, {
                src: c ? "dom" : "data",
                idx: e
            });
        h._aData = b;
        a.aoData.push(h);
        for (var g = a.aoColumns, k = 0, l = g.length; k < l; k++) g[k].sType = null;
        a.aiDisplayMaster.push(e);
        b = a.rowIdFn(b);
        b !== p && (a.aIds[b] = h);
        !c && a.oFeatures.bDeferRender || La(a, e, c, d);
        return e
    }

    function pa(a, b) {
        var c;
        b instanceof
        f || (b = f(b));
        return b.map(function(b, e) {
            c = Ma(a, e);
            return R(a, c.data, e, c.cells)
        })
    }

    function I(a, b, c, d) {
        var e = a.iDraw,
            h = a.aoColumns[c],
            g = a.aoData[b]._aData,
            k = h.sDefaultContent,
            f = h.fnGetData(g, d, {
                settings: a,
                row: b,
                col: c
            });
        if (f === p) return a.iDrawError != e && null === k && (O(a, 0, "Requested unknown parameter " + ("function" == typeof h.mData ? "{function}" : "'" + h.mData + "'") + " for row " + b + ", column " + c, 4), a.iDrawError = e), k;
        if ((f === g || null === f) && null !== k && d !== p) f = k;
        else if ("function" === typeof f) return f.call(g);
        return null === f && "display" == d ? "" : f
    }

    function ob(a, b, c, d) {
        a.aoColumns[c].fnSetData(a.aoData[b]._aData, d, {
            settings: a,
            row: b,
            col: c
        })
    }

    function Na(a) {
        return f.map(a.match(/(\\.|[^\.])+/g) || [""], function(a) {
            return a.replace(/\\\./g, ".")
        })
    }

    function U(a) {
        if (f.isPlainObject(a)) {
            var b = {};
            f.each(a, function(a, c) {
                c && (b[a] = U(c))
            });
            return function(a, c, h, g) {
                var d = b[c] || b._;
                return d !== p ? d(a, c, h, g) : a
            }
        }
        if (null === a) return function(a) {
            return a
        };
        if ("function" === typeof a) return function(b, c, h, g) {
            return a(b, c, h, g)
        };
        if ("string" !== typeof a || -1 === a.indexOf(".") && -1 === a.indexOf("[") && -1 === a.indexOf("(")) return function(b, c) {
            return b[a]
        };
        var c = function(a, b, h) {
            if ("" !== h) {
                var d = Na(h);
                for (var e = 0, l = d.length; e < l; e++) {
                    h = d[e].match(da);
                    var n = d[e].match(X);
                    if (h) {
                        d[e] = d[e].replace(da, "");
                        "" !== d[e] && (a = a[d[e]]);
                        n = [];
                        d.splice(0, e + 1);
                        d = d.join(".");
                        if (f.isArray(a))
                            for (e = 0, l = a.length; e < l; e++) n.push(c(a[e], b, d));
                        a = h[0].substring(1, h[0].length - 1);
                        a = "" === a ? n : n.join(a);
                        break
                    } else if (n) {
                        d[e] = d[e].replace(X, "");
                        a = a[d[e]]();
                        continue
                    }
                    if (null === a || a[d[e]] === p) return p;
                    a = a[d[e]]
                }
            }
            return a
        };
        return function(b, e) {
            return c(b, e, a)
        }
    }

    function Q(a) {
        if (f.isPlainObject(a)) return Q(a._);
        if (null === a) return function() {};
        if ("function" === typeof a) return function(b, d, e) {
            a(b, "set", d, e)
        };
        if ("string" !== typeof a || -1 === a.indexOf(".") && -1 === a.indexOf("[") && -1 === a.indexOf("(")) return function(b, d) {
            b[a] = d
        };
        var b = function(a, d, e) {
            e = Na(e);
            var c = e[e.length - 1];
            for (var g, k, l = 0, n = e.length - 1; l < n; l++) {
                g = e[l].match(da);
                k = e[l].match(X);
                if (g) {
                    e[l] = e[l].replace(da, "");
                    a[e[l]] = [];
                    c = e.slice();
                    c.splice(0, l + 1);
                    g = c.join(".");
                    if (f.isArray(d))
                        for (k = 0, n = d.length; k < n; k++) c = {}, b(c, d[k], g), a[e[l]].push(c);
                    else a[e[l]] = d;
                    return
                }
                k && (e[l] = e[l].replace(X, ""), a = a[e[l]](d));
                if (null === a[e[l]] || a[e[l]] === p) a[e[l]] = {};
                a = a[e[l]]
            }
            if (c.match(X)) a[c.replace(X, "")](d);
            else a[c.replace(da, "")] = d
        };
        return function(c, d) {
            return b(c, d, a)
        }
    }

    function Oa(a) {
        return J(a.aoData, "_aData")
    }

    function qa(a) {
        a.aoData.length = 0;
        a.aiDisplayMaster.length = 0;
        a.aiDisplay.length = 0;
        a.aIds = {}
    }

    function ra(a, b, c) {
        for (var d = -1, e = 0, h = a.length; e < h; e++) a[e] == b ? d = e : a[e] > b && a[e]--; - 1 != d && c === p && a.splice(d, 1)
    }

    function ea(a, b, c, d) {
        var e = a.aoData[b],
            h, g = function(c, d) {
                for (; c.childNodes.length;) c.removeChild(c.firstChild);
                c.innerHTML = I(a, b, d, "display")
            };
        if ("dom" !== c && (c && "auto" !== c || "dom" !== e.src)) {
            var k = e.anCells;
            if (k)
                if (d !== p) g(k[d], d);
                else
                    for (c = 0, h = k.length; c < h; c++) g(k[c], c)
        } else e._aData = Ma(a, e, d, d === p ? p : e._aData).data;
        e._aSortData = null;
        e._aFilterData = null;
        g = a.aoColumns;
        if (d !== p) g[d].sType = null;
        else {
            c = 0;
            for (h = g.length; c < h; c++) g[c].sType = null;
            Pa(a, e)
        }
    }

    function Ma(a, b, c, d) {
        var e = [],
            h = b.firstChild,
            g, k = 0,
            l, n = a.aoColumns,
            m = a._rowReadObject;
        d = d !== p ? d : m ? {} : [];
        var w = function(a, b) {
                if ("string" === typeof a) {
                    var c = a.indexOf("@"); - 1 !== c && (c = a.substring(c + 1), Q(a)(d, b.getAttribute(c)))
                }
            },
            u = function(a) {
                if (c === p || c === k) g = n[k], l = f.trim(a.innerHTML), g && g._bAttrSrc ? (Q(g.mData._)(d, l), w(g.mData.sort, a), w(g.mData.type, a), w(g.mData.filter, a)) : m ? (g._setter || (g._setter = Q(g.mData)), g._setter(d, l)) : d[k] = l;
                k++
            };
        if (h)
            for (; h;) {
                var q = h.nodeName.toUpperCase();
                if ("TD" == q || "TH" == q) u(h), e.push(h);
                h = h.nextSibling
            } else
                for (e = b.anCells, h = 0, q = e.length; h < q; h++) u(e[h]);
        (b = b.firstChild ? b : b.nTr) && (b = b.getAttribute("id")) && Q(a.rowId)(d, b);
        return {
            data: d,
            cells: e
        }
    }

    function La(a, b, c, d) {
        var e = a.aoData[b],
            h = e._aData,
            g = [],
            k, l;
        if (null === e.nTr) {
            var n = c || y.createElement("tr");
            e.nTr = n;
            e.anCells = g;
            n._DT_RowIndex = b;
            Pa(a, e);
            var m = 0;
            for (k = a.aoColumns.length; m < k; m++) {
                var w = a.aoColumns[m];
                var p = (l = c ? !1 : !0) ? y.createElement(w.sCellType) : d[m];
                p._DT_CellIndex = {
                    row: b,
                    column: m
                };
                g.push(p);
                if (l || !(c && !w.mRender && w.mData === m || f.isPlainObject(w.mData) && w.mData._ === m + ".display")) p.innerHTML = I(a, b, m, "display");
                w.sClass && (p.className += " " + w.sClass);
                w.bVisible && !c ? n.appendChild(p) : !w.bVisible && c && p.parentNode.removeChild(p);
                w.fnCreatedCell && w.fnCreatedCell.call(a.oInstance, p, I(a, b, m), h, b, m)
            }
            A(a, "aoRowCreatedCallback", null, [n, h, b, g])
        }
        e.nTr.setAttribute("role", "row")
    }

    function Pa(a, b) {
        var c = b.nTr,
            d = b._aData;
        if (c) {
            if (a = a.rowIdFn(d)) c.id = a;
            d.DT_RowClass && (a = d.DT_RowClass.split(" "), b.__rowc = b.__rowc ? ta(b.__rowc.concat(a)) : a, f(c).removeClass(b.__rowc.join(" ")).addClass(d.DT_RowClass));
            d.DT_RowAttr && f(c).attr(d.DT_RowAttr);
            d.DT_RowData && f(c).data(d.DT_RowData)
        }
    }

    function pb(a) {
        var b, c, d = a.nTHead,
            e = a.nTFoot,
            h = 0 === f("th, td", d).length,
            g = a.oClasses,
            k = a.aoColumns;
        h && (c = f("<tr/>").appendTo(d));
        var l = 0;
        for (b = k.length; l < b; l++) {
            var n = k[l];
            var m = f(n.nTh).addClass(n.sClass);
            h && m.appendTo(c);
            a.oFeatures.bSort && (m.addClass(n.sSortingClass), !1 !== n.bSortable && (m.attr("tabindex", a.iTabIndex).attr("aria-controls", a.sTableId), Qa(a, n.nTh, l)));
            n.sTitle != m[0].innerHTML && m.html(n.sTitle);
            Ra(a, "header")(a, m, n, g)
        }
        h && fa(a.aoHeader, d);
        f(d).find(">tr").attr("role", "row");
        f(d).find(">tr>th, >tr>td").addClass(g.sHeaderTH);
        f(e).find(">tr>th, >tr>td").addClass(g.sFooterTH);
        if (null !== e)
            for (a = a.aoFooter[0], l = 0, b = a.length; l < b; l++) n = k[l], n.nTf = a[l].cell, n.sClass && f(n.nTf).addClass(n.sClass)
    }

    function ha(a, b, c) {
        var d, e, h = [],
            g = [],
            k = a.aoColumns.length;
        if (b) {
            c === p && (c = !1);
            var l = 0;
            for (d = b.length; l < d; l++) {
                h[l] = b[l].slice();
                h[l].nTr = b[l].nTr;
                for (e = k - 1; 0 <= e; e--) a.aoColumns[e].bVisible || c || h[l].splice(e, 1);
                g.push([])
            }
            l = 0;
            for (d = h.length; l < d; l++) {
                if (a = h[l].nTr)
                    for (; e = a.firstChild;) a.removeChild(e);
                e = 0;
                for (b = h[l].length; e < b; e++) {
                    var n = k = 1;
                    if (g[l][e] === p) {
                        a.appendChild(h[l][e].cell);
                        for (g[l][e] = 1; h[l + k] !== p && h[l][e].cell == h[l + k][e].cell;) g[l + k][e] = 1, k++;
                        for (; h[l][e + n] !== p && h[l][e].cell == h[l][e + n].cell;) {
                            for (c = 0; c < k; c++) g[l + c][e + n] = 1;
                            n++
                        }
                        f(h[l][e].cell).attr("rowspan", k).attr("colspan", n)
                    }
                }
            }
        }
    }

    function S(a) {
        var b = A(a, "aoPreDrawCallback", "preDraw", [a]);
        if (-1 !== f.inArray(!1, b)) K(a, !1);
        else {
            b = [];
            var c = 0,
                d = a.asStripeClasses,
                e = d.length,
                h = a.oLanguage,
                g = a.iInitDisplayStart,
                k = "ssp" == D(a),
                l = a.aiDisplay;
            a.bDrawing = !0;
            g !== p && -1 !== g && (a._iDisplayStart = k ? g : g >= a.fnRecordsDisplay() ? 0 : g, a.iInitDisplayStart = -1);
            g = a._iDisplayStart;
            var n = a.fnDisplayEnd();
            if (a.bDeferLoading) a.bDeferLoading = !1, a.iDraw++, K(a, !1);
            else if (!k) a.iDraw++;
            else if (!a.bDestroying && !qb(a)) return;
            if (0 !== l.length)
                for (h = k ? a.aoData.length : n, k = k ? 0 : g; k < h; k++) {
                    var m = l[k],
                        w = a.aoData[m];
                    null === w.nTr && La(a, m);
                    var u = w.nTr;
                    if (0 !== e) {
                        var q = d[c % e];
                        w._sRowStripe != q && (f(u).removeClass(w._sRowStripe).addClass(q), w._sRowStripe = q)
                    }
                    A(a, "aoRowCallback", null, [u, w._aData, c, k, m]);
                    b.push(u);
                    c++
                } else c = h.sZeroRecords, 1 == a.iDraw && "ajax" == D(a) ? c = h.sLoadingRecords : h.sEmptyTable && 0 === a.fnRecordsTotal() && (c = h.sEmptyTable), b[0] = f("<tr/>", {
                    "class": e ? d[0] : ""
                }).append(f("<td />", {
                    valign: "top",
                    colSpan: W(a),
                    "class": a.oClasses.sRowEmpty
                }).html(c))[0];
            A(a, "aoHeaderCallback", "header", [f(a.nTHead).children("tr")[0], Oa(a), g, n, l]);
            A(a, "aoFooterCallback", "footer", [f(a.nTFoot).children("tr")[0], Oa(a), g, n, l]);
            d = f(a.nTBody);
            d.children().detach();
            d.append(f(b));
            A(a, "aoDrawCallback", "draw", [a]);
            a.bSorted = !1;
            a.bFiltered = !1;
            a.bDrawing = !1
        }
    }

    function V(a, b) {
        var c = a.oFeatures,
            d = c.bFilter;
        c.bSort && rb(a);
        d ? ia(a, a.oPreviousSearch) : a.aiDisplay = a.aiDisplayMaster.slice();
        !0 !== b && (a._iDisplayStart = 0);
        a._drawHold = b;
        S(a);
        a._drawHold = !1
    }

    function sb(a) {
        var b = a.oClasses,
            c = f(a.nTable);
        c = f("<div/>").insertBefore(c);
        var d = a.oFeatures,
            e = f("<div/>", {
                id: a.sTableId + "_wrapper",
                "class": b.sWrapper + (a.nTFoot ? "" : " " + b.sNoFooter)
            });
        a.nHolding = c[0];
        a.nTableWrapper = e[0];
        a.nTableReinsertBefore = a.nTable.nextSibling;
        for (var h = a.sDom.split(""), g, k, l, n, m, p, u = 0; u < h.length; u++) {
            g = null;
            k = h[u];
            if ("<" == k) {
                l = f("<div/>")[0];
                n = h[u + 1];
                if ("'" == n || '"' == n) {
                    m = "";
                    for (p = 2; h[u + p] != n;) m += h[u + p], p++;
                    "H" == m ? m = b.sJUIHeader : "F" == m && (m = b.sJUIFooter); - 1 != m.indexOf(".") ? (n = m.split("."), l.id = n[0].substr(1, n[0].length - 1), l.className = n[1]) : "#" == m.charAt(0) ? l.id = m.substr(1, m.length - 1) : l.className = m;
                    u += p
                }
                e.append(l);
                e = f(l)
            } else if (">" == k) e = e.parent();
            else if ("l" == k && d.bPaginate && d.bLengthChange) g = tb(a);
            else if ("f" == k && d.bFilter) g = ub(a);
            else if ("r" == k && d.bProcessing) g = vb(a);
            else if ("t" == k) g = wb(a);
            else if ("i" == k && d.bInfo) g = xb(a);
            else if ("p" == k && d.bPaginate) g = yb(a);
            else if (0 !== q.ext.feature.length)
                for (l = q.ext.feature, p = 0, n = l.length; p < n; p++)
                    if (k == l[p].cFeature) {
                        g = l[p].fnInit(a);
                        break
                    }
            g && (l = a.aanFeatures, l[k] || (l[k] = []), l[k].push(g), e.append(g))
        }
        c.replaceWith(e);
        a.nHolding = null
    }

    function fa(a, b) {
        b = f(b).children("tr");
        var c, d, e;
        a.splice(0, a.length);
        var h = 0;
        for (e = b.length; h < e; h++) a.push([]);
        h = 0;
        for (e = b.length; h < e; h++) {
            var g = b[h];
            for (c = g.firstChild; c;) {
                if ("TD" == c.nodeName.toUpperCase() || "TH" == c.nodeName.toUpperCase()) {
                    var k = 1 * c.getAttribute("colspan");
                    var l = 1 * c.getAttribute("rowspan");
                    k = k && 0 !== k && 1 !== k ? k : 1;
                    l = l && 0 !== l && 1 !== l ? l : 1;
                    var n = 0;
                    for (d = a[h]; d[n];) n++;
                    var m = n;
                    var p = 1 === k ? !0 : !1;
                    for (d = 0; d < k; d++)
                        for (n = 0; n < l; n++) a[h + n][m + d] = {
                            cell: c,
                            unique: p
                        }, a[h + n].nTr = g
                }
                c = c.nextSibling
            }
        }
    }

    function ua(a, b, c) {
        var d = [];
        c || (c = a.aoHeader, b && (c = [], fa(c, b)));
        b = 0;
        for (var e = c.length; b < e; b++)
            for (var h = 0, g = c[b].length; h < g; h++) !c[b][h].unique || d[h] && a.bSortCellsTop || (d[h] = c[b][h].cell);
        return d
    }

    function va(a, b, c) {
        A(a, "aoServerParams", "serverParams", [b]);
        if (b && f.isArray(b)) {
            var d = {},
                e = /(.*?)\[\]$/;
            f.each(b, function(a, b) {
                (a = b.name.match(e)) ? (a = a[0], d[a] || (d[a] = []), d[a].push(b.value)) : d[b.name] = b.value
            });
            b = d
        }
        var h = a.ajax,
            g = a.oInstance,
            k = function(b) {
                A(a, null, "xhr", [a, b, a.jqXHR]);
                c(b)
            };
        if (f.isPlainObject(h) && h.data) {
            var l = h.data;
            var n = "function" === typeof l ? l(b, a) : l;
            b = "function" === typeof l && n ? n : f.extend(!0, b, n);
            delete h.data
        }
        n = {
            data: b,
            success: function(b) {
                var c = b.error || b.sError;
                c && O(a, 0, c);
                a.json = b;
                k(b)
            },
            dataType: "json",
            cache: !1,
            type: a.sServerMethod,
            error: function(b, c, d) {
                d = A(a, null, "xhr", [a, null, a.jqXHR]); - 1 === f.inArray(!0, d) && ("parsererror" == c ? O(a, 0, "Invalid JSON response", 1) : 4 === b.readyState && O(a, 0, "Ajax error", 7));
                K(a, !1)
            }
        };
        a.oAjaxData = b;
        A(a, null, "preXhr", [a, b]);
        a.fnServerData ? a.fnServerData.call(g, a.sAjaxSource, f.map(b, function(a, b) {
            return {
                name: b,
                value: a
            }
        }), k, a) : a.sAjaxSource || "string" === typeof h ? a.jqXHR = f.ajax(f.extend(n, {
            url: h || a.sAjaxSource
        })) : "function" === typeof h ? a.jqXHR = h.call(g, b, k, a) : (a.jqXHR = f.ajax(f.extend(n, h)), h.data = l)
    }

    function qb(a) {
        return a.bAjaxDataGet ? (a.iDraw++, K(a, !0), va(a, zb(a), function(b) {
            Ab(a, b)
        }), !1) : !0
    }

    function zb(a) {
        var b = a.aoColumns,
            c = b.length,
            d = a.oFeatures,
            e = a.oPreviousSearch,
            h = a.aoPreSearchCols,
            g = [],
            k = Y(a);
        var l = a._iDisplayStart;
        var n = !1 !== d.bPaginate ? a._iDisplayLength : -1;
        var m = function(a, b) {
            g.push({
                name: a,
                value: b
            })
        };
        m("sEcho", a.iDraw);
        m("iColumns", c);
        m("sColumns", J(b, "sName").join(","));
        m("iDisplayStart", l);
        m("iDisplayLength", n);
        var p = {
            draw: a.iDraw,
            columns: [],
            order: [],
            start: l,
            length: n,
            search: {
                value: e.sSearch,
                regex: e.bRegex
            }
        };
        for (l = 0; l < c; l++) {
            var u = b[l];
            var sa = h[l];
            n = "function" == typeof u.mData ? "function" : u.mData;
            p.columns.push({
                data: n,
                name: u.sName,
                searchable: u.bSearchable,
                orderable: u.bSortable,
                search: {
                    value: sa.sSearch,
                    regex: sa.bRegex
                }
            });
            m("mDataProp_" + l, n);
            d.bFilter && (m("sSearch_" + l, sa.sSearch), m("bRegex_" + l, sa.bRegex), m("bSearchable_" + l, u.bSearchable));
            d.bSort && m("bSortable_" + l, u.bSortable)
        }
        d.bFilter && (m("sSearch", e.sSearch), m("bRegex", e.bRegex));
        d.bSort && (f.each(k, function(a, b) {
            p.order.push({
                column: b.col,
                dir: b.dir
            });
            m("iSortCol_" + a, b.col);
            m("sSortDir_" + a, b.dir)
        }), m("iSortingCols", k.length));
        b = q.ext.legacy.ajax;
        return null === b ? a.sAjaxSource ? g : p : b ? g : p
    }

    function Ab(a, b) {
        var c = function(a, c) {
                return b[a] !== p ? b[a] : b[c]
            },
            d = wa(a, b),
            e = c("sEcho", "draw"),
            h = c("iTotalRecords", "recordsTotal");
        c = c("iTotalDisplayRecords", "recordsFiltered");
        if (e) {
            if (1 * e < a.iDraw) return;
            a.iDraw = 1 * e
        }
        qa(a);
        a._iRecordsTotal = parseInt(h, 10);
        a._iRecordsDisplay = parseInt(c, 10);
        e = 0;
        for (h = d.length; e < h; e++) R(a, d[e]);
        a.aiDisplay = a.aiDisplayMaster.slice();
        a.bAjaxDataGet = !1;
        S(a);
        a._bInitComplete || xa(a, b);
        a.bAjaxDataGet = !0;
        K(a, !1)
    }

    function wa(a, b) {
        a = f.isPlainObject(a.ajax) && a.ajax.dataSrc !== p ? a.ajax.dataSrc : a.sAjaxDataProp;
        return "data" === a ? b.aaData || b[a] : "" !== a ? U(a)(b) : b
    }

    function ub(a) {
        var b = a.oClasses,
            c = a.sTableId,
            d = a.oLanguage,
            e = a.oPreviousSearch,
            h = a.aanFeatures,
            g = '<input type="search" class="' + b.sFilterInput + '"/>',
            k = d.sSearch;
        k = k.match(/_INPUT_/) ? k.replace("_INPUT_", g) : k + g;
        b = f("<div/>", {
            id: h.f ? null : c + "_filter",
            "class": b.sFilter
        }).append(f("<label/>").append(k));
        h = function() {
            var b = this.value ? this.value : "";
            b != e.sSearch && (ia(a, {
                sSearch: b,
                bRegex: e.bRegex,
                bSmart: e.bSmart,
                bCaseInsensitive: e.bCaseInsensitive
            }), a._iDisplayStart = 0, S(a))
        };
        g = null !== a.searchDelay ? a.searchDelay : "ssp" === D(a) ? 400 : 0;
        var l = f("input", b).val(e.sSearch).attr("placeholder", d.sSearchPlaceholder).on("keyup.DT search.DT input.DT paste.DT cut.DT", g ? Sa(h, g) : h).on("keypress.DT", function(a) {
            if (13 == a.keyCode) return !1
        }).attr("aria-controls", c);
        f(a.nTable).on("search.dt.DT", function(b, c) {
            if (a === c) try {
                l[0] !== y.activeElement && l.val(e.sSearch)
            } catch (w) {}
        });
        return b[0]
    }

    function ia(a, b, c) {
        var d = a.oPreviousSearch,
            e = a.aoPreSearchCols,
            h = function(a) {
                d.sSearch = a.sSearch;
                d.bRegex = a.bRegex;
                d.bSmart = a.bSmart;
                d.bCaseInsensitive = a.bCaseInsensitive
            },
            g = function(a) {
                return a.bEscapeRegex !== p ? !a.bEscapeRegex : a.bRegex
            };
        Ka(a);
        if ("ssp" != D(a)) {
            Bb(a, b.sSearch, c, g(b), b.bSmart, b.bCaseInsensitive);
            h(b);
            for (b = 0; b < e.length; b++) Cb(a, e[b].sSearch, b, g(e[b]), e[b].bSmart, e[b].bCaseInsensitive);
            Db(a)
        } else h(b);
        a.bFiltered = !0;
        A(a, null, "search", [a])
    }

    function Db(a) {
        for (var b = q.ext.search, c = a.aiDisplay, d, e, h = 0, g = b.length; h < g; h++) {
            for (var k = [], l = 0, n = c.length; l < n; l++) e = c[l], d = a.aoData[e], b[h](a, d._aFilterData, e, d._aData, l) && k.push(e);
            c.length = 0;
            f.merge(c, k)
        }
    }

    function Cb(a, b, c, d, e, h) {
        if ("" !== b) {
            var g = [],
                k = a.aiDisplay;
            d = Ta(b, d, e, h);
            for (e = 0; e < k.length; e++) b = a.aoData[k[e]]._aFilterData[c], d.test(b) && g.push(k[e]);
            a.aiDisplay = g
        }
    }

    function Bb(a, b, c, d, e, h) {
        e = Ta(b, d, e, h);
        var g = a.oPreviousSearch.sSearch,
            k = a.aiDisplayMaster;
        h = [];
        0 !== q.ext.search.length && (c = !0);
        var f = Eb(a);
        if (0 >= b.length) a.aiDisplay = k.slice();
        else {
            if (f || c || d || g.length > b.length || 0 !== b.indexOf(g) || a.bSorted) a.aiDisplay = k.slice();
            b = a.aiDisplay;
            for (c = 0; c < b.length; c++) e.test(a.aoData[b[c]]._sFilterRow) && h.push(b[c]);
            a.aiDisplay = h
        }
    }

    function Ta(a, b, c, d) {
        a = b ? a : Ua(a);
        c && (a = "^(?=.*?" + f.map(a.match(/"[^"]+"|[^ ]+/g) || [""], function(a) {
            if ('"' === a.charAt(0)) {
                var b = a.match(/^"(.*)"$/);
                a = b ? b[1] : a
            }
            return a.replace('"', "")
        }).join(")(?=.*?") + ").*$");
        return new RegExp(a, d ? "i" : "")
    }

    function Eb(a) {
        var b = a.aoColumns,
            c, d, e = q.ext.type.search;
        var h = !1;
        var g = 0;
        for (c = a.aoData.length; g < c; g++) {
            var k = a.aoData[g];
            if (!k._aFilterData) {
                var f = [];
                var n = 0;
                for (d = b.length; n < d; n++) {
                    h = b[n];
                    if (h.bSearchable) {
                        var m = I(a, g, n, "filter");
                        e[h.sType] && (m = e[h.sType](m));
                        null === m && (m = "");
                        "string" !== typeof m && m.toString && (m = m.toString())
                    } else m = "";
                    m.indexOf && -1 !== m.indexOf("&") && (ya.innerHTML = m, m = $b ? ya.textContent : ya.innerText);
                    m.replace && (m = m.replace(/[\r\n\u2028]/g, ""));
                    f.push(m)
                }
                k._aFilterData = f;
                k._sFilterRow = f.join("  ");
                h = !0
            }
        }
        return h
    }

    function Fb(a) {
        return {
            search: a.sSearch,
            smart: a.bSmart,
            regex: a.bRegex,
            caseInsensitive: a.bCaseInsensitive
        }
    }

    function Gb(a) {
        return {
            sSearch: a.search,
            bSmart: a.smart,
            bRegex: a.regex,
            bCaseInsensitive: a.caseInsensitive
        }
    }

    function xb(a) {
        var b = a.sTableId,
            c = a.aanFeatures.i,
            d = f("<div/>", {
                "class": a.oClasses.sInfo,
                id: c ? null : b + "_info"
            });
        c || (a.aoDrawCallback.push({
            fn: Hb,
            sName: "information"
        }), d.attr("role", "status").attr("aria-live", "polite"), f(a.nTable).attr("aria-describedby", b + "_info"));
        return d[0]
    }

    function Hb(a) {
        var b = a.aanFeatures.i;
        if (0 !== b.length) {
            var c = a.oLanguage,
                d = a._iDisplayStart + 1,
                e = a.fnDisplayEnd(),
                h = a.fnRecordsTotal(),
                g = a.fnRecordsDisplay(),
                k = g ? c.sInfo : c.sInfoEmpty;
            g !== h && (k += " " + c.sInfoFiltered);
            k += c.sInfoPostFix;
            k = Ib(a, k);
            c = c.fnInfoCallback;
            null !== c && (k = c.call(a.oInstance, a, d, e, h, g, k));
            f(b).html(k)
        }
    }

    function Ib(a, b) {
        var c = a.fnFormatNumber,
            d = a._iDisplayStart + 1,
            e = a._iDisplayLength,
            h = a.fnRecordsDisplay(),
            g = -1 === e;
        return b.replace(/_START_/g, c.call(a, d)).replace(/_END_/g, c.call(a, a.fnDisplayEnd())).replace(/_MAX_/g, c.call(a, a.fnRecordsTotal())).replace(/_TOTAL_/g, c.call(a, h)).replace(/_PAGE_/g, c.call(a, g ? 1 : Math.ceil(d / e))).replace(/_PAGES_/g, c.call(a, g ? 1 : Math.ceil(h / e)))
    }

    function ja(a) {
        var b = a.iInitDisplayStart,
            c = a.aoColumns;
        var d = a.oFeatures;
        var e = a.bDeferLoading;
        if (a.bInitialised) {
            sb(a);
            pb(a);
            ha(a, a.aoHeader);
            ha(a, a.aoFooter);
            K(a, !0);
            d.bAutoWidth && Ja(a);
            var h = 0;
            for (d = c.length; h < d; h++) {
                var g = c[h];
                g.sWidth && (g.nTh.style.width = B(g.sWidth))
            }
            A(a, null, "preInit", [a]);
            V(a);
            c = D(a);
            if ("ssp" != c || e) "ajax" == c ? va(a, [], function(c) {
                var d = wa(a, c);
                for (h = 0; h < d.length; h++) R(a, d[h]);
                a.iInitDisplayStart = b;
                V(a);
                K(a, !1);
                xa(a, c)
            }, a) : (K(a, !1), xa(a))
        } else setTimeout(function() {
            ja(a)
        }, 200)
    }

    function xa(a, b) {
        a._bInitComplete = !0;
        (b || a.oInit.aaData) && aa(a);
        A(a, null, "plugin-init", [a, b]);
        A(a, "aoInitComplete", "init", [a, b])
    }

    function Va(a, b) {
        b = parseInt(b, 10);
        a._iDisplayLength = b;
        Wa(a);
        A(a, null, "length", [a, b])
    }

    function tb(a) {
        var b = a.oClasses,
            c = a.sTableId,
            d = a.aLengthMenu,
            e = f.isArray(d[0]),
            h = e ? d[0] : d;
        d = e ? d[1] : d;
        e = f("<select/>", {
            name: c + "_length",
            "aria-controls": c,
            "class": b.sLengthSelect
        });
        for (var g = 0, k = h.length; g < k; g++) e[0][g] = new Option("number" === typeof d[g] ? a.fnFormatNumber(d[g]) : d[g], h[g]);
        var l = f("<div><label/></div>").addClass(b.sLength);
        a.aanFeatures.l || (l[0].id = c + "_length");
        l.children().append(a.oLanguage.sLengthMenu.replace("_MENU_", e[0].outerHTML));
        f("select", l).val(a._iDisplayLength).on("change.DT", function(b) {
            Va(a, f(this).val());
            S(a)
        });
        f(a.nTable).on("length.dt.DT", function(b, c, d) {
            a === c && f("select", l).val(d)
        });
        return l[0]
    }

    function yb(a) {
        var b = a.sPaginationType,
            c = q.ext.pager[b],
            d = "function" === typeof c,
            e = function(a) {
                S(a)
            };
        b = f("<div/>").addClass(a.oClasses.sPaging + b)[0];
        var h = a.aanFeatures;
        d || c.fnInit(a, b, e);
        h.p || (b.id = a.sTableId + "_paginate", a.aoDrawCallback.push({
            fn: function(a) {
                if (d) {
                    var b = a._iDisplayStart,
                        g = a._iDisplayLength,
                        f = a.fnRecordsDisplay(),
                        m = -1 === g;
                    b = m ? 0 : Math.ceil(b / g);
                    g = m ? 1 : Math.ceil(f / g);
                    f = c(b, g);
                    var p;
                    m = 0;
                    for (p = h.p.length; m < p; m++) Ra(a, "pageButton")(a, h.p[m], m, f, b, g)
                } else c.fnUpdate(a, e)
            },
            sName: "pagination"
        }));
        return b
    }

    function Xa(a, b, c) {
        var d = a._iDisplayStart,
            e = a._iDisplayLength,
            h = a.fnRecordsDisplay();
        0 === h || -1 === e ? d = 0 : "number" === typeof b ? (d = b * e, d > h && (d = 0)) : "first" == b ? d = 0 : "previous" == b ? (d = 0 <= e ? d - e : 0, 0 > d && (d = 0)) : "next" == b ? d + e < h && (d += e) : "last" == b ? d = Math.floor((h - 1) / e) * e : O(a, 0, "Unknown paging action: " + b, 5);
        b = a._iDisplayStart !== d;
        a._iDisplayStart = d;
        b && (A(a, null, "page", [a]), c && S(a));
        return b
    }

    function vb(a) {
        return f("<div/>", {
            id: a.aanFeatures.r ? null : a.sTableId + "_processing",
            "class": a.oClasses.sProcessing
        }).html(a.oLanguage.sProcessing).insertBefore(a.nTable)[0]
    }

    function K(a, b) {
        a.oFeatures.bProcessing && f(a.aanFeatures.r).css("display", b ? "block" : "none");
        A(a, null, "processing", [a, b])
    }

    function wb(a) {
        var b = f(a.nTable);
        b.attr("role", "grid");
        var c = a.oScroll;
        if ("" === c.sX && "" === c.sY) return a.nTable;
        var d = c.sX,
            e = c.sY,
            h = a.oClasses,
            g = b.children("caption"),
            k = g.length ? g[0]._captionSide : null,
            l = f(b[0].cloneNode(!1)),
            n = f(b[0].cloneNode(!1)),
            m = b.children("tfoot");
        m.length || (m = null);
        l = f("<div/>", {
            "class": h.sScrollWrapper
        }).append(f("<div/>", {
            "class": h.sScrollHead
        }).css({
            overflow: "hidden",
            position: "relative",
            border: 0,
            width: d ? d ? B(d) : null : "100%"
        }).append(f("<div/>", {
            "class": h.sScrollHeadInner
        }).css({
            "box-sizing": "content-box",
            width: c.sXInner || "100%"
        }).append(l.removeAttr("id").css("margin-left", 0).append("top" === k ? g : null).append(b.children("thead"))))).append(f("<div/>", {
            "class": h.sScrollBody
        }).css({
            position: "relative",
            overflow: "auto",
            width: d ? B(d) : null
        }).append(b));
        m && l.append(f("<div/>", {
            "class": h.sScrollFoot
        }).css({
            overflow: "hidden",
            border: 0,
            width: d ? d ? B(d) : null : "100%"
        }).append(f("<div/>", {
            "class": h.sScrollFootInner
        }).append(n.removeAttr("id").css("margin-left", 0).append("bottom" === k ? g : null).append(b.children("tfoot")))));
        b = l.children();
        var p = b[0];
        h = b[1];
        var u = m ? b[2] : null;
        if (d) f(h).on("scroll.DT", function(a) {
            a = this.scrollLeft;
            p.scrollLeft = a;
            m && (u.scrollLeft = a)
        });
        f(h).css(e && c.bCollapse ? "max-height" : "height", e);
        a.nScrollHead = p;
        a.nScrollBody = h;
        a.nScrollFoot = u;
        a.aoDrawCallback.push({
            fn: na,
            sName: "scrolling"
        });
        return l[0]
    }

    function na(a) {
        var b = a.oScroll,
            c = b.sX,
            d = b.sXInner,
            e = b.sY;
        b = b.iBarWidth;
        var h = f(a.nScrollHead),
            g = h[0].style,
            k = h.children("div"),
            l = k[0].style,
            n = k.children("table");
        k = a.nScrollBody;
        var m = f(k),
            w = k.style,
            u = f(a.nScrollFoot).children("div"),
            q = u.children("table"),
            t = f(a.nTHead),
            r = f(a.nTable),
            v = r[0],
            za = v.style,
            T = a.nTFoot ? f(a.nTFoot) : null,
            A = a.oBrowser,
            x = A.bScrollOversize,
            ac = J(a.aoColumns, "nTh"),
            Ya = [],
            y = [],
            z = [],
            C = [],
            G, H = function(a) {
                a = a.style;
                a.paddingTop = "0";
                a.paddingBottom = "0";
                a.borderTopWidth = "0";
                a.borderBottomWidth = "0";
                a.height = 0
            };
        var D = k.scrollHeight > k.clientHeight;
        if (a.scrollBarVis !== D && a.scrollBarVis !== p) a.scrollBarVis = D, aa(a);
        else {
            a.scrollBarVis = D;
            r.children("thead, tfoot").remove();
            if (T) {
                var E = T.clone().prependTo(r);
                var F = T.find("tr");
                E = E.find("tr")
            }
            var I = t.clone().prependTo(r);
            t = t.find("tr");
            D = I.find("tr");
            I.find("th, td").removeAttr("tabindex");
            c || (w.width = "100%", h[0].style.width = "100%");
            f.each(ua(a, I), function(b, c) {
                G = ba(a, b);
                c.style.width = a.aoColumns[G].sWidth
            });
            T && N(function(a) {
                a.style.width = ""
            }, E);
            h = r.outerWidth();
            "" === c ? (za.width = "100%", x && (r.find("tbody").height() > k.offsetHeight || "scroll" == m.css("overflow-y")) && (za.width = B(r.outerWidth() - b)), h = r.outerWidth()) : "" !== d && (za.width = B(d), h = r.outerWidth());
            N(H, D);
            N(function(a) {
                z.push(a.innerHTML);
                Ya.push(B(f(a).css("width")))
            }, D);
            N(function(a, b) {
                -1 !== f.inArray(a, ac) && (a.style.width = Ya[b])
            }, t);
            f(D).height(0);
            T && (N(H, E), N(function(a) {
                C.push(a.innerHTML);
                y.push(B(f(a).css("width")))
            }, E), N(function(a, b) {
                a.style.width = y[b]
            }, F), f(E).height(0));
            N(function(a, b) {
                a.innerHTML = '<div class="dataTables_sizing">' + z[b] + "</div>";
                a.childNodes[0].style.height = "0";
                a.childNodes[0].style.overflow = "hidden";
                a.style.width = Ya[b]
            }, D);
            T && N(function(a, b) {
                a.innerHTML = '<div class="dataTables_sizing">' + C[b] + "</div>";
                a.childNodes[0].style.height = "0";
                a.childNodes[0].style.overflow = "hidden";
                a.style.width = y[b]
            }, E);
            r.outerWidth() < h ? (F = k.scrollHeight > k.offsetHeight || "scroll" == m.css("overflow-y") ? h + b : h, x && (k.scrollHeight > k.offsetHeight || "scroll" == m.css("overflow-y")) && (za.width = B(F - b)), "" !== c && "" === d || O(a, 1, "Possible column misalignment", 6)) : F = "100%";
            w.width = B(F);
            g.width = B(F);
            T && (a.nScrollFoot.style.width = B(F));
            !e && x && (w.height = B(v.offsetHeight + b));
            c = r.outerWidth();
            n[0].style.width = B(c);
            l.width = B(c);
            d = r.height() > k.clientHeight || "scroll" == m.css("overflow-y");
            e = "padding" + (A.bScrollbarLeft ? "Left" : "Right");
            l[e] = d ? b + "px" : "0px";
            T && (q[0].style.width = B(c), u[0].style.width = B(c), u[0].style[e] = d ? b + "px" : "0px");
            r.children("colgroup").insertBefore(r.children("thead"));
            m.trigger("scroll");
            !a.bSorted && !a.bFiltered || a._drawHold || (k.scrollTop = 0)
        }
    }

    function N(a, b, c) {
        for (var d = 0, e = 0, h = b.length, g, k; e < h;) {
            g = b[e].firstChild;
            for (k = c ? c[e].firstChild : null; g;) 1 === g.nodeType && (c ? a(g, k, d) : a(g, d), d++), g = g.nextSibling, k = c ? k.nextSibling : null;
            e++
        }
    }

    function Ja(a) {
        var b = a.nTable,
            c = a.aoColumns,
            d = a.oScroll,
            e = d.sY,
            h = d.sX,
            g = d.sXInner,
            k = c.length,
            l = oa(a, "bVisible"),
            n = f("th", a.nTHead),
            m = b.getAttribute("width"),
            p = b.parentNode,
            u = !1,
            q, t = a.oBrowser;
        d = t.bScrollOversize;
        (q = b.style.width) && -1 !== q.indexOf("%") && (m = q);
        for (q = 0; q < l.length; q++) {
            var r = c[l[q]];
            null !== r.sWidth && (r.sWidth = Jb(r.sWidthOrig, p), u = !0)
        }
        if (d || !u && !h && !e && k == W(a) && k == n.length)
            for (q = 0; q < k; q++) l = ba(a, q), null !== l && (c[l].sWidth = B(n.eq(q).width()));
        else {
            k = f(b).clone().css("visibility", "hidden").removeAttr("id");
            k.find("tbody tr").remove();
            var v = f("<tr/>").appendTo(k.find("tbody"));
            k.find("thead, tfoot").remove();
            k.append(f(a.nTHead).clone()).append(f(a.nTFoot).clone());
            k.find("tfoot th, tfoot td").css("width", "");
            n = ua(a, k.find("thead")[0]);
            for (q = 0; q < l.length; q++) r = c[l[q]], n[q].style.width = null !== r.sWidthOrig && "" !== r.sWidthOrig ? B(r.sWidthOrig) : "", r.sWidthOrig && h && f(n[q]).append(f("<div/>").css({
                width: r.sWidthOrig,
                margin: 0,
                padding: 0,
                border: 0,
                height: 1
            }));
            if (a.aoData.length)
                for (q = 0; q < l.length; q++) u = l[q], r = c[u], f(Kb(a, u)).clone(!1).append(r.sContentPadding).appendTo(v);
            f("[name]", k).removeAttr("name");
            r = f("<div/>").css(h || e ? {
                position: "absolute",
                top: 0,
                left: 0,
                height: 1,
                right: 0,
                overflow: "hidden"
            } : {}).append(k).appendTo(p);
            h && g ? k.width(g) : h ? (k.css("width", "auto"), k.removeAttr("width"), k.width() < p.clientWidth && m && k.width(p.clientWidth)) : e ? k.width(p.clientWidth) : m && k.width(m);
            for (q = e = 0; q < l.length; q++) p = f(n[q]), g = p.outerWidth() - p.width(), p = t.bBounding ? Math.ceil(n[q].getBoundingClientRect().width) : p.outerWidth(), e += p, c[l[q]].sWidth = B(p - g);
            b.style.width = B(e);
            r.remove()
        }
        m && (b.style.width = B(m));
        !m && !h || a._reszEvt || (b = function() {
            f(z).on("resize.DT-" +
                a.sInstance, Sa(function() {
                    aa(a)
                }))
        }, d ? setTimeout(b, 1E3) : b(), a._reszEvt = !0)
    }

    function Jb(a, b) {
        if (!a) return 0;
        a = f("<div/>").css("width", B(a)).appendTo(b || y.body);
        b = a[0].offsetWidth;
        a.remove();
        return b
    }

    function Kb(a, b) {
        var c = Lb(a, b);
        if (0 > c) return null;
        var d = a.aoData[c];
        return d.nTr ? d.anCells[b] : f("<td/>").html(I(a, c, b, "display"))[0]
    }

    function Lb(a, b) {
        for (var c, d = -1, e = -1, h = 0, g = a.aoData.length; h < g; h++) c = I(a, h, b, "display") + "", c = c.replace(bc, ""), c = c.replace(/&nbsp;/g, " "), c.length > d && (d = c.length, e = h);
        return e
    }

    function B(a) {
        return null === a ? "0px" : "number" == typeof a ? 0 > a ? "0px" : a + "px" : a.match(/\d$/) ? a + "px" : a
    }

    function Y(a) {
        var b = [],
            c = a.aoColumns;
        var d = a.aaSortingFixed;
        var e = f.isPlainObject(d);
        var h = [];
        var g = function(a) {
            a.length && !f.isArray(a[0]) ? h.push(a) : f.merge(h, a)
        };
        f.isArray(d) && g(d);
        e && d.pre && g(d.pre);
        g(a.aaSorting);
        e && d.post && g(d.post);
        for (a = 0; a < h.length; a++) {
            var k = h[a][0];
            g = c[k].aDataSort;
            d = 0;
            for (e = g.length; d < e; d++) {
                var l = g[d];
                var n = c[l].sType || "string";
                h[a]._idx === p && (h[a]._idx = f.inArray(h[a][1], c[l].asSorting));
                b.push({
                    src: k,
                    col: l,
                    dir: h[a][1],
                    index: h[a]._idx,
                    type: n,
                    formatter: q.ext.type.order[n + "-pre"]
                })
            }
        }
        return b
    }

    function rb(a) {
        var b, c = [],
            d = q.ext.type.order,
            e = a.aoData,
            h = 0,
            g = a.aiDisplayMaster;
        Ka(a);
        var k = Y(a);
        var f = 0;
        for (b = k.length; f < b; f++) {
            var n = k[f];
            n.formatter && h++;
            Mb(a, n.col)
        }
        if ("ssp" != D(a) && 0 !== k.length) {
            f = 0;
            for (b = g.length; f < b; f++) c[g[f]] = f;
            h === k.length ? g.sort(function(a, b) {
                var d, h = k.length,
                    g = e[a]._aSortData,
                    f = e[b]._aSortData;
                for (d = 0; d < h; d++) {
                    var l = k[d];
                    var m = g[l.col];
                    var n = f[l.col];
                    m = m < n ? -1 : m > n ? 1 : 0;
                    if (0 !== m) return "asc" === l.dir ? m : -m
                }
                m = c[a];
                n = c[b];
                return m < n ? -1 : m > n ? 1 : 0
            }) : g.sort(function(a, b) {
                var h, g = k.length,
                    f = e[a]._aSortData,
                    l = e[b]._aSortData;
                for (h = 0; h < g; h++) {
                    var m = k[h];
                    var n = f[m.col];
                    var p = l[m.col];
                    m = d[m.type + "-" + m.dir] || d["string-" + m.dir];
                    n = m(n, p);
                    if (0 !== n) return n
                }
                n = c[a];
                p = c[b];
                return n < p ? -1 : n > p ? 1 : 0
            })
        }
        a.bSorted = !0
    }

    function Nb(a) {
        var b = a.aoColumns,
            c = Y(a);
        a = a.oLanguage.oAria;
        for (var d = 0, e = b.length; d < e; d++) {
            var h = b[d];
            var g = h.asSorting;
            var k = h.sTitle.replace(/<.*?>/g, "");
            var f = h.nTh;
            f.removeAttribute("aria-sort");
            h.bSortable && (0 < c.length && c[0].col == d ? (f.setAttribute("aria-sort", "asc" == c[0].dir ? "ascending" : "descending"), h = g[c[0].index + 1] || g[0]) : h = g[0], k += "asc" === h ? a.sSortAscending : a.sSortDescending);
            f.setAttribute("aria-label", k)
        }
    }

    function Za(a, b, c, d) {
        var e = a.aaSorting,
            h = a.aoColumns[b].asSorting,
            g = function(a, b) {
                var c = a._idx;
                c === p && (c = f.inArray(a[1], h));
                return c + 1 < h.length ? c + 1 : b ? null : 0
            };
        "number" === typeof e[0] && (e = a.aaSorting = [e]);
        c && a.oFeatures.bSortMulti ? (c = f.inArray(b, J(e, "0")), -1 !== c ? (b = g(e[c], !0), null === b && 1 === e.length && (b = 0), null === b ? e.splice(c, 1) : (e[c][1] = h[b], e[c]._idx = b)) : (e.push([b, h[0], 0]), e[e.length - 1]._idx = 0)) : e.length && e[0][0] == b ? (b = g(e[0]), e.length = 1, e[0][1] = h[b], e[0]._idx = b) : (e.length = 0, e.push([b, h[0]]), e[0]._idx = 0);
        V(a);
        "function" == typeof d && d(a)
    }

    function Qa(a, b, c, d) {
        var e = a.aoColumns[c];
        $a(b, {}, function(b) {
            !1 !== e.bSortable && (a.oFeatures.bProcessing ? (K(a, !0), setTimeout(function() {
                Za(a, c, b.shiftKey, d);
                "ssp" !== D(a) && K(a, !1)
            }, 0)) : Za(a, c, b.shiftKey, d))
        })
    }

    function Aa(a) {
        var b = a.aLastSort,
            c = a.oClasses.sSortColumn,
            d = Y(a),
            e = a.oFeatures,
            h;
        if (e.bSort && e.bSortClasses) {
            e = 0;
            for (h = b.length; e < h; e++) {
                var g = b[e].src;
                f(J(a.aoData, "anCells", g)).removeClass(c + (2 > e ? e + 1 : 3))
            }
            e = 0;
            for (h = d.length; e < h; e++) g = d[e].src, f(J(a.aoData, "anCells", g)).addClass(c + (2 > e ? e + 1 : 3))
        }
        a.aLastSort = d
    }

    function Mb(a, b) {
        var c = a.aoColumns[b],
            d = q.ext.order[c.sSortDataType],
            e;
        d && (e = d.call(a.oInstance, a, b, ca(a, b)));
        for (var h, g = q.ext.type.order[c.sType + "-pre"], k = 0, f = a.aoData.length; k < f; k++)
            if (c = a.aoData[k], c._aSortData || (c._aSortData = []), !c._aSortData[b] || d) h = d ? e[k] : I(a, k, b, "sort"), c._aSortData[b] = g ? g(h) : h
    }

    function Ba(a) {
        if (a.oFeatures.bStateSave && !a.bDestroying) {
            var b = {
                time: +new Date,
                start: a._iDisplayStart,
                length: a._iDisplayLength,
                order: f.extend(!0, [], a.aaSorting),
                search: Fb(a.oPreviousSearch),
                columns: f.map(a.aoColumns, function(b, d) {
                    return {
                        visible: b.bVisible,
                        search: Fb(a.aoPreSearchCols[d])
                    }
                })
            };
            A(a, "aoStateSaveParams", "stateSaveParams", [a, b]);
            a.oSavedState = b;
            a.fnStateSaveCallback.call(a.oInstance, a, b)
        }
    }

    function Ob(a, b, c) {
        var d, e, h = a.aoColumns;
        b = function(b) {
            if (b && b.time) {
                var g = A(a, "aoStateLoadParams", "stateLoadParams", [a, b]);
                if (-1 === f.inArray(!1, g) && (g = a.iStateDuration, !(0 < g && b.time < +new Date - 1E3 * g || b.columns && h.length !== b.columns.length))) {
                    a.oLoadedState = f.extend(!0, {}, b);
                    b.start !== p && (a._iDisplayStart = b.start, a.iInitDisplayStart = b.start);
                    b.length !== p && (a._iDisplayLength = b.length);
                    b.order !== p && (a.aaSorting = [], f.each(b.order, function(b, c) {
                        a.aaSorting.push(c[0] >= h.length ? [0, c[1]] : c)
                    }));
                    b.search !== p && f.extend(a.oPreviousSearch, Gb(b.search));
                    if (b.columns)
                        for (d = 0, e = b.columns.length; d < e; d++) g = b.columns[d], g.visible !== p && (h[d].bVisible = g.visible), g.search !== p && f.extend(a.aoPreSearchCols[d], Gb(g.search));
                    A(a, "aoStateLoaded", "stateLoaded", [a, b])
                }
            }
            c()
        };
        if (a.oFeatures.bStateSave) {
            var g = a.fnStateLoadCallback.call(a.oInstance, a, b);
            g !== p && b(g)
        } else c()
    }

    function Ca(a) {
        var b = q.settings;
        a = f.inArray(a, J(b, "nTable"));
        return -1 !== a ? b[a] : null
    }

    function O(a, b, c, d) {
        c = "DataTables warning: " + (a ? "table id=" + a.sTableId + " - " : "") + c;
        d && (c += ". For more information about this error, please see http://datatables.net/tn/" +
            d);
        if (b) z.console && console.log && console.log(c);
        else if (b = q.ext, b = b.sErrMode || b.errMode, a && A(a, null, "error", [a, d, c]), "alert" == b) alert(c);
        else {
            if ("throw" == b) throw Error(c);
            "function" == typeof b && b(a, d, c)
        }
    }

    function M(a, b, c, d) {
        f.isArray(c) ? f.each(c, function(c, d) {
            f.isArray(d) ? M(a, b, d[0], d[1]) : M(a, b, d)
        }) : (d === p && (d = c), b[c] !== p && (a[d] = b[c]))
    }

    function ab(a, b, c) {
        var d;
        for (d in b)
            if (b.hasOwnProperty(d)) {
                var e = b[d];
                f.isPlainObject(e) ? (f.isPlainObject(a[d]) || (a[d] = {}), f.extend(!0, a[d], e)) : c && "data" !== d && "aaData" !== d && f.isArray(e) ? a[d] = e.slice() : a[d] = e
            }
        return a
    }

    function $a(a, b, c) {
        f(a).on("click.DT", b, function(b) {
            f(a).blur();
            c(b)
        }).on("keypress.DT", b, function(a) {
            13 === a.which && (a.preventDefault(), c(a))
        }).on("selectstart.DT", function() {
            return !1
        })
    }

    function E(a, b, c, d) {
        c && a[b].push({
            fn: c,
            sName: d
        })
    }

    function A(a, b, c, d) {
        var e = [];
        b && (e = f.map(a[b].slice().reverse(), function(b, c) {
            return b.fn.apply(a.oInstance, d)
        }));
        null !== c && (b = f.Event(c + ".dt"), f(a.nTable).trigger(b, d), e.push(b.result));
        return e
    }

    function Wa(a) {
        var b = a._iDisplayStart,
            c = a.fnDisplayEnd(),
            d = a._iDisplayLength;
        b >= c && (b = c - d);
        b -= b % d;
        if (-1 === d || 0 > b) b = 0;
        a._iDisplayStart = b
    }

    function Ra(a, b) {
        a = a.renderer;
        var c = q.ext.renderer[b];
        return f.isPlainObject(a) && a[b] ? c[a[b]] || c._ : "string" === typeof a ? c[a] || c._ : c._
    }

    function D(a) {
        return a.oFeatures.bServerSide ? "ssp" : a.ajax || a.sAjaxSource ? "ajax" : "dom"
    }

    function ka(a, b) {
        var c = Pb.numbers_length,
            d = Math.floor(c / 2);
        b <= c ? a = Z(0, b) : a <= d ? (a = Z(0, c - 2), a.push("ellipsis"), a.push(b - 1)) : (a >= b - 1 - d ? a = Z(b - (c - 2), b) : (a = Z(a - d + 2, a + d - 1), a.push("ellipsis"), a.push(b - 1)), a.splice(0, 0, "ellipsis"), a.splice(0, 0, 0));
        a.DT_el = "span";
        return a
    }

    function Ha(a) {
        f.each({
            num: function(b) {
                return Da(b, a)
            },
            "num-fmt": function(b) {
                return Da(b, a, bb)
            },
            "html-num": function(b) {
                return Da(b, a, Ea)
            },
            "html-num-fmt": function(b) {
                return Da(b, a, Ea, bb)
            }
        }, function(b, c) {
            C.type.order[b + a + "-pre"] = c;
            b.match(/^html\-/) && (C.type.search[b + a] = C.type.search.html)
        })
    }

    function Qb(a) {
        return function() {
            var b = [Ca(this[q.ext.iApiIndex])].concat(Array.prototype.slice.call(arguments));
            return q.ext.internal[a].apply(this, b)
        }
    }
    var q = function(a) {
            this.$ = function(a, b) {
                return this.api(!0).$(a, b)
            };
            this._ = function(a, b) {
                return this.api(!0).rows(a, b).data()
            };
            this.api = function(a) {
                return a ? new v(Ca(this[C.iApiIndex])) : new v(this)
            };
            this.fnAddData = function(a, b) {
                var c = this.api(!0);
                a = f.isArray(a) && (f.isArray(a[0]) || f.isPlainObject(a[0])) ? c.rows.add(a) : c.row.add(a);
                (b === p || b) && c.draw();
                return a.flatten().toArray()
            };
            this.fnAdjustColumnSizing = function(a) {
                var b = this.api(!0).columns.adjust(),
                    c = b.settings()[0],
                    d = c.oScroll;
                a === p || a ? b.draw(!1) : ("" !== d.sX || "" !== d.sY) && na(c)
            };
            this.fnClearTable = function(a) {
                var b = this.api(!0).clear();
                (a === p || a) && b.draw()
            };
            this.fnClose = function(a) {
                this.api(!0).row(a).child.hide()
            };
            this.fnDeleteRow = function(a, b, c) {
                var d = this.api(!0);
                a = d.rows(a);
                var e = a.settings()[0],
                    h = e.aoData[a[0][0]];
                a.remove();
                b && b.call(this, e, h);
                (c === p || c) && d.draw();
                return h
            };
            this.fnDestroy = function(a) {
                this.api(!0).destroy(a)
            };
            this.fnDraw = function(a) {
                this.api(!0).draw(a)
            };
            this.fnFilter = function(a, b, c, d, e, f) {
                e = this.api(!0);
                null === b || b === p ? e.search(a, c, d, f) : e.column(b).search(a, c, d, f);
                e.draw()
            };
            this.fnGetData = function(a, b) {
                var c = this.api(!0);
                if (a !== p) {
                    var d = a.nodeName ? a.nodeName.toLowerCase() : "";
                    return b !== p || "td" == d || "th" == d ? c.cell(a, b).data() : c.row(a).data() || null
                }
                return c.data().toArray()
            };
            this.fnGetNodes = function(a) {
                var b = this.api(!0);
                return a !== p ? b.row(a).node() : b.rows().nodes().flatten().toArray()
            };
            this.fnGetPosition = function(a) {
                var b = this.api(!0),
                    c = a.nodeName.toUpperCase();
                return "TR" == c ? b.row(a).index() : "TD" == c || "TH" == c ? (a = b.cell(a).index(), [a.row, a.columnVisible, a.column]) : null
            };
            this.fnIsOpen = function(a) {
                return this.api(!0).row(a).child.isShown()
            };
            this.fnOpen = function(a, b, c) {
                return this.api(!0).row(a).child(b, c).show().child()[0]
            };
            this.fnPageChange = function(a, b) {
                a = this.api(!0).page(a);
                (b === p || b) && a.draw(!1)
            };
            this.fnSetColumnVis = function(a, b, c) {
                a = this.api(!0).column(a).visible(b);
                (c === p || c) && a.columns.adjust().draw()
            };
            this.fnSettings = function() {
                return Ca(this[C.iApiIndex])
            };
            this.fnSort = function(a) {
                this.api(!0).order(a).draw()
            };
            this.fnSortListener = function(a, b, c) {
                this.api(!0).order.listener(a, b, c)
            };
            this.fnUpdate = function(a, b, c, d, e) {
                var h = this.api(!0);
                c === p || null === c ? h.row(b).data(a) : h.cell(b, c).data(a);
                (e === p || e) && h.columns.adjust();
                (d === p || d) && h.draw();
                return 0
            };
            this.fnVersionCheck = C.fnVersionCheck;
            var b = this,
                c = a === p,
                d = this.length;
            c && (a = {});
            this.oApi = this.internal = C.internal;
            for (var e in q.ext.internal) e && (this[e] = Qb(e));
            this.each(function() {
                var e = {},
                    g = 1 < d ? ab(e, a, !0) : a,
                    k = 0,
                    l;
                e = this.getAttribute("id");
                var n = !1,
                    m = q.defaults,
                    w = f(this);
                if ("table" != this.nodeName.toLowerCase()) O(null, 0, "Non-table node initialisation (" + this.nodeName + ")", 2);
                else {
                    jb(m);
                    kb(m.column);
                    L(m, m, !0);
                    L(m.column, m.column, !0);
                    L(m, f.extend(g, w.data()), !0);
                    var u = q.settings;
                    k = 0;
                    for (l = u.length; k < l; k++) {
                        var t = u[k];
                        if (t.nTable == this || t.nTHead && t.nTHead.parentNode == this || t.nTFoot && t.nTFoot.parentNode == this) {
                            var v = g.bRetrieve !== p ? g.bRetrieve : m.bRetrieve;
                            if (c || v) return t.oInstance;
                            if (g.bDestroy !== p ? g.bDestroy : m.bDestroy) {
                                t.oInstance.fnDestroy();
                                break
                            } else {
                                O(t, 0, "Cannot reinitialise DataTable", 3);
                                return
                            }
                        }
                        if (t.sTableId == this.id) {
                            u.splice(k, 1);
                            break
                        }
                    }
                    if (null === e || "" === e) this.id = e = "DataTables_Table_" + q.ext._unique++;
                    var r = f.extend(!0, {}, q.models.oSettings, {
                        sDestroyWidth: w[0].style.width,
                        sInstance: e,
                        sTableId: e
                    });
                    r.nTable = this;
                    r.oApi = b.internal;
                    r.oInit = g;
                    u.push(r);
                    r.oInstance = 1 === b.length ? b : w.dataTable();
                    jb(g);
                    Ga(g.oLanguage);
                    g.aLengthMenu && !g.iDisplayLength && (g.iDisplayLength = f.isArray(g.aLengthMenu[0]) ? g.aLengthMenu[0][0] : g.aLengthMenu[0]);
                    g = ab(f.extend(!0, {}, m), g);
                    M(r.oFeatures, g, "bPaginate bLengthChange bFilter bSort bSortMulti bInfo bProcessing bAutoWidth bSortClasses bServerSide bDeferRender".split(" "));
                    M(r, g, ["asStripeClasses", "ajax", "fnServerData", "fnFormatNumber", "sServerMethod", "aaSorting", "aaSortingFixed", "aLengthMenu", "sPaginationType", "sAjaxSource", "sAjaxDataProp", "iStateDuration", "sDom", "bSortCellsTop", "iTabIndex", "fnStateLoadCallback", "fnStateSaveCallback", "renderer", "searchDelay", "rowId", ["iCookieDuration", "iStateDuration"],
                        ["oSearch", "oPreviousSearch"],
                        ["aoSearchCols", "aoPreSearchCols"],
                        ["iDisplayLength", "_iDisplayLength"]
                    ]);
                    M(r.oScroll, g, [
                        ["sScrollX", "sX"],
                        ["sScrollXInner", "sXInner"],
                        ["sScrollY", "sY"],
                        ["bScrollCollapse", "bCollapse"]
                    ]);
                    M(r.oLanguage, g, "fnInfoCallback");
                    E(r, "aoDrawCallback", g.fnDrawCallback, "user");
                    E(r, "aoServerParams", g.fnServerParams, "user");
                    E(r, "aoStateSaveParams", g.fnStateSaveParams, "user");
                    E(r, "aoStateLoadParams", g.fnStateLoadParams, "user");
                    E(r, "aoStateLoaded", g.fnStateLoaded, "user");
                    E(r, "aoRowCallback", g.fnRowCallback, "user");
                    E(r, "aoRowCreatedCallback", g.fnCreatedRow, "user");
                    E(r, "aoHeaderCallback", g.fnHeaderCallback, "user");
                    E(r, "aoFooterCallback", g.fnFooterCallback, "user");
                    E(r, "aoInitComplete", g.fnInitComplete, "user");
                    E(r, "aoPreDrawCallback", g.fnPreDrawCallback, "user");
                    r.rowIdFn = U(g.rowId);
                    lb(r);
                    var x = r.oClasses;
                    f.extend(x, q.ext.classes, g.oClasses);
                    w.addClass(x.sTable);
                    r.iInitDisplayStart === p && (r.iInitDisplayStart = g.iDisplayStart, r._iDisplayStart = g.iDisplayStart);
                    null !== g.iDeferLoading && (r.bDeferLoading = !0, e = f.isArray(g.iDeferLoading), r._iRecordsDisplay = e ? g.iDeferLoading[0] : g.iDeferLoading, r._iRecordsTotal = e ? g.iDeferLoading[1] : g.iDeferLoading);
                    var y = r.oLanguage;
                    f.extend(!0, y, g.oLanguage);
                    y.sUrl && (f.ajax({
                        dataType: "json",
                        url: y.sUrl,
                        success: function(a) {
                            Ga(a);
                            L(m.oLanguage, a);
                            f.extend(!0, y, a);
                            ja(r)
                        },
                        error: function() {
                            ja(r)
                        }
                    }), n = !0);
                    null === g.asStripeClasses && (r.asStripeClasses = [x.sStripeOdd, x.sStripeEven]);
                    e = r.asStripeClasses;
                    var z = w.children("tbody").find("tr").eq(0); - 1 !== f.inArray(!0, f.map(e, function(a, b) {
                        return z.hasClass(a)
                    })) && (f("tbody tr", this).removeClass(e.join(" ")), r.asDestroyStripes = e.slice());
                    e = [];
                    u = this.getElementsByTagName("thead");
                    0 !== u.length && (fa(r.aoHeader, u[0]), e = ua(r));
                    if (null === g.aoColumns)
                        for (u = [], k = 0, l = e.length; k < l; k++) u.push(null);
                    else u = g.aoColumns;
                    k = 0;
                    for (l = u.length; k < l; k++) Ia(r, e ? e[k] : null);
                    nb(r, g.aoColumnDefs, u, function(a, b) {
                        ma(r, a, b)
                    });
                    if (z.length) {
                        var B = function(a, b) {
                            return null !== a.getAttribute("data-" + b) ? b : null
                        };
                        f(z[0]).children("th, td").each(function(a, b) {
                            var c = r.aoColumns[a];
                            if (c.mData === a) {
                                var d = B(b, "sort") || B(b, "order");
                                b = B(b, "filter") || B(b, "search");
                                if (null !== d || null !== b) c.mData = {
                                    _: a + ".display",
                                    sort: null !== d ? a + ".@data-" +
                                        d : p,
                                    type: null !== d ? a + ".@data-" + d : p,
                                    filter: null !== b ? a + ".@data-" + b : p
                                }, ma(r, a)
                            }
                        })
                    }
                    var C = r.oFeatures;
                    e = function() {
                        if (g.aaSorting === p) {
                            var a = r.aaSorting;
                            k = 0;
                            for (l = a.length; k < l; k++) a[k][1] = r.aoColumns[k].asSorting[0]
                        }
                        Aa(r);
                        C.bSort && E(r, "aoDrawCallback", function() {
                            if (r.bSorted) {
                                var a = Y(r),
                                    b = {};
                                f.each(a, function(a, c) {
                                    b[c.src] = c.dir
                                });
                                A(r, null, "order", [r, a, b]);
                                Nb(r)
                            }
                        });
                        E(r, "aoDrawCallback", function() {
                            (r.bSorted || "ssp" === D(r) || C.bDeferRender) && Aa(r)
                        }, "sc");
                        a = w.children("caption").each(function() {
                            this._captionSide = f(this).css("caption-side")
                        });
                        var b = w.children("thead");
                        0 === b.length && (b = f("<thead/>").appendTo(w));
                        r.nTHead = b[0];
                        b = w.children("tbody");
                        0 === b.length && (b = f("<tbody/>").appendTo(w));
                        r.nTBody = b[0];
                        b = w.children("tfoot");
                        0 === b.length && 0 < a.length && ("" !== r.oScroll.sX || "" !== r.oScroll.sY) && (b = f("<tfoot/>").appendTo(w));
                        0 === b.length || 0 === b.children().length ? w.addClass(x.sNoFooter) : 0 < b.length && (r.nTFoot = b[0], fa(r.aoFooter, r.nTFoot));
                        if (g.aaData)
                            for (k = 0; k < g.aaData.length; k++) R(r, g.aaData[k]);
                        else(r.bDeferLoading || "dom" == D(r)) && pa(r, f(r.nTBody).children("tr"));
                        r.aiDisplay = r.aiDisplayMaster.slice();
                        r.bInitialised = !0;
                        !1 === n && ja(r)
                    };
                    g.bStateSave ? (C.bStateSave = !0, E(r, "aoDrawCallback", Ba, "state_save"), Ob(r, g, e)) : e()
                }
            });
            b = null;
            return this
        },
        C, t, x, cb = {},
        Rb = /[\r\n\u2028]/g,
        Ea = /<.*?>/g,
        cc = /^\d{2,4}[\.\/\-]\d{1,2}[\.\/\-]\d{1,2}([T ]{1}\d{1,2}[:\.]\d{2}([\.:]\d{2})?)?$/,
        dc = /(\/|\.|\*|\+|\?|\||\(|\)|\[|\]|\{|\}|\\|\$|\^|\-)/g,
        bb = /[',$£€¥%\u2009\u202F\u20BD\u20a9\u20BArfkɃΞ]/gi,
        P = function(a) {
            return a && !0 !== a && "-" !== a ? !1 : !0
        },
        Sb = function(a) {
            var b = parseInt(a, 10);
            return !isNaN(b) && isFinite(a) ? b : null
        },
        Tb = function(a, b) {
            cb[b] || (cb[b] = new RegExp(Ua(b), "g"));
            return "string" === typeof a && "." !== b ? a.replace(/\./g, "").replace(cb[b], ".") : a
        },
        db = function(a, b, c) {
            var d = "string" === typeof a;
            if (P(a)) return !0;
            b && d && (a = Tb(a, b));
            c && d && (a = a.replace(bb, ""));
            return !isNaN(parseFloat(a)) && isFinite(a)
        },
        Ub = function(a, b, c) {
            return P(a) ? !0 : P(a) || "string" === typeof a ? db(a.replace(Ea, ""), b, c) ? !0 : null : null
        },
        J = function(a, b, c) {
            var d = [],
                e = 0,
                h = a.length;
            if (c !== p)
                for (; e < h; e++) a[e] && a[e][b] && d.push(a[e][b][c]);
            else
                for (; e < h; e++) a[e] && d.push(a[e][b]);
            return d
        },
        la = function(a, b, c, d) {
            var e = [],
                h = 0,
                g = b.length;
            if (d !== p)
                for (; h < g; h++) a[b[h]][c] && e.push(a[b[h]][c][d]);
            else
                for (; h < g; h++) e.push(a[b[h]][c]);
            return e
        },
        Z = function(a, b) {
            var c = [];
            if (b === p) {
                b = 0;
                var d = a
            } else d = b, b = a;
            for (a = b; a < d; a++) c.push(a);
            return c
        },
        Vb = function(a) {
            for (var b = [], c = 0, d = a.length; c < d; c++) a[c] && b.push(a[c]);
            return b
        },
        ta = function(a) {
            a: {
                if (!(2 > a.length)) {
                    var b = a.slice().sort();
                    for (var c = b[0], d = 1, e = b.length; d < e; d++) {
                        if (b[d] === c) {
                            b = !1;
                            break a
                        }
                        c = b[d]
                    }
                }
                b = !0
            }
            if (b) return a.slice();b = [];e = a.length;
            var h, g = 0;d = 0;a: for (; d < e; d++) {
                c = a[d];
                for (h = 0; h < g; h++)
                    if (b[h] === c) continue a;
                b.push(c);
                g++
            }
            return b
        };
    q.util = {
        throttle: function(a, b) {
            var c = b !== p ? b : 200,
                d, e;
            return function() {
                var b = this,
                    g = +new Date,
                    f = arguments;
                d && g < d + c ? (clearTimeout(e), e = setTimeout(function() {
                    d = p;
                    a.apply(b, f)
                }, c)) : (d = g, a.apply(b, f))
            }
        },
        escapeRegex: function(a) {
            return a.replace(dc, "\\$1")
        }
    };
    var F = function(a, b, c) {
            a[b] !== p && (a[c] = a[b])
        },
        da = /\[.*?\]$/,
        X = /\(\)$/,
        Ua = q.util.escapeRegex,
        ya = f("<div>")[0],
        $b = ya.textContent !== p,
        bc = /<.*?>/g,
        Sa = q.util.throttle,
        Wb = [],
        G = Array.prototype,
        ec = function(a) {
            var b, c = q.settings,
                d = f.map(c, function(a, b) {
                    return a.nTable
                });
            if (a) {
                if (a.nTable && a.oApi) return [a];
                if (a.nodeName && "table" === a.nodeName.toLowerCase()) {
                    var e = f.inArray(a, d);
                    return -1 !== e ? [c[e]] : null
                }
                if (a && "function" === typeof a.settings) return a.settings().toArray();
                "string" === typeof a ? b = f(a) : a instanceof f && (b = a)
            } else return [];
            if (b) return b.map(function(a) {
                e = f.inArray(this, d);
                return -1 !== e ? c[e] : null
            }).toArray()
        };
    var v = function(a, b) {
        if (!(this instanceof v)) return new v(a, b);
        var c = [],
            d = function(a) {
                (a = ec(a)) && c.push.apply(c, a)
            };
        if (f.isArray(a))
            for (var e = 0, h = a.length; e < h; e++) d(a[e]);
        else d(a);
        this.context = ta(c);
        b && f.merge(this, b);
        this.selector = {
            rows: null,
            cols: null,
            opts: null
        };
        v.extend(this, this, Wb)
    };
    q.Api = v;
    f.extend(v.prototype, {
        any: function() {
            return 0 !== this.count()
        },
        concat: G.concat,
        context: [],
        count: function() {
            return this.flatten().length
        },
        each: function(a) {
            for (var b = 0, c = this.length; b < c; b++) a.call(this, this[b], b, this);
            return this
        },
        eq: function(a) {
            var b = this.context;
            return b.length > a ? new v(b[a], this[a]) : null
        },
        filter: function(a) {
            var b = [];
            if (G.filter) b = G.filter.call(this, a, this);
            else
                for (var c = 0, d = this.length; c < d; c++) a.call(this, this[c], c, this) && b.push(this[c]);
            return new v(this.context, b)
        },
        flatten: function() {
            var a = [];
            return new v(this.context, a.concat.apply(a, this.toArray()))
        },
        join: G.join,
        indexOf: G.indexOf || function(a, b) {
            b = b || 0;
            for (var c = this.length; b < c; b++)
                if (this[b] === a) return b;
            return -1
        },
        iterator: function(a, b, c, d) {
            var e = [],
                h, g, f = this.context,
                l, n = this.selector;
            "string" === typeof a && (d = c, c = b, b = a, a = !1);
            var m = 0;
            for (h = f.length; m < h; m++) {
                var q = new v(f[m]);
                if ("table" === b) {
                    var u = c.call(q, f[m], m);
                    u !== p && e.push(u)
                } else if ("columns" === b || "rows" === b) u = c.call(q, f[m], this[m], m), u !== p && e.push(u);
                else if ("column" === b || "column-rows" === b || "row" === b || "cell" === b) {
                    var t = this[m];
                    "column-rows" === b && (l = Fa(f[m], n.opts));
                    var x = 0;
                    for (g = t.length; x < g; x++) u = t[x], u = "cell" === b ? c.call(q, f[m], u.row, u.column, m, x) : c.call(q, f[m], u, m, x, l), u !== p && e.push(u)
                }
            }
            return e.length || d ? (a = new v(f, a ? e.concat.apply([], e) : e), b = a.selector, b.rows = n.rows, b.cols = n.cols, b.opts = n.opts, a) : this
        },
        lastIndexOf: G.lastIndexOf || function(a, b) {
            return this.indexOf.apply(this.toArray.reverse(), arguments)
        },
        length: 0,
        map: function(a) {
            var b = [];
            if (G.map) b = G.map.call(this, a, this);
            else
                for (var c = 0, d = this.length; c < d; c++) b.push(a.call(this, this[c], c));
            return new v(this.context, b)
        },
        pluck: function(a) {
            return this.map(function(b) {
                return b[a]
            })
        },
        pop: G.pop,
        push: G.push,
        reduce: G.reduce || function(a, b) {
            return mb(this, a, b, 0, this.length, 1)
        },
        reduceRight: G.reduceRight || function(a, b) {
            return mb(this, a, b, this.length - 1, -1, -1)
        },
        reverse: G.reverse,
        selector: null,
        shift: G.shift,
        slice: function() {
            return new v(this.context, this)
        },
        sort: G.sort,
        splice: G.splice,
        toArray: function() {
            return G.slice.call(this)
        },
        to$: function() {
            return f(this)
        },
        toJQuery: function() {
            return f(this)
        },
        unique: function() {
            return new v(this.context, ta(this))
        },
        unshift: G.unshift
    });
    v.extend = function(a, b, c) {
        if (c.length && b && (b instanceof v || b.__dt_wrapper)) {
            var d, e = function(a, b, c) {
                return function() {
                    var d = b.apply(a, arguments);
                    v.extend(d, d, c.methodExt);
                    return d
                }
            };
            var h = 0;
            for (d = c.length; h < d; h++) {
                var g = c[h];
                b[g.name] = "function" === g.type ? e(a, g.val, g) : "object" === g.type ? {} : g.val;
                b[g.name].__dt_wrapper = !0;
                v.extend(a, b[g.name], g.propExt)
            }
        }
    };
    v.register = t = function(a, b) {
        if (f.isArray(a))
            for (var c = 0, d = a.length; c < d; c++) v.register(a[c], b);
        else {
            d = a.split(".");
            var e = Wb,
                h;
            a = 0;
            for (c = d.length; a < c; a++) {
                var g = (h = -1 !== d[a].indexOf("()")) ? d[a].replace("()", "") : d[a];
                a: {
                    var k = 0;
                    for (var l = e.length; k < l; k++)
                        if (e[k].name === g) {
                            k = e[k];
                            break a
                        }
                    k = null
                }
                k || (k = {
                    name: g,
                    val: {},
                    methodExt: [],
                    propExt: [],
                    type: "object"
                }, e.push(k));
                a === c - 1 ? (k.val = b, k.type = "function" === typeof b ? "function" : f.isPlainObject(b) ? "object" : "other") : e = h ? k.methodExt : k.propExt
            }
        }
    };
    v.registerPlural = x = function(a, b, c) {
        v.register(a, c);
        v.register(b, function() {
            var a = c.apply(this, arguments);
            return a === this ? this : a instanceof v ? a.length ? f.isArray(a[0]) ? new v(a.context, a[0]) : a[0] : p : a
        })
    };
    var fc = function(a, b) {
        if ("number" === typeof a) return [b[a]];
        var c = f.map(b, function(a, b) {
            return a.nTable
        });
        return f(c).filter(a).map(function(a) {
            a = f.inArray(this, c);
            return b[a]
        }).toArray()
    };
    t("tables()", function(a) {
        return a ? new v(fc(a, this.context)) : this
    });
    t("table()", function(a) {
        a = this.tables(a);
        var b = a.context;
        return b.length ? new v(b[0]) : a
    });
    x("tables().nodes()", "table().node()", function() {
        return this.iterator("table", function(a) {
            return a.nTable
        }, 1)
    });
    x("tables().body()", "table().body()", function() {
        return this.iterator("table", function(a) {
            return a.nTBody
        }, 1)
    });
    x("tables().header()", "table().header()", function() {
        return this.iterator("table", function(a) {
            return a.nTHead
        }, 1)
    });
    x("tables().footer()", "table().footer()", function() {
        return this.iterator("table", function(a) {
            return a.nTFoot
        }, 1)
    });
    x("tables().containers()", "table().container()", function() {
        return this.iterator("table", function(a) {
            return a.nTableWrapper
        }, 1)
    });
    t("draw()", function(a) {
        return this.iterator("table", function(b) {
            "page" === a ? S(b) : ("string" === typeof a && (a = "full-hold" === a ? !1 : !0), V(b, !1 === a))
        })
    });
    t("page()", function(a) {
        return a === p ? this.page.info().page : this.iterator("table", function(b) {
            Xa(b, a)
        })
    });
    t("page.info()", function(a) {
        if (0 === this.context.length) return p;
        a = this.context[0];
        var b = a._iDisplayStart,
            c = a.oFeatures.bPaginate ? a._iDisplayLength : -1,
            d = a.fnRecordsDisplay(),
            e = -1 === c;
        return {
            page: e ? 0 : Math.floor(b / c),
            pages: e ? 1 : Math.ceil(d / c),
            start: b,
            end: a.fnDisplayEnd(),
            length: c,
            recordsTotal: a.fnRecordsTotal(),
            recordsDisplay: d,
            serverSide: "ssp" === D(a)
        }
    });
    t("page.len()", function(a) {
        return a === p ? 0 !== this.context.length ? this.context[0]._iDisplayLength : p : this.iterator("table", function(b) {
            Va(b, a)
        })
    });
    var Xb = function(a, b, c) {
        if (c) {
            var d = new v(a);
            d.one("draw", function() {
                c(d.ajax.json())
            })
        }
        if ("ssp" == D(a)) V(a, b);
        else {
            K(a, !0);
            var e = a.jqXHR;
            e && 4 !== e.readyState && e.abort();
            va(a, [], function(c) {
                qa(a);
                c = wa(a, c);
                for (var d = 0, e = c.length; d < e; d++) R(a, c[d]);
                V(a, b);
                K(a, !1)
            })
        }
    };
    t("ajax.json()", function() {
        var a = this.context;
        if (0 < a.length) return a[0].json
    });
    t("ajax.params()", function() {
        var a = this.context;
        if (0 < a.length) return a[0].oAjaxData
    });
    t("ajax.reload()", function(a, b) {
        return this.iterator("table", function(c) {
            Xb(c, !1 === b, a)
        })
    });
    t("ajax.url()", function(a) {
        var b = this.context;
        if (a === p) {
            if (0 === b.length) return p;
            b = b[0];
            return b.ajax ? f.isPlainObject(b.ajax) ? b.ajax.url : b.ajax : b.sAjaxSource
        }
        return this.iterator("table", function(b) {
            f.isPlainObject(b.ajax) ? b.ajax.url = a : b.ajax = a
        })
    });
    t("ajax.url().load()", function(a, b) {
        return this.iterator("table", function(c) {
            Xb(c, !1 === b, a)
        })
    });
    var eb = function(a, b, c, d, e) {
            var h = [],
                g, k, l;
            var n = typeof b;
            b && "string" !== n && "function" !== n && b.length !== p || (b = [b]);
            n = 0;
            for (k = b.length; n < k; n++) {
                var m = b[n] && b[n].split && !b[n].match(/[\[\(:]/) ? b[n].split(",") : [b[n]];
                var q = 0;
                for (l = m.length; q < l; q++)(g = c("string" === typeof m[q] ? f.trim(m[q]) : m[q])) && g.length && (h = h.concat(g))
            }
            a = C.selector[a];
            if (a.length)
                for (n = 0, k = a.length; n < k; n++) h = a[n](d, e, h);
            return ta(h)
        },
        fb = function(a) {
            a || (a = {});
            a.filter && a.search === p && (a.search = a.filter);
            return f.extend({
                search: "none",
                order: "current",
                page: "all"
            }, a)
        },
        gb = function(a) {
            for (var b = 0, c = a.length; b < c; b++)
                if (0 < a[b].length) return a[0] = a[b], a[0].length = 1, a.length = 1, a.context = [a.context[b]], a;
            a.length = 0;
            return a
        },
        Fa = function(a, b) {
            var c = [],
                d = a.aiDisplay;
            var e = a.aiDisplayMaster;
            var h = b.search;
            var g = b.order;
            b = b.page;
            if ("ssp" == D(a)) return "removed" === h ? [] : Z(0, e.length);
            if ("current" == b)
                for (g = a._iDisplayStart, a = a.fnDisplayEnd(); g < a; g++) c.push(d[g]);
            else if ("current" == g || "applied" == g)
                if ("none" == h) c = e.slice();
                else if ("applied" == h) c = d.slice();
            else {
                if ("removed" == h) {
                    var k = {};
                    g = 0;
                    for (a = d.length; g < a; g++) k[d[g]] = null;
                    c = f.map(e, function(a) {
                        return k.hasOwnProperty(a) ? null : a
                    })
                }
            } else if ("index" == g || "original" == g)
                for (g = 0, a = a.aoData.length; g < a; g++) "none" == h ? c.push(g) : (e = f.inArray(g, d), (-1 === e && "removed" == h || 0 <= e && "applied" == h) && c.push(g));
            return c
        },
        gc = function(a, b, c) {
            var d;
            return eb("row", b, function(b) {
                var e = Sb(b),
                    g = a.aoData;
                if (null !== e && !c) return [e];
                d || (d = Fa(a, c));
                if (null !== e && -1 !== f.inArray(e, d)) return [e];
                if (null === b || b === p || "" === b) return d;
                if ("function" === typeof b) return f.map(d, function(a) {
                    var c = g[a];
                    return b(a, c._aData, c.nTr) ? a : null
                });
                if (b.nodeName) {
                    e = b._DT_RowIndex;
                    var k = b._DT_CellIndex;
                    if (e !== p) return g[e] && g[e].nTr === b ? [e] : [];
                    if (k) return g[k.row] && g[k.row].nTr === b.parentNode ? [k.row] : [];
                    e = f(b).closest("*[data-dt-row]");
                    return e.length ? [e.data("dt-row")] : []
                }
                if ("string" === typeof b && "#" === b.charAt(0) && (e = a.aIds[b.replace(/^#/, "")], e !== p)) return [e.idx];
                e = Vb(la(a.aoData, d, "nTr"));
                return f(e).filter(b).map(function() {
                    return this._DT_RowIndex
                }).toArray()
            }, a, c)
        };
    t("rows()", function(a, b) {
        a === p ? a = "" : f.isPlainObject(a) && (b = a, a = "");
        b = fb(b);
        var c = this.iterator("table", function(c) {
            return gc(c, a, b)
        }, 1);
        c.selector.rows = a;
        c.selector.opts = b;
        return c
    });
    t("rows().nodes()", function() {
        return this.iterator("row", function(a, b) {
            return a.aoData[b].nTr || p
        }, 1)
    });
    t("rows().data()", function() {
        return this.iterator(!0, "rows", function(a, b) {
            return la(a.aoData, b, "_aData")
        }, 1)
    });
    x("rows().cache()", "row().cache()", function(a) {
        return this.iterator("row", function(b, c) {
            b = b.aoData[c];
            return "search" === a ? b._aFilterData : b._aSortData
        }, 1)
    });
    x("rows().invalidate()", "row().invalidate()", function(a) {
        return this.iterator("row", function(b, c) {
            ea(b, c, a)
        })
    });
    x("rows().indexes()", "row().index()", function() {
        return this.iterator("row", function(a, b) {
            return b
        }, 1)
    });
    x("rows().ids()", "row().id()", function(a) {
        for (var b = [], c = this.context, d = 0, e = c.length; d < e; d++)
            for (var h = 0, g = this[d].length; h < g; h++) {
                var f = c[d].rowIdFn(c[d].aoData[this[d][h]]._aData);
                b.push((!0 === a ? "#" : "") + f)
            }
        return new v(c, b)
    });
    x("rows().remove()", "row().remove()", function() {
        var a = this;
        this.iterator("row", function(b, c, d) {
            var e = b.aoData,
                h = e[c],
                g, f;
            e.splice(c, 1);
            var l = 0;
            for (g = e.length; l < g; l++) {
                var n = e[l];
                var m = n.anCells;
                null !== n.nTr && (n.nTr._DT_RowIndex = l);
                if (null !== m)
                    for (n = 0, f = m.length; n < f; n++) m[n]._DT_CellIndex.row = l
            }
            ra(b.aiDisplayMaster, c);
            ra(b.aiDisplay, c);
            ra(a[d], c, !1);
            0 < b._iRecordsDisplay && b._iRecordsDisplay--;
            Wa(b);
            c = b.rowIdFn(h._aData);
            c !== p && delete b.aIds[c]
        });
        this.iterator("table", function(a) {
            for (var b = 0, d = a.aoData.length; b < d; b++) a.aoData[b].idx = b
        });
        return this
    });
    t("rows.add()", function(a) {
        var b = this.iterator("table", function(b) {
                var c, d = [];
                var g = 0;
                for (c = a.length; g < c; g++) {
                    var f = a[g];
                    f.nodeName && "TR" === f.nodeName.toUpperCase() ? d.push(pa(b, f)[0]) : d.push(R(b, f))
                }
                return d
            }, 1),
            c = this.rows(-1);
        c.pop();
        f.merge(c, b);
        return c
    });
    t("row()", function(a, b) {
        return gb(this.rows(a, b))
    });
    t("row().data()", function(a) {
        var b = this.context;
        if (a === p) return b.length && this.length ? b[0].aoData[this[0]]._aData : p;
        var c = b[0].aoData[this[0]];
        c._aData = a;
        f.isArray(a) && c.nTr.id && Q(b[0].rowId)(a, c.nTr.id);
        ea(b[0], this[0], "data");
        return this
    });
    t("row().node()", function() {
        var a = this.context;
        return a.length && this.length ? a[0].aoData[this[0]].nTr || null : null
    });
    t("row.add()", function(a) {
        a instanceof f && a.length && (a = a[0]);
        var b = this.iterator("table", function(b) {
            return a.nodeName && "TR" === a.nodeName.toUpperCase() ? pa(b, a)[0] : R(b, a)
        });
        return this.row(b[0])
    });
    var hc = function(a, b, c, d) {
            var e = [],
                h = function(b, c) {
                    if (f.isArray(b) || b instanceof f)
                        for (var d = 0, g = b.length; d < g; d++) h(b[d], c);
                    else b.nodeName && "tr" === b.nodeName.toLowerCase() ? e.push(b) : (d = f("<tr><td/></tr>").addClass(c), f("td", d).addClass(c).html(b)[0].colSpan = W(a), e.push(d[0]))
                };
            h(c, d);
            b._details && b._details.detach();
            b._details = f(e);
            b._detailsShow && b._details.insertAfter(b.nTr)
        },
        hb = function(a, b) {
            var c = a.context;
            c.length && (a = c[0].aoData[b !== p ? b : a[0]]) && a._details && (a._details.remove(), a._detailsShow = p, a._details = p)
        },
        Yb = function(a, b) {
            var c = a.context;
            c.length && a.length && (a = c[0].aoData[a[0]], a._details && ((a._detailsShow = b) ? a._details.insertAfter(a.nTr) : a._details.detach(), ic(c[0])))
        },
        ic = function(a) {
            var b = new v(a),
                c = a.aoData;
            b.off("draw.dt.DT_details column-visibility.dt.DT_details destroy.dt.DT_details");
            0 < J(c, "_details").length && (b.on("draw.dt.DT_details", function(d, e) {
                a === e && b.rows({
                    page: "current"
                }).eq(0).each(function(a) {
                    a = c[a];
                    a._detailsShow && a._details.insertAfter(a.nTr)
                })
            }), b.on("column-visibility.dt.DT_details", function(b, e, f, g) {
                if (a === e)
                    for (e = W(e), f = 0, g = c.length; f < g; f++) b = c[f], b._details && b._details.children("td[colspan]").attr("colspan", e)
            }), b.on("destroy.dt.DT_details", function(d, e) {
                if (a === e)
                    for (d = 0, e = c.length; d < e; d++) c[d]._details && hb(b, d)
            }))
        };
    t("row().child()", function(a, b) {
        var c = this.context;
        if (a === p) return c.length && this.length ? c[0].aoData[this[0]]._details : p;
        !0 === a ? this.child.show() : !1 === a ? hb(this) : c.length && this.length && hc(c[0], c[0].aoData[this[0]], a, b);
        return this
    });
    t(["row().child.show()", "row().child().show()"], function(a) {
        Yb(this, !0);
        return this
    });
    t(["row().child.hide()", "row().child().hide()"], function() {
        Yb(this, !1);
        return this
    });
    t(["row().child.remove()", "row().child().remove()"], function() {
        hb(this);
        return this
    });
    t("row().child.isShown()", function() {
        var a = this.context;
        return a.length && this.length ? a[0].aoData[this[0]]._detailsShow || !1 : !1
    });
    var jc = /^([^:]+):(name|visIdx|visible)$/,
        Zb = function(a, b, c, d, e) {
            c = [];
            d = 0;
            for (var f = e.length; d < f; d++) c.push(I(a, e[d], b));
            return c
        },
        kc = function(a, b, c) {
            var d = a.aoColumns,
                e = J(d, "sName"),
                h = J(d, "nTh");
            return eb("column", b, function(b) {
                var g = Sb(b);
                if ("" === b) return Z(d.length);
                if (null !== g) return [0 <= g ? g : d.length + g];
                if ("function" === typeof b) {
                    var l = Fa(a, c);
                    return f.map(d, function(c, d) {
                        return b(d, Zb(a, d, 0, 0, l), h[d]) ? d : null
                    })
                }
                var n = "string" === typeof b ? b.match(jc) : "";
                if (n) switch (n[2]) {
                    case "visIdx":
                    case "visible":
                        g = parseInt(n[1], 10);
                        if (0 > g) {
                            var m = f.map(d, function(a, b) {
                                return a.bVisible ? b : null
                            });
                            return [m[m.length + g]]
                        }
                        return [ba(a, g)];
                    case "name":
                        return f.map(e, function(a, b) {
                            return a === n[1] ? b : null
                        });
                    default:
                        return []
                }
                if (b.nodeName && b._DT_CellIndex) return [b._DT_CellIndex.column];
                g = f(h).filter(b).map(function() {
                    return f.inArray(this, h)
                }).toArray();
                if (g.length || !b.nodeName) return g;
                g = f(b).closest("*[data-dt-column]");
                return g.length ? [g.data("dt-column")] : []
            }, a, c)
        };
    t("columns()", function(a, b) {
        a === p ? a = "" : f.isPlainObject(a) && (b = a, a = "");
        b = fb(b);
        var c = this.iterator("table", function(c) {
            return kc(c, a, b)
        }, 1);
        c.selector.cols = a;
        c.selector.opts = b;
        return c
    });
    x("columns().header()", "column().header()", function(a, b) {
        return this.iterator("column", function(a, b) {
            return a.aoColumns[b].nTh
        }, 1)
    });
    x("columns().footer()", "column().footer()", function(a, b) {
        return this.iterator("column", function(a, b) {
            return a.aoColumns[b].nTf
        }, 1)
    });
    x("columns().data()", "column().data()", function() {
        return this.iterator("column-rows", Zb, 1)
    });
    x("columns().dataSrc()", "column().dataSrc()", function() {
        return this.iterator("column", function(a, b) {
            return a.aoColumns[b].mData
        }, 1)
    });
    x("columns().cache()", "column().cache()", function(a) {
        return this.iterator("column-rows", function(b, c, d, e, f) {
            return la(b.aoData, f, "search" === a ? "_aFilterData" : "_aSortData", c)
        }, 1)
    });
    x("columns().nodes()", "column().nodes()", function() {
        return this.iterator("column-rows", function(a, b, c, d, e) {
            return la(a.aoData, e, "anCells", b)
        }, 1)
    });
    x("columns().visible()", "column().visible()", function(a, b) {
        var c = this,
            d = this.iterator("column", function(b, c) {
                if (a === p) return b.aoColumns[c].bVisible;
                var d = b.aoColumns,
                    e = d[c],
                    h = b.aoData,
                    n;
                if (a !== p && e.bVisible !== a) {
                    if (a) {
                        var m = f.inArray(!0, J(d, "bVisible"), c + 1);
                        d = 0;
                        for (n = h.length; d < n; d++) {
                            var q = h[d].nTr;
                            b = h[d].anCells;
                            q && q.insertBefore(b[c], b[m] || null)
                        }
                    } else f(J(b.aoData, "anCells", c)).detach();
                    e.bVisible = a
                }
            });
        a !== p && this.iterator("table", function(d) {
            ha(d, d.aoHeader);
            ha(d, d.aoFooter);
            d.aiDisplay.length || f(d.nTBody).find("td[colspan]").attr("colspan", W(d));
            Ba(d);
            c.iterator("column", function(c, d) {
                A(c, null, "column-visibility", [c, d, a, b])
            });
            (b === p || b) && c.columns.adjust()
        });
        return d
    });
    x("columns().indexes()", "column().index()", function(a) {
        return this.iterator("column", function(b, c) {
            return "visible" === a ? ca(b, c) : c
        }, 1)
    });
    t("columns.adjust()", function() {
        return this.iterator("table", function(a) {
            aa(a)
        }, 1)
    });
    t("column.index()", function(a, b) {
        if (0 !== this.context.length) {
            var c = this.context[0];
            if ("fromVisible" === a || "toData" === a) return ba(c, b);
            if ("fromData" === a || "toVisible" === a) return ca(c, b)
        }
    });
    t("column()", function(a, b) {
        return gb(this.columns(a, b))
    });
    var lc = function(a, b, c) {
        var d = a.aoData,
            e = Fa(a, c),
            h = Vb(la(d, e, "anCells")),
            g = f([].concat.apply([], h)),
            k, l = a.aoColumns.length,
            n, m, q, u, t, v;
        return eb("cell", b, function(b) {
            var c = "function" === typeof b;
            if (null === b || b === p || c) {
                n = [];
                m = 0;
                for (q = e.length; m < q; m++)
                    for (k = e[m], u = 0; u < l; u++) t = {
                        row: k,
                        column: u
                    }, c ? (v = d[k], b(t, I(a, k, u), v.anCells ? v.anCells[u] : null) && n.push(t)) : n.push(t);
                return n
            }
            if (f.isPlainObject(b)) return b.column !== p && b.row !== p && -1 !== f.inArray(b.row, e) ? [b] : [];
            c = g.filter(b).map(function(a, b) {
                return {
                    row: b._DT_CellIndex.row,
                    column: b._DT_CellIndex.column
                }
            }).toArray();
            if (c.length || !b.nodeName) return c;
            v = f(b).closest("*[data-dt-row]");
            return v.length ? [{
                row: v.data("dt-row"),
                column: v.data("dt-column")
            }] : []
        }, a, c)
    };
    t("cells()", function(a, b, c) {
        f.isPlainObject(a) && (a.row === p ? (c = a, a = null) : (c = b, b = null));
        f.isPlainObject(b) && (c = b, b = null);
        if (null === b || b === p) return this.iterator("table", function(b) {
            return lc(b, a, fb(c))
        });
        var d = c ? {
                page: c.page,
                order: c.order,
                search: c.search
            } : {},
            e = this.columns(b, d),
            h = this.rows(a, d),
            g, k, l, n;
        d = this.iterator("table", function(a, b) {
            a = [];
            g = 0;
            for (k = h[b].length; g < k; g++)
                for (l = 0, n = e[b].length; l < n; l++) a.push({
                    row: h[b][g],
                    column: e[b][l]
                });
            return a
        }, 1);
        d = c && c.selected ? this.cells(d, c) : d;
        f.extend(d.selector, {
            cols: b,
            rows: a,
            opts: c
        });
        return d
    });
    x("cells().nodes()", "cell().node()", function() {
        return this.iterator("cell", function(a, b, c) {
            return (a = a.aoData[b]) && a.anCells ? a.anCells[c] : p
        }, 1)
    });
    t("cells().data()", function() {
        return this.iterator("cell", function(a, b, c) {
            return I(a, b, c)
        }, 1)
    });
    x("cells().cache()", "cell().cache()", function(a) {
        a = "search" === a ? "_aFilterData" : "_aSortData";
        return this.iterator("cell", function(b, c, d) {
            return b.aoData[c][a][d]
        }, 1)
    });
    x("cells().render()", "cell().render()", function(a) {
        return this.iterator("cell", function(b, c, d) {
            return I(b, c, d, a)
        }, 1)
    });
    x("cells().indexes()", "cell().index()", function() {
        return this.iterator("cell", function(a, b, c) {
            return {
                row: b,
                column: c,
                columnVisible: ca(a, c)
            }
        }, 1)
    });
    x("cells().invalidate()", "cell().invalidate()", function(a) {
        return this.iterator("cell", function(b, c, d) {
            ea(b, c, a, d)
        })
    });
    t("cell()", function(a, b, c) {
        return gb(this.cells(a, b, c))
    });
    t("cell().data()", function(a) {
        var b = this.context,
            c = this[0];
        if (a === p) return b.length && c.length ? I(b[0], c[0].row, c[0].column) : p;
        ob(b[0], c[0].row, c[0].column, a);
        ea(b[0], c[0].row, "data", c[0].column);
        return this
    });
    t("order()", function(a, b) {
        var c = this.context;
        if (a === p) return 0 !== c.length ? c[0].aaSorting : p;
        "number" === typeof a ? a = [
            [a, b]
        ] : a.length && !f.isArray(a[0]) && (a = Array.prototype.slice.call(arguments));
        return this.iterator("table", function(b) {
            b.aaSorting = a.slice()
        })
    });
    t("order.listener()", function(a, b, c) {
        return this.iterator("table", function(d) {
            Qa(d, a, b, c)
        })
    });
    t("order.fixed()", function(a) {
        if (!a) {
            var b = this.context;
            b = b.length ? b[0].aaSortingFixed : p;
            return f.isArray(b) ? {
                pre: b
            } : b
        }
        return this.iterator("table", function(b) {
            b.aaSortingFixed = f.extend(!0, {}, a)
        })
    });
    t(["columns().order()", "column().order()"], function(a) {
        var b = this;
        return this.iterator("table", function(c, d) {
            var e = [];
            f.each(b[d], function(b, c) {
                e.push([c, a])
            });
            c.aaSorting = e
        })
    });
    t("search()", function(a, b, c, d) {
        var e = this.context;
        return a === p ? 0 !== e.length ? e[0].oPreviousSearch.sSearch : p : this.iterator("table", function(e) {
            e.oFeatures.bFilter && ia(e, f.extend({}, e.oPreviousSearch, {
                sSearch: a + "",
                bRegex: null === b ? !1 : b,
                bSmart: null === c ? !0 : c,
                bCaseInsensitive: null === d ? !0 : d
            }), 1)
        })
    });
    x("columns().search()", "column().search()", function(a, b, c, d) {
        return this.iterator("column", function(e, h) {
            var g = e.aoPreSearchCols;
            if (a === p) return g[h].sSearch;
            e.oFeatures.bFilter && (f.extend(g[h], {
                sSearch: a + "",
                bRegex: null === b ? !1 : b,
                bSmart: null === c ? !0 : c,
                bCaseInsensitive: null === d ? !0 : d
            }), ia(e, e.oPreviousSearch, 1))
        })
    });
    t("state()", function() {
        return this.context.length ? this.context[0].oSavedState : null
    });
    t("state.clear()", function() {
        return this.iterator("table", function(a) {
            a.fnStateSaveCallback.call(a.oInstance, a, {})
        })
    });
    t("state.loaded()", function() {
        return this.context.length ? this.context[0].oLoadedState : null
    });
    t("state.save()", function() {
        return this.iterator("table", function(a) {
            Ba(a)
        })
    });
    q.versionCheck = q.fnVersionCheck = function(a) {
        var b = q.version.split(".");
        a = a.split(".");
        for (var c, d, e = 0, f = a.length; e < f; e++)
            if (c = parseInt(b[e], 10) || 0, d = parseInt(a[e], 10) || 0, c !== d) return c > d;
        return !0
    };
    q.isDataTable = q.fnIsDataTable = function(a) {
        var b = f(a).get(0),
            c = !1;
        if (a instanceof q.Api) return !0;
        f.each(q.settings, function(a, e) {
            a = e.nScrollHead ? f("table", e.nScrollHead)[0] : null;
            var d = e.nScrollFoot ? f("table", e.nScrollFoot)[0] : null;
            if (e.nTable === b || a === b || d === b) c = !0
        });
        return c
    };
    q.tables = q.fnTables = function(a) {
        var b = !1;
        f.isPlainObject(a) && (b = a.api, a = a.visible);
        var c = f.map(q.settings, function(b) {
            if (!a || a && f(b.nTable).is(":visible")) return b.nTable
        });
        return b ? new v(c) : c
    };
    q.camelToHungarian = L;
    t("$()", function(a, b) {
        b = this.rows(b).nodes();
        b = f(b);
        return f([].concat(b.filter(a).toArray(), b.find(a).toArray()))
    });
    f.each(["on", "one", "off"], function(a, b) {
        t(b + "()", function() {
            var a = Array.prototype.slice.call(arguments);
            a[0] = f.map(a[0].split(/\s/), function(a) {
                return a.match(/\.dt\b/) ? a : a + ".dt"
            }).join(" ");
            var d = f(this.tables().nodes());
            d[b].apply(d, a);
            return this
        })
    });
    t("clear()", function() {
        return this.iterator("table", function(a) {
            qa(a)
        })
    });
    t("settings()", function() {
        return new v(this.context, this.context)
    });
    t("init()", function() {
        var a = this.context;
        return a.length ? a[0].oInit : null
    });
    t("data()", function() {
        return this.iterator("table", function(a) {
            return J(a.aoData, "_aData")
        }).flatten()
    });
    t("destroy()", function(a) {
        a = a || !1;
        return this.iterator("table", function(b) {
            var c = b.nTableWrapper.parentNode,
                d = b.oClasses,
                e = b.nTable,
                h = b.nTBody,
                g = b.nTHead,
                k = b.nTFoot,
                l = f(e);
            h = f(h);
            var n = f(b.nTableWrapper),
                m = f.map(b.aoData, function(a) {
                    return a.nTr
                }),
                p;
            b.bDestroying = !0;
            A(b, "aoDestroyCallback", "destroy", [b]);
            a || (new v(b)).columns().visible(!0);
            n.off(".DT").find(":not(tbody *)").off(".DT");
            f(z).off(".DT-" + b.sInstance);
            e != g.parentNode && (l.children("thead").detach(), l.append(g));
            k && e != k.parentNode && (l.children("tfoot").detach(), l.append(k));
            b.aaSorting = [];
            b.aaSortingFixed = [];
            Aa(b);
            f(m).removeClass(b.asStripeClasses.join(" "));
            f("th, td", g).removeClass(d.sSortable + " " + d.sSortableAsc + " " + d.sSortableDesc + " " + d.sSortableNone);
            h.children().detach();
            h.append(m);
            g = a ? "remove" : "detach";
            l[g]();
            n[g]();
            !a && c && (c.insertBefore(e, b.nTableReinsertBefore), l.css("width", b.sDestroyWidth).removeClass(d.sTable), (p = b.asDestroyStripes.length) && h.children().each(function(a) {
                f(this).addClass(b.asDestroyStripes[a % p])
            }));
            c = f.inArray(b, q.settings); - 1 !== c && q.settings.splice(c, 1)
        })
    });
    f.each(["column", "row", "cell"], function(a, b) {
        t(b + "s().every()", function(a) {
            var c = this.selector.opts,
                e = this;
            return this.iterator(b, function(d, f, k, l, n) {
                a.call(e[b](f, "cell" === b ? k : c, "cell" === b ? c : p), f, k, l, n)
            })
        })
    });
    t("i18n()", function(a, b, c) {
        var d = this.context[0];
        a = U(a)(d.oLanguage);
        a === p && (a = b);
        c !== p && f.isPlainObject(a) && (a = a[c] !== p ? a[c] : a._);
        return a.replace("%d", c)
    });
    q.version = "1.10.20";
    q.settings = [];
    q.models = {};
    q.models.oSearch = {
        bCaseInsensitive: !0,
        sSearch: "",
        bRegex: !1,
        bSmart: !0
    };
    q.models.oRow = {
        nTr: null,
        anCells: null,
        _aData: [],
        _aSortData: null,
        _aFilterData: null,
        _sFilterRow: null,
        _sRowStripe: "",
        src: null,
        idx: -1
    };
    q.models.oColumn = {
        idx: null,
        aDataSort: null,
        asSorting: null,
        bSearchable: null,
        bSortable: null,
        bVisible: null,
        _sManualType: null,
        _bAttrSrc: !1,
        fnCreatedCell: null,
        fnGetData: null,
        fnSetData: null,
        mData: null,
        mRender: null,
        nTh: null,
        nTf: null,
        sClass: null,
        sContentPadding: null,
        sDefaultContent: null,
        sName: null,
        sSortDataType: "std",
        sSortingClass: null,
        sSortingClassJUI: null,
        sTitle: null,
        sType: null,
        sWidth: null,
        sWidthOrig: null
    };
    q.defaults = {
        aaData: null,
        aaSorting: [
            [0, "asc"]
        ],
        aaSortingFixed: [],
        ajax: null,
        aLengthMenu: [10, 25, 50, 100],
        aoColumns: null,
        aoColumnDefs: null,
        aoSearchCols: [],
        asStripeClasses: null,
        bAutoWidth: !0,
        bDeferRender: !1,
        bDestroy: !1,
        bFilter: !0,
        bInfo: !0,
        bLengthChange: !0,
        bPaginate: !0,
        bProcessing: !1,
        bRetrieve: !1,
        bScrollCollapse: !1,
        bServerSide: !1,
        bSort: !0,
        bSortMulti: !0,
        bSortCellsTop: !1,
        bSortClasses: !0,
        bStateSave: !1,
        fnCreatedRow: null,
        fnDrawCallback: null,
        fnFooterCallback: null,
        fnFormatNumber: function(a) {
            return a.toString().replace(/\B(?=(\d{3})+(?!\d))/g, this.oLanguage.sThousands)
        },
        fnHeaderCallback: null,
        fnInfoCallback: null,
        fnInitComplete: null,
        fnPreDrawCallback: null,
        fnRowCallback: null,
        fnServerData: null,
        fnServerParams: null,
        fnStateLoadCallback: function(a) {
            try {
                return JSON.parse((-1 === a.iStateDuration ? sessionStorage : localStorage).getItem("DataTables_" + a.sInstance + "_" + location.pathname))
            } catch (b) {}
        },
        fnStateLoadParams: null,
        fnStateLoaded: null,
        fnStateSaveCallback: function(a, b) {
            try {
                (-1 === a.iStateDuration ? sessionStorage : localStorage).setItem("DataTables_" + a.sInstance + "_" + location.pathname, JSON.stringify(b))
            } catch (c) {}
        },
        fnStateSaveParams: null,
        iStateDuration: 7200,
        iDeferLoading: null,
        iDisplayLength: 10,
        iDisplayStart: 0,
        iTabIndex: 0,
        oClasses: {},
        oLanguage: {
            oAria: {
                sSortAscending: ": activate to sort column ascending",
                sSortDescending: ": activate to sort column descending"
            },
            oPaginate: {
                sFirst: "First",
                sLast: "Last",
                sNext: "Next",
                sPrevious: "Previous"
            },
            sEmptyTable: "No data available in table",
            sInfo: "Showing _START_ to _END_ of _TOTAL_ entries",
            sInfoEmpty: "Showing 0 to 0 of 0 entries",
            sInfoFiltered: "(filtered from _MAX_ total entries)",
            sInfoPostFix: "",
            sDecimal: "",
            sThousands: ",",
            sLengthMenu: "Show _MENU_ entries",
            sLoadingRecords: "Loading...",
            sProcessing: "Processing...",
            sSearch: "Search:",
            sSearchPlaceholder: "",
            sUrl: "",
            sZeroRecords: "No matching records found"
        },
        oSearch: f.extend({}, q.models.oSearch),
        sAjaxDataProp: "data",
        sAjaxSource: null,
        sDom: "lfrtip",
        searchDelay: null,
        sPaginationType: "simple_numbers",
        sScrollX: "",
        sScrollXInner: "",
        sScrollY: "",
        sServerMethod: "GET",
        renderer: null,
        rowId: "DT_RowId"
    };
    H(q.defaults);
    q.defaults.column = {
        aDataSort: null,
        iDataSort: -1,
        asSorting: ["asc", "desc"],
        bSearchable: !0,
        bSortable: !0,
        bVisible: !0,
        fnCreatedCell: null,
        mData: null,
        mRender: null,
        sCellType: "td",
        sClass: "",
        sContentPadding: "",
        sDefaultContent: null,
        sName: "",
        sSortDataType: "std",
        sTitle: null,
        sType: null,
        sWidth: null
    };
    H(q.defaults.column);
    q.models.oSettings = {
        oFeatures: {
            bAutoWidth: null,
            bDeferRender: null,
            bFilter: null,
            bInfo: null,
            bLengthChange: null,
            bPaginate: null,
            bProcessing: null,
            bServerSide: null,
            bSort: null,
            bSortMulti: null,
            bSortClasses: null,
            bStateSave: null
        },
        oScroll: {
            bCollapse: null,
            iBarWidth: 0,
            sX: null,
            sXInner: null,
            sY: null
        },
        oLanguage: {
            fnInfoCallback: null
        },
        oBrowser: {
            bScrollOversize: !1,
            bScrollbarLeft: !1,
            bBounding: !1,
            barWidth: 0
        },
        ajax: null,
        aanFeatures: [],
        aoData: [],
        aiDisplay: [],
        aiDisplayMaster: [],
        aIds: {},
        aoColumns: [],
        aoHeader: [],
        aoFooter: [],
        oPreviousSearch: {},
        aoPreSearchCols: [],
        aaSorting: null,
        aaSortingFixed: [],
        asStripeClasses: null,
        asDestroyStripes: [],
        sDestroyWidth: 0,
        aoRowCallback: [],
        aoHeaderCallback: [],
        aoFooterCallback: [],
        aoDrawCallback: [],
        aoRowCreatedCallback: [],
        aoPreDrawCallback: [],
        aoInitComplete: [],
        aoStateSaveParams: [],
        aoStateLoadParams: [],
        aoStateLoaded: [],
        sTableId: "",
        nTable: null,
        nTHead: null,
        nTFoot: null,
        nTBody: null,
        nTableWrapper: null,
        bDeferLoading: !1,
        bInitialised: !1,
        aoOpenRows: [],
        sDom: null,
        searchDelay: null,
        sPaginationType: "two_button",
        iStateDuration: 0,
        aoStateSave: [],
        aoStateLoad: [],
        oSavedState: null,
        oLoadedState: null,
        sAjaxSource: null,
        sAjaxDataProp: null,
        bAjaxDataGet: !0,
        jqXHR: null,
        json: p,
        oAjaxData: p,
        fnServerData: null,
        aoServerParams: [],
        sServerMethod: null,
        fnFormatNumber: null,
        aLengthMenu: null,
        iDraw: 0,
        bDrawing: !1,
        iDrawError: -1,
        _iDisplayLength: 10,
        _iDisplayStart: 0,
        _iRecordsTotal: 0,
        _iRecordsDisplay: 0,
        oClasses: {},
        bFiltered: !1,
        bSorted: !1,
        bSortCellsTop: null,
        oInit: null,
        aoDestroyCallback: [],
        fnRecordsTotal: function() {
            return "ssp" == D(this) ? 1 * this._iRecordsTotal : this.aiDisplayMaster.length
        },
        fnRecordsDisplay: function() {
            return "ssp" == D(this) ? 1 * this._iRecordsDisplay : this.aiDisplay.length
        },
        fnDisplayEnd: function() {
            var a = this._iDisplayLength,
                b = this._iDisplayStart,
                c = b + a,
                d = this.aiDisplay.length,
                e = this.oFeatures,
                f = e.bPaginate;
            return e.bServerSide ? !1 === f || -1 === a ? b + d : Math.min(b + a, this._iRecordsDisplay) : !f || c > d || -1 === a ? d : c
        },
        oInstance: null,
        sInstance: null,
        iTabIndex: 0,
        nScrollHead: null,
        nScrollFoot: null,
        aLastSort: [],
        oPlugins: {},
        rowIdFn: null,
        rowId: null
    };
    q.ext = C = {
        buttons: {},
        classes: {},
        builder: "-source-",
        errMode: "alert",
        feature: [],
        search: [],
        selector: {
            cell: [],
            column: [],
            row: []
        },
        internal: {},
        legacy: {
            ajax: null
        },
        pager: {},
        renderer: {
            pageButton: {},
            header: {}
        },
        order: {},
        type: {
            detect: [],
            search: {},
            order: {}
        },
        _unique: 0,
        fnVersionCheck: q.fnVersionCheck,
        iApiIndex: 0,
        oJUIClasses: {},
        sVersion: q.version
    };
    f.extend(C, {
        afnFiltering: C.search,
        aTypes: C.type.detect,
        ofnSearch: C.type.search,
        oSort: C.type.order,
        afnSortData: C.order,
        aoFeatures: C.feature,
        oApi: C.internal,
        oStdClasses: C.classes,
        oPagination: C.pager
    });
    f.extend(q.ext.classes, {
        sTable: "dataTable",
        sNoFooter: "no-footer",
        sPageButton: "paginate_button",
        sPageButtonActive: "current",
        sPageButtonDisabled: "disabled",
        sStripeOdd: "odd",
        sStripeEven: "even",
        sRowEmpty: "dataTables_empty",
        sWrapper: "dataTables_wrapper",
        sFilter: "dataTables_filter",
        sInfo: "dataTables_info",
        sPaging: "dataTables_paginate paging_",
        sLength: "dataTables_length",
        sProcessing: "dataTables_processing",
        sSortAsc: "sorting_asc",
        sSortDesc: "sorting_desc",
        sSortable: "sorting",
        sSortableAsc: "sorting_asc_disabled",
        sSortableDesc: "sorting_desc_disabled",
        sSortableNone: "sorting_disabled",
        sSortColumn: "sorting_",
        sFilterInput: "",
        sLengthSelect: "",
        sScrollWrapper: "dataTables_scroll",
        sScrollHead: "dataTables_scrollHead",
        sScrollHeadInner: "dataTables_scrollHeadInner",
        sScrollBody: "dataTables_scrollBody",
        sScrollFoot: "dataTables_scrollFoot",
        sScrollFootInner: "dataTables_scrollFootInner",
        sHeaderTH: "",
        sFooterTH: "",
        sSortJUIAsc: "",
        sSortJUIDesc: "",
        sSortJUI: "",
        sSortJUIAscAllowed: "",
        sSortJUIDescAllowed: "",
        sSortJUIWrapper: "",
        sSortIcon: "",
        sJUIHeader: "",
        sJUIFooter: ""
    });
    var Pb = q.ext.pager;
    f.extend(Pb, {
        simple: function(a, b) {
            return ["previous", "next"]
        },
        full: function(a, b) {
            return ["first", "previous", "next", "last"]
        },
        numbers: function(a, b) {
            return [ka(a, b)]
        },
        simple_numbers: function(a, b) {
            return ["previous", ka(a, b), "next"]
        },
        full_numbers: function(a, b) {
            return ["first", "previous", ka(a, b), "next", "last"]
        },
        first_last_numbers: function(a, b) {
            return ["first", ka(a, b), "last"]
        },
        _numbers: ka,
        numbers_length: 7
    });
    f.extend(!0, q.ext.renderer, {
        pageButton: {
            _: function(a, b, c, d, e, h) {
                var g = a.oClasses,
                    k = a.oLanguage.oPaginate,
                    l = a.oLanguage.oAria.paginate || {},
                    n, m, q = 0,
                    t = function(b, d) {
                        var p, r = g.sPageButtonDisabled,
                            u = function(b) {
                                Xa(a, b.data.action, !0)
                            };
                        var w = 0;
                        for (p = d.length; w < p; w++) {
                            var v = d[w];
                            if (f.isArray(v)) {
                                var x = f("<" + (v.DT_el || "div") + "/>").appendTo(b);
                                t(x, v)
                            } else {
                                n = null;
                                m = v;
                                x = a.iTabIndex;
                                switch (v) {
                                    case "ellipsis":
                                        b.append('<span class="ellipsis">&#x2026;</span>');
                                        break;
                                    case "first":
                                        n = k.sFirst;
                                        0 === e && (x = -1, m += " " + r);
                                        break;
                                    case "previous":
                                        n = k.sPrevious;
                                        0 === e && (x = -1, m += " " + r);
                                        break;
                                    case "next":
                                        n = k.sNext;
                                        e === h - 1 && (x = -1, m += " " + r);
                                        break;
                                    case "last":
                                        n = k.sLast;
                                        e === h - 1 && (x = -1, m += " " + r);
                                        break;
                                    default:
                                        n = v + 1, m = e === v ? g.sPageButtonActive : ""
                                }
                                null !== n && (x = f("<a>", {
                                    "class": g.sPageButton + " " + m,
                                    "aria-controls": a.sTableId,
                                    "aria-label": l[v],
                                    "data-dt-idx": q,
                                    tabindex: x,
                                    id: 0 === c && "string" === typeof v ? a.sTableId + "_" + v : null
                                }).html(n).appendTo(b), $a(x, {
                                    action: v
                                }, u), q++)
                            }
                        }
                    };
                try {
                    var v = f(b).find(y.activeElement).data("dt-idx")
                } catch (mc) {}
                t(f(b).empty(), d);
                v !== p && f(b).find("[data-dt-idx=" +
                    v + "]").focus()
            }
        }
    });
    f.extend(q.ext.type.detect, [function(a, b) {
        b = b.oLanguage.sDecimal;
        return db(a, b) ? "num" + b : null
    }, function(a, b) {
        if (a && !(a instanceof Date) && !cc.test(a)) return null;
        b = Date.parse(a);
        return null !== b && !isNaN(b) || P(a) ? "date" : null
    }, function(a, b) {
        b = b.oLanguage.sDecimal;
        return db(a, b, !0) ? "num-fmt" + b : null
    }, function(a, b) {
        b = b.oLanguage.sDecimal;
        return Ub(a, b) ? "html-num" + b : null
    }, function(a, b) {
        b = b.oLanguage.sDecimal;
        return Ub(a, b, !0) ? "html-num-fmt" + b : null
    }, function(a, b) {
        return P(a) || "string" === typeof a && -1 !== a.indexOf("<") ? "html" : null
    }]);
    f.extend(q.ext.type.search, {
        html: function(a) {
            return P(a) ? a : "string" === typeof a ? a.replace(Rb, " ").replace(Ea, "") : ""
        },
        string: function(a) {
            return P(a) ? a : "string" === typeof a ? a.replace(Rb, " ") : a
        }
    });
    var Da = function(a, b, c, d) {
        if (0 !== a && (!a || "-" === a)) return -Infinity;
        b && (a = Tb(a, b));
        a.replace && (c && (a = a.replace(c, "")), d && (a = a.replace(d, "")));
        return 1 * a
    };
    f.extend(C.type.order, {
        "date-pre": function(a) {
            a = Date.parse(a);
            return isNaN(a) ? -Infinity : a
        },
        "html-pre": function(a) {
            return P(a) ? "" : a.replace ? a.replace(/<.*?>/g, "").toLowerCase() : a + ""
        },
        "string-pre": function(a) {
            return P(a) ? "" : "string" === typeof a ? a.toLowerCase() : a.toString ? a.toString() : ""
        },
        "string-asc": function(a, b) {
            return a < b ? -1 : a > b ? 1 : 0
        },
        "string-desc": function(a, b) {
            return a < b ? 1 : a > b ? -1 : 0
        }
    });
    Ha("");
    f.extend(!0, q.ext.renderer, {
        header: {
            _: function(a, b, c, d) {
                f(a.nTable).on("order.dt.DT", function(e, f, g, k) {
                    a === f && (e = c.idx, b.removeClass(c.sSortingClass + " " + d.sSortAsc + " " + d.sSortDesc).addClass("asc" == k[e] ? d.sSortAsc : "desc" == k[e] ? d.sSortDesc : c.sSortingClass))
                })
            },
            jqueryui: function(a, b, c, d) {
                f("<div/>").addClass(d.sSortJUIWrapper).append(b.contents()).append(f("<span/>").addClass(d.sSortIcon + " " + c.sSortingClassJUI)).appendTo(b);
                f(a.nTable).on("order.dt.DT", function(e, f, g, k) {
                    a === f && (e = c.idx, b.removeClass(d.sSortAsc + " " + d.sSortDesc).addClass("asc" == k[e] ? d.sSortAsc : "desc" == k[e] ? d.sSortDesc : c.sSortingClass), b.find("span." + d.sSortIcon).removeClass(d.sSortJUIAsc + " " + d.sSortJUIDesc + " " + d.sSortJUI + " " + d.sSortJUIAscAllowed + " " + d.sSortJUIDescAllowed).addClass("asc" == k[e] ? d.sSortJUIAsc : "desc" == k[e] ? d.sSortJUIDesc : c.sSortingClassJUI))
                })
            }
        }
    });
    var ib = function(a) {
        return "string" === typeof a ? a.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;") : a
    };
    q.render = {
        number: function(a, b, c, d, e) {
            return {
                display: function(f) {
                    if ("number" !== typeof f && "string" !== typeof f) return f;
                    var g = 0 > f ? "-" : "",
                        h = parseFloat(f);
                    if (isNaN(h)) return ib(f);
                    h = h.toFixed(c);
                    f = Math.abs(h);
                    h = parseInt(f, 10);
                    f = c ? b + (f - h).toFixed(c).substring(2) : "";
                    return g + (d || "") + h.toString().replace(/\B(?=(\d{3})+(?!\d))/g, a) + f + (e || "")
                }
            }
        },
        text: function() {
            return {
                display: ib,
                filter: ib
            }
        }
    };
    f.extend(q.ext.internal, {
        _fnExternApiFunc: Qb,
        _fnBuildAjax: va,
        _fnAjaxUpdate: qb,
        _fnAjaxParameters: zb,
        _fnAjaxUpdateDraw: Ab,
        _fnAjaxDataSrc: wa,
        _fnAddColumn: Ia,
        _fnColumnOptions: ma,
        _fnAdjustColumnSizing: aa,
        _fnVisibleToColumnIndex: ba,
        _fnColumnIndexToVisible: ca,
        _fnVisbleColumns: W,
        _fnGetColumns: oa,
        _fnColumnTypes: Ka,
        _fnApplyColumnDefs: nb,
        _fnHungarianMap: H,
        _fnCamelToHungarian: L,
        _fnLanguageCompat: Ga,
        _fnBrowserDetect: lb,
        _fnAddData: R,
        _fnAddTr: pa,
        _fnNodeToDataIndex: function(a, b) {
            return b._DT_RowIndex !== p ? b._DT_RowIndex : null
        },
        _fnNodeToColumnIndex: function(a, b, c) {
            return f.inArray(c, a.aoData[b].anCells)
        },
        _fnGetCellData: I,
        _fnSetCellData: ob,
        _fnSplitObjNotation: Na,
        _fnGetObjectDataFn: U,
        _fnSetObjectDataFn: Q,
        _fnGetDataMaster: Oa,
        _fnClearTable: qa,
        _fnDeleteIndex: ra,
        _fnInvalidate: ea,
        _fnGetRowElements: Ma,
        _fnCreateTr: La,
        _fnBuildHead: pb,
        _fnDrawHead: ha,
        _fnDraw: S,
        _fnReDraw: V,
        _fnAddOptionsHtml: sb,
        _fnDetectHeader: fa,
        _fnGetUniqueThs: ua,
        _fnFeatureHtmlFilter: ub,
        _fnFilterComplete: ia,
        _fnFilterCustom: Db,
        _fnFilterColumn: Cb,
        _fnFilter: Bb,
        _fnFilterCreateSearch: Ta,
        _fnEscapeRegex: Ua,
        _fnFilterData: Eb,
        _fnFeatureHtmlInfo: xb,
        _fnUpdateInfo: Hb,
        _fnInfoMacros: Ib,
        _fnInitialise: ja,
        _fnInitComplete: xa,
        _fnLengthChange: Va,
        _fnFeatureHtmlLength: tb,
        _fnFeatureHtmlPaginate: yb,
        _fnPageChange: Xa,
        _fnFeatureHtmlProcessing: vb,
        _fnProcessingDisplay: K,
        _fnFeatureHtmlTable: wb,
        _fnScrollDraw: na,
        _fnApplyToChildren: N,
        _fnCalculateColumnWidths: Ja,
        _fnThrottle: Sa,
        _fnConvertToWidth: Jb,
        _fnGetWidestNode: Kb,
        _fnGetMaxLenString: Lb,
        _fnStringToCss: B,
        _fnSortFlatten: Y,
        _fnSort: rb,
        _fnSortAria: Nb,
        _fnSortListener: Za,
        _fnSortAttachListener: Qa,
        _fnSortingClasses: Aa,
        _fnSortData: Mb,
        _fnSaveState: Ba,
        _fnLoadState: Ob,
        _fnSettingsFromNode: Ca,
        _fnLog: O,
        _fnMap: M,
        _fnBindAction: $a,
        _fnCallbackReg: E,
        _fnCallbackFire: A,
        _fnLengthOverflow: Wa,
        _fnRenderer: Ra,
        _fnDataSource: D,
        _fnRowAttributes: Pa,
        _fnExtend: ab,
        _fnCalculateEnd: function() {}
    });
    f.fn.dataTable = q;
    q.$ = f;
    f.fn.dataTableSettings = q.settings;
    f.fn.dataTableExt = q.ext;
    f.fn.DataTable = function(a) {
        return f(this).dataTable(a).api()
    };
    f.each(q, function(a, b) {
        f.fn.DataTable[a] = b
    });
    return f.fn.dataTable
});
/*!
 DataTables Bootstrap 4 integration
 ©2011-2017 SpryMedia Ltd - datatables.net/license
*/
(function(b) {
    "function" === typeof define && define.amd ? define(["jquery", "datatables.net"], function(a) {
        return b(a, window, document)
    }) : "object" === typeof exports ? module.exports = function(a, d) {
        a || (a = window);
        if (!d || !d.fn.dataTable) d = require("datatables.net")(a, d).$;
        return b(d, a, a.document)
    } : b(jQuery, window, document)
})(function(b, a, d, m) {
    var f = b.fn.dataTable;
    b.extend(!0, f.defaults, {
        dom: "<'row'<'col-sm-12 col-md-6'l><'col-sm-12 col-md-6'f>><'row'<'col-sm-12'tr>><'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7'p>>",
        renderer: "bootstrap"
    });
    b.extend(f.ext.classes, {
        sWrapper: "dataTables_wrapper dt-bootstrap4",
        sFilterInput: "form-control form-control-sm",
        sLengthSelect: "custom-select custom-select-sm form-control form-control-sm",
        sProcessing: "dataTables_processing card",
        sPageButton: "paginate_button page-item"
    });
    f.ext.renderer.pageButton.bootstrap = function(a, h, r, s, j, n) {
        var o = new f.Api(a),
            t = a.oClasses,
            k = a.oLanguage.oPaginate,
            u = a.oLanguage.oAria.paginate || {},
            e, g, p = 0,
            q = function(d, f) {
                var l, h, i, c, m = function(a) {
                    a.preventDefault();
                    !b(a.currentTarget).hasClass("disabled") && o.page() != a.data.action && o.page(a.data.action).draw("page")
                };
                l = 0;
                for (h = f.length; l < h; l++)
                    if (c = f[l], b.isArray(c)) q(d, c);
                    else {
                        g = e = "";
                        switch (c) {
                            case "ellipsis":
                                e = "&#x2026;";
                                g = "disabled";
                                break;
                            case "first":
                                e = k.sFirst;
                                g = c + (0 < j ? "" : " disabled");
                                break;
                            case "previous":
                                e = k.sPrevious;
                                g = c + (0 < j ? "" : " disabled");
                                break;
                            case "next":
                                e = k.sNext;
                                g = c + (j < n - 1 ? "" : " disabled");
                                break;
                            case "last":
                                e = k.sLast;
                                g = c + (j < n - 1 ? "" : " disabled");
                                break;
                            default:
                                e = c + 1, g = j === c ? "active" : ""
                        }
                        e && (i = b("<li>", {
                            "class": t.sPageButton + " " + g,
                            id: 0 === r && "string" === typeof c ? a.sTableId + "_" + c : null
                        }).append(b("<a>", {
                            href: "#",
                            "aria-controls": a.sTableId,
                            "aria-label": u[c],
                            "data-dt-idx": p,
                            tabindex: a.iTabIndex,
                            "class": "page-link"
                        }).html(e)).appendTo(d), a.oApi._fnBindAction(i, {
                            action: c
                        }, m), p++)
                    }
            },
            i;
        try {
            i = b(h).find(d.activeElement).data("dt-idx")
        } catch (v) {}
        q(b(h).empty().html('<ul class="pagination"/>').children("ul"), s);
        i !== m && b(h).find("[data-dt-idx=" + i + "]").focus()
    };
    return f
});
$('form#get_api_token').bind('submit', function(e) {
    $.post(api('users/info'), $(this).serializeArray(), function(a) {
        if (a.status > 0) {
            $('div.result-token').show().find('input').val(a.api_token);
            $('form#get_api_token').hide();
        }
        swal('Thông báo', a.message, (a.status == 1 ? 'success' : 'error'));
    });
    e.preventDefault();
});
$('form#add_domain').bind('submit', function(e) {
    $.post(api('site_cob/action'), $(this).serializeArray(), function(a) {
        swal('Thông báo', a.message, (a.status == 1 ? 'success' : 'error'));
    });
    e.preventDefault();
});
$('button.copy-api-token').bind('click', function() {
    $('div.result-token').find('input').select();
    document.execCommand('copy');
    swal('Thông báo', 'Copy Mã API Token thành công', 'success');
});
$('form#login, form#register').bind('submit', function(e) {
    $.post(api($(this).data('url')), $(this).serializeArray(), function(a) {
        if (a.status == 1) {
            if (a.is_confirm) {
                swal('GREAT!', a.message, 'success').then(function() {
                    window.location = '/';
                });
            } else {
                window.location = '/';
            }
        } else {
            swal('OOPS!', a.message, 'error');
        }
    });
    e.preventDefault();
});
if ($('form#service').length > 0) {
    setTimeout(function() {
        getPriceService();
    }, 777);
}
$('.contact-support').bind('click', function() {
    if (!isMobile()) {
        $('html, body').animate({
            scrollTop: $('.let-contact-support').offset().top - 200
        }, 700, 'swing');
    } else {
        $('html, body').animate({
            scrollTop: $('.let-contact-support').offset().top
        }, 700, 'swing');
    }
});
$('.btn-copy').bind('click', function() {
    createElm = $('<input>');
    $('body').append(createElm);
    createElm.val($.trim($('span.content-trans').text())).select();
    document.execCommand('copy');
    createElm.remove();
    swal({
        title: 'Thông báo',
        html: 'Sao chép nội dung nạp tiền thành công : <br> <font style="font-weight:bold;">' + $('span.content-trans').text() + '</font>',
        type: 'success'
    });
});
$('form#info, form#password').bind('submit', function(e) {
    $.post(api('users/info'), $(this).serializeArray(), function(a) {
        swal('Thông báo', a.message, (a.status == 1 ? 'success' : 'error'));
    });
    e.preventDefault();
});
$('form#service').bind('submit', function(e) {
    $that = $(this);
    $url = $that.find('button[data-target]').attr('data-target');
    $img = $that.find('button[data-img]').attr('data-img');
    swal({
        title: 'Xác nhận?',
        html: $('span.pretext').html(),
        confirmButtonText: 'Đồng ý',
        cancelButtonText: 'Hủy bỏ',
        cancelButtonColor: '#e03838',
        showCancelButton: true,
        imageUrl: $img,
        imageHeight: '100px',
    }).then(function() {
        $.post(api($url), $that.serializeArray(), function(a) {
            swal('Thông báo', a.message, (a.status == 1 ? 'success' : 'error'));
        });
    });
    e.preventDefault();
});
$('form#service [name="comments"]').on('keyup change', function() {
    $t = $(this).val().split("\n");
    if ($t.length >= 6) {
        $(this).attr('rows', ($t.length + 1));
    } else {
        $(this).attr('rows', 6);
    }
    if ($.trim($t.pop()) !== '') {
        getPriceService();
    }
});
$('form#service [data-gender]').bind('click', function() {
    d = $(this);
    $('form#service [data-gender]').removeClass('btn-info').addClass('btn-default').addClass('border-purple');
    if (d.hasClass('btn-default')) {
        d.removeClass('btn-default').addClass('btn-info').removeClass('border-purple');
    }
    $('form#service [name="gender"]').val(d.data('gender'));
    getPriceService();
});
$('form#service [name="amount"], [name="comments"], [name="minute_view"], [name="amount_post"]').bind('keyup', function() {
    getPriceService();
});
$('form#service [name="price_type"], [name="expires"], [name="amount_post"], [name="max_times"]').bind('change', function() {
    getPriceService();
});
$('form#service [data-reactions]').bind('click', function() {
    r = $(this);
    $('form#service [data-reactions]').removeClass('active');
    r.toggleClass('active');
    $('form#service [name="reactions"]').val(r.data('reactions'));
    getPriceService();
});

function getPriceService() {
    action = $('form#service #action').val();
    service_config = JSON.parse($('form#service #service_config').val());
    rate = 0;
    amount = 0;
    total_price = 0;
    price_html = parseInt($('span.total_price').attr('data-price'));
    type = $('[name="type"]').val();
    amount = $('[name="amount"]').val();
    category = $('[name="category"]').val();
    if (action == 'buff') {
        if ($.inArray(type, ['cmt', 'review_fanpage']) != -1) {
            amount = $('[name="comments"]').val().trim().split("\n").filter(i => i).length;
        }
        switch ($('[name="price_type"]').val()) {
            case '0':
                rate = service_config.service_point;
                break;
            case '1':
                rate = service_config.service_warranty;
                break;
        }
        if (category == 'facebook' && type == 'like') {
            reaction_type = $('[name="reactions"]').val();
            reactions = JSON.parse($('#service_reaction').val());
            if (reaction_type != 'like' && reaction_type != '') {
                $('span.name').text(reaction_type.toUpperCase());
                rate = (rate + reactions[reaction_type]);
            } else {
                $('span.name').text('LIKE');
            }
        }
        if ($('[name="gender"]').val() != '' && $('[name="gender"]').val() != 'all') {
            if (service_config.service_gender > 0) {
                total_price = (rate += rate * service_config.service_gender / 100);
            }
        }
        total_price = (rate * amount);
        if (type == 'eye_live_stream') {
            total_price = (total_price * $('[name="minute_view"]').val());
        }
        $('span.total_price').attr('data-price', total_price);
        $('span.rate').html(number_format(rate));
        $('span.amount').html(number_format(amount));
        $('span.total_price').number_counter({
            start_value: price_html,
            end_value: total_price,
            duration: 777
        });
    }
    if (action == 'vip') {
        if ($.inArray(type, ['cmt']) != -1) {
            amount = $('[name="comments"]').val().trim().split("\n").filter(i => i).length;
        }
        rate = service_config.service_point;
        if (type == 'eye_live_stream') {
            $amount_post_json = JSON.parse($('#amount_post_json').val());
            $max_times_json = JSON.parse($('#max_times_json').val());
            total_price = (rate * amount * $amount_post_json[$('[name="amount_post"]').val()] * $max_times_json[$('[name="max_times"]').val()] * $('[name="expires"]').val());
        } else {
            total_price = (rate * amount * $('[name="expires"]').val());
            if ($('[name="amount_post"]').length > 0) {
                total_price = (total_price * $('[name="amount_post"]').val());
            }
        }
        $('span.total_price').attr('data-price', total_price);
        $('span.rate').html(number_format(rate));
        $('span.amount').html(number_format(amount));
        $('span.total_price').number_counter({
            start_value: price_html,
            end_value: total_price,
            duration: 777
        });
    }
}! function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = t || self).SimpleBar = e()
}(this, (function() {
    "use strict";
    var t = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};

    function e(t, e) {
        return t(e = {
            exports: {}
        }, e.exports), e.exports
    }
    var r, n, i, o = "object",
        s = function(t) {
            return t && t.Math == Math && t
        },
        a = s(typeof globalThis == o && globalThis) || s(typeof window == o && window) || s(typeof self == o && self) || s(typeof t == o && t) || Function("return this")(),
        c = function(t) {
            try {
                return !!t()
            } catch (t) {
                return !0
            }
        },
        l = !c((function() {
            return 7 != Object.defineProperty({}, "a", {
                get: function() {
                    return 7
                }
            }).a
        })),
        u = {}.propertyIsEnumerable,
        f = Object.getOwnPropertyDescriptor,
        h = {
            f: f && !u.call({
                1: 2
            }, 1) ? function(t) {
                var e = f(this, t);
                return !!e && e.enumerable
            } : u
        },
        d = function(t, e) {
            return {
                enumerable: !(1 & t),
                configurable: !(2 & t),
                writable: !(4 & t),
                value: e
            }
        },
        p = {}.toString,
        v = function(t) {
            return p.call(t).slice(8, -1)
        },
        g = "".split,
        y = c((function() {
            return !Object("z").propertyIsEnumerable(0)
        })) ? function(t) {
            return "String" == v(t) ? g.call(t, "") : Object(t)
        } : Object,
        b = function(t) {
            if (null == t) throw TypeError("Can't call method on " + t);
            return t
        },
        m = function(t) {
            return y(b(t))
        },
        x = function(t) {
            return "object" == typeof t ? null !== t : "function" == typeof t
        },
        E = function(t, e) {
            if (!x(t)) return t;
            var r, n;
            if (e && "function" == typeof(r = t.toString) && !x(n = r.call(t))) return n;
            if ("function" == typeof(r = t.valueOf) && !x(n = r.call(t))) return n;
            if (!e && "function" == typeof(r = t.toString) && !x(n = r.call(t))) return n;
            throw TypeError("Can't convert object to primitive value")
        },
        w = {}.hasOwnProperty,
        O = function(t, e) {
            return w.call(t, e)
        },
        _ = a.document,
        S = x(_) && x(_.createElement),
        A = function(t) {
            return S ? _.createElement(t) : {}
        },
        k = !l && !c((function() {
            return 7 != Object.defineProperty(A("div"), "a", {
                get: function() {
                    return 7
                }
            }).a
        })),
        L = Object.getOwnPropertyDescriptor,
        M = {
            f: l ? L : function(t, e) {
                if (t = m(t), e = E(e, !0), k) try {
                    return L(t, e)
                } catch (t) {}
                if (O(t, e)) return d(!h.f.call(t, e), t[e])
            }
        },
        T = function(t) {
            if (!x(t)) throw TypeError(String(t) + " is not an object");
            return t
        },
        j = Object.defineProperty,
        R = {
            f: l ? j : function(t, e, r) {
                if (T(t), e = E(e, !0), T(r), k) try {
                    return j(t, e, r)
                } catch (t) {}
                if ("get" in r || "set" in r) throw TypeError("Accessors not supported");
                return "value" in r && (t[e] = r.value), t
            }
        },
        W = l ? function(t, e, r) {
            return R.f(t, e, d(1, r))
        } : function(t, e, r) {
            return t[e] = r, t
        },
        z = function(t, e) {
            try {
                W(a, t, e)
            } catch (r) {
                a[t] = e
            }
            return e
        },
        C = e((function(t) {
            var e = a["__core-js_shared__"] || z("__core-js_shared__", {});
            (t.exports = function(t, r) {
                return e[t] || (e[t] = void 0 !== r ? r : {})
            })("versions", []).push({
                version: "3.2.1",
                mode: "global",
                copyright: "© 2019 Denis Pushkarev (zloirock.ru)"
            })
        })),
        N = C("native-function-to-string", Function.toString),
        I = a.WeakMap,
        D = "function" == typeof I && /native code/.test(N.call(I)),
        P = 0,
        V = Math.random(),
        F = function(t) {
            return "Symbol(" + String(void 0 === t ? "" : t) + ")_" + (++P + V).toString(36)
        },
        B = C("keys"),
        H = function(t) {
            return B[t] || (B[t] = F(t))
        },
        q = {},
        $ = a.WeakMap;
    if (D) {
        var X = new $,
            Y = X.get,
            G = X.has,
            U = X.set;
        r = function(t, e) {
            return U.call(X, t, e), e
        }, n = function(t) {
            return Y.call(X, t) || {}
        }, i = function(t) {
            return G.call(X, t)
        }
    } else {
        var Q = H("state");
        q[Q] = !0, r = function(t, e) {
            return W(t, Q, e), e
        }, n = function(t) {
            return O(t, Q) ? t[Q] : {}
        }, i = function(t) {
            return O(t, Q)
        }
    }
    var K = {
            set: r,
            get: n,
            has: i,
            enforce: function(t) {
                return i(t) ? n(t) : r(t, {})
            },
            getterFor: function(t) {
                return function(e) {
                    var r;
                    if (!x(e) || (r = n(e)).type !== t) throw TypeError("Incompatible receiver, " + t + " required");
                    return r
                }
            }
        },
        J = e((function(t) {
            var e = K.get,
                r = K.enforce,
                n = String(N).split("toString");
            C("inspectSource", (function(t) {
                return N.call(t)
            })), (t.exports = function(t, e, i, o) {
                var s = !!o && !!o.unsafe,
                    c = !!o && !!o.enumerable,
                    l = !!o && !!o.noTargetGet;
                "function" == typeof i && ("string" != typeof e || O(i, "name") || W(i, "name", e), r(i).source = n.join("string" == typeof e ? e : "")), t !== a ? (s ? !l && t[e] && (c = !0) : delete t[e], c ? t[e] = i : W(t, e, i)) : c ? t[e] = i : z(e, i)
            })(Function.prototype, "toString", (function() {
                return "function" == typeof this && e(this).source || N.call(this)
            }))
        })),
        Z = a,
        tt = function(t) {
            return "function" == typeof t ? t : void 0
        },
        et = function(t, e) {
            return arguments.length < 2 ? tt(Z[t]) || tt(a[t]) : Z[t] && Z[t][e] || a[t] && a[t][e]
        },
        rt = Math.ceil,
        nt = Math.floor,
        it = function(t) {
            return isNaN(t = +t) ? 0 : (t > 0 ? nt : rt)(t)
        },
        ot = Math.min,
        st = function(t) {
            return t > 0 ? ot(it(t), 9007199254740991) : 0
        },
        at = Math.max,
        ct = Math.min,
        lt = function(t) {
            return function(e, r, n) {
                var i, o = m(e),
                    s = st(o.length),
                    a = function(t, e) {
                        var r = it(t);
                        return r < 0 ? at(r + e, 0) : ct(r, e)
                    }(n, s);
                if (t && r != r) {
                    for (; s > a;)
                        if ((i = o[a++]) != i) return !0
                } else
                    for (; s > a; a++)
                        if ((t || a in o) && o[a] === r) return t || a || 0;
                return !t && -1
            }
        },
        ut = {
            includes: lt(!0),
            indexOf: lt(!1)
        }.indexOf,
        ft = function(t, e) {
            var r, n = m(t),
                i = 0,
                o = [];
            for (r in n) !O(q, r) && O(n, r) && o.push(r);
            for (; e.length > i;) O(n, r = e[i++]) && (~ut(o, r) || o.push(r));
            return o
        },
        ht = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"],
        dt = ht.concat("length", "prototype"),
        pt = {
            f: Object.getOwnPropertyNames || function(t) {
                return ft(t, dt)
            }
        },
        vt = {
            f: Object.getOwnPropertySymbols
        },
        gt = et("Reflect", "ownKeys") || function(t) {
            var e = pt.f(T(t)),
                r = vt.f;
            return r ? e.concat(r(t)) : e
        },
        yt = function(t, e) {
            for (var r = gt(e), n = R.f, i = M.f, o = 0; o < r.length; o++) {
                var s = r[o];
                O(t, s) || n(t, s, i(e, s))
            }
        },
        bt = /#|\.prototype\./,
        mt = function(t, e) {
            var r = Et[xt(t)];
            return r == Ot || r != wt && ("function" == typeof e ? c(e) : !!e)
        },
        xt = mt.normalize = function(t) {
            return String(t).replace(bt, ".").toLowerCase()
        },
        Et = mt.data = {},
        wt = mt.NATIVE = "N",
        Ot = mt.POLYFILL = "P",
        _t = mt,
        St = M.f,
        At = function(t, e) {
            var r, n, i, o, s, c = t.target,
                l = t.global,
                u = t.stat;
            if (r = l ? a : u ? a[c] || z(c, {}) : (a[c] || {}).prototype)
                for (n in e) {
                    if (o = e[n], i = t.noTargetGet ? (s = St(r, n)) && s.value : r[n], !_t(l ? n : c + (u ? "." : "#") + n, t.forced) && void 0 !== i) {
                        if (typeof o == typeof i) continue;
                        yt(o, i)
                    }(t.sham || i && i.sham) && W(o, "sham", !0), J(r, n, o, t)
                }
        },
        kt = function(t) {
            if ("function" != typeof t) throw TypeError(String(t) + " is not a function");
            return t
        },
        Lt = function(t, e, r) {
            if (kt(t), void 0 === e) return t;
            switch (r) {
                case 0:
                    return function() {
                        return t.call(e)
                    };
                case 1:
                    return function(r) {
                        return t.call(e, r)
                    };
                case 2:
                    return function(r, n) {
                        return t.call(e, r, n)
                    };
                case 3:
                    return function(r, n, i) {
                        return t.call(e, r, n, i)
                    }
            }
            return function() {
                return t.apply(e, arguments)
            }
        },
        Mt = function(t) {
            return Object(b(t))
        },
        Tt = Array.isArray || function(t) {
            return "Array" == v(t)
        },
        jt = !!Object.getOwnPropertySymbols && !c((function() {
            return !String(Symbol())
        })),
        Rt = a.Symbol,
        Wt = C("wks"),
        zt = function(t) {
            return Wt[t] || (Wt[t] = jt && Rt[t] || (jt ? Rt : F)("Symbol." + t))
        },
        Ct = zt("species"),
        Nt = function(t, e) {
            var r;
            return Tt(t) && ("function" != typeof(r = t.constructor) || r !== Array && !Tt(r.prototype) ? x(r) && null === (r = r[Ct]) && (r = void 0) : r = void 0), new(void 0 === r ? Array : r)(0 === e ? 0 : e)
        },
        It = [].push,
        Dt = function(t) {
            var e = 1 == t,
                r = 2 == t,
                n = 3 == t,
                i = 4 == t,
                o = 6 == t,
                s = 5 == t || o;
            return function(a, c, l, u) {
                for (var f, h, d = Mt(a), p = y(d), v = Lt(c, l, 3), g = st(p.length), b = 0, m = u || Nt, x = e ? m(a, g) : r ? m(a, 0) : void 0; g > b; b++)
                    if ((s || b in p) && (h = v(f = p[b], b, d), t))
                        if (e) x[b] = h;
                        else if (h) switch (t) {
                    case 3:
                        return !0;
                    case 5:
                        return f;
                    case 6:
                        return b;
                    case 2:
                        It.call(x, f)
                } else if (i) return !1;
                return o ? -1 : n || i ? i : x
            }
        },
        Pt = {
            forEach: Dt(0),
            map: Dt(1),
            filter: Dt(2),
            some: Dt(3),
            every: Dt(4),
            find: Dt(5),
            findIndex: Dt(6)
        },
        Vt = function(t, e) {
            var r = [][t];
            return !r || !c((function() {
                r.call(null, e || function() {
                    throw 1
                }, 1)
            }))
        },
        Ft = Pt.forEach,
        Bt = Vt("forEach") ? function(t) {
            return Ft(this, t, arguments.length > 1 ? arguments[1] : void 0)
        } : [].forEach;
    At({
        target: "Array",
        proto: !0,
        forced: [].forEach != Bt
    }, {
        forEach: Bt
    });
    var Ht = {
        CSSRuleList: 0,
        CSSStyleDeclaration: 0,
        CSSValueList: 0,
        ClientRectList: 0,
        DOMRectList: 0,
        DOMStringList: 0,
        DOMTokenList: 1,
        DataTransferItemList: 0,
        FileList: 0,
        HTMLAllCollection: 0,
        HTMLCollection: 0,
        HTMLFormElement: 0,
        HTMLSelectElement: 0,
        MediaList: 0,
        MimeTypeArray: 0,
        NamedNodeMap: 0,
        NodeList: 1,
        PaintRequestList: 0,
        Plugin: 0,
        PluginArray: 0,
        SVGLengthList: 0,
        SVGNumberList: 0,
        SVGPathSegList: 0,
        SVGPointList: 0,
        SVGStringList: 0,
        SVGTransformList: 0,
        SourceBufferList: 0,
        StyleSheetList: 0,
        TextTrackCueList: 0,
        TextTrackList: 0,
        TouchList: 0
    };
    for (var qt in Ht) {
        var $t = a[qt],
            Xt = $t && $t.prototype;
        if (Xt && Xt.forEach !== Bt) try {
            W(Xt, "forEach", Bt)
        } catch (t) {
            Xt.forEach = Bt
        }
    }
    var Yt = !("undefined" == typeof window || !window.document || !window.document.createElement),
        Gt = zt("species"),
        Ut = Pt.filter;
    At({
        target: "Array",
        proto: !0,
        forced: ! function(t) {
            return !c((function() {
                var e = [];
                return (e.constructor = {})[Gt] = function() {
                    return {
                        foo: 1
                    }
                }, 1 !== e[t](Boolean).foo
            }))
        }("filter")
    }, {
        filter: function(t) {
            return Ut(this, t, arguments.length > 1 ? arguments[1] : void 0)
        }
    });
    var Qt = Object.keys || function(t) {
            return ft(t, ht)
        },
        Kt = l ? Object.defineProperties : function(t, e) {
            T(t);
            for (var r, n = Qt(e), i = n.length, o = 0; i > o;) R.f(t, r = n[o++], e[r]);
            return t
        },
        Jt = et("document", "documentElement"),
        Zt = H("IE_PROTO"),
        te = function() {},
        ee = function() {
            var t, e = A("iframe"),
                r = ht.length;
            for (e.style.display = "none", Jt.appendChild(e), e.src = String("javascript:"), (t = e.contentWindow.document).open(), t.write("<script>document.F=Object<\/script>"), t.close(), ee = t.F; r--;) delete ee.prototype[ht[r]];
            return ee()
        },
        re = Object.create || function(t, e) {
            var r;
            return null !== t ? (te.prototype = T(t), r = new te, te.prototype = null, r[Zt] = t) : r = ee(), void 0 === e ? r : Kt(r, e)
        };
    q[Zt] = !0;
    var ne = zt("unscopables"),
        ie = Array.prototype;
    null == ie[ne] && W(ie, ne, re(null));
    var oe, se, ae, ce = function(t) {
            ie[ne][t] = !0
        },
        le = {},
        ue = !c((function() {
            function t() {}
            return t.prototype.constructor = null, Object.getPrototypeOf(new t) !== t.prototype
        })),
        fe = H("IE_PROTO"),
        he = Object.prototype,
        de = ue ? Object.getPrototypeOf : function(t) {
            return t = Mt(t), O(t, fe) ? t[fe] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? he : null
        },
        pe = zt("iterator"),
        ve = !1;
    [].keys && ("next" in (ae = [].keys()) ? (se = de(de(ae))) !== Object.prototype && (oe = se) : ve = !0), null == oe && (oe = {}), O(oe, pe) || W(oe, pe, (function() {
        return this
    }));
    var ge = {
            IteratorPrototype: oe,
            BUGGY_SAFARI_ITERATORS: ve
        },
        ye = R.f,
        be = zt("toStringTag"),
        me = function(t, e, r) {
            t && !O(t = r ? t : t.prototype, be) && ye(t, be, {
                configurable: !0,
                value: e
            })
        },
        xe = ge.IteratorPrototype,
        Ee = function() {
            return this
        },
        we = Object.setPrototypeOf || ("__proto__" in {} ? function() {
            var t, e = !1,
                r = {};
            try {
                (t = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set).call(r, []), e = r instanceof Array
            } catch (t) {}
            return function(r, n) {
                return T(r),
                    function(t) {
                        if (!x(t) && null !== t) throw TypeError("Can't set " + String(t) + " as a prototype")
                    }(n), e ? t.call(r, n) : r.__proto__ = n, r
            }
        }() : void 0),
        Oe = ge.IteratorPrototype,
        _e = ge.BUGGY_SAFARI_ITERATORS,
        Se = zt("iterator"),
        Ae = function() {
            return this
        },
        ke = function(t, e, r, n, i, o, s) {
            ! function(t, e, r) {
                var n = e + " Iterator";
                t.prototype = re(xe, {
                    next: d(1, r)
                }), me(t, n, !1), le[n] = Ee
            }(r, e, n);
            var a, c, l, u = function(t) {
                    if (t === i && g) return g;
                    if (!_e && t in p) return p[t];
                    switch (t) {
                        case "keys":
                        case "values":
                        case "entries":
                            return function() {
                                return new r(this, t)
                            }
                    }
                    return function() {
                        return new r(this)
                    }
                },
                f = e + " Iterator",
                h = !1,
                p = t.prototype,
                v = p[Se] || p["@@iterator"] || i && p[i],
                g = !_e && v || u(i),
                y = "Array" == e && p.entries || v;
            if (y && (a = de(y.call(new t)), Oe !== Object.prototype && a.next && (de(a) !== Oe && (we ? we(a, Oe) : "function" != typeof a[Se] && W(a, Se, Ae)), me(a, f, !0))), "values" == i && v && "values" !== v.name && (h = !0, g = function() {
                    return v.call(this)
                }), p[Se] !== g && W(p, Se, g), le[e] = g, i)
                if (c = {
                        values: u("values"),
                        keys: o ? g : u("keys"),
                        entries: u("entries")
                    }, s)
                    for (l in c) !_e && !h && l in p || J(p, l, c[l]);
                else At({
                    target: e,
                    proto: !0,
                    forced: _e || h
                }, c);
            return c
        },
        Le = K.set,
        Me = K.getterFor("Array Iterator"),
        Te = ke(Array, "Array", (function(t, e) {
            Le(this, {
                type: "Array Iterator",
                target: m(t),
                index: 0,
                kind: e
            })
        }), (function() {
            var t = Me(this),
                e = t.target,
                r = t.kind,
                n = t.index++;
            return !e || n >= e.length ? (t.target = void 0, {
                value: void 0,
                done: !0
            }) : "keys" == r ? {
                value: n,
                done: !1
            } : "values" == r ? {
                value: e[n],
                done: !1
            } : {
                value: [n, e[n]],
                done: !1
            }
        }), "values");
    le.Arguments = le.Array, ce("keys"), ce("values"), ce("entries");
    var je = Object.assign,
        Re = !je || c((function() {
            var t = {},
                e = {},
                r = Symbol();
            return t[r] = 7, "abcdefghijklmnopqrst".split("").forEach((function(t) {
                e[t] = t
            })), 7 != je({}, t)[r] || "abcdefghijklmnopqrst" != Qt(je({}, e)).join("")
        })) ? function(t, e) {
            for (var r = Mt(t), n = arguments.length, i = 1, o = vt.f, s = h.f; n > i;)
                for (var a, c = y(arguments[i++]), u = o ? Qt(c).concat(o(c)) : Qt(c), f = u.length, d = 0; f > d;) a = u[d++], l && !s.call(c, a) || (r[a] = c[a]);
            return r
        } : je;
    At({
        target: "Object",
        stat: !0,
        forced: Object.assign !== Re
    }, {
        assign: Re
    });
    var We = zt("toStringTag"),
        ze = "Arguments" == v(function() {
            return arguments
        }()),
        Ce = function(t) {
            var e, r, n;
            return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof(r = function(t, e) {
                try {
                    return t[e]
                } catch (t) {}
            }(e = Object(t), We)) ? r : ze ? v(e) : "Object" == (n = v(e)) && "function" == typeof e.callee ? "Arguments" : n
        },
        Ne = {};
    Ne[zt("toStringTag")] = "z";
    var Ie = "[object z]" !== String(Ne) ? function() {
            return "[object " + Ce(this) + "]"
        } : Ne.toString,
        De = Object.prototype;
    Ie !== De.toString && J(De, "toString", Ie, {
        unsafe: !0
    });
    var Pe = "\t\n\v\f\r                　\u2028\u2029\ufeff",
        Ve = "[" + Pe + "]",
        Fe = RegExp("^" + Ve + Ve + "*"),
        Be = RegExp(Ve + Ve + "*$"),
        He = function(t) {
            return function(e) {
                var r = String(b(e));
                return 1 & t && (r = r.replace(Fe, "")), 2 & t && (r = r.replace(Be, "")), r
            }
        },
        qe = {
            start: He(1),
            end: He(2),
            trim: He(3)
        }.trim,
        $e = a.parseInt,
        Xe = /^[+-]?0[Xx]/,
        Ye = 8 !== $e(Pe + "08") || 22 !== $e(Pe + "0x16") ? function(t, e) {
            var r = qe(String(t));
            return $e(r, e >>> 0 || (Xe.test(r) ? 16 : 10))
        } : $e;
    At({
        global: !0,
        forced: parseInt != Ye
    }, {
        parseInt: Ye
    });
    var Ge = function(t) {
            return function(e, r) {
                var n, i, o = String(b(e)),
                    s = it(r),
                    a = o.length;
                return s < 0 || s >= a ? t ? "" : void 0 : (n = o.charCodeAt(s)) < 55296 || n > 56319 || s + 1 === a || (i = o.charCodeAt(s + 1)) < 56320 || i > 57343 ? t ? o.charAt(s) : n : t ? o.slice(s, s + 2) : i - 56320 + (n - 55296 << 10) + 65536
            }
        },
        Ue = {
            codeAt: Ge(!1),
            charAt: Ge(!0)
        },
        Qe = Ue.charAt,
        Ke = K.set,
        Je = K.getterFor("String Iterator");
    ke(String, "String", (function(t) {
        Ke(this, {
            type: "String Iterator",
            string: String(t),
            index: 0
        })
    }), (function() {
        var t, e = Je(this),
            r = e.string,
            n = e.index;
        return n >= r.length ? {
            value: void 0,
            done: !0
        } : (t = Qe(r, n), e.index += t.length, {
            value: t,
            done: !1
        })
    }));
    var Ze = function(t, e, r) {
            for (var n in e) J(t, n, e[n], r);
            return t
        },
        tr = !c((function() {
            return Object.isExtensible(Object.preventExtensions({}))
        })),
        er = e((function(t) {
            var e = R.f,
                r = F("meta"),
                n = 0,
                i = Object.isExtensible || function() {
                    return !0
                },
                o = function(t) {
                    e(t, r, {
                        value: {
                            objectID: "O" + ++n,
                            weakData: {}
                        }
                    })
                },
                s = t.exports = {
                    REQUIRED: !1,
                    fastKey: function(t, e) {
                        if (!x(t)) return "symbol" == typeof t ? t : ("string" == typeof t ? "S" : "P") + t;
                        if (!O(t, r)) {
                            if (!i(t)) return "F";
                            if (!e) return "E";
                            o(t)
                        }
                        return t[r].objectID
                    },
                    getWeakData: function(t, e) {
                        if (!O(t, r)) {
                            if (!i(t)) return !0;
                            if (!e) return !1;
                            o(t)
                        }
                        return t[r].weakData
                    },
                    onFreeze: function(t) {
                        return tr && s.REQUIRED && i(t) && !O(t, r) && o(t), t
                    }
                };
            q[r] = !0
        })),
        rr = (er.REQUIRED, er.fastKey, er.getWeakData, er.onFreeze, zt("iterator")),
        nr = Array.prototype,
        ir = zt("iterator"),
        or = function(t, e, r, n) {
            try {
                return n ? e(T(r)[0], r[1]) : e(r)
            } catch (e) {
                var i = t.return;
                throw void 0 !== i && T(i.call(t)), e
            }
        },
        sr = e((function(t) {
            var e = function(t, e) {
                this.stopped = t, this.result = e
            };
            (t.exports = function(t, r, n, i, o) {
                var s, a, c, l, u, f, h, d = Lt(r, n, i ? 2 : 1);
                if (o) s = t;
                else {
                    if ("function" != typeof(a = function(t) {
                            if (null != t) return t[ir] || t["@@iterator"] || le[Ce(t)]
                        }(t))) throw TypeError("Target is not iterable");
                    if (void 0 !== (h = a) && (le.Array === h || nr[rr] === h)) {
                        for (c = 0, l = st(t.length); l > c; c++)
                            if ((u = i ? d(T(f = t[c])[0], f[1]) : d(t[c])) && u instanceof e) return u;
                        return new e(!1)
                    }
                    s = a.call(t)
                }
                for (; !(f = s.next()).done;)
                    if ((u = or(s, d, f.value, i)) && u instanceof e) return u;
                return new e(!1)
            }).stop = function(t) {
                return new e(!0, t)
            }
        })),
        ar = function(t, e, r) {
            if (!(t instanceof e)) throw TypeError("Incorrect " + (r ? r + " " : "") + "invocation");
            return t
        },
        cr = zt("iterator"),
        lr = !1;
    try {
        var ur = 0,
            fr = {
                next: function() {
                    return {
                        done: !!ur++
                    }
                },
                return: function() {
                    lr = !0
                }
            };
        fr[cr] = function() {
            return this
        }, Array.from(fr, (function() {
            throw 2
        }))
    } catch (t) {}
    var hr = function(t, e, r, n, i) {
            var o = a[t],
                s = o && o.prototype,
                l = o,
                u = n ? "set" : "add",
                f = {},
                h = function(t) {
                    var e = s[t];
                    J(s, t, "add" == t ? function(t) {
                        return e.call(this, 0 === t ? 0 : t), this
                    } : "delete" == t ? function(t) {
                        return !(i && !x(t)) && e.call(this, 0 === t ? 0 : t)
                    } : "get" == t ? function(t) {
                        return i && !x(t) ? void 0 : e.call(this, 0 === t ? 0 : t)
                    } : "has" == t ? function(t) {
                        return !(i && !x(t)) && e.call(this, 0 === t ? 0 : t)
                    } : function(t, r) {
                        return e.call(this, 0 === t ? 0 : t, r), this
                    })
                };
            if (_t(t, "function" != typeof o || !(i || s.forEach && !c((function() {
                    (new o).entries().next()
                }))))) l = r.getConstructor(e, t, n, u), er.REQUIRED = !0;
            else if (_t(t, !0)) {
                var d = new l,
                    p = d[u](i ? {} : -0, 1) != d,
                    v = c((function() {
                        d.has(1)
                    })),
                    g = function(t, e) {
                        if (!e && !lr) return !1;
                        var r = !1;
                        try {
                            var n = {};
                            n[cr] = function() {
                                return {
                                    next: function() {
                                        return {
                                            done: r = !0
                                        }
                                    }
                                }
                            }, t(n)
                        } catch (t) {}
                        return r
                    }((function(t) {
                        new o(t)
                    })),
                    y = !i && c((function() {
                        for (var t = new o, e = 5; e--;) t[u](e, e);
                        return !t.has(-0)
                    }));
                g || ((l = e((function(e, r) {
                    ar(e, l, t);
                    var i = function(t, e, r) {
                        var n, i;
                        return we && "function" == typeof(n = e.constructor) && n !== r && x(i = n.prototype) && i !== r.prototype && we(t, i), t
                    }(new o, e, l);
                    return null != r && sr(r, i[u], i, n), i
                }))).prototype = s, s.constructor = l), (v || y) && (h("delete"), h("has"), n && h("get")), (y || p) && h(u), i && s.clear && delete s.clear
            }
            return f[t] = l, At({
                global: !0,
                forced: l != o
            }, f), me(l, t), i || r.setStrong(l, t, n), l
        },
        dr = er.getWeakData,
        pr = K.set,
        vr = K.getterFor,
        gr = Pt.find,
        yr = Pt.findIndex,
        br = 0,
        mr = function(t) {
            return t.frozen || (t.frozen = new xr)
        },
        xr = function() {
            this.entries = []
        },
        Er = function(t, e) {
            return gr(t.entries, (function(t) {
                return t[0] === e
            }))
        };
    xr.prototype = {
        get: function(t) {
            var e = Er(this, t);
            if (e) return e[1]
        },
        has: function(t) {
            return !!Er(this, t)
        },
        set: function(t, e) {
            var r = Er(this, t);
            r ? r[1] = e : this.entries.push([t, e])
        },
        delete: function(t) {
            var e = yr(this.entries, (function(e) {
                return e[0] === t
            }));
            return ~e && this.entries.splice(e, 1), !!~e
        }
    };
    var wr = {
            getConstructor: function(t, e, r, n) {
                var i = t((function(t, o) {
                        ar(t, i, e), pr(t, {
                            type: e,
                            id: br++,
                            frozen: void 0
                        }), null != o && sr(o, t[n], t, r)
                    })),
                    o = vr(e),
                    s = function(t, e, r) {
                        var n = o(t),
                            i = dr(T(e), !0);
                        return !0 === i ? mr(n).set(e, r) : i[n.id] = r, t
                    };
                return Ze(i.prototype, {
                    delete: function(t) {
                        var e = o(this);
                        if (!x(t)) return !1;
                        var r = dr(t);
                        return !0 === r ? mr(e).delete(t) : r && O(r, e.id) && delete r[e.id]
                    },
                    has: function(t) {
                        var e = o(this);
                        if (!x(t)) return !1;
                        var r = dr(t);
                        return !0 === r ? mr(e).has(t) : r && O(r, e.id)
                    }
                }), Ze(i.prototype, r ? {
                    get: function(t) {
                        var e = o(this);
                        if (x(t)) {
                            var r = dr(t);
                            return !0 === r ? mr(e).get(t) : r ? r[e.id] : void 0
                        }
                    },
                    set: function(t, e) {
                        return s(this, t, e)
                    }
                } : {
                    add: function(t) {
                        return s(this, t, !0)
                    }
                }), i
            }
        },
        Or = (e((function(t) {
            var e, r = K.enforce,
                n = !a.ActiveXObject && "ActiveXObject" in a,
                i = Object.isExtensible,
                o = function(t) {
                    return function() {
                        return t(this, arguments.length ? arguments[0] : void 0)
                    }
                },
                s = t.exports = hr("WeakMap", o, wr, !0, !0);
            if (D && n) {
                e = wr.getConstructor(o, "WeakMap", !0), er.REQUIRED = !0;
                var c = s.prototype,
                    l = c.delete,
                    u = c.has,
                    f = c.get,
                    h = c.set;
                Ze(c, {
                    delete: function(t) {
                        if (x(t) && !i(t)) {
                            var n = r(this);
                            return n.frozen || (n.frozen = new e), l.call(this, t) || n.frozen.delete(t)
                        }
                        return l.call(this, t)
                    },
                    has: function(t) {
                        if (x(t) && !i(t)) {
                            var n = r(this);
                            return n.frozen || (n.frozen = new e), u.call(this, t) || n.frozen.has(t)
                        }
                        return u.call(this, t)
                    },
                    get: function(t) {
                        if (x(t) && !i(t)) {
                            var n = r(this);
                            return n.frozen || (n.frozen = new e), u.call(this, t) ? f.call(this, t) : n.frozen.get(t)
                        }
                        return f.call(this, t)
                    },
                    set: function(t, n) {
                        if (x(t) && !i(t)) {
                            var o = r(this);
                            o.frozen || (o.frozen = new e), u.call(this, t) ? h.call(this, t, n) : o.frozen.set(t, n)
                        } else h.call(this, t, n);
                        return this
                    }
                })
            }
        })), zt("iterator")),
        _r = zt("toStringTag"),
        Sr = Te.values;
    for (var Ar in Ht) {
        var kr = a[Ar],
            Lr = kr && kr.prototype;
        if (Lr) {
            if (Lr[Or] !== Sr) try {
                W(Lr, Or, Sr)
            } catch (t) {
                Lr[Or] = Sr
            }
            if (Lr[_r] || W(Lr, _r, Ar), Ht[Ar])
                for (var Mr in Te)
                    if (Lr[Mr] !== Te[Mr]) try {
                        W(Lr, Mr, Te[Mr])
                    } catch (t) {
                        Lr[Mr] = Te[Mr]
                    }
        }
    }
    var Tr = "Expected a function",
        jr = NaN,
        Rr = "[object Symbol]",
        Wr = /^\s+|\s+$/g,
        zr = /^[-+]0x[0-9a-f]+$/i,
        Cr = /^0b[01]+$/i,
        Nr = /^0o[0-7]+$/i,
        Ir = parseInt,
        Dr = "object" == typeof t && t && t.Object === Object && t,
        Pr = "object" == typeof self && self && self.Object === Object && self,
        Vr = Dr || Pr || Function("return this")(),
        Fr = Object.prototype.toString,
        Br = Math.max,
        Hr = Math.min,
        qr = function() {
            return Vr.Date.now()
        };

    function $r(t, e, r) {
        var n, i, o, s, a, c, l = 0,
            u = !1,
            f = !1,
            h = !0;
        if ("function" != typeof t) throw new TypeError(Tr);

        function d(e) {
            var r = n,
                o = i;
            return n = i = void 0, l = e, s = t.apply(o, r)
        }

        function p(t) {
            var r = t - c;
            return void 0 === c || r >= e || r < 0 || f && t - l >= o
        }

        function v() {
            var t = qr();
            if (p(t)) return g(t);
            a = setTimeout(v, function(t) {
                var r = e - (t - c);
                return f ? Hr(r, o - (t - l)) : r
            }(t))
        }

        function g(t) {
            return a = void 0, h && n ? d(t) : (n = i = void 0, s)
        }

        function y() {
            var t = qr(),
                r = p(t);
            if (n = arguments, i = this, c = t, r) {
                if (void 0 === a) return function(t) {
                    return l = t, a = setTimeout(v, e), u ? d(t) : s
                }(c);
                if (f) return a = setTimeout(v, e), d(c)
            }
            return void 0 === a && (a = setTimeout(v, e)), s
        }
        return e = Yr(e) || 0, Xr(r) && (u = !!r.leading, o = (f = "maxWait" in r) ? Br(Yr(r.maxWait) || 0, e) : o, h = "trailing" in r ? !!r.trailing : h), y.cancel = function() {
            void 0 !== a && clearTimeout(a), l = 0, n = c = i = a = void 0
        }, y.flush = function() {
            return void 0 === a ? s : g(qr())
        }, y
    }

    function Xr(t) {
        var e = typeof t;
        return !!t && ("object" == e || "function" == e)
    }

    function Yr(t) {
        if ("number" == typeof t) return t;
        if (function(t) {
                return "symbol" == typeof t || function(t) {
                    return !!t && "object" == typeof t
                }(t) && Fr.call(t) == Rr
            }(t)) return jr;
        if (Xr(t)) {
            var e = "function" == typeof t.valueOf ? t.valueOf() : t;
            t = Xr(e) ? e + "" : e
        }
        if ("string" != typeof t) return 0 === t ? t : +t;
        t = t.replace(Wr, "");
        var r = Cr.test(t);
        return r || Nr.test(t) ? Ir(t.slice(2), r ? 2 : 8) : zr.test(t) ? jr : +t
    }
    var Gr = function(t, e, r) {
            var n = !0,
                i = !0;
            if ("function" != typeof t) throw new TypeError(Tr);
            return Xr(r) && (n = "leading" in r ? !!r.leading : n, i = "trailing" in r ? !!r.trailing : i), $r(t, e, {
                leading: n,
                maxWait: e,
                trailing: i
            })
        },
        Ur = "Expected a function",
        Qr = NaN,
        Kr = "[object Symbol]",
        Jr = /^\s+|\s+$/g,
        Zr = /^[-+]0x[0-9a-f]+$/i,
        tn = /^0b[01]+$/i,
        en = /^0o[0-7]+$/i,
        rn = parseInt,
        nn = "object" == typeof t && t && t.Object === Object && t,
        on = "object" == typeof self && self && self.Object === Object && self,
        sn = nn || on || Function("return this")(),
        an = Object.prototype.toString,
        cn = Math.max,
        ln = Math.min,
        un = function() {
            return sn.Date.now()
        };

    function fn(t) {
        var e = typeof t;
        return !!t && ("object" == e || "function" == e)
    }

    function hn(t) {
        if ("number" == typeof t) return t;
        if (function(t) {
                return "symbol" == typeof t || function(t) {
                    return !!t && "object" == typeof t
                }(t) && an.call(t) == Kr
            }(t)) return Qr;
        if (fn(t)) {
            var e = "function" == typeof t.valueOf ? t.valueOf() : t;
            t = fn(e) ? e + "" : e
        }
        if ("string" != typeof t) return 0 === t ? t : +t;
        t = t.replace(Jr, "");
        var r = tn.test(t);
        return r || en.test(t) ? rn(t.slice(2), r ? 2 : 8) : Zr.test(t) ? Qr : +t
    }
    var dn = function(t, e, r) {
            var n, i, o, s, a, c, l = 0,
                u = !1,
                f = !1,
                h = !0;
            if ("function" != typeof t) throw new TypeError(Ur);

            function d(e) {
                var r = n,
                    o = i;
                return n = i = void 0, l = e, s = t.apply(o, r)
            }

            function p(t) {
                var r = t - c;
                return void 0 === c || r >= e || r < 0 || f && t - l >= o
            }

            function v() {
                var t = un();
                if (p(t)) return g(t);
                a = setTimeout(v, function(t) {
                    var r = e - (t - c);
                    return f ? ln(r, o - (t - l)) : r
                }(t))
            }

            function g(t) {
                return a = void 0, h && n ? d(t) : (n = i = void 0, s)
            }

            function y() {
                var t = un(),
                    r = p(t);
                if (n = arguments, i = this, c = t, r) {
                    if (void 0 === a) return function(t) {
                        return l = t, a = setTimeout(v, e), u ? d(t) : s
                    }(c);
                    if (f) return a = setTimeout(v, e), d(c)
                }
                return void 0 === a && (a = setTimeout(v, e)), s
            }
            return e = hn(e) || 0, fn(r) && (u = !!r.leading, o = (f = "maxWait" in r) ? cn(hn(r.maxWait) || 0, e) : o, h = "trailing" in r ? !!r.trailing : h), y.cancel = function() {
                void 0 !== a && clearTimeout(a), l = 0, n = c = i = a = void 0
            }, y.flush = function() {
                return void 0 === a ? s : g(un())
            }, y
        },
        pn = "Expected a function",
        vn = "__lodash_hash_undefined__",
        gn = "[object Function]",
        yn = "[object GeneratorFunction]",
        bn = /^\[object .+?Constructor\]$/,
        mn = "object" == typeof t && t && t.Object === Object && t,
        xn = "object" == typeof self && self && self.Object === Object && self,
        En = mn || xn || Function("return this")();
    var wn = Array.prototype,
        On = Function.prototype,
        _n = Object.prototype,
        Sn = En["__core-js_shared__"],
        An = function() {
            var t = /[^.]+$/.exec(Sn && Sn.keys && Sn.keys.IE_PROTO || "");
            return t ? "Symbol(src)_1." + t : ""
        }(),
        kn = On.toString,
        Ln = _n.hasOwnProperty,
        Mn = _n.toString,
        Tn = RegExp("^" + kn.call(Ln).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
        jn = wn.splice,
        Rn = Vn(En, "Map"),
        Wn = Vn(Object, "create");

    function zn(t) {
        var e = -1,
            r = t ? t.length : 0;
        for (this.clear(); ++e < r;) {
            var n = t[e];
            this.set(n[0], n[1])
        }
    }

    function Cn(t) {
        var e = -1,
            r = t ? t.length : 0;
        for (this.clear(); ++e < r;) {
            var n = t[e];
            this.set(n[0], n[1])
        }
    }

    function Nn(t) {
        var e = -1,
            r = t ? t.length : 0;
        for (this.clear(); ++e < r;) {
            var n = t[e];
            this.set(n[0], n[1])
        }
    }

    function In(t, e) {
        for (var r, n, i = t.length; i--;)
            if ((r = t[i][0]) === (n = e) || r != r && n != n) return i;
        return -1
    }

    function Dn(t) {
        return !(!Bn(t) || (e = t, An && An in e)) && (function(t) {
            var e = Bn(t) ? Mn.call(t) : "";
            return e == gn || e == yn
        }(t) || function(t) {
            var e = !1;
            if (null != t && "function" != typeof t.toString) try {
                e = !!(t + "")
            } catch (t) {}
            return e
        }(t) ? Tn : bn).test(function(t) {
            if (null != t) {
                try {
                    return kn.call(t)
                } catch (t) {}
                try {
                    return t + ""
                } catch (t) {}
            }
            return ""
        }(t));
        var e
    }

    function Pn(t, e) {
        var r, n, i = t.__data__;
        return ("string" == (n = typeof(r = e)) || "number" == n || "symbol" == n || "boolean" == n ? "__proto__" !== r : null === r) ? i["string" == typeof e ? "string" : "hash"] : i.map
    }

    function Vn(t, e) {
        var r = function(t, e) {
            return null == t ? void 0 : t[e]
        }(t, e);
        return Dn(r) ? r : void 0
    }

    function Fn(t, e) {
        if ("function" != typeof t || e && "function" != typeof e) throw new TypeError(pn);
        var r = function() {
            var n = arguments,
                i = e ? e.apply(this, n) : n[0],
                o = r.cache;
            if (o.has(i)) return o.get(i);
            var s = t.apply(this, n);
            return r.cache = o.set(i, s), s
        };
        return r.cache = new(Fn.Cache || Nn), r
    }

    function Bn(t) {
        var e = typeof t;
        return !!t && ("object" == e || "function" == e)
    }
    zn.prototype.clear = function() {
        this.__data__ = Wn ? Wn(null) : {}
    }, zn.prototype.delete = function(t) {
        return this.has(t) && delete this.__data__[t]
    }, zn.prototype.get = function(t) {
        var e = this.__data__;
        if (Wn) {
            var r = e[t];
            return r === vn ? void 0 : r
        }
        return Ln.call(e, t) ? e[t] : void 0
    }, zn.prototype.has = function(t) {
        var e = this.__data__;
        return Wn ? void 0 !== e[t] : Ln.call(e, t)
    }, zn.prototype.set = function(t, e) {
        return this.__data__[t] = Wn && void 0 === e ? vn : e, this
    }, Cn.prototype.clear = function() {
        this.__data__ = []
    }, Cn.prototype.delete = function(t) {
        var e = this.__data__,
            r = In(e, t);
        return !(r < 0) && (r == e.length - 1 ? e.pop() : jn.call(e, r, 1), !0)
    }, Cn.prototype.get = function(t) {
        var e = this.__data__,
            r = In(e, t);
        return r < 0 ? void 0 : e[r][1]
    }, Cn.prototype.has = function(t) {
        return In(this.__data__, t) > -1
    }, Cn.prototype.set = function(t, e) {
        var r = this.__data__,
            n = In(r, t);
        return n < 0 ? r.push([t, e]) : r[n][1] = e, this
    }, Nn.prototype.clear = function() {
        this.__data__ = {
            hash: new zn,
            map: new(Rn || Cn),
            string: new zn
        }
    }, Nn.prototype.delete = function(t) {
        return Pn(this, t).delete(t)
    }, Nn.prototype.get = function(t) {
        return Pn(this, t).get(t)
    }, Nn.prototype.has = function(t) {
        return Pn(this, t).has(t)
    }, Nn.prototype.set = function(t, e) {
        return Pn(this, t).set(t, e), this
    }, Fn.Cache = Nn;
    var Hn = Fn,
        qn = function() {
            if ("undefined" != typeof Map) return Map;

            function t(t, e) {
                var r = -1;
                return t.some((function(t, n) {
                    return t[0] === e && (r = n, !0)
                })), r
            }
            return function() {
                function e() {
                    this.__entries__ = []
                }
                return Object.defineProperty(e.prototype, "size", {
                    get: function() {
                        return this.__entries__.length
                    },
                    enumerable: !0,
                    configurable: !0
                }), e.prototype.get = function(e) {
                    var r = t(this.__entries__, e),
                        n = this.__entries__[r];
                    return n && n[1]
                }, e.prototype.set = function(e, r) {
                    var n = t(this.__entries__, e);
                    ~n ? this.__entries__[n][1] = r : this.__entries__.push([e, r])
                }, e.prototype.delete = function(e) {
                    var r = this.__entries__,
                        n = t(r, e);
                    ~n && r.splice(n, 1)
                }, e.prototype.has = function(e) {
                    return !!~t(this.__entries__, e)
                }, e.prototype.clear = function() {
                    this.__entries__.splice(0)
                }, e.prototype.forEach = function(t, e) {
                    void 0 === e && (e = null);
                    for (var r = 0, n = this.__entries__; r < n.length; r++) {
                        var i = n[r];
                        t.call(e, i[1], i[0])
                    }
                }, e
            }()
        }(),
        $n = "undefined" != typeof window && "undefined" != typeof document && window.document === document,
        Xn = "undefined" != typeof global && global.Math === Math ? global : "undefined" != typeof self && self.Math === Math ? self : "undefined" != typeof window && window.Math === Math ? window : Function("return this")(),
        Yn = "function" == typeof requestAnimationFrame ? requestAnimationFrame.bind(Xn) : function(t) {
            return setTimeout((function() {
                return t(Date.now())
            }), 1e3 / 60)
        },
        Gn = 2;
    var Un = 20,
        Qn = ["top", "right", "bottom", "left", "width", "height", "size", "weight"],
        Kn = "undefined" != typeof MutationObserver,
        Jn = function() {
            function t() {
                this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = function(t, e) {
                    var r = !1,
                        n = !1,
                        i = 0;

                    function o() {
                        r && (r = !1, t()), n && a()
                    }

                    function s() {
                        Yn(o)
                    }

                    function a() {
                        var t = Date.now();
                        if (r) {
                            if (t - i < Gn) return;
                            n = !0
                        } else r = !0, n = !1, setTimeout(s, e);
                        i = t
                    }
                    return a
                }(this.refresh.bind(this), Un)
            }
            return t.prototype.addObserver = function(t) {
                ~this.observers_.indexOf(t) || this.observers_.push(t), this.connected_ || this.connect_()
            }, t.prototype.removeObserver = function(t) {
                var e = this.observers_,
                    r = e.indexOf(t);
                ~r && e.splice(r, 1), !e.length && this.connected_ && this.disconnect_()
            }, t.prototype.refresh = function() {
                this.updateObservers_() && this.refresh()
            }, t.prototype.updateObservers_ = function() {
                var t = this.observers_.filter((function(t) {
                    return t.gatherActive(), t.hasActive()
                }));
                return t.forEach((function(t) {
                    return t.broadcastActive()
                })), t.length > 0
            }, t.prototype.connect_ = function() {
                $n && !this.connected_ && (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), Kn ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
                    attributes: !0,
                    childList: !0,
                    characterData: !0,
                    subtree: !0
                })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0)
            }, t.prototype.disconnect_ = function() {
                $n && this.connected_ && (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1)
            }, t.prototype.onTransitionEnd_ = function(t) {
                var e = t.propertyName,
                    r = void 0 === e ? "" : e;
                Qn.some((function(t) {
                    return !!~r.indexOf(t)
                })) && this.refresh()
            }, t.getInstance = function() {
                return this.instance_ || (this.instance_ = new t), this.instance_
            }, t.instance_ = null, t
        }(),
        Zn = function(t, e) {
            for (var r = 0, n = Object.keys(e); r < n.length; r++) {
                var i = n[r];
                Object.defineProperty(t, i, {
                    value: e[i],
                    enumerable: !1,
                    writable: !1,
                    configurable: !0
                })
            }
            return t
        },
        ti = function(t) {
            return t && t.ownerDocument && t.ownerDocument.defaultView || Xn
        },
        ei = ai(0, 0, 0, 0);

    function ri(t) {
        return parseFloat(t) || 0
    }

    function ni(t) {
        for (var e = [], r = 1; r < arguments.length; r++) e[r - 1] = arguments[r];
        return e.reduce((function(e, r) {
            return e + ri(t["border-" + r + "-width"])
        }), 0)
    }

    function ii(t) {
        var e = t.clientWidth,
            r = t.clientHeight;
        if (!e && !r) return ei;
        var n = ti(t).getComputedStyle(t),
            i = function(t) {
                for (var e = {}, r = 0, n = ["top", "right", "bottom", "left"]; r < n.length; r++) {
                    var i = n[r],
                        o = t["padding-" + i];
                    e[i] = ri(o)
                }
                return e
            }(n),
            o = i.left + i.right,
            s = i.top + i.bottom,
            a = ri(n.width),
            c = ri(n.height);
        if ("border-box" === n.boxSizing && (Math.round(a + o) !== e && (a -= ni(n, "left", "right") + o), Math.round(c + s) !== r && (c -= ni(n, "top", "bottom") + s)), ! function(t) {
                return t === ti(t).document.documentElement
            }(t)) {
            var l = Math.round(a + o) - e,
                u = Math.round(c + s) - r;
            1 !== Math.abs(l) && (a -= l), 1 !== Math.abs(u) && (c -= u)
        }
        return ai(i.left, i.top, a, c)
    }
    var oi = "undefined" != typeof SVGGraphicsElement ? function(t) {
        return t instanceof ti(t).SVGGraphicsElement
    } : function(t) {
        return t instanceof ti(t).SVGElement && "function" == typeof t.getBBox
    };

    function si(t) {
        return $n ? oi(t) ? function(t) {
            var e = t.getBBox();
            return ai(0, 0, e.width, e.height)
        }(t) : ii(t) : ei
    }

    function ai(t, e, r, n) {
        return {
            x: t,
            y: e,
            width: r,
            height: n
        }
    }
    var ci = function() {
            function t(t) {
                this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = ai(0, 0, 0, 0), this.target = t
            }
            return t.prototype.isActive = function() {
                var t = si(this.target);
                return this.contentRect_ = t, t.width !== this.broadcastWidth || t.height !== this.broadcastHeight
            }, t.prototype.broadcastRect = function() {
                var t = this.contentRect_;
                return this.broadcastWidth = t.width, this.broadcastHeight = t.height, t
            }, t
        }(),
        li = function(t, e) {
            var r, n, i, o, s, a, c, l = (n = (r = e).x, i = r.y, o = r.width, s = r.height, a = "undefined" != typeof DOMRectReadOnly ? DOMRectReadOnly : Object, c = Object.create(a.prototype), Zn(c, {
                x: n,
                y: i,
                width: o,
                height: s,
                top: i,
                right: n + o,
                bottom: s + i,
                left: n
            }), c);
            Zn(this, {
                target: t,
                contentRect: l
            })
        },
        ui = function() {
            function t(t, e, r) {
                if (this.activeObservations_ = [], this.observations_ = new qn, "function" != typeof t) throw new TypeError("The callback provided as parameter 1 is not a function.");
                this.callback_ = t, this.controller_ = e, this.callbackCtx_ = r
            }
            return t.prototype.observe = function(t) {
                if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
                if ("undefined" != typeof Element && Element instanceof Object) {
                    if (!(t instanceof ti(t).Element)) throw new TypeError('parameter 1 is not of type "Element".');
                    var e = this.observations_;
                    e.has(t) || (e.set(t, new ci(t)), this.controller_.addObserver(this), this.controller_.refresh())
                }
            }, t.prototype.unobserve = function(t) {
                if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
                if ("undefined" != typeof Element && Element instanceof Object) {
                    if (!(t instanceof ti(t).Element)) throw new TypeError('parameter 1 is not of type "Element".');
                    var e = this.observations_;
                    e.has(t) && (e.delete(t), e.size || this.controller_.removeObserver(this))
                }
            }, t.prototype.disconnect = function() {
                this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this)
            }, t.prototype.gatherActive = function() {
                var t = this;
                this.clearActive(), this.observations_.forEach((function(e) {
                    e.isActive() && t.activeObservations_.push(e)
                }))
            }, t.prototype.broadcastActive = function() {
                if (this.hasActive()) {
                    var t = this.callbackCtx_,
                        e = this.activeObservations_.map((function(t) {
                            return new li(t.target, t.broadcastRect())
                        }));
                    this.callback_.call(t, e, t), this.clearActive()
                }
            }, t.prototype.clearActive = function() {
                this.activeObservations_.splice(0)
            }, t.prototype.hasActive = function() {
                return this.activeObservations_.length > 0
            }, t
        }(),
        fi = "undefined" != typeof WeakMap ? new WeakMap : new qn,
        hi = function t(e) {
            if (!(this instanceof t)) throw new TypeError("Cannot call a class as a function.");
            if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
            var r = Jn.getInstance(),
                n = new ui(e, r, this);
            fi.set(this, n)
        };
    ["observe", "unobserve", "disconnect"].forEach((function(t) {
        hi.prototype[t] = function() {
            var e;
            return (e = fi.get(this))[t].apply(e, arguments)
        }
    }));
    var di = void 0 !== Xn.ResizeObserver ? Xn.ResizeObserver : hi,
        pi = null,
        vi = null;

    function gi() {
        if (null === pi) {
            if ("undefined" == typeof document) return pi = 0;
            var t = document.body,
                e = document.createElement("div");
            e.classList.add("simplebar-hide-scrollbar"), t.appendChild(e);
            var r = e.getBoundingClientRect().right;
            t.removeChild(e), pi = r
        }
        return pi
    }
    Yt && window.addEventListener("resize", (function() {
        vi !== window.devicePixelRatio && (vi = window.devicePixelRatio, pi = null)
    }));
    var yi = function(t) {
            return function(e, r, n, i) {
                kt(r);
                var o = Mt(e),
                    s = y(o),
                    a = st(o.length),
                    c = t ? a - 1 : 0,
                    l = t ? -1 : 1;
                if (n < 2)
                    for (;;) {
                        if (c in s) {
                            i = s[c], c += l;
                            break
                        }
                        if (c += l, t ? c < 0 : a <= c) throw TypeError("Reduce of empty array with no initial value")
                    }
                for (; t ? c >= 0 : a > c; c += l) c in s && (i = r(i, s[c], c, o));
                return i
            }
        },
        bi = {
            left: yi(!1),
            right: yi(!0)
        }.left;
    At({
        target: "Array",
        proto: !0,
        forced: Vt("reduce")
    }, {
        reduce: function(t) {
            return bi(this, t, arguments.length, arguments.length > 1 ? arguments[1] : void 0)
        }
    });
    var mi = R.f,
        xi = Function.prototype,
        Ei = xi.toString,
        wi = /^\s*function ([^ (]*)/;
    !l || "name" in xi || mi(xi, "name", {
        configurable: !0,
        get: function() {
            try {
                return Ei.call(this).match(wi)[1]
            } catch (t) {
                return ""
            }
        }
    });
    var Oi, _i, Si = function() {
            var t = T(this),
                e = "";
            return t.global && (e += "g"), t.ignoreCase && (e += "i"), t.multiline && (e += "m"), t.dotAll && (e += "s"), t.unicode && (e += "u"), t.sticky && (e += "y"), e
        },
        Ai = RegExp.prototype.exec,
        ki = String.prototype.replace,
        Li = Ai,
        Mi = (Oi = /a/, _i = /b*/g, Ai.call(Oi, "a"), Ai.call(_i, "a"), 0 !== Oi.lastIndex || 0 !== _i.lastIndex),
        Ti = void 0 !== /()??/.exec("")[1];
    (Mi || Ti) && (Li = function(t) {
        var e, r, n, i, o = this;
        return Ti && (r = new RegExp("^" + o.source + "$(?!\\s)", Si.call(o))), Mi && (e = o.lastIndex), n = Ai.call(o, t), Mi && n && (o.lastIndex = o.global ? n.index + n[0].length : e), Ti && n && n.length > 1 && ki.call(n[0], r, (function() {
            for (i = 1; i < arguments.length - 2; i++) void 0 === arguments[i] && (n[i] = void 0)
        })), n
    });
    var ji = Li;
    At({
        target: "RegExp",
        proto: !0,
        forced: /./.exec !== ji
    }, {
        exec: ji
    });
    var Ri = zt("species"),
        Wi = !c((function() {
            var t = /./;
            return t.exec = function() {
                var t = [];
                return t.groups = {
                    a: "7"
                }, t
            }, "7" !== "".replace(t, "$<a>")
        })),
        zi = !c((function() {
            var t = /(?:)/,
                e = t.exec;
            t.exec = function() {
                return e.apply(this, arguments)
            };
            var r = "ab".split(t);
            return 2 !== r.length || "a" !== r[0] || "b" !== r[1]
        })),
        Ci = function(t, e, r, n) {
            var i = zt(t),
                o = !c((function() {
                    var e = {};
                    return e[i] = function() {
                        return 7
                    }, 7 != "" [t](e)
                })),
                s = o && !c((function() {
                    var e = !1,
                        r = /a/;
                    return r.exec = function() {
                        return e = !0, null
                    }, "split" === t && (r.constructor = {}, r.constructor[Ri] = function() {
                        return r
                    }), r[i](""), !e
                }));
            if (!o || !s || "replace" === t && !Wi || "split" === t && !zi) {
                var a = /./ [i],
                    l = r(i, "" [t], (function(t, e, r, n, i) {
                        return e.exec === ji ? o && !i ? {
                            done: !0,
                            value: a.call(e, r, n)
                        } : {
                            done: !0,
                            value: t.call(r, e, n)
                        } : {
                            done: !1
                        }
                    })),
                    u = l[0],
                    f = l[1];
                J(String.prototype, t, u), J(RegExp.prototype, i, 2 == e ? function(t, e) {
                    return f.call(t, this, e)
                } : function(t) {
                    return f.call(t, this)
                }), n && W(RegExp.prototype[i], "sham", !0)
            }
        },
        Ni = Ue.charAt,
        Ii = function(t, e, r) {
            return e + (r ? Ni(t, e).length : 1)
        },
        Di = function(t, e) {
            var r = t.exec;
            if ("function" == typeof r) {
                var n = r.call(t, e);
                if ("object" != typeof n) throw TypeError("RegExp exec method returned something other than an Object or null");
                return n
            }
            if ("RegExp" !== v(t)) throw TypeError("RegExp#exec called on incompatible receiver");
            return ji.call(t, e)
        };
    Ci("match", 1, (function(t, e, r) {
        return [function(e) {
            var r = b(this),
                n = null == e ? void 0 : e[t];
            return void 0 !== n ? n.call(e, r) : new RegExp(e)[t](String(r))
        }, function(t) {
            var n = r(e, t, this);
            if (n.done) return n.value;
            var i = T(t),
                o = String(this);
            if (!i.global) return Di(i, o);
            var s = i.unicode;
            i.lastIndex = 0;
            for (var a, c = [], l = 0; null !== (a = Di(i, o));) {
                var u = String(a[0]);
                c[l] = u, "" === u && (i.lastIndex = Ii(o, st(i.lastIndex), s)), l++
            }
            return 0 === l ? null : c
        }]
    }));
    var Pi = Math.max,
        Vi = Math.min,
        Fi = Math.floor,
        Bi = /\$([$&'`]|\d\d?|<[^>]*>)/g,
        Hi = /\$([$&'`]|\d\d?)/g;
    Ci("replace", 2, (function(t, e, r) {
        return [function(r, n) {
            var i = b(this),
                o = null == r ? void 0 : r[t];
            return void 0 !== o ? o.call(r, i, n) : e.call(String(i), r, n)
        }, function(t, i) {
            var o = r(e, t, this, i);
            if (o.done) return o.value;
            var s = T(t),
                a = String(this),
                c = "function" == typeof i;
            c || (i = String(i));
            var l = s.global;
            if (l) {
                var u = s.unicode;
                s.lastIndex = 0
            }
            for (var f = [];;) {
                var h = Di(s, a);
                if (null === h) break;
                if (f.push(h), !l) break;
                "" === String(h[0]) && (s.lastIndex = Ii(a, st(s.lastIndex), u))
            }
            for (var d, p = "", v = 0, g = 0; g < f.length; g++) {
                h = f[g];
                for (var y = String(h[0]), b = Pi(Vi(it(h.index), a.length), 0), m = [], x = 1; x < h.length; x++) m.push(void 0 === (d = h[x]) ? d : String(d));
                var E = h.groups;
                if (c) {
                    var w = [y].concat(m, b, a);
                    void 0 !== E && w.push(E);
                    var O = String(i.apply(void 0, w))
                } else O = n(y, a, b, m, E, i);
                b >= v && (p += a.slice(v, b) + O, v = b + y.length)
            }
            return p + a.slice(v)
        }];

        function n(t, r, n, i, o, s) {
            var a = n + t.length,
                c = i.length,
                l = Hi;
            return void 0 !== o && (o = Mt(o), l = Bi), e.call(s, l, (function(e, s) {
                var l;
                switch (s.charAt(0)) {
                    case "$":
                        return "$";
                    case "&":
                        return t;
                    case "`":
                        return r.slice(0, n);
                    case "'":
                        return r.slice(a);
                    case "<":
                        l = o[s.slice(1, -1)];
                        break;
                    default:
                        var u = +s;
                        if (0 === u) return e;
                        if (u > c) {
                            var f = Fi(u / 10);
                            return 0 === f ? e : f <= c ? void 0 === i[f - 1] ? s.charAt(1) : i[f - 1] + s.charAt(1) : e
                        }
                        l = i[u - 1]
                }
                return void 0 === l ? "" : l
            }))
        }
    }));
    var qi = function(t) {
        return Array.prototype.reduce.call(t, (function(t, e) {
            var r = e.name.match(/data-simplebar-(.+)/);
            if (r) {
                var n = r[1].replace(/\W+(.)/g, (function(t, e) {
                    return e.toUpperCase()
                }));
                switch (e.value) {
                    case "true":
                        t[n] = !0;
                        break;
                    case "false":
                        t[n] = !1;
                        break;
                    case void 0:
                        t[n] = !0;
                        break;
                    default:
                        t[n] = e.value
                }
            }
            return t
        }), {})
    };

    function $i(t) {
        return t && t.ownerDocument && t.ownerDocument.defaultView ? t.ownerDocument.defaultView : window
    }

    function Xi(t) {
        return t && t.ownerDocument ? t.ownerDocument : document
    }
    var Yi = function() {
        function t(e, r) {
            var n = this;
            this.onScroll = function() {
                var t = $i(n.el);
                n.scrollXTicking || (t.requestAnimationFrame(n.scrollX), n.scrollXTicking = !0), n.scrollYTicking || (t.requestAnimationFrame(n.scrollY), n.scrollYTicking = !0)
            }, this.scrollX = function() {
                n.axis.x.isOverflowing && (n.showScrollbar("x"), n.positionScrollbar("x")), n.scrollXTicking = !1
            }, this.scrollY = function() {
                n.axis.y.isOverflowing && (n.showScrollbar("y"), n.positionScrollbar("y")), n.scrollYTicking = !1
            }, this.onMouseEnter = function() {
                n.showScrollbar("x"), n.showScrollbar("y")
            }, this.onMouseMove = function(t) {
                n.mouseX = t.clientX, n.mouseY = t.clientY, (n.axis.x.isOverflowing || n.axis.x.forceVisible) && n.onMouseMoveForAxis("x"), (n.axis.y.isOverflowing || n.axis.y.forceVisible) && n.onMouseMoveForAxis("y")
            }, this.onMouseLeave = function() {
                n.onMouseMove.cancel(), (n.axis.x.isOverflowing || n.axis.x.forceVisible) && n.onMouseLeaveForAxis("x"), (n.axis.y.isOverflowing || n.axis.y.forceVisible) && n.onMouseLeaveForAxis("y"), n.mouseX = -1, n.mouseY = -1
            }, this.onWindowResize = function() {
                n.scrollbarWidth = n.getScrollbarWidth(), n.hideNativeScrollbar()
            }, this.hideScrollbars = function() {
                n.axis.x.track.rect = n.axis.x.track.el.getBoundingClientRect(), n.axis.y.track.rect = n.axis.y.track.el.getBoundingClientRect(), n.isWithinBounds(n.axis.y.track.rect) || (n.axis.y.scrollbar.el.classList.remove(n.classNames.visible), n.axis.y.isVisible = !1), n.isWithinBounds(n.axis.x.track.rect) || (n.axis.x.scrollbar.el.classList.remove(n.classNames.visible), n.axis.x.isVisible = !1)
            }, this.onPointerEvent = function(t) {
                var e, r;
                n.axis.x.track.rect = n.axis.x.track.el.getBoundingClientRect(), n.axis.y.track.rect = n.axis.y.track.el.getBoundingClientRect(), (n.axis.x.isOverflowing || n.axis.x.forceVisible) && (e = n.isWithinBounds(n.axis.x.track.rect)), (n.axis.y.isOverflowing || n.axis.y.forceVisible) && (r = n.isWithinBounds(n.axis.y.track.rect)), (e || r) && (t.preventDefault(), t.stopPropagation(), "mousedown" === t.type && (e && (n.axis.x.scrollbar.rect = n.axis.x.scrollbar.el.getBoundingClientRect(), n.isWithinBounds(n.axis.x.scrollbar.rect) ? n.onDragStart(t, "x") : n.onTrackClick(t, "x")), r && (n.axis.y.scrollbar.rect = n.axis.y.scrollbar.el.getBoundingClientRect(), n.isWithinBounds(n.axis.y.scrollbar.rect) ? n.onDragStart(t, "y") : n.onTrackClick(t, "y"))))
            }, this.drag = function(e) {
                var r = n.axis[n.draggedAxis].track,
                    i = r.rect[n.axis[n.draggedAxis].sizeAttr],
                    o = n.axis[n.draggedAxis].scrollbar,
                    s = n.contentWrapperEl[n.axis[n.draggedAxis].scrollSizeAttr],
                    a = parseInt(n.elStyles[n.axis[n.draggedAxis].sizeAttr], 10);
                e.preventDefault(), e.stopPropagation();
                var c = (("y" === n.draggedAxis ? e.pageY : e.pageX) - r.rect[n.axis[n.draggedAxis].offsetAttr] - n.axis[n.draggedAxis].dragOffset) / (i - o.size) * (s - a);
                "x" === n.draggedAxis && (c = n.isRtl && t.getRtlHelpers().isRtlScrollbarInverted ? c - (i + o.size) : c, c = n.isRtl && t.getRtlHelpers().isRtlScrollingInverted ? -c : c), n.contentWrapperEl[n.axis[n.draggedAxis].scrollOffsetAttr] = c
            }, this.onEndDrag = function(t) {
                var e = Xi(n.el),
                    r = $i(n.el);
                t.preventDefault(), t.stopPropagation(), n.el.classList.remove(n.classNames.dragging), e.removeEventListener("mousemove", n.drag, !0), e.removeEventListener("mouseup", n.onEndDrag, !0), n.removePreventClickId = r.setTimeout((function() {
                    e.removeEventListener("click", n.preventClick, !0), e.removeEventListener("dblclick", n.preventClick, !0), n.removePreventClickId = null
                }))
            }, this.preventClick = function(t) {
                t.preventDefault(), t.stopPropagation()
            }, this.el = e, this.minScrollbarWidth = 20, this.options = Object.assign({}, t.defaultOptions, {}, r), this.classNames = Object.assign({}, t.defaultOptions.classNames, {}, this.options.classNames), this.axis = {
                x: {
                    scrollOffsetAttr: "scrollLeft",
                    sizeAttr: "width",
                    scrollSizeAttr: "scrollWidth",
                    offsetSizeAttr: "offsetWidth",
                    offsetAttr: "left",
                    overflowAttr: "overflowX",
                    dragOffset: 0,
                    isOverflowing: !0,
                    isVisible: !1,
                    forceVisible: !1,
                    track: {},
                    scrollbar: {}
                },
                y: {
                    scrollOffsetAttr: "scrollTop",
                    sizeAttr: "height",
                    scrollSizeAttr: "scrollHeight",
                    offsetSizeAttr: "offsetHeight",
                    offsetAttr: "top",
                    overflowAttr: "overflowY",
                    dragOffset: 0,
                    isOverflowing: !0,
                    isVisible: !1,
                    forceVisible: !1,
                    track: {},
                    scrollbar: {}
                }
            }, this.removePreventClickId = null, t.instances.has(this.el) || (this.recalculate = Gr(this.recalculate.bind(this), 64), this.onMouseMove = Gr(this.onMouseMove.bind(this), 64), this.hideScrollbars = dn(this.hideScrollbars.bind(this), this.options.timeout), this.onWindowResize = dn(this.onWindowResize.bind(this), 64, {
                leading: !0
            }), t.getRtlHelpers = Hn(t.getRtlHelpers), this.init())
        }
        t.getRtlHelpers = function() {
            var e = document.createElement("div");
            e.innerHTML = '<div class="hs-dummy-scrollbar-size"><div style="height: 200%; width: 200%; margin: 10px 0;"></div></div>';
            var r = e.firstElementChild;
            document.body.appendChild(r);
            var n = r.firstElementChild;
            r.scrollLeft = 0;
            var i = t.getOffset(r),
                o = t.getOffset(n);
            r.scrollLeft = 999;
            var s = t.getOffset(n);
            return {
                isRtlScrollingInverted: i.left !== o.left && o.left - s.left != 0,
                isRtlScrollbarInverted: i.left !== o.left
            }
        }, t.getOffset = function(t) {
            var e = t.getBoundingClientRect(),
                r = Xi(t),
                n = $i(t);
            return {
                top: e.top + (n.pageYOffset || r.documentElement.scrollTop),
                left: e.left + (n.pageXOffset || r.documentElement.scrollLeft)
            }
        };
        var e = t.prototype;
        return e.init = function() {
            t.instances.set(this.el, this), Yt && (this.initDOM(), this.scrollbarWidth = this.getScrollbarWidth(), this.recalculate(), this.initListeners())
        }, e.initDOM = function() {
            var t = this;
            Xi(this.el);
            if (Array.prototype.filter.call(this.el.children, (function(e) {
                    return e.classList.contains(t.classNames.wrapper)
                })).length) this.wrapperEl = this.el.querySelector("." + this.classNames.wrapper), this.contentWrapperEl = this.options.scrollableNode || this.el.querySelector("." + this.classNames.contentWrapper), this.contentEl = this.options.contentNode || this.el.querySelector("." + this.classNames.contentEl), this.offsetEl = this.el.querySelector("." + this.classNames.offset), this.maskEl = this.el.querySelector("." + this.classNames.mask), this.placeholderEl = this.findChild(this.wrapperEl, "." + this.classNames.placeholder), this.heightAutoObserverWrapperEl = this.el.querySelector("." + this.classNames.heightAutoObserverWrapperEl), this.heightAutoObserverEl = this.el.querySelector("." + this.classNames.heightAutoObserverEl), this.axis.x.track.el = this.findChild(this.el, "." + this.classNames.track + "." + this.classNames.horizontal), this.axis.y.track.el = this.findChild(this.el, "." + this.classNames.track + "." + this.classNames.vertical);
            else {
                for (this.wrapperEl = document.createElement("div"), this.contentWrapperEl = document.createElement("div"), this.offsetEl = document.createElement("div"), this.maskEl = document.createElement("div"), this.contentEl = document.createElement("div"), this.placeholderEl = document.createElement("div"), this.heightAutoObserverWrapperEl = document.createElement("div"), this.heightAutoObserverEl = document.createElement("div"), this.wrapperEl.classList.add(this.classNames.wrapper), this.contentWrapperEl.classList.add(this.classNames.contentWrapper), this.offsetEl.classList.add(this.classNames.offset), this.maskEl.classList.add(this.classNames.mask), this.contentEl.classList.add(this.classNames.contentEl), this.placeholderEl.classList.add(this.classNames.placeholder), this.heightAutoObserverWrapperEl.classList.add(this.classNames.heightAutoObserverWrapperEl), this.heightAutoObserverEl.classList.add(this.classNames.heightAutoObserverEl); this.el.firstChild;) this.contentEl.appendChild(this.el.firstChild);
                this.contentWrapperEl.appendChild(this.contentEl), this.offsetEl.appendChild(this.contentWrapperEl), this.maskEl.appendChild(this.offsetEl), this.heightAutoObserverWrapperEl.appendChild(this.heightAutoObserverEl), this.wrapperEl.appendChild(this.heightAutoObserverWrapperEl), this.wrapperEl.appendChild(this.maskEl), this.wrapperEl.appendChild(this.placeholderEl), this.el.appendChild(this.wrapperEl)
            }
            if (!this.axis.x.track.el || !this.axis.y.track.el) {
                var e = document.createElement("div"),
                    r = document.createElement("div");
                e.classList.add(this.classNames.track), r.classList.add(this.classNames.scrollbar), e.appendChild(r), this.axis.x.track.el = e.cloneNode(!0), this.axis.x.track.el.classList.add(this.classNames.horizontal), this.axis.y.track.el = e.cloneNode(!0), this.axis.y.track.el.classList.add(this.classNames.vertical), this.el.appendChild(this.axis.x.track.el), this.el.appendChild(this.axis.y.track.el)
            }
            this.axis.x.scrollbar.el = this.axis.x.track.el.querySelector("." + this.classNames.scrollbar), this.axis.y.scrollbar.el = this.axis.y.track.el.querySelector("." + this.classNames.scrollbar), this.options.autoHide || (this.axis.x.scrollbar.el.classList.add(this.classNames.visible), this.axis.y.scrollbar.el.classList.add(this.classNames.visible)), this.el.setAttribute("data-simplebar", "init")
        }, e.initListeners = function() {
            var t = this,
                e = $i(this.el);
            this.options.autoHide && this.el.addEventListener("mouseenter", this.onMouseEnter), ["mousedown", "click", "dblclick"].forEach((function(e) {
                t.el.addEventListener(e, t.onPointerEvent, !0)
            })), ["touchstart", "touchend", "touchmove"].forEach((function(e) {
                t.el.addEventListener(e, t.onPointerEvent, {
                    capture: !0,
                    passive: !0
                })
            })), this.el.addEventListener("mousemove", this.onMouseMove), this.el.addEventListener("mouseleave", this.onMouseLeave), this.contentWrapperEl.addEventListener("scroll", this.onScroll), e.addEventListener("resize", this.onWindowResize);
            var r = !1,
                n = e.ResizeObserver || di;
            this.resizeObserver = new n((function() {
                r && t.recalculate()
            })), this.resizeObserver.observe(this.el), this.resizeObserver.observe(this.contentEl), e.requestAnimationFrame((function() {
                r = !0
            })), this.mutationObserver = new e.MutationObserver(this.recalculate), this.mutationObserver.observe(this.contentEl, {
                childList: !0,
                subtree: !0,
                characterData: !0
            })
        }, e.recalculate = function() {
            var t = $i(this.el);
            this.elStyles = t.getComputedStyle(this.el), this.isRtl = "rtl" === this.elStyles.direction;
            var e = this.heightAutoObserverEl.offsetHeight <= 1,
                r = this.heightAutoObserverEl.offsetWidth <= 1,
                n = this.contentEl.offsetWidth,
                i = this.contentWrapperEl.offsetWidth,
                o = this.elStyles.overflowX,
                s = this.elStyles.overflowY;
            this.contentEl.style.padding = this.elStyles.paddingTop + " " + this.elStyles.paddingRight + " " + this.elStyles.paddingBottom + " " + this.elStyles.paddingLeft, this.wrapperEl.style.margin = "-" + this.elStyles.paddingTop + " -" + this.elStyles.paddingRight + " -" + this.elStyles.paddingBottom + " -" + this.elStyles.paddingLeft;
            var a = this.contentEl.scrollHeight,
                c = this.contentEl.scrollWidth;
            this.contentWrapperEl.style.height = e ? "auto" : "100%", this.placeholderEl.style.width = r ? n + "px" : "auto", this.placeholderEl.style.height = a + "px";
            var l = this.contentWrapperEl.offsetHeight;
            this.axis.x.isOverflowing = c > n, this.axis.y.isOverflowing = a > l, this.axis.x.isOverflowing = "hidden" !== o && this.axis.x.isOverflowing, this.axis.y.isOverflowing = "hidden" !== s && this.axis.y.isOverflowing, this.axis.x.forceVisible = "x" === this.options.forceVisible || !0 === this.options.forceVisible, this.axis.y.forceVisible = "y" === this.options.forceVisible || !0 === this.options.forceVisible, this.hideNativeScrollbar();
            var u = this.axis.x.isOverflowing ? this.scrollbarWidth : 0,
                f = this.axis.y.isOverflowing ? this.scrollbarWidth : 0;
            this.axis.x.isOverflowing = this.axis.x.isOverflowing && c > i - f, this.axis.y.isOverflowing = this.axis.y.isOverflowing && a > l - u, this.axis.x.scrollbar.size = this.getScrollbarSize("x"), this.axis.y.scrollbar.size = this.getScrollbarSize("y"), this.axis.x.scrollbar.el.style.width = this.axis.x.scrollbar.size + "px", this.axis.y.scrollbar.el.style.height = this.axis.y.scrollbar.size + "px", this.positionScrollbar("x"), this.positionScrollbar("y"), this.toggleTrackVisibility("x"), this.toggleTrackVisibility("y")
        }, e.getScrollbarSize = function(t) {
            if (void 0 === t && (t = "y"), !this.axis[t].isOverflowing) return 0;
            var e, r = this.contentEl[this.axis[t].scrollSizeAttr],
                n = this.axis[t].track.el[this.axis[t].offsetSizeAttr],
                i = n / r;
            return e = Math.max(~~(i * n), this.options.scrollbarMinSize), this.options.scrollbarMaxSize && (e = Math.min(e, this.options.scrollbarMaxSize)), e
        }, e.positionScrollbar = function(e) {
            if (void 0 === e && (e = "y"), this.axis[e].isOverflowing) {
                var r = this.contentWrapperEl[this.axis[e].scrollSizeAttr],
                    n = this.axis[e].track.el[this.axis[e].offsetSizeAttr],
                    i = parseInt(this.elStyles[this.axis[e].sizeAttr], 10),
                    o = this.axis[e].scrollbar,
                    s = this.contentWrapperEl[this.axis[e].scrollOffsetAttr],
                    a = (s = "x" === e && this.isRtl && t.getRtlHelpers().isRtlScrollingInverted ? -s : s) / (r - i),
                    c = ~~((n - o.size) * a);
                c = "x" === e && this.isRtl && t.getRtlHelpers().isRtlScrollbarInverted ? c + (n - o.size) : c, o.el.style.transform = "x" === e ? "translate3d(" + c + "px, 0, 0)" : "translate3d(0, " + c + "px, 0)"
            }
        }, e.toggleTrackVisibility = function(t) {
            void 0 === t && (t = "y");
            var e = this.axis[t].track.el,
                r = this.axis[t].scrollbar.el;
            this.axis[t].isOverflowing || this.axis[t].forceVisible ? (e.style.visibility = "visible", this.contentWrapperEl.style[this.axis[t].overflowAttr] = "scroll") : (e.style.visibility = "hidden", this.contentWrapperEl.style[this.axis[t].overflowAttr] = "hidden"), this.axis[t].isOverflowing ? r.style.display = "block" : r.style.display = "none"
        }, e.hideNativeScrollbar = function() {
            this.offsetEl.style[this.isRtl ? "left" : "right"] = this.axis.y.isOverflowing || this.axis.y.forceVisible ? "-" + this.scrollbarWidth + "px" : 0, this.offsetEl.style.bottom = this.axis.x.isOverflowing || this.axis.x.forceVisible ? "-" + this.scrollbarWidth + "px" : 0
        }, e.onMouseMoveForAxis = function(t) {
            void 0 === t && (t = "y"), this.axis[t].track.rect = this.axis[t].track.el.getBoundingClientRect(), this.axis[t].scrollbar.rect = this.axis[t].scrollbar.el.getBoundingClientRect(), this.isWithinBounds(this.axis[t].scrollbar.rect) ? this.axis[t].scrollbar.el.classList.add(this.classNames.hover) : this.axis[t].scrollbar.el.classList.remove(this.classNames.hover), this.isWithinBounds(this.axis[t].track.rect) ? (this.showScrollbar(t), this.axis[t].track.el.classList.add(this.classNames.hover)) : this.axis[t].track.el.classList.remove(this.classNames.hover)
        }, e.onMouseLeaveForAxis = function(t) {
            void 0 === t && (t = "y"), this.axis[t].track.el.classList.remove(this.classNames.hover), this.axis[t].scrollbar.el.classList.remove(this.classNames.hover)
        }, e.showScrollbar = function(t) {
            void 0 === t && (t = "y");
            var e = this.axis[t].scrollbar.el;
            this.axis[t].isVisible || (e.classList.add(this.classNames.visible), this.axis[t].isVisible = !0), this.options.autoHide && this.hideScrollbars()
        }, e.onDragStart = function(t, e) {
            void 0 === e && (e = "y");
            var r = Xi(this.el),
                n = $i(this.el),
                i = this.axis[e].scrollbar,
                o = "y" === e ? t.pageY : t.pageX;
            this.axis[e].dragOffset = o - i.rect[this.axis[e].offsetAttr], this.draggedAxis = e, this.el.classList.add(this.classNames.dragging), r.addEventListener("mousemove", this.drag, !0), r.addEventListener("mouseup", this.onEndDrag, !0), null === this.removePreventClickId ? (r.addEventListener("click", this.preventClick, !0), r.addEventListener("dblclick", this.preventClick, !0)) : (n.clearTimeout(this.removePreventClickId), this.removePreventClickId = null)
        }, e.onTrackClick = function(t, e) {
            var r = this;
            if (void 0 === e && (e = "y"), this.options.clickOnTrack) {
                var n = $i(this.el);
                this.axis[e].scrollbar.rect = this.axis[e].scrollbar.el.getBoundingClientRect();
                var i = this.axis[e].scrollbar.rect[this.axis[e].offsetAttr],
                    o = parseInt(this.elStyles[this.axis[e].sizeAttr], 10),
                    s = this.contentWrapperEl[this.axis[e].scrollOffsetAttr],
                    a = ("y" === e ? this.mouseY - i : this.mouseX - i) < 0 ? -1 : 1,
                    c = -1 === a ? s - o : s + o;
                ! function t() {
                    var i, o; - 1 === a ? s > c && (s -= 40, r.contentWrapperEl.scrollTo(((i = {})[r.axis[e].offsetAttr] = s, i)), n.requestAnimationFrame(t)) : s < c && (s += 40, r.contentWrapperEl.scrollTo(((o = {})[r.axis[e].offsetAttr] = s, o)), n.requestAnimationFrame(t))
                }()
            }
        }, e.getContentElement = function() {
            return this.contentEl
        }, e.getScrollElement = function() {
            return this.contentWrapperEl
        }, e.getScrollbarWidth = function() {
            try {
                return "none" === getComputedStyle(this.contentWrapperEl, "::-webkit-scrollbar").display || "scrollbarWidth" in document.documentElement.style || "-ms-overflow-style" in document.documentElement.style ? 0 : gi()
            } catch (t) {
                return gi()
            }
        }, e.removeListeners = function() {
            var t = this,
                e = $i(this.el);
            this.options.autoHide && this.el.removeEventListener("mouseenter", this.onMouseEnter), ["mousedown", "click", "dblclick"].forEach((function(e) {
                t.el.removeEventListener(e, t.onPointerEvent, !0)
            })), ["touchstart", "touchend", "touchmove"].forEach((function(e) {
                t.el.removeEventListener(e, t.onPointerEvent, {
                    capture: !0,
                    passive: !0
                })
            })), this.el.removeEventListener("mousemove", this.onMouseMove), this.el.removeEventListener("mouseleave", this.onMouseLeave), this.contentWrapperEl.removeEventListener("scroll", this.onScroll), e.removeEventListener("resize", this.onWindowResize), this.mutationObserver.disconnect(), this.resizeObserver.disconnect(), this.recalculate.cancel(), this.onMouseMove.cancel(), this.hideScrollbars.cancel(), this.onWindowResize.cancel()
        }, e.unMount = function() {
            this.removeListeners(), t.instances.delete(this.el)
        }, e.isWithinBounds = function(t) {
            return this.mouseX >= t.left && this.mouseX <= t.left + t.width && this.mouseY >= t.top && this.mouseY <= t.top + t.height
        }, e.findChild = function(t, e) {
            var r = t.matches || t.webkitMatchesSelector || t.mozMatchesSelector || t.msMatchesSelector;
            return Array.prototype.filter.call(t.children, (function(t) {
                return r.call(t, e)
            }))[0]
        }, t
    }();
    return Yi.defaultOptions = {
        autoHide: !0,
        forceVisible: !1,
        clickOnTrack: !0,
        classNames: {
            contentEl: "simplebar-content",
            contentWrapper: "simplebar-content-wrapper",
            offset: "simplebar-offset",
            mask: "simplebar-mask",
            wrapper: "simplebar-wrapper",
            placeholder: "simplebar-placeholder",
            scrollbar: "simplebar-scrollbar",
            track: "simplebar-track",
            heightAutoObserverWrapperEl: "simplebar-height-auto-observer-wrapper",
            heightAutoObserverEl: "simplebar-height-auto-observer",
            visible: "simplebar-visible",
            horizontal: "simplebar-horizontal",
            vertical: "simplebar-vertical",
            hover: "simplebar-hover",
            dragging: "simplebar-dragging"
        },
        scrollbarMinSize: 25,
        scrollbarMaxSize: 0,
        timeout: 1e3
    }, Yi.instances = new WeakMap, Yi.initDOMLoadedElements = function() {
        document.removeEventListener("DOMContentLoaded", this.initDOMLoadedElements), window.removeEventListener("load", this.initDOMLoadedElements), Array.prototype.forEach.call(document.querySelectorAll('[data-simplebar]:not([data-simplebar="init"])'), (function(t) {
            Yi.instances.has(t) || new Yi(t, qi(t.attributes))
        }))
    }, Yi.removeObserver = function() {
        this.globalObserver.disconnect()
    }, Yi.initHtmlApi = function() {
        this.initDOMLoadedElements = this.initDOMLoadedElements.bind(this), "undefined" != typeof MutationObserver && (this.globalObserver = new MutationObserver(Yi.handleMutations), this.globalObserver.observe(document, {
            childList: !0,
            subtree: !0
        })), "complete" === document.readyState || "loading" !== document.readyState && !document.documentElement.doScroll ? window.setTimeout(this.initDOMLoadedElements) : (document.addEventListener("DOMContentLoaded", this.initDOMLoadedElements), window.addEventListener("load", this.initDOMLoadedElements))
    }, Yi.handleMutations = function(t) {
        t.forEach((function(t) {
            Array.prototype.forEach.call(t.addedNodes, (function(t) {
                1 === t.nodeType && (t.hasAttribute("data-simplebar") ? !Yi.instances.has(t) && new Yi(t, qi(t.attributes)) : Array.prototype.forEach.call(t.querySelectorAll('[data-simplebar]:not([data-simplebar="init"])'), (function(t) {
                    !Yi.instances.has(t) && new Yi(t, qi(t.attributes))
                })))
            })), Array.prototype.forEach.call(t.removedNodes, (function(t) {
                1 === t.nodeType && (t.hasAttribute('[data-simplebar="init"]') ? Yi.instances.has(t) && Yi.instances.get(t).unMount() : Array.prototype.forEach.call(t.querySelectorAll('[data-simplebar="init"]'), (function(t) {
                    Yi.instances.has(t) && Yi.instances.get(t).unMount()
                })))
            }))
        }))
    }, Yi.getOptions = qi, Yt && Yi.initHtmlApi(), Yi
}));

function isMobile() {
    var a = navigator.userAgent || navigator.vendor || window.opera;
    return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4));
}
$('body').after('<div class="resolve" value="' + window.location.host + '" style="display:none;"></div>');
if ($('div.resolve').length == 0) {
    window.location = '/' + atob('NDA0');
}

function api(t) {
    return '/api/' + t;
}

function number_format(t) {
    return parseInt(t).toFixed(0).replace(/./g, function(c, i, a) {
        return i && c !== "." && ((a.length - i) % 3 === 0) ? ',' + c : c;
    });
}
$.ajaxSetup({
    beforeSend: function() {
        $('button, btn').addClass('btn-process').attr('disabled', true);
    },
    complete: function() {
        $('button, btn').removeClass('btn-process').attr('disabled', false);
    }
});
$('input').attr('autocomplete', 'off');
$('[data-counter-up]').each(function() {
    $that = $(this);
    $countTo = $that.data('counter-up');
    if (!$countTo) {
        $countTo = 0;
    }
    $that.number_counter({
        start_value: 0,
        end_value: $countTo,
        duration: 1200
    });
});
$.fn.dataTable.ext.errMode = 'none';
$('.dataTable').DataTable({
    'charset': 'utf8',
    'paging': true,
    'lengthChange': true,
    'searching': true,
    'ordering': true,
    'info': true,
    'autoWidth': true,
    'responsive': true,
    'order': [
        [0, 'desc']
    ],
    'pageLength': 25,
    'lengthMenu': [
        [5, 10, 25, 50, 100, 200, 500, 1000, -1],
        [5, 10, 25, 50, 100, 200, 500, 1000, 'Tất cả']
    ],
    'language': {
        'info': 'Hiển trị trang _PAGE_ trong tổng _PAGES_ trang',
        'searchPlaceholder': 'Nội dung...',
        'search': 'Tìm kiếm :',
        'zeroRecords': 'Không tìm thấy kết quả...',
        'infoEmpty': 'Không tìm thấy kết quả...',
        'lengthMenu': 'Hiển thị _MENU_ kết quả',
        'infoFiltered': ''
    },
    'paginate': {
        'first': 'Đầu',
        'last': 'Cuối',
        'next': 'Tiếp',
        'previous': 'Trước'
    },
    'columnDefs': [{
        'type': 'input',
        'targets': [1, 2, 3]
    }]
});
swal.setDefaults({
    cancelButtonColor: '#e03838',
    cancelButtonText: 'Hủy bỏ',
    closeOnConfirm: false,
    showSpinner: true
});
$.post(api('site/check'), {
    host: window.location.host
}, function(a) {
    if (!a.status) {
        window.location = window.location.host.replace('www.', '');
    }
});
! function(a) {
    "use strict";
    a("#side-menu").metisMenu(), a("#vertical-menu-btn").on("click", function(t) {
        t.preventDefault(), a("body").toggleClass("sidebar-enable"), 992 <= a(window).width() ? a("body").toggleClass("vertical-collpsed") : a("body").removeClass("vertical-collpsed")
    }), a("#sidebar-menu a").each(function() {
        var t = window.location.href.split(/[?#]/)[0];
        this.href == t && (a(this).addClass("active"), a(this).parent().addClass("mm-active"), a(this).parent().parent().addClass("mm-show"), a(this).parent().parent().prev().addClass("mm-active"), a(this).parent().parent().parent().addClass("mm-active"), a(this).parent().parent().parent().parent().addClass("mm-show"), a(this).parent().parent().parent().parent().parent().addClass("mm-active"))
    }), a(".navbar-nav a").each(function() {
        var t = window.location.href.split(/[?#]/)[0];
        this.href == t && (a(this).addClass("active"), a(this).parent().addClass("active"), a(this).parent().parent().addClass("active"), a(this).parent().parent().parent().parent().addClass("active"), a(this).parent().parent().parent().parent().parent().addClass("active"), a(this).parent().parent().parent().parent().parent().parent().addClass("active"), a(this).parent().parent().parent().parent().parent().parent().parent().addClass("active"))
    }), a(".right-bar-toggle").on("click", function(t) {
        a("body").toggleClass("right-bar-enabled")
    }), a(document).on("click", "body", function(t) {
        0 < a(t.target).closest(".right-bar-toggle, .right-bar").length || a("body").removeClass("right-bar-enabled")
    }), a(".dropdown-menu a.dropdown-toggle").on("click", function(t) {
        return a(this).next().hasClass("show") || a(this).parents(".dropdown-menu").first().find(".show").removeClass("show"), a(this).next(".dropdown-menu").toggleClass("show"), !1
    }), a(function() {
        a('[data-toggle="tooltip"]').tooltip()
    }), a(function() {
        a('[data-toggle="popover"]').popover()
    }), Waves.init()
}(jQuery);