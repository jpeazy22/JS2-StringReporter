var word = prompt("Type in any word below:")

console.log(word)


alert("The word you entered: " + word + ".\n" +
	"There are " + word.length + " letters in " + word +".\n" +
	"The third character is " + word.charAt(2) + ".\n" +
	"The word in lowercase: " + word.toLowerCase(word) + ".\n" +
	"The word in uppercase: " + word.toUpperCase(word) + ".\n" +
	"The word in a sentence: I do not love " + word + " most the time.\n" +
	"The subword is: " + word.substring(1,6) + "."
	);