const expressionDiv = document.getElementById('expression');
const resultDiv = document.getElementById('result');
const themeBtn = document.getElementById('theme-btn');
let currentInput = "";

// 1. Fungsi Ganti Tema
themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// 2. Tambah Karakter ke Layar
function appendValue(val) {
    // Validasi: Cegah operator di awal (kecuali angka/kurung)
    if (currentInput === "" && isNaN(val) && val !== '(') return;
    
    currentInput += val;
    updateDisplay();
    autoCalculate(); // Perhitungan real-time
}

// 3. Hapus Layar
function clearDisplay() {
    currentInput = "";
    updateDisplay();
    resultDiv.innerText = "";
}

// 4. Update Teks Layar
function updateDisplay() {
    expressionDiv.innerText = currentInput || "0";
}

// 5. Perhitungan Real-time (Opsional sesuai instruksi c)
function autoCalculate() {
    try {
        if (currentInput !== "" && !isNaN(currentInput.slice(-1))) {
            let tempRes = eval(currentInput.replace('×', '*').replace('÷', '/'));
            resultDiv.innerText = tempRes;
        }
    } catch (e) {
        // Abaikan error saat mengetik (ekspresi belum selesai)
    }
}

// 6. Tombol Sama Dengan (=)
function calculate() {
    if (currentInput === "") {
        alert("Input tidak boleh kosong!");
        return;
    }
    try {
        let finalRes = eval(currentInput);
        resultDiv.innerText = finalRes;
        currentInput = finalRes.toString();
    } catch (e) {
        alert("Input tidak valid!");
        clearDisplay();
    }
}