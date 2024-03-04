import {
  collection,
  query,
  orderBy,
  onSnapshot,
  updateDoc,
  doc,
  addDoc,
  deleteDoc,
  Firestore,
  getDocs,
  setDoc,
  getDoc,
} from "firebase/firestore";
import { db } from "./firebase";
import { auth } from "./firebase";
import { useNavigate } from "react-router-dom";

const user = auth.currentUser;
/// FLASHCARD CRUD OPERATIONS ////

// CREATE FLASHCARD SET
export const handleFlashcardSubmit = async (e, cardsWithHeader) => {
  e.preventDefault();
  if (cardsWithHeader.length !== 0) {
    const database = cardsWithHeader[0].title;

    try {
      const userRef = collection(db, auth.currentUser.uid);
      // const userRefPath = userRef.path;
      await setDoc(doc(userRef, database), {
        cardsWithHeader,
        time: new Date(),
      });
      console.log("Document written with ID: ", database);
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  }
};

// READ DATA FOR FLASHCARD SETS
export const subscribeToFlashcardSets = (setFlashcardSets) => {
  if (auth.currentUser === null) {
    console.log("No user is signed in");
  } else {
    console.log("User is signed in", auth.currentUser.uid);
    const userDB = query(collection(db, auth.currentUser.uid));
    const unsubscribe = onSnapshot(userDB, (querySnapshot) => {
      const flashcardSets = [];
      querySnapshot.forEach((doc) => {
        flashcardSets.push({
          id: doc.id,
          title: doc.id,
          description: doc.data().cardsWithHeader[0].description,
          number: doc.data().cardsWithHeader.length - 1,
        });
        setFlashcardSets([...flashcardSets]);
      });
    });

    return unsubscribe;
  }
};

// FETCH CARDS FROM A SET
export const fetchCardsFromSet = async (setId) => {
  const setRef = doc(db, auth.currentUser.uid, setId);
  const setSnap = await getDoc(setRef);

  if (setSnap.exists()) {
    let cards = setSnap.data().cardsWithHeader;
    cards.shift();
    console.log("Document data:", cards);
    return [...cards];
  } else {
    console.error("No such document!");
    return [];
  }
};
