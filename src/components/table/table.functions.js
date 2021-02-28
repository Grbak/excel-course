
export function shouldResize(event) {
    return event.target.dataset.resize
}

export function isCell(event) {
    return event.target.dataset.type === 'cell'
}

export function shouldNavigate(event) {
    return event.key === 'ArrowDown'
        || event.key === 'ArrowUp'
        || event.key === 'ArrowRight'
        || event.key === 'ArrowLeft'
}

export function nextSelector(key, {row, col}) {
    switch (key) {
    case 'ArrowDown':
    case 'Enter':
        row++
        break
    case 'ArrowRight':
    case 'Tab':
        col++
        break
    case 'ArrowUp':
        row--
        break
    case 'ArrowLeft':
        col--
        break
    }
    return `[data-id="${row}:${col}"]`
}
