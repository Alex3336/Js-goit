const newPost1 = {
    userId: 1212,
    title: "grabli",
    body: "davaite ya budu kopatb grablyami, davaite ya budu kopatb grablyami, davaite ya budu kopatb lozhkoy, davaite ya budu kopatb lozhkoy, davaite ya budu kopatb vilkoy, davaite ya budu kopatb vilkoy",
};

function createPost(post) {
    const Options = {
        method: "POST",
        body: JSON.stringify(post),
        Headers: {
            "Content-type": "application/json",
        },
    };
    return fetch("https://jsonplaceholder.typicode.com/posts", Options)
        .then((response) => response.json())
        .then((json) => console.log(json));
}

createPost(newPost1)
    .then((post) => console.log(post))
    .catch((error) => console.log(error));
createPost({ userId: "2", title: "artist", body: "megagiganiga" })
    .then((post) => console.log(post))
    .catch((error) => console.log(error));

function updatePost(updatedPost, postId) {
    const Options = {
        method: "PATCH",
        body: JSON.stringify(updatedPost),
        Headers: {
            "Content-type": "application/json",
        },
    };
    return fetch(
        `https://jsonplaceholder.typicode.com/posts/${postId}`,
        Options
    ).then((response) => {
        if (!response.ok) {
            throw new Error(response.status);
        }
        return response.json();
    });
}
updatePost({ title: "A.H. Reborn as a nigga" }, 2)
    .then((post) => console.log(post))
    .catch((error) => console.log(error));
