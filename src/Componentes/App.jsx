import "../App.css";
import Likes from "./Likes";
import ControleNota from "./ControleNota";
import Votacao from "./Votacao";
import Carrinho from "./Carrinho";
import ConversorTemperatura from "./ConversorTemperatura";

function App() {
  return (
    <>
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
    </>
  );
}

export default App;
