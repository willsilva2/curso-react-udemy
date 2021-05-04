import React from 'react';
import { withRouter } from 'react-router';
import ProdutoService from '../../app/produtoService';
import Card from '../../components/card';

class ConsultaProdutos extends React.Component {

    state = {
        produtos: []
    }

    constructor(){
        super();
        this.service = new ProdutoService();
    }

    componentDidMount() {
        const produtos = this.service.obterProdutos();
        //equivale a produtos: produtos
        this.setState({ produtos });        
    }

    prepararEditar = (sku) => {        
        //exatamente igual a isso: this.props.history.push('/cadastro-produtos/' + sku); 
        //outra forma de concatenar
        this.props.history.push(`/cadastro-produtos/${sku}`);        
    }

    excluir = (sku) => {
        const produtos = this.service.excluir(sku);
        this.setState({produtos});
    }

    render() {
        return (
            <Card header="Consulta Produtos">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>SKU</th>
                            <th>Preço</th>
                            <th>Fornecedor</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>  
                        
                        { this.state.produtos.map( (produto, index) => {                        
                            return (                            
                                <tr key={index}>
                                    <td>{produto.nome}</td>
                                    <td>{produto.sku}</td>
                                    <td>{produto.preco}</td>
                                    <td>{produto.fornecedor}</td>
                                    <td>
                                        <button className="btn btn-primary" onClick={ () => this.prepararEditar(produto.sku) }>Editar</button>
                                        <button className="btn btn-danger ml-1" onClick={ () => this.excluir(produto.sku) }>Remover</button>
                                    </td>
                                </tr>
                            )
                        })}                  
                        
                    </tbody>
                </table>                
            </Card>
        )
    }
}

export default withRouter(ConsultaProdutos);