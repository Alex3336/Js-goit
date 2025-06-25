document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll("img.lazy-img");
    const options = {
        root: null,
        threshold: 0.5,
    };
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const img = entry.target;
                const realSrc = img.getAttribute("data-src");
                if (realSrc) {
                    img.src = realSrc;
                    img.removeAttribute("data-src");
                }
                observer.unobserve(img);
            }
        });
    }, options);

    images.forEach((img) => observer.observe(img));
});
