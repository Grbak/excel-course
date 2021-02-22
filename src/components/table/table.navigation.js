

export function navigation(key, current, $root) {
    let selected
    const ids = current.id(true)
    switch (key) {
    case 'ArrowDown': {
        selected = $root.find(`[data-id="${ids.row + 1}:${ids.col}"]`)
        break
    }
    case 'ArrowUp': {
        selected = $root.find(`[data-id="${ids.row - 1}:${ids.col}"]`)
        break
    }
    case 'ArrowRight': {
        selected = $root.find(`[data-id="${ids.row}:${ids.col + 1}"]`)
        break
    }
    case 'ArrowLeft': {
        selected = $root.find(`[data-id="${ids.row}:${ids.col - 1}"]`)
    }
    }
    if (selected.$el) {
        selected.focus()
        return selected
    } else {
        return current
    }
}
