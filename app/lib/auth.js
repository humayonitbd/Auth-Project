// lib/auth.js

// Simulated user data
const users = [
  { email: 'user1@example.com', password: 'password1', name: 'User 1' },
  { email: 'user2@example.com', password: 'password2', name: 'User 2' }
];

// Simulated authentication function
export async function signIn(email, password) {
  // Simulate an asynchronous request to validate credentials
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = users.find(user => user.email === email && user.password === password);
      if (user) {
        resolve(user); // User found, resolve with user object
      } else {
        reject(new Error('Invalid email or password')); // No user found, reject with error
      }
    }, 1000); // Simulate delay for async operation
  });
}
