//service_g2kpj2h service id
//Z2FSRvzQFlssyX1a0 public key 
//template_rs0x8jv template id 

window.onscroll = function() {scrollFunction();};
const body = document.querySelector('body');

window.addEventListener('load', () => {
  quicklink.listen();
});

const images = document.querySelectorAll('.bio__img');

const observer = new IntersectionObserver(entries =>{
  entries.forEach(entry =>{
    entry.target.classList.toggle('show', entry.isIntersecting);
    if(entry.isIntersecting) observer.unobserve(entry.target)
  })
},{
  threshold: 0.5,
  
})

images.forEach(image => {
  observer.observe(image)
})





function scrollFunction() {
  removeLink();
    if (window.innerWidth > 960) {
      if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 900) {
        // document.getElementById("cover").style.transform = "scale(0.6)";
        // document.getElementById("left-text").style.transform = "translate(-50%, -50%)";
        // document.getElementById("right-text").style.transform = "translate(8%, -50%)";  

      }
      else{
        // document.getElementById("cover").style.transform = "scale(1)";
        // document.getElementById("left-text").style.transform = "translate(-100%, -50%)";
        // document.getElementById("right-text").style.transform = "translate(100%, -50%)";

      }

      if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        
        //document.getElementById("navBar").style.maxWidth = "1000px";
        
      } else {
        
        //document.getElementById("navBar").style.maxWidth = "100%";
        
      }

  } else {
    // Do nothing
  }

  
}

function hideMobileNav(){
  const navLinks = document.getElementById('mobile__nav--links');
  const mobileNav = document.getElementById('mobileNav');
  navLinks.classList.toggle('open');
  mobileNav.classList.toggle('close');
}

function contact(event){
  event.preventDefault();
  
  const loading = document.querySelector('.modal__overlay--loading');
const success = document.querySelector('.modal__overlay--success');

  loading.classList += ' modal__overlay--visible'

  emailjs.sendForm('service_g2kpj2h', 'template_rs0x8jv', event.target, 'Z2FSRvzQFlssyX1a0')
  .then(() => {   
     
         loading.classList.remove("modal__overlay--visible");
  success.classList += " modal__overlay--visible"; setTimeout(() => {
    success.classList.remove("modal__overlay--visible"); loading.classList.remove('modal__overlay--loading');
  }, 2000)}).catch(() =>{
      loading.classList.remove("modal__overlay--visible");
      alert("The email service is temporarily unavailable. Please contact me directly on 19doylew@gmail.com");
  })
}



function removeModal(){
  const loading = document.querySelector('.modal__overlay--loading');
const success = document.querySelector('.modal__overlay--success');


  success.classList.remove("modal__overlay--visible");
  loading.classList.remove("modal__overlay--visible");
}


function copyLinkToClipboard(copiedId) {
  // Get the parent element of the button that was clicked
  const parentElement = document.getElementById(copiedId).closest('.control');

  // Get the href from the parent's <a> element
  const linkToCopy = parentElement.querySelector('a').getAttribute('href');

  // Create a temporary textarea element to copy the link to the clipboard
  const textarea = document.createElement('textarea');
  textarea.value = linkToCopy;
  textarea.style.position = 'fixed'; // Ensure it's not visible
  document.body.appendChild(textarea);
  
  // Select the text in the textarea and copy it to the clipboard
  textarea.select();
  document.execCommand('copy');

  // Remove the temporary textarea
  document.body.removeChild(textarea);

  // Show the specific copied element when the button is clicked
  const copiedElement = document.getElementById(copiedId);
  copiedElement.style.display = 'block';

  // Hide the copied element after a certain duration (e.g., 3 seconds)
  setTimeout(() => {
    copiedElement.style.display = 'none';
  }, 3000); // Adjust the duration as needed
}


function hideElement(){
  
  // copied.style.display = "none";
  // console.log('hidden');
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
