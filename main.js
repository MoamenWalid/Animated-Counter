const animatedCounterEl = document.querySelector('.two');
const numsCounter = document.querySelectorAll('.nums span');
const speed = 500;

window.addEventListener('scroll', () => {
  if (window.scrollY >= animatedCounterEl.offsetTop) {
    
    numsCounter.forEach((counter) => {
      const addNumToSpan = () => {
        const target = +counter.dataset.scroll;
        const count = +counter.innerText;
      
        const inc = target / speed;
      
        if (count < target) {
          counter.innerText = parseInt(count + inc);
          setTimeout(addNumToSpan, 1);
        }

        else {
          counter.innerText = target;
        }
      }
      addNumToSpan();
    })
  }
})