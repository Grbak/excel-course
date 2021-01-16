import {capitalize} from '@core/utils'

export class DomListener {
    constructor($root, listeners = []) {
        if (!$root) {
            throw new Error('No $root provided for DomListener!')
        }
        this.$root = $root
        this.listeners = listeners
    }

    initDOMListeners() {
        this.listeners.forEach(listener => {
            const method = getMethodName(listener)
            const name = this.name || ''
            if (!this[method]) {
                throw new Error(
                    `Method ${method} is not implemented in ${name} component!`
                )
            }
            // this.$root.on(listener, this[method].bind(this))
            this.$root.on(listener, this[method].bind(this))
        })
    }

    removeDOMListeners() {

    }
}

function getMethodName(string) {
    return 'on' + capitalize(string)
}
