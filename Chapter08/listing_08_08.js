// Create the request objectvar request = new XMLHttpRequest();// Open the asynchronous POST requestrequest.open('GET', '/some/image.png', true);//Blob is a Binary Large Objectrequest.responseType = 'blob';request.addEventListener('load', downloadFinished, false);function downloadFinished(evt){if(this.status == 200){var blob = new Blob([this.response], {type: 'img/png'});}}