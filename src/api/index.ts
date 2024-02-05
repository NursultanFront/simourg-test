import axios from 'axios'

class Api {
  public constructor() {
    this.endpoint = Api.createEndpoint()
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
}

export const api = new Api()
