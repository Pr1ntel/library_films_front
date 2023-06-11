import axios from "axios";

class FilmsApiWorker {
    #axios;

    constructor() {
        this.#axios = axios.create({
            baseURL: "http://localhost:8080/api/v1/secure"
        });
    }

    async getAllFilms(token) {
        return await this.#axios.get("/all-films", {
            headers: {
                "Authorization": "Bearer " + token
            }
        });
    }

    async addNewFilm(filmsItem, token) {
        return await this.#axios.post("/add-films", filmsItem, {
            headers: {
                "Authorization": "Bearer " + token
            }
        });
    }

    async deleteFilmByName(name, token) {
        return await this.#axios.delete("/delete-films", name, {
            headers: {
                "Authorization": "Bearer " + token
            }
        });
    }




}

export default FilmsApiWorker;