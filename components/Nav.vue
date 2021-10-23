<template>
  <div
    class="
      fixed
      w-full
      backdrop-filter backdrop-blur-xl
      bg-red-100 bg-opacity-10
    "
  >
    <div
      class="
        px-4
        py-5
        mx-auto
        sm:max-w-xl
        md:max-w-full
        lg:max-w-screen-xl
        md:px-24
        lg:px-8
      "
    >
      <div class="relative flex items-center justify-between">
        <NuxtLink
          to="/"
          alt="Maria Bonita"
          aria-label="Maria Bonita"
          title="Maria Bonita"
          class="inline-flex items-center"
        >
          <nuxt-img format="webp" class="w-14" src="icon-pink.png" />
        </NuxtLink>
        <ul class="flex items-center hidden space-x-8 lg:flex">
          <li>
            <NuxtLink
              to="/galeria"
              aria-label="Galería"
              title="Galería"
              class="
                text-2xl
                font-bold
                tracking-wide
                transition-colors
                duration-200
                text-maria-pink
                hover:text-red-300
              "
              >Galería</NuxtLink
            >
          </li>
          <li>
            <NuxtLink
              to="/nosotros"
              aria-label="Nosotros"
              title="Nosotros"
              class="
                text-2xl
                font-bold
                tracking-wide
                text-maria-pink
                hover:text-red-300
                transition-colors
                duration-200
              "
              >Nosotros</NuxtLink
            >
          </li>
          <li>
            <NuxtLink
              to="/contacto"
              aria-label="Contacto"
              title="Contacto"
              class="
                text-2xl
                font-bold
                tracking-wide
                text-maria-pink
                hover:text-red-300
                transition-colors
                duration-200
              "
              >Contacto</NuxtLink
            >
          </li>
        </ul>
        <ul class="flex items-center hidden space-x-8 text-2xl lg:flex">
          <li>
            <a href="https://instagram.com/mariabonitawp">
              <font-awesome-icon
                class="ml-3 text-3xl text-maria-pink"
                :icon="['fab', 'instagram']"
              />
            </a>

            <a href="https://facebook.com/cintaticmx">
              <font-awesome-icon
                class="ml-3 text-3xl text-maria-pink"
                :icon="['fab', 'facebook']"
              />
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=525628348062&text=%C2%A1Hola!%20Quisiera%20saber%20m%C3%A1s%20informaci%C3%B3n%20acerca%20de%20sus%20servicios."
            >
              <font-awesome-icon
                class="ml-3 text-3xl text-maria-pink"
                :icon="['fab', 'whatsapp']"
              />
            </a>
          </li>
        </ul>
        <div class="lg:hidden">
          <button
            aria-label="Open Menu"
            title="Open Menu"
            class="
              p-2
              -mr-1
              transition
              duration-200
              rounded
              focus:outline-none focus:shadow-outline
            "
            @click="isMenuOpen = true"
          >
            <svg class="w-5 text-maria-pink" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
              ></path>
              <path
                fill="currentColor"
                d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
              ></path>
              <path
                fill="currentColor"
                d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
              ></path>
            </svg>
          </button>
          <div v-if="isMenuOpen" class="absolute top-0 left-0 w-full">
            <div class="p-5 bg-maria-pink rounded shadow-sm">
              <div class="flex items-center justify-between mb-4">
                <div>
                  <NuxtLink
                    to="/"
                    alt="Maria Bonita"
                    aria-label="Maria Bonita"
                    title="Maria Bonita"
                    class="inline-flex items-center"
                  >
                    <nuxt-img class="w-12" src="icon.png" />
                  </NuxtLink>
                </div>
                <div>
                  <button
                    aria-label="Cerrar Menú"
                    title="Cerrar Menú"
                    class="
                      p-2
                      -mt-2
                      -mr-2
                      transition
                      duration-200
                      rounded
                      hover:bg-gray-200
                      focus:bg-gray-200 focus:outline-none focus:shadow-outline
                    "
                    @click="isMenuOpen = false"
                  >
                    <svg class="w-5 text-black" viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
              <nav>
                <ul class="space-y-4">
                  <li>
                    <NuxtLink
                      to="/nosotros"
                      aria-label="Nosotros"
                      title="Nosotros"
                      class="
                        text-2xl
                        font-bold
                        tracking-wide
                        text-black
                        transition-colors
                        duration-200
                        hover:text-deep-purple-accent-400
                      "
                      >Nosotros</NuxtLink
                    >
                  </li>
                  <li>
                    <NuxtLink
                      to="/galeria"
                      aria-label="Galería"
                      title="Galería"
                      class="
                        text-2xl
                        font-bold
                        tracking-wide
                        text-black
                        transition-colors
                        duration-200
                      "
                      >Galería</NuxtLink
                    >
                  </li>
                  <li>
                    <NuxtLink
                      to="/contacto"
                      aria-label="Contacto"
                      title="Contacto"
                      class="
                        text-2xl
                        font-bold
                        tracking-wide
                        text-black
                        transition-colors
                        duration-200
                      "
                      >Contacto</NuxtLink
                    >
                  </li>
                </ul>
                <span class="flex mt-5 justify-center text-2xl">
                  <a v-if="ios" href="fb://profile/106070931823082">
                    <font-awesome-icon
                      class="mx-5 text-3xl"
                      :icon="['fab', 'facebook']"
                    />
                  </a>

                  <a v-else-if="android" href="fb://page/106070931823082">
                    <font-awesome-icon
                      class="mx-5 text-3xl"
                      :icon="['fab', 'facebook']"
                    />
                  </a>

                  <a v-else href="https://facebook.com/cintaticmx">
                    <font-awesome-icon
                      class="mx-5 text-3xl"
                      :icon="['fab', 'facebook']"
                    />
                  </a>
                  <a href="https://instagram.com/mariabonitawp">
                    <font-awesome-icon
                      class="mx-5 text-3xl"
                      :icon="['fab', 'instagram']"
                    />
                  </a>
                  <a href="https://instagram.com/mariabonitawp">
                    <font-awesome-icon
                      class="mx-5 text-3xl"
                      :icon="['fab', 'whatsapp']"
                    />
                  </a>
                  <a href="tel:5628348062">
                    <font-awesome-icon
                      class="mx-5 text-3xl"
                      :icon="['fas', 'phone']"
                    />
                  </a>
                </span>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isMenuOpen: false,
      ios: null,
      android: null,
    }
  },
  watch: {
    $route() {
      this.isMenuOpen = false
    },
  },
  mounted() {
    if (navigator.userAgent.toLowerCase().includes('iphone')) this.ios = true
    if (navigator.userAgent.toLowerCase().includes('android'))
      this.android = true
  },
}
</script>
