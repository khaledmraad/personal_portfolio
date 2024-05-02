import Recat from "react";

export default function Header(){
    return (
        <header>
    <nav className="bg-white border-gray-200 px-4 lg:px-6 py-5 dark:bg-gray-800">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <a href="https://flowbite.com" className="flex items-center">
                {/* <img src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" /> */}
                <span className="self-center text-xl font-semibold text-[#343a40] whitespace-nowrap dark:text-[#343a40]">Khaled Mrad</span>
            </a>
            <div className="hidden justify-between items-ce nter w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                    <li>
                        <a href="#" className="block py-2 pr-4 pl-3 text-[#343a40] rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-[#343a40]" aria-current="page">Skills</a>
                    </li>
                    <li>
                        <a href="#" className="block py-2 pr-4 pl-3 text-[#343a40] border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-[#000000] dark:hover:bg-gray-700 dark:hover:text-[#000000] lg:dark:hover:bg-transparent dark:border-gray-700">Education</a>
                    </li>
                    <li>
                        <a href="#" className="block py-2 pr-4 pl-3 text-[#343a40] border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-[#000000] dark:hover:bg-gray-700 dark:hover:text-[#000000] lg:dark:hover:bg-transparent dark:border-gray-700">Intrests</a>
                    </li>
                    <li>
                        <a href="#" className="block py-2 pr-4 pl-3 text-[#343a40] border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-[#000000] dark:hover:bg-gray-700 dark:hover:text-[#000000] lg:dark:hover:bg-transparent dark:border-gray-700">Projects</a>
                    </li>
                    <li>
                        <a href="#" className="block py-2 pr-4 pl-3 text-[#343a40] border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-[#000000] dark:hover:bg-gray-700 dark:hover:text-[#000000] lg:dark:hover:bg-transparent dark:border-gray-700">Contact Me</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</header>
    )
}