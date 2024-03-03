document.addEventListener('DOMContentLoaded', function(){
    var imageHome = document.getElementById('imageHome');
    imageHome.addEventListener('click',function(){
        window.location.href = "http://127.0.0.1:5500/index.html"
    });
})



/*Social media linking*/
document.addEventListener('DOMContentLoaded', function(){
    var facebookIcon = document.getElementById('facebookIcon');
    var instagramIcon =document.getElementById('instagramIcon');
    var linkedinIcon =document.getElementById('linedinIcon');
    facebookIcon.addEventListener('click' ,function(){
        window.location.href = "https://www.facebook.com/moutamakine/"
    });
    instagramIcon.addEventListener('click' ,function(){
        window.location.href = "https://www.instagram.com/moutamakine_official/"
    });
    linkedinIcon.addEventListener('click' ,function(){
        window.location.href = "https://www.linkedin.com/company/moutamakine-clsf/?trk=public_profile_experience-item_profile-section-card_subtitle-click&originalSubdomain=ma"
    });

})


/* Submit form  */
var btn = document.getElementById('btn');
    btn.addEventListener('click' ,function(e){
        e.preventDefault()
        alert('thank you for your message !');
    })