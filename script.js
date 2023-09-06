window.onscroll = function() {scrollFunction();};
const body = document.querySelector('body');


function scrollFunction() {
  removeLink();
    if (window.innerWidth > 960) {
      if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.getElementById("cover").style.transform = "scale(0.6)";
        document.getElementById("navBar").style.maxWidth = "1000px";
        
      } else {
        document.getElementById("cover").style.transform = "scale(1)";
        document.getElementById("navBar").style.maxWidth = "100%";
        
      }

  } else {
    // Do nothing
  }
}

//CHANGE FROM ID TO DIV TO MAKE IT RELEVANT ON EACH BUTTON
const copied = document.getElementById('copied');

function copyLinkToClipboard() {
  // Select the link element
  const link = document.getElementById('copy');
  
  

  copied.style.display = "block";

  // Create a temporary input element to hold the link URL
  const tempInput = document.createElement('input');
  tempInput.value = link.href;

  // Append the input element to the DOM
  document.body.appendChild(tempInput);

  // Select the input element's value
  tempInput.select();

  // Copy the selected text to the clipboard
  document.execCommand('copy');

  // Remove the temporary input element from the DOM
  document.body.removeChild(tempInput);

  // Alert the user that the link has been copied
  setTimeout(hideElement, 2000);

}

function hideElement(){
  
  copied.style.display = "none";
  console.log('hidden');
}


function removeLink(){
// 1. Select the elements based on their href attribute
const elementsToRemove = document.querySelectorAll('a[href="https://elfsight.com/instagram-feed-instashow/?utm_source=websites&utm_medium=clients&utm_content=instashow&utm_term=127.0.0.1&utm_campaign=free-widget"]');
 
// 2. Iterate through the selected elements and remove them
elementsToRemove.forEach((element) => {
  element.remove();
  console.log('Removed link');
  element.style.display = "none";
});
}

window.addEventListener('load', removeLink);
