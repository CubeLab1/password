export default function handler(req, res) {
    // Extract parameters from the query string
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

    // Respond with the generated password
    res.status(200).json({ password });
}
