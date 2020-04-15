import * as types from './mutations-types'

export default {
    [types.SET_USER] (state, payload) {
        state.user = payload
    },
    [types.TOKEN] (state, payload) {
        state.token = payload
    }     
}