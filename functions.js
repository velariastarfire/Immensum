/** @customfunction */
function TESTPING() {
    // Return a string immediately. 
    // We will use a separate async handler to update it.
    return "Engine Ready";
}

/** @customfunction */
async function IMMENSUM_CALC(val1, val2) {
    try {
        const response = await fetch('https://immensum-core.velariastarfire.workers.dev/', {
            method: 'POST',
            mode: 'cors', // Explicitly set CORS mode
            credentials: 'omit', // Prevent sending unnecessary cookies/auth
            headers: { 
                'Content-Type': 'application/json',
                'Accept': 'application/json' 
            },
            body: JSON.stringify({ a: val1.toString(), b: val2.toString() })
        });

        if (!response.ok) return "Status: " + response.status;
        
        const data = await response.json();
        return data.result;
    } catch (e) {
        return "Err: " + e.name + " - " + e.message;
    }
}


// Final registration block
if (typeof CustomFunctions !== 'undefined') {
    CustomFunctions.associate("TESTPING", TESTPING);
    CustomFunctions.associate("IMMENSUM_CALC", IMMENSUM_CALC);
}