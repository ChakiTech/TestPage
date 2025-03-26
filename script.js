/* Global Reset */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Segoe UI', sans-serif;
  background: #f4f6f8;
  color: #333;
}

header {
  background-color: #007acc;
  color: white;
  padding: 20px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: 1.8em;
  font-weight: bold;
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 30px;
}

.nav-links a {
  text-decoration: none;
  color: white;
  font-weight: bold;
  padding: 8px 15px;
  transition: background 0.3s;
  border-radius: 5px;
}

.nav-links a:hover,
.nav-links a.active {
  background: #005fa3;
}

main {
  padding: 40px 20px;
  max-width: 1000px;
  margin: auto;
  min-height: 60vh;
}

.tab {
  display: none;
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
}

.tab.active {
  display: block;
  opacity: 1;
}

footer {
  background-color: #333;
  color: white;
  text-align: center;
  padding: 15px;
}
const navLinks = document.querySelectorAll(".nav-links a");
const tabs = document.querySelectorAll(".tab");

navLinks.forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const targetId = link.getAttribute("data-tab");

    // Remove active classes
    navLinks.forEach(l => l.classList.remove("active"));
    tabs.forEach(tab => {
      tab.classList.remove("active");
    });

    // Add active class to clicked nav
    link.classList.add("active");

    const targetTab = document.getElementById(targetId);

    // Force reflow to restart animation
    void targetTab.offsetWidth;

    // Show the target tab with animation
    targetTab.classList.add("active");
  });
});
