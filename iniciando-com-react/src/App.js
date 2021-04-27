import React from 'react'

class App extends React.Component {

  state = {
    nome: ''
  }

  modificarNome = (event) => {    
    this.setState({
      nome: event.target.value
    })
  }

  criarComboBox = () => {
    const opcoes = ['SP','RJ']
    const comboBoxOpcoes = opcoes.map( opcao => <option>{opcao}</option> )

    return (
      <select>
        {comboBoxOpcoes}
      </select>
    )
  }

  render() {
    const MeuComboBox = () => this.criarComboBox()
    
    return (
      <>
        <input type="text" value={this.state.nome} onChange={this.modificarNome} />
        <h1>Hello {this.props.nome} sua idade é {this.props.idade} isso é um título.</h1>
        <h2>um subtítulo</h2>      
        <MeuComboBox/>
      </>
    )
  }
}

export default App;