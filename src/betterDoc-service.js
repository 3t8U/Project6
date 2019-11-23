export class BetterDocService {
  async get(url,) {
    try {
      let response = await fetch(url)

  let jsonifiedResponse = await response.json();
  console.log(response);
  return jsonifiedResponse;
} catch(error) {
  console.error("The doctor is NOT in.....: " + error.message)

    }
  }
}


  class SearchDoctor {
constructor (docSearch) {
this.docSearch = input().val

}
 }

// 'https://api.betterdoctor.com/2016-03-01/doctors?location=37.773,-122.413,100&skip=2&limit=10&user_key=0814daadd41f7d22d4721315d9ed7c8d',
