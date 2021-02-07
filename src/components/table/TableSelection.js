

export class TableSelection {
    constructor() {
        this.group = []
    }

    // $el instanceof DOM === true
    select($el) {
        this.group.push($el)
        $el.addClass('selected')
    }

    unselect() {
        this.group.forEach($el => $el.removeClass('selected'))
        this.group = []
    }

    selectGroup() {

    }
}

