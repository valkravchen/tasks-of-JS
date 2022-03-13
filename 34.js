const getHiddenCard = (text, count = 4) => {
    return `${'*'.repeat(count)}${text.slice(12, 16)}`
}

