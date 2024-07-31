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


document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.carousel-track');

    // Handle scroll to create endless effect
    const handleScroll = () => {
        track.scrollBy({ left: track.clientWidth, behavior: 'smooth' });

        const items = Array.from(track.children);
        const current_check = items.length - 1;
        if (current_check === curent_count) {
            // Clone the items and append them to the track
            items.forEach(item => {
                const clone = item.cloneNode(true);
                track.appendChild(clone);
            });
        }
    };

    let curent_count = 0;

    setInterval(() => {
        curent_count += 1;
        handleScroll();
    }, 3000); // Adjust the interval as needed

    open_nav()
});
