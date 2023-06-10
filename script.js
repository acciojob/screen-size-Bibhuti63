//your JS code here. If required.
// const element=document.getElementById('div1');
// element.innerHTML="Hello World";

	

      findSize();

      window.addEventListener("resize", findSize);

	function findSize() {
        var width1 = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        var height1 = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
        var size = document.getElementById("id1");
        size.innerHTML = "<h1>Width: " + width1 + " and Height: " + height1 + "</h1>";
	}