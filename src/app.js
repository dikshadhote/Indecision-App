//app object
var app={
    title:"Web Development",
    subtitle:"By Diksha Dhote"
};
var template=
(
<div>
    <h1>{app.title}</h1>
    <p>{app.subtitle}</p>
</div>
); 



var user={
    userName :"Diksha Dhote",
    userAge:"25",
    userLocation:"London,UK"
};

// In this Lesson :
//use of ternary operator to choose btween one option
//use of Logical And to check both condition being true and print true statement
//get value using function 

function getLocation(Location)
{
    if(Location)
       return  <p>Location :{Location}</p>
    else
       return "Anonymous";

}

 //First render location with help of function 
var templateTwo=
(
<div>
<h1>{user.userName}</h1>
<p>Age : {user.userAge}</p>
{getLocation(user.userLocation)}
</div>
);
var appRoot=document.getElementById('app');
ReactDOM.render(templateTwo,appRoot) 
