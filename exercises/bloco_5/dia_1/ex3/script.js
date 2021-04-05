var body = document.getElementById('container');
body.style.backgroundColor = '#f5f5f5';

var tagSelection = document.getElementsByTagName('section');

tagSelection[0].style.backgroundColor = '#CC5555';
tagSelection[1].style.backgroundColor = '#55EE55';
tagSelection[1].style.borderBottom = '30px';

var footer = document.querySelector('#footer-container');
footer.style.backgroundColor = '#555';
footer.style.color = '#55dd55';

var title = document.getElementById('header-container');
title.style.backgroundColor = '#555';
title.style.color = '#55dd55';


var urgentImportant = document.querySelectorAll('.emergency-tasks h3')
urgentImportant[0].style.backgroundColor = '#FF5555';
urgentImportant[0].style.color = '#55DD55';



var notUrgentNotImportant = document.querySelectorAll('.no-emergency-tasks h3')
notUrgentNotImportant[1].style.backgroundColor = '#55AA55';

var urgentNotImportant = document.querySelectorAll('.emergency-tasks h3')
urgentNotImportant[1].style.backgroundColor = '#AA5555';