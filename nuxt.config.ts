export default defineNuxtConfig({
  app: {
    head: {
      title: 'Pháo hoa Bộ Quốc phòng - Mua bán pháo hoa chính hãng, giá rẻ',
      meta: [
        { name: 'google-site-verification', content: 'tqPbgBVWWjFDXKMvxz-pKqIYxuQdm_mL5iulYN7V_Xw' },
        { name: 'description', content: 'Pháo hoa Bộ Quốc phòng - Mua bán pháo hoa chính hãng, giá rẻ' },
        { property: 'og:site_name', content: 'Pháo hoa Bộ Quốc phòng' },
        { property: 'og:title', content: 'Pháo hoa Bộ Quốc phòng - Mua bán pháo hoa chính hãng, giá rẻ' },
        { property: 'og:description', content: 'Khám phá ngay những mẫu pháo hoa tốt nhất hiện nay tại Pháo hoa Bộ Quốc phòng.' },
        { property: 'og:url', content: 'https://phaohoabqp.me' },
        { property: 'og:type', content: 'website' },
      ],
      link: [
        { 
          rel: 'icon', 
          type: 'image/png', 
          href: '/favicon.png' 
        }
      ]
    }
  },

  devtools: { enabled: false },
  ssr: true,

  plugins: [
    '~/plugins/pinia.js',
    '~/plugins/swiper.js',
    '~/plugins/clickOutside.js'
  ],

  css: [
    '~/assets/css/tailwind.css',
    'swiper/css',
    'swiper/css/navigation'
  ],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  }
});