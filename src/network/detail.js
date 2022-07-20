import { request1 } from './request.js'

export function getDetail(id) {
    return request1({
        url: '/data/detail',
        params: {
            id
        }
    })
}