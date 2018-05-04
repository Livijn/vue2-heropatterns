import { Jigsaw } from './patterns'

export default {
    install (Vue, options) {
        Vue.component('vue-hero-jigsaw', Jigsaw)
    }
}
