import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { BetterDocService } from './betterDoc-service.js';





$(document).ready(function(){
  $("form#doctor").submit(function(event){
    event.preventDefault();
    let betterdocservice = new BetterDocService();
    let doc = $("#doctor").val();
    let test = betterdocservice.getDoc(doc);
    console.log(test);


  });
});

// (async () => {
//   let betterDocService = new BetterDocService();
//   const response = await betterDocService.getDoc();
//   getElements(response);
// })();
//
//
//
//
// function getElements(response) {
//         $('.showDoctors').display(data: { meta: {<metadata>}, data: {<array[Practice]>} });
//
//
//
// })
