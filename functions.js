/** @customfunction */
function TESTPING() {
    return "Engine Ready";
}

/** @customfunction */
async function IMMENSUM_CALC(a, b) {
    try {
        const response = await fetch(
            "https://immensum-core.velariastarfire.workers.dev/",
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ a, b })
            }
        );

        if (!response.ok) return "Status: " + response.status;

        const data = await response.json();
        return data.result ?? "No result";
    } catch (err) {
        return "Err: " + err.message;
    }
}
