const express = require('express');
const PythonShell = require('python-shell');

const app = express();
const port = process.env.PORT || 5000;

app.get('/api/dice-poker', (req, res) => {
	// res.send({ express: 'Hello From Express' });
	PythonShell.run('./main.py', function (err) {
		if (err) throw err;
		console.log('finished');
	});
});

app.listen(port, () => console.log(`Listening on port ${port}`));

