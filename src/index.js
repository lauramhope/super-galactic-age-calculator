import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Earthling from './js/earthling.js';

window.addEventListener("load", function() {
  document.querySelector("#triangle-checker-form").addEventListener("submit", handleTriangleForm);
  document.querySelector("#rectangle-area-form").addEventListener("submit", handleRectangleForm);
});