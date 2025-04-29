import { useEffect, useState } from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram, FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { ImYoutube2 } from "react-icons/im";

function App() {
  const [count, setCount] = useState(0)
  const [latitude, setLatitude] = useState(0)
  const [longitude, setLongitude] = useState(0)
  useEffect(()=>{
    const geo = navigator.geolocation
    geo.getCurrentPosition(
      (position) => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
      },
      (error) => {
        console.error("Erro ao obter localização:", error);
      }
    );
  })
  console.log(`https://www.google.com/maps?q=${latitude},${longitude}`);
  
  return (
    <>
<div id='conteiner' className='font-boa2'>
    <div class="min-h-screen flex items-center justify-center bg-gray-100 ">
        <div class="bg-purple-700 text-white rounded-xl shadow-lg p-8  w-full text-center">
        
    
          <h1 class="text-3xl font-bold tracking-widest mb-2">NUBANK</h1>
          <p class="text-lg font-medium">Comprovante de Transferência</p>

          <div class="my-6">
            <p class="text-sm text-gray-200">Valor transferido</p>
            <p class="text-3xl font-bold text-white">R$ 1.000,00</p>
          </div>

          <p class="text-sm text-gray-200">29 de Abril de 2025 às 15:36:40</p>

        
          <div class="border-t border-purple-300 my-6"></div>

        
          <div class=" text-sm text-gray-100 space-y-2">
            <p><strong>Remetente:</strong> João da Silva</p>
            <p><strong>Destinatário:</strong> Maria Oliveira</p>
            <p><strong>Banco:</strong> 260 - Nu Pagamentos S.A</p>
            <p><strong>Tipo:</strong> Transferência PIX</p>
            <p><strong>ID Transação:</strong> 5a9f2c3d7e8a1</p>
          </div>
        </div>
    </div>
</div>

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
