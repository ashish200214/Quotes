const mainDiv = document.getElementById("main-div")
function display(element)
{	
	const subDiv = document.createElement("div")
	subDiv.classList.add("sub-div")
	mainDiv.append(subDiv)

	//author
	const btn = document.createElement("button")
	
		const author = document.createElement("h3")
		author.textContent = "Author : "+element.author;
		author.classList.add("author")
	

	//quotes
	const quote = document.createElement("blockquote")
	quote.textContent = `Quotes : "${element.quote}"`
	quote.classList.add("quote")

	subDiv.append(quote,author)
}
async function getData(){
	
	try{
		const result = await fetch("https://dummyjson.com/quotes")
		let jsonData
		if(result.ok){
			jsonData = await result.json()
			jsonData = jsonData.quotes
			console.log(jsonData)

			jsonData.forEach(display)
		}
	}catch(e){
		console.log("An error occurred : "+e)
	}
}


getData()