export enum EGames {
  "mega-sena" = "mega-sena",
  "lotofacil" = "lotofacil",
  "quina" = "quina",
  "lotomania" = "lotomania",
  "timemania" = "timemania",
  "dupla-sena" = "dupla-sena",
  "loteria-federal" = "loteria-federal",
  "dia-de-sorte" = "dia-de-sorte",
  "super-sete" = "super-sete",
}

export interface Premiacao {
  acertos: string;
  vencedores: number;
  premio: string;
}

export interface Cidade {
  cidade: string;
  vencedores: string;
  latitude: string;
  longitude: string;
}

export interface EstadosPremiado {
  nome: string;
  uf: string;
  vencedores: string;
  latitude: string;
  longitude: string;
  cidades: Cidade[];
}

export interface IGames {
  loteria: string;
  nome: string;
  concurso: number;
  data: string;
  local: string;
  dezenas: string[];
  premiacoes: Premiacao[];
  estadosPremiados: EstadosPremiado[];
  acumulou: boolean;
  acumuladaProxConcurso: string;
  dataProxConcurso: string;
  proxConcurso: number;
  timeCoracao?: any;
  mesSorte?: any;
}