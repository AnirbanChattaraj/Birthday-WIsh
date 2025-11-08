
const colors = ['#FFD700','#FFA500','#FFD700','#FFF8DC']; // gold shades
const symbols = ['❤️','💖','✨','🎉','🌟'];
for(let i=0;i<60;i++){
  const el = document.createElement('div');
  el.className = 'floating';
  el.innerHTML = symbols[Math.floor(Math.random()*symbols.length)];
  el.style.left = Math.random()*100+'vw';
  el.style.fontSize = (15+Math.random()*20)+'px';
  el.style.animationDuration = (3+Math.random()*5)+'s';
  el.style.animationDelay = (Math.random()*5)+'s';
  el.style.color = colors[Math.floor(Math.random()*colors.length)];
  document.body.appendChild(el);
}
document.body.addEventListener('click', function(e){
  const spark = document.createElement('div');
  spark.className = 'floating';
  spark.innerHTML = symbols[Math.floor(Math.random()*symbols.length)];
  spark.style.left = e.clientX + 'px';
  spark.style.top = e.clientY + 'px';
  spark.style.fontSize = (15+Math.random()*25)+'px';
  spark.style.animationDuration = (2+Math.random()*3)+'s';
  spark.style.animationDelay = '0s';
  spark.style.color = colors[Math.floor(Math.random()*colors.length)];
  document.body.appendChild(spark);
});
