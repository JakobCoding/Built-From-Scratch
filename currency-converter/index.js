// Functions

// Fetch Exchange Rates from API 

// Using async/await for clarity and error control
async function fetchApi() {
    try{
    // Make API call and wait for the promise to resolve
    const response = await fetch("https://v6.exchangerate-api.com/v6/2b2c04b9475e8dd356f82569/latest/USD") 
    
    // Check if the response status is not OK, then throw an error 
    if (!response.ok) {
        throw new Error("Network response was not ok: " + response.status);
    }

    // Parse the response as JSON
    const data = await response.json();
    
    // Log the data to see what you recieved (or call another function to handle it - this is for development porposes and will be removed at the end of buiding the application once we are sure everything works)
    console.log(data);

    // Return or process the fetched data for future use 
    return data;
    }

    catch (error) {
    // Handle erros gracefully and output a messge in the console
    console.error("Failed to fetch exchange rates:", error);
    //optionally, trigger a UI update or alert for the user here
    }
}

// Convert Currency 

function convertCurrency() {

}

// Update the UI 

function updateUI() {

}

// Swap Currency 

function swapCurrency() {

}

// Validation and Error Handling 

function validation() {

}

// Optimization 

function optimize() {

}