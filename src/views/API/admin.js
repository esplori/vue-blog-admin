import {get, post} from '@/utils/axios.js'
import contextPath from '@/config/context-path.js'

export async function getListApi (data) {
  const url = `${contextPath}/pages/admin/getList`
  const options = {}
  return post(url, data, options)
}
export async function getDetailApi (data) {
  const Url = `${contextPath}/pages/admin/getDetail`
  const options = {}
  return get(Url, data, options)
}
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
export async function getCateApi (data) {
  const url = `${contextPath}/pages/getCate`
  const options = {}
  return get(url, data, options)
}