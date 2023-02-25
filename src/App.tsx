import { useEffect, useState } from "react";
import { EGames, IGames } from "./@types/Games";
import "./App.css";
import lotoImg from "./assets/Logo_sena.svg";
import { api } from "./services/axios";

export function App() {
  const [game, setGame] = useState<EGames>(EGames["mega-sena"]);
  const [lottery, setLottery] = useState<IGames>({
    loteria: "mega-sena",
    nome: "Mega Sena",
    concurso: 2567,
    data: "23/02/2023",
    local: "ESPAÇODASORTE em SÃOPAULO,SP",
    dezenas: ["10", "11", "19", "33", "58", "60"],
    premiacoes: [
      {
        acertos: "Sena",
        vencedores: 1,
        premio: "8.548.140,96",
      },
      {
        acertos: "Quina",
        vencedores: 103,
        premio: "23.886,63",
      },
      {
        acertos: "Quadra",
        vencedores: 5786,
        premio: "607,45",
      },
    ],
    estadosPremiados: [
      {
        nome: "Distrito Federal",
        uf: "DF",
        vencedores: "1",
        latitude: "-15.7997654",
        longitude: "-47.8644715",
        cidades: [
          {
            cidade: "Brasília",
            vencedores: "1",
            latitude: "-15.826691",
            longitude: "-47.92182039999999",
          },
        ],
      },
    ],
    acumulou: false,
    acumuladaProxConcurso: "R$ 3 Milhões",
    dataProxConcurso: "25/02/2023",
    proxConcurso: 2568,
    timeCoracao: null,
    mesSorte: null,
  } as IGames);

  // useEffect(() => {
  //   const getNumbers = async () => {
  //     // const { data } = await api(EGames["mega-sena"]).get("/");
  //     console.log(data);
  //     setLottery(data);
  //   };
  //   getNumbers();
  // }, []);

  useEffect(() => {
    console.log(game);
  }, [game]);

  return (
    <main className="app">
      <div className="app_header">
        <select name="lottery" id="lottery" className="select"
        onChange={(e) => setGame(e.target.value as EGames)}
        >
          {Object.keys(EGames).map((game) => {
            return <option key={game} value={game}>{game}</option>;
          })}
      
        </select>
        <img src={lotoImg} alt="Logo da Loteria" />
        <h1>Mega-sena</h1>
        <p>Concurso Nº {lottery.concurso}</p>
      </div>
      <div className="app_container">
        <div className="number_container">
          {lottery.dezenas?.map((number) => {
            return (
              <span key={number} className="number">
                {number}
              </span>
            );
          })}
        </div>
        <p>
          Este sorteio é meramente ilustrativo e não possui nenhuma ligação com
          a CAIXA.
        </p>
      </div>
    </main>
  );
}