/* ─── SCRIPT FILTRE PORTFOLIO ─── */

function filterCards(category) {
    const cards = document.querySelectorAll(".project-card");
    const btns = document.querySelectorAll(".filter-btn");
    const noResult = document.getElementById("no-result");
    let visible = 0;
    
    btns.forEach((btn) => {
        if (btn.dataset.filter === category) {
            btn.classList.add("bg-emerald-400/10","border-emerald-400/40","text-emerald-300",);btn.classList.remove("border-white/10", "text-slate-400");
        } else {
            btn.classList.remove("bg-emerald-400/10","border-emerald-400/40","text-emerald-300",);
            btn.classList.add("border-white/10", "text-slate-400");
        }
    });
    
    cards.forEach((card) => {
        if (category === "tous" || card.dataset.category === category) {
            card.style.display = "flex";visible++;
        } else {
            card.style.display = "none";
        }
    });
    
    noResult.classList.toggle("hidden", visible > 0);
}