const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];
let searchEntry = "";

function search(str) {
	let results = [];
	results = fruit.filter(function(value){
		return value.toLowerCase().includes(str.toLowerCase()) === true;
	});
	showSuggestions(results, str);
}

function searchHandler(e) {
	let inputValue = input.value;
	search(inputValue);
}

function showSuggestions(results, inputVal) {
	while(suggestions.firstChild){
		suggestions.removeChild(suggestions.firstChild);
	  }
	if(inputVal !== ""){
		results.forEach(function(value){
			const newLi = document.createElement("li");
			newLi.innerText = value;
			suggestions.append(newLi);
		})
	}
}

function useSuggestion(e) {
	input.value = e.target.innerText;
	while(suggestions.firstChild){
		suggestions.removeChild(suggestions.firstChild);
	  }
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);