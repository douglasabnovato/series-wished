import Vue from 'vue'
import VueResource from 'vue-resource'
import services from './services'

Vue.use(VueResource)

const http = Vue.http

http.options.root = 'http://localhost:5000/' 
/* endereço da api: ou local ou hospedagem */

Object.keys(services).map(service => {
   services[service] = Vue.resource('', {}, services[service])
})

export { http } 
export default services