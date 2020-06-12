import services from '@/http'
import * as types from './mutation-types'

export const ActionDoLogin = (context, payload) => {
    console.log(payload)
}

export const ActionSetUser = ( { commit }, payload ) => {
    commit(types.SET_USER, payload)
}

export const ActionSetToken = ( { commit }, payload ) => {
    commit(types.SET_TOKEN, payload)
}