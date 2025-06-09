window.onload = randomp;

var pic_rand = ["RandomImages/cartImage1.jpg","RandomImages/cartImage2.png", "RandomImages/cartImage3.png","RandomImages/cartImage4.jpg","RandomImages/cartImage5.jpg",
  "RandomImages/cartImage6.jpg", "RandomImages/cartImage7.jpg","RandomImages/cartImage8.png", "RandomImages/cartImage9.png", "RandomImages/cartImage10.png",
  "RandomImages/cartImage11.jpg", "RandomImages/cartImage12.png", "RandomImages/cartImage13.jpg", "RandomImages/cartImage14.jpg", "RandomImages/cartImage15.jpg",
  "RandomImages/cartImage16.jpg", "RandomImages/cartImage17.jpg", "RandomImages/cartImage18.jpg", "RandomImages/cartImage19.jpg", "RandomImages/cartImage20.jpg",
  "RandomImages/cartImage21.jpg",
];

function randomp() {
  var randomNum = Math.floor(Math.random() * pic_rand.length);
    document.getElementById("image1").src = pic_rand[randomNum];
}