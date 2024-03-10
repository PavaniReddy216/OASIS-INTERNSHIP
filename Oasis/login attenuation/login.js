function authenticateUser() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    // Simulate authentication (replace with server-side logic)
    if (username === '') {
      alert('please enter username ')
      return false
    }
    if(password===''){
        alert('please enter password')
        return false
    }
    showSecurePage();
  }
  
  function registerUser() {
    const newUsername = document.getElementById('newUsername').value;
    const newPassword = document.getElementById('newPassword').value;
    if (newUsername === '') {
        alert('please enter username ')
        return false
      }
      if(newPassword===''){
          alert('please enter password')
          return false
      }
      showSecurePage();
  }
  
  function showRegisterForm() {
    document.getElementById('loginPage').style.display = 'none';
    document.getElementById('registerPage').style.display = 'block';
  }
  
  function showLoginPage() {
    document.getElementById('registerPage').style.display = 'none';
    document.getElementById('loginPage').style.display = 'block';
  }
  
  function showSecurePage() {
    document.getElementById('loginPage').style.display = 'none';
    document.getElementById('registerPage').style.display = 'none';
    document.getElementById('securePage').style.display = 'block';
  }
  
  function logout() {
    document.getElementById('securePage').style.display = 'none';
    document.getElementById('loginPage').style.display = 'block';
  }
  