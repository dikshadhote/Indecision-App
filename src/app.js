
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
); //not part of js and browser can't understand.so,this have to be converted into JS

//assignement
var templateTwo=
(
<div>
<h1>Diksha Dhote</h1>
<p>Age : 22</p>
<p>Location : Nagpur</p>
</div>
);
var appRoot=document.getElementById('app');
ReactDOM.render(templateTwo,appRoot) 
