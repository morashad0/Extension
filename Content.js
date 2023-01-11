let Hacked = [
    "https://nakedsecurity.sophos.com/wp-content/uploads/sites/2/2019/05/shutterstock_761155144.jpg",
    "https://thumbs.dreamstime.com/z/binary-code-words-you-have-been-hacked-143911796.jpg",
    "https://images.hindustantimes.com/img/2022/04/10/1600x900/computer-crime-concept_9a621780-ed1d-11e6-90af-e8d3e91f500c_1649558663789.jpg",
    "https://miro.medium.com/max/1400/1*LlfM6nxALbTkwtnuyF9SUg.jpeg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIb-hR_C56pS1GUo3XltOt3dTtqyqZeAngkA&usqp=CAU",
    "https://wallpaperaccess.com/full/4862447.jpg",
    "https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2020/10/Pharming-Attack-Hacker-1.jpg",
    "https://s.abcnews.com/images/US/Gty_Hacker_Group_Anonymous_er_160318_16x9_1600.jpg"
];

const imgs = document.getElementsByTagName("img")
for (let i=0; i<imgs.length; i++){
    const randomImg =Math.floor(Math.random() * Hacked.length);
    imgs[i].src = Hacked[randomImg];
}
const headers = document.getElementsByTagName("h2")
for (let i=0; i<headers.length; i++){
    headers[i].innerText = "You are Hacked";
}

