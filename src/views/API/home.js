import {get, post} from '@/utils/axios.js'
import contextPath from '@/config/context-path.js'

export async function getListApi (data) {
  const url = `${contextPath}/pages/getList`
  const options = {}
  return post(url, data, options)
}
export async function getDetailApi (data) {
  const Url = `${contextPath}/pages/getDetail`
  const options = {}
  return get(Url, data, options)
}
export async function searchApi (data) {
  const Url = `${contextPath}/pages/search`
  const options = {}
  return get(Url, data, options)
}
