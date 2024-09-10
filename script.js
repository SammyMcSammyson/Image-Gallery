console.log(`checking that everything is all linked up like the matrix`); //checking that everything is linked up.

//creating a place to store images - creating an Array with object inside of them - I have made five of them.

let pictures = [
  {
    src: `https://github.com/SammyMcSammyson/Image-Gallery/blob/main/Assests/Kohl%20Mock.jpeg?raw=true`,
    alt: `watch`,
    width: 50,
    height: 50,
  },
  {
    src: `https://github.com/SammyMcSammyson/Image-Gallery/blob/main/Assests/Kohl%20strap.jpg?raw=true`,
    alt: `watch strap`,
    width: 50,
    height: 50,
  },
  {
    src: `https://github.com/SammyMcSammyson/Image-Gallery/blob/main/Assests/kohl%20casing.jpg?raw=true`,
    alt: `watch case`,
    width: 50,
    height: 50,
  },
  {
    src: `https://github.com/SammyMcSammyson/Image-Gallery/blob/main/Assests/kohl%20face.jpg?raw=true`,
    alt: `watch face`,
    width: 50,
    height: 50,
  },
];

//setting a variable which gets my element where I want to implement my pcitues

function thumbnail() {
  for (let img of pictures) {
    //going for a "catch all" function which creates sets attirubutes etc. for my thumbnail for each object in my array. tried to use a for each function initally but this seemed easier - i say this because I spent an hour and could not get for each to work spent 20 minutes and had my for function up and running...
    const thumbnailPic = document.getElementById("thumbnail");
    const thumbnailCreate = document.createElement("img");

    thumbnailCreate.setAttribute("src", img.src);
    thumbnailCreate.setAttribute("alt", img.alt);
    thumbnailCreate.setAttribute("width", img.width);
    thumbnailCreate.setAttribute("height", img.height);

    thumbnailPic.appendChild(thumbnailCreate);

    thumbnailPic.addEventListener("click", largeImageHandler); //making large picture from thumbnail.
  }
}

function largeImageHandler(e) {
  //handling the image
  document.getElementById("mainPictures").innerHTML = ""; //clearing the HTML so pages don't load after one another
  const mainPictures = document.getElementById("mainPictures"); //setting variable to find div I want to put image in
  const createdImage = document.createElement("img"); //creating image in that div
  createdImage.src = e.target.src; //copying code from the function onto new image
  createdImage.alt = e.target.alt; //copying code from the function onto new image
  mainPictures.appendChild(createdImage); // appending it on to the div
}

thumbnail(); //running the function so it appears.

document.getElementById("rightarrow").addEventListener("click", rightArrow);

// function rightArrow() {
//   let currentImage = document.getElementById("mainPictures").src;
//   if (
//     currentImage ===
//     "https://images.pexels.com/photos/1525041/pexels-photo-1525041.jpeg?cs=srgb&dl=pexels-francesco-ungaro-1525041.jpg&fm=jpg"
//   ) {
//     document.getElementById("mainPictures").src =
//       "https://wallpapers.com/images/featured/4k-space-9w27dqmc4nrs3xwd.jpg";
//   } else if (
//     currentImage ===
//     "https://wallpapers.com/images/featured/4k-space-9w27dqmc4nrs3xwd.jpg"
//   ) {
//     document.getElementById("mainPictures").src =
//       "https://t4.ftcdn.net/jpg/05/53/48/87/360_F_553488732_6GhfwBhYFelkhgYykFHXqLY7Rasubfcs.jpg";
//   } else if (
//     currentImage ===
//     "https://t4.ftcdn.net/jpg/05/53/48/87/360_F_553488732_6GhfwBhYFelkhgYykFHXqLY7Rasubfcs.jpg"
//   ) {
//     document.getElementById("mainPictures").src =
//       "https://asset.gecdesigns.com/img/wallpapers/blue-purple-beautiful-scenery-ultra-hd-wallpaper-4k-sr10012421-1706505497434-cover.webp";
//   } else if (
//     currentImage ===
//     "https://asset.gecdesigns.com/img/wallpapers/blue-purple-beautiful-scenery-ultra-hd-wallpaper-4k-sr10012421-1706505497434-cover.webp"
//   ) {
//     document.getElementById("mainPictures").src =
//       "https://images6.alphacoders.com/106/1069078.jpg";
//   } else if (
//     currentImage === "https://images6.alphacoders.com/106/1069078.jpg"
//   ) {
//     document.getElementById("mainPictures").src =
//       "https://images.pexels.com/photos/1525041/pexels-photo-1525041.jpeg?cs=srgb&dl=pexels-francesco-ungaro-1525041.jpg&fm=jpg";
//   }
// }
