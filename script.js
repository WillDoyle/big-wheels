window.onscroll = function() {scrollFunction(), removeLink()};
function scrollFunction() {
if(location.pathname=="/index.html"){
    if (window.innerWidth > 960) {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop < 50) {
      document.getElementById("cover").style.scale = "1";
      document.getElementById("navBar").style.maxWidth = "100%";
      console.log('Default cover photo');
  
    } else {
      document.getElementById("cover").style.scale = "0.6";
      document.getElementById("navBar").style.maxWidth = "1000px";
      console.log('Smaller cover photo');
      
      
    }
    }
  }
    else{
      //Do nothing
      
    }
}

function removeLink(){
// 1. Select the elements based on their href attribute
const elementsToRemove = document.querySelectorAll('a[href="https://elfsight.com/instagram-feed-instashow/?utm_source=websites&utm_medium=clients&utm_content=instashow&utm_term=127.0.0.1&utm_campaign=free-widget"]');
 
// 2. Iterate through the selected elements and remove them
elementsToRemove.forEach((element) => {
  element.remove();
  console.log('Removed link');
});
}
