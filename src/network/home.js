import { request, request2 } from './request.js'

export function getHomeMultidata() {
    return request({
        url: '/home/multidata'
    })
}

export function getHomeGoods() {
    return request2({
        url: '/data/info',
    })
}