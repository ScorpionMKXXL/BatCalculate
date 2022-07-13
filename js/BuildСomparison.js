const StartСomparison = () => {
    let ret = false;
    for (let A = 0; A < BOX.length; A++) {
        for (let B = 0; B < BOX.length; B++){
            if (A != B) {
                if (BuildСomparison(BOX[A], BOX[B])) {ret = true}
            }
        }
    }
    drawCall();
    if (ret) setTimeout(StartСomparison, 200);
    CalcCapacity();
}
const BuildСomparison = (build1, build2) => {
    let ret = false;
    for (;SearchOneToMove(build1, build2); ret = true){}
    for (;SearchReplaceToMove(build1, build2); ret = true){}
    return ret;
}

const SearchOneToMove = (build1, build2) => {
    let capDiff = CapacityВifference(build1, build2);
    let ret = false;
    for (let i = 0; i < build1.length; i++) {
        if (CapacityВifference(build1, build2, 2, build1[i]*2) < capDiff){
            build2.push(build1[i]);
            build1.splice(i, 1);
            ret = true;
        }
    }
    for (let i = 0; i < build2.length; i++) {
        if (CapacityВifference(build1, build2, 1, build2[i]*2) < capDiff){
            build1.push(build2[i]);
            build2.splice(i, 1);
            ret = true;
        }
    }
    return ret;
}

const SearchReplaceToMove = (build1, build2) => {
    let ret = false;
    let values = [0, 0];
    for (let A = 0; A < build1.length; A++) {
        for (let B = 0; B < build2.length; B++) {
            if (CapacityВifference(build1, build2, 0, build2[B], build1[A], build1[A], build2[B]) < CapacityВifference(build1, build2)) {
                values = [build1[A], build2[B]];
                build1[A] = values[1];
                build2[B] = values[0];
                ret = true;
            }
        }
    }
    return ret;
}