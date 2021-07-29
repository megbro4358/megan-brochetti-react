import me from "./img/me.jpg";
import corky from "./img/corky01.jpg";

function TechSupport(props){
    return(
        <section id="tech-support" class="text-gray-600 body-font">
            <div class="container px-5 py-24 mx-auto">
                <div class="
              grid grid-cols-2
              place-items-center
              horizontal-align
              vertical-align
            ">
                    <div class="lg:w-1/3 lg:mb-0 mb-6 p-4">
                        <div class="h-full text-center">
                            <br />
                            <img alt="testimonial" class="
                    w-20
                    h-20
                    mb-8
                    object-cover object-center
                    rounded-full
                    inline-block
                    border-2 border-gray-200
                    bg-gray-100
                  " src={me} />
                            <p class="leading-relaxed">
                                This is a picture of me. I am the person who created this
                                website. It was fun and my first time using HTML/CSS. I will
                                continue learning more about web development.
                            </p>
                            <span class="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                            <h2 class="
                    text-gray-900
                    font-medium
                    title-font
                    tracking-wider
                    text-sm
                  ">
                                Megan Brochetti
                            </h2>
                            <p class="text-gray-500">Site creator</p>
                        </div>
                    </div>
                    <div class="lg:w-1/3 lg:mb-0 p-4">
                        <div class="h-full text-center">
                            <img alt="testimonial" class="
                    w-20
                    h-20
                    mb-8
                    object-cover object-center
                    rounded-full
                    inline-block
                    border-2 border-gray-200
                    bg-gray-100
                  " src={corky} />
                            <p class="leading-relaxed">
                                Here is a picture of my golden retriever, Corky. He is a 9
                                year old golden retriever and a very good boy. He loves to
                                swim, eat, and play tug of war.
                            </p>
                            <span class="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                            <h2 class="
                    text-gray-900
                    font-medium
                    title-font
                    tracking-wider
                    text-sm
                  ">
                                Corky
                            </h2>
                            <p class="text-gray-500">A dog</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default TechSupport;