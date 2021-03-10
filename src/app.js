
var template=
(
<div>
    <h1>Indecision app</h1>
    <p>checking the system</p>
    <ol>
        <li>one</li>
        <li>two</li>
    </ol>
</div>
); 

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
ReactDOM.render(templateTwo,appRoot) 
