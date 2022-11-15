function Image_Change(){
  const images = [];
  images.push('images/P1.png','images/P2.png','images/P3.png');
  setInterval(()=>{
    document.getElementById("myImage").src=images.pop();
    if(images.length == 0){
      images.push('images/P1.png','images/P2.png','images/P3.png','images/P4.png');
    }

  },3000);

}