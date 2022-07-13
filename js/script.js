const BOX = [];

const drawCall = () => {
    let html = '';
    for (let i = 0; i < BOX.length; i++) {
        if (BOX[i].length > 0) {
            let htmlGeneralTag = '<div class="General">';
            for (let A = 0; A < BOX[i].length; A++){
                htmlGeneralTag += `<div class="element">${BOX[i][A]} mAh</div>`;
            }
            htmlGeneralTag += `<div class="summCapacityInQuantity">Общая ${SummBatCapacity(BOX[i])} mAh</div></div>`;
            html += htmlGeneralTag;
        }
    }
    document.querySelector('.batAssembly').innerHTML = html;
    return true;
}
const SummBatCapacity = (boxQuantity) => {
    let SummCapacity = 0;
    for (let i = 0; i < boxQuantity.length; i++) {
        SummCapacity += boxQuantity[i];
    }
    return SummCapacity;
}

const CapacityВifference = (build1, build2, NUM = 0, value1 = 0, value1Inv = 0, value2 = 0, value2Inv = 0) => {
    let [capacity1, capacity2] = [SummBatCapacity(build1), SummBatCapacity(build2)];
    if (NUM == 0) {
        capacity1 += value1;
        capacity1 -= value1Inv;
        capacity2 += value2;
        capacity2 -= value2Inv;
    }else if (NUM == 1) {
        capacity1 += value1;
    }else if (NUM == 2) {
        capacity2 += value1;
    }
    if (capacity1 - capacity2 > 0) {
        return capacity1 - capacity2;
    }else{ return capacity2 - capacity1; }
}

const CalcCapacity = () => {
    let Voltage = Number(document.querySelector('#VoltageBat').value);
    let FrontText = document.querySelector('.CapacityAhWh');
    let CapacitymAh = SummBatCapacity(BOX[0]);
    if (Voltage) {
        for (let i = 0; i < BOX.length; i++) {
            if (SummBatCapacity(BOX[i]) < CapacitymAh) CapacitymAh = SummBatCapacity(BOX[i])
        }
        FrontText.textContent = `Ёмкость : ${CapacitymAh} mAh / ${Math.round(CapacitymAh * Voltage * BOX.length / 10)/100} Wh`;
    }
}