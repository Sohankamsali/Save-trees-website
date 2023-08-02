var reasons=[
    "Trees provide shade",
    "Trees help in retaining the Rainwater",
    "Tree provide fruits",
    "Trees are natural medicines"
]

var images =[
    "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
    "https://images.unsplash.com/photo-1462143338528-eca9936a4d09?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
    "https://www.thespruce.com/thmb/4BMKJfD40K7PJjHqJD0sy06-sP0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/dwarf-fruit-trees-4588521-01-5dd100fb457a4bc8b3491fb7c54ad3b3.jpg",
    "https://images.unsplash.com/photo-1485067801970-70573e3f77d0?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
];

var i=0;
function nextSlide(){
    document.getElementById("reasontext").innerHTML=reasons[i];
    document.getElementById("album").src=images[i];
    i++;
    document.getElementById("audio").play();
}