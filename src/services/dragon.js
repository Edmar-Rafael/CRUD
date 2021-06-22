import api, { endpoints } from './index'

export async function getDragons() {
   const { get } = await api
   return get(endpoints.dragon)
}