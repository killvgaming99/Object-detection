let net = null;
const webcamElement = document.getElementById('webcam');
const canvas = document.getElementById('overlay');
const ctx = canvas.getContext('2d');

async function loadModel() {
    net = await cocoSsd.load();
    console.log("Model loaded successfully");
}

async function setupWebcam() {
    return new Promise((resolve, reject) => {
        const constraints = {
            video: {
                facingMode: "environment" // Use the back camera on mobile
            }
        };
        
        navigator.mediaDevices.getUserMedia(constraints)
            .then((stream) => {
                webcamElement.srcObject = stream;
                webcamElement.addEventListener('loadeddata', resolve, false);
            })
            .catch((error) => {
                console.error(error);
                reject();
            });
    });
}

async function detectObjects() {
    if (net != null) {
        const predictions = await net.detect(webcamElement);

        // Clear previous drawings
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        predictions.forEach(prediction => {
            const [x, y, width, height] = prediction.bbox;
            const text = prediction.class + " - " + Math.round(prediction.score * 100) + "%";

            // Draw bounding box
            ctx.strokeStyle = '#00FF00';
            ctx.lineWidth = 4;
            ctx.strokeRect(x, y, width, height);

            // Draw label
            ctx.fillStyle = '#00FF00';
            ctx.font = '18px Arial';
            ctx.fillText(text, x, y > 10 ? y - 5 : 10);
        });
    }

    requestAnimationFrame(detectObjects);
}

document.getElementById('startButton').addEventListener('click', async () => {
    await setupWebcam();
    detectObjects();
});

// Load model on page load
window.onload = loadModel;
