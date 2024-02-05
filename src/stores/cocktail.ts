import { defineStore } from 'pinia'
import { api } from '@/api'
import type { Cocktail } from '@/api/cocktail-rest/types'

export const useCocktailStore = defineStore('cocktail', {
  state: () => ({
    cocktails: [] as Cocktail[]
  }),
  actions: {
    async fetchCocktail(code?: string) {
      const cocktailName = code ?? 'margarita'

      this.cocktails = await api.cocktails.getDrinks({ name: cocktailName })
    }
  }
})
