//task1
let firstname = "narandorj", lastname = "BYAMBADORJ";
if (firstname.length > lastname.length) {
    console.log("First name is longer");
} else if (firstname.length < lastname.length) {
    console.log("Last name is longer");
} else {
    console.log("First name and last name length is same");
}

//task2, 3 
console.log(firstname.toUpperCase());
console.log(lastname.toLowerCase());

//task4
let word1 = "Pinecone academy- н", word2 = "leap хөтөлбөрт тавтай морилго уу?", fullword;
fullword = word1.concat(" ", word2);
console.log(fullword);

//task5 
let firstname5 = "narandorj", lastname5 = "byambadorj", country = "mongol", city = "UB", age = "25", job = "mergejilten";
console.log("Odriin mend. Namaig " + lastname5 + " ovogtoi " + firstname5 + " gedeg. Bi " + country + " ulsiin " + city + " hotod amidardag " + age + " nastai " + job + " -r ajilladag ");

//task6 
console.log("1 2 3 4 5 \n2 3 4 5 1 \n3 4 5 1 2 \n4 5 1 2 3 \n5 1 2 3 4");