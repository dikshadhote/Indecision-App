"use strict";

var template = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        "Indecision app"
    ),
    React.createElement(
        "p",
        null,
        "checking the system"
    ),
    React.createElement(
        "ol",
        null,
        React.createElement(
            "li",
            null,
            "one"
        ),
        React.createElement(
            "li",
            null,
            "two"
        )
    )
);

//Dynamic 
var userName = "Diksha Dhote";
var userAge = 23;
var userLocation = "Mumbai";
var templateTwo = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        userName
    ),
    React.createElement(
        "p",
        null,
        "Age : ",
        userAge
    ),
    React.createElement(
        "p",
        null,
        "Location : ",
        userLocation
    )
);
var appRoot = document.getElementById('app');
ReactDOM.render(templateTwo, appRoot);
