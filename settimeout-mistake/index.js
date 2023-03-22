// Common mistake is to think the timer is an exact predictor of when the event handler will fire, but it isn’t necessarily.
// The event handler still has to wait its turn in the queue. By measuring time, we can see this in action.
function timer() {
  let start = Date.now()
  setTimeout(() => {
    let end = Date.now()
    console.log('Duration: ' + (end - start))
  }, 1000)
}

timer()
timer()
timer()
timer()
timer()

// possible results:
// Duration: 1000
// Duration: 1009
// Duration: 1010
// Duration: 1001
