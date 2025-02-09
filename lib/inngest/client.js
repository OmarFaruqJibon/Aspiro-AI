import { Inngest } from "inngest";

// Create a client to send and receive events
// export const inngest = new Inngest({ id: "CareerForge", class: "CareerForge" });


export const inngest = new Inngest({
    id: "career-forge", // Unique app ID
    name: "CareerForge",
    credentials: {
        gemini: {
            apiKey: process.env.GEMINI_API_KEY,
        },
    },
});