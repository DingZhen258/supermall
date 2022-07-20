import { createStore } from 'vuex'

export default createStore({
    state: {
        currentIndex: 0,
        shopCarData: []

    },
    getters: {},
    mutations: {
        tabIndex(state, index) {
            state.currentIndex = index
        },
        CarData(state, payload) {
            // 查找之前是否有商品
            let product = state.shopCarData.find(item => item.id == payload.id)
                // 有则数量加+
            if (product) {
                product.count += 1
            } else {
                payload.count = 1
                state.shopCarData.push(payload)
            }

        }
    },
    actions: {},
    modules: {}
})