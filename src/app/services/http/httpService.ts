import axios from 'axios';

class HttpService {
    
    async getAll() {
        try{
            const response = await axios.get('/api/v1/technologies');

            console.log(response);

            if(response)
                return response;
          }
          catch(error) {
            console.log(error);
          }
    }
}

export default new HttpService();