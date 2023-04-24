import React from "react";

const ListaFarm = () => {
  const listaFarm = JSON.parse(localStorage.getItem("listaFarmacias")) || [];

  return (
    <div className="flex bg-slate-200 mx gap-4">
      <ul>
        {listaFarm.map((farmacia) => {
          console.log(farmacia);
          return (
            <li key={farmacia.cnpj} className="flex flex-col m-10">
              <h5 className="font-bold text-green">
                {farmacia.nomeFantasia} ({farmacia.razaoSocial})
              </h5>
              <p>
                {" "}
                Endereço: {farmacia.logradouro}, {farmacia.numero},{" "}
                {farmacia.complemento} {farmacia.bairro}, {farmacia.cidade},{" "}
                {farmacia.estado}, CEP: {farmacia.cep}
              </p>
              <p>Celular: {farmacia.celular}</p>
              <p>Email: {farmacia.email}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ListaFarm;
