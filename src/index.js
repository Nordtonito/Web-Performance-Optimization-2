const sharp = require('sharp');

const sharpImages = async () => {
    const sizes = [320, 768, 1024, 1920]

    for (let n of sizes) {
        for (let i = 1; i <= 10; i++) {
            await sharp(`./images/image${i}.jpeg`)
                .resize(n)
                .toFile(`./images/resized/webps/image-${i}-${n}w.webp`)

            await sharp(`./images/image${i}.jpeg`)
                .resize(n)
                .jpeg({quality: 80})
                .toFile(`./images/resized/jpegs/image-${i}-${n}w.jpeg`)
        }
    }

    console.log('Resizing completed 🎉')
}

sharpImages()