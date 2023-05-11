// JavaScript for the search bar
const searchForm = document.querySelector('form');
const searchInput = document.querySelector('input[type="text"]');
searchForm.addEventListener('submit', e => {
  e.preventDefault();
  const searchTerm = searchInput.value;
  alert(`You searched for: ${searchTerm}`);
  searchInput.value = '';
});

// JavaScript for the featured courses slider
const courseList = document.querySelector('.course-list');
const courseItems = courseList.querySelectorAll('.course-item');
let currentItem = 0;

function showCourse(courseIndex) {
  courseItems[currentItem].classList.remove('active');
  courseItems[courseIndex].classList.add('active');
  currentItem = courseIndex;
}

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

prevBtn.addEventListener('click', () => {
  let newIndex = currentItem - 1;
  if (newIndex < 0) {
    newIndex = courseItems.length - 1;
  }
  showCourse(newIndex);
});

nextBtn.addEventListener('click', () => {
  let newIndex = currentItem + 1;
  if (newIndex >= courseItems.length) {
    newIndex = 0;
  }
  showCourse(newIndex);
});

// JavaScript for the category courses hover effect
const categoryItems = document.querySelectorAll('.category-item');
categoryItems.forEach(item => {
  item.addEventListener('mouseover', () => {
    item.classList.add('active');
  });
  item.addEventListener('mouseout', () => {
    item.classList.remove('active');
  });
});



