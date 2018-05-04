import patterns from './../config/patterns'

export const mixin = {
    props: {
        background: {
            required: false,
            type: String,
            default: '#DFDBE5'
        },
        foreground: {
            required: false,
            type: String,
            default: '#9C92AC'
        },
        opacity: {
            required: false,
            type: Number,
            default: 0.4
        },

        pattern: {
            required: true,
            type: String
        }
    },

    computed: {
        style () {
            return `background-color: ${this.color};background-image: url("${this.imageUri}")`
        },

        imageUri () {
            return `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='${this.currentPattern.width}' height='${this.currentPattern.height}' viewBox='0 0 ${this.currentPattern.width} ${this.currentPattern.height}'%3E%3Cg fill='%23${this.foreground}' fill-opacity='${this.opacity}'%3E%3Cpath fill-rule='${this.currentPattern.fillRule}' d='${this.currentPattern.drawing}'/%3E%3C/g%3E%3C/svg%3E`
        },

        currentPattern () {
            return patterns[this.pattern]
        }
    }
}