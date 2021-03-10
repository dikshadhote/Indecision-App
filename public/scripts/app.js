"use strict";

//app object
var app = {
    title: "Web Development",
    subtitle: "By Diksha Dhote"
};
var template = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        app.title
    ),
    React.createElement(
        "p",
        null,
        app.subtitle
    )
);

var user = {
    userName: "Diksha Dhote",
    userAge: "25",
    userLocation: "London,UK"
};

// In this Lesson :
//use of ternary operator to choose btween one option
//use of Logical And to check both condition being true and print true statement
//get value using function 

function getLocation(Location) {
    if (Location) return React.createElement(
        "p",
        null,
        "Location :",
        Location
    );else return "Anonymous";
}

//First render location with help of function 
var templateTwo = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        user.userName
    ),
    React.createElement(
        "p",
        null,
        "Age : ",
        user.userAge
    ),
    getLocation(user.userLocation)
);
var appRoot = document.getElementById('app');
ReactDOM.render(templateTwo, appRoot);
