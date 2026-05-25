// A global object that the Custom Function can see
window.IMMENSUM_DATA = {};

async function runDirectTest(val1, val2) {
    const response = await fetch('https://immensum-core.velariastarfire.workers.dev/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ a: val1.toString(), b: val2.toString() })
    });
    const data = await response.json();
    
    // Store result in global window scope so the formula can "reach out" and grab it
    window.IMMENSUM_DATA[`${val1}-${val2}`] = data.answer;
}