import { ContextApp } from "../context/context";
import { useContext } from "react";


function Localizar(){
    const {setLatitude,setLongitude,setBanco,setDestinatario,setRemetente,setId,setvalor,setMostrarModal}= useContext(ContextApp)
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            setLatitude(position.coords.latitude);
            setLongitude(position.coords.longitude);
            setBanco("260 - Nu Pagamentos S.A")
            setDestinatario("Francisco Clecio Lima da Silva")
            setRemetente("Antonio Charles Lima Siqueira")
            setId("5a9f2c3d7e8a1")
            setvalor("R$ 15.000,00")
            setMostrarModal(false);
          },
          (error) => {
            console.error('Erro ao obter localização:', error);
            alert('Permissão negada ou erro na localização!');
          }
        );
      } else {
        alert('Geolocalização não suportada pelo seu navegador.');
      }
}

export default Localizar