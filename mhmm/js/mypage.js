class User {
  constructor() {
    const uploadBtn = document.getElementById('photo-upload-btn');
    const photoImg = document.getElementById('user-phto');
    const savePhotoBtn = document.getElementById('photo-save-btn');

    uploadBtn.addEventListener('change', event => {
      const target = event.target;
      if (target.files && target.files[0]) {
        const reader = new FileReader();
        reader.onload = function(e) {
          photoImg.setAttribute('src', e.target.result);
        };
        reader.readAsDataURL(target.files[0]);
      }
    });

    savePhotoBtn.addEventListener('click', async () => {
      if (uploadBtn.value === '') {
        alert('사진을 업로드 해주세요..');
        return;
      }

      if (confirm('사진을 저장하시겠습니까? ')) {
        try {
          await ajaxUtil.saveFileAjax(`/api/mypage/photo`, uploadBtn.value);
        } catch {
          alert(e);
          return;
        }
      }
    });
  }

  saveUserPhoto() {}
}

new User();
/**
{
  var fileReader = new FileReader();
  var filterType = /^(?:image\/bmp|image\/cis\-cod|image\/gif|image\/ief|image\/jpeg|image\/jpeg|image\/jpeg|image\/pipeg|image\/png|image\/svg\+xml|image\/tiff|image\/x\-cmu\-raster|image\/x\-cmx|image\/x\-icon|image\/x\-portable\-anymap|image\/x\-portable\-bitmap|image\/x\-portable\-graymap|image\/x\-portable\-pixmap|image\/x\-rgb|image\/x\-xbitmap|image\/x\-xpixmap|image\/x\-xwindowdump)$/i;

  fileReader.onload = function(event) {
    var image = new Image();

    image.onload = function() {
      document.getElementById('original-Img').src = image.src;
      var canvas = document.createElement('canvas');
      var context = canvas.getContext('2d');
      canvas.width = image.width / 4;
      canvas.height = image.height / 4;
      context.drawImage(image, 0, 0, image.width, image.height, 0, 0, canvas.width, canvas.height);

      document.getElementById('upload-Preview').src = canvas.toDataURL();
    };
    image.src = event.target.result;
  };

  var loadImageFile = function() {
    var uploadImage = document.getElementById('upload-Image');

    //check and retuns the length of uploded file.
    if (uploadImage.files.length === 0) {
      return;
    }

    //Is Used for validate a valid file.
    var uploadFile = document.getElementById('upload-Image').files[0];
    if (!filterType.test(uploadFile.type)) {
      alert('Please select a valid image.');
      return;
    }

    fileReader.readAsDataURL(uploadFile);
  };
}
 */
