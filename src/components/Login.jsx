import React from 'react';
import img from '../assets/laptop.jpg'

const login = () => {
  return (
    <section class="bg-gray-50 min-h-screen flex items-center justify-center">
      {/* login container */}
      <div class="bg-gray-200 flex rounded-2xl shadow-2xl  max-w-3xl p-5 items-center">
        {/* form */}
        <div class="md:w-1/2 px-8 md:px-16">
          <h2 class="font-bold text-2xl text-[#002D74]">Login</h2>
          <p class="text-xs mt-4 text-[#002D74]">If you are already a member, easily log in</p>

          <form action="" class="flex flex-col gap-4">
            <input class="s p-2 mt-8 rounded-xl border" type="email" name="email" placeholder="Email" />
            <div class="relative">
              <input class=" p-2 rounded-xl border w-full" type="password" name="password" placeholder="Password" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="gray"
                class="bi bi-eye absolute top-1/2 right-3 -translate-y-1/2"
                viewBox="0 0 16 16"
              >
                {/* Eye icon SVG path */}
              </svg>
            </div>
            <button class=" bg-[#002D74] rounded-xl text-white py-2 hover:scale-105 duration-300">Login</button>
          </form>

          <div class="mt-6 grid grid-cols-3 items-center text-gray-400">
            <hr class="border-gray-400" />
            <p class="text-center text-sm">OR</p>
            <hr class="border-gray-400" />
          </div>

          <button class=" bg-white border py-2 w-full rounded-xl mt-5 flex justify-center items-center text-sm hover:scale-105 duration-300 text-[#002D74]">
            <svg
              class="mr-1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              width="20px"
            >
              {/* Google login icon SVG paths */}
            </svg>
            Login with Google
          </button>

          <div class="mt-5 text-xs border-b border-[#002D74] py-4 text-[#002D74]">
            <a href="#">Forgot your password ?</a>
          </div>

          <div class="mt-3 text-xs flex justify-between items-center text-[#002D74]">
            <p>Don't have an account?</p>
            <button class="py-2 px-5 bg-white border rounded-xl hover:scale-110 duration-300">Register</button>
          </div>
        </div>

        {/* image */}
        <div class="md:block hidden w-1/2">
          <img
            class=" shadow-2xl rounded-2xl"
            src={img}></img>
        </div>
      </div>
    </section>
  );
};

export default login;
