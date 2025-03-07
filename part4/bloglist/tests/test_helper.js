const Blog = require("../models/blog");
const User = require("../models/user");

const defaultArticles = [
  {
    _id: "5b422a851b54a676234d17f7",
    title: "Advanced React Concepts",
    author: "Jane Doe",
    url: "https://advancedreact.com/",
    likes: 15,
    __v: 0,
  },
  {
    _id: "5b422aa71b54a676234d17f8",
    title: "Why You Should Avoid Global Variables",
    author: "John Smith",
    url: "http://www.example.com/avoid-global-variables",
    likes: 8,
    __v: 0,
  },
  {
    _id: "5b422b3a1b54a676234d17f9",
    title: "The Art of Clean Code",
    author: "Michael Clean",
    url: "http://www.cleancode.com/",
    likes: 20,
    __v: 0,
  },
  {
    _id: "5b422b891b54a676234d17fa",
    title: "Understanding Unit Testing",
    author: "Alice Johnson",
    url: "http://www.testingmadeeasy.com/",
    likes: 18,
    __v: 0,
  },
  {
    _id: "5b422ba71b54a676234d17fb",
    title: "The Future of Software Architecture",
    author: "Bob Builder",
    url: "http://www.softwarearchitecture.com/",
    likes: 4,
    __v: 0,
  },
  {
    _id: "5b422bc61b54a676234d17fc",
    title: "The Battle of Programming Paradigms",
    author: "John Turing",
    url: "http://www.programmingparadigms.com/",
    likes: 11,
    __v: 0,
  },
];

const articlesInDb = async () => {
  const articles = await Blog.find({});
  return articles.map((article) => article.toJSON());
};

const usersInDb = async () => {
  const users = await User.find({});
  return users.map((user) => user.toJSON());
};

module.exports = { defaultArticles, articlesInDb, usersInDb };
