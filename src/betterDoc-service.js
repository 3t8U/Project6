export class BetterDocService {
  async getDoc(doc) {
    try {
      let response = await fetch(`https://api.betterdoctor.com/2016-03-01/doctors?location=or-portland&skip=2&limit=10&user_key=${process.env.API_KEY}`);
  let jsonifiedResponse = await response.json();
  console.log(response);
  return jsonifiedResponse;
} catch(error) {
  console.error("The doctor is NOT in.....: " + error.message);

    }
  }
}


  class SearchDoctor {
    docSearch(){
      this.docSearch = $("#doctor").val();


 }


 }
