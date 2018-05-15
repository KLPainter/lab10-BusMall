/* exported images */

class ImageRecord {

    constructor(imageName) {
        this.imageName = imageName;
        this.timesPresented = 0;
        this.timesChosen = 0;
    }

    render(rootElement) {
        this.timesPresented++;
        let newImage = document.createElement('img');
        newImage.src = 'img/' + this.imageName;
        newImage.style.width = '200px';
        rootElement.appendChild (newImage);
        newImage.addEventListener('click', () => {
            this.timesChosen++;
        });
    }

}

const images = [
    new ImageRecord ('bag.jpg'),
    new ImageRecord ('banana.jpg'),
    new ImageRecord ('bathroom.jpg'),
    new ImageRecord ('boots.jpg'),
    new ImageRecord ('breakfast.jpg'),
    new ImageRecord ('bubblegum.jpg'),
    new ImageRecord ('chair.jpg'),
    new ImageRecord ('cthulhu.jpg'),
    new ImageRecord ('dog-duck.jpg'),
    new ImageRecord ('dragon.jpg'),
    new ImageRecord ('pen.jpg'),
    new ImageRecord ('pet-sweep.jpg'),
    new ImageRecord ('scissors.jpg'),
    new ImageRecord ('shark.jpg'),
    new ImageRecord ('pet-sweep.jpg'),
    new ImageRecord ('tauntaun.jpg'),
    new ImageRecord ('unicorn.jpg'),
    new ImageRecord ('usb.gif'),
    new ImageRecord ('water-can.jpg'),
    new ImageRecord ('wine-glass.jpg')
];