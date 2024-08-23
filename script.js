const video = document.getElementById('webcam');
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

async function setupWebcam() {
    return new Promise((resolve, reject) => {
        const constraints = {
            video: true
        };
        navigator.mediaDevices.getUserMedia(constraints).then((stream) => {
            video.srcObject = stream;
            video.addEventListener('loadeddata', () => resolve(), false);
        }).catch((err) => reject(err));
    });
}

async function loadModel() {
    const model = await cocoSsd.load();
    return model;
}

async function detectObjects(model) {
    const predictions = await model.detect(video);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    predictions.forEach((prediction) => {
        ctx.beginPath();
        ctx.rect(...prediction.bbox);
        ctx.lineWidth = 2;
        ctx.strokeStyle = 'red';
        ctx.fillStyle = 'red';
        ctx.stroke();
        ctx.fillText(
            `${prediction.class} (${Math.round(prediction.score * 100)}%)`,
            prediction.bbox[0],
            prediction.bbox[1] > 10 ? prediction.bbox[1] - 5 : 10
        );
    });
}

async function main() {
    await setupWebcam();
    const model = await loadModel();
    video.addEventListener('loadeddata', () => {
        setInterval(() => detectObjects(model), 100);
    });
}

main();
