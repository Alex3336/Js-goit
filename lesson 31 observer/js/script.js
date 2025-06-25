const items = document.querySelectorAll(".fruits-list li");

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            const li = entry.target;
            const img = li.querySelector("img");
            const h3 = li.querySelector("h3");

            const highQualitySrc = li.getAttribute("data-img");
            const originalSrc = img.getAttribute("data-original") || img.src;

            if (!img.getAttribute("data-original")) {
                img.setAttribute("data-original", originalSrc);
            }

            if (entry.isIntersecting) {
                li.classList.add("visible");
                h3.style.color = "#e74c3c";
                if (highQualitySrc) {
                    img.src = highQualitySrc;
                }
            } 
            else {
                li.classList.remove("visible");
                img.src = originalSrc;
                h3.style.color = "#333";
            }
        });
    },
    { threshold: 0.1 }
);

items.forEach((item) => observer.observe(item));
