import { useEffect, useState } from "react";
import { EGames, IGames } from "./@types/Games";
import "./App.css";
import { api } from "./services/axios";

export function App() {
  const [loading, setLoading] = useState(true);
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

  useEffect(() => {
    const getNumbers = async () => {
      try{
        setLoading(true);
        const { data } = await api(game).get("/");
        setLottery(data);
      }catch(err){
        console.log(err);
      }finally{
        setLoading(false)
      }
    };
    getNumbers();
  }, [game]);



  return (
    <main className="app">
      <div className={`app_header ${game}`}>
        <select name="lottery" id="lottery" className="select"
        onChange={(e) => setGame(e.target.value as EGames)}
        >
          {Object.keys(EGames).map((game) => {
            return <option key={game} value={game}>{game}</option>;
          })}
      
        </select>
        <div className="logo_container">
        <img src="/logo.svg" alt="Logo da Loteria" />
        <h1>{game}</h1>
        </div>
        <p className="mobile__date">Concurso Nº {lottery.concurso} - {lottery.data}</p>
        <p className="date">Concurso 
        <strong>{lottery.concurso} - {lottery.data}</strong>
        </p>
      </div>
      <div className="app_container">
        {loading ?  <div className="loading"> <p>Carregando...</p> </div> :
        <div className="number_container">
          {lottery.dezenas?.map((number) => {
            return (
              <span key={number} className="number">
                {number}
              </span>
            );
          })}
        </div>}
        <p>
          Este sorteio é meramente ilustrativo e não possui nenhuma ligação com
          a CAIXA.
        </p>
      </div>
      <p style={{
        position: 'absolute',
        bottom: 0,
      }}>
        Repo: <a href="https://github.com/linkzera/resultado-loterias">resultado-loterias</a> 
      </p>
    </main>
  );
}
