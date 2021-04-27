import React from 'react'

function App (props) {

  const modificarNome = event => {
    console.log(event.target.value);
  }

  const criarComboBox = () => {
    const opcoes = ['SP','RJ']
    const comboBoxOpcoes = opcoes.map( opcao => <option>{opcao}</option> )

    return (
      <select>
        {comboBoxOpcoes}
      </select>
    )
  }
  
  const MeuComboBox = () => criarComboBox()
  
  return (
    <>
      <input type="text" value={props.nome} onChange={modificarNome} />
      <h1 className="texto-rosa">Hello {props.nome} sua idade é {props.idade} isso é um título.</h1>
      <h2>um subtítulo</h2>      
      <MeuComboBox/>
    </>
  )
  
}

export default App;