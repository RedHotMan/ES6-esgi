
// ucfirst
function ucfirst(str) {
    if (typeof str !== "string") {
        return undefined
    }
    else if (str.length > 0) {
        return str[0].toUpperCase() + str.substring(1)
    }
    return str
}

// capitalize
function capitalize(str) {
    if (typeof str !== "string") {
        return undefined
    }

    let chaine = str.split(' ');
    chaine.forEach(e => {
        chaine.splice(chaine.indexOf(e), 1, e[0].toUpperCase() + e.substring(1));
    })
    return chaine.join(' ');
}

// camelCase
function camelCase(str){
    if (typeof str !== "string") {
        return undefined
    }

    let chaine = str.split(' ');
    chaine.forEach(e => {
        chaine.splice(chaine.indexOf(e), 1, e[0].toUpperCase() + e.substring(1));
    })
    return chaine.join('');
}

// snake_case
function snake_case(str){
    if (typeof str !== "string") {
        return undefined
    }
    return str.toLowerCase().replace(/ /g, '_');
}

// prop_access
function prop_access(obj, str){
    if( str.length > 0 && obj !== null ){
        let target = str.split('.');
        let res = obj;
        let path = '';

        for(i = 0; i < target.length; i++){
            if (path.length > 0) {
                path += '.'+target[i]
            }
            else {
                path += target[i]
            }
            
            if (res[target[i]] !== undefined) {
                res = res[target[i]]
            }
            else {
                return path + ' not exist';
            }
        }
        return res;
    }
}

// leet
function leet(str) {
    if (typeof str !== "string") {
        return undefined
    }

    let vo = {
        a: 4,
        e: 3,
        i: 1,
        o: 0,
        u: '_',
        y: 7
    }

    let res = str;

    if (res.length > 0) {
        res.split('').forEach(val => {
            if (val.toLowerCase() in vo) {
                res = res.replace(val, vo[val.toLowerCase()]);
            }
        })
    }

    return res
}

// yoda
function yoda(str) {
    if (typeof str !== "string") {
        return undefined
    }
    return str.split(' ').reverse().join(' ');
}

// verlan
function verlan(str) {
    if (typeof str !== "string") {
        return undefined
    }
    return str.split('').reverse().join('').split(' ').reverse().join(' ') 
}

//vig
function vig(word, phrase) {
    if (typeof word !== "string" || typeof phrase !== "string") {
        return undefined
    }

    const lowerReference = 'abcdefghijklmnopqrstuvwxyz';
    const upperReference = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    word = word.toLowerCase();

    if (word.length > phrase.length) {
        const diff = word.length - phrase.length;
        for (let i = 0; i < diff; i++) {
            phrase += phrase[i]
        }
    }

    const len = phrase.length;
    const wlen = word.length;

    let i = 0,
        wi = 0,
        ci,
        pos,
        result = '';

    for (i; i < len; i++) {
        pos = phrase[i];
        ci = lowerReference.indexOf(pos.toLowerCase()) + lowerReference.indexOf(word[wi]);
        ci %= 26;
        result = lowerReference.indexOf(pos) === -1 ? result + upperReference[ci] : result + lowerReference[ci];
        wi = wi + 1 === wlen ? 0 : wi + 1;

        if( i === wlen -1) {
            break;
        }
    }

    return result;
}