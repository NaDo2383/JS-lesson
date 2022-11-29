let Bat = 67, Onts_Dumd = 59, dun_bat, dun_onts_dumd;
if (Bat < 60 && Bat > 0) {
    dun_bat = "mash muu";
} else if (Bat < 70) {
    dun_bat = "hangalttai";
} else if (Bat < 80) {
    dun_bat = "Dund";
} else if (Bat < 90) {
    dun_bat = "Sain";
} else if (Bat < 100) {
    dun_bat = "Mash sain";
} else {
    console.log("Oruulsan dungiin medeelel buruu bn");
}
if (Onts_Dumd < 60 && Onts_Dumd > 0) {
    dun_onts_dumd = "mash muu";
} else if (Onts_Dumd < 70) {
    dun_onts_dumd = "hangalttai";
} else if (Onts_Dumd < 80) {
    dun_onts_dumd = "Dund";
} else if (Onts_Dumd < 90) {
    dun_onts_dumd = "Sain";
} else if (Onts_Dumd < 100) {
    dun_onts_dumd = "Mash sain";
} else {
    console.log("Oruulsan dungiin medeelel buruu bn");
}
console.log("Bat", Bat, dun_bat);
console.log("Onts_Dumd", Onts_Dumd, dun_onts_dumd);