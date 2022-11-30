let rd = prompt("ta RD aa oruulna uu");
if (rd.length == 10) {
    if (Number(rd[0]) != NaN && Number(rd[1]) != NaN) {
        if (Number(rd.substring(2)) != NaN) {
            console.log("та монгол улсын регистрийн дугаарыг зөв орууллаа");
        } else {
            console.log("та монгол улсын иргэний бүртгэлийн дугаарыг буруу орууллаа ");
        }
    } else {
        console.log("та монгол улсын иргэний бүртгэлийн дугаарыг буруу орууллаа ");
    }
} else {
    console.log("та монгол улсын иргэний бүртгэлийн дугаарыг буруу орууллаа ");
}