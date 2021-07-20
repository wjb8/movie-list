const functions = require("firebase-functions");
const admin = require("firebase-admin");
const db = admin.initializeApp().firestore;

exports.addMovie = functions.https.onCall(async (data) => {
  const moviesRef = db.collection(`movies`);
  const moviesSnapshot = await moviesRef.get();
  const movies = moviesSnapshot.docs.map((snapshot) => snapshot.data());
  const exists = movies.some((movie) => movie.title === data.title);

  if (!exists) {
    await moviesRef.add(data);
  }
});
