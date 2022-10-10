import { component$, useStore } from "@builder.io/qwik";
import { Link, useLocation } from "@builder.io/qwik-city";

export const Navbar = component$(() => {
  const state = useStore({
    isNavbarShow: false,
  });

  const location = useLocation();

  return (
    <nav class="sticky top-0 left-0 z-10 w-full bg-white drop-shadow-sm">
      <div class="container mx-auto px-2 sm:px-6 lg:px-8">
        <div class="relative flex h-16 items-center justify-between">
          <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              class="inline-flex items-center justify-center rounded-md p-2 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick$={() => (state.isNavbarShow = !state.isNavbarShow)}
            >
              <span class="sr-only">Open main menu</span>

              <svg
                class="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>

              <svg
                class="hidden h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div class="flex flex-shrink-0 items-center">
              <img
                class="block h-8 w-auto lg:hidden"
                src="https://res.cloudinary.com/dc7x6wbfk/image/upload/v1665375902/ethno-inquiry/logo-ei_bhthsj.png"
                alt="Ethno Inquiry"
              />
              <img
                class="hidden h-8 w-auto lg:block"
                src="https://res.cloudinary.com/dc7x6wbfk/image/upload/v1665375902/ethno-inquiry/logo-ei_bhthsj.png"
                alt="Ethno Inquiry"
              />
            </div>
            <div class="hidden sm:ml-6 sm:block">
              <div class="flex space-x-4">
                <Link
                  href="/"
                  className={`${
                    location.pathname === "/" && "bg-gray-100"
                  } hover:bg-gray-100 text-gray-900 px-3 py-2 rounded-md text-sm font-medium`}
                  aria-current={location.pathname === "/" && "page"}
                >
                  Home
                </Link>

                <Link
                  href="/pedagogical-design"
                  className={`${
                    location.pathname === "/pedagogical-design" && "bg-gray-100"
                  } hover:bg-gray-100 text-gray-900 px-3 py-2 rounded-md text-sm font-medium`}
                  aria-current={
                    location.pathname === "/pedagogical-design" && "page"
                  }
                >
                  Pedagogical Design
                </Link>

                <Link
                  href="https://elearning.ethno-inquiry.id/"
                  target="_blank"
                  class="hover:bg-gray-100 text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Course
                </Link>

                <Link
                  href="/blog"
                  className={`${
                    location.pathname === "/blog" && "bg-gray-100"
                  } hover:bg-gray-100 text-gray-900 px-3 py-2 rounded-md text-sm font-medium`}
                  aria-current={location.pathname === "/blog" && "page"}
                >
                  Related Studies
                </Link>

                <Link
                  href="/team"
                  className={`${
                    location.pathname === "/team" && "bg-gray-100"
                  } hover:bg-gray-100 text-gray-900 px-3 py-2 rounded-md text-sm font-medium`}
                  aria-current={location.pathname === "/team" && "page"}
                >
                  Our Team
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`${
          !state.isNavbarShow && "hidden"
        } transition-all sm:hidden`}
        id="mobile-menu"
      >
        <div class="space-y-1 px-2 pt-2 pb-3">
          <Link
            href="/"
            className={`${
              location.pathname === "/" && "bg-gray-100"
            } text-gray-900 block px-3 py-2 rounded-md text-base font-medium`}
            aria-current={location.pathname === "/" && "page"}
          >
            Home
          </Link>

          <Link
            href="/pedagogical-design"
            className={`${
              location.pathname === "/pedagogical-design" && "bg-gray-100"
            } text-gray-900 block px-3 py-2 rounded-md text-base font-medium`}
            aria-current={location.pathname === "/pedagogical-design" && "page"}
          >
            Pedagogical Design
          </Link>

          <Link
            href="https://elearning.ethno-inquiry.id/"
            target="_blank"
            class="text-gray-900 hover:bg-gray-100 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium"
          >
            Course
          </Link>

          <Link
            href="/blog"
            className={`${
              location.pathname === "/blog" && "bg-gray-100"
            } text-gray-900 block px-3 py-2 rounded-md text-base font-medium`}
            aria-current={location.pathname === "/blog" && "page"}
          >
            Related Studies
          </Link>

          <Link
            href="/team"
            className={`${
              location.pathname === "/team" && "bg-gray-100"
            } text-gray-900 block px-3 py-2 rounded-md text-base font-medium`}
            aria-current={location.pathname === "/team" && "page"}
          >
            Our Team
          </Link>
        </div>
      </div>
    </nav>
  );
});
