window.onload=Init; 

function Init() 
	{ 
		// console.log('coucou'); 

		document.getElementById('dg').addEventListener('dragstart', function(event) {
		   
		    console.log("draggable");
		    event.dataTransfer.setData('dg', event.target.id);
		    // event.dataTransfer.effectAllowed = "copyMove";
		     var img = new Image(); 
			 img.src = 'js.png'; 
			 event.dataTransfer.setDragImage(img, 10, 10);

		});

		document.getElementById('dp').addEventListener('dragover', function(event) {

			 event.preventDefault();

			});

		document.getElementById('dg').addEventListener("dragleave", function( event ) {

		      // reset background of potential drop target when the draggable element leaves it
		          event.target.style.background = "green";

		  });


		document.getElementById('dp').addEventListener('drop', function(event) {

			 console.log("drop");
			 
			 // // Get the data, which is the id of the drop target
			 var data = event.dataTransfer.getData('dg');
			 event.target.appendChild(document.getElementById(data));

			});
	}