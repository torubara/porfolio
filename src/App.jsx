function App() {
  return (
    <div className="min-h-screen bg-white text-gray-800 px-4 md:px-8 lg:px-16 font-quicksand">
      {/* Header */}
      <header className="max-w-4xl mx-auto pt-40 pb-8">
        <h1 className="text-4xl text-center font-bold mb-6">
          Hello!👋 I&apos;m{" "}
          <span className="font-semibold text-violet-500">Mariia</span>,
        </h1>
        <div className="text-4xl leading-relaxed">
          <p className="text-center mb-4">
            a frontend developer
            {/* who loves to create beautiful and functional web applications. */}
          </p>
          {/* <p className="text-gray-600">
            Got an interesting project? Send me a message at{" "}
            <a
              href="mailto:your@email.com"
              className="text-blue-600 hover:text-blue-700"
            >
              your@email.com
            </a>
          </p> */}
        </div>
      </header>

      {/* Background Section */}
      <section className="max-w-4xl mx-auto py-12">
        <div className="prose lg:prose-lg">
          {/* <p className="mb-6">
            I&apos;m an independent frontend developer based in{" "}
            <span className="font-semibold">Dresden</span>. I work with a
            variety of clients, from startups to established companies, helping
            them build modern and responsive web applications.
          </p> */}
          <p className="text-xl text-center mb-6">
            When I&apos;m not coding, you can find me playing 🎮 video games,
            doing my 🧶 DIY projects, or watching 🏎 F1 grand prix.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section className="max-w-4xl mx-auto py-12">
        <h2 className="text-2xl font-bold mb-8">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {/* Languages */}
          <div>
            <h3 className="font-semibold mb-4">Languages</h3>
            <ul className="space-y-2 text-gray-600">
              <li>JavaScript</li>
              <li>TypeScript</li>
              <li>HTML5</li>
              <li>CSS3</li>
            </ul>
          </div>

          {/* Frameworks */}
          <div>
            <h3 className="font-semibold mb-4">Frameworks</h3>
            <ul className="space-y-2 text-gray-600">
              <li>React</li>
              <li>React Email</li>
              <li>Next.js</li>
              <li>Node.js</li>
              <li>Tailwind CSS</li>
              <li>Prisma</li>
              <li>Zod</li>
              <li>Wordpress</li>
              <li>Telegram API</li>
            </ul>
          </div>

          {/* Tools */}
          <div>
            <h3 className="font-semibold mb-4">Tools</h3>
            <ul className="space-y-2 text-gray-600">
              <li>Git</li>
              <li>VS Code</li>
              <li>Figma</li>
              <li>Docker</li>
              <li>Adobe Photoshop</li>
              <li>Adobe Illustrator</li>
            </ul>
          </div>

          {/* Fields */}
          {/* <div>
            <h3 className="font-semibold mb-4">Fields</h3>
            <ul className="space-y-2 text-gray-600">
              <li>Frontend Development</li>
              <li>UI/UX Design</li>
              <li>Responsive Design</li>
              <li>Web Performance</li>
            </ul>
          </div> */}
        </div>
      </section>

      {/* Featured Projects */}
      <section className="max-w-4xl mx-auto py-12">
        <h2 className="text-2xl font-bold mb-8">Projects</h2>
        <div className=" space-x-12 space-y-12">
          {/* Project 1 */}
          <div className="group">
            <h3 className="text-xl font-semibold mb-4">Alisa Help</h3>
            <div className="bg-gray-100 h-64 mb-4 rounded-lg transition-all duration-300 group-hover:shadow-md">
              <a className="bg[url(/src/assets/alisahelp.png)] block bg-cover w-[848px] h-[256px]" href="https://alisahelp.ru/">
                {/* <img
                  className="h-full w-full object-cover"
                  src="/src/assets/alisahelp.png"
                  alt=""
                /> */}
              </a>
            </div>
            <p className="text-gray-600">
              As a part of a team of two developers, we were working on
              migrating an old Bitrix website to a new platform using React and
              Next.js.
            </p>
          </div>
          {/* Project 2 */}
          <div className="group">
            <h3 className="text-xl font-semibold mb-4">EuroGazProekt</h3>
            <div className="bg-gray-100 h-64 mb-4 rounded-lg transition-all duration-300 group-hover:shadow-md">
              <a className="bg-[url(/src/assets/eurogazproekt.png)] block bg-cover w-[848px] h-[256px]" href="https://eurogazproekt.ru/">
                {/* <img
                  className="w-full h-full object-cover"
                  src="/src/assets/eurogazproekt.png"
                  alt=""
                /> */}
              </a>
            </div>
            <p className="text-gray-600">
              My first commercial experience as a frontend developer.
            </p>
          </div>
          {/* Project 3 */}
          <div className="group">
            <h3 className="text-xl font-semibold mb-4">Pets</h3>
            <div className="bg-gray-100 h-64 mb-4 rounded-lg transition-all duration-300 group-hover:shadow-md">
              <a className="bg-[url(/src/assets/pets.png)] block bg-cover w-[848px] h-[256px]" href="https://torubara.github.io/pets/">
                {/* <img
                  className="h-full w-full object-cover"
                  src="/src/assets/pets.png"
                  alt=""
                /> */}
              </a>
            </div>
            <p className="text-gray-600">
              A pet project for the website of an animal shelter.
            </p>
          </div>
          {/* Project 4 */}
          <div className="group">
            <h3 className="text-xl font-semibold mb-4">Diez</h3>
            <div className="bg-gray-100 h-64 mb-4 rounded-lg transition-all duration-300 group-hover:shadow-md">
              <a
                className="bg-[url(/src/assets/diez.png)] block bg-cover w-[848px] h-[256px]"
                href="https://torubara.github.io/Diez/"
              >
                {/* <img className="h-full w-full object-cover" src="/src/assets/diez.png" alt="" /> */}
              </a>
            </div>
            <p className="text-gray-600">
              A pet project for the website of a music school.
            </p>
          </div>
          {/* Project 5 */}
          <div className="group">
            <h3 className="text-xl font-semibold mb-4">Ice Ace</h3>
            <div className="bg-gray-100 h-64 w-[848px] mb-4 rounded-lg transition-all duration-300 group-hover:shadow-md">
              {/* <a className="overflow-clip" href="https://torubara.github.io/ice-ace/">
                <img className="h-full w-full object-cover" src="/src/assets/iceace.png" alt="" />
              </a> */}
              <a
                className="bg-[url(/src/assets/iceace.png)] block bg-cover w-[848px] h-[256px]"
                href="https://torubara.github.io/ice-ace/"
              ></a>
            </div>
            <p className="text-gray-600">
              Pet project of for the website of a snowboard/ski school.
            </p>
          </div>
          {/* Project 6 */}

          {/* <div className="group">
            <h3 className="text-xl font-semibold mb-4">Project Name</h3>
            <div className="bg-gray-100 h-64 mb-4 rounded-lg transition-all duration-300 group-hover:shadow-md">
            </div>
            <p className="text-gray-600">
              Description of your project and your role in it. Highlight the key
              technologies and achievements.
            </p>
          </div> */}

          {/* Add more projects as needed */}
        </div>
      </section>

      {/* Footer */}
      <footer className="max-w-4xl mx-auto py-12 mt-12 border-t border-gray-200">
        <div className="flex space-x-6 justify-center">
          <a
            href="https://github.com/torubara"
            className="text-gray-600 hover:text-gray-800"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/mariia-torubara-696574234/"
            className="text-gray-600 hover:text-gray-800"
          >
            LinkedIn
          </a>
          <a
            href="https://t.me/Tor_M"
            className="text-gray-600 hover:text-gray-800"
          >
            Telegram
          </a>
          <a
            href="mailto:torubara.m@gmail.com"
            className="text-gray-600 hover:text-gray-800"
          >
            Email
          </a>
        </div>
        <p className="text-center text-gray-600 mt-6 text-sm">
          Developed by Torubara | {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  );
}

export default App;
