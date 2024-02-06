import { defineStore } from 'pinia'
import { api } from '@/api'
import type { Cocktail } from '@/api/cocktail-rest/types'

export const useCocktailStore = defineStore('cocktail', {
  state: () => ({
    cocktails: {} as Record<string, Cocktail[]>
  }),
  actions: {
    fetchCocktail(code: string) {
      if (this.cocktails[code]) {
        return
      }

      api.cocktails
        .getDrinks({ name: code })
        .then((res) => {
          this.cocktails[code] = res.drinks
        })
        .catch((error) => {
          console.error('Ошибка при запросе данных коктейля:', error)
        })
    }
  }
})
