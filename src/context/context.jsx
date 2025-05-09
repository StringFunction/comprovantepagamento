import { createContext, useState } from "react";

const ContextApp = createContext();

const ContextProvider = ({ children }) => {
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [mostrarModal, setMostrarModal] = useState(true);
  const [isClicked, setIsClicked] = useState(false);
  const [Remetente, setRemetente] = useState(null);
  const [Destinatario, setDestinatario] = useState(null);
  const [Banco, setBanco] = useState(null);
  const [Id, setId] = useState(null);
  const [valor, setvalor] = useState(null);
  console.log("Executando context");
  

  return (
    <ContextApp.Provider
      value={{
        latitude,
        setLatitude,
        longitude,
        setLongitude,
        mostrarModal,
        setMostrarModal,
        isClicked,
        setIsClicked,
        Remetente,
        setRemetente,
        Destinatario,
        setDestinatario,
        Banco,
        setBanco,
        Id,
        setId,
        valor,
        setvalor,
      }}
    >
      {children}
    </ContextApp.Provider>
  );
};

export  {ContextApp, ContextProvider};