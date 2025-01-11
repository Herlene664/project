document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Login Successful!");
    document.querySelector('.welcome-section').style.display = 'none';
    document.querySelector('.login-form').style.display = 'none';
    document.getElementById('hero').style.display = 'block';
    document.getElementById('content').style.display = 'none';
});

function discoverMore() {
    document.getElementById('hero').style.display = 'none';
    document.getElementById('content').style.display = 'block';
}

const modal = document.getElementById("myModal");
const closeModal = document.getElementsByClassName("close")[0];

closeModal.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function showContent(contentId) {
    const contentItems = document.querySelectorAll('.content-item');
    contentItems.forEach(item => {
        item.classList.remove('active');
        item.style.display = 'none'; 
    });
    const activeContent = document.getElementById(contentId);
    activeContent.classList.add('active');
    activeContent.style.display = 'block';
}