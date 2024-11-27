import { api } from "./api";
import { GetComandaPorMesaResponse } from "./utils/apiResponses";

export async function GetComandasPorMesa(idMesa:number|null): Promise<GetComandaPorMesaResponse[]> {
        const response = await api.get(`/mesa/${idMesa}/comanda`)
        console.log('GetComandasPorMesaFunction: ', response.data)
        return response.data
}