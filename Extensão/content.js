document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('botao').addEventListener('click', function() {
        chrome.tabs.executeScript({
            code: "document.querySelectorAll('.btn.btn-success.btn-xs.resposta').forEach(btn => btn.click())"
        });
    });
});
