const button = document.querySelector('#button');

button.addEventListener('click', () => {

    const author = document.querySelector('#author').value;
    const post = document.querySelector('#post').value;
    const text = document.querySelector('#text').value;

    fetch('/post/create', {
        method: 'POST',
        body: JSON.stringify({
            id: "5",
            post: post,
            text: text,
            author: author,
            date: "06.10.2024",
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    console.log(data);
})