const sizes = [320, 768, 1024, 1920];
const formats = ['webp', 'jpeg']

let body = document.getElementById('body');

for (let i = 1; i < 11; i++) {
    let picture = document.createElement('picture');
    let polyfillWrapper = document.createElement('noscript');
    polyfillWrapper.className = 'loading-lazy'

    for (let s of sizes) {
        for (let f of formats) {
            let source = document.createElement('source');
            source.type = `image/${f}`;
            source.media = `(max-width: ${s}px)`;
            source.srcset = `images/resized/${f}s/image-${i}-${s}w.${f}`;

            picture.append(source);
        }
    }

    let img = document.createElement('img');
    img.src = `images/image${i}.jpeg`;
    img.alt = 'Picture';
    img.loading = 'lazy';
    img.width = 1024

    picture.append(img);
    polyfillWrapper.append(picture)

    body.append(polyfillWrapper);
}