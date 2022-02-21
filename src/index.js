const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let LetterCodes = []
    let size = 10;
    let exprArray = expr.split('').reverse()
    let result = []
    for (i = 0; i < Math.ceil(exprArray.length/size); i++ ) {
        LetterCodes[i] = exprArray.slice((i*size), (i*size) + size).reverse()
    }
    LetterCodes = LetterCodes.reverse()
    for (let letterBinary = 0; letterBinary < LetterCodes.length; letterBinary++) {
        let morse = []
        if (LetterCodes[letterBinary].includes('*') ) {
            result.push('-')
        }

        if (LetterCodes[letterBinary].length < size) {
             while (LetterCodes[letterBinary].length < size) {
                LetterCodes[letterBinary].unshift('0')
            } 
        }
        for (let j = 0; j <= 8; j += 2) {
            if (LetterCodes[letterBinary][j] + LetterCodes[letterBinary][j + 1] === '00') {
                morse.push('')
            } else if (LetterCodes[letterBinary][j] + LetterCodes[letterBinary][j + 1] === '10') {
                morse.push('.')
            } else if (LetterCodes[letterBinary][j] + LetterCodes[letterBinary][j + 1] === '11') {
                morse.push('-')
            }
        }
        morse = morse.join('')
        result.push(MORSE_TABLE[morse])
    }
    return result.join('').replace(/-/g, ' ');
}

module.exports = {
    decode
}