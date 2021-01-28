var form_id_js = "javascript_form";

var data_js = {
    "access_token": "licdu2dsp96o0gx2lp084uys"
};


function sendEmail(body) {
	Email.send({
        SecureToken: "79e21009-affb-4a41-a057-08c600e4870d",
        To : 'no-reply@get-oncall.com',
        From : "no-reply@get-oncall.com",
        Subject : "User Registration",
        Body : body,
        }).then(
            message => alert("mail sent successfully")
	);
}



var sendButton = document.getElementById("submit_form");

function handleSubmit() {
    let name = document.getElementById('name').value
    let email = document.getElementById('email').value
    let orgName = document.getElementById('organization-name').value
    let orgSize = document.getElementById('organization-size').value
    let callAmt = document.getElementById('number-of-calls').value
    let additionalInfo = document.getElementById('additional-info').value
    let msg = "Name: " + name + '\nEmail: ' + email + '\nOrg Name: ' + orgName + '\nOrg Size: ' + orgSize + '\nCall Ammount: ' + callAmt + '\nAdditional Info: ' + additionalInfo
    sendButton.value='Sending…';
    sendButton.disabled=true;
    
    
    var subject = "New Registration"
    var message = msg;
    data_js['subject'] = subject;
    data_js['text'] = message;
    var params = toParams(data_js);

    
    sendEmail(msg)

    return false;
}


function handleSubmit2() {
    let name = document.getElementById('name').value
    let email = document.getElementById('email').value
    let orgName = document.getElementById('organization-name').value
    let orgSize = document.getElementById('organization-size').value
    let callAmt = document.getElementById('number-of-calls').value
    let additionalInfo = document.getElementById('additional-info').value
    let msg = "Name: " + name + '\nEmail: ' + email + '\nOrg Name: ' + orgName + '\nOrg Size: ' + orgSize + '\nCall Ammount: ' + callAmt + '\nAdditional Info: ' + additionalInfo
    sendButton.value='Sending…';
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
    document.getElementById('name').value = ''
    document.getElementById('email').value = ''
    document.getElementById('organization-name').value = ''
    document.getElementById('organization-size').value = ''
    document.getElementById('number-of-calls').value = ''
    document.getElementById('additional-info').value = ''
    alert("Successfully sent")
}

function js_onError(error) {
    alert("Couldn't send email\n" + error)
}

function toParams(data_js) {
    var form_data = [];
    for ( var key in data_js ) {
        form_data.push(encodeURIComponent(key) + "=" + encodeURIComponent(data_js[key]));
    }

    return form_data.join("&");
}