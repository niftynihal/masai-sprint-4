var users = {
    "email" : "niftynihal@gmail.com",
    "password" : "nihal@123"
}

var data = JSON.stringify(users)

localStorage.setItem("users", data)

function login(){
    event.preventDefault()
    var users = localStorage.getItem("users")
    users = JSON.parse(users)
    var email = document.getElementById("email").value
    var password = document.getElementById("password").value

    if (users["email"] == email  && password == users["password"]){
            localStorage.setItem("current_user", email)
            location.href = "dashboard.html"
            // alert("Success")
    }
    else {
        alert("Incorrect Email or Password!")
    }
}

function signup(){
    event.preventDefault()
    var users = localStorage.getItem("users")
    users = JSON.parse(users)
    var email = document.getElementById("email").value
    var password = document.getElementById("password").value
    users["email"] = email
    users["password"] = password
    var data = JSON.stringify(users)
    localStorage.setItem("users", data)
    alert("Successful! Please login now")
}

var inputdiv = document.getElementById("inpdata")
var btndiv = document.getElementById("btndiv")
var displaytab = document.getElementById("displayTab")
var displayrep = document.getElementById("reportdisp")

btndiv.style.display = "none"
displaytab.style.display = "none"
displayrep.style.display = "none"

var total_income = 0
var total_expense = 0
var savigns = 0
function process(){
    event.preventDefault()
    var date = document.getElementById("date").value
    var category = document.getElementById("category").value
    var income = document.getElementById("income").value
    var expense = document.getElementById("expense").value
    total_income += Number(income)
    total_expense += Number(expense)
    savings = Number(total_income - total_expense)
    fillTable(date,category,income,expense)
    fillReport(total_income,total_expense,savings)
    inputdiv.style.display = "none"
    btndiv.style.display = "block"
}

function fillTable(d,c,i,e){
    var tables = document.querySelectorAll("tbody")
    var tbody = tables[0]
    var tr = document.createElement("tr")
    var td1 = document.createElement("td")
    td1.innerHTML = d
    var td2 = document.createElement("td")
    td2.innerHTML = c
    var td3 = document.createElement("td")
    td3.innerHTML = i
    var td4 = document.createElement("td")
    td4.innerHTML = e
    tr.append(td1,td2,td3,td4)
    tbody.append(tr)
}

function showTable(){
    displayrep.style.display = "none"
    displaytab.style.display = "block"
}


// var savings = total_income - total_expense

function fillReport(total_income,total_expense,savings){
    var tables = document.querySelectorAll("tbody")
    var tbody = tables[1]
    tbody.innerHTML = ""
    var tr = document.createElement("tr")
    var td1 = document.createElement("td")
    td1.innerHTML = total_income
    var td2 = document.createElement("td")
    td2.innerHTML = total_expense
    var td3 = document.createElement("td")
    td3.innerHTML = savings
    tr.append(td1,td2,td3)
    tbody.append(tr)
}

function showReport(){
    displaytab.style.display = "none"
    displayrep.style.display = "block"
}

function showInput(){
    btndiv.style.display = "none"
    displaytab.style.display = "none"
    displayrep.style.display = "none"
    inputdiv.style.display = "block"
}

function logout(){
    location.href = "index.html"
}