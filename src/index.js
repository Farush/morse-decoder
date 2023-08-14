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

const toDigitalLettersArray = (expr) => {
    let digitalLettersArray = [];
    for (let i = 0; i < expr.length; i += 10) {
        digitalLettersArray.push(expr.slice(i, i + 10));
    }
    return digitalLettersArray;
};


const letterDecode = (digitalLetter) => {
    morseLetter = ''
    for (let i = 0; i < 10; i += 2) {
        if (digitalLetter.slice(i, i + 2) === '10') morseLetter += '.';
        if (digitalLetter.slice(i, i + 2) === '11') morseLetter += '-';
    }
    return morseLetter;
}

const toHumanPhrase = (digitalLettersArray) => {
    humanPhrase = '';
    for (let i = 0; i < digitalLettersArray.length; i++) {
        if (digitalLettersArray[i] === '**********') {
            humanPhrase = humanPhrase + ' '
        }
        else { 
            humanPhrase = humanPhrase + MORSE_TABLE[letterDecode(digitalLettersArray[i])] 
        }
    }
return humanPhrase

}

function decode(expr) {
    return toHumanPhrase(toDigitalLettersArray(expr))
}

module.exports = {
    decode
}

