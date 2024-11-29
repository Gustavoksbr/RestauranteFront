import { api } from "./api";
import { GetMesasResponse } from "./utils/apiResponses";

export async function getMesas(): Promise<GetMesasResponse[]> {
    let token = localStorage.getItem('token')
    const response = await api.get('/mesa', {
        headers: {
            'Authorization': `Bearer ${token}` 
        }
    });

    console.log('GetMesasFunction: ', response.data);
    return response.data;
}
