import {post} from '@/utils/axios.js'
import contextPath from '@/config/context-path.js'

export async function loginApi (data) {
  const url = `${contextPath}/account/login`
  const options = {}
  return post(url, data, options)
}
