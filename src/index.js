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
    let result = '';
    for ( let i = 0; i < expr.length; i += 10) {
        let letter = expr.slice(i, i + 10);
        if(letter[0] === '*') {
            result += ' ';
            continue;
        }
        let temp = '';
        for (let j = 0; j < letter.length; j += 2) {
            let code = letter[j] + letter[j + 1];
            if (code === '10') {
                temp += '.';
            }
            if(code === '11') {
                temp += '-';
            }
        }
        result += MORSE_TABLE[temp];
    }
    return result;
}


module.exports = {
    decode
}