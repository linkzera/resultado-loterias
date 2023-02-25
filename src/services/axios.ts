import axios from "axios";
import { EGames } from "../@types/Games";

export const api = (game:EGames) => axios.create({
  baseURL: `https://loteriascaixa-api.herokuapp.com/api/${game}/latest`,
});