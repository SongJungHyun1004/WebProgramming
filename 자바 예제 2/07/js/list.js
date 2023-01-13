var itemList = [];

var addBtn = document.querySelector('#add');
addBtn.addEventListener("click", addList);

function addList() {
	var item = document.querySelector("#item").value;
	if (item != null) {
		itemList.push(item);
	}
}

function showList() {
	var list = "<ul>"
	for (var i=0; i < itemList.length; i++)
		list += "<li>" + itemList[i] + "</li>";
	list += "</ul>";

	document.querySelector("#itemList").innerHTML = list;
}