import {API_URL} from "../env/config";

// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Host': 'magic-aliexpress1.p.rapidapi.com',
// 		'X-RapidAPI-Key': '5ce72fcc3bmshb9f82ff04cc2c4dp11ec1cjsnffba98ee069f'
// 	}
// };

  export const baseService = {
    get: async (url) => {
        let response = [];
        await fetch(API_URL+url, {
            headers: {
                'X-RapidAPI-Host': 'sephora.p.rapidapi.com',
                'X-RapidAPI-Key': '0c4901aa99msh829c803e24daa91p106d45jsnb18e5c5a071e'
            }
        })
            .then((res) => res.json())
            .then((data) => {
                response = data
            })
        return response;
    }
  }