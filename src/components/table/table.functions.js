
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
