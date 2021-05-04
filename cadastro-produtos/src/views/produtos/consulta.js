import React from 'react';
import { withRouter } from 'react-router';
import ProdutoService from '../../app/produtoService';
import Card from '../../components/card';
import ProdutosTable from './produtosTable';

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
                <ProdutosTable 
                    produtos={this.state.produtos} 
                    prepararEditar={this.prepararEditar} 
                    excluir={this.excluir}
                />
            </Card>
        )
    }
}

export default withRouter(ConsultaProdutos);