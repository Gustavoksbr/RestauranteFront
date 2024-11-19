import { api } from "./api";
import { GetMesasResponse } from "./utils/apiResponses";

export async function getMesas(): Promise<GetMesasResponse[]> {
        const response = await api.get('/mesa')
        console.log('GetMesasFunction: ', response.data)
        return response.data
}