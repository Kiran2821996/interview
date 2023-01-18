
const input = document.querySelector("input")
const defaultText = document.getElementById("default")
const debounceText = document.getElementById("debounce")
const throttleText = document.getElementById("throttle")

const updateDebounceText = debounce(() => {
  incrementCount(debounceText)
})
const updateThrottleText = throttle(() => {
  incrementCount(throttleText)
})

function incrementCount(element) {
  element.textContent = (parseInt(element.innerText) || 0) + 1
}

document.addEventListener("mousemove", e => {
  incrementCount(defaultText)
  updateDebounceText()
  updateThrottleText()
})

 
// Debounce Function
function debounce(cb, delay = 1000) {
  let timeout
  return (...args) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => {
      cb(...args)
    }, delay)
  }
}


 // Throttling Function
 function throttle(cb, delay = 1000){
  let prev = 0;
  return (...args) => {
    let now = new Date().getTime();
    // console.log(now-prev, delay);
    if(now - prev> delay){
      prev = now;
      return cb(...args); 
    }
  }
}






