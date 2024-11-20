This project provides a simple API for generating secure passwords. Hosted on Vercel, the API allows users to specify the desired password length and returns a randomized, secure password. It is ideal for integration into other applications or services requiring strong password generation.

Features
The Password Generator API includes the following features:

A customizable password length, supporting values between 1 and 128 characters.
Hosted as a serverless function on Vercel, ensuring scalability and minimal maintenance.
JSON responses for easy integration into frontend or backend systems.
How to Use
The Password Generator API can be accessed via a GET request to the following endpoint:

Copy code
https://password-3ms3-3qto3q01d-robs-projects-d8826559.vercel.app/api/password

Query Parameters:
length (optional): Specifies the length of the password. Accepts values between 1 and 128. Defaults to 12 if not provided.
