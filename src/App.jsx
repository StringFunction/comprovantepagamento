import { use, useEffect, useState } from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram, FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { ImYoutube2 } from "react-icons/im";

function App() {
  const [latitude, setLatitude] = useState(0)
  const [longitude, setLongitude] = useState(0)
  const [mostrarModal, setMostrarModal] = useState(true);
  const [isClicked, setIsClicked] = useState(false); // Estado que controla o clique
  const [Remetente, setRemetente] = useState(null)
  const [Destinatario, setDestinatario] = useState(null)
  const [Banco, setBanco] = useState(null)
  const [Id, setId] = useState(null)
  const [valor, setvalor] = useState(null)
  const [data_atual] = useState(new Date)  
  const dia = String(data_atual.getDate()).padStart(2, "0")
  const mes =  data_atual.getMonth()
  const ano =  data_atual.getFullYear()
  const hora = String(data_atual.getHours()).padStart(2, "0")
  const minuto = String(data_atual.getMinutes()).padStart(2, "0")
  const segundo = String(data_atual.getSeconds()).padStart(2, "0")
  console.log(hora);
  
  
const meses = {
  1: "Janeiro",
  2: "Fevereiro",
  3: "Março",
  4: "Abril",
  5: "Maio",
  6: "Junho",
  7: "Julho",
  8: "Agosto",
  9: "Setembro",
  10: "Outubro",
  11: "Novembro",
  12: "Dezembro"
};


  useEffect(() => {
    if (!navigator.permissions) {
      // Fallback se API não for suportada
      setMostrarModal(true);
      return;
    }
    Permisao()
  }, []);
  function Localizar(){

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
            Localizar()
          }
        );
      } else {
        alert('Geolocalização não suportada pelo seu navegador.');
      }
}

function Permisao() {

  console.log("TESTANDO PERMISSAO");
  
    navigator.permissions.query({ name: 'geolocation' }).then((result) => {
        if (result.state === 'granted') {
          // Já tem permissão, pega direto
          Localizar()
        } else if (result.state === 'prompt') {
          // Precisa pedir permissão
          setMostrarModal(true);
        } else {
          // Negado
          alert('Permissão de localização negada. Ative nas configurações do navegador.');
          Localizar()


        }
    })

}




  const handleClick = () => {
    setIsClicked(true); // Força a reexecução do useEffect
  };

  // Sempre que clicar, tenta obter a localização
  useEffect(() => {
    if (isClicked) {
      Localizar();
      setIsClicked(false); // Evita reexecução
    }
  }, [isClicked]);

  const minha = () => {
    window.location = `https://www.google.com/maps?q=${latitude},${longitude}`;
  };
  const camposecreto = () => {
    return  <div className={`w-[150px] h-[15px] mt-1   relative left-[570px]`}></div>
  
  };


  return (
    <>

{/* 
{mostrarModal && (
        <div  className="fixed inset-0 backdrop-blur-md bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl shadow-lg text-center max-w-sm">
            <h2 className="text-xl font-semibold mb-4">Permitir localização?</h2>
            <p className="mb-4 text-gray-700">
              Precisamos da sua localização para gerar o comprovante corretamente.
            </p>
            <div className="flex flex-col gap-2">
              <button
                className="bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700"   onClick={handleClick}
       
              >
                Permitir acesso
              </button>
            </div>
          </div>
        </div>
      )} */}

<div id='conteiner' className='font-boa2'>
    <div className="min-h-screen flex items-center justify-center bg-gray-100 ">
        <div className="bg-purple-700 text-white rounded-xl shadow-lg p-8  w-[600px] text-center">
        
    
          <h1 className="text-3xl font-bold tracking-widest mb-2">NUBANK</h1>
          <p className="text-lg font-medium">Comprovante de Transferência</p>

          <div className="my-6">
            <p className="text-sm text-gray-200">Valor transferido</p>
            {valor ?  <p className="text-3xl font-bold text-white">{valor}</p>  : camposecreto()}
        
          </div>
          <p className="text-sm text-gray-200">{dia} de {meses[mes]} de {ano} às {hora}:{minuto}:{segundo}</p>

        
          <div className="border-t border-purple-300 my-6"></div>

        
          <div className=" text-sm text-gray-100 space-y-2">
            <p><strong>Remetente:</strong>{Remetente ? Remetente : camposecreto()}</p>
            <p><strong>Destinatário:</strong> {Destinatario ? Destinatario : camposecreto()}</p>
            <p><strong>Banco:</strong> {Banco ? Banco : camposecreto()}</p>
            <p><strong>Tipo:</strong> Transferência PIX</p>
            <p><strong>ID Transação:</strong> {Id ? Id : camposecreto()}</p>
          </div>
        </div>
    </div>
</div>
    <div><button className='border bg-lime-500 p-6' onClick={minha}>Minha localização</button></div>
     <footer className="bg-black text-white px-6 py-10 font-boa">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        
        {/* Coluna 1 - Transparência */}
        <div>
          <h3 className="font-semibold mb-4 text-gray-400">Transparência</h3>
          <ul className="space-y-2 text-sm">
            <li>Política de privacidade</li>
            <li>Política de segurança</li>
            <li>Termos de Uso</li>
            <li>Ética, Compliance e ESG</li>
            <li>Contratos</li>
            <li>Sobre investimentos</li>
            <li>Relatórios financeiros</li>
            <li>Convenção de Boletos</li>
            <li>PLD/CFTP</li>
            <li>Dados abertos</li>
          </ul>
        </div>

        {/* Coluna 2 - Fornecedores e Imprensa */}
        <div>
          <h3 className="font-semibold mb-4 text-gray-400">Fornecedores</h3>
          <p className="mb-4 font-bold">Seja um fornecedor</p>
          <h3 className="font-semibold mb-4 text-gray-400">Imprensa</h3>
          <p className="font-bold">Sala de Imprensa</p>
        </div>

        {/* Coluna 3 - Contato */}
        <div>
          <h3 className="font-semibold mb-4 text-gray-400">Fale com a gente</h3>
          <p className="text-sm text-gray-400">Capitais e regiões metropolitanas</p>
          <p className="font-bold mb-2">4020 0185</p>
          <p className="text-sm text-gray-400">Demais localidades</p>
          <p className="font-bold">0800 591 2117</p>
        </div>
      </div>

      {/* Linha de ícones sociais e informações finais */}
      <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row md:justify-between items-center text-sm text-gray-400 space-y-4 md:space-y-0">
        {/* Logo + Texto */}
        <div className="flex items-center space-x-4">
          <span className="text-white text-3xl font-bold">nu</span>
          <span>© 2025 Nu Pagamentos S.A - Instituição de Pagamento. 18.236.120/0001-58. Rua Capote Valente, 39 - São Paulo, SP - 05409-000</span>
        </div>

        {/* Ícones de redes sociais */}
        <div className="flex items-center space-x-4">
          <FaLinkedin className="w-6 h-6"></FaLinkedin >
          <ImYoutube2 className="w-6 h-6"></ImYoutube2 >
          <FaFacebook className="w-6 h-6"></FaFacebook >
          <FaInstagram className="w-6 h-6"></FaInstagram>
          <FaXTwitter className="w-6 h-6"></FaXTwitter>

        </div>
      </div>
    </footer>
    </>
  )
}

export default App
