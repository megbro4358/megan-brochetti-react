function Hero(props){
    return(
        <section id="Hero" class="
          h-screen
          bg-purple-500
          text-white text-center
          grid
          place-items-center">
            <div>
                <p class="text-lg font-bold italic uppercase tracking-wider">
                    Hometown: Mooresville, NC
                </p>
                <h1 class="font-bold text-8xl leading-none">Megan Brochetti</h1>
                <p class="mt-5 font-mono text-lg block">
                    Clemson University | Class of 2022 | BS Computer Science
                </p>
                <a href="https://www.linkedin.com/in/megan-brochetti/" rel="noopener noreferrer" target="_blank"
                    class="mt-10 bg-white rounded-lg px-8 py-4 text-black inline-block">Connect on LinkedIn</a>
            </div>
        </section>

    );
}

export default Hero;