// 'use server'

import { cookies } from 'next/headers'
import { SyntheticEvent, useState } from 'react';
import { getRequest, postRequest } from '../../ultils/httpRequests';

// export async function getServerSideProps() {
//     const res = await getRequest('/donation-receivers')
//         .then((data) => {
//             return data
//         })

//     return {
//         props: {
//             donationReceiverList: res
//         }
//     }
// }


export default function Register() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async (e: SyntheticEvent) => {
        e.preventDefault();
        const jsonBody = {
            email,
            password,
        }
        const a = await postRequest('/auth/signin', JSON.stringify(jsonBody))
            .then((data) => {
                const token = data.token;
                cookies().set('name', 'lee')
            })
            .catch((e) => {
                console.log("@@@@@@@@@@@", e)
            })

        return a;
    }

    return (
        <div className="flex min-h-full flex-col items-center justify-center px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign In</h2>
            </div>

            <div className="mt-10 w-2/4 w-2/4 p-12 justify-center bg-white rounded-lg border border-gray-200">
                <form className="space-y-6" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                        <div className="mt-2">
                            <input id="email" name="email" type="email" autoComplete="email" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
                        </div>
                        <div className="mt-2">
                            <input id="password" name="password" type="password" autoComplete="current-password" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                    </div>

                    <div>
                        <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign In</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
