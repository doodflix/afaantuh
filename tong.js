/*<![CDATA[*/
<!-- Multi Tab Server Iframe Video by Kauruka.com -->
(function() {
    const defaultThum = "https://img01.hijabnoty.pro/hijabnoty%2Bpro.webp"; // Ubah dengan url gambar jika ingin menampilkan thumbnail
    const showThumbnail = true; // Ubah ke 'false' jika tidak ingin menampilkan thumbnail

    const videoContainer=document.querySelector(".vi-on"),changeButtons=document.querySelectorAll(".change-video");function initThumbnail(){if(showThumbnail){const e=document.createElement("div");e.classList.add("play"),e.innerHTML="<span></span>";const t=document.createElement("img");t.classList.add("thumb-v");const n=videoContainer.getAttribute("data-thum"),i=n||defaultThum;t.src=i,t.alt="Video Thumbnail",t.onerror=function(){t.remove();const e=document.createElement("p");e.textContent="Thumbnail tidak dapat dimuat.",videoContainer.appendChild(e)},videoContainer.appendChild(e),videoContainer.appendChild(t),e.addEventListener("click",function(){const e=document.querySelector(".c-aktif").getAttribute("data-embed");videoContainer.innerHTML=`<iframe src="${e}" frameborder="0" allowfullscreen webkitallowfullscreen mozallowfullscreen></iframe>`})}else{const e=document.querySelector(".c-aktif").getAttribute("data-embed");videoContainer.innerHTML=`<iframe src="${e}" frameborder="0" allowfullscreen webkitallowfullscreen mozallowfullscreen></iframe>`}}function initEmbedButtons(){changeButtons.forEach(function(e){e.addEventListener("click",function(){changeButtons.forEach(t=>t.classList.remove("c-aktif")),e.classList.add("c-aktif");const t=e.getAttribute("data-embed");videoContainer.innerHTML=`<iframe src="${t}" frameborder="0" allowfullscreen webkitallowfullscreen mozallowfullscreen></iframe>`})})}initThumbnail(),initEmbedButtons();
/*]]>*/