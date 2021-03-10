'use strict';

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Indecision app'
    ),
    React.createElement(
        'p',
        null,
        'checking the system'
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'one'
        ),
        React.createElement(
            'li',
            null,
            'two'
        )
    )
); //not part of js and browser can't understand.so,this have to be converted into JS

//assignement
var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Diksha Dhote'
    ),
    React.createElement(
        'p',
        null,
        'Age : 22'
    ),
    React.createElement(
        'p',
        null,
        'Location : Nagpur'
    )
);
var appRoot = document.getElementById('app');
ReactDOM.render(templateTwo, appRoot);
