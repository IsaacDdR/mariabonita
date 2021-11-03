<template>
  <div>
    <div class="h-screen items-center justify-center">
      <Logo />
    </div>
    <div
      id="first"
      class="
        px-4
        py-16
        mx-auto
        sm:max-w-xl
        md:max-w-full
        lg:max-w-screen-xl
        md:px-24
        lg:px-8 lg:py-20
      "
    >
      <div class="grid gap-10 lg:grid-cols-2">
        <div class="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg">
          <div class="max-w-xl mb-6">
            <h2
              class="
                max-w-lg
                mb-6
                font-sans
                text-5xl
                font-bold
                tracking-tight
                text-maria-azucar
                sm:leading-none
              "
            >
              Déjanos crear una <br class="hidden md:block" />
              experiencia
              <span class="inline-block text-maria-merlot">inolvidable</span>
            </h2>
            <p class="text-base text-maria-azucar text-xl md:text-lg">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae. explicabo.
            </p>
          </div>
          <div>
            <NuxtLink
              to="/nosotros"
              aria-label=""
              class="
                inline-flex
                items-center
                font-semibold
                transition-colors
                text-maria-pink
                hover:text-red-500
              "
            >
              Conócenos
              <svg
                class="inline-block w-3 ml-2"
                fill="currentColor"
                viewBox="0 0 12 12"
              >
                <path
                  d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z"
                ></path>
              </svg>
            </NuxtLink>
          </div>
        </div>
        <div
          data-aos="slide-up"
          data-aos-duration="1000"
          class="flex items-center justify-center -mx-4 lg:pl-8"
        >
          <div class="flex flex-col items-end px-3">
            <nuxt-img
              format="webp"
              class="
                object-cover
                mb-6
                rounded
                shadow-lg
                h-28
                sm:h-48
                xl:h-56
                w-28
                sm:w-48
                xl:w-56
              "
              width="250px"
              height="250px"
              src="/img/maria-bonita-1.jpeg"
              alt=""
            />
            <nuxt-img
              class="
                object-cover
                w-20
                h-20
                rounded
                shadow-lg
                sm:h-32
                xl:h-40
                sm:w-32
                xl:w-40
              "
              format="webp"
              width="175px"
              height="175px"
              src="/img/maria-bonita-3.jpeg"
              alt=""
            />
          </div>
          <div class="px-3">
            <nuxt-img
              class="
                object-cover
                w-40
                h-40
                rounded
                shadow-lg
                sm:h-64
                xl:h-80
                sm:w-64
                xl:w-80
              "
              width="300px"
              height="300px"
              format="webp"
              src="/img/maria-bonita-2.jpeg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
    <div
      data-aos="slide-up"
      data-aos-duration="1000"
      class="
        px-4
        py-16
        mx-auto
        sm:max-w-xl
        md:max-w-full
        lg:max-w-screen-xl
        md:px-24
        lg:px-8 lg:py-20
      "
    >
      <div
        class="flex flex-col w-full mb-6 lg:justify-between lg:flex-row md:mb-8"
      >
        <div class="flex items-center mb-5 md:mb-6 group lg:max-w-xl">
          <span class="mr-3">
            <div
              class="
                flex
                items-center
                justify-center
                w-16
                h-16
                rounded-full
                bg-maria-pink
              "
            >
              <svg
                class="w-12 h-12 text-gray-900"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                ></polygon>
              </svg>
            </div>
          </span>
          <h2
            class="
              font-sans
              text-4xl
              font-bold
              leading-none
              tracking-tight
              text-maria-merlot
              sm:text-4xl
            "
          >
            <span class="inline-block mb-2">Momentos memorables</span>
          </h2>
        </div>
        <p class="w-full text-maria-pink text-xl lg:max-w-md">
          "Sed ut perspiciatis unde omnis iste natus error sit iste voluptatem
          accusantium doloremque rem aperiam, ipsa eaque quae. Sed ut
          perspiciatis unde omnis iste."
        </p>
      </div>
      <div class="grid gap-8 row-gap-5 mb-8 lg:grid-cols-3 lg:row-gap-8">
        <div>
          <nuxt-img
            format="webp"
            class="
              object-cover
              w-full
              h-56
              mb-6
              rounded
              shadow-lg
              md:h-64
              xl:h-80
            "
            width="500px"
            height="500px"
            src="/img/maria-bonita-4.jpeg"
            alt=""
          />
          <p
            class="
              mb-2
              text-xl
              font-bold
              text-maria-merlot
              leading-none
              sm:text-2xl
            "
          >
            Galaxies Orion
          </p>
          <p class="text-maria-azucar">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium.
          </p>
        </div>
        <div>
          <nuxt-img
            class="
              object-cover
              w-full
              h-56
              mb-6
              rounded
              shadow-lg
              md:h-64
              xl:h-80
            "
            format="webp"
            width="500px"
            height="500px"
            src="/img/maria-bonita-5.jpeg"
            alt=""
          />
          <p
            class="
              mb-2
              text-xl
              font-bold
              leading-none
              sm:text-2xl
              text-maria-merlot
            "
          >
            Tunguska event
          </p>
          <p class="text-maria-azucar">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium.
          </p>
        </div>
        <div>
          <nuxt-img
            class="
              object-cover
              w-full
              h-56
              mb-6
              rounded
              shadow-lg
              md:h-64
              xl:h-80
            "
            format="webp"
            width="500px"
            height="500px"
            src="/img/maria-bonita-6.jpeg"
            alt=""
          />
          <p
            class="
              mb-2
              text-xl
              font-bold
              leading-none
              sm:text-2xl
              text-maria-merlot
            "
          >
            Yolo ipsum dolor
          </p>
          <p class="text-maria-azucar">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium.
          </p>
        </div>
        <div>
          <nuxt-img
            class="
              object-cover
              w-full
              h-56
              mb-6
              rounded
              shadow-lg
              md:h-64
              xl:h-80
            "
            format="webp"
            width="500px"
            height="500px"
            src="/img/maria-bonita-7.jpeg"
            alt=""
          />
          <p
            class="
              mb-2
              text-xl
              font-bold
              leading-none
              sm:text-2xl
              text-maria-merlot
            "
          >
            Curabitur mattis
          </p>
          <p class="text-maria-azucar">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium.
          </p>
        </div>
        <div>
          <nuxt-img
            class="
              object-cover
              w-full
              h-56
              mb-6
              rounded
              shadow-lg
              md:h-64
              xl:h-80
            "
            format="webp"
            width="500px"
            height="500px"
            src="/img/maria-bonita-8.jpeg"
            alt=""
          />
          <p
            class="
              mb-2
              text-xl
              font-bold
              leading-none
              sm:text-2xl
              text-maria-merlot
            "
          >
            Leverage agile
          </p>
          <p class="text-maria-azucar">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium.
          </p>
        </div>
        <div>
          <nuxt-img
            class="
              object-cover
              w-full
              h-56
              mb-6
              rounded
              shadow-lg
              md:h-64
              xl:h-80
            "
            format="webp"
            width="500px"
            height="500px"
            src="/img/maria-bonita-9.jpeg"
            alt=""
          />
          <p
            class="
              mb-2
              text-xl
              font-bold
              leading-none
              sm:text-2xl
              text-maria-merlot
            "
          >
            Organically grow
          </p>
          <p class="text-maria-azucar">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium.
          </p>
        </div>
      </div>
      <div class="text-center">
        <NuxtLink
          to="/"
          aria-label=""
          class="
            inline-flex
            items-center
            font-semibold
            transition-colors
            text-maria-pink
          "
        >
          Conóce más
          <svg
            class="inline-block w-3 ml-2"
            fill="currentColor"
            viewBox="0 0 12 12"
          >
            <path
              d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z"
            ></path>
          </svg>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  scrollToTop: true,
}
</script>
