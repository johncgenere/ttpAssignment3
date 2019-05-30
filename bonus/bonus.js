function getVolume(){
  let radius = document.getElementById('radius').value;
  let volume = (4/3) * Math.PI * Math.pow(radius, 3);
  document.getElementById('text').textContent = "Sphere's Volume is " + volume;
}
