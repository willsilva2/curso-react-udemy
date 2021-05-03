import React from 'react';
import { withRouter } from 'react-router';
import ProdutoService from '../../app/produtoService';

const estadoInicial = {
    nome: '',
    sku: '',
    descricao: '',
    preco: 0,
    fornecedor: '',
    sucesso: false, 
    errors: [],
    atualizando: false
}

class CadastroProduto extends React.Component {

    state = estadoInicial;

    constructor() {
        super();
        this.service = new ProdutoService();
    }

    onChange = (event) => {
        const valor = event.target.value;
        const nomeCampo = event.target.name;
        this.setState({ [nomeCampo]: valor })
    }

    onSubmit = (event) => {
        const produto = {
            nome: this.state.nome,
            sku: this.state.sku,
            descricao: this.state.descricao,
            preco: this.state.preco,
            fornecedor: this.state.fornecedor
        }

        try {
            this.service.salvar(produto);
            this.limparCampos();
            this.setState({sucesso: true});            
        } 
        catch (error) {                                    
            this.setState({errors: error.errors})
        }
    }

    limparCampos = () => {
        this.setState(estadoInicial);
    }

    componentDidMount() {
        const sku = this.props.match.params.sku;

        if(sku) {
            let produtos = this.service.obterProdutos();
            produtos = produtos.filter( produto => produto.sku === sku );

            if(produtos.length > 0) {
                const produto = produtos[0];
                // ...pega as propriedades iguais e atualiza
                this.setState({ ...produto, atualizando: true });
            }
        }
    }

    render() {
        return(
            <div className="card">
                <div className="card-header">
                    {this.state.attualizando ? 'Atualização ' : 'Cadastro '}
                    de Produto
                </div>
                <div className="card-body">

                    { this.state.sucesso &&

                        <div className="alert alert-dismissible alert-success">
                            <button type="button" className="close" data-dismiss="alert">&times;</button>
                            <strong>Sucesso!</strong> Registrado com êxito.
                        </div>

                    }

                    { this.state.errors.length > 0 &&

                        this.state.errors.map( (mensagem, index) => {
                            return (
                                <div key={index} className="alert alert-dismissible alert-danger" >
                                    <button type="button" className="close" data-dismiss="alert">&times;</button>
                                    <strong>Oops!</strong> {mensagem}
                                </div>
                            )
                        })
                    }

                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Nome: *</label>
                                <input type="text" name="nome" className="form-control" value={this.state.nome} onChange={this.onChange} />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>SKU: *</label>
                                <input type="text" name="sku" className="form-control" value={this.state.sku} onChange={this.onChange} disabled={this.state.atualizando} />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="form-group">
                                <label>Descrição:</label>
                                <textarea name="descricao" className="form-control" value={this.state.descricao} onChange={this.onChange} />
                            </div>
                        </div>                        
                    </div>

                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Preço: *</label>
                                <input type="text" name="preco" className="form-control" value={this.state.preco} onChange={this.onChange} />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Fornecedor: *</label>
                                <input type="text" name="fornecedor" className="form-control" value={this.state.fornecedor} onChange={this.onChange} />
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12">
                            <button className="btn btn-success" onClick={this.onSubmit} >{ this.state.atualizando ? 'Atualizar' : 'Salvar' }</button>
                            <button className="btn btn-info ml-1" onClick={this.limparCampos}>Limpar</button>
                        </div>                        
                    </div>

                </div>
            </div>
        )
    }
}

export default withRouter(CadastroProduto);