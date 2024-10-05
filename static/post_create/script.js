const moment = require('moment');
const path = require('path');

import { posts } from './script';

const button = document.querySelector('#button');
const author = document.querySelector('#author').value;
const post = document.querySelector('#post').value;
const text = document.querySelector('#text').value;

button.addEventListener('click', () => {
    fetch('/post/create', {
        method: 'POST',
        body: JSON.stringify({
            id: posts.length,
            post: post,
            text: text,
            author: author,
            date: moment().format(YYYY-MM-DD),
        }),
        headers: {
            'Content-Type': 'application/json'
        },
    })
});