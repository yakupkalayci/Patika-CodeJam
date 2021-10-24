let indexOfPerson = 0;
let personName = "yakup";

let rightArrow = document.querySelector(".rightArrow");
let leftArrow = document.querySelector(".leftArrow");

const groupMembers = {
    hicabi: {
        name: "Hicabi YILMAZ",
        hakkimda: "Frontend developer olmaya çalışan birisi...",
        imgLink: "https://pbs.twimg.com/profile_images/1243852813391798273/fOzBwZB7_400x400.jpg"
    },
    yakup: {
        name: "Yakup KALAYCI",
        hakkimda: "Lorem ipsum doler sit amet",
        imgLink: "profile.jpg"
    },
    hasret: {
        name: "Hasret BAYAR",
        hakkimda: "HTML5 | CSS3 | Bootstrap |   ",
        imgLink: "https://scontent.fist15-1.fna.fbcdn.net/v/t39.30808-6/246629020_5023908354304809_1293860839732677461_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=qikIueoBkA8AX_Vvqln&_nc_ht=scontent.fist15-1.fna&oh=47bda3658ec15c5dea9c574c3d364b05&oe=6179434C"
    }
};



function getPersonInfo() {
    let insideText1 = document.getElementById("hakkimda");
    let profilePhoto = document.getElementById("profile-photo");

    if (indexOfPerson == 3) {
        indexOfPerson = 0;

    }

    if (indexOfPerson == -1) {
        indexOfPerson = 2;
    }
    if (indexOfPerson == 0) {
        personName = "yakup";
    }
    if (indexOfPerson == 1) {
        personName = "hicabi";
    }
    if (indexOfPerson == 2) {
        personName = "hasret";
    }


    profilePhoto.innerHTML = `
<img src="${groupMembers[personName]["imgLink"]}" alt="" width="241" height="299">
`;


    insideText1.innerHTML = `
<h2>${groupMembers[personName]["name"]}</h2>
<p>
${groupMembers[personName]["hakkimda"]}
</p>


`;


}


rightArrow.onclick = function () {

    indexOfPerson++;
    getPersonInfo();

}

leftArrow.onclick = function () {

    indexOfPerson--;
    getPersonInfo();
}