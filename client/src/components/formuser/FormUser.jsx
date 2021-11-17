import { useState } from "react";
const  [ username, setUsername ] = useState('');
const  [ password, setPassword ] = useState('');

const handleSubmit = () => {

}

const FormUser = () =>{
    return (
        
        <form onSubmit={handleSubmit}>
            <div>
                <input
                type='text'
                name='Username'
                value={username}
                placeholder='Username'
                onChange={({target}) => setUsername(target.value)}
                />
            </div>
            <div>
                <input
                type='password'
                name='Password'
                value={password}
                placeholder='Password'
                onChange={({target}) => setPassword(target.value)}
                />
            </div>
            <button>
                Log in
            </button>
        </form>
    )
}

export default FormUser;