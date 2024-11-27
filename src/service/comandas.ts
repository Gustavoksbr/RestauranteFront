import { api } from "./api";
import { GetComandaPorMesaResponse } from "./utils/apiResponses";

export async function GetComandasPorMesa(idMesa:number|null): Promise<GetComandaPorMesaResponse[]> {
        const response = await api.get(`/mesa/${idMesa}/comanda`)
        console.log('GetComandasPorMesaFunction: ', response.data)
        return response.data
}

export async function PostComanda(mesaId: number | null) {
    await api.post(`/mesa/${mesaId}/comanda`)
    console.log(`Comanda criada na mesa ${mesaId}`)
    return
}

export async function DeleteComanda(comandaId: number) {
    await api.delete(`comanda/${comandaId}`)
    console.log(`Comanda apagada na mesa ${comandaId}`)
    return
}