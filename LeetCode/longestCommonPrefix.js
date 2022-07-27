/*
    How to Run: tsc longestCommonPrefix.ts
    ex : strngs = ["flower","flow","flight"]
*/
var LongestPrefix = /** @class */ (function () {
    function LongestPrefix() {
    }
    LongestPrefix.getPrefix = function (strngs) {
        var matchedValue = '';
        var firstArray = strngs[0].split('');
        /* Itrate throught each element except 1st one */
        for (var i = 1; i <= strngs.length - 1; i++) {
            var arrayEle = strngs[i].split('');
            /* Itrate throught each character of the 1st element */
            for (var j = 0; j <= firstArray.length - 1; j++) {
                /* if character matched add it to string  else break the loop */
                if (arrayEle[j] && firstArray[j] === arrayEle[j]) {
                    matchedValue += firstArray[j];
                }
                else {
                    break;
                }
            }
            /* now update the  value which is used to iterate through each character
                ex: for first loop matched walue is flow, now we need to file the longest prefix
                now iterate thorugh each character of "flow" as this was the longest prefix
                for 1st and 2nd element now keep iterating unless u get the prefix
            */
            if (matchedValue) {
                firstArray = matchedValue.split('');
                matchedValue = '';
            }
            else {
                firstArray = [];
                break;
            }
        }
        return firstArray.join('');
    };
    return LongestPrefix;
}());
console.log(LongestPrefix.getPrefix(["dog", "racecar", "car"]));
