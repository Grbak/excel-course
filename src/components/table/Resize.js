import {$} from '@core/dom'

class Resize {
    constructor(event, root) {
        this.$resizer = $(event.target)
        this.$parent = this.$resizer.closest('[data-type="resizable"]')
        this.coords = this.$parent.getCoords()
        this.type = this.$resizer.data.resize
        this.side = this.type === 'column' ? 'bottom' : 'right'
        this.$root = root
    }

    _enlargeResizer() {
        this.$resizer.css({
            opacity: 1,
            [this.side]: '-5000px'
        })
    }

    _onmousemove() {
        if (this.type === 'column') {
            document.onmousemove = e => {
                const delta = Math.floor(e.pageX - this.coords.right)
                this.value = this.coords.width + delta
                this.$resizer.css({
                    right: -delta + 'px',
                })
            }
        } else {
            document.onmousemove = e => {
                const delta = Math.floor(e.pageY - this.coords.bottom)
                this.value = this.coords.height + delta
                this.$resizer.css({
                    bottom: -delta + 'px',
                })
            }
        }
    }

    _onmouseup() {
        document.onmouseup = () => {
            document.onmousemove = null
            document.onmouseup = null
            if (this.type === 'column') {
                this.$root
                    .findAll(`[data-col="${this.$parent.data.col}"`)
                    .forEach(el => el.style.width = this.value + 'px')
            } else {
                this.$parent.css({
                    height: this.value + 'px'
                })
            }
            this.$resizer.css({
                opacity: 0,
                bottom: 0,
                right: 0
            })
        }
    }

    resize() {
        this._enlargeResizer()
        this._onmousemove()
        this._onmouseup()
    }
}

export default Resize
