document.addEventListener(DOMContentLoaded, 'addElement');function addElement(){//Grab the ordered list that is in the document//Remember that getElementById returns an array like objectvar orderedList = document.getElementById('myList');//Create an <li>, add a text node then append it to <li>var li = document.createElement('li');li.appendChild(document.createTextNode('Thanks for visiting'));//element [0] is how we access what is inside the orderedListorderedList.insertBefore(li, orderedList[0]);}