const btnCollapse = document.querySelector(".btn-collapse");
const container = document.querySelector(".container");
const copy = document.querySelector(".copy");

const collapse = (btn, block, copy) => {
  // создали универсальную функцию, которая принимает какую-то кнопку и блок

  const information = block.getBoundingClientRect(); // getBoundingClientRect() позволяет получить координаты и размеры любого элемента
  // console.log(information)
  const height = information.height;
  // console.log(height)
  block.style.transform = `translateY(-${height}px)`;
  copy.style.transform = `translateY(-${height}px)`;

  btn.addEventListener("click", () => {
    if (block.classList.contains("active")) {
      block.style.transform = `translateY(-${height}px)`;
      copy.style.transform = `translateY(-${height}px)`;
      block.classList.remove("active");
    } else {
      block.style.transform = `translateY(0)`;
      copy.style.transform = `translateY(0)`;
      block.classList.add("active");
    }
  });
};

collapse(btnCollapse, container, copy);
