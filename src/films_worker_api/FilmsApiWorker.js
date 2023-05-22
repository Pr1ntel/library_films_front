import axios from "axios";

class FilmsApiWorker {
    #axios;

    constructor() {
        this.#axios = axios.create({
            baseURL: "http://localhost:8080/api/v1/secure"
        });
    }

    async getAllFilms() {
        return await this.#axios.get("/all-films");
    }

    async addNewFilm(filmsItem) {
        return await this.#axios.post("/add-films", filmsItem);
    }

}

export default FilmsApiWorker;