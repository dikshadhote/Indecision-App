
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

//Dynamic 
var userName ="Diksha Dhote";
var userAge=23;
var userLocation="Mumbai";
var templateTwo=
(
<div>
<h1>{userName}</h1>
<p>Age : {userAge}</p>
<p>Location : {userLocation}</p>
</div>
);
var appRoot=document.getElementById('app');
ReactDOM.render(templateTwo,appRoot) 
