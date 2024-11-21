function openLink() {
            // Ambil waktu saat ini
            const currentTime = new Date().getTime();

            // Ambil waktu klik terakhir dari localStorage
            const lastClickTime = localStorage.getItem(&#39;lastClickTime&#39;);

            // Hitung waktu tunggu acak antara 30-50 detik
            const randomWaitTime = Math.floor(Math.random() * (95 - 32 + 1)) + 50; // Dalam detik
            const waitTimeInMillis = randomWaitTime * 1000;

            // Jika belum pernah diklik atau sudah lebih dari waktu tunggu
            if (lastClickTime === null || currentTime - lastClickTime &gt;= waitTimeInMillis) {
                // Buka link di tab baru
                window.open(&#39;https://google.com/&#39;, &#39;_blank&#39;);

                // Simpan waktu klik saat ini ke localStorage
                localStorage.setItem(&#39;lastClickTime&#39;, currentTime);
            }
        }