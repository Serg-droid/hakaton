(function(){
  const canvas = document.createElement('canvas'),
        ctx = canvas.getContext('2d'),
        particles = [];

  let w = canvas.width = innerWidth,
      h = canvas.height = innerHeight;

  const properties = {
    bgColor: 'rgba(17, 17, 19, 1)',
    particleColor: 'rgba(255, 40, 40, 1)',
    particleRadius: 3,
    particleCount: 60,
    particleMaxVelocity: 0.5,
    lineLength: 150,
    particleLife: 10,
  };

  canvas.id = 'particles'

  class Particle{
    constructor(){
      this.x = Math.random() * w;
      this.y = Math.random() * h;
      this.velocityX = properties.particleMaxVelocity * (Math.random() * 2 - 1);
      this.velocityY = properties.particleMaxVelocity * (Math.random() * 2 - 1);
      this.life = 60 * properties.particleLife * Math.random();
    }

    position(){
      this.x + this.velocityX > w && this.velocityX > 0 || this.x + this.velocityX < 0 && this.velocityX < 0 ? this.velocityX *= -1 : this.velocityX;
      this.y + this.velocityY > h && this.velocityY > 0 || this.y + this.velocityY < 0 && this.velocityY < 0 ? this.velocityY *= -1 : this.velocityY;
      this.x += this.velocityX;
      this.y += this.velocityY;
    }
    reDraw(){
      ctx.beginPath();
      ctx.arc(this.x, this.y, properties.particleRadius, 0, Math.PI*2);
      ctx.closePath();
      ctx.fillStyle = properties.particleColor;
      ctx.fill();
    }
    reCalculateLife(){
      if(this.life < 1){
        this.x = Math.random() * w;
        this.y = Math.random() * h;
        this.velocityX = properties.particleMaxVelocity * (Math.random() * 2 - 1);
        this.velocityY = properties.particleMaxVelocity * (Math.random() * 2 - 1);
        this.life = 60 * properties.particleLife * Math.random();
      }
      this.life--;
    }

  }

  function reDrawBackground(){
    ctx.fillStyle = properties.bgColor;
    ctx.fillRect(0, 0, w, h);
  }

  function drawLines(){
    let x1, y1, x2, y2, length, opacity;
    for(let i = 0; i < particles.length; i++){
      for(let j = 0; j < particles.length; j++){
        x1 = particles[i].x;
        y1 = particles[i].y;
        x2 = particles[j].x;
        y2 = particles[j].y;
        length = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
        if(length < properties.lineLength){
          opacity = 1 - length / properties.lineLength;
          ctx.lineWidth = '0.5';
          ctx.strokeStyle = `rgba(255, 40, 40, ${opacity})`;
          ctx.beginPath();
          ctx.moveTo(x1, y1);
          ctx.lineTo(x2, y2);
          ctx.closePath();
          ctx.stroke();
        }
      }
    }
  }

  function reDrawParticles(){
    for(const part of particles){
      part.position();
      part.reDraw();
      part.reCalculateLife();
    }
  }

  let animationID;
  let animationTimeout;
  function loop(){
    reDrawBackground();
    reDrawParticles();
    drawLines();
    animationTimeout = setTimeout(() => {
      animationID = requestAnimationFrame(loop);
    }, 80)
  }

  let timeout;
  window.addEventListener('resize', () => {
    clearTimeout(timeout)
    timeout = setTimeout(() => {
      w = canvas.width = innerWidth,
      h = canvas.height = innerHeight;
    }, 200)
  });

  window.particles = {
    init(whereAppend) {
      for(let i = 0; i < properties.particleCount; i++){
        particles.push(new Particle());
      }
      whereAppend.appendChild(canvas);
      loop()
    },
    clear() {
      particles.splice(0, particles.length)
      clearTimeout(animationTimeout)
      cancelAnimationFrame(animationID)
    }
  }

})();

