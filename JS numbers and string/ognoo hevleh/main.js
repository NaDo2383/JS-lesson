//task1 
let ognoo = prompt("ta on oo oruulna uu");
let sar = prompt("ta sar aa oruulna uu");
let odor = prompt("ta odor oo oruulna uu");
let butenOgnoo = true;
let butenOgnoo1, ognoo1, sar1, odor1;

if (ognoo < 0) {
    console.log("tanii oruulsan on manai niitiin toolliin omnoh toolol baina");
    butenOgnoo = false;
}
if (sar == 1 || sar == 3 || sar == 5 || sar == 7 || sar == 8 || sar == 10 || sar == 12) {
    if (odor < 0 || odor > 31) {
        console.log("tanii oruulsan odor buruu baina");
        butenOgnoo = false;
    }
} else if (sar == 4 || sar == 6 || sar == 9 || sar == 11) {
    if (odor < 0 || odor > 30) {
        console.log("tanii oruulsan odor buruu baina");
        butenOgnoo = false;
    }
} else if (sar == 2) {
    if (odor < 0 || odor > 29) {
        console.log("tanii oruulsan odor buruu baina");
        butenOgnoo = false;
    }
} else {
    console.log("tanii oruulsan sar buruu baina");
    butenOgnoo = false;
}

if (ognoo.length < 2) {
    ognoo1 = "000" + ognoo;
} else if (ognoo.length < 3) {
    ognoo1 = "00" + ognoo;
}
else if (ognoo.length < 4) {
    ognoo1 = "0" + ognoo;
} else {
    ognoo1 = ognoo;
}

if (sar.length < 2) {
    sar1 = "0" + sar;
} else {
    sar1 = sar;
}

if (odor.length < 2) {
    odor1 = "0" + odor;
} else {
    odor1 = odor;
}

butenOgnoo1 = ognoo1 + "-" + sar1 + "-" + odor1;

if (butenOgnoo == true) {
    console.log(butenOgnoo1);
}