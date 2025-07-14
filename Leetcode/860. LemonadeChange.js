bills = [5, 5, 5, 10, 20]

var lemonadeChange = function (bills) {
    let bills5 = 0, bills10 = 0;
    for (let i = 0; i < bills.length; i++) {
        if (bills[i] == 5) {
            bills5++;
        }
        if (bills[i] == 10) {
            if (bills5 < 1) {
                return false;
            }
            bills10++;
            bills5--;
        }
        if (bills[i] == 20) {
            if (bills10 == 0 && bills5 < 3) return false
            if (bills10 > 1 && bills5 == 0) return false
            if (bills10 >= 1) {
                bills10--;
                bills5--;
            }
            else {
                bills5 -= 3;
            }
        }
    }
    return true;
};

console.log(lemonadeChange(bills));