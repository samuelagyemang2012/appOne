/**
 * Created by samuel on 10/11/2016.
 */

(function () {

    //"use strict";

    document.addEventListener('deviceReady', onDeviceReady.bind(this), false);
    var pictureSource;
    var destinationType;

    function onDeviceReady() {
        pictureSource = navigator.camera.PictureSourceType;
        destinationType = navigator.camera.DestinationType;

        document.getElementById('photo').onclick = function () {
            navigator.camera.getPicture(onDataSuccess, onFail, {
                quality: 50,
                destinationType: destinationType.DATA_URL
            });
        }
    };

    function onPhotoDataSuccess(imageData) {
        var smallImage = document.getElementById('smallImage');

        smallImage.style.display = 'block';
        smallImage.src = "data:image/jpeg;base64," + imageData;
    }
}
