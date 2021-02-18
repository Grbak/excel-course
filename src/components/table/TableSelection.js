
export class TableSelection {
    static className = 'selected'

    constructor() {
        this.group = []
        this.current = null
    }

    // $el instanceof DOM === true
    select($el) {
        this.clear()
        $el.addClass(TableSelection.className)
        this.current = $el
        this.group.push($el)
    }

    clear() {
        this.group.forEach($el => $el.removeClass(TableSelection.className))
        this.group = []
    }

    selectGroup($group = []) {
        this.clear()
        $group.forEach($el => $el.addClass(TableSelection.className))
        this.group = $group;
    }
}

