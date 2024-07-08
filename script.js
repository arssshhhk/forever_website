(() => {
    const LOCALHOST_URL = 'http://localhost:3000/index.js';
    const PROD_URL = 'https://cdn.jsdelivr.net/gh/rollstudio/forever-script-cdn@0.3.3/dist/index.js';
  
    let jsURLs;
    fetch(LOCALHOST_URL, {})
      .then(() => {
        console.log('LOCALHOST');
        jsURLs = createScripts(LOCALHOST_URL);
      })
      .catch(() => {
        jsURLs = createScripts(PROD_URL);
      })
      .finally(() => {
        insertScripts(jsURLs);
      });
  
    function createScripts(URL) {
      const script = document.createElement('script');
      script.defer = true;
      script.src = URL;
  
      return script;
    }
  
    function insertScripts(script) {
      document.head.appendChild(script);
    }
  })();

  const { innerHeight } = window;

gsap.from("#zoom-in", {
  scale: 500, stager: 0.25, duration: 3,
  scrollTrigger: {
      trigger: "#zoom-in",
      pin: true,
      end: `+=${innerHeight * 1.3}`,
      scrub: 3
  }
});