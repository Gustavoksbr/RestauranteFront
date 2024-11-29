import { api } from "./api";
import { GetItensByComandaIdResponse } from "./utils/apiResponses";

const token = localStorage.getItem('token')

export async function getItensByComandaId(comandaId: number): Promise<GetItensByComandaIdResponse[]> {
    const response = await api.get(`/comanda/${comandaId}/itemcomanda`,
    {
        headers: {
        'Authorization': `Bearer ${token}` 
    }})
    return response.data
}