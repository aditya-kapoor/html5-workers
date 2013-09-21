this.onmessage = function(){
  worker = this
  var xhr = new XMLHttpRequest()
  xhr.onerror = function(){
    worker.postMessage({error: true, payload: "Event Payload"})
  }
  xhr.onreadystatechanged = function(){
    worker.postMessage({success: true, payload: "Event Payload"})
  }
  xhr.open("GET", "http://search.twitter.com/search.json?q=ruby")
  xhr.send()
  // We can use conventional JQuery style but we need to include jquery.js into it but
  // all the DOM manipulations on success and failure events will take place on main thread only...
  // Refer http://www.html5rocks.com/en/tutorials/workers/basics/#toc-enviornment-features for more...
}