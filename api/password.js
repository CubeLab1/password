export default function handler(req, res) {
    // Set CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    // Handle preflight requests
    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }

    // Extract and validate query parameters
    const { length = 12 } = req.query;
    const passwordLength = parseInt(length, 10);

    if (isNaN(passwordLength) || passwordLength < 3 || passwordLength > 20) {
        return res.status(400).json({
            error: "Invalid length. Please provide a number between 3 and 20.",
        });
    }

    // Define character sets
    const lower = "abcdefghijklmnopqrstuvwxyz";
    const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+[]{}|;:,.<>?";
    const charset = lower + upper + numbers + symbols;

    // Generate password with at least one uppercase
    let password = "";
    let hasUppercase = false;

    for (let i = 0; i < passwordLength; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        const char = charset[randomIndex];
        password += char;
        if (upper.includes(char)) {
            hasUppercase = true;
        }
    }

    // Ensure at least one uppercase letter
    if (!hasUppercase) {
        const randomIndex = Math.floor(Math.random() * password.length);
        const randomUppercase = upper[Math.floor(Math.random() * upper.length)];
        password = password.slice(0, randomIndex) + randomUppercase + password.slice(randomIndex + 1);
    }

    // Send the response
    res.status(200).json({ password });
}


    // Send the response
    res.status(200).json({ password });
}

