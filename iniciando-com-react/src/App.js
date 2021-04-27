import React from 'react'

class App extends React.Component {

  state = {
    nome: 'Will Silva'
  }

  modificarNome = (event) => {    
    this.setState({
      nome: event.target.value
    })
  }

  render() {
    return (
      <>
        <input type="text" value={this.state.nome} onChange={this.modificarNome} />
        <h1>Hello {this.state.nome}, isso é um título.</h1>
        <h2>um subtítulo</h2>      
      </>
    )
  }
}

export default App;