
  import html2canvas from "html2canvas";
  
  const exportAsImage = async (element, imageFileName, format) => {

    const image_w = 1080;
    const image_h = 756;

    let options = {
      scale: 4,
      x: (image_w/2)/2,
      y: (image_h-(image_w/2))/2,
      width: image_w/2,
      height: image_w/2
    }
    if(format == 2){
      options = {
        scale: 4,
        width: image_w,
        height: image_h
      }
    }

    const canvas = await html2canvas(element, options);
    const image = canvas.toDataURL("image/png", 1.0);
    downloadImage(image, imageFileName);
  };
  
  const downloadImage = (blob, fileName) => {
  const fakeLink = window.document.createElement("a");
  fakeLink.style = "display:none;";
  fakeLink.download = fileName;
  
  fakeLink.href = blob;
  
  document.body.appendChild(fakeLink);
  fakeLink.click();
  document.body.removeChild(fakeLink);
  
  fakeLink.remove();
  };
  
  export default exportAsImage;