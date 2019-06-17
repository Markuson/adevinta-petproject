export default class Config {

    constructor(){
        this._config = {
            API_HOST: 'https://api.themoviedb.org/3',
            API_KEY: 'e5e254c2dafaa4fe3b75d8182eafb559'
        }
    }

    get(key){
        return this._config[key]
    }
}