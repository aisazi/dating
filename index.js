const users = [ 
    {
        name:"Begimai", age: 25, gender: "female", location:"Kyrgyzstan", zodiac:"Aries", education:"Becholor" , maritalstatus:"Single", img: "https://womanasian.net/wp-content/uploads/2023/03/WA_Kyrgyz2.jpg"
    },
    {
        name:"Max", age: 23, gender: "male", location:"Russia", zodiac:"Taurus", education:"High school" , maritalstatus:"Single", img: "https://i.pinimg.com/550x/a4/d5/9f/a4d59faed8e7f409b0227a7461029cfe.jpg"
    },
    {
        name:"Anny", age: 32, gender: "female", location:"Arizona", zodiac:"Gemini", education:"Master" , maritalstatus:"Divorced", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKsKNlujLZyjM_b6pBFMS4pKwpeQgznQKbq7NQ9q1v-cHFf9EQVZpRgqEhYLBz2MLyoCk&usqp=CAU" 
    },
    {
        name:"John", age: 29, gender: "male", location:"Canada", zodiac:"Cancer", education:"PHD" , maritalstatus:"Open relationship", img: "https://img.freepik.com/premium-photo/young-caucasian-man_1368-458124.jpg?w=360"
    },
    {
        name:"Janny", age: 22, gender: "female", location:"France", zodiac:"Leo", education:"Becholor" , maritalstatus:"Taken", img: "https://images.unsplash.com/photo-1574701148212-8518049c7b2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJldHR5JTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
    },
    {
        name:"Benjamin", age: 37, gender: "male", location:"Germany", zodiac:"Virgo", education:"High school" , maritalstatus:"Divorced", img: "https://m.timesofindia.com/photo/83890830/83890830.jpg?v=3"
    },
    {
        name:"Sofiya", age: 32, gender: "female", location:"Switzerland", zodiac:"Scarpio", education:"Becholor" , maritalstatus:"Single", img: "https://s3.eu-central-1.amazonaws.com/curaze-web-prod/photos/shares/40%20over%2040%20Germany%202022/Tatjana%20Kiel.jpg"
    },
    {
        name:"Erik", age: 28, gender: "male", location: "Australia", zodiac:"Sagittarius", education:"Master" , maritalstatus:"Single", img: "https://i.pinimg.com/236x/2e/b5/f1/2eb5f1bd3ae9f3cf25833719ae03079a--alexander-fehling-german-men.jpg"
    },
    {
        name:"Silje", age: 25, gender: "female", location:"Norway", zodiac:"Capricorn", education:"High school" , maritalstatus:"Single", img: "https://womenofeurope.net/wp-content/uploads/2023/03/WOE_Norvegian5.jpg"
    },
    {
        name:"Almaz", age: 24, gender: "male", location:"Kazahstan", zodiac:"Aquarius", education:"Becholor" , maritalstatus:"Taken", img: "https://media.istockphoto.com/id/1174820486/photo/portrait-of-a-smart-young-kazakh-man-in-glasses-and-a-t-shirt-on-a-white-background-asian.jpg?s=612x612&w=0&k=20&c=w5GKiJAHzp5J2BSvfXx0cvMIPX6TWGaxs4sNgPoXZZw="
    },
]




let parent = document.getElementById("nyDiv")
let index = 0
let surottor = [
    "url('https://www.dating.com/terra-assets/images/hero/desktop-29628786a8-3.jpg')",
    "url('https://cdn.mos.cms.futurecdn.net/VrYXkBVSUMBXMqppRVDktM.jpg')"
]

setInterval(() => {
  if (index == surottor.length) index = 0
    parent.style.backgroundImage = surottor[index]
    index++
}, 6000)

let email = ""
let password = ""
let tami = document.getElementById("mainId")
let aziza = document.getElementById("aziza")
tami.style.display = "none"
function logIn() {
    email = document.getElementById("emailId").value
    password = document.getElementById("passwordId").value
    if(email.length > 0 && password.length > 0) {
    tami.style.display = "block"  
    aziza.style.display = "none"  
    }
 }

for(let index = 0; index < users.length; index++) {
    let divgoal = document.getElementById("goal") 
    let div = document.createElement("div")
    div.className = "system"
    let name = document.createElement("h2")
    let age  = document.createElement("p")
    let location = document.createElement("p")
    let picture = document.createElement("img")

    picture.src = users[index].img
    name.innerHTML = users[index].name
    age.innerHTML = users[index].age
    location.innerHTML = users[index].location

    
    div.appendChild(picture)
    div.appendChild(name)
    div.appendChild(age)
    div.appendChild(location)
    divgoal.appendChild(div) 
}