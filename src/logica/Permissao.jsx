import { ContextApp } from "../context/context";
import { useContext } from "react";
import Localizar from "./Localizar";


export function Permisao() {
  const {setMostrarModal}= useContext(ContextApp)
  console.log("TESTANDO PERMISSAO");
  
    navigator.permissions.query({ name: 'geolocation' }).then((result) => {
        if (result.state === 'granted') {
          // Já tem permissão, pega direto
        <Localizar></Localizar>
        } else if (result.state === 'prompt') {
          // Precisa pedir permissão
          setMostrarModal(true);
        } else {
          // Negado
          alert('Permissão de localização negada. Ative nas configurações do navegador.');


        }
    })

}

