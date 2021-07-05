var form_id_js = "javascript_form";
var butt; var left; var right;
try{
    butt = document.getElementById('submit_form')
    butt.addEventListener('onsubmit', event => {
      console.log('Let"s go');
      event.preventDefault();
      // actual logic, e.g. validate the form
      console.log('Form submission cancelled.');
    });
} catch(e) {
    e == false;
}

var slideLength;
var cSlide = 0
console.log(cSlide)

function prev(container) {
    container.children[cSlide].style.display = 'none';
    if (cSlide == 0)
        cSlide = slideLength - 1
    else
        cSlide -= 1
    container.children[cSlide].style.display = 'block';
}

function next(container) {
    container.children[cSlide].style.display = 'none';
    cSlide = (cSlide + 1) % slideLength;
    container.children[cSlide].style.display = 'block';
}

try{
    left = document.getElementById('carousel-left')
    right = document.getElementById('carousel-right')  
    container = document.getElementById('div-holder')
    slideLength = container.children.length
    console.log(container)
    left.onclick = function() {
        prev(container)
    }
    right.onclick = function() {
        next(container)
    }
} catch(e) {
    e == false;
    console.log(e)
}


var data_js = {
    "access_token": "licdu2dsp96o0gx2lp084uys"
};

var sendButton = document.getElementById("submit_form");

var elementList = ['name', 'email', 'organization-name', 'organization-code', 'organization-size', 'number-of-calls', 'additional-info']
                   
                   
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