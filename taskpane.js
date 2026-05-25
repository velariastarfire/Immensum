Office.onReady(() => {
    const btn = document.getElementById("testButton");
    btn.onclick = async () => {
        const res = await fetch("https://immensum-core.velariastarfire.workers.dev/", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ a: 2, b: 3 })
        });

        const data = await res.json();
        document.getElementById("status").textContent = "Result: " + data.result;
    };
});
