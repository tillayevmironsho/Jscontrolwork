let DATA = {
    users: [{
        id: 1,
        name: "Steve",
        bio: "Hi my bros",
        telephone_number: 998900010101,
        last_seen: 'last_seen',
        /* profile_image:"https://picsum.photos/200/300"*/
    },
    {
        id: 2,
        name: "Kim",
        bio: "Hi",
        telephone_number: 998900050505,
        last_seen: 'last_seen',
        /* profile_image:"https://picsum.photos/200/300"*/
    },
    {
        id: 3,
        name: "Jonh",
        bio: "Hello",
        telephone_number: 998900050505,
        last_seen: 'last_seen',
        /* profile_image:"https://picsum.photos/200/300"*/
    },
    {
        id: 4,
        name: "Amirhon",
        bio: "Hi",
        telephone_number: 998971300009,
        last_seen: 'last_seen',
        /* profile_image:"https://picsum.photos/200/300"*/
    },
    {
        id: 5,
        name: "Komil",
        bio: "I am not a king, i am komil",
        telephone_number: 998900051020,
        last_seen: 'last_seen',
        /* profile_image:"https://picsum.photos/200/300"*/
    },
    {
        id: 6,
        name: "Toxir",
        bio: "Roblox ?",
        telephone_number: 998900125623,
        last_seen: 'last_seen',
        /* profile_image:"https://picsum.photos/200/300"*/
    },
    {
        id: 7,
        name: "Ronal",
        bio: "do",
        telephone_number: 998777777777,
        last_seen: 'last_seen',
        /* profile_image:"https://picsum.photos/200/300"*/
    },
    {
        id: 8,
        name: "Leo",
        bio: "nel",
        telephone_number: 998939809930,
        last_seen: 'last_seen',
        /* profile_image:"https://picsum.photos/200/300"*/
    },
    {
        id: 9,
        name: "Aslam",
        bio: "boi",
        telephone_number: 998900050111,
        last_seen: 'last_seen',
        /* profile_image:"https://picsum.photos/200/300"*/
    },
    {
        id: 10,
        name: "Jim",
        bio: "kim?",
        telephone_number: 998906588230,
        last_seen: 'last_seen',
        /* profile_image:"https://picsum.photos/200/300"*/
    }
    ]
}


let contactList = document.querySelector(".contacts")
let cr = document.querySelector(".messagess")

DATA.users.map((item) => {
    let createElemantLi = document.createElement("li")
    createElemantLi.classList.add('list')
    createElemantLi.textContent = item.name
    // createElemantLi.addEventListener("click") = function () {
    //     document.get("messagess").style.display = "block";
    // }

    contactList.appendChild(createElemantLi)
    console.log(createElemantLi)
});

let titleButtonElement = document.querySelector(".btn")
let messageFormElement = document.querySelector(".messag-form")
let textAreaMessage = document.querySelector(".input")
let messageList = document.querySelector(".message-list")

titleButtonElement.onclick = function (event) {
    event.preventDefault();

    let newLiElement = document.createElement("li");
    newLiElement.classList.add("message-item");


    let textElement = document.createElement("p");
    textElement.classList.add("message-parag");

    textElement.textContent = textAreaMessage.value;

    newLiElement.appendChild(textElement)
    messageList.appendChild(newLiElement)
    textAreaMessage.value = "";
}
