import {post} from '@/utils/axios.js'
import contextPath from '@/config/context-path.js'

export async function postPageApi (data) {
  const url = `${contextPath}/pages/list`
  const options = {}
  return post(url, data, options)
}
export async function delApi (data) {
  const Url = `${contextPath}/pages/deleteItem`
  const options = {}
  return post(Url, data, options)
}
export async function editPageApi (data) {
  const url = `${contextPath}/pages/updateItem`
  const options = {}
  return post(url, data, options)
}
