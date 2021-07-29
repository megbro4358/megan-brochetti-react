
function Top(props){
    return(
        <header class="fixedw-full bg-purple-900 text-white md:flex justify-between">
        <a class="font-bold block px-8 py-4" href="#top"> Megan Brochetti </a>
        <nav>
            <ul class="md:flex">
                <li>
                    <a class="block px-8 py-4 hover:bg-purple-200" href="#Hero">Me</a>
                </li>
                <li>
                    <a class="block px-8 py-4 hover:bg-purple-200" href="#About">About</a>
                </li>
                <li>
                    <a class="block px-8 py-4 hover:bg-purple-200" href="#Tech Support">Tech Support</a>
                </li>
            </ul>
        </nav>
    </header>

    );
}

export default Top;