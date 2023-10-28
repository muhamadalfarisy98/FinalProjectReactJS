import { GlobalContext } from '../Context/context'
import { useContext } from 'react'

export const PasswordPage =  () => {
    const { state, handler } = useContext(GlobalContext)
    const {
        inputPassword
    } = state 

    const {
        handleChangePassword,
        handlePassword,
    } = handler

    return (
        <>
            <div className="max-w-lg mx-auto my-10 bg-white p-8 rounded-xl shadow shadow-slate-300">
                <h1 className="text-4xl font-medium">Reset password</h1>
                <p className="text-slate-500">Please fill up the form to reset the password</p>
                
                <form action className="my-10" onSubmit={handlePassword}>
                    <div className="flex flex-col space-y-5">
                        <label htmlFor="current_password">
                            <p className="font-medium text-slate-700 pb-2">Current Password</p>
                            <input id="current_password" name="current_password"
                             type="current_password" className="w-full py-3 border border-slate-200 
                             rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" 
                             placeholder="Current password" 
                             onChange={handleChangePassword} value={inputPassword.current_password}
                             required
                             />
                        </label>

                        <label htmlFor="new_password">
                            <p className="font-medium text-slate-700 pb-2">New Password</p>
                            <input id="new_password" name="new_password" type="new_password" 
                            className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" 
                            placeholder="New password" 
                            onChange={handleChangePassword} value={inputPassword.new_password}
                             required
                            />
                        </label>

                        <label htmlFor="new_confirm_password">
                            <p className="font-medium text-slate-700 pb-2">New Confirmed Password</p>
                            <input id="new_confirm_password" 
                            onChange={handleChangePassword} value={inputPassword.new_confirm_password}
                            required
                            name="new_confirm_password" type="new_confirm_password" className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder="New confirm password" />
                        </label>


                        <button className="w-full py-3 font-medium text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg border-indigo-500 hover:shadow inline-flex space-x-2 items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
                            </svg>
                            <span>Reset password</span>
                        </button>

                    </div>
                </form>
            </div>
        </>
    )
}
