const express = require('express');
const app = express();
const db = require('./db');
const Menu = require('./menu');

// Middleware FIRST
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get('/', (req, res) => {
    res.send('Hello World! - I am backend developer');
});

app.get('/chicken', (req, res) => {
    res.send('We are having steroids biryani');
});

// ✅ FIXED GET
app.get('/menu', async (req, res) => {
    try {
        const menus = await Menu.find();
        res.json(menus);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// ✅ FIXED POST
app.post('/menu', async (req, res) => {
    try {
        console.log("BODY RECEIVED:", req.body); // 🔍 debug

        const newMenu = new Menu(req.body);
        await newMenu.save();

        res.status(201).json({
            message: 'Menu item saved successfully',
            data: newMenu
        });
    } catch (err) {
        console.error("ERROR:", err.message);
        res.status(500).json({ error: err.message });
    }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`🚀 listening to port ${PORT}`);
});

