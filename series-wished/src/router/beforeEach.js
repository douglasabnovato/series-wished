import store from '../store'
export default async (to, from, next) => {
    document.title = `${to.name}-series wished`
    if(to.name !== 'login' && !store.getters['auth/hasToken']){

    } else {
        
    }
    next()
}