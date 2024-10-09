const posts = [
    {
      id: "1",
      post: "I`m in San Francisco",
      text: "I`m finally in San Francisco",
      author: "Andrey",
      date: "02.07.2021"
    },
    {
      id: "2",
      post: "Had a great day at the Golden Gate",
      text: "Visited the Golden Gate Bridge, the view is amazing!",
      author: "Alex",
      date: "27.04.2023"
    },
    {
      id: "3",
      post: "Exploring Chinatown",
      text: "Chinatown is so lively, with amazing food and culture!",
      author: "Alexander",
      date: "14.07.2019"
    },
    {
      id: "4",
      post: "Last day in San Francisco",
      destextcription: "Time to say goodbye to this amazing city.",
      author: "Andrey",
      date: "09.07.2021"
    },
];

function getAllPosts() {
    const context = {
        posts
    };
    return context;
};

function getPostById(id) {
  const context = {
      post: posts[id-1]
  };
  return context;
};

function createPost (data) {
    posts.push(data)
};

module.exports = {
    posts,
    getAllPosts,
    getPostById,
    createPost,
}