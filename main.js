//all dom here
const dropdownButton = document.querySelector('.dropdown-btn');
const dropdownContent = document.querySelector('.dropdown-content');
const dropdownButton2 = document.querySelector('.dropdown-btn2');
const dropdownContent2 = document.querySelector('.dropdown-content2');
const dropdownButton3 = document.querySelector('.dropdown-btn3');
const dropdownContent3 = document.querySelector('.dropdown-content3');

// for the modals
dropdownButton.addEventListener('click', () => {
    dropdownContent.classList.toggle('show');
});

window.addEventListener('click', (event) => {
    if (!event.target.matches('.dropdown-btn')) {
        if (dropdownContent.classList.contains('show')) {
            dropdownContent.classList.remove('show');
        }
    }
});
//for the modals
dropdownButton2.addEventListener('click', () => {
  dropdownContent2.classList.toggle('show');
});

window.addEventListener('click', (event) => {
  if (!event.target.matches('.dropdown-btn2')) {
      if (dropdownContent2.classList.contains('show')) {
          dropdownContent2.classList.remove('show');
      }
  }
});
//for the modals
dropdownButton3.addEventListener('click', () => {
  dropdownContent3.classList.toggle('show');
});

window.addEventListener('click', (event) => {
  if (!event.target.matches('.dropdown-btn3')) {
      if (dropdownContent3.classList.contains('show')) {
          dropdownContent3.classList.remove('show');
      }
  }
});

function toggleDiv() {
  const div = document.getElementById('myDiv');
  if (div.style.display === 'none' || div.style.display === '') {
    div.style.display = 'block';
  } else {
    div.style.display = 'none';
  }
}
