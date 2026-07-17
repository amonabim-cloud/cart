function copyText(text) {

    navigator.clipboard.writeText(text)
    .then(() => {
        alert("کپی شد ✅");
    })
    .catch(() => {
        alert("خطا در کپی");
    });

}
