

const GenreBadge = () => {
    return (
        <div>
            {/*Навігація */}
            <nav className="relative hidden md:flex items-center space-x-6">

                <div className="relative group">
                    <button className="text-gray-700 hover:text-blue-600 flex items-center"> All genres
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                            <path d="M19 9l-7 7-7-7"/>
                        </svg>
                    </button>

                    {/*/!*випадаюче меню*!/*/}
                    <div
                        className="absolute left-0 mt-2 w-48 bg-white border rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10">
                        <a href="#" className="block px-4 py-2 hover:bg-blue-50">Adventure</a>
                        <a href="#" className="block px-4 py-2 hover:bg-blue-50">Detective</a>
                        <a href="#" className="block px-4 py-2 hover:bg-blue-50">Romantic</a>
                        <a href="#" className="block px-4 py-2 hover:bg-blue-50">Fantastic</a>
                    </div>
                </div>


            </nav>

        </div>
    );
};

export default GenreBadge;