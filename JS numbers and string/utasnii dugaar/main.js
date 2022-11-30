let phone = prompt("ta + 976 ******** formataar utasnii dugaaraa oruulna uu");
if (Number(phone) != NaN) {
    if (phone.substring(0, 4) == "+976") {
        if (phone.length == 12) {
            console.log("та монгол улсын утасны дугаарыг зөв орууллаа")
        } else {
            console.log("та монгол улсын утасны дугаарыг буруу орууллаа")
        }
    } else {
        console.log("та монгол улсын утасны дугаарыг буруу орууллаа")
    }
} else {
    console.log("та монгол улсын утасны дугаарыг буруу орууллаа")
}