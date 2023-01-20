var source = ["Français"];//, "عربية"
const letters = [
	['A', 'ا', 'ⴰ'],
	['B', 'ب', 'ⴱ'],
	['C', 'س', 'ⵛ'],
	['D', 'د', 'ⴷ'],
	['E', '', 'ⴻ'],
	['F', 'ف', 'ⴼ'],
	['G', 'ج', 'ⴳ'],
	['H', 'ه', 'ⵀ'],
	['I', 'إ', 'ⵉ'],
	['J', 'ج', 'ⵊ'],
	['K', 'ك', 'ⴽ'],
	['L', 'ل', 'ⵍ'],
	['M', 'م', 'ⵎ'],
	['N', 'ن', 'ⵏ'],
	['Q', 'ك', 'ⵇ'],
	['R', 'ر', 'ⵔ'],
	['S', 'ص', 'ⵙ'],
	['T', 'ط', 'ⵜ'],
	['U', 'ا', 'ⵓ'],
	['W', 'و', 'ⵡ'],
	['X', '', 'ⵅ'],
	['Y', 'ي', 'ⵢ'],
	['Z', 'ز', 'ⵣ'],
	['7', 'ح','ⵣ'],
	['.', '.', '.'],
	[' ', ' ', ' '],
];
console.log(letters)
function fillDropdown(arr, element) {
  var selectHTML = "<select>";
  for (var i = 0; i < arr.length; i++) {
    selectHTML += "<option>" + arr[i] + "</option>";
  }
  selectHTML += "</select>";
  element.innerHTML = selectHTML;
}
var sourceList = document.querySelector("#sourceList");
var textSource = document.querySelector("#textSource");
var textDesination = document.querySelector("#textDesination");

fillDropdown(source, sourceList);
sourceList.addEventListener("change", function() {
    if (sourceList.value == "Français"){
        textSource.value = ""
        textSource.placeholder ="Type your text"
        textSource.dir = "ltr"
    }
    else{
        textSource.value = ""
        textSource.placeholder = "اكتب النص الخاص بك"
        textSource.dir = "rtl"

    }
});
textSource.addEventListener("input", function(e) {
    var text = e.target.value;
    let result = text.split("").map(x => {
        return (letters.find(y=>y.includes(x.toUpperCase()))??['_', '_', '_'])[2]
    })
    console.log(result)
    textDesination.innerText = result.join("");
});
function copyText() {
	navigator.clipboard.writeText
		(textDesination.innerText);
}