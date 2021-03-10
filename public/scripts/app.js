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

// Assignment :
//create app object title/subtitle attributes
//add title/subtitle in template
//render template

//using ARRAY
var user = {
    userName: "Diksha Dhote",
    userAge: "25",
    userLocation: "London,UK"
};

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
    React.createElement(
        "p",
        null,
        "Location : ",
        user.userLocation
    )
);
var appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);
