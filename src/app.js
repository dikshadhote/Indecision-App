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
    userAge: 23,
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
       return "Unknown";

}

 //Third task : If userAge >= 18 then print age 
 //How Logical And works ?
 //if one of the two condition is false then logical And value is false 
 var templateTwo=
(
<div>
<h1>{user.userName ? user.userName : 'Anonymous'}</h1>
 {(user.userAge && user.userAge>=18)&& <p>Age : {user.userAge}</p>}
{getLocation(user.userLocation)}
</div>
);
var appRoot=document.getElementById('app');
ReactDOM.render(templateTwo,appRoot) 
