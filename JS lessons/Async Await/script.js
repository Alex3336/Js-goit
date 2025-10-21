const URL = "https://jsonplaceholder.typicode.com";
async function fetchPosts(url) {
    const response = await fetch(`${url}/posts`);
    const posts = await response.json();
    return posts;
}

fetchPosts(URL)
    .then((posts) => console.log(posts))
    .catch((error) => console.log(error));

async function fetchById(url, id) {
    const response = await fetch(`${url}/posts/${id}`);
    const post = await response.json();
    return post;
}

fetchById(URL, 10)
    .then((post) => console.log(post))
    .catch((error) => console.log(error));

const newPost = {
    title: "optio id quia victoriam",
    body: "que hoi de gunio lokhard violenco parceptio",
    userId: 1,
};

async function createPost(url, post) {
    const options = {
        method: "POST",
        body: JSON.stringify(post),
        headers: {
            "Content-Type": "application/json",
        },
    };
    const response = await fetch(`${url}/posts`, options);
    const result = await response.json();
    return result;
}
createPost(URL, newPost)
    .then((post) => console.log(post))
    .catch((error) => console.log(error));

let updatedPost = {
    title: "6,6, Sic",
    body: "Im'a hebes morons Yoo yo sic voca me",
    userId: 5,
};

async function updatePost(url, updatedPost, postId) {
    const options = {
        method: "PATCH",
        body: JSON.stringify(updatedPost),
        headers: {
            "Content-Type": "application/json",
        },
    };

    const response = await fetch(`${url}/posts/${postId}`, options);
    const post = await response.json();
    return post;
}

updatePost(URL, updatedPost, 11)
    .then((post) => console.log(post))
    .catch((error) => console.log(error));

const postsIds = [2, 4, 6];
async function fetchArrayOfPosts(arr) {
    let postsPromises = arr.map(async (id) => {
        const response = await fetch(`${URL}/posts/${id}`);
        const result = response.json();
        return result;
    });
    return Promise.all(postsPromises);
}
fetchArrayOfPosts(postsIds)
    .then((posts) => {
        console.log(posts);
    })
    .catch((error) => {
        console.log(error);
    });
