// Test
document.getElementById("test-scripts").innerHTML = "> scripts.js load successfully!";

// Service-worker register
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('../sw.js');
}

