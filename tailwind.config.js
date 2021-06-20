//const colors = require('tailwindcss/colors');
const plugin = require('tailwindcss/plugin');

module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/!**!/!*.vue',
    './pages/!**!/!*.vue',
    './plugins/!**/!*.{js,ts}',
    './nuxt.config.{js,ts}',
    './assets/**/*.css'
  ],
  // or 'media' or 'class'
  darkMode: 'class',
  theme: {
    extend: {
      // 自定义缩放
      scale: {
        '25': '.25',
      },
      // 自定义尺寸
      spacing: {
        // 2px
        'px3': '3px',
        // 1px(rem)
        '0.25': '0.0625rem',
        // 3px(rem)
        '0.75': '0.1875rem'
      },
      // 自定义 z-index
      zIndex: {
        '50': 50,
        '60': 60,
        '70': 70,
        '80': 80,
        '90': 90,
        '100': 100
      },
      // 自定义边框宽度
      borderWidth: {
        '3': '3px',
        '4': '4px',
        '6': '6px',
        '8': '8px'
      },
      /*// 自定义主题颜色
      colors: {
        theme: {
          dark: '#1f2937',
          "dark-text": '#d1d5db',
          green1: '#34d399',
          "green1-deep": '#10b981'
        }
      }*/
    },
  },
  variants: {
    extend: {
      // display支持important
      display: ['important', 'hover', 'focus', 'responsive'],

      // fill支持深色模式
      fill: ['dark'],
    },
  },
  plugins: [
    /**
     * 使用important
     * tailwindcss-important-variant
     * https://github.com/neojp/tailwindcss-important-variant
     */
    require('@neojp/tailwindcss-important-variant'),

    plugin(({addUtilities, addBase, theme}) => {
      /**
       * 居中
       */
      addUtilities({
        '.flex-center': {
          'display': 'flex',
          'justify-content': 'center',
          'align-items': 'center'
        },
        '.inline-flex-center': {
          'display': 'inline-flex',
          'justify-content': 'center',
          'align-items': 'center'
        }
      });

      /**
       * 主题色
       */
      addUtilities({
        '.text-theme-color': {
          'color': 'var(--theme-active-color)'
        },
        '.text-theme-color-light': {
          'color': 'var(--theme-active-color-light)'
        },
        '.text-theme-color-deep': {
          'color': 'var(--theme-active-color-deep)'
        },
        '.bg-theme-color': {
          'background-color': 'var(--theme-active-color)'
        },
        '.bg-theme-color-light': {
          'background-color': 'var(--theme-active-color-light)'
        },
        '.bg-theme-color-deep': {
          'background-color': 'var(--theme-active-color-deep)'
        },
        '.border-theme-color': {
          'border-color': 'var(--theme-active-color)'
        },
        '.border-theme-color-light': {
          'border-color': 'var(--theme-active-color-light)'
        },
        '.border-theme-color-deep': {
          'border-color': 'var(--theme-active-color-deep)'
        }
      }, ['responsive', 'hover', 'dark']);

      /**
       * 主题色
       */
      addUtilities({
        '.bg-theme-dark': {
          'background-color': 'var(--theme-color-dark)'
        },
        '.bg-theme-dark-light': {
          'background-color': 'var(--theme-color-dark-light)'
        },
        '.text-theme-dark-text': {
          'color': 'var(--theme-color-dark-text)'
        }
      }, ['responsive', 'hover', 'dark']);


      /**
       * 鼠标
       */
      let cursor = {
        default: 'url(~/assets/icon/cursor/default.png), default !important',
        pointer: 'url(~/assets/icon/cursor/pointer.png), pointer !important',
        text: 'url(~/assets/icon/cursor/text.png), text !important'
      }
      addUtilities({
        // 默认
        '.cur-default': {
          'cursor': cursor.default
        },
        '.cur-default-inner *': {
          'cursor': cursor.default
        },
        '.cur-default-all, .cur-default-all *': {
          'cursor': cursor.default
        },
        // 点击
        '.cur-pointer': {
          'cursor': cursor.pointer
        },
        '.cur-pointer-inner *': {
          'cursor': cursor.pointer
        },
        '.cur-pointer-all, .cur-pointer-all *': {
          'cursor': cursor.pointer
        },
        // 光标
        '.cur-text': {
          'cursor': cursor.text
        },
        '.cur-text-inner *': {
          'cursor': cursor.text
        },
        '.cur-text-all, .cur-text-all *': {
          'cursor': cursor.text
        },
      })

      /*addBase({
              ':root': {
                // 深色
                '--theme-color-dark': '#1f2937',
                '--theme-color-dark-text': '#d1d5db',
                // 主题颜色
                // 绿色
                '--theme-color-green1': '#34d399',
                '--theme-color-green1-dark': '#10b981',

                // 激活的主题颜色
                '--theme-active-color': 'var(--theme-color-green1)',
                '--theme-active-color-dark': 'var(--theme-color-green1-dark)'
              }
            })*/

    })
  ]
}
