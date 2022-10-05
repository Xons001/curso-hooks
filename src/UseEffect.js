import { Component, useEffect, useState } from "react";

/* Custom Hook */
const useContador = (inicial) => {
  const [contador, setContador] = useState(inicial)
  const incrementar = () => {
    setContador(contador + 1)
  }

  return [contador, incrementar]
}

// const Interval = ({ contador }) => {
//   useEffect(() => {
//     // Hace que no se ejecute el intervalo hasta que no haya pasado 1000 milesimas de segundo, es decir, un segundo
//     const i = setInterval(() => console.log(contador), 1000)  
//     return () => clearInterval(i)  
//   }, [contador])
  
//   return (
//     <p>Intervalo</p>
//   )
// }

class Interval extends Component {
  
  intervalo = ''

  componentDidMount() {
    this.intervalo = setInterval(() => console.log(this.props.contador), 1000)
  }

  componentWillUnmount() {
    clearInterval(this.intervalo)
  }

  render() {
    return (
      <p>Intervalo</p>
    )
  }
}

/* Usando los hooks */
const UseEffect = () => {

  const [contador, incrementar] = useContador(0)

  // Cada vez que cambiar el valor de contador se inicia el useEffect
  useEffect(() => {
    document.title = contador
  }, [contador])
  // Si quieres que se actualice solo una vez cuando inicie la ventana pones []
  // Si quieres que se actualice cada vez que haya algun cambio en la pagina, no pones nada
  // Si quieres que se actualice cada vez que un useState cambie de valor [contador(useState)]


  return (
    <div>
      Contador: {contador}
      <button onClick={incrementar}>Incrementar</button>
      <Interval contador={contador} />
    </div>
  )
}

export default UseEffect;
