let CURRENTnumber = 0;
let [QuantityBats, CapacityThisBat] = [0, 0];
let CapacityThisBatObject = document.querySelector('#CapacityBat');

const AbbBat = () => {
    BOX[CURRENTnumber].push(Number(CapacityThisBatObject.value));
    if (CURRENTnumber < BOX.length - 1) {CURRENTnumber++}else{CURRENTnumber = 0};
    CapacityThisBatObject.value = '';
    Filter();
    drawCall();
}
const ReadQuantityBats = () => {
    QuantityBats = Number(document.querySelector('#QuantityBats').value);
    if (QuantityBats < 11 && QuantityBats > 0) {
        document.querySelector('#QuantityBats').setAttribute('disabled', 'disabled');
        document.querySelector('#CapacityBat').removeAttribute('disabled');
        document.querySelector('#supplyCapacity').removeAttribute('disabled');
        document.querySelector('#VoltageBat').removeAttribute('disabled');
        for (let i = 0; i < QuantityBats; i++){ BOX.push([]) }
    }
}
const Filter = () => {
    for (let A = 0; A < BOX.length; A++) {
        for (let B = 0; B < BOX[A].length; B++) {
            for (let C = 0; C != 1; ){
                if (BOX[A][B][0] == 0) {
                    BOX[A][B] = Number(String(BOX[A][B]).replace('0', ''));
                }else{C++}
            }
            if (BOX[A][B] > 3000) {
                BOX[A].pop();
                if (CURRENTnumber > 0){CURRENTnumber--}else{CURRENTnumber = BOX.length - 1}
            }else if (BOX[A][B] < 1) {
                BOX[A].pop();
                if (CURRENTnumber > 0){CURRENTnumber--}else{CURRENTnumber = BOX.length - 1}
            }
        }
    }
}