module.exports = function toReadable (n) {
    let digitNames = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    let from10to19 = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
    let tensNames = ["twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];

    if (n<10){
        return digitNames[n];
    } else if (n<20) {
        return from10to19[n-10];
    } else if (n<100) {
        let tensName = tensNames[Math.floor(n/10)-2];
        if (n%10 === 0) {
            return tensName;
        } else {
            return tensName + " " + digitNames[n%10];
        }
    } else {
        let hundredsName = digitNames[Math.floor(n/100)] + " hundred";
        if (n%100 === 0) {
            return hundredsName;
        } else {
            return hundredsName + " " + toReadable(n%100);
        }
    }
};
