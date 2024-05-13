const loginForm = document.querySelector('#loginForm')// este js es la parte de iniciar sesión //

loginForm.addEventListener('submit', (e)=>{// con todo esto puedo verficar si esta bien el correo o la contraseña 
    e.preventDefault()
    const email = document.querySelector('#email').value
    const password = document.querySelector('#password').value
    const Users = JSON.parse(localStorage.getItem('users')) || []
    const validUser = Users.find(user => user.email === email && user.password === password)
    if(!validUser){
        return alert('Usuario o contraseña incorrectos estupido!')
    }
    alert(`Bienvenido ${validUser.name}`)// si la contra y el usuario son correctos me mandara al portafolio
    localStorage.setItem('login_success', JSON.stringify(validUser))
    window.location.href = 'porta.html'   

})  
