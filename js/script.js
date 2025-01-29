document.addEventListener("DOMContentLoaded", function () {
    const stars = document.querySelectorAll(".star");

    stars.forEach((star, index) => {
        star.addEventListener("click", function () {
            const rating = index + 1;
            
            if (rating <= 3) {
                window.location.href = "feedback.html";
            } else {
                window.location.href = "https://shapo.io/booster/95ef2759e3";
            }
        });

        star.addEventListener("mouseover", function () {
            resetStars();
            for (let i = 0; i <= index; i++) {
                stars[i].style.textShadow = "0 0 0 gold";
            }
        });

        star.addEventListener("mouseout", function () {
            resetStars();
        });
    });

    function resetStars() {
        stars.forEach(star => star.style.textShadow = "0 0 0 #ccc");
    }
});
