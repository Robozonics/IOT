const audio = document.getElementById('bg-music');
const overlay = document.getElementById('intro-overlay');
const musicIcon = document.getElementById('music-icon');
const themeIcon = document.getElementById('theme-icon');
const html = document.documentElement;
const navLinks = document.querySelector('.nav-links');
const hamburger = document.querySelector('.hamburger');
const body = document.getElementById('main-body');
const lastUpdatedElement = document.getElementById('last-updated');

const ENCODED_PARTS = ["MjhSRU", "SEFOMDU="];

const ENCODED_PERSONAL_HTML = "PGRpdiBjbGFzcz0icGVyc29uYWwtY2FyZCI+CiAgICA8ZGl2IGNsYXNzPSJ0aW1lci1kaXNwbGF5Ij5TZXNzaW9uIEV4cGlyZXMgaW4gMDA6MDA8L2Rpdj4KCgogICAgPGgzPlRoZSBPcmlnaW4gJiBUaGUgU2V0dXA8L2g0PgogICAgPHA+CiAgICAgICAgTXkgam91cm5leSBiZWdhbiBvbiA8Yj5NYXkgMjgsIDIwMDk8L2I+LCBpbiA8Yj5TYWxlbTwvYj7igJRhIHBsYWNlIGZhbW91cyBmb3IgbWFuZ29lcyBhbmQgc2NvcmNoaW5nIGhlYXQsIHdoaWNoIHBlcmhhcHMKICAgICAgICBleHBsYWlucyB3aHkgbXkgQ1BVIHJ1bnMgaG90IHRvIHRoaXNkYXkuIEhvd2V2ZXIsIEkgZGlkbid0IHN0YXkgdGhlcmUgbG9uZyBlbm91Z2ggdG8KICAgICAgICBjdWx0aXZhdGUgYSBsb3ZlIGZvciBhZ3JpY3VsdHVyZS4gTXkgb3BlcmF0aW5nIHN5c3RlbSB3YXMgdHJ1bHkgaW5zdGFsbGVkIGFuZCB1cGRhdGVkIGluIHRoZSBjaGFvdGljLAogICAgICAgIGJ1c3RsaW5nIHN0cmVldHMgb2YgPGI+Q2hlbm5haTwvYj4uCiAgICA8L3A+CiAgICA8cD4KICAgICAgICBJIHNwZW50IG15IGZvdW5kYXRpb25hbCB5ZWFycyBhdCA8Yj5MLk0uIERhZGhhIFNlbiBSZXIgU2Vjb25kYXJ5IFNjaG9vbDwvYj4uIFRoaXMgd2FzIHRoZSB0dXRvcmlhbCBsZXZlbCBvZiBteSBsaWZlLCBidXQgdGhlIGRpZmZpY3VsdHkgc2V0dGluZyBzcGlrZWQgd2hlbiBJIGhpdCB0aGUgPGI+NXRoIGdyYWRlPC9iPi4gSSBlbmNvdW50ZXJlZCBteSBmaXJzdCBsaXR0bGUgInN5c3RlbSBlcnJvciIgd2hlbiBJIHdhcyBjb25zdGFudGx5IHRhdW50ZWQgYnkgZnJpZW5kcyB3aXRoIGFuIGVsZGVyIHNpc3RlciBmcm9tIHRoZSA2dGggc3RhbmRhcmQuCjwvZGVzaWduPgogICAgPC9wPgogICAgPHA+CiAgICAgICAgVGhlIGRpZmZpY3VsdHkgc3Bpa2VkIGFnYWluIHdoZW4gSSBoaXQgPGI+NnRoIGFuZCA3dGggZ3JhZGVzPC9iPi4gV2h5PyBCZWNhdXNlIHRoZSB3b3JsZCBzaHV0IGRvd24uIFRoZSA8aT5DT1ZJRC0xOSBsb2NrZGRvd25zPC9pPiBoaXQsIGFuZCB3aGlsZSBvdGhlciBraWRzIHdlcmUgbGVhcm5pbmcgaG93cyB0byBiYWtlIGJhbmFuYSBicmVhZCBvciBkbwogICAgICAgIFRpa1RvayBkYW5jZXMsIEkgd2FzIGVzc2VudGlhbGx5IGxpdmluZyBpbnNpZGUgbXkgbGFwdG9wLiBUaG9zZSB0d28geWVhcnMgb2YgaXNvbGF0aW9uIHdlcmVuJ3QgImxvc3QiIHllYXJzOyB0aGV5IHdlcmUgYW4gPGI+aW50ZW5zZSwgc2VsZi1kaXJlY3RlZCBib290IGNhbXA8L2I+LiBJIGRpZG4ndCBqdXN0IGF0dGVuZCBvbmxpbmUgY2xhc3NlczsgSSBkaXNzZWN0ZWQgYW5kIHJldmVyc2UtZW5naW5lZXJlZCB0aGUgbWFjaGluZXMgSSB3YXMgdGFraW5nIHRoZW0gb24sIGFjY3VtIHVsYXRpbmcgYSBiYXNlIG9mIHRlY2huaWNhbCBleHBlcnRpc2Ugd2hpbGUgbXkgcGVlcnMgd2VyZSBkaXN0cmFjdGVkLiAKICAgIDwvcD4KCiAgICA8aDM+VGhlIE1pZ3JhdGlvbiAmIFRoZSBIaWdoIFNjb3JlPC9oMz4KICAgIDxwPgogICAgICAgIEJ5IHRoZSB0aW1lIEkgcmVhY2hlZCB0aGUgPGI+OGRoIHN0YW5kYXJkPC9iPiwgdGhlIGZhbWlseSBzY3JlZW4gY2FsbGVkIGZvciBhIGxvY2F0aW9uIGNoYW5nZS4gV2UgbW92ZWQgdG8gPGI+VHJpY2h5PC9iPiwgYW5kIEkgZW5yb2xsZWQgaW4gPGI+QWxwaGEgV2lzZG9tIFZpZGh5YXNocmFtPC9iPiBzdGFydGluZyBpbiB0aGUgPGI+OXRoIGdyYWRlPC9iPi4gQmVpbmcgdGhlICJuZXcga2lkIiBpcyB1c3VhbGx5IGEgc29jaWFsIGRlYXRoIHNlbnRlbmNlLCBidXQgSSBkZWNpZGVkIHRvIGNvbXBlbnNhdGUgYnkgYmVpbmcgdGhlICJzbWFydCBraWQiIGZyb20gZGF5IG9uZS4gSSB0aHJldyBteXNlbGYgaW50byBjb21wZXRpdGlvbnMsIHdpbm5pbmcgcHJpemVzIGFuZCBlc3RhYmxpc2hpbmcgbXkgdGVycml0b3J5LgogICAgPC9wPgogICAgPHA+CiAgICAgICAgSSBjYXBwZWQgT2ZmIG15IDEwdGgtZ3JhZGUgZXJhIHdpdGggYSBzb2xpZCA8Yj45MiUKPC9iPiBvbiB0aGUgYm9hcmRzLiBIb25lc3RseSwgbXkgdGFyZ2V0IHdhcyA8Yj45NSUKPC9iPiwgYW5kIGV2ZW4gdGhvZ2doIDk1JSBpcyBhIGFsdHJhLW5vcm1hbCBnb2FsLCB0aGUgZGlmZmVyZW5jZSBsZWZ0IG1lIDxiPnNhZCBhIGJpdDwvaWJkPi4gSSBzaG91bGQgZ2V0IDxhIHRlc3QgZ29hbCBvdmVyIDk5JSwgdGhpcyB3YXMgYSBoYXJzaCBsZXNzb24gaW4gc3lzdGVtIGV2YWx1YXRpb24uIEl0IHdhcyBhIG1pbm9yIGJ1ZyB0aGF0IEkgZG9jdW1lbnRlZCB0byBmaXggZm9yIHRoZSAxMnRoIGdyYWRlLgogICAgPC9wPgogICAgPGgzPlRoZSBWaWxsYWluIEFyYzogVGhlIFJTSyBJbmNpZGVudDwvaDM+CiAgICA8cD4KICAgICAgICBUaGVuIGNhbWUgPGI+MTF0aCBHcmFkZTwvYj4uIElmIG15IGxpZmUgd2VyZSBhIG1vdmllLCB0aGlzIHdvdWxkIGJlIHRoZSBhY3Qgd2hlcmUgdGhlIHByb3RhZ29uaXN0IGJyaWVmbHkgYmVjb21lcyB0aGUgdmlsbGFpbi4KICAgICAgICA8YnI+PGJyPgogICAgICAgIEkgd2FzIHNlbGVjdGVkIGZvciBhIG1ham9yIGNvbXBldGl0aW9uIGF0IDxiPlJTSyBTY2hvb2w8L2I+LiBUaGVyZSB3ZXJlIHR3byB0ZWFtcyBmcm9tIG15IHNjaG9vbDogeHR5IHRlYW0sIGFuZCBhIHRlYW0gb2YgIGtkcy4KICAgICAgICAgV2UgKyAxMHRoLWdyYWRlIGdpcmxzLiBXdyBhcnJpdmVkIGF0IHRoZSB2ZW51ZSwgYW5kIG15IGNvbXBldGl0aXZlIHNwaXJpdCBkZWNpZGVkIHRvIHRha2UgYSBkYXJrIHR1cm4uIEkgbG9va2VkIGF0IHRoZSBjb21wZXRpdGlvbiBhbmQgdGhvdWdodCwgPGk+IldoeSBwbGF5IGZhaXIgV2hlbiB5b3UgY2FuIHBsYXkgcm9vdCBhY2Nlc3M/IjwvaT4KICAgIDwvcD4KICAgIDxwPgogICAgICAgIEluIGEgbW9tZW50IG9mIHB1cmUsIGNpbmVtYXRpYyBodWJyaXMsIEkgZGVjaWRlZCB0byA8Yj5oYWNrIHRoZSB2ZW51ZSVzIFdpLUZpIG5ldHdvcms8L2I+LiBNeSBwbGFuIHdhcyBzaW1wbGU6IGphbSB0aGUgbmV0d29yayBzbyBubyBvdGhlciBjb21wZXRpdG9ycyBjb3VsZCBkaXNwbGF5IHRoZWlyIHByb2plY3RzLiBJIHdhcyB0aGUgZGlnaXRhbCBnYXRla2VlcGVyLiBIb3dldmVyLCBJIGhhZCBhIG1vbWVudGFyeSBsYXBzZSBvZiBjb25zY2llbmNlIChvciBwZXJoYXBzIGp1c3QgYSBzb2Z0IHNwb3QpOyBJIGRlY2lkZWQgdG8gc3BhcmUgdGhlIFdpLUZpIGNvbm5lY3Rpb24gZm9yIHRoZSAxMHRoLWdyYWRlIGdpcmxzJ3RlYW0gZnJvbSBteSBvd24gc2Nob29sLiBJIHdoaXRlbGlzdGVkIHRoZW0sIGJsb2NrZWQgZXZlcnlvbmUgZWxzZSwgYW5kIHdhaXRlZCBmb3IgbXkgdmljdG9yeS4KICAgIDwvcD4KICAgIDxoMz5UaGUgS2FybWEgQm9vbWVyYW5nPC9oMz4KICAgIDxwPgogICAgICAgIEJ1dCB0aGUgdW5pdmVyc2UgaGFzIGEgZnVubnkgd2F5IG9mIGRlYnVnZ2luZyBtb3JhbCBmYWlsdXJlcy4gV2hpbGUgSSB3YXMgYnVzeSBwbGF5aW5nIGhhY2tlci1nb2QsIDxiPm15IG93biBwcmVzZW50YXRpb24gc3VmZmVyZWQ8L2I+IGZyb20gdGhlIGNoYW9zIEkgY3JlYXRlZC4gTWVhbndoaWxlLCB0aGUgZ2lybHMgdGVhbScgdGhlIG9ubHkgb25lcyBJIGhhZCBzcGFyZWQnLWNvbm5lY3RlZCBmbGF3bGVzc2x5LCBwcmVzZW50ZWQgYmVhdXRpZnVsbHksIGFuZCA8Yj53b24gdGhlIDFzdCBQcml6ZTwvYj4uCiAgICA8L3A+CiAgICA8cD4KICAgICAgICBJIHdhdGNoZWQgdGhlbSBsaWZ0IHRoZSB0cm9waHkgd2hpbGUgc3RhbmRpbmcgaW4gdGhlIHdyZWNrYWdlIG9mIG15IG93biBzYWJvdGFnZS4gSXQgd2FzIGEgaGFyc2ggbGVzc29uOiA8Yj5LYXJtYSBpcyBhIGJvb21lcmFuZzwvYj4sIGFuZCBpdCBoaXRzIHlvdSBpbiB0aGUgZmFjZSBhdCAxMDAgTWJwc2kuCiAgICA8L3A+CiAgICA8aDM+VGhlICJTeXN0ZW0gRXJyb3IiIG9mIHRoZSBIZWFydDwvaDM+CiAgICA8cD4KICAgICAgICBUaGUgY2hhb3Mgb2YgMTF0aCBncmFkZSBkaWRuJ3Qgc3RvcCB0aGVyZS4gSXQgd2FzIG15IG1vc3QgY29udHJvdmVyc2lhbCB5ZWFyLCBtb3N0bHkgYmVjYXVzZSBJIGVuY291bnRlcmVkIGEgZmlyZXdhbGwgSSBjb3VsZG4ndCBieXBhc3M6IGZlZWxpbmdzLiBJIHNwZW50IGEgc2lnbmlmaWNhbnQgcG9ydGlvbiBvZiB0aGUgeWVhciBpbmNyZWRpYmx5IDxzcGFuIG9uY2xpY2s9InJldmVhbEdpcmxOYW1lKCkiIGlkPSJkaXN0cmFjdGlvbi10ZXh0IiBjbGFzcz0icmV2ZWFsLXRleHQiPmRpc3RyYWN0ZWQgYnkgYSBnaXJsPC9zcGFuPi4gSXQgd2Fzbid0IGp1c3QgYSBjcnVzaDsgSSB3YXMgZGVmdWVsaW5nIG15IHJlc291cmNlcyB3aGljaCBzIGZ1bGwuCiAgICA8L3A+CiAgICA8aDM+VGhlIEphbnVhcnkgMTB0aCBQcm90b2NvbDwvaDM+CiAgICA8cD4KICAgICAgICBUaGUgY2hhb3Mgb2YgbXkgMTF0aCBncmFkZSBzcGlsbGVkIG92ZXIgaW50byBteSBmaW5hbCB5ZWFyLiBPbiA8Yj5KYW51YXJ5IDEwLCAyMDI2PC9iPiwKICAgICAgICBkdXJpbmcgdGhlIFBUTSAoUGFyZW50LVRlYWNoZXIgTWVldGluZyksIGkgZW5jb3VudGVyZWQgYSBuZXcga2luZCBvZiBnbGl0Y2g6IGh1bWFuIGVycm9yLiBNeSBQaHlzaWNzIE1h4oCZYm0gY2F1Z2h0IG1lIGNvbXBsZXRlbHkgb2ZmLWd1YXJkLgogICAgPC9wPgogICAgPHA+CiAgICAgICAgU2hlIGZhZ2dlZCBtZSBhcyA8Yj4idGFsa2F0aXZlIjwvaWJkPiDigJRhIGxhYmVsIGkgZmVsdCB3YXMgZW50aXJlbHkgdW53YXJyYW50ZWQgYW5kIHVuanVzdGlmaWVkLiBJIGhhZG4ndCBiZWVuIHRhbGtpbmcuIFNoZSBiZWdhbiBzY29sZGluZyBtZSBhZ2dyZXNzaXZlbHkgaW4gZnJvbnQgb2YgbXkgcGFyZW50cyBmb3IgcmVhc29ucyB0aGF0IHdlcmUgY2xlYXJseSBiYXNlbGVzcy4gSXQgV2FzIGEgc2hhcnAsIHVuaXRhY2hpbmcgY29uZnJvbnRhdGlvbiwgYnV0IEkgcmVmdXNlZCB0byBsZXQgdGhlIGVtIHJvcGl0aW9uYWwgbm9pc2UgYWZmZWN0IG15IGNvbXBvc3VyZS4KICAgIDwvcD4KICAgIDxoMz5TeXN0ZW0gU3RhdHVzPC9oMz4KICAgIDxwPgogICAgICAgIEkgYW0gc3RpbGwgc3RhbmRpbmcsIHN0aWxsIGNvZGluZywgYW5kIGhvcGVmdWxseSwgYSBsaXR0bGUgd2lzZXIuIDxpPlRoZSBqb3VybmV5IGlzIHN0aWxsIHJlbmRlcmluZy4uLjwvaT4KICAgIDwvcD4KPC9kaXY+";


const savedTheme = localStorage.getItem('theme') || 'dark';
html.setAttribute('data-theme', savedTheme);
updateThemeIcon(savedTheme);

audio.muted = false;

function enterPortfolio() {
    audio.play().catch(e => console.error("Audio play failed:", e));
    overlay.classList.add('hidden');
    musicIcon.classList.remove('fa-volume-off');
    musicIcon.classList.add('fa-volume-up');
}

function toggleMusic() {
    if (audio.muted) {
        audio.muted = false;
        audio.play().catch(e => console.error("Audio play failed:", e));
        musicIcon.classList.remove('fa-volume-off');
        musicIcon.classList.add('fa-volume-up');
    } else {
        audio.muted = true; 
        musicIcon.classList.remove('fa-volume-up');
        musicIcon.classList.add('fa-volume-off');
    }
}

function toggleTheme() {
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
}

function updateThemeIcon(theme) {
    themeIcon.className = theme === 'light' ? 'fas fa-moon' : 'fas fa-sun';
}

function toggleMenu() {
    navLinks.classList.toggle('active');
    const icon = hamburger.querySelector('i');
    icon.className = navLinks.classList.contains('active') ? 'fas fa-times' : 'fas fa-bars';
}
function closeMenu() {
    navLinks.classList.remove('active');
    hamburger.querySelector('i').className = 'fas fa-bars';
}

const personalContent = document.getElementById('personal-content');
const passwordInput = document.getElementById('personal-password');
const passwordMessage = document.getElementById('password-message');
const gate = document.querySelector('.password-gate');
let sessionTimer = null;
let countdownInterval = null;

function getDecodedPassword() {
    try { 
        const password = ENCODED_PARTS.join('');
        return window.atob(password); 
    } 
    catch (e) { 
        console.error("Error decoding password:", e);
        return ""; 
    }
}

function revealGirlName() {
    const distractionText = personalContent.querySelector('#distraction-text');
    
    if (distractionText && distractionText.textContent.includes('distracted by a girl')) {
        distractionText.innerHTML = "distracted by **NIT Hyderabad America (only the short form)**";
        distractionText.classList.remove('reveal-text'); 
        distractionText.style.cursor = 'default';
        distractionText.style.borderBottom = 'none';
        distractionText.setAttribute('onclick', '');
    }
}

function unlockPersonalLife() {
    const CORRECT_PASSWORD = getDecodedPassword();
    
    if (passwordInput.value === CORRECT_PASSWORD) {
        try {
            const DECODED_HTML = window.atob(ENCODED_PERSONAL_HTML);
            personalContent.innerHTML = DECODED_HTML;

            const distractionElement = personalContent.querySelector('#distraction-text');
            if (distractionElement) distractionElement.onclick = revealGirlName; 

            personalContent.classList.remove('hidden-content');
            personalContent.classList.add('content-visible');
            gate.style.display = 'none'; 
            passwordMessage.textContent = "";

            startSessionTimer();

        } catch (e) {
            console.error("Content decoding error:", e);
            passwordMessage.textContent = "Error loading system.";
            passwordMessage.style.color = 'var(--alert-red)';
        }
    } else {
        passwordMessage.textContent = "Access Denied. Incorrect code.";
        passwordMessage.style.color = 'var(--alert-red)';
        passwordInput.value = '';
    }
}

function startSessionTimer() {
    if (sessionTimer) clearTimeout(sessionTimer);
    if (countdownInterval) clearInterval(countdownInterval);

    let timeLeft = 60; 

    const timerDisplay = personalContent.querySelector('.timer-display');
    if (!timerDisplay) return;

    countdownInterval = setInterval(() => {
        timeLeft--;
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        
        timerDisplay.textContent = `Session Expires in ${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        
        if (timeLeft <= 0) {
            clearInterval(countdownInterval);
            lockPersonalLife();
        }
    }, 1000);

    sessionTimer = setTimeout(() => {
        if (countdownInterval) clearInterval(countdownInterval);
        lockPersonalLife();
    }, 60000);
}

function lockPersonalLife() {
    if (sessionTimer) clearTimeout(sessionTimer);
    if (countdownInterval) clearInterval(countdownInterval);

    personalContent.innerHTML = ""; 
    personalContent.classList.remove('content-visible');
    personalContent.classList.add('hidden-content');
    gate.style.display = 'block'; 
    passwordInput.value = ''; 
    passwordMessage.textContent = "Session Expired due to time limit.";
    passwordMessage.style.color = 'var(--alert-red)';
}

document.addEventListener('contextmenu', event => event.preventDefault());

window.addEventListener('blur', () => {
    body.classList.add('blur-filter');
});
window.addEventListener('focus', () => {
    body.classList.remove('blur-filter');
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'F12' || e.key === 'PrintScreen' || 
       (e.ctrlKey && e.key === 'p') || (e.metaKey && e.key === 'p') ||
       (e.ctrlKey && e.shiftKey && e.key === 'I') || (e.metaKey && e.altKey && e.key === 'i')) {
        
        e.preventDefault();
        alert("Screenshots and developer tools are strictly prohibited in this secure environment.");
        body.style.display = 'none'; 
        setTimeout(() => { body.style.display = 'block'; }, 1000);
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const typewriterElement = document.getElementById('typewriter');
    if (typewriterElement) {
        const roles = ["Web Developer", "Aspiring Electronics Engineer", "Musician", "Competitive Athlete"];
        let roleIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        
        function type() {
            const currentRole = roles[roleIndex];
            let speed = 100;
            if (isDeleting) { charIndex--; speed = 50; } 
            else { charIndex++; }

            typewriterElement.textContent = currentRole.substring(0, charIndex);

            if (!isDeleting && charIndex === currentRole.length) { isDeleting = true; speed = 1500; } 
            else if (isDeleting && charIndex === 0) { isDeleting = false; roleIndex = (roleIndex + 1) % roles.length; speed = 500; }

            setTimeout(type, speed);
        }
        type();
    }

    const today = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    lastUpdatedElement.textContent = `Last Updated: ${today.toLocaleDateString('en-US', options)}`;
});
