import { urlFetch } from '../constants/index'

export const getUser = async (user) => {
  const res = await fetch(`${urlFetch}${user}`)
  const data = await res.json()
  return data
}
