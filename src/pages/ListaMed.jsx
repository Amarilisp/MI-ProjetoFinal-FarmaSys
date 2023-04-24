import React from "react";

const ListaMed = () => {
  const listaFarm = JSON.parse(localStorage.getItem("listaMedicamentos")) || [];

  return (
    <div className="flex  bg-slate-200 mx gap-4">
      <ul>
        {listaFarm.map((medicamentos) => {
          console.log(medicamentos);
          return (
            <li key={medicamentos.nome} className="flex flex-col m-10">
              <h3 className="font-bold text-green-600">
                {medicamentos.nome} ({medicamentos.laboratorio})
              </h3>
              <p>
                {" "}
                Informações: {medicamentos.preço}, {medicamentos.dosagem},{" "}
                {medicamentos.descrição} {medicamentos.tipomed},
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ListaMed;
