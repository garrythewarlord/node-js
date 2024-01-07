

const { readFile, writeFile} = require('fs')

console.log('start')
readFile('./content/file.txt', 'utf8', (error, result) => {
	if(error){
		return error;
	}
	const first = result;
	readFile('./content/result.txt', 'utf8', (error, result) => {
		if(error){
			return error;
		}
		const second = result;
		writeFile('./content/result-async.txt', `this is the result: ${first}, ${second}`, (error, result) => {
			if(error){
				return; 
			}
			console.log('done with this task');
		})
	})
})



const http = require('http');


const server = http.createServer((req, res) => {
	if (req.url === '/home'){
		res.end('Welcome to HomePage');
	}
	if(req.url === '/about'){
		res.end("This is about");
	}
	res.end(`
		<h1>Oops</h1>
		<p>The page doesn't exist</p>
		<a href='/home'>Go back</a>
		`);
})

server.listen(3000);  