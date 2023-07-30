import { SyntheticEvent, useState } from 'react';
import styles from '../../styles/users/register.module.scss'
import { postRequest } from '../../ultils/httpRequests';

export default function Register() {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async (e: SyntheticEvent) => {
        e.preventDefault();
        const jsonBody = {
            email,
            password,
            firstName,
            lastName
        }
        const res = await postRequest('/auth/register', JSON.stringify(jsonBody))
            .then((data) => {
                return data
            })
            .catch((e) => {
            })

        return {
            props: {
                donationReceiverList: res
            }
        }
    }

    return (
        <div className={styles.registerContainer}>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <input id="firstNameInput" className="form-control" onChange={e => setFirstName(e.target.value)} />
                    <label className="form-label" htmlFor="firstNameInput">First Name</label>
                </div>
                <div className="form-group">
                    <input id="emailInput" className="form-control" onChange={e => setLastName(e.target.value)} />
                    <label className="form-label" htmlFor="emailInput">Last Name</label>
                </div>
                <div className="form-group">
                    <input type="email" id="emailInput" className="form-control" onChange={e => setEmail(e.target.value)} />
                    <label className="form-label" htmlFor="emailInput">Email address</label>
                </div>

                <div className="form-group">
                    <input type="password" id="passwordInput" className="form-control" onChange={e => setPassword(e.target.value)} />
                    <label className="form-label" htmlFor="passwordInput">Password</label>
                </div>
                <button type="submit" className="btn btn-primary btn-block">Sign in</button>
            </form>
        </div>
    )
}
