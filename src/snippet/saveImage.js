// 保存图片到本地， 打开外链的图片url，chrome65开始会直接打开新页面，不会触发下载操作
saveImage = (url) => {
    var image = new Image();
    image.crossOrigin = "anonymous";
    image.src = url;
    image.style="display:none";
    // get file name - you might need to modify this if your image url doesn't contain a file extension otherwise you can set the file name manually
    var fileName = image.src.split(/(\\|\/)/g).pop();
    image.onload = function() {
      var canvas = document.createElement('canvas');
      canvas.width = this.naturalWidth; // or 'width' if you want a special/scaled size
      canvas.height = this.naturalHeight; // or 'height' if you want a special/scaled size
      canvas.getContext('2d').drawImage(this, 0, 0);
      var blob;
      // ... get as Data URI
      if (image.src.indexOf(".jpg") > -1) {
        blob = canvas.toDataURL("image/jpeg");
      } else if (image.src.indexOf(".png") > -1) {
        blob = canvas.toDataURL("image/png");
      } else if (image.src.indexOf(".gif") > -1) {
        blob = canvas.toDataURL("image/gif");
      } else {
        blob = canvas.toDataURL("image/png");
      }

      var a = document.createElement("a");
      a.href = blob //canvas.toDataURL();
      a.download = url.split(/(\\|\/)/g).pop();;
      a.click();

      // var event = document.createEvent('Event');
      // event.initEvent('click', true, true);
      // a.dispatchEvent(event);
      // (window.URL || window.webkitURL).revokeObjectURL(a.href);
      document.body.removeChild(image);
    };
    document.body.append(image);
  }