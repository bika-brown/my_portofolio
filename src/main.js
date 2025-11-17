// const menuBtn = document.getElementById('menu-btn');
// const mobileMenu = document.getElementById('mobile-menu');
//     menuBtn.addEventListener('click', () => {
//       mobileMenu.classList.toggle('hidden');
//     });


// document.addEventListener('DOMContentLoaded', () => {
//   // Elements
//   const nextBtn = document.getElementById('next-form');      // Step 1 → Step 2
//   const nextBtn2 = document.getElementById('next-describ');  // Step 2 → Step 3

//   const step1 = document.getElementById('form');             // first section
//   const step2 = document.getElementById('new-form');         // second section
//   const step3 = document.getElementById('describ-form');      // third section
//   const note = document.getElementById('note');

//   // Safety checks
//   if (!nextBtn) console.error('next-form button not found');
//   if (!nextBtn2) console.error('next-describ button not found');
//   if (!step1) console.error('Step 1 element (id="form") not found');
//   if (!step2) console.error('Step 2 element (id="new-form") not found');
//   if (!step3) console.error('Step 3 element (id="describ-form") not found');

//   // Prevent accidental form reloads
//   const mainForm = document.querySelector('form[action="#"]') || document.querySelector('form');
//   if (mainForm) {
//     mainForm.addEventListener('submit', (e) => {
//       console.log('form submit triggered');
//     });
//   }

  // Step 1 → Step 2
  if (nextBtn && step1 && step2) {
    nextBtn.addEventListener('click', (e) => {
      e.preventDefault();
      step1.classList.add('hidden');
      step2.classList.remove('hidden');
      if (note) note.classList.remove('hidden');
      console.log('Moved to Step 2');
    });
  }

  // Step 2 → Step 3
  if (nextBtn2 && step2 && step3) {
    nextBtn2.addEventListener('click', (e) => {
      e.preventDefault();
      step2.classList.add('hidden');
      step3.classList.remove('hidden');
      console.log('Moved to Step 3 (description form)');
    });
  }

  // Optional: Back buttons can go here later
});

