import { BasicRest } from '../basic-rest'

import type { AxiosInstance } from 'axios'
import type { Cocktail } from './types'

export class CocktailRest extends BasicRest {
  public constructor(endpoint: AxiosInstance) {
    super(endpoint)
  }

  public getDrinks(params: { name: string }) {
    return this.getRequest<Cocktail[]>(`/search.php?s=${params.name}`)
  }
}
