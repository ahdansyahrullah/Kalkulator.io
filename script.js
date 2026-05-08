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
    // Validasi sederhana: input tidak boleh kosong di awal jika bukan angka atau kurung
    if (currentInput === "" && isNaN(val) && val !== '(') return;
    
    currentInput += val;
    updateDisplay();
    
    // Hasil real-time dihapus agar tidak muncul otomatis
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

// 5. Kalkulasi HANYA saat tombol "=" diklik
function calculate() {
    if (currentInput === "") {
        alert("Input tidak boleh kosong!");
        return;
    }
    
    try {
        // Ganti simbol visual ke operator matematika
        let formula = currentInput.replace(/×/g, '*').replace(/÷/g, '/');
        
        // Melakukan perhitungan
        let finalRes = eval(formula);
        
        // Tampilkan hasil di baris bawah
        resultDiv.innerText = finalRes;
        
        // Opsional: Jika ingin hasil naik ke atas untuk perhitungan selanjutnya
        // currentInput = finalRes.toString(); 
    } catch (e) {
        alert("Format input salah!");
        clearDisplay();
    }
}
