  const loginBtn = document.getElementById('loginBtn');
  const modal = document.getElementById('authModal');
  const closeModal = document.getElementById('closeModal');
  const tabs = modal.querySelectorAll('.tab-btn');
  const forms = modal.querySelectorAll('.auth-form');

  // Open modal when login button clicked
  loginBtn.addEventListener('click', () => {
    modal.style.display = 'flex';
    // Default show login tab
    tabs.forEach(t => t.classList.remove('active'));
    forms.forEach(f => f.classList.remove('active'));
    tabs[0].classList.add('active');
    forms[0].classList.add('active');
  });

  // Close modal on clicking X
  closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  // Close modal on clicking outside modal content
  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });

  // Tabs switch inside modal
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      forms.forEach(form => {
        form.id === tab.dataset.target ? form.classList.add('active') : form.classList.remove('active');
      });
    });
  });
