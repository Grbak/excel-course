

export class TableSelection {
    select(cell) {
        this.unselect()
        this.selected = cell
        cell.classList.add('selected')
    }
    unselect() {
        this.selected && this.selected.classList.remove('selected')
    }
}

