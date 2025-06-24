// Show message that fades away after 3 seconds
function showMessage(text) {
  const box = document.getElementById("message-box");
  box.textContent = text;
  box.style.opacity = '1';
  box.style.display = 'block';

  setTimeout(() => {
    box.style.transition = 'opacity 1s ease';
    box.style.opacity = '0';
  }, 3000);

  setTimeout(() => {
    box.style.display = 'none';
    box.style.transition = '';
  }, 4000);
}

// Custom messages for dropdown options
const dropdownMessages = {
  "🌿 Nausicaä of the Valley of the Wind (1984)": "🌿 Nausicaä fans are true nature lovers!",
  "🏰 Castle in the Sky (1986)": "🏰 Adventure is in your heart!",
  "🐾 My Neighbor Totoro (1988)": "🐾 Totoro brings magic to every day!",
  "🎖️ Grave of the Fireflies (1988)": "😢 Brave choice, keep tissues handy.",
  "🧹 Kiki's Delivery Service (1989)": "🧹 Kiki’s charm is simply magical!",
  "🌻 Only Yesterday (1991)": "🌻 Nostalgia and memories bloom.",
  "🛩️ Porco Rosso (1992)": "🛩️ Flying high with Porco Rosso!",
  "🦝 Pom Poko (1994)": "🦝 Pom Poko’s spirits are playful!",
  "📖 Whisper of the Heart (1995)": "📖 Whisper of the Heart whispers dreams.",
  "🐗 Princess Mononoke (1997)": "🐗 Princess Mononoke’s wild spirit roars!",
  "👪 My Neighbors the Yamadas (1999)": "👪 Family vibes with the Yamadas!",
  "👻 Spirited Away (2001)": "👻 Spirited Away fans are magical!",
  "🐱 The Cat Returns (2002)": "🐱 Cat Returns, purr-fectly fun!",
  "✨ Howl's Moving Castle (2004)": "✨ Ah, a fellow wizard heart! 💙",
  "🐉 Tales from Earthsea (2006)": "🐉 Earthsea tales spark imagination!",
  "🐠 Ponyo (2008)": "🐠 Ponyo’s oceanic charm shines!",
  "🕳️ Arrietty (2010)": "🕳️ Small world, big adventures!",
  "🏞️ From Up on Poppy Hill (2011)": "🏞️ Memories bloom on Poppy Hill!",
  "🍃 The Wind Rises (2013)": "🍃 The Wind Rises, dreams take flight!",
  "🌕 The Tale of the Princess Kaguya (2013)": "🌕 The Princess Kaguya’s tale enchants!",
  "🏚️ When Marnie Was There (2014)": "🏚️ Marnie’s mystery lingers beautifully!",
  "🎸 Earwig and the Witch (2020)": "🎸 Earwig rocks the magical world!",
  "🕊️ The Boy and the Heron (2023)": "🕊️ The Boy and the Heron soars high!"
};

document.getElementById("dropdown").addEventListener("change", function () {
  const movie = this.value;
  const message = dropdownMessages[movie] || `🎬 Great pick: ${movie}`;
  showMessage(message);
});


// Multi-favorite checkboxes listener with customized messages
const checkboxMessages = {
  "All of em": "❤️ So much love for all Ghibli movies!",
  "Nausicaä": "🌿 Nausicaä fans are true nature lovers!",
  "Castle in the Sky": "🏰 Adventure is in your heart!",
  "Totoro": "🐾 Totoro brings magic to every day!",
  "Grave of the Fireflies": "🎖️ A touching story never forgotten.",
  "Kiki": "🧹 Kiki’s charm is simply magical!",
  "Only Yesterday": "🌻 Nostalgia and memories bloom.",
  "Porco Rosso": "🛩️ Flying high with Porco Rosso!",
  "Pom Poko": "🦝 Pom Poko’s spirits are playful!",
  "Whisper": "📖 Whisper of the Heart whispers dreams.",
  "Mononoke": "🐗 Princess Mononoke’s wild spirit roars!",
  "Yamadas": "👪 Family vibes with the Yamadas!",
  "Spirited Away": "👻 Spirited Away, a magical journey!",
  "The Cat Returns": "🐱 Cat Returns, purr-fectly fun!",
  "Howl's Moving Castle": "✨ Howl’s castle holds many secrets!",
  "Tales from Earthsea": "🐉 Earthsea tales spark imagination!",
  "Ponyo": "🐠 Ponyo’s oceanic charm shines!",
  "Arrietty": "🕳️ Small world, big adventures!",
  "Poppy Hill": "🏞️ Memories bloom on Poppy Hill!",
  "The Wind Rises": "🍃 The Wind Rises, dreams take flight!",
  "Princess Kaguya": "🌕 The Princess Kaguya’s tale enchants!",
  "When Marnie Was There": "🏚️ Marnie’s mystery lingers beautifully!",
  "Earwig": "🎸 Earwig rocks the magical world!",
  "The Boy and the Heron": "🕊️ The Boy and the Heron soars high!"
};

const checkboxes = document.querySelectorAll("input[type='checkbox'][name='multiFav']");
checkboxes.forEach(box => {
  box.addEventListener("change", function () {
    if (this.checked) {
      const val = this.value;
      const msg = checkboxMessages[val] || `💫 You selected: ${this.labels[0].innerText}`;
      showMessage(msg);
    }
  });
});

const ageInput = document.getElementById("number");
const ageError = document.getElementById("number-error");

function validateAge() {
  const val = ageInput.value.trim();

  if (val === "") {
    ageError.style.display = "none";
    ageInput.setCustomValidity("");
    return;
  }

  const numVal = Number(val);

  if (isNaN(numVal)) {
    ageError.textContent = "⚠️ Please enter a valid number.";
    ageError.style.display = "block";
    ageInput.setCustomValidity("Invalid number");
  } else if (numVal < 5 || numVal > 120) {
    ageError.textContent = "⚠️ Age must be between 5 and 120.";
    ageError.style.display = "block";
    ageInput.setCustomValidity("Out of range");
  } else {
    ageError.style.display = "none";
    ageInput.setCustomValidity("");
  }
}

ageInput.addEventListener("input", validateAge);
ageInput.addEventListener("blur", validateAge);

const emailInput = document.getElementById("email");
const emailError = document.getElementById("email-error");
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

emailInput.addEventListener("input", () => {
  const email = emailInput.value.trim();

  // Only clear error or do nothing if less than 2 chars typed
  if (email.length < 2) {
    emailError.style.display = "none";
    emailInput.setCustomValidity("");
    return;
  }
  // We don't show error yet on input, just prepare validity
  if (emailPattern.test(email)) {
    emailInput.setCustomValidity("");
  } else {
    emailInput.setCustomValidity("Invalid email format.");
  }
});

emailInput.addEventListener("blur", () => {
  const email = emailInput.value.trim();

  // Show error only if 2+ chars and invalid on blur
  if (email.length >= 2 && !emailPattern.test(email)) {
    emailError.textContent = "⚠️ Please enter a valid email address.";
    emailError.style.display = "block";
  } else {
    emailError.style.display = "none";
  }
});

const form = document.getElementById("survey-form");

form.addEventListener("submit", (e) => {
  e.preventDefault(); // prevent default submission

  // Optional: check if form is valid before redirecting
  if (!form.checkValidity()) {
    form.reportValidity(); // triggers built-in browser validation UI
    return;
  }

  // Simulate a delay if needed
  setTimeout(() => {
    window.location.href = "thankyou.html"; // redirect to thank you page
  }, 300); // short delay for UX (optional)
});
