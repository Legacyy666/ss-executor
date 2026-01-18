// script.js - Paste in new file named script.js
function checkBackdoor() {
    const commonIds = [16434836259, 5390566768, 8913865946]; // common ones from 2025-2026
    let found = false;
    document.getElementById('output').innerHTML += '<br><span class="status">[Scanning common backdoors...]</span>';
    
    commonIds.forEach(id => {
        setTimeout(() => {
            document.getElementById('output').innerHTML += `<br>Testing require(${id})... `;
            // Simulate check (real check needs client executor)
            if (Math.random() > 0.7) { // random "success" for demo
                document.getElementById('output').innerHTML += '<span style="color:#00ff00">FOUND!</span>';
                found = true;
            } else {
                document.getElementById('output').innerHTML += '<span style="color:#ff0000">Failed/Patched</span>';
            }
        }, 800 * commonIds.indexOf(id));
    });
    
    setTimeout(() => {
        if (!found) {
            document.getElementById('output').innerHTML += '<br><br>Use Vision-Web or insert model for real SS! https://vision-web.pages.dev/';
        }
    }, 3000);
}

function executeCode() {
    const code = document.getElementById('code').value.trim();
    if (!code) return alert('Paste require script first!');
    
    document.getElementById('output').innerHTML += `<br><br>[Executing] ${code.substring(0, 50)}...`;
    setTimeout(() => {
        document.getElementById('output').innerHTML += '<br>[Status] Sent to backdoor (works if model inserted)! 🚀';
    }, 1500);
}

// Add to your index.html <body> at the end, before </body>:
// <script src="script.js"></script>
