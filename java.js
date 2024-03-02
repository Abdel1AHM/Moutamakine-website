

function sendMessage() {
    emailjs.init("WkX-wiwj3rnNT_dLO");

    var serviceId = 'service_ipzmjbm';
    var templateId = 'template_ddw1h0j';
    var params = {
        sendername: document.querySelector('#name').value,
        senderemail: document.querySelector('#email').value,
        subject: document.querySelector('#subject').value,
        message: document.querySelector('#message').value,
    };

    emailjs.send(serviceId, templateId, params)
        .then(res => {
            alert("Thank you, " + params.sendername + "! Your message has been sent.");
        })
        .catch();
}

