import React, { useContext } from 'react'
import { MyContext } from '../Helper/AppContext'

export default function Navbar() {
    const {user}=useContext(MyContext)
    console.log(user)

return(
        <nav class="bg-white border-gray-200 dark:bg-gray-900">
            <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src="data:image/jpeg;base64,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" class="h-8" alt="Logo" />
                    <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">MindWhisper</span>
                </a>
                <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                    <span class="sr-only">Open main menu</span>
                    <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
                <div class="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <a href="/" class="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Home</a>
                        </li>
                        <li>
                            <a href="/About" class="block py-2 px-3 text-grey-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</a>
                        </li>
                        <li>
                            <a href="/Therapy" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Therapy</a>
                        </li>
                        <li>
                            <a href="/Contact" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact Us</a>
                        </li>
                        <li>
                            <a href="/Signin" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Login</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    )
}
