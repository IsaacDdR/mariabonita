<template>
  <div>
    <div class="h-screen items-center justify-center">
      <Logo />
    </div>
    <div
      data-aos="fade-up"
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
                text-maria-pink
                sm:leading-none
              "
            >
              Déjanos crear una <br class="hidden md:block" />
              experiencia
              <span class="inline-block text-red-400">inolvidable</span>
            </h2>
            <p class="text-base text-red-100 text-xl md:text-lg">
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
                duration-200
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
        <div class="flex items-center justify-center -mx-4 lg:pl-8">
          <div class="flex flex-col items-end px-3">
            <img
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
              src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
              alt=""
            />
            <img
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
              src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
              alt=""
            />
          </div>
          <div class="px-3">
            <img
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
              src="https://images.pexels.com/photos/3182739/pexels-photo-3182739.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
    <div
      data-aos="fade-up"
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
          <a href="/" aria-label="Item" class="mr-3">
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
          </a>
          <h2
            class="
              font-sans
              text-4xl
              font-bold
              leading-none
              tracking-tight
              text-maria-pink
              sm:text-4xl
            "
          >
            <span class="inline-block mb-2">The brown fox</span>
            <div
              class="
                h-1
                ml-auto
                duration-300
                origin-left
                transform
                bg-red-500
                scale-x-30
                group-hover:scale-x-100
              "
            ></div>
          </h2>
        </div>
        <p class="w-full text-maria-pink lg:text-sm lg:max-w-md">
          "Sed ut perspiciatis unde omnis iste natus error sit iste voluptatem
          accusantium doloremque rem aperiam, ipsa eaque quae. Sed ut
          perspiciatis unde omnis iste."
        </p>
      </div>
      <div class="grid gap-8 row-gap-5 mb-8 lg:grid-cols-3 lg:row-gap-8">
        <div>
          <img
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
            src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
            alt=""
          />
          <p class="mb-2 text-xl font-bold leading-none sm:text-2xl">
            Galaxies Orion
          </p>
          <p class="text-gray-700">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium.
          </p>
        </div>
        <div>
          <img
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
            src="https://images.pexels.com/photos/3182750/pexels-photo-3182750.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
            alt=""
          />
          <p class="mb-2 text-xl font-bold leading-none sm:text-2xl">
            Tunguska event
          </p>
          <p class="text-gray-700">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium.
          </p>
        </div>
        <div>
          <img
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
            src="https://images.pexels.com/photos/3182746/pexels-photo-3182746.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
            alt=""
          />
          <p class="mb-2 text-xl font-bold leading-none sm:text-2xl">
            Yolo ipsum dolor
          </p>
          <p class="text-gray-700">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium.
          </p>
        </div>
        <div>
          <img
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
            src="https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
            alt=""
          />
          <p class="mb-2 text-xl font-bold leading-none sm:text-2xl">
            Curabitur mattis
          </p>
          <p class="text-gray-700">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium.
          </p>
        </div>
        <div>
          <img
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
            src="https://images.pexels.com/photos/3184311/pexels-photo-3184311.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500"
            alt=""
          />
          <p class="mb-2 text-xl font-bold leading-none sm:text-2xl">
            Leverage agile
          </p>
          <p class="text-gray-700">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium.
          </p>
        </div>
        <div>
          <img
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
            src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
            alt=""
          />
          <p class="mb-2 text-xl font-bold leading-none sm:text-2xl">
            Organically grow
          </p>
          <p class="text-gray-700">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium.
          </p>
        </div>
      </div>
      <div class="text-center">
        <a
          href="/"
          aria-label=""
          class="
            inline-flex
            items-center
            font-semibold
            transition-colors
            duration-200
            text-deep-purple-accent-400
            hover:text-deep-purple-800
          "
        >
          See more
          <svg
            class="inline-block w-3 ml-2"
            fill="currentColor"
            viewBox="0 0 12 12"
          >
            <path
              d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z"
            ></path>
          </svg>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>
