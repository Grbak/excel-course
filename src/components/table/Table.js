import {ExcelComponent} from '@core/ExcelComponent'
import {createTable} from './table.template'
import {resizeHandler} from './table.resizeHandler'
import {shouldResize} from './table.functions'
import {TableSelection} from './TableSelection'

export class Table extends ExcelComponent {
    static className = 'excel__table'

    constructor($root) {
        super($root, {
            listeners: ['mousedown']
        })
        this.TableSelection = new TableSelection()
    }
    toHTML() {
        return createTable(20)
    }

    onMousedown(event) {
        if (shouldResize(event)) {
            resizeHandler(event, this.$root)
        }
        if (event.target.className === 'cell') {
            this.TableSelection.select(event.target)
        }
    }
}
