const FALLBACK_IMAGE = 'https://storage.googleapis.com/alegrify/avatar_5bf01477d3954538a87b2af3_1543086207405_1738609.0229842314$SIZE.png';

/**
 * Get path for image for specific size
 * @param {String} path 
 * @param {Object} size 
 * @param {Number} size.width
 * @param {Number} size.height
 * @returns {String}
 */
function loadImage(path, size) {
    let height, width;

    if (!size) {
        return path;
    }

    const retina = isRetina();

    if (typeof size.height === 'number') {
        height = retina ? size.height * 2 : size.height;
    }

    if (typeof size.width === 'number') {
        width = retina ? size.width * 2 : size.width;
    }

    if (!height && !width) {
        return path;
    }

    const suffix = `${width || '_'}x${height || '_'}`;

    return path.replace('$SIZE', suffix);
}

/**
 * Get background image path for property of object
 * @param {Object} object 
 * @param {Array.<String>} props 
 * @param {Object} [options={}]
 * @returns {String}
 */
function backgroundImage(object, props, options = {}) {
    let val = object[props[0]]

    if (typeof val === 'object' && props.length > 1) {
        return backgroundImage(val, props.splice(0, 1), options);
    }
    else if (typeof val === 'string') {
        return loadImage(val, options);
    }

    return loadImage(FALLBACK_IMAGE, options);
}

/**
 * Get background image css object for property of object
 * @param {Object} object 
 * @param {Array.<String>} props 
 * @param {Object} [options={}]
 * @returns {Object}
 */
function bgImageCss(object, props, options = {}) {
    return {
        backgroundImage: `url(${backgroundImage(object, props, options)})`
    };
}

/**
 * Is device retina?
 * @returns {Boolean}
 */
function isRetina(){
    if (!window) {
        return true;
    }

    return ((window.matchMedia && (window.matchMedia('only screen and (min-resolution: 124dpi), only screen and (min-resolution: 1.3dppx), only screen and (min-resolution: 48.8dpcm)').matches || window.matchMedia('only screen and (-webkit-min-device-pixel-ratio: 1.3), only screen and (-o-min-device-pixel-ratio: 2.6/2), only screen and (min--moz-device-pixel-ratio: 1.3), only screen and (min-device-pixel-ratio: 1.3)').matches)) || (window.devicePixelRatio && window.devicePixelRatio > 1.3));
}

export {
    loadImage,
    backgroundImage,
    bgImageCss,
    isRetina
};
