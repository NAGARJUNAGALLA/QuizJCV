// ====== BLOCKS / LINKS FOR SIDE NAV ======
const blocks = [
    { title: "Study Material", htmlFile: "pages/studymaterial.html" },
    { title: "Text Books", htmlFile: "pages/textbooks.html" },
    { title: "Model Papers", htmlFile: "modelpapers.html" },
    { title: "Previous Papers", htmlFile: "previouspapers.html" },
    { title: "Online Tests", htmlFile: "library.html" },
    { title: "Formulas", htmlFile: "formulas.html" },
    { title: "Syllabus", htmlFile: "syllabus.html" },
];

// Create sidebar dynamically
const sideNav = document.createElement('div');
sideNav.className = 'sidenav';
sideNav.id = 'sideNav';
document.body.appendChild(sideNav);

// Populate side nav
blocks.forEach(block => {
    const a = document.createElement("a");
    a.innerText = block.title;
    a.href = block.htmlFile;
    sideNav.appendChild(a);
});

// Create top header
const header = document.createElement('div');
header.className = 'quiz-header';
header.innerHTML = `
    <div style="display:flex; align-items:center;">
        <span class="hamburger" onclick="toggleNav()">☰</span>
        <div id="quiz-title">JCV ICE <span>JCV Institute of Competitive Exams</span></div>
    </div>
`;
document.body.appendChild(header);

// Create bottom navbar
const navbar = document.createElement('div');
navbar.className = 'navbar';
navbar.innerHTML = `
  <div class="nav-item" onclick="goHome()">🏠<br>Home</div>
  <div class="nav-item" onclick="goLibrary()">📘<br>Library</div>
  <div class="nav-item">📝<br>Exams</div>
  <div class="nav-item">🖥️<br>Online</div>
  <div class="nav-item">💳<br>Fee</div>
`;
document.body.appendChild(navbar);

// Create main content container
const mainContent = document.createElement('div');
mainContent.className = 'main';
mainContent.id = 'mainContent';
document.body.insertBefore(mainContent, navbar);

// ====== SIDEBAR TOGGLE ======
let navOpen = false; // hidden by default
function toggleNav() {
    if(navOpen) {
        document.getElementById("sideNav").style.width = "0";
        document.getElementById("mainContent").style.marginLeft = "0";
    } else {
        document.getElementById("sideNav").style.width = "200px";
        document.getElementById("mainContent").style.marginLeft = "200px";
    }
    navOpen = !navOpen;
}

// Bottom navbar functions
function goHome() { window.location.href = "dashboard.html"; }
function goLibrary() { window.location.href = "library.html"; }
