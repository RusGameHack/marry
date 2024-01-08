function maxWidth(blocks) {
  let maxWidth = 0;
  blocks.forEach((block) => {
    block.style.width = "";
    const widthBlock = block.getBoundingClientRect().width;
    maxWidth = widthBlock > maxWidth ? widthBlock : maxWidth;
  });
  blocks.forEach((block) => {
    block.style.minWidth = `${maxWidth}px`;
  });
  console.log(maxWidth);
}
console.log("AAAA");
maxWidth(document.querySelectorAll(".program-block-time"));
document.addEventListener("resize", () => {
  maxWidth(document.querySelectorAll(".program-block-time"));
});
