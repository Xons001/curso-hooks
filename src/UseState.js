import { Component, useState } from "react";

// Reglas de los hooks:
// no se llaman en loops, ni condiciones, ni while ni nada
// siempre en el nivel mas alto del componente
// Solo se llaman en 2 partes:
// Componentes de react
// custom hooks
// cuando creemos un custom hook use*

/* Es lo mismo pero haciendo una clase en vez de usar los hooks */
// class App extends Component{

//   state = { contador: 0 }

//   incrementar = () => {
//     this.setState({ contador: this.state.contador +1 })
//   }

//   render () {
//     return (
//       <div>
//         contador: {this.state.contador}
//         <button onClick={this.incrementar}>Incrementar</button>
//       </div>
//     )
//   }
// }

/* Custom Hook */
const useContador = (inicial) => {
  const [contador, setContador] = useState(inicial)
  const incrementar = () => {
    setContador(contador + 1)
  }

  return [contador, incrementar]
}

/* Usando los hooks */
const UseState = () => {

  const [contador, incrementar] = useContador(0)

  // const [contador, setContador] = useState(0)
  // const incrementar = () => {
  //   setContador(contador + 1)
  // }

  return (
    <div>
      Contador: {contador}
      <button onClick={incrementar}>Incrementar</button>
    </div>
  )
}

export default UseState;
