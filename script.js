const expressionDiv = document.getElementById('expression');
const resultDiv = document.getElementById('result');
const themeBtn = document.getElementById('theme-btn');
const themeIcon = document.getElementById('theme-icon');
let currentInput = "";

// 1. Ganti Tema + Ganti Ikon
themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    
    if (document.body.classList.contains('dark-mode')) {
        themeIcon.classList.replace('fa-sun', 'fa-moon');
    } else {
        themeIcon.classList.replace('fa-moon', 'fa-sun');
    }
});

// 2. Input Angka & Operator
function appendValue(val) {
    // Reset hasil jika ingin mulai hitungan baru setelah klik =
    if (resultDiv.innerText !== "") {
        currentInput = "";
        resultDiv.innerText = "";
    }
    
    currentInput += val;
    expressionDiv.innerText = currentInput;
}

// 3. Clear Layar
function clearDisplay() {
    currentInput = "";
    expressionDiv.innerText = "0";
    resultDiv.innerText = "";
}

// 4. Hitung (Hanya saat klik =)
function calculate() {
    if (currentInput === "") return;

    try {
        // Ganti simbol visual ke operator mesin
        let formula = currentInput.replace(/×/g, '*').replace(/÷/g, '/').replace(/%/g, '/100');
        let finalRes = eval(formula);
        
        // Cek jika hasilnya desimal panjang, bulatkan 4 angka di belakang koma
        if (!Number.isInteger(finalRes)) {
            finalRes = parseFloat(finalRes.toFixed(4));
        }

        resultDiv.innerText = finalRes;
    } catch (e) {
        resultDiv.innerText = "Error";
        setTimeout(clearDisplay, 1500);
    }
}
