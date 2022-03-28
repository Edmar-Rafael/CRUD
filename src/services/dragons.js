import api, { endpoints } from './index'

export async function getDragons() {
   const { get } = await api
   return get(endpoints.dragon)
}

export async function createDragon(data) {
   const { post } = await api
   return post(endpoints.dragon,data)
}

export async function updateDragon(id, data) {
   const { put } = await api
   return put(endpoints.dragon.concat(`${id}`), data)
}

export async function deleteDragon(id) {
   const { delete: del } = await api
   return del(endpoints.dragon.concat(`${id}`))
}
