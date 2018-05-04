import { Jigsaw, Overcast } from './patterns'

export default {
    install (Vue, options) {
        Vue.component('vue-hero-jigsaw', Jigsaw)
        Vue.component('vue-hero-overcast', Overcast)
    }
}
