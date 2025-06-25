const gallery = document.querySelector(".gallery");
let instance = null;
let currentListItem = null;

gallery.addEventListener("click", onGalleryClick);

function onGalleryClick(e) {
    e.preventDefault();
    const target = e.target;

    if (target.nodeName !== "IMG") {
        return;
    }

    currentListItem = target.closest("li");
    const imageSrc = target.src;

    instance = basicLightbox.create(
        `<img src="${imageSrc}" width="800" height="600">`,
        {
            onShow: () => {
                document.addEventListener('keydown', onKeyPress);
            },
            onClose: () => {
                document.removeEventListener('keydown', onKeyPress);
            },
        }
    );

    instance.show();
}

function onKeyPress(e) {
    if (e.key === "Escape") {
        instance.close();
        return;
    }

    let nextListItem;
    if (e.key === "ArrowLeft") {
        nextListItem = currentListItem.previousElementSibling;
        if (!nextListItem) {
            nextListItem = gallery.lastElementChild;
        }
    } else if (e.key === "ArrowRight") {
        nextListItem = currentListItem.nextElementSibling;
        if (!nextListItem) {
            nextListItem = gallery.firstElementChild;
        }
    }

    if (nextListItem) {
        currentListItem = nextListItem;
        const newImageSrc = currentListItem.querySelector("img").src;
        const content = instance.element().querySelector("img");
        content.src = newImageSrc;
    }
}
