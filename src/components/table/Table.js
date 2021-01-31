/* eslint-disable indent */
import {ExcelComponent} from '@core/ExcelComponent'
import {createTable} from './table.template'
// import {$} from '@core/dom'
import Resize from './Resize'

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
            const resize = new Resize(event, this.$root)
            resize.resize()
        }
    }
}
