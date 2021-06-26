module.exports = {
  purge: {
    enabled: true,
    content: [
    "./src/**/*.vue",
    "./public/*.html"
  ]},
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      gridTemplateColumns: {
        "categories" : "repeat(auto-fit, minmax(149px, 190px))"
      },
      gridAutoRows: {
        "categories": "270px"
      },
      maxHeight:{
        "screen-5":"5vh",
        "screen-10":"10vh",
        "screen-15":"15vh",
        "screen-20":"20vh",
        "screen-25":"25vh",
        "screen-30":"30vh",
        "screen-35":"35vh",
        "screen-40":"40vh",
        "screen-45":"45vh",
      },
      minHeight:{
        "screen-5":"5vh",
        "screen-10":"10vh",
        "screen-15":"15vh",
        "screen-20":"20vh",
        "screen-25":"25vh",
        "screen-30":"30vh",
        "screen-35":"35vh",
        "screen-40":"40vh",
        "screen-45":"45vh",
        "screen-50":"50vh",
        "screen-55":"55vh",
        "screen-60":"60vh",
        "screen-65":"65vh",
        "screen-70":"70vh",
        "screen-75":"75vh",
        "screen-80":"80vh",
        "screen-85":"85vh",
        "screen-90":"90vh",
        "screen-95":"95vh"
      },
      width:{
        "p-5": "5%",
        "p-10":"10%",
        "p-15":"15%",
        "p-20":"20%",
        "p-25":"25%",
        "p-18":"18%",
        "p-30":"30%",
        "p-40":"40%",
        "p-50":"50%",
        "p-60":"60%",
        "p-70":"70%",
        "p-80":"80%",
        "p-85":"85%",
        "p-90":"90%",
        "p-95":"95%"
      },
      height:{
        "43": "43%",
        "57": "57%",
        "15" : "3.75em",
        "p-5": "5%",
        "p-10":"10%",
        "p-20":"20%",
        "p-15":"15%",
        "p-18":"18%",
        "p-30":"30%",
        "p-40":"40%",
        "p-50":"50%",
        "p-60":"60%",
        "p-70":"70%",
        "p-80":"80%",
        "p-90":"90%",
        "p-95":"95%",
        "screen-10": "10vh",
        "screen-20": "20vh",
        "screen-30": "30vh",
        "screen-40": "40vh",
        "screen-50": "50vh",
        "screen-60": "60vh",
        "screen-70": "70vh",
        "screen-80": "80vh",
        "screen-85": "85vh",
        "screen-90": "90vh",
      },
      fontSize: {
        "rating": "14.4px"
      },
      fontWeight: {
        "x-medium": "550"
      },
      backgroundColor: {
        "rating": "#358cff"
      },
      fontFamily: {
        "arial" : "Arial"
      },
      margin:{
        "x-2.5":"2.5%",
        "rl-2.5":"0 2.5% 0 2.5%"
      },
      opacity:{
        "99": "99",
        "95": "95"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
