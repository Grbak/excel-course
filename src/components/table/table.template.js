const CODES = {
    A: 65,
    Z: 90
}

function toCell(_, col, row) {
    return `
        <div class="cell" data-col="${col}" data-row="${row}" contenteditable></div>
    `
}

function toColumn(col, index) {
    return `
        <div class="column" data-type="resizable" data-col="${index}">
            ${col}
            <div class="col-resize" data-resize="column"></div>
        </div>
    `
}

function createRow(index, content) {
    const resize = index
        ? '<div class="row-resize" data-resize="row"></div>' : ''
    return `
    <div class="row" data-type="resizable">
        <div class="row-info" data-row="${index}">
            ${index ? index : ''}
            ${resize}
        </div>
        <div class="row-data">
            ${content}
        </div>
    </div>
    `
}

function toChar(_, index) {
    return String.fromCharCode(CODES.A + index)
}

export function createTable(rowsCount = 15) {
    const colsCount = CODES.Z - CODES.A + 1
    const cols = new Array(colsCount)
        .fill('')
        .map(toChar)
        .map(toColumn)
        .join('')
    const rows = []
    rows.push(createRow(null, cols))
    for (let i = 0; i < rowsCount; i++) {
        const cells = new Array(colsCount)
            .fill('')
            .map((el, index) => toChar(el, index))
            .map((el, index) => toCell(el, index, i))
            .join('')
        rows.push(createRow(i + 1, cells))
    }
    return rows.join('')
}
