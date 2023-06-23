//your JS code here. If required.
function prom(){
	let a=new Promise((resolve) =>{
		setTimeout(() => {
      resolve("Hello, world!");
    }, 1000);
	});
	return a;
}
let Element=document.getElementById("output");
prom().then((item) => Element.textContent= item);
