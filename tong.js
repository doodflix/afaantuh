//@see https://stackoverflow.com/questions/63551837/where-is-my-iframe-in-the-published-web-application-sidebar
const firstFrameLocation = window.parent.parent?.parent?.location?.ancestorOrigins?.[0];
if(!firstFrameLocation){
  //Firefox or not framed
  //Provide default user interface
}
if(firstFrameLocation.includes("gemoylann.blogspot.com")){
  //Chromium based 
  //@see https://stackoverflow.com/questions/26046030/change-window-location-ancestororigins
}
