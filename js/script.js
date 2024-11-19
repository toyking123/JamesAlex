$(function() {
    // Nanti nak guna untuk javascript pakai jQuery
    console.log("Ready to rock with jQuery...");
});

function navigate(url) {
    window.location.href = url;
}

function toggleDropdown(id) {
    const content = document.getElementById(id);
    if (content.style.display === "block") {
        content.style.display = "none";
    } else {
        content.style.display = "block";
    }
}

function toggleDropdown(id) {
    const content = document.getElementById(id);
    content.style.display = content.style.display === "block" ? "none" : "block";
}