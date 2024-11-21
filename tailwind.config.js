module.exports = {
    content: [
      "./node_modules/flowbite/**/*.js",
    ],
    plugins: [
      require('flowbite')
    ],
    theme:{
      extend: {
        backgroundSize: {
          'size-200': '200% 200%',
        },
        backgroundPosition: {
          'pos-0': '0% 0%',
          'pos-100': '100% 100%',
        },
      },
      keyframes:{

      },
      animation:{
        tada: 'tada 1s ease-in-out 0.25s 1',
      },
      container: {
          center: true,
        },
    }
  }