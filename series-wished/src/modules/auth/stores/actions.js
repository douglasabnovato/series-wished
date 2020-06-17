import services from '@/http'
import * as storage from '../storage'
import * as types from './mutation-types'

export const ActionDoLogin = ({ dispatch }, payload) => {
    return services.auth.login(payload).then(res => {
        dispatch(`ActionSetUser`, res.data.user)
        dispatch(`ActionSetToken`, res.data.token)
    })
}

export const ActionLoadSession = ({ dispatch }) => {
    return new Promise(async ( resolve, reject ) => {
        try{
            const { data: { token, user }} = await services.auth.loadSession()

            dispatch('ActionSetUser', user)
            dispatch('ActionSetToken', token)

            resolve()
        } catch (err) {
            dispatch('ActionSignOut')
            reject(err)
        }
    })
}

export const ActionSetUser = ( { commit }, payload ) => {
    commit(types.SET_USER, payload)
}

export const ActionSetToken = ( { commit }, payload ) => {
    storage.setLocalToken(payload)
    storage.setHeaderToken(payload)    
    commit(types.SET_TOKEN, payload)
}

export const ActionSignOut = ({ dispatch }) => {
    storage.setHeaderToken('')
    storage.deletLocalToken()
    dispatch('ActionSetUser', {})
    dispatch('ActionSetToken', '')
}