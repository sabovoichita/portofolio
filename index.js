let likeCounter = 0;
const likeButton = document.getElementById("likeButton");
//a function that increments  the number of likes
const addLike = (incrementBy) => {
  likeCounter += incrementBy;

  //show number of likes on the button, like this (3) Like 👍
  likeButton.innerText = `(${likeCounter}) Like 👍`;

  console.log(likeCounter === 10);

  if (likeCounter === 10) {
    alert(" 🎉Congrats!");
  }
};

likeButton.addEventListener("click", () => addLike(1));
