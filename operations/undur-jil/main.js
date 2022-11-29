let a = prompt("ondor jil esehiig shalgah onoo oruulna uu");
if (a % 4 == 0 && a % 400 == 0) {
    if (a % 100 == 0) {
        console.log("tanii oruulsan jil n ondor jil bish bn");
    } else {
        console.log("tanii oruulsan jil n ondor jil mon bn");
    }
} else if (a % 4 == 0) {
    if (a % 100 == 0) {
        console.log("tanii oruulsan jil n ondor jil bish bn");
    } else {
        console.log("tanii oruulsan jil n ondor jil mon bn");
    }
} else {
    console.log("tanii oruulsan jil n ondor jil bish bn");
}