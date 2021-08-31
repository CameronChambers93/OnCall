var sendButton;

var elementList = ['name', 'email', 'organization-name', 'organization-code', 'organization-size', 'number-of-calls', 'additional-info']

var data_js = {
    "access_token": "licdu2dsp96o0gx2lp084uys"
};

try{
    sendButton = document.getElementById('submit_form')
    sendButton.addEventListener('onsubmit', event => {
      event.preventDefault();
      // actual logic, e.g. validate the form
      console.log('Form submission cancelled.');
    });
} catch(e) {
    e == false;
}

function handleSubmit() {
    for (const name of elementList) {
        try {
            if (document.getElementById(name).validity.valid == false) {
                alert("Errors detected, please recheck your information and try again");
                return   
            }
        } catch(e) {
            console.log(e)
        }
    }
    let name = document.getElementById('name').value
    let email = document.getElementById('email').value
    let orgName = document.getElementById('organization-name').value
    let orgCode = document.getElementById('organization-code').value
    let orgSize = document.getElementById('organization-size').value
    let callAmt = document.getElementById('number-of-calls').value
    let additionalInfo = document.getElementById('additional-info').value
    let msg = "Name: " + name + '\nEmail: ' + email + '\nOrg Name: ' + orgName + '\nOrg Code: ' + orgCode + '\nOrg Size: ' + orgSize + '\nCall Ammount: ' + callAmt + '\nAdditional Info: ' + additionalInfo
    sendButton.innerHTML='Sending…';
    sendButton.disabled=true;
    var request = new XMLHttpRequest();
    request.onreadystatechange = function() {
        if (request.readyState == 4 && request.status == 200) {
            js_onSuccess();
        } else
        if(request.readyState == 4) {
            js_onError(request.response);
        }
    };

    var subject = "New Registration"
    var message = msg;
    data_js['subject'] = subject;
    data_js['text'] = message;
    var params = toParams(data_js);

    request.open("POST", "https://postmail.invotes.com/send", true);
    request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    request.send(params);

    return false;
}

function js_onSuccess() {
    sendButton.innerHTML='Thank You';
    alert("Successfully sent")
}

function js_onError(error) {
    sendButton.innerHTML = 'Sign Up'
    sendButton.disabled = false;
    alert("Couldn't send email\n" + error)
}

function toParams(data_js) {
    var form_data = [];
    for ( var key in data_js ) {
        form_data.push(encodeURIComponent(key) + "=" + encodeURIComponent(data_js[key]));
    }

    return form_data.join("&");
}