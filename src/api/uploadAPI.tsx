import { stringify } from "querystring";
import axiosClient from "./axiosAPI";

const uploadAPI = {
    uploadFileImage: async (file: any) => {
        let url = '/upload';
        const headers = {
            "Content-Type": ["multipart/form-data", "boundary=something"]
        }
        const data = await axiosClient.post(url, { file }, {headers});
        return data;
    }
};

export default uploadAPI;