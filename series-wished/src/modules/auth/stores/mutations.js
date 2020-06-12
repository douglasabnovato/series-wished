import * as types from './mutation-types'

export default {
    [types.SET_USER] (state, payload) {
        state.user = payload
    },
    [types.TOKEN] (state, payload) {
        state.token = payload
    }     
}