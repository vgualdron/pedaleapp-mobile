import Firebase from 'firebase';
const config = {
    apiKey: 'AIzaSyAqsLlT6-5j9ZIP_fVpbIiCMWfnt4b8DQM',
    authDomain: 'post-and-comments-ff9bb.firebaseapp.com',
    projectId: 'post-and-comments-ff9bb',
    storageBucket: 'post-and-comments-ff9bb.appspot.com',
    messagingSenderId: '40781687045',
    appId: '1:40781687045:web:7884c23fb558f24cb2ef6c',
    measurementId: 'G-TCP4G3TX8M',
    user: {
      email: 'victor.gualdron.r@gmail.com',
      password: '1234567890ABCDEFGHIJ'
    }
};

let app = null;

if (!Firebase.apps.length) {
  app = Firebase.initializeApp(config);
} else {
  app = Firebase.app();
}

const db = app.database();
const users = db.ref('users');
export const registerUser = async (object) => {
  return await users.push(object);
};

/*
  async registerUser (object) {
    await users.push(object, function (error) {
      if (error) {
        alert('Error al intentar agregar el registro.', 'Aviso');
      } else {
        console.log('Registro agregado correctamente.', 'Aviso');
      }
    });
  },
  async addComment (object, idPost) {
    const postRef = db.ref('posts/' + idPost + '/comments');
    await postRef.push(object, function (error) {
      if (error) {
        alert('Error al intentar agregar el comentario.', 'Aviso');
      } else {
        console.log('Comentario agregado correctamente.', 'Aviso');
      }
    });
  }

  async addReaction (object, idPost) {
    const postRef = db.ref('posts/' + idPost + '/reactions');
    await postRef.push(object, function (error) {
      if (error) {
        alert('Error al intentar agregar la reacción.', 'Aviso');
      } else {
        console.log('Reacción agregada correctamente.', 'Aviso');
      }
    });
  }

  async removeReaction (idPost, idReaction) {
    console.log(idPost);
    console.log(idReaction);
    const postRef = db.ref('posts/' + idPost + '/reactions/' + idReaction);
    await postRef.remove(function (error) {
      if (error) {
        alert('Error al intentar eliminar la reacción.', 'Aviso');
      } else {
        console.log('Reacción eliminada correctamente.', 'Aviso');
      }
    });
  }
*/
  
export default {};