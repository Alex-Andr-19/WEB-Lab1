document.getElementById('specialText').onkeydown = check;

function clearText() {
    document.getElementById('specialText').value = ''
}

function check(e) {
    if (e.key.toLowerCase() === 'q' || e.key.toLowerCase() === 'w' || e.key.toLowerCase() === 'x') {
        return false
    }

    return true
}
