(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{128:function(t,n,e){"use strict";var r=e(176),o=e.n(r);e(236);n.a=function(t){t.app.AOS=new o.a.init}},171:function(t,n,e){"use strict";e.r(n);e(45),e(59);var r={data:function(){return{isMenuOpen:!1,ios:null,android:null}},watch:{$route:function(){this.isMenuOpen=!1}},mounted:function(){navigator.userAgent.toLowerCase().includes("iphone")&&(this.ios=!0),navigator.userAgent.toLowerCase().includes("android")&&(this.android=!0)}},o=e(17),component=Object(o.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"\n    fixed\n    w-full\n    backdrop-filter backdrop-blur-xl\n    bg-red-100 bg-opacity-10\n  "},[e("div",{staticClass:"\n      px-4\n      py-5\n      mx-auto\n      sm:max-w-xl\n      md:max-w-full\n      lg:max-w-screen-xl\n      md:px-24\n      lg:px-8\n    "},[e("div",{staticClass:"relative flex items-center justify-between"},[e("NuxtLink",{staticClass:"inline-flex items-center",attrs:{to:"/",alt:"Maria Bonita","aria-label":"Maria Bonita",title:"Maria Bonita"}},[e("nuxt-img",{staticClass:"w-14",attrs:{format:"webp",src:"icon-pink.png"}})],1),t._v(" "),e("ul",{staticClass:"flex items-center hidden space-x-8 lg:flex"},[e("li",[e("NuxtLink",{staticClass:"\n              text-2xl\n              font-bold\n              tracking-wide\n              transition-colors\n              duration-200\n              text-maria-pink\n              hover:text-red-300\n            ",attrs:{to:"/galeria","aria-label":"Galería",title:"Galería"}},[t._v("Galería")])],1),t._v(" "),e("li",[e("NuxtLink",{staticClass:"\n              text-2xl\n              font-bold\n              tracking-wide\n              text-maria-pink\n              hover:text-red-300\n              transition-colors\n              duration-200\n            ",attrs:{to:"/nosotros","aria-label":"Nosotros",title:"Nosotros"}},[t._v("Nosotros")])],1),t._v(" "),e("li",[e("NuxtLink",{staticClass:"\n              text-2xl\n              font-bold\n              tracking-wide\n              text-maria-pink\n              hover:text-red-300\n              transition-colors\n              duration-200\n            ",attrs:{to:"/contacto","aria-label":"Contacto",title:"Contacto"}},[t._v("Contacto")])],1)]),t._v(" "),e("ul",{staticClass:"flex items-center hidden space-x-8 text-2xl lg:flex"},[e("li",[e("a",{attrs:{href:"https://instagram.com/mariabonitawp"}},[e("font-awesome-icon",{staticClass:"ml-3 text-3xl text-maria-pink",attrs:{icon:["fab","instagram"]}})],1),t._v(" "),e("a",{attrs:{href:"https://facebook.com/cintaticmx"}},[e("font-awesome-icon",{staticClass:"ml-3 text-3xl text-maria-pink",attrs:{icon:["fab","facebook"]}})],1),t._v(" "),e("a",{attrs:{href:"https://api.whatsapp.com/send?phone=525628348062&text=%C2%A1Hola!%20Quisiera%20saber%20m%C3%A1s%20informaci%C3%B3n%20acerca%20de%20sus%20servicios."}},[e("font-awesome-icon",{staticClass:"ml-3 text-3xl text-maria-pink",attrs:{icon:["fab","whatsapp"]}})],1)])]),t._v(" "),e("div",{staticClass:"lg:hidden"},[e("button",{staticClass:"\n            p-2\n            -mr-1\n            transition\n            duration-200\n            rounded\n            focus:outline-none focus:shadow-outline\n          ",attrs:{"aria-label":"Open Menu",title:"Open Menu"},on:{click:function(n){t.isMenuOpen=!0}}},[e("svg",{staticClass:"w-5 text-maria-pink",attrs:{viewBox:"0 0 24 24"}},[e("path",{attrs:{fill:"currentColor",d:"M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"}}),t._v(" "),e("path",{attrs:{fill:"currentColor",d:"M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"}}),t._v(" "),e("path",{attrs:{fill:"currentColor",d:"M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"}})])]),t._v(" "),t.isMenuOpen?e("div",{staticClass:"absolute top-0 left-0 w-full"},[e("div",{staticClass:"p-5 bg-maria-pink rounded shadow-sm"},[e("div",{staticClass:"flex items-center justify-between mb-4"},[e("div",[e("NuxtLink",{staticClass:"inline-flex items-center",attrs:{to:"/",alt:"Maria Bonita","aria-label":"Maria Bonita",title:"Maria Bonita"}},[e("nuxt-img",{staticClass:"w-12",attrs:{src:"icon.png"}})],1)],1),t._v(" "),e("div",[e("button",{staticClass:"\n                    p-2\n                    -mt-2\n                    -mr-2\n                    transition\n                    duration-200\n                    rounded\n                    hover:bg-gray-200\n                    focus:bg-gray-200 focus:outline-none focus:shadow-outline\n                  ",attrs:{"aria-label":"Cerrar Menú",title:"Cerrar Menú"},on:{click:function(n){t.isMenuOpen=!1}}},[e("svg",{staticClass:"w-5 text-black",attrs:{viewBox:"0 0 24 24"}},[e("path",{attrs:{fill:"currentColor",d:"M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"}})])])])]),t._v(" "),e("nav",[e("ul",{staticClass:"space-y-4"},[e("li",[e("NuxtLink",{staticClass:"\n                      text-2xl\n                      font-bold\n                      tracking-wide\n                      text-black\n                      transition-colors\n                      duration-200\n                      hover:text-deep-purple-accent-400\n                    ",attrs:{to:"/nosotros","aria-label":"Nosotros",title:"Nosotros"}},[t._v("Nosotros")])],1),t._v(" "),e("li",[e("NuxtLink",{staticClass:"\n                      text-2xl\n                      font-bold\n                      tracking-wide\n                      text-black\n                      transition-colors\n                      duration-200\n                    ",attrs:{to:"/galeria","aria-label":"Galería",title:"Galería"}},[t._v("Galería")])],1),t._v(" "),e("li",[e("NuxtLink",{staticClass:"\n                      text-2xl\n                      font-bold\n                      tracking-wide\n                      text-black\n                      transition-colors\n                      duration-200\n                    ",attrs:{to:"/contacto","aria-label":"Contacto",title:"Contacto"}},[t._v("Contacto")])],1)]),t._v(" "),e("span",{staticClass:"flex mt-5 justify-center text-2xl"},[t.ios?e("a",{attrs:{href:"fb://profile/106070931823082"}},[e("font-awesome-icon",{staticClass:"mx-5 text-3xl",attrs:{icon:["fab","facebook"]}})],1):t.android?e("a",{attrs:{href:"fb://page/106070931823082"}},[e("font-awesome-icon",{staticClass:"mx-5 text-3xl",attrs:{icon:["fab","facebook"]}})],1):e("a",{attrs:{href:"https://facebook.com/cintaticmx"}},[e("font-awesome-icon",{staticClass:"mx-5 text-3xl",attrs:{icon:["fab","facebook"]}})],1),t._v(" "),e("a",{attrs:{href:"https://instagram.com/mariabonitawp"}},[e("font-awesome-icon",{staticClass:"mx-5 text-3xl",attrs:{icon:["fab","instagram"]}})],1),t._v(" "),e("a",{attrs:{href:"https://instagram.com/mariabonitawp"}},[e("font-awesome-icon",{staticClass:"mx-5 text-3xl",attrs:{icon:["fab","whatsapp"]}})],1),t._v(" "),e("a",{attrs:{href:"tel:5628348062"}},[e("font-awesome-icon",{staticClass:"mx-5 text-3xl",attrs:{icon:["fas","phone"]}})],1)])])])]):t._e()])],1)])])}),[],!1,null,null,null);n.default=component.exports;installComponents(component,{Nav:e(171).default})},179:function(t,n,e){"use strict";var r=e(17),component=Object(r.a)({},(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"bg-gray-900 font-sans"},[e("Nav"),t._v(" "),e("Nuxt"),t._v(" "),e("Footer")],1)}),[],!1,null,null,null);n.a=component.exports;installComponents(component,{Nav:e(171).default,Footer:e(238).default})},180:function(t,n,e){e(181),t.exports=e(182)},238:function(t,n,e){"use strict";e.r(n);var r=e(17),component=Object(r.a)({},(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"\n    px-4\n    pt-16\n    mx-auto\n    sm:max-w-xl\n    md:max-w-full\n    lg:max-w-screen-xl\n    md:px-24\n    lg:px-8\n  "},[e("div",{staticClass:"grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4"},[e("div",{staticClass:"sm:col-span-2"},[e("NuxtLink",{staticClass:"inline-flex items-center",attrs:{to:"/","aria-label":"Maria Bonita",alt:"Maria Bonita",title:"Maria Bonita"}},[e("nuxt-img",{staticClass:"w-12",attrs:{format:"webp",src:"icon-pink.png"}})],1),t._v(" "),t._m(0)],1),t._v(" "),t._m(1),t._v(" "),e("div",[e("span",{staticClass:"text-base font-bold tracking-wide text-maria-pink"},[t._v("Social")]),t._v(" "),e("div",{staticClass:"flex items-center mt-1 space-x-3"},[e("a",{staticClass:"\n            text-maria-pink\n            transition-colors\n            duration-300\n            hover:text-red-400\n          ",attrs:{"aria-label":"Twitter",href:"https://www.twitter.com"}},[e("svg",{staticClass:"h-5",attrs:{viewBox:"0 0 24 24",fill:"currentColor"}},[e("path",{attrs:{d:"M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z"}})])]),t._v(" "),e("a",{staticClass:"\n            text-gray-500\n            transition-colors\n            duration-300\n            text-maria-pink\n            hover:text-red-400\n          ",attrs:{"aria-label":"Instagram",href:"https://www.instagram.com/mariabonitawp"}},[e("svg",{staticClass:"h-6",attrs:{viewBox:"0 0 30 30",fill:"currentColor"}},[e("circle",{attrs:{cx:"15",cy:"15",r:"4"}}),t._v(" "),e("path",{attrs:{d:"M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z"}})])]),t._v(" "),e("a",{staticClass:"\n            text-gray-500\n            transition-colors\n            duration-300\n            text-maria-pink\n            hover:text-red-400\n          ",attrs:{"aria-label":"Facebook",href:"https://www.facebook.com"}},[e("svg",{staticClass:"h-5",attrs:{viewBox:"0 0 24 24",fill:"currentColor"}},[e("path",{attrs:{d:"M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z"}})])])]),t._v(" "),e("p",{staticClass:"mt-4 text-sm text-maria-pink"},[t._v("\n        Bacon ipsum dolor amet short ribs pig sausage prosciutto chicken spare\n        ribs salami.\n      ")])])]),t._v(" "),t._m(2)])}),[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"mt-6 lg:max-w-sm"},[e("p",{staticClass:"text-sm text-gray-800 text-maria-pink"},[t._v("\n          Sed ut perspiciatis unde omnis iste natus error sit voluptatem\n          accusantium doloremque laudantium, totam rem aperiam.\n        ")]),t._v(" "),e("p",{staticClass:"mt-4 text-sm text-gray-800 text-maria-pink"},[t._v("\n          Eaque ipsa quae ab illo inventore veritatis et quasi architecto\n          beatae vitae dicta sunt explicabo.\n        ")])])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"space-y-2 text-lg"},[e("p",{staticClass:"text-base font-bold tracking-wide text-gray-900"},[t._v("Conttacto")]),t._v(" "),e("div",{staticClass:"flex"},[e("p",{staticClass:"mr-1 text-red-500"},[t._v("Teléfono:")]),t._v(" "),e("a",{staticClass:"\n            transition-colors\n            duration-300\n            text-maria-pink\n            hover:text-red-400\n          ",attrs:{href:"tel:850-123-5021","aria-label":"Our phone",title:"Our phone"}},[t._v("850-123-5021")])]),t._v(" "),e("div",{staticClass:"flex"},[e("p",{staticClass:"mr-1 text-red-500"},[t._v("Email:")]),t._v(" "),e("a",{staticClass:"\n            transition-colors\n            duration-300\n            text-maria-pink\n            hover:text-red-400\n          ",attrs:{href:"mailto:info@lorem.mail","aria-label":"Our email",title:"Our email"}},[t._v("info@lorem.mail")])]),t._v(" "),e("div",{staticClass:"flex"},[e("p",{staticClass:"mr-1 text-red-500"},[t._v("Dirección:")]),t._v(" "),e("a",{staticClass:"\n            transition-colors\n            duration-300\n            text-maria-pink\n            hover:text-red-400\n          ",attrs:{href:"https://www.google.com/maps",target:"_blank",rel:"noopener noreferrer","aria-label":"Our address",title:"Our address"}},[t._v("\n          312 Lovely Street, NY\n        ")])])])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"\n      flex flex-col-reverse\n      justify-between\n      pt-5\n      pb-10\n      border-t border-red-500\n      lg:flex-row\n    "},[e("p",{staticClass:"text-sm text-gray-600"},[t._v("\n      © Maria Bonita 2021. Todos los derechos reservados\n    ")]),t._v(" "),e("ul",{staticClass:"\n        flex flex-col\n        mb-3\n        space-y-2\n        lg:mb-0\n        sm:space-y-0 sm:space-x-5 sm:flex-row\n      "},[e("li",[e("a",{staticClass:"\n            text-sm text-gray-600\n            transition-colors\n            duration-300\n            hover:text-deep-purple-accent-400\n          ",attrs:{href:"/"}},[t._v("Política de privacidad")])]),t._v(" "),e("li",[e("a",{staticClass:"\n            text-sm text-gray-600\n            transition-colors\n            duration-300\n            hover:text-deep-purple-accent-400\n          ",attrs:{href:"/"}},[t._v("Términos & Condiciones")])])])])}],!1,null,null,null);n.default=component.exports}},[[180,7,1,8]]]);