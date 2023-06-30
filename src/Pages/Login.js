import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    var id = "yash007@gmail.com"
    var pass = "Yash@2701"

    const [data, setData] = useState({
        email: "",
        pass: ""
    })

    const navigate = useNavigate()

    const handleSubmit = () => {
        if (id === data.email && pass === data.pass) {
            navigate('/data')
            localStorage.setItem('admin', true)
        } else {
            navigate('/')
        }
    }

    useEffect(() => {
        if (localStorage.getItem('admin')) {
            navigate('/data')
        } else {
            navigate('/')
        }
    }, [navigate])



    return (
        <div>
            <div id="root" className="h-screen flex grow bg-slate-50 dark:bg-navy-900 items-center justify-center px-[20px]">
                <main className="grid w-full grow grid-cols-1 place-items-center">
                    <div className="w-full max-w-[26rem] p-4 sm:px-5 bg-white rounded-lg border-[1px] border-gray-600">
                        <div className="text-center">
                            <div className="mt-4">
                                <h2 className="text-2xl font-semibold text-slate-600 dark:text-navy-100"> Welcome Back </h2>
                                <p className="text-slate-400 dark:text-navy-300"> Please sign in to continue </p>
                            </div>
                        </div>
                        <div className="card mt-5 rounded-lg sm:p-5">
                            <label className="block">
                                <span>Username:</span>
                                <span className="relative mt-1.5 flex">
                                    <input value={data.email} onChange={(e) => setData({ ...data, email: e.target.value })} className="peer w-full rounded-lg border border-slate-300 bg-transparent pr-3 pl-9 py-2  placeholder:text-slate-400/70 hover:z-10 hover:border-slate-400 focus:z-10" placeholder="Enter Username" type="text" />
                                    <span className="pointer-events-none absolute flex h-full w-10 items-center justify-center text-slate-400 peer-focus:text-primary dark:text-navy-300 dark:peer-focus:text-accent">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transition-colors duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </span>
                                </span>
                            </label>
                            <label className="mt-4 block">
                                <span>Password:</span>
                                <span className="relative mt-1.5 flex">
                                    <input value={data.pass} onChange={(e) => setData({ ...data, pass: e.target.value })} className="peer w-full rounded-lg border border-slate-300 bg-transparent pl-9 pr-3 py-2 placeholder:text-slate-400/70 hover:z-10 hover:border-slate-400 focus:z-10" placeholder="Enter Password" type="password" />
                                    <span className="pointer-events-none absolute flex h-full w-10 items-center justify-center text-slate-400 peer-focus:text-primary dark:text-navy-300 dark:peer-focus:text-accent">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transition-colors duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                        </svg>
                                    </span>
                                </span>
                            </label>
                            <div className="mt-10 flex items-center justify-between">
                                <button onClick={handleSubmit} className='px-3 font-semibold py-2 w-full text-center bg-[#f2f1ff] border-[1px] border-[#625afa] rounded-md text-[#625afa]'>Sign In</button>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default Login