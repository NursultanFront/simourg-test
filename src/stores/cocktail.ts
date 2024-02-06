import { defineStore } from 'pinia'
import { api } from '@/api'
import type { Cocktail } from '@/api/cocktail-rest/types'

export const useCocktailStore = defineStore('cocktail', {
  state: () => ({
    cocktails: [] as Cocktail[]
  }),
  actions: {
    fetchCocktail(code: string) {
      api.cocktails.getDrinks({ name: code }).then((res) => {
        this.cocktails = res.drinks
      })
    }
  }
})
