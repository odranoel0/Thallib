// login.js

function loginWithEmail() {
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;

  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(userCredential => {
      var user = userCredential.user;
      console.log('Usuário autenticado:', user.uid);
      window.location.replace('docs.html'); // Redirecionar para a página principal
    })
    .catch(error => {
      console.error('Erro na autenticação:', error.message);
    });
}

function loginWithGoogle() {
  var provider = new firebase.auth.GoogleAuthProvider();

  firebase.auth().signInWithPopup(provider)
    .then(result => {
      var user = result.user;
      console.log('Usuário autenticado com o Google:', user.uid);
      window.location.replace('docs.html'); // Redirecionar para a página principal
    })
    .catch(error => {
      console.error('Erro na autenticação com o Google:', error.message);
    });
}
