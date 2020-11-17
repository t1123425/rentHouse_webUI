import _axios from "axios"

const axios = (baseURL) => {
    //建立一個自定義的axios
    const instance = _axios.create({
            baseURL: baseURL,
            timeout: 1000,
        });

     return instance;
}

export {axios};
export default axios();