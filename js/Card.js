 
document.addEventListener('DOMContentLoaded', () => {
    const langs = [
        {
            text: "Technology has reduced the effort and time and increased the efficiency of the production requirements in every field.",
            client: "Client 1",
            profession: "Profession 1",
        },
        {
            text: "Automation is driving the industry forward at an incredible pace. It has revolutionized operations across the board.",
            client: "Client 2",
            profession: "Profession 2",
        },
        {
            text: "Innovation is the key to staying ahead in the modern era, and technology facilitates that innovation.",
            client: "Client 3",
            profession: "Profession 3",
        },
        {
            text: "The digital transformation we are witnessing today is driving significant growth in almost every sector.",
            client: "Client 4",
            profession: "Profession 4",
        },
        {
            text: "Technology has opened doors to a new level of operational efficiency and precision.",
            client: "Client 5",
            profession: "Profession 5",
        },
        {
            text: "We are at the forefront of a technological revolution that is reshaping every industry in the world.",
            client: "Client 6",
            profession: "Profession 6",
        },
    ];

    const swiperWrapper = document.getElementById('swiper-wrapper');

    // Create and insert slides
    langs.forEach((lang, index) => {
        const slide = document.createElement('div');
        slide.classList.add('swiper-slide');

        slide.innerHTML = `
            <div class="card-container">
                <div class="card">
                    <div class="quote-icon">“</div>
                    <p class="testimonial-text">${lang.text}</p>
                    <div class="client-info">
                        <div class="client-photo"></div>
                        <div>
                            <p class="client-name">${lang.client}</p>
                            <p class="client-profession">${lang.profession}</p>
                        </div>
                    </div>
                </div>
            </div>
        `;

        swiperWrapper.appendChild(slide);
    });

    const swiper = new Swiper('.swiper', {
        spaceBetween: 10,
        slidesPerView: window.innerWidth >= 800 ? 3 : 1,
        loop: true,
        centeredSlides: true,
        speed: 800,
        autoplay: {
            delay: 4000,
        },
        on: {
            slideChange: function () {
                const activeIndex = this.realIndex;
                const cards = document.querySelectorAll('.card');
                cards.forEach((card, i) => {
                    card.classList.toggle('card-active', i === activeIndex);
                });
            },
        },
    });
});
