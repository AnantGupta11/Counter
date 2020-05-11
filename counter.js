var countInterval;

function startCounter(){

	var number= parseInt(document.getElementById("number").value);
	if(isNaN(number)){
		alert("Please Enter a Valid Number");
		clearInterval(countInterval);
		return;
	}
	if(number<1 || number >9){
		alert("Range out of bound");
		clearInterval(countInterval);
		return;
	}

	var currentNo=document.querySelector(".counter .current");
	var nextNo=document.querySelector(".counter .next");
	var count=0;

	resetNumber(currentNo, nextNo);
	clearInterval(countInterval);

	countInterval = setInterval(function () {
        if (count === number) {
            clearInterval(countInterval);
            alert("Counter has stopped");
            return;
        }
        increaseCount(currentNo, nextNo);
        count++;
    }, 1000);
}
function resetNumber(currentNo, nextNo, end){
	currentNo=0;
	nextNo=0;
}
function increaseCount(currentNo, nextNo) {

    nextNo.classList.add("animate");

    setTimeout(function () {
        currentNo.innerText = nextNo.innerText;
        nextNo.classList.remove("animate");
        nextNo.innerText = parseInt(nextNo.innerText) + 1;
    }, 500);

}