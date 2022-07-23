import { DataProps } from '../@types/types'
import api, { endpoints } from './index'

export async function getDragons() {
   const { get } = await api
   return get(endpoints.dragon)
}

export async function createDragon(data: DataProps) {
   const { post } = await api
   return post(endpoints.dragon,data)
}

export async function updateDragon(id: number, data: DataProps) {
   const { put } = await api
   return put(endpoints.dragon.concat(`${id}`), data)
}

export async function deleteDragon(id: number) {
   const { delete: del } = await api
   return del(endpoints.dragon.concat(`${id}`))
}
