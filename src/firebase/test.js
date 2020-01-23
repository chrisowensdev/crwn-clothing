import firebase from "firebase/app";
import "firebase/firestore";

const firestore = firebase.firestore();

firestore
  .collection("users")
  .doc("wgVMRDdBi5QpI19xnLfI")
  .collection("cartItems")
  .doc("WZTcdH4A4UZIdKtwuNZy");
