var carouselImages=document.querySelector(".carousel-images"),indicators=document.querySelectorAll(".carousel-indicators li"),totalImages=indicators.length,currentIndex=0;function updateCarousel(){var e=100*currentIndex;carouselImages.style.transform="translateX(-"+e+"%)",indicators.forEach(function(e,t){e.classList.toggle("active",t===currentIndex)})}setInterval(function(){currentIndex=(currentIndex+1)%totalImages,updateCarousel()},3e3),indicators.forEach(function(e,t){e.addEventListener("click",function(){currentIndex=t,updateCarousel()})});