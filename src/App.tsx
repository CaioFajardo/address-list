import { useState } from "react";
import "./App.css";

function App() {
  const [rua, setRua] = useState("");
  const [numero, setNumero] = useState("");
  const [bairro, setBairro] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const endereco = {
      rua,
      numero,
      bairro,
      cidade,
      estado,
    };

    console.log(endereco);

    // limpeza do formulário
    setRua("");
    setNumero("");
    setBairro("");
    setCidade("");
    setEstado("");
  };

  return (
    <div className="container">
      <h1>Lista de Endereços</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Rua"
          value={rua}
          onChange={(e) => setRua(e.target.value)}
        />

        <input
          type="text"
          placeholder="Número"
          value={numero}
          onChange={(e) => setNumero(e.target.value)}
        />

        <input
          type="text"
          placeholder="Bairro"
          value={bairro}
          onChange={(e) => setBairro(e.target.value)}
        />

        <input
          type="text"
          placeholder="Cidade"
          value={cidade}
          onChange={(e) => setCidade(e.target.value)}
        />

        <input
          type="text"
          placeholder="Estado"
          value={estado}
          onChange={(e) => setEstado(e.target.value)}
        />

        <button type="submit">Cadastrar endereço</button>
      </form>
    </div>
  );
}

export default App;
