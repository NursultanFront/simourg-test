import axios from 'axios'
import { CocktailRest } from './cocktail-rest'

class Api {
  public constructor() {
    this.endpoint = Api.createEndpoint()
    this.cocktails = new CocktailRest(this.endpoint)
  }

  private static createEndpoint() {
    return axios.create({
      baseURL: import.meta.env.VITE_API_URL,
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }

  private readonly endpoint
  public readonly cocktails
}

export const api = new Api()
