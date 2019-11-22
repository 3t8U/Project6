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





    function getElements(response) {
        $("#art1").html("<img src='" +  (response.records[0].baseimageurl) +  "'>");
        $("#art2").html("<img src='" +  (response.records[1].baseimageurl) +  "'>");
        $("#art3").html("<img src='" +  (response.records[2].baseimageurl) +  "'>");
      }



});
