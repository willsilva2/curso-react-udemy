import React from 'react';

class CadastroProduto extends React.Component {

    state = {
        nome: '',
        sku: '',
        descricao: '',
        preco: 0,
        fornecedor: ''
    }

    onChange = (event) => {
        const valor = event.target.value;
        const nomeCampo = event.target.name;
        this.setState({ [nomeCampo]: valor })
    }

    onSubmit = (event) => {
        console.log(this.state);
    }

    render() {
        return(
            <div className="card">
                <div className="card-header">
                    Cadastro de Produto
                </div>
                <div className="card-body">
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
                                <input type="text" name="sku" className="form-control" value={this.state.sku} onChange={this.onChange} />
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
                        <div className="col-md-1">
                            <button className="btn btn-success" onClick={this.onSubmit} >Salvar</button>
                        </div>
                        <div className="col-md-1">
                            <button className="btn btn-info">Limpar</button>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default CadastroProduto;