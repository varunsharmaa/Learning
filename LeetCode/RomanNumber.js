class RomanNumber {
    constructor() {

        this.romanMap = {
            I: 1,
            IV: 4,
            V: 5,
            IX: 9,
            X: 10,
            XL: 40,
            L: 50,
            XC: 90,
            C: 100,
            CD: 400,
            D: 500,
            CM: 900,
            M: 1000,
        }

    }

    /*
     ex: MCMXCIV
        M > C then 1000 +
        C < M the  (1000 - 100) + now increment to position 3
        X < C then (100-10) + increment to position 5
        I < V then (5-1)

     Result: 1994
     If i and i+1 are same then add like II the (1+1)
    */
    getNumber(romanNumber) {
        const roman = romanNumber.split('');
        let sum = 0;
        let i = 0;
        while (i <= roman.length - 1) {
            const romanInt = this.romanMap[roman[i]];
            const romanNextInt = this.romanMap[roman[i + 1]] || 0;
            if ((romanInt > romanNextInt)) {
                sum += romanInt;
            } else {
                const val = romanInt < romanNextInt ? romanNextInt - romanInt : romanNextInt + romanInt;
                sum += val;
                i++;
            }
            i++;
        }
        return sum;
    }

    getRoman(number) {

        if (!number) {
            return '';
        }
        if (number >= 1000) {
            return 'M' + this.getRoman(number - 1000)
        }
        if (number >= 900) {
            return 'CM' + this.getRoman(number - 900)
        }
        if (number >= 500) {
            return 'D' + this.getRoman(number - 500)
        }
        if (number >= 400) {
            return 'CD' + this.getRoman(number - 400)
        }
        if (number >= 100) {
            return 'C' + this.getRoman(number - 100)
        }
        if (number >= 90) {
            return 'XC' + this.getRoman(number - 90)
        }
        if (number >= 50) {
            return 'L' + this.getRoman(number - 50)
        }
        if (number >= 40) {
            return 'XL' + this.getRoman(number - 40)
        }
        if (number >= 10) {
            return 'X' + this.getRoman(number - 10)
        }
        if (number >= 9) {
            return 'IX' + this.getRoman(number - 9)
        }
        if (number >= 5) {
            return 'V' + this.getRoman(number - 5)
        }
        if (number >= 4) {
            return 'IV' + this.getRoman(number - 4)
        }
        if (number >= 1) {
            return 'I' + this.getRoman(number - 1)
        }

    }

}

let romanNumber = new RomanNumber();
console.log('Numeric Number for Roman Number is: ', romanNumber.getNumber('MCMXCIV'));
console.log('Roman Number is: ', romanNumber.getRoman(1994));