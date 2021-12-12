function App () {

    let email = '';
    let password = '';

    function handleChangeInput(e) {
        let id = e.target.id;
        
        if (id === 'email') {
            email = e.target.value;
        } else if (id === 'password') {
            password = e.target.value;
        }
    }

    function handleSubmit (e) {
        e.preventDefault();

        if (email.length && password.length) {
            console.log({ email, password });
            email = '';
            password = '';
            document.querySelector('#email').value = email;
            document.querySelector('#password').value = password;
        } else {
            alert('Заполните, пожалуйста, обязательные поля');
        }
    }

    return(
        <form onSubmit={handleSubmit}>
            <div className="input-wrap">
                <label htmlFor="input-1">E-Mail</label>
                <input type="text" placeholder="Please, entry your e-mail" id="email" onChange={handleChangeInput} />
            </div>
            <div className="input-wrap">
                <label htmlFor="input-2">Passsword</label>
                <input type="password" placeholder="Please, entry your password" id="password" onChange={handleChangeInput} />
            </div>
            <div className="button-wrap">
                <button type="submit">Sign in</button>
            </div>
        </form>
    );
}

export default App;