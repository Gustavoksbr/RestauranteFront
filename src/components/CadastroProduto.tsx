
export default function CadastroProduto() {
    return (

        <>
            <section className="operacoes-produto">
                <button>adicionar</button>
                <button>editar</button>
                <button>deletar</button>
                <button>salvar</button>
                <input type="text" placeholder="Digite o produto aqui..."/>
            </section>
            <section className="informacoes-produto">
                <section className="informacoes-descricao-produto">
                    <label htmlFor="descricao-produto">Descrição</label>
                    <input type="text" id="descricao-produto"/>
                </section>
                <section className="informacoes-prec-cat-produto">
                    <section className="informacoes-preco-produto">
                        <label htmlFor="preco-produto">Preço</label>
                        <input type="text" placeholder="0,00"/>
                    </section>
                    <section className="informacoes-categoria-produto">
                        <label htmlFor="categoria-produto">Categoria</label>
                        <input type="text" placeholder="Bebida"/>
                    </section>
                </section>
            </section>
        </>

    )
}