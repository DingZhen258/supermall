import axios from 'axios'

// 方案一 最好方案------------------------------------
export function request(config) {
    //     // 创建axios实例
    const instance = axios.create({
            baseURL: 'http://123.207.32.32:8000',
            timeout: 5000
        })
        // 拦截器
        //请求拦截 
    instance.interceptors.request.use(config => {
            console.log(config);
            // 拦截完要返回
            return config
        }, err => {
            console.log(err);
        })
        // 响应拦截
    instance.interceptors.response.use(config => {
        console.log(config);
        return config
    }, err => {
        console.log(err);
    })

    // 发送真正请求 axios本身返回的就是一个promise
    return instance(config)
}