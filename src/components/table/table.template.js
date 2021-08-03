import {storage} from '@core/utils'

const CODES = {
    A: 65,
    Z: 90
}

// function toCell(col, row) {
//     return `
//         <div class="cell" data-col="${col}" data-row="${row}" contenteditable></div>
//     `
// }

function getInitStyle(col) {
    // const initWidth = storage('excel-state').colState[col]
    const initWidth = storage('excel-state') ? storage('excel-state').colState[col] : null
    return initWidth ? `style="width: ${initWidth}px"` : ''
}

function toCell(row) {
    return function(_, col) {
        return `
            <div
                class="cell"
                data-col="${col}"
                data-row="${row}"
                data-id="${row}:${col}"
                data-type="cell"
                contenteditable
                ${getInitStyle(col)}
            >
            </div>
        `
    }
}

function toColumn(col, index) {
    return `
        <div class="column" data-type="resizable" data-col="${index}" ${getInitStyle(index)}>
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
    for (let row = 0; row < rowsCount; row++) {
        const cells = new Array(colsCount)
            .fill('')
            // .map((_, col) => toCell(col, row))
            .map(toCell(row))
            .join('')
        rows.push(createRow(row + 1, cells))
    }
    return rows.join('')
}
