import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://complete-food-delivery-server.onrender.com'
})

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;
