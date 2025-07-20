<script setup>
import VioletStorm from "./components/VioletStorm.vue";
import { TransitionGroup } from "vue";
import Button from "primevue/button";

const skills = [
  { name: "JavaScript", icon: "js" },
  { name: "HTML", icon: "html" },
  { name: "CSS", icon: "css" },
  { name: "React", icon: "react" },
  { name: "Vue.js", icon: "vue" },
  { name: "Node.js", icon: "nodejs" },
  { name: "Express", icon: "express" },
  { name: "MongoDB", icon: "mongodb" },
  { name: "Tailwind CSS", icon: "tailwind" },
  { name: "TypeScript", icon: "ts" },
  { name: "Yarn", icon: "yarn" },
  { name: "Python", icon: "python" },
  { name: "PostgreSQL", icon: "postgresql" },
  { name: "Git", icon: "git" },
  { name: "Figma", icon: "figma" },
  { name: "GitHub", icon: "github" },
];
</script>

<template>
  <VioletStorm>
    <!-- Hero Section -->
    <section
      id="home"
      class="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-16 relative overflow-hidden smooth-ease parallax-section"
    >
      <div class="text-center mb-8 sm:mb-12 relative z-10">
        <div class="mb-4 sm:mb-8">
          <span
            class="text-purple-400 text-base sm:text-lg md:text-xl font-medium tracking-wider"
            >WELCOME TO MY PORTFOLIO</span
          >
        </div>
        <h1
          class="text-4xl sm:text-6xl md:text-8xl font-bold text-white mb-4 sm:mb-6 leading-tight"
        >
          Hello, I'm <br />
          <span
            class="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400"
            >José Rodrigues.</span
          >
        </h1>
        <p
          class="text-base sm:text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
        >
          Full Stack Developer with a passion for learning, growing, and
          creating innovative solutions.
        </p>
      </div>

      <div class="flex justify-center flex-col gap-3 sm:gap-4 md:flex-row md:gap-6 relative z-10 w-full max-w-md md:max-w-none">
        <button
          class="group bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg w-full md:w-auto"
        >
          <span class="flex items-center gap-2 justify-center">
            Get in touch
            <svg
              class="w-5 h-5 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              ></path>
            </svg>
          </span>
        </button>
        <button
          class="group border-2 border-purple-600 text-purple-300 hover:bg-purple-600/20 px-6 sm:px-8 py-3 sm:py-4 rounded-xl transition-all duration-300 transform hover:scale-105 backdrop-blur-sm w-full md:w-auto"
        >
          <span class="flex items-center gap-2 justify-center">
            Download CV
            <svg
              class="w-5 h-5 group-hover:translate-y-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              ></path>
            </svg>
          </span>
        </button>
      </div>
    </section>

    <!-- Skills Section -->
    <section id="skills" class="py-12 sm:py-16 md:py-20 relative smooth-ease parallax-section">
      <div class="max-w-6xl mx-auto px-2 sm:px-4 md:px-8">
        <div class="text-center mb-10 sm:mb-16">
          <span class="text-purple-400 text-base sm:text-lg font-medium tracking-wider"
            >MY EXPERTISE</span
          >
          <h2
            class="text-2xl sm:text-4xl md:text-5xl font-bold text-white mt-2 sm:mt-4 mb-4 sm:mb-6"
            v-animateonscroll="{
              enterClass: 'animate-enter fade-in-10 animate-duration-1000',
              leaveClass: 'animate-leave fade-out-0',
            }"
          >
            Skills & Technologies
          </h2>
          <p
            class="text-base sm:text-xl md:text-2xl text-gray-300 py-2 sm:py-3 text-center max-w-4xl mx-auto leading-relaxed"
          >
            As a self-taught developer, and now graduated in a Bootcamp, I have
            a strong foundation in frontend and backend development. I'm always
            trying to learn new technologies to improve my skills and create
            solutions that are both functional and make the difference in the
            society.
          </p>
        </div>

        <!-- Skills Icons -->
        <div
          class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 sm:gap-6 mb-10 sm:mb-16 max-w-5xl mx-auto"
        >
          <div
            v-for="skill in skills"
            :key="skill.name"
            class="group bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-xl p-3 sm:p-4 flex items-center justify-center w-16 sm:w-20 h-16 sm:h-20 border border-purple-500/30 hover:border-purple-400/60 transition-all duration-300 transform hover:scale-110 hover:shadow-2xl"
          >
            <img
              :src="`https://skillicons.dev/icons?i=${skill.icon}`"
              :alt="skill.name"
              class="h-6 sm:h-8 md:h-12 transition-transform duration-300 group-hover:scale-110"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section id="about" class="py-12 sm:py-16 md:py-20 relative smooth-ease parallax-section">
      <div class="max-w-6xl mx-auto px-2 sm:px-4 md:px-8">
        <div class="text-center mb-10 sm:mb-16">
          <span class="text-purple-400 text-base sm:text-lg font-medium tracking-wider"
            >ABOUT ME</span
          >
          <h2
            class="text-2xl sm:text-4xl md:text-5xl font-bold text-white mt-2 sm:mt-4 mb-4 sm:mb-6"
            v-animateonscroll="{
              enterClass: 'animate-enter fade-in-10 animate-duration-1000',
              leaveClass: 'animate-leave fade-out-0',
            }"
          >
            My Journey
          </h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div
            class="space-y-4 sm:space-y-6"
            v-animateonscroll="{ enterClass: 'fadeinleft', enterDelay: 200 }"
          >
            <div
              class="bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-purple-500/30"
            >
              <p class="text-base sm:text-lg text-gray-300 leading-relaxed">
                I'm
                <span
                  class="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 font-semibold"
                  >José Rodrigues</span
                >, a new developer ready to show my skills and make the
                difference for the company I work for. In a career shift since
                March 2025. I have been passionate about technology since
                childhood — from games and phones to computers. My curiosity
                constantly drives me to explore how systems work, why they
                behave the way they do, and how they can be improved. I am
                currently looking for opportunities where I can continue
                learning so I can make a positive impact on both the
                organization and the community.
              </p>
            </div>
          </div>

          <div
            class="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-purple-500/30"
            v-animateonscroll="{ enterClass: 'fadeinright', enterDelay: 400 }"
          >
            <h3
              class="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3"
            >
              <svg
                class="w-5 h-5 sm:w-6 sm:h-6 text-purple-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2h8z"
                ></path>
              </svg>
              Experience
            </h3>
            <div class="space-y-4 sm:space-y-6">
              <div
                class="flex justify-between items-center p-3 sm:p-4 bg-black/20 rounded-xl"
              >
                <span class="text-purple-300 font-medium"
                  >Frontend Development</span
                >
                <span class="text-white font-semibold">11 meses</span>
              </div>
              <div
                class="flex justify-between items-center p-3 sm:p-4 bg-black/20 rounded-xl"
              >
                <span class="text-purple-300 font-medium"
                  >Backend Development</span
                >
                <span class="text-white font-semibold">7 meses</span>
              </div>
              <div
                class="flex justify-between items-center p-3 sm:p-4 bg-black/20 rounded-xl"
              >
                <span class="text-purple-300 font-medium">Design UI/UX</span>
                <span class="text-white font-semibold">11 meses</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Projects Section -->
    <section id="projects" class="py-12 sm:py-16 md:py-20 relative smooth-ease parallax-section">
      <div class="w-full px-2 sm:px-8 md:px-16">
        <div class="text-center mb-10 sm:mb-16">
          <span class="text-purple-400 text-base sm:text-lg font-medium tracking-wider"
            >MY WORK</span
          >
          <h2
            class="text-2xl sm:text-4xl md:text-5xl font-bold text-white mt-2 sm:mt-4 mb-4 sm:mb-6"
            v-animateonscroll="{ enterClass: 'fadeinup', enterDelay: 0 }"
          >
            Featured Projects
          </h2>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 w-full max-w-[98%] sm:max-w-[90%] mx-auto">
          <div
            class="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-2xl overflow-hidden border border-purple-500/30 hover:border-purple-400/60 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
            v-animateonscroll="{ enterClass: 'fadeinup', enterDelay: 200 }"
          >
            <div
              class="h-40 sm:h-64 bg-gradient-to-br from-purple-600 to-purple-800 flex items-center justify-center relative overflow-hidden group"
            >
              <!-- Magic Deck Builder Image -->
              <div
                class="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-all duration-300"
              ></div>
              <img
                src="/images/magic-deck-builder.png"
                alt="Magic Deck Builder Interface"
                class="w-full h-full object-cover group-hover:scale-100 transition-transform duration-300"
                onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"
              />
              <div
                class="absolute inset-0 flex items-center justify-center"
                style="display: none"
              >
                <span class="text-white text-lg sm:text-2xl font-bold"
                  >Magic Deck Builder</span
                >
              </div>
            </div>
            <div class="p-4 sm:p-8">
              <h3 class="text-lg sm:text-xl font-bold text-white mb-1 sm:mb-2">
                Magic Deck Builder
              </h3>
              <p class="text-gray-300 mb-2 sm:mb-4 text-sm sm:text-base">
                A Magic: The Gathering deck builder fullstack app built with
                React, Node.js, Express. With tutorials, Scryfall API
                integration for cards search and database to create your own
                decks.
              </p>
              <div class="flex flex-wrap gap-1 sm:gap-2">
                <span class="bg-purple-600 px-2 py-1 rounded text-xs text-white"
                  >npm</span
                >
                <span class="bg-purple-600 px-2 py-1 rounded text-xs text-white"
                  >React</span
                >
                <span class="bg-purple-600 px-2 py-1 rounded text-xs text-white"
                  >Node.js</span
                >
                <span class="bg-purple-600 px-2 py-1 rounded text-xs text-white"
                  >Express</span
                >
                <span class="bg-purple-600 px-2 py-1 rounded text-xs text-white"
                  >MongoDB</span
                >
              </div>
            </div>
          </div>
          <!-- My Portfolio -->
          <!--
          <div
            class="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-2xl overflow-hidden border border-purple-500/30 hover:border-purple-400/60 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
            v-animateonscroll="{ enterClass: 'fadeinup', enterDelay: 400 }"
          >
            <div
              class="h-40 sm:h-64 bg-gradient-to-br from-purple-600 to-purple-800 flex items-center justify-center relative overflow-hidden group"
            >
              <img
                src="/images/my-portfolio.png"
                alt="My Portfolio Interface"
                class="w-full h-full object-cover group-hover:scale-80 transition-transform duration-300"
                onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"
              />
              <div
                class="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-all duration-300"
              ></div>
            </div>
            <div class="p-4 sm:p-8">
              <h3 class="text-lg sm:text-xl font-bold text-white mb-1 sm:mb-2">My Portfolio</h3>
              <p class="text-gray-300 mb-2 sm:mb-4 text-sm sm:text-base">
                This portfolio, built with Vue.js and Javascript, and used yarn
                to manage the dependencies. Used tailwind css to style the
                components. And used PrimeVue to make the components more
                interactive.
              </p>
              <div class="flex flex-wrap gap-1 sm:gap-2">
                <span class="bg-purple-600 px-2 py-1 rounded text-xs text-white"
                  >Yarn</span
                >
                <span class="bg-purple-600 px-2 py-1 rounded text-xs text-white"
                  >Tailwind CSS</span
                >
                <span class="bg-purple-600 px-2 py-1 rounded text-xs text-white"
                  >Javascript</span
                >
                <span class="bg-purple-600 px-2 py-1 rounded text-xs text-white"
                  >Vue.js</span
                >
              </div>
            </div>
          </div>
          -->
          </div>
        </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="py-12 sm:py-16 md:py-20 bg-black/40 smooth-ease parallax-section">
      <div class="max-w-4xl mx-auto px-2 sm:px-4 md:px-8">
        <h2
          class="text-2xl sm:text-4xl md:text-5xl font-bold text-white text-center mb-10 sm:mb-16"
          v-animateonscroll="{ enterClass: 'fadeinup', enterDelay: 0 }"
        >
          Contact
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <div
            v-animateonscroll="{ enterClass: 'fadeinleft', enterDelay: 200 }"
          >
            <h3 class="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Let's discuss!</h3>
            <p class="text-gray-300 mb-6 sm:mb-8 text-base sm:text-lg">
              I'm always open to new opportunities and interesting projects.
              Contact me!
            </p>
            <div class="space-y-3 sm:space-y-4">
              <div class="flex items-center space-x-2 sm:space-x-3">
                <span class="text-purple-400">📧</span>
                <span class="text-white text-sm sm:text-base">josephpedroferreira@gmail.com</span>
              </div>
              <div class="flex items-center space-x-2 sm:space-x-3">
                <span class="text-purple-400">📱</span>
                <span class="text-white text-sm sm:text-base">+351 934 558 677</span>
              </div>
              <div class="flex items-center space-x-2 sm:space-x-3">
                <span class="text-purple-400">📍</span>
                <span class="text-white text-sm sm:text-base">Lisbon, PT</span>
              </div>
            </div>
          </div>
          <div
            class="bg-purple-600/20 p-4 sm:p-8 rounded-lg border border-purple-500/30"
            v-animateonscroll="{ enterClass: 'fadeinright', enterDelay: 400 }"
          >
            <form class="space-y-3 sm:space-y-4">
              <input
                type="text"
                placeholder="Seu nome"
                class="w-full p-2 sm:p-3 bg-black/50 border border-purple-500/30 rounded text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none text-sm sm:text-base"
              />
              <input
                type="email"
                placeholder="Seu email"
                class="w-full p-2 sm:p-3 bg-black/50 border border-purple-500/30 rounded text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none text-sm sm:text-base"
              />
              <textarea
                placeholder="Sua mensagem"
                rows="4"
                class="w-full p-2 sm:p-3 bg-black/50 border border-purple-500/30 rounded text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none text-sm sm:text-base"
              ></textarea>
              <button
                type="submit"
                class="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 sm:py-3 rounded transition-colors text-sm sm:text-base"
              >
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="py-6 sm:py-8 border-t border-purple-500/20">
      <div class="max-w-6xl mx-auto px-2 sm:px-4 md:px-8 text-center">
        <p class="text-gray-400 text-xs sm:text-base">© 2025 José Pedro. All rights reserved.</p>
      </div>
    </footer>
  </VioletStorm>
</template>
