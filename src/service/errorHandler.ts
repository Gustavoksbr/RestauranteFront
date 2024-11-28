export function handleError(error: any): string {
    if (error.response && error.response.data) {
        // Retorna diretamente a mensagem do back-end, se disponível
        return error.response.data.message || error.response.data || 'Erro desconhecido.'
    } else if (error.request) {
        // Erros relacionados à comunicação com o servidor
        return 'Falha ao se conectar ao servidor.'
    } else {
        // Outros erros
        return error.message || 'Ocorreu um erro inesperado.'
    }
}
