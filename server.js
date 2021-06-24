require('dotenv').config();
const express = require('express');

const app = express();

const PORT = process.env.PORT ? process.env.PORT : 8000;

app.get('/', (req, res) => {
	res.send('Hello World 🎉 👋🏻');
});

// start the server
app.listen(PORT, () => {
	console.log(`app is listening on port ${PORT} 🚀`);
});
