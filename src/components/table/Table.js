/* eslint-disable indent */
import {ExcelComponent} from '@core/ExcelComponent'
import {createTable} from './table.template'
import {$} from '@core/dom'

export class Table extends ExcelComponent {
    static className = 'excel__table'

    constructor($root) {
        super($root, {
            listeners: ['mousedown']
        })
    }
    toHTML() {
        return createTable(20)
    }

    onMousedown(event) {
        if (event.target.dataset.resize) {
            const $resizer = $(event.target)
            const $parent = $resizer.closest('[data-type="resizable"]')
            const coords = $parent.getCoords()
            const type = $resizer.data.resize
            const side = type === 'column' ? 'bottom' : 'right'
            $resizer.css({
                opacity: 1,
                [side]: '-5000px'
            })
            let value;
                if (type === 'column') {
                    document.onmousemove = e => {
                        const delta = Math.floor(e.pageX - coords.right)
                        value = coords.width + delta
                        $resizer.css({
                            right: -delta + 'px',
                        })
                    }
                } else {
                    document.onmousemove = e => {
                        const delta = Math.floor(e.pageY - coords.bottom)
                        value = coords.height + delta
                        $resizer.css({
                            bottom: -delta + 'px',
                        })
                }
            }

            document.onmouseup = () => {
                document.onmousemove = null
                document.onmouseup = null
                if (type === 'column') {
                    this.$root
                        .findAll(`[data-col="${$parent.data.col}"`)
                        .forEach(el => el.style.width = value + 'px')
                } else {
                    $parent.css({
                        height: value + 'px'
                    })
                }
                $resizer.css({
                    opacity: 0,
                    bottom: 0,
                    right: 0
                })
            }
        }
    }
}
