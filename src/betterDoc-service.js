export class BetterDocService {
  async getArt(art) {
    try {
      let response = await fetch('https://api.betterdoctor.com/2016-03-01?doctor_uid&api_key=0814daadd41f7d22d4721315d9ed7c8d');
      let jsonifiedResponse = await response.json();
      return jsonifiedResponse;
    } catch(error) {
      console.error("The doctor is NOT in.....: " + error.message);


    }
  }
}
