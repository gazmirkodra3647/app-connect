// filename: sophisticated_app.js

// This complex and sophisticated code represents a blogging application
// It includes features like user authentication, creating and editing blog posts,
// commenting on blog posts, and the ability to like and share posts.

// Import necessary modules
const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const app = express();
app.use(bodyParser.json());

// Mock database
let users = [];
let posts = [];
let comments = [];

// User Registration
app.post('/register', async (req, res) => {
    const { username, password } = req.body;

    // Check if user already exists
    const existingUser = users.find((user) => user.username === username);
    if (existingUser) {
        return res.status(409).json({ message: 'Username already exists' });
    }

    try {
        // Hash the password before storing
        const hashedPassword = await bcrypt.hash(password, 10);

        // Add the new user to the database
        users.push({ username, password: hashedPassword });
        return res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        return res.status(500).json({ message: 'Error occurred during registration' });
    }
});

// User Login
app.post('/login', async (req, res) => {
    const { username, password } = req.body;

    // Check if user exists
    const user = users.find((user) => user.username === username);
    if (!user) {
        return res.status(401).json({ message: 'Invalid credentials' });
    }

    try {
        // Compare the provided password with the stored hashed password
        const match = await bcrypt.compare(password, user.password);
        if (!match) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        // Generate a JSON Web Token for authentication
        const token = jwt.sign({ username }, 'secret_key', { expiresIn: '1h' });
        return res.status(200).json({ token });
    } catch (error) {
        return res.status(500).json({ message: 'Error occurred during login' });
    }
});

// Create New Post
app.post('/posts', authenticateToken, (req, res) => {
    const { title, content } = req.body;
    const newPost = { title, content, author: req.username, likes: 0, shares: 0 };
    posts.push(newPost);
    return res.status(201).json({ message: 'Post created successfully' });
});

// Get All Posts
app.get('/posts', (req, res) => {
    return res.status(200).json(posts);
});

// Create New Comment
app.post('/comments', authenticateToken, (req, res) => {
    const { postId, content } = req.body;
    const newComment = { postId, content, author: req.username };
    comments.push(newComment);
    return res.status(201).json({ message: 'Comment created successfully' });
});

// Add Like to a Post
app.post('/likes', authenticateToken, (req, res) => {
    const { postId } = req.body;
    const post = posts.find((post) => post.id === postId);
    if (!post) {
        return res.status(404).json({ message: 'Post not found' });
    }
    post.likes++;
    return res.status(200).json({ message: 'Post liked successfully' });
});

// Add Share to a Post
app.post('/shares', authenticateToken, (req, res) => {
    const { postId } = req.body;
    const post = posts.find((post) => post.id === postId);
    if (!post) {
        return res.status(404).json({ message: 'Post not found' });
    }
    post.shares++;
    return res.status(200).json({ message: 'Post shared successfully' });
});

// Middleware for token authentication
function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (!token) {
        return res.status(401).json({ message: 'No authentication token provided' });
    }

    jwt.verify(token, 'secret_key', (error, user) => {
        if (error) {
            return res.status(403).json({ message: 'Token verification failed' });
        }

        req.username = user.username;
        next();
    });
}

// Start the server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});