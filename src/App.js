import { useRef } from "react";

const App = () => {

  const ref = useRef()

  // El ref hace que puedas acceder a los elementos de html o css del div
  const click = () => {
    console.log(ref.current.clientHeight);
    ref.current.innerHTML = 'Chanchito feliz'
  }

  const inputRef = useRef()

  const focus = () => {
    inputRef.current.focus()
  }

  return (
    <div>
      <input ref={inputRef} />
      {/* Cuando pulsamos el boton se selecciona el input */}
      <button onClick={focus} >Focus</button>
      {/* Cuando pulsamos el div se cambia su contenido escrito en html */}
      <div onClick={click} ref={ref} >Lala</div>
    </div>
  )
}

export default App