import { ref, type Ref } from 'vue'

export function useGetData(fieldName: string, data: Ref<unknown> = ref({})) {
  const result: string[] = []
  const typedData = data.value as Record<string, unknown>

  Object.keys(typedData).forEach((key) => {
    if (key.startsWith(fieldName) && !isNaN(Number(key.slice(fieldName.length)))) {
      const value = typedData[key]
      if (typeof value === 'string' && value) {
        result.push(value)
      }
    }
  })

  return result
}
