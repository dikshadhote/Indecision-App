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

// Assignment :
//create app object title/subtitle attributes
//add title/subtitle in template
//render template

//using ARRAY
var user={
    userName :"Diksha Dhote",
    userAge:"25",
    userLocation:"London,UK"
};


 
var templateTwo=
(
<div>
<h1>{user.userName}</h1>
<p>Age : {user.userAge}</p>
<p>Location : {user.userLocation}</p>
</div>
);
var appRoot=document.getElementById('app');
ReactDOM.render(template,appRoot) 
