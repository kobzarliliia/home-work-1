function App () {

    let email = '';
    let password = '';

    function handleChangeInput(e) {
        let id = e.target.name;
        
        if (id === 'email') {
            email = e.target.value;
        } else if (id === 'password') {
            password = e.target.value;
        }
    }

    function handleSubmit (e) {
        e.preventDefault();

        if (email.trim() && password.trim()) {
            document.querySelector('form').reset();
            email = '';
            password = '';
        } else {
            alert('Please fill in the required fields');
        }
    }

    return(
        <form onSubmit={handleSubmit}>
            <div className="input-wrap">
                <label htmlFor="input-1">E-Mail</label>
                <input type="text" placeholder="Please, entry your e-mail" name="email" id="input-1" onChange={handleChangeInput} />
            </div>
            <div className="input-wrap">
                <label htmlFor="input-2">Passsword</label>
                <input type="password" placeholder="Please, entry your password" name="password" id="input-2" onChange={handleChangeInput} />
            </div>
            <div className="button-wrap">
                <button type="submit">Sign in</button>
            </div>
        </form>
    );
}

export default App;