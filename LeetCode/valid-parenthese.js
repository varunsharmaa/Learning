class ValidParentheses {

    static isValid(s) {
        const parenthesesMap = {
            ')': '(',
            ']': '[',
            '}': '{'
        }
        const parenthesesStack = [];
        if (s && s.length >= 2) {
            const remainder = s.length % 2;
            if (remainder == 0) {
                const length = s.length;
                const arr = s.split('');
                for (let i = 0; i <= length - 1; i++) {

                    if (arr[i] === '(' || arr[i] === '{' || arr[i] === '[') {
                        parenthesesStack.push(arr[i]);
                    } else {
                        if (parenthesesMap[arr[i]] === parenthesesStack[parenthesesStack.length - 1]) {
                            parenthesesStack.pop();
                        } else {
                            return false;
                        }
                    }

                }
                return parenthesesStack.length? false: true;
            }
        }
        return false;
    }
}
console.log('Check if valid Parentheses', ValidParentheses.isValid("{[]}"));