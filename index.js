// Import the OpenAI library
// This library provides a convenient way to interact with OpenAI's API
const OpenAI = require('openai');

// Initialize the OpenAI client with your API key
// ⚠️ SECURITY NOTE: In a real application, never hardcode your API key
// Instead, use environment variables (e.g., process.env.OPENAI_API_KEY)
const openai = new OpenAI({
  apiKey: "Your API Key Here"
});

// Define an async function to get a response from ChatGPT
// This function takes a prompt (the question or message you want to send to ChatGPT)
async function getChatgptResponse(prompt) {
  // Make an API call to OpenAI's chat completion endpoint
  // The create() method sends a request to generate a response
  const response = await openai.chat.completions.create({
    // Specify which model to use
    // 'gpt-4' is one of OpenAI's most capable models
    // You can also use other models like 'gpt-3.5-turbo'
    model: 'gpt-4o-mini',
    
    // The messages array contains the conversation history
    // Each message has a 'role' and 'content'
    // 'role' can be 'user', 'assistant', or 'system'
    messages: [{ role: 'user', content: prompt }],
  });

  // Return the generated response text
  // response.choices[0] gets the first (and usually only) response
  // .message.content contains the actual text of the response
  return response.choices[0].message.content;
}

// Example usage of the function
// This is a simple test to see if everything works
getChatgptResponse("tell me a fun fact about the javascript programming language")
  .then(response => {
    // If successful, print the response
    console.log(response);
  })
  .catch(error => {
    // If there's an error, print it to the console
    console.error("Error:", error);
  });

// 📝 LEARNING POINTS:
// 1. This code demonstrates basic async/await usage in JavaScript
// 2. It shows how to make API calls to external services
// 3. It includes basic error handling with .then() and .catch()
// 4. It demonstrates the structure of OpenAI's API requests
//
// 🔧 IMPROVEMENT IDEAS:
// 1. Add input validation for the prompt
// 2. Implement retry logic for failed API calls
// 3. Add more sophisticated error handling
// 4. Use environment variables for the API key
// 5. Add TypeScript for better type safety