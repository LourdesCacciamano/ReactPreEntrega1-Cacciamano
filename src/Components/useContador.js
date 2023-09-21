import {useState} from 'react'

const useContador = () => {
    const[contador, setContador] = useState(0);

    const sumar=()=>{
        setContador(contador +1);
    }
    const restar=()=>{
        setContador(contador -1);
    }
  return [
    contador,
    sumar,
    restar
  ]
}

export default useContador