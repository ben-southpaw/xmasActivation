export let PictureUtils = {
    getProdPicturePaths: img => {

        var arr = img.split('/');
        var ext = posix.extname(img);
        var fileName = posix.basename(img);
        fileName = fileName.substring(0, fileName.length - ext.length);
        var story = arr[2];
        var deskTopPath = arr.slice(0, 2).join('/');
        var mobilePath = arr.slice(0, 1).concat('Mobile').join('/');
        var retinaToken = '@2x';

        return {
            mobileImage: [mobilePath, story, fileName + ext].join('/'),
            mobileImage2x: [mobilePath, story, fileName + retinaToken + ext].join('/'),
            mobileImageWebp: [mobilePath, story, fileName + '.webp'].join('/'),
            mobileImageWebp2x: [mobilePath, story, fileName + retinaToken + '.webp'].join('/'),
            desktopImage: [deskTopPath, story, fileName + ext].join('/'),
            desktopImage2x: [deskTopPath, story, fileName + retinaToken + ext].join('/'),
            desktopImageWebp: [deskTopPath, story, fileName + '.webp'].join('/'),
            desktopImageWebp2x: [deskTopPath, story, fileName + retinaToken + '.webp'].join('/'),
        };

    }
}