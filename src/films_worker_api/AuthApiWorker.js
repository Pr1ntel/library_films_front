import axios from "axios";

class AuthApiWorker {
    #axios;

    constructor() {
        this.#axios = axios.create({
            baseURL: "http://localhost:8080/api/v1/auth"
        });
    }

    async authenticateUser(userCredentials) {
        return await this.#axios.post("/authenticate", userCredentials);
    }
    async registerUser(userCredentials) {
        return await this.#axios.post("/register",userCredentials);
    }
}

export default AuthApiWorker;