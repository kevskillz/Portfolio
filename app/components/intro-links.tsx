import Link from "next/link";

export function IntroLinks() {
  return (
    <div className="flex items-center justify-center">
      <div className="grid grid-rows-3 gap-8 py-12">
        <div className="my-2 grid items-start gap-8">
          <div className="group relative">
            <div className="animate-tilt absolute -inset-0.5 rounded-lg bg-gradient-to-r from-pink-600 to-purple-600 opacity-50 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200"></div>
            <Link href="/blog/projects">
              <span className="relative flex items-center divide-x divide-gray-600 rounded-lg bg-white px-7 py-4 leading-none dark:bg-black">
                <span className="flex items-center space-x-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 -rotate-6 text-green-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                    />
                  </svg>
                  <span className="pr-6 text-gray-900 dark:text-gray-100">What I built</span>
                </span>
                <span className="pl-6 text-amber-400 transition duration-200 group-hover:text-gray-900 dark:group-hover:text-gray-100">
                  Projects&nbsp;&rarr;
                </span>
              </span>
            </Link>
          </div>
        </div>
        <div className="my-2 grid items-start gap-8">
          <div className="group relative">
            <div className="animate-tilt absolute -inset-0.5 rounded-lg bg-gradient-to-r from-fuchsia-600 to-emerald-600 opacity-50 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200"></div>
            <Link href="https://github.com/kevskillz/" target="_blank" rel="noopener noreferrer">
              <span className="relative flex items-center divide-x divide-gray-600 rounded-lg bg-white px-7 py-4 leading-none dark:bg-black">
                <span className="flex items-center space-x-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 -rotate-6 text-pink-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                  <span className="pr-6 text-gray-900 dark:text-gray-100">Code&nbsp;&nbsp;&nbsp;</span>
                </span>
                <span className="pl-6 text-indigo-400 transition duration-200 group-hover:text-gray-900 dark:group-hover:text-gray-100">
                  Github&nbsp;&rarr;
                </span>
              </span>
            </Link>
          </div>
        </div>
        <div className="my-2 grid items-start gap-8">
          <div className="group relative">
            <div className="animate-tilt absolute -inset-0.5 rounded-lg bg-gradient-to-r from-fuchsia-600 to-emerald-600 opacity-50 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200"></div>
            <Link href="https://docs.google.com/document/d/1J8tKhycQeVZc1UHmCS__SPdSKD-kVgmp/edit?usp=sharing&ouid=112796691670871583797&rtpof=true&sd=true" target="_blank" rel="noopener noreferrer">
              <span className="relative flex items-center divide-x divide-gray-600 rounded-lg bg-white px-7 py-4 leading-none dark:bg-black">
                <span className="flex items-center space-x-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 -rotate-6 text-pink-600"
                    fill="none"
                    viewBox="0 0 150 150"
                    stroke="currentColor"
                    stroke-width="4" 
                  >
                    <path d="M30.13 51.31h20a1.75 1.75 0 0 0 1.75-1.75v-5.12a11.067 11.067 0 0 0-4.4-8.832 9.977 9.977 0 1 0-14.713 0 11.08 11.08 0 0 0-4.387 8.832v5.12a1.75 1.75 0 0 0 1.75 1.75zm10-28.894a6.477 6.477 0 1 1-6.477 6.477 6.485 6.485 0 0 1 6.473-6.476zM31.88 44.44a7.576 7.576 0 0 1 3.87-6.594 9.857 9.857 0 0 0 8.754 0 7.56 7.56 0 0 1 3.876 6.594v3.37h-16.5z" /><path d="M112.654 4.75H15.346A1.75 1.75 0 0 0 13.6 6.5v115a1.75 1.75 0 0 0 1.75 1.75h97.308a1.75 1.75 0 0 0 1.75-1.75V6.5a1.75 1.75 0 0 0-1.754-1.75zm-1.75 115H17.1V8.25h93.8z" /><path d="M26.346 65.75h75.308a1.75 1.75 0 1 0 0-3.5H26.346a1.75 1.75 0 0 0 0 3.5zM26.346 80.194h75.308a1.75 1.75 0 0 0 0-3.5H26.346a1.75 1.75 0 0 0 0 3.5zM26.346 109.083h75.308a1.75 1.75 0 0 0 0-3.5H26.346a1.75 1.75 0 0 0 0 3.5zM26.346 94.639h75.308a1.75 1.75 0 1 0 0-3.5H26.346a1.75 1.75 0 0 0 0 3.5zM64 22.417h37.654a1.75 1.75 0 0 0 0-3.5H64a1.75 1.75 0 0 0 0 3.5zM64 36.861h37.654a1.75 1.75 0 0 0 0-3.5H64a1.75 1.75 0 0 0 0 3.5zM64 51.306h37.654a1.75 1.75 0 0 0 0-3.5H64a1.75 1.75 0 0 0 0 3.5z" />
                  </svg>
                  <span className="pr-6 text-gray-900 dark:text-gray-100">My Work</span>
                </span>
                <span className="pl-6 text-indigo-400 transition duration-200 group-hover:text-gray-900 dark:group-hover:text-gray-100">
                  Resume&nbsp;&rarr;
                </span>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}