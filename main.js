let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #1b3c37;">Bienvenidx a mi perfil, ¡conóceme!</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
