import axios from 'axios';

class HttpService {
    private readonly _baseUrl: string = '/api/v1/';

    public async getList<T>(uri: string): Promise<T> {
        let data: any = [];

        try{
            const response = await axios.get(this._baseUrl + uri);

            if(response)
                data = response.data[uri];
          }
          catch(error) {
            console.log(error);
          }

        return data;
    }

    public async get<T>(uri: string, id: number): Promise<T> {
        let data: any = {};

        try{
            const response = await axios.get(this._baseUrl + uri + '/' + id);

            if(response)
                data = response.data;
          }
          catch(error) {
            console.log(error);
          }

        return data;
    }
}

export default new HttpService();