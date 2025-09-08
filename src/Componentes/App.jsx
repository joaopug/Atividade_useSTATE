
import Likes from "./Likes";
import ControleNota from "./ControleNota";
import Votacao from "./Votacao";
import Carrinho from "./Carrinho";
import ConversorTemperatura from "./ConversorTemperatura";
import Progresso from "./Progresso";

function App() {
  return (
    <>
      console.log('HMR test - meuComponente', Date.now())

      <Likes />
      <p>------------------------------------------------------------</p>
      <p>------------------------------------------------------------</p>
      <ControleNota />
      <p>------------------------------------------------------------</p>
      <p>------------------------------------------------------------</p>
      <Votacao />
      <p>------------------------------------------------------------</p>
      <p>------------------------------------------------------------</p>
      <Carrinho />
      <p>------------------------------------------------------------</p>
      <p>------------------------------------------------------------</p>
      <ConversorTemperatura />
      <p>------------------------------------------------------------</p>
      <p>------------------------------------------------------------</p>
      <Progresso />
      <div>
        <h1>TESTE</h1>
        <p>Um parágrafo</p>
        <button>Botão</button>
      </div>
    </>
  );
}

export default App;
