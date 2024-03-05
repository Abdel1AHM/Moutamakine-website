/** ImageClick = go back to Homeage */
document.addEventListener('DOMContentLoaded', function(){
    var imageHome = document.getElementById('imageHome');
    imageHome.addEventListener('click',function(){
        window.location.href = "http://127.0.0.1:5500/index.html"
    });
})



/*Social media linking*/
//document.addEventListener('DOMContentLoaded', function(){
    // var facebookIcon = document.getElementById('facebookIcon');
    // var instagramIcon =document.getElementById('instagramIcon');
    // var linkedinIcon =document.getElementById('linedinIcon');
    // facebookIcon.addEventListener('click' ,function(){
        // window.location.href = "https://www.facebook.com/moutamakine/"
    // });
    // instagramIcon.addEventListener('click' ,function(){
        // window.location.href = "https://www.instagram.com/moutamakine_official/"
    // });
    // linkedinIcon.addEventListener('click' ,function(){
        // window.location.href = "https://www.linkedin.com/company/moutamakine-clsf/?trk=public_profile_experience-item_profile-section-card_subtitle-click&originalSubdomain=ma"
    // });

// })//


/* Submit form  */
document.addEventListener('DOMContentLoaded' ,function(){
    var contactForm = document.getElementById('contactForm');
    var submitBtn  =  document.getElementById('btn');
    submitBtn.addEventListener('click',function(){
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var subject = document.getElementById("subject").value;
        var message = document.getElementById("message").value;

        var emailjsUserID = "WkX-wiwj3rnNT_dLO";
        var emailjsTemplateID = "template_ddw1h0j";
        var emailjsServiceID = "service_ipzmjbm";

        email.init(emailjsUserID);
        var templateParams = {
            to_name: name,
            from_name: email,
            subject: subject,
            message_html: message,
        };
        email.send(emailjsServiceID , emailjsTemplateID , templateParams ,emailjsUserID ).then(function(response){
            alert("your message sent succesfully ! \n" ,  JSON.stringify(response));
        },function(error){
            alert.error("error sending message , please try again ! \n" ,  JSON.stringify(error));
        });

    });
});

