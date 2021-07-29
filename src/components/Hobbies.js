import books from "./img/books.jpg"
import programming from "./img/programming.jpg"
import tiger from "./img/tiger.jpg"


function Hobbies(){
    return(
        <section id="About" class="bg-purple-200 pt-10">
            <h2 class="text-center text-xl font-bold text-purple-900">
                Hobbies and Interests
            </h2>
            <ul class="grid p-10 gap-10 md:grid-cols-3">
                <li class="bg-white shadow rounded-lg overflow-hidden">
                    <img class="w-full" src={books} />
                    <div class="p-4">
                        <h3 class="font-bold">Reading</h3>
                        <p>
                            I love to read many genres of books. My favorite book is
                            <i>A Tree Grows in Brooklyn</i> by Betty Smith.
                        </p>
                    </div>
                </li>
                <li class="bg-white shadow rounded-lg overflow-hidden">
                    <img class="w-full" src={programming} />
                    <div class="p-4">
                        <h3 class="font-bold">Programming</h3>
                        <p>
                            I love programming, especially using C/C++, Java, and python.
                        </p>
                    </div>
                </li>
                <li class="bg-white shadow rounded-lg overflow-hidden">
                    <img src={tiger} class="w-full" />
                    <div class="p-4">
                        <h3 class="font-bold">Animals</h3>
                        <p>I love animals, here is one of my favorites: a tiger.</p>
                    </div>
                </li>
            </ul>
        </section>
    );
}

export default Hobbies;