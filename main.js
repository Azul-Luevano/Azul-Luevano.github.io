let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('Mi habilidad principal es el diseño y la programación de sitios web modernos y efectivos.')
  .pauseFor(200)
  .deleteChars(10)
  .start();
