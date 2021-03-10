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
ReactDOM.render(templateTwo, appRoot);
