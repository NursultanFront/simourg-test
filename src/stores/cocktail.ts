import { defineStore } from 'pinia'
import { api } from '@/api'
import type { Cocktail } from '@/api/cocktail-rest/types'

export const useCocktailStore = defineStore('cocktail', {
  state: () => ({
    cocktails: [] as Cocktail[]
  }),
  actions: {
    fetchCocktail(code?: string) {
      const cocktailName = code ?? 'margarita'

      api.cocktails.getDrinks({ name: cocktailName }).then((res) => {
        this.cocktails = res.drinks
      })
    }
  }
})
