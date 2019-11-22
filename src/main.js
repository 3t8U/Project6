import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { BetterDocService } from './betterDoc-service.js';




$(document).ready(function(){

  setInterval(() => {
      (async () => {
        let betterDocService = new BetterDocService();
        const response = await betterDocService.getDoc();
        getElements(response);
      })();
    },10000);







});
