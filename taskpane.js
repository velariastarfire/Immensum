// A global object that the Custom Function can see
window.IMMENSUM_DATA = {};

Office.onReady(() => {
    console.log("Taskpane ready.");

    const btn = document.querySelector("button");
    if (btn) {
        btn.onclick = () => runDirectTest(2, 3);
    }
});


async function runDirectTest(val1, val2) {
    const response = await fetch('https://immensum-core.velariastarfire.workers.dev/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            a: String(val1),
            b: String(val2)
        })
    });

    const data = await response.json();

    window.IMMENSUM_DATA[`${String(val1)}-${String(val2)}`] = data.answer;
}
