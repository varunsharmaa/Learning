class AddBinary {


    static addBinary(number1, number2) {
        let finalNumber = '';
        let carry = 0;
        const arryay1 = number1.split('');
        const arryay2 = number2.split('');
        const length = Math.max(arryay1.length, arryay2.length);
        for (let i = length; i > 0; i--) {
            let sum = parseInt(arryay1.pop() || 0) + parseInt(arryay2.pop() || 0) + carry;
            carry = 0;
            if (sum == 2) {
                carry = 1;
                finalNumber = '0' + finalNumber;
            }
            else if (sum == 3) {
                carry = 1;
                finalNumber = '1' + finalNumber;
            } else {
                finalNumber = sum + finalNumber;
            }
        }
        if (carry == 1) {
            finalNumber = '1' + finalNumber;
        }
        return finalNumber;
    }

}

console.log(AddBinary.addBinary('0', '0'))