function checkPassword(){
  let username = document.getElementById('username').value;
  let password = document.getElementById('password').value;
  let email = document.getElementById('email').value;
  
  if(password !== '12345678' || username === "" || email === ""){
    window.alert('Incorrect Information:\nCould be empty username/email or wrong password.\nTRY AGAIN!');
    document.getElementById('text').textContent = "Is Your Info Right?";
  } else {
    document.getElementById('text').textContent = "Correct!";
  }
}
