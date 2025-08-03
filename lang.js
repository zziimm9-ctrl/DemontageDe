
function toggleLanguage() {
    const currentLang = document.documentElement.lang;
    if (currentLang === "de") {
        document.documentElement.lang = "ru";
        document.getElementById("welcome-text").innerText = "Ваш эксперт по демонтажу и удалению асбеста!";
        document.getElementById("description").innerText = "Мы — сильная команда из Кобленца, специализирующаяся на демонтажных работах: быстро, чисто, надёжно.";
    } else {
        document.documentElement.lang = "de";
        document.getElementById("welcome-text").innerText = "Ihr Profi für Abbruch & Asbestsanierung!";
        document.getElementById("description").innerText = "Wir sind ein starkes Team aus Koblenz, spezialisiert auf professionelle Demontagearbeiten – schnell, sauber, zuverlässig.";
    }
}
