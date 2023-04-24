import React, { useState } from "react";

const AdicionarMed = () => {
  const [nome, setNome] = useState("");
  const [laboratorio, setLaboratorio] = useState("");
  const [preco, setPreco] = useState("");
  const [dosagem, setDosagem] = useState("");
  const [descricao, setDescricao] = useState("");
  const [tipomed, setTipoMed] = useState("");

  const handleNomeChange = (event) => setNome(event.target.value);
  const handleLaboratorioChange = (event) => setLaboratorio(event.target.value);
  const handlePrecoChange = (event) => setPreco(event.target.value);
  const handleDosagemChange = (event) => setDosagem(event.target.value);
  const handleDescricaoChange = (event) => setDescricao(event.target.value);
  const handleTipoMedChange = (event) => setTipoMed(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();

    const novoMed = {
      nome,
      laboratorio,
      preco,
      dosagem,
      descricao,
      tipomed,
    };

    const listaMed =
      JSON.parse(localStorage.getItem("listaMedicamentos")) || [];
    listaMed.push(novoMed);
    localStorage.setItem("listaMedicamentos", JSON.stringify(listaMed));

    setNome("");
    setLaboratorio("");
    setPreco("");
    setDosagem("");
    setDescricao("");
    setTipoMed("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col mx-auto max-w-md">
      <label className="mt-4">
        Nome:
        <input type="text" value={nome} onChange={handleNomeChange} required />
      </label>
      <label className="mt-4">
        Laboratório:
        <input
          type="text"
          value={laboratorio}
          onChange={handleLaboratorioChange}
          required
        />
      </label>
      <label className="mt-4">
        Preço:
        <input
          type="number"
          value={preco}
          onChange={handlePrecoChange}
          required
        />
      </label>
      <label className="mt-4">
        Dosagem:
        <input
          type="text"
          value={dosagem}
          onChange={handleDosagemChange}
          required
        />
      </label>
      <label className="mt-4">
        Descrição:
        <textarea value={descricao} onChange={handleDescricaoChange} required />
      </label>
      <label className="mt-4">
        Tipo de medicamento:
        <input
          type="text"
          value={tipomed}
          onChange={handleTipoMedChange}
          required
        />
      </label>
      <button
        type="submit"
        className="mt-4 bg-green-500 text-white px-4 py-2 rounded"
      >
        Adicionar
      </button>
    </form>
  );
};

export default AdicionarMed;
