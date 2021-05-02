import React from 'react';
import { withRouter } from 'react-router';
import ProdutoService from '../../app/produtoService';

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

    render() {
        return (
            <div className="card">
                <div className="card-header">
                    Consulta Produtos
                </div>
                <div className="card-body">
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
                            
                            {this.state.produtos.map( (produto, index) => {                        
                                return (                            
                                    <tr key={index}>
                                        <td>{produto.nome}</td>
                                        <td>{produto.sku}</td>
                                        <td>{produto.preco}</td>
                                        <td>{produto.fornecedor}</td>
                                        <td>
                                            <button className="btn btn-primary" onClick={ () => this.prepararEditar(produto.sku)}>Editar</button>
                                            <button className="btn btn-danger ml-1">Remover</button>
                                        </td>
                                    </tr>
                                )
                            })}                  
                            
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default withRouter(ConsultaProdutos);