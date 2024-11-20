export default function handler(req, res) {
    // Set CORS headers needed 
    res.setHeader('Access-Control-Allow-Origin', '*'); // Allow all origins
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS'); // Allow GET and OPTIONS requests
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type'); // Allow specific headers

    // Handle preflight requests (CORS OPTIONS request)
    if (req.method === 'OPTIONS') {
        res.status(200).end(); // End preflight request
        return;
    }

    // Extract query parameters
    const { length = 12, includeSymbols = true } = req.query;

    // Validate length parameter
    const passwordLength = parseInt(length, 10);
    if (isNaN(passwordLength) || passwordLength < 1 || passwordLength > 128) {
        return res.status(400).json({
            error: "Invalid length. Please provide a number between 1 and 128.",
        });
    }

    // Define character sets
    const alpha = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+[]{}|;:,.<>?";
    const charset = alpha + numbers + (includeSymbols === "true" ? symbols : "");

    // Generate password
    let password = "";
    for (let i = 0; i < passwordLength; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }

    // Send the response
    res.status(200).json({ password });
}

