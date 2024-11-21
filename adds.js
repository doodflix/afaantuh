const link = document.getElementById('myLink');
        let canOpenPopup = true; // Flag untuk mengontrol pembukaan popunder

        link.addEventListener('click', () => {
            if (canOpenPopup) {
                canOpenPopup = false; // Set flag menjadi false untuk mencegah pembukaan popunder berulang
                setTimeout(() => {
                    window.open('https://www.google.com', '_blank');
                    canOpenPopup = true; // Set flag menjadi true setelah 30 detik
                }, 30000); // 30000 milidetik = 30 detik
            }
        });
