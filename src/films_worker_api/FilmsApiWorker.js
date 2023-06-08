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

    async addNewFilm(filmsItemRequestDto, token) {
        return await this.#axios.post("/add-films", filmsItemRequestDto,token, {
            headers: {
                "Authorization": "Bearer " + token
            }
        });
    }


}

export default FilmsApiWorker;