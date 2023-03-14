import request from '@/utils/request'

export const login = data => request({ url: '/login', method: 'post', data })

export const list = data => request({ url: '/list', method: 'get', data })
