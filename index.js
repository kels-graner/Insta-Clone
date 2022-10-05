

const logButton = document.getElementById('login-button');
logButton.addEventListener('click', checking);
  


const storedUsers = ['kelsGraner', 'amineChater', 'rickg1960'];
const storedPasswords = ['tuna1', 'sushi100', 'squirrelDOG'];


function checking() {
    const userName = document.getElementById('username').value;
    localStorage.setItem('user', userName);
    const pw = document.getElementById('password').value;
  for (let i = 0; i < storedUsers.length; i++) {
    if (userName == storedUsers[i] && pw == storedPasswords[i]) {
        return takeToFeed();
    }
  }
  return wrong();
}

function takeToFeed() {
    document.getElementById('my-form').action = 'feed.html';
}

function wrong() {
    alert('Sorry the username or password are not correct. Please try again.')
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
}

