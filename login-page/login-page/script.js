const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn= document.getElementById('login');
const signUpForm = document.querySelector('.sign-up form');
const signInForm = document.querySelector('.sign-in form');




registerBtn.addEventListener('click',()=> {
    container.classList.add('active');

})

loginBtn.addEventListener('click',()=> {
    container.classList.remove('active');

})

signUpForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = signUpForm.querySelector('input[type="text"]').value.trim();
    const email = signUpForm.querySelector('input[type="email"]').value.trim();
    const password = signUpForm.querySelector('input[type="password"]').value.trim();

    if(!name || !email || !password){
        alert('Please fill in all fields.');
        return;
    }

    const user = { name, email, password };
    localStorage.setItem('user', JSON.stringify(user));

    alert('Registration succesful! You can now log in.');
    signUpForm.reset();
    container.classList.remove('active'); 
});
signInForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = signInForm.querySelector('input[type="email"]').value.trim();
    const password = signInForm.querySelector('input[type="password"]').value.trim();

    const storedUser = JSON.parse(localStorage.getItem('user'));

    if(!storedUser){
        alert('No registered user found.Please sign up first.');
        return;
    }

    if(email === storedUser.email && password === storedUser.password){
        alert(`Welcome, ${storedUser.name}!`);
        signInForm.reset();
    } else {
        alert('Invalid email or password.Please try again.');
    }
});

