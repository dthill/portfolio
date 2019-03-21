
const editButton = document.getElementsByClassName("edit-button")[0];
const backgroundText = document.getElementsByClassName("background-text")[0];
const bannerText = document.getElementsByClassName("banner-text")[0];
const bannerArrow = document.getElementsByClassName("banner-arrow")[0];
const originalHTMLContent = document.getElementsByClassName("main")[0].innerHTML.replace(/(\r\n|\n|\r)/gm,"");
const mainSection = document.getElementsByClassName("main")[0];


backgroundText.innerText = originalHTMLContent;

function edit(){
	backgroundText.innerText = originalHTMLContent;
	mainSection.innerHTML = originalHTMLContent;
	editButton.innerText = editButton.innerText === "Hack it!" ? "Cancel!" : "Hack it!";
	editButton.classList.toggle("white");
	backgroundText.classList.toggle("background-text-edit");
	bannerText.classList.toggle("banner-text-hide");
	bannerArrow.classList.toggle("banner-arrow-hide");
}

editButton.addEventListener("click", edit);

document.addEventListener("keydown", function(event){
	if(event.key === "Escape"){
		edit();
	}
});

backgroundText.addEventListener("keyup", function(event){
	mainSection.innerHTML = this.innerText;
});
