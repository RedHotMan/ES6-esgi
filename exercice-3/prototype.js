
// ucfirst
String.prototype.ucfirst = function ucfirst() {
    if (this.length) {
        return this[0].toUpperCase() + this.substring(1)
    }
    return this
}

// capitalize
String.prototype.capitalize = function capitalize() {
    let chaine = this.split(' ');
    chaine.forEach(e => {
        chaine.splice(chaine.indexOf(e), 1, e[0].toUpperCase() + e.substring(1));
    })
    return chaine.join(' ');
}

// camelCase
String.prototype.camelCase = function camelCase() {
    let chaine = this.split(' ');
    let res = '';
    chaine.forEach(e => {
        chaine.splice(chaine.indexOf(e), 1, e[0].toUpperCase() + e.substring(1));
    })
    res = chaine.join('');
    return res
}

// snake_case
String.prototype.snake_case = function snake_case() {
    return this.toLowerCase().replace(/ /g, '_');
}

// prop_access
Object.prototype.prop_access = function prop_access(str) {
    if (str.length > 0 && this !== null) {
        let target = str.split('.');
        let res = this;
        let path = '';

        for (i = 0; i < target.length; i++) {
            if (path.length > 0) {
                path += '.' + target[i]
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
String.prototype.leet = function leet() {
    let vo = {
        a: 4,
        e: 3,
        i: 1,
        o: 0,
        u: '_',
        y: 7
    }

    let res = this;

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
String.prototype.yoda = function yoda() {
    return this.split(' ').reverse().join(' ');
}

// verlan
String.prototype.verlan = function verlan() {
    return this.split('').reverse().join('').split(' ').reverse().join(' ')
}

//vig
String.prototype.vig = function vig(phrase) {
    const lowerReference = 'abcdefghijklmnopqrstuvwxyz';
    const upperReference = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    word = this.toLowerCase();

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

        if (i === wlen - 1) {
            break;
        }
    }

    return result;
}