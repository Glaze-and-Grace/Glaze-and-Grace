import React from 'react'

function Signin() {
    const sectionStyle = {
        backgroundImage: 'url("https://images.unsplash.com/photo-1631125915902-d8abe9225ff2?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    };


  return (
    <section style={sectionStyle} class="bg-white ">
      <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div class="w-full rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800">
          <div class="p-6 bg-[#F9EFE6] space-y-4 md:space-y-6 sm:p-8">
            <h1 class="text-xl font-bold leading-tight tracking-tight text-[#17403C] md:text-2xl ">
              Sign in to your account
            </h1>
            <form class="space-y-4 md:space-y-6 " action="#">
              <div>
                <label
                  for="email"
                  class="block mb-2 text-sm font-medium text-[#17403C]  text-left"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                  placeholder="email@example.com"
                  required=""
                ></input>
              </div>
              <div>
                <label
                  for="password"
                  class="block mb-2 text-sm font-medium text-[#17403C] text-left"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  class="bg-white border  text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-white block w-full p-2.5  "
                  required=""
                ></input>
              </div>
              <div class="flex items-center justify-between">
                <div class="flex items-start">
                  <div class="flex items-center h-5">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                      required=""
                    ></input>
                  </div>
                  <div class="ml-3 text-sm">
                    <label for="remember" class="text-[#17403C]">
                      Remember me
                    </label>
                  </div>
                </div>
                <a
                  href="#"
                  class="text-sm font-medium text-[#1d4ed8] color-b hover:underline"
                >
                  Forgot password?
                </a>
              </div>
              <button
                type="submit"
                class="w-full text-white bg-[#17403C] hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Sign in
              </button>
              <p class="text-sm font-medium text-[#17403C]">
                Don’t have an account yet?{" "}
                <a
                  href="#"
                  class="font-medium text-[#1d4ed8] hover:underline dark:text-primary-500"
                >
                  Register
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Signin