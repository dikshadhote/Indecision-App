"use strict";

// In assignment:
//task 1: render the subtitle (and p tag ) if subtitle exists -logical And operator
// task 2: add options array in app object
//render another p below subtitle tag - if options.length >0 display " here are your options" "No options" -ternary

var app = {
    title: "Web Development",
    subtitle: "By Diksha Dhote",
    options: ['One', 'Two']
};
var template = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        app.title
    ),
    app.subtitle && React.createElement(
        "p",
        null,
        app.subtitle
    ),
    React.createElement(
        "p",
        null,
        app.options.length > 0 ? 'here are your options ' : " No options"
    ),
    React.createElement(
        "ol",
        null,
        React.createElement(
            "li",
            null,
            app.options[0]
        ),
        React.createElement(
            "li",
            null,
            app.options[1]
        )
    )
);

var user = {
    userName: "Diksha Dhote",
    userAge: 23,
    userLocation: "London,UK"
};

function getLocation(Location) {
    if (Location) return React.createElement(
        "p",
        null,
        "Location :",
        Location
    );else return "Unknown";
}

var templateTwo = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        user.userName ? user.userName : 'Anonymous'
    ),
    user.userAge && user.userAge >= 18 && React.createElement(
        "p",
        null,
        "Age : ",
        user.userAge
    ),
    getLocation(user.userLocation)
);
var appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);
