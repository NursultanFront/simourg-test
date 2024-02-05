import { BasicRest } from '../basic-rest'

import type { AxiosInstance } from 'axios'

export class AdvisorsRest extends BasicRest {
  public constructor(endpoint: AxiosInstance) {
    super(endpoint)
  }

  public getDrinks(params: { name: string }) {
    return this.getRequest(`/search.php?s=${params.name}`)
  }
}
