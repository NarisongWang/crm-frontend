import React, {useState} from 'react'
import { Login } from '../../component/login/Login.comp'
import { PasswordReset } from '../../component/password-reset/PasswordReset.comp';
import './entry.style.css'

export const Entry = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [frmLoad, setFrmLoad] = useState('login')

    const handleOnChange = (e) =>{
        const {name,value} = e.target;
        switch (name) {
            case "email":
                setEmail(value);
                break;
            case "password":
                setPassword(value);
                break;
            default:
                break;
        }
    }

    const handleOnSubmit = (e) =>{
        e.preventDefault();

        //TODO call api and submit the form
        //console.log(email+' '+password);
    }

    const handleOnResetSubmit = (e) =>{
        e.preventDefault();

        //TODO call api and submit the form
        //console.log(email);
    }

    const frmSwitch = (frmType) =>{
        setFrmLoad(frmType);
    }

    return (
    <div className='entry-page'>
        <div className='jumbotron'>
            {frmLoad === 'login' &&
                <Login className='form-box' 
                    handleOnChange={handleOnChange}
                    handleOnSubmit={handleOnSubmit}
                    frmSwitch={frmSwitch}
                    email={email}
                    password={password}
                />
            }
            {frmLoad === 'reset' &&
                <PasswordReset className='form-box' 
                    handleOnChange={handleOnChange}
                    handleOnResetSubmit={handleOnResetSubmit}
                    frmSwitch={frmSwitch}
                    email={email}
                />
            }
        </div>
    </div>
    
    )
}

