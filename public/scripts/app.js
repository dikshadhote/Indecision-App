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
    );else return "Unknown";
}

//second task : checking username with the help of ternary operator  {condition=true ? " execute this" : "else this will be executed" }
// { true ? 'Andrew' : 'Anonymous' }  //op: Andrew    in this case if userName is present then true
// { false ? 'Andrew' : 'Anonymous'} //op: Anonymous
var templateTwo = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        user.userName ? user.userName : 'Anonymous'
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
