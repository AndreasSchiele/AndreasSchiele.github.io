const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particleArray = [];

//mouse
let mouse = {
    x: null, 
    y: null, 
    radius: 100
}

window.addEventListener("mousemove", function(event){
    mouse.x = event.x + canvas.clientLeft/2;
    mouse.y = event.y + canvas.clientTop/2;

})

function drawImage(){
    let imageWidth = png.width;
    let imageHeight = png.height;
    const data = ctx.getImageData(0, 0, imageWidth, imageHeight);
    ctx.clearRect(0, 0, imageWidth, imageHeight);

    class Particle{
        constructor(x, y, color, size){
            this.x = x + canvas.width/2 - png.width*2,
            this.y = y + canvas.height/2 - png.height*2,
            this.color = color,
            this.size = 2,
            this.baseX = x + canvas.width/2 - png.width*2,
            this.baseY = y + canvas.height/2 - png.height*2,
            this.density = (Math.random()*10)+2
        }

        draw(){
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI*2);
            ctx.closePath();
            ctx.fill();
        }

        update(){
            ctx.fillStyle = this.color;

            //collision detection
            let dx = mouse.x - this.x;
            let dy = mouse.y - this.y;
            let distance = Math.sqrt(dx*dx + dy*dy);

            let forceDirectionX = dx/distance;
            let forceDirectionY = dy/distance;

            //max distance, past that the force will be 0
            const maxDistance = 100;
            let force = (maxDistance - distance)/maxDistance;
            if(force<0){force = 0;}

            let directionX = (force * forceDirectionX * this.density * 0.6);
            let directionY = (force * forceDirectionY * this.density * 0.6);

            if(distance < mouse.radius + this.size){
                this.x -= directionX;
                this.y -= directionY;
            }
            else{
                if(this.x !== this.baseX){
                    let dx = this.x - this.baseX;
                    this.x -= dx/20;
                }
                if(this.y !== this.baseY){
                    let dy = this.y - this.baseY;
                    this.y -= dy/20;
                }
            }
            this.draw();
        }
    }

    function init(){
        particleArray = [];

        for(y=0, y2=data.height; y<y2; y++){
            for(x=0, x2=data.width; x<x2; x++){
                if(data.data[(y * 4 * data.width) + (x*4) + 3] > 128){
                    let positionX = x;
                    let positionY = y;
                    let color = "rgb(" + data.data[(y * 4 * data.width) + (x * 4)] + "," +
                                        data.data[(y * 4 * data.width) + (x * 4) + 1] + "," +
                                        data.data[(y * 4 * data.width) + (x * 4) + 2] + ")";
                    particleArray.push(new Particle(positionX * 4, positionY * 4, color));

                }
            }
        }
    }

    function animate(){
        requestAnimationFrame(animate);
        ctx.fillStyle = "rgba(0,0,0,0.05)";
        ctx.fillRect(0, 0, innerWidth, innerHeight);

        for(let i = 0; i < particleArray.length; i++){
            particleArray[i].update();
        }

    }
    init();
    animate();

    window.addEventListener("resize", function(){
        canvas.width = innerWidth;
        canvas.height = innerHeight;
        init();
    });
}

const png = new Image();
png.src = "data:image/png;base64,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";

window.addEventListener("load", (event) => {
    console.log("page has loaded");
    ctx.drawImage(png, 0, 0);
    drawImage();
});