import api from ".";

export const make_inquiry =async data =>{
    try {
        const response =await api.post('post_inquiry', data);
        return response.data;
    } catch ({response: {data: {message}}}) {
        return {message}
    }
}