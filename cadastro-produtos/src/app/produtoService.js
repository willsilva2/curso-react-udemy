const PRODUTOS = '_PRODUTOS'

export function ErroValidacao(errors) {
    this.errors = errors;
}

export default class ProdutoService {  
    
    validar = (produto) => {
        const errors = [];

        if(!produto.nome) {
            errors.push('O campo "Nome" é obrigatório.');
        }

        if(!produto.sku) {
            errors.push('O campo "SKU" é obrigatório.');
        }

        if( !produto.preco || produto.preco <=0 ) {
            errors.push('O campo "Preço" deve ter um valor maior que zero.');
        }

        if(!produto.fornecedor) {
            errors.push('O campo "Fornecedor" é obrigatório');
        }

        if(errors.length > 0) {
            throw new ErroValidacao(errors);
        }
    }

    obterProdutos = () => {
        let produtos = localStorage.getItem(PRODUTOS);

        if(!produtos) {
            produtos = '[]';
        }
        
        return JSON.parse(produtos);
    }

    obterIndice = (sku) => {
        let indiceProduto = null;
        let produtos = this.obterProdutos();
        produtos.forEach( (produto, indice) => {
            if(produto.sku == sku) {
                indiceProduto = indice;
                return false;
            }
        });

        return indiceProduto;
    }

    salvar = (produto) => {
        this.validar(produto);
        
        let produtos = localStorage.getItem(PRODUTOS);
        
        if(!produtos) {
            produtos = [];
        }
        else {
            produtos = JSON.parse(produtos);
        }

        const indiceProduto = this.obterIndice(produto.sku);
        console.log('indiceProduto', indiceProduto);

        if(indiceProduto === null) {
            console.log('passou');
            produtos.push(produto);
        }
        else {
            produtos[indiceProduto] = produto;
        }

        localStorage.setItem( PRODUTOS, JSON.stringify(produtos) );
    }    
}