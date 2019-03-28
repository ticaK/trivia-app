import ChuckClient from 'chucknorris-io';

export default class ChuckService {
    constructor() {
        this.client = new ChuckClient();
    }
    getRandomJoke(){
        return this.client.getRandomJoke();
    }
}


export const chuckService = new ChuckService();


