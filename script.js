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
    }, 1600); // Adjust the interval as needed

});
