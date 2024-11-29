import { api } from "./api";
import { GetProdutosResponse } from "./utils/apiResponses";


export async function GetProdutos() : Promise<GetProdutosResponse[]>{
    const response = await api.get('/produtos')
    return response.data
}