import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { BetterDocService } from './betterDoc-service.js';





$(document).ready(function(){
  $("form#order").submit(function(event){
    searchDoctor = new SearchDoctor()
    searchDoctor.docSearch



  })

(async () => {
  let betterDocService = new BetterDocService();
  const response = await betterDocService.getDoc();
  getElements(response);
})();








});
