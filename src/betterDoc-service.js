export class BetterDocService {
  async getDoc(doctor) {
    try {
      let response = await fetch('https://api.betterdoctor.com/2016-03-01/doctors?location=37.773,-122.413,100&skip=2&limit=10&user_key=0814daadd41f7d22d4721315d9ed7c8d', {
      }
  );
  let jsonifiedResponse = await response.json();
  console.log(response);
  return jsonifiedResponse;
} catch(error) {
  console.error("The doctor is NOT in.....: " + error.message);


    }
  }
}
