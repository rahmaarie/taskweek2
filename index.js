// Inisialisasi pilihan hari, bulan, tahun
const daySelect = document.getElementById('day');
const monthSelect = document.getElementById('month');
const yearSelect = document.getElementById('year');

// Hari: 1-30
for (let i = 1; i <= 30; i++) {
  const option = document.createElement('option');
  option.value = i;
  option.textContent = i;
  daySelect.appendChild(option);
}

// Bulan: Januari - Desember
const months = [
  "Januari", "Februari", "Maret", "April", "Mei", "Juni",
  "Juli", "Agustus", "September", "Oktober", "November", "Desember"
];
months.forEach((month, index) => {
  const option = document.createElement('option');
  option.value = index + 1;
  option.textContent = month;
  monthSelect.appendChild(option);
});

// Tahun: 1990 - Sekarang
const currentYear = new Date().getFullYear();
for (let year = 1990; year <= currentYear; year++) {
  const option = document.createElement('option');
  option.value = year;
  option.textContent = year;
  yearSelect.appendChild(option);
}
