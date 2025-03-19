
        // Show/Hide Sections
        function showSection(sectionId) {
            const sections = document.querySelectorAll('.section');
            sections.forEach(section => {
                section.classList.add('hidden');
            });
            document.getElementById(sectionId).classList.remove('hidden');

            const buttons = document.querySelectorAll('.btn-section');
            buttons.forEach(button => {
                button.classList.remove('active');
            });
            event.target.classList.add('active');
        }

        // Percent Calculation
        function calculatePercent() {
            const amount = parseFloat(document.getElementById('percentAmount').value);
            const percent = parseFloat(document.getElementById('percentValue').value);
            const result = (amount * percent) / 100;
            Swal.fire({
                title: `ফলাফল: ${result}`,
                icon: 'success',
                confirmButtonText: 'ক্লোজ'
            });
        }

        // Discount Calculation
        function calculateDiscount() {
            const amount = parseFloat(document.getElementById('discountAmount').value);
            const discount = parseFloat(document.getElementById('discountValue').value);
            const result = amount - (amount * discount) / 100;
            Swal.fire({
                title: `ফলাফল: ${result}`,
                icon: 'success',
                confirmButtonText: 'ক্লোজ'
            });
        }

        // Percentage Calculation
        function calculatePercentage() {
            const percentage = parseFloat(document.getElementById('percentageAmount').value);
            const total = parseFloat(document.getElementById('percentageTotal').value);
            const result = (percentage / total) * 100;
            Swal.fire({
                title: `ফলাফল: ${result}%`,
                icon: 'success',
                confirmButtonText: 'ক্লোজ'
            });
        }

        // Age Calculation
        function calculateAge() {
            const birthdate = new Date(document.getElementById('birthdate').value);
            const today = new Date();
            const ageInMilliseconds = today - birthdate;
            const ageDate = new Date(ageInMilliseconds);
            const years = ageDate.getUTCFullYear() - 1970;
            const months = ageDate.getUTCMonth();
            const days = ageDate.getUTCDate() - 1;
            Swal.fire({
                title: `আপনার বয়স: ${years} বছর ${months} মাস ${days} দিন`,
                icon: 'success',
                confirmButtonText: 'ক্লোজ'
            });
        }
   
        function resetCalculator() {
            // সব ইনপুট ফিল্ড খুঁজে বের করে তাদের মান ফাঁকা করে দিচ্ছি
            document.querySelectorAll("input").forEach(input => input.value = "");
          
            // সব সেকশন লুকিয়ে দিচ্ছি
            document.querySelectorAll(".section").forEach(section => section.classList.add("hidden"));
          
            // প্রথম সেকশন (পার্সেন্ট) আবার দেখাচ্ছি
            document.getElementById("percent").classList.remove("hidden");
          
            // সব বাটনের active ক্লাস রিমুভ করে দিচ্ছি
            document.querySelectorAll(".btn-section").forEach(button => button.classList.remove("active"));
          
            // প্রথম বাটনকে active করে দিচ্ছি
            document.querySelector(".btn-section").classList.add("active");
          }
          