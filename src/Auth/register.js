import { GlobalContext } from '../Context/context'
import { useContext } from 'react'

export const RegisterPage = () => {
    const { state, handler } = useContext(GlobalContext)
    const {
        inputRegister
    } = state 

    const {
        handleRegister,
        handleChangeRegister,
    } = handler

    return (
        <div className="bg-grey-lighter min-h-screen flex flex-col">
            <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                    <h1 className="mb-8 text-3xl text-center">Registration Form</h1>
                    <form onSubmit={handleRegister}>

                        <label htmlFor="name">
                            <p className="font-medium text-slate-700 pb-2">Full Name</p>
                            <input type="text" className="block border border-grey-light w-full p-3 rounded mb-4" 
                                name="name" placeholder="your name..."  id= "name"
                                onChange={handleChangeRegister} value={inputRegister.name}
                                required
                            />
                        </label>

                        <label htmlFor="imageurl">
                            <p className="font-medium text-slate-700 pb-2">Image Url</p>
                            <input type="text" className="block border border-grey-light w-full p-3 rounded mb-4" 
                                name="image_url" placeholder="your image url..." 
                                onChange={handleChangeRegister} value={inputRegister.image_url}
                            />
                        </label>
                        
                        <label htmlFor="email">
                            <p className="font-medium text-slate-700 pb-2">Email</p>
                            <input type="text" className="block border border-grey-light w-full p-3 rounded mb-4" 
                                name="email" placeholder="your email..." 
                                onChange={handleChangeRegister} value={inputRegister.email} 
                                required 
                                />
                        </label>
                        
                        <label htmlFor="password">
                        <p className="font-medium text-slate-700 pb-2">Password</p>
                            <input type="password" className="block border border-grey-light w-full p-3 rounded mb-4" 
                                name="password" placeholder="your password..." 
                                minLength={8} required
                                onChange={handleChangeRegister} value={inputRegister.password}
                                />
                        </label>


                        <button type="submit" className="w-full text-center py-3 rounded 
                            bg-green text-white bg-green-300 
                            hover:bg-yellow-700 text-white font-bold py-2 px-4 border border-yellow-700 rounded mt-2
                            ">Create Account</button>

                    </form>
                    
                    <div className="text-center text-sm text-grey-dark mt-4">
                        By signing up, you agree to the 
                        <a className="no-underline border-b border-grey-dark text-grey-dark"> Terms of Service
                        </a> and 
                        <a className="no-underline border-b border-grey-dark text-grey-dark"> Privacy Policy
                        </a>
                    </div>

                </div>

                <div className="text-grey-dark mt-6">
                    Already have an account ? 
                <a className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500" 
                    href="/login"> Log in</a>
                </div>
            </div>
        </div>
    )
}