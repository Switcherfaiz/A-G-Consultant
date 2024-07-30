function open_nav() {
    const nav_open = document.querySelector('#nav_open');
    const close = document.querySelector('#close');
    const navigation = document.querySelector('.navigation');
    const nav_item = document.querySelectorAll('.navigation a');


    nav_open.addEventListener('click', () => {
        navigation.classList.add('active');
    });
    close.addEventListener('click', () => {
        navigation.classList.remove('active');
    });

    nav_item.forEach(item => {
        item.addEventListener('click', () => {
            navigation.classList.remove('active');
        });
    });


}

function sendEmail() {
    var fullName = encodeURIComponent(document.getElementById("fullName").value);
    var emailAddress = encodeURIComponent(document.getElementById("emailAddress").value);
    var message = encodeURIComponent(document.getElementById("message").value);

    var mailtoLink = "mailto:breldosg112@gmail.com?subject=Contact%20Form%20Submission&body=Full%20Name:%20"
        + fullName + "%0AEmail:%20" + emailAddress + "%0AMessage:%20" + message;

    // Open the mailto link in a hidden iframe to send the email
    var iframe = document.createElement("iframe");
    iframe.style.display = "none";
    iframe.src = mailtoLink;
    document.body.appendChild(iframe);
}


open_nav()