//Your code comes  here






































// DO NOT MODIFY THE CODE BELOW THIS LINE
let toExport;

try {
	toExport = [
		{name: "favMovies", content: favMovies, type: "array"},
		{name: "moviesList", content: moviesList, type: "function"},
		{name: "titleLogger", content: titleLogger, type: "function"},
	]
} catch (error) {

	toExport = {error: error.message}

}

export {toExport};
