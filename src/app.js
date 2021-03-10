
// In assignment:
//task 1: render the subtitle (and p tag ) if subtitle exists -logical And operator
// task 2: add options array in app object
//render another p below subtitle tag - if options.length >0 display " here are your options" "No options" -ternary

var app={
    title:"Web Development",
    subtitle:"By Diksha Dhote",
    options :['One','Two']
};
var template=
(
<div>
    <h1>{app.title}</h1>
    {(app.subtitle)&&<p>{app.subtitle}</p>}
    <p>{app.options.length>0 ?'here are your options ':" No options"}</p>
    <ol>
        <li>{app.options[0]}</li>
        <li>{app.options[1]}</li>
    </ol>
</div>
); 



var user={
    userName :"Diksha Dhote",
    userAge: 23,
    userLocation:"London,UK"
};



function getLocation(Location)
{
    if(Location)
       return  <p>Location :{Location}</p>
    else
       return "Unknown";

}

 
 var templateTwo=
(
<div>
<h1>{user.userName ? user.userName : 'Anonymous'}</h1>
 {(user.userAge && user.userAge>=18)&& <p>Age : {user.userAge}</p>}
{getLocation(user.userLocation)}
</div>
);
var appRoot=document.getElementById('app');
ReactDOM.render(template,appRoot) 
