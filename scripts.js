let form_1 = document.querySelector(".form_1");
let form_2 = document.querySelector(".form_2");
let form_3 = document.querySelector(".form_3");


let form_1_btns = document.querySelector(".form_1_btns");
let form_2_btns = document.querySelector(".form_2_btns");
let form_3_btns = document.querySelector(".form_3_btns");
// let form_4_btns = document.querySelector(".form_4_btns");

let form_1_next_btn = document.querySelector(".form_1_btns .btn_next");
let form_2_back_btn = document.querySelector(".form_2_btns .btn_back");
let form_2_next_btn = document.querySelector(".form_2_btns .btn_next");
let form_3_back_btn = document.querySelector(".form_3_btns .btn_back");

let form_2_progessbar = document.querySelector(".form_2_progessbar");
let form_3_progessbar = document.querySelector(".form_3_progessbar");

let btn_done = document.querySelector(".btn_done");
let modal_wrapper = document.querySelector(".modal_wrapper");
let shadow = document.querySelector(".shadow");

form_1_next_btn.addEventListener("click", function(){
	form_1.style.display = "none";
	form_2.style.display = "block";

	form_1_btns.style.display = "none";
	form_2_btns.style.display = "flex";

	form_2_progessbar.classList.add("active");
});

form_2_back_btn.addEventListener("click", function(){
	form_1.style.display = "block";
	form_2.style.display = "none";

	form_1_btns.style.display = "flex";
	form_2_btns.style.display = "none";

	form_2_progessbar.classList.remove("active");
});

form_2_next_btn.addEventListener("click", function(){
	form_2.style.display = "none";
	form_3.style.display = "block";

	form_3_btns.style.display = "flex";
	form_2_btns.style.display = "none";

	form_3_progessbar.classList.add("active");
});

form_3_back_btn.addEventListener("click", function(){
	form_2.style.display = "block";
	form_3.style.display = "none";

	form_3_btns.style.display = "none";
	form_2_btns.style.display = "flex";

	form_3_progessbar.classList.remove("active");
});

btn_done.addEventListener("click", function(){
	modal_wrapper.classList.add("active");
})

shadow.addEventListener("click", function(){
	modal_wrapper.classList.remove("active");
})