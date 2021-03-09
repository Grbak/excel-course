
export function capitalize(string) {
    if (typeof string !== 'string') {
        return ''
    }
    return string.charAt(0).toUpperCase() + string.slice(1)
}

export function range(start, end) {
    if (start > end) {
        [start, end] = [end, start];
    }
    return new Array(end - start + 1)
        .fill('')
        .map((_, index) => start + index);
}

export function matrix($target, $current) {
    const target = $target.id(true)
    const current = $current.id(true)
    const cols = range(current.col, target.col)
    const rows = range(current.row, target.row)
    return cols.reduce((acc, col) => {
        rows.forEach(row => acc.push(`${row}:${col}`))
        return acc
    }, [])
}

export function storage(key, data = null) {
    if (!data) {
        return JSON.parse(localStorage.getItem(key))
    }
    localStorage.setItem(key, JSON.stringify(data))
}
