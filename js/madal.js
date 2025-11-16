(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-open");
  }

  const openMenuBtn = document.querySelector("[data-menu-open]");
  const closeMenuBtn = document.querySelector("[data-menu-close]");
  const menu = document.querySelector("[data-menu]");

  openMenuBtn.addEventListener("click", () => {
    menu.classList.add("is-open");
  });

  closeMenuBtn.addEventListener("click", () => {
    menu.classList.remove("is-open");
  });
})();
