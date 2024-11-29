export interface GetMesasResponse {
    id: number,
    quantidadeComandas: number
}

export interface GetComandaPorMesaResponse {
    id: number,
    total: number,
}

export interface GetItensByComandaIdResponse {
    nomeProduto : string
    precoUnitario: number
    quantidade: number
    precoTotal: number
}

export interface GetProdutosResponse {
    nome : string,
    categoria : string,
    precoUnitario: number,
}