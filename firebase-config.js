// firebase-config.js
const firebaseConfig = {
  apiKey: "AIzaSyCeWJwGPppebL6A3tCL_-ECKM-YZC62MHk",
  authDomain: "final-year-project-adpcs.firebaseapp.com",
  projectId: "final-year-project-adpcs",
  storageBucket: "final-year-project-adpcs.firebasestorage.app",
  messagingSenderId: "319242561406",
  appId: "1:319242561406:web:55137aa7fb9895b918f52f",
  measurementId: "G-C8DD4JR6TV",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

// Login function
function handleLogin(e) {
  e.preventDefault();
  console.log(auth);
  console.log(db);

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  auth
    .signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Redirect to home page or dashboard
      window.location.href = "./index.html";
    })
    .catch((error) => {
      alert(error.message);
    });
  alert("Login Successful");
}

// Sign up function
function handleSignup(e) {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirm-password").value;

  if (password !== confirmPassword) {
    alert("Passwords don't match!");
    return;
  }

  auth
    .createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Create user profile in Firestore
      return db.collection("users").doc(userCredential.user.uid).set({
        email: email,
        createdAt: new Date(),
      });
    })
    .then(() => {
      // Redirect to home page or dashboard
      window.location.href = "./index.html";
      alert("Sign Up Successful");
    })
    .catch((error) => {
      alert(error.message);
    });
}

// Auth state observer
auth.onAuthStateChanged((user) => {
  const loginBtn = document.querySelector(".btn-hd-2");
  const signupBtn = document.querySelector(".btn-hd");
  const accountDropdown = document.querySelector(".nav-hd-hero");

  if (user) {
    // User is signed in
    if (loginBtn) loginBtn.style.display = "none";
    if (signupBtn) signupBtn.style.display = "none";
    if (accountDropdown) {
      accountDropdown.querySelector(".dropdown-toggle").textContent =
        user.email;
      accountDropdown.querySelector(".dropdown-menu").innerHTML = `
                <li><a class="dropdown-item" href="#" onclick="handleSignOut()">Sign Out</a></li>
            `;
    }
  } else {
    // User is signed out
    if (loginBtn) loginBtn.style.display = "block";
    if (signupBtn) signupBtn.style.display = "block";
    if (accountDropdown) {
      accountDropdown.querySelector(".dropdown-toggle").textContent = "Account";
      accountDropdown.querySelector(".dropdown-menu").innerHTML = `
                <li><a class="dropdown-item" href="./signin.html">Login</a></li>
                <li><a class="dropdown-item" href="./signup.html">Sign up</a></li>
            `;
    }
  }
});

// Sign out function
function handleSignOut() {
  auth
    .signOut()
    .then(() => {
      window.location.href = "./index.html";
    })
    .catch((error) => {
      alert(error.message);
    });
}

function addOrder(productPrice, productName) {
  // Get the currently authenticated user
  const user = auth.currentUser;
  if (!user || user === "") {
    alert("No authenticated user found.");
    return;
  }

  // Add a new document in the "orders" collection
  db.collection("orders")
    .add({
      userEmail: user.email, // Authenticated user's email
      productName: productName,
      productPrice: productPrice,
      placedAt: firebase.firestore.FieldValue.serverTimestamp(), // Server timestamp
    })
    .then(function (docRef) {
      console.log("Order successfully added with ID:", docRef.id);
    })
    .catch(function (error) {
      console.error("Error adding order:", error);
    });
}
