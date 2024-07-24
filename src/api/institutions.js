import api from ".";

export const register_institution =async data =>{
    try {
        const response =await api.post('post_instituition', data);
        return response.data;
    } catch ({response: {data: {message}}}) {
        return {message}
    }
}