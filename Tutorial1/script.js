function initGL(canvas) {

	let glContext;

	try {

		glContext = canvas.getContext("webgl2");
		glContext.viewportWidth = canvas.width;
		glContext.viewportHeight = canvas.height;

	} catch (e) {
	
	}

	return glContext;

}


function webGLStart() {

	var canvas = document.getElementById("canvas");
	let gl = initGL(canvas);

	if(gl)
	{

		window.addEventListener("resize", () => {

			resize(gl, true);

		});

		gl.clearColor(0.0, 0.0, 0.0, 1.0);
		gl.clear(gl.COLOR_BUFFER_BIT);

	} else {

		alert("Your browser does not support WebGL2, sorry :-(");

	}

}

function resize(gl, enableHDDPI) {

	const cssToRealPixels = enableHDDPI ? (window.devicePixelRatio || 1) : 1;

	// Lookup the size the browser is displaying the canvas.
	var displayWidth  = Math.floor(gl.canvas.clientWidth  * cssToRealPixels);
	var displayHeight = Math.floor(gl.canvas.clientHeight * cssToRealPixels);

	// Make the canvas the same size
	gl.canvas.width  = displayWidth;
	gl.canvas.height = displayHeight;

	gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);

}