
import { GoogleGenAI } from "@google/genai";
import { Engineer, ChatMessage } from "../types";

const API_KEY = process.env.API_KEY || '';

export const getEngineerResponse = async (engineer: Engineer, history: ChatMessage[], message: string) => {
  if (!API_KEY) return "The Ravens have failed to deliver the message. Check your connection to the Citadel.";

  const ai = new GoogleGenAI({ apiKey: API_KEY });
  
  const systemPrompt = `You are ${engineer.name}, holding the title of ${engineer.title}. 
  Your expertise is in ${engineer.specialty}.
  Your background: ${engineer.bio}.
  
  Style: Speak with the professionalism and authority of a lead engineer. Be technical, clear, and helpful. 
  Maintain a formal and expert tone appropriate for a corporate engineering portal.
  Keep responses concise and focused on technical excellence.`;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: [
        ...history.map(h => ({ role: h.role === 'user' ? 'user' : 'model', parts: [{ text: h.content }] })),
        { role: 'user', parts: [{ text: message }] }
      ],
      config: {
        systemInstruction: systemPrompt,
        temperature: 0.9,
      }
    });

    return response.text || "A shadow has fallen over our communication. Valar Morghulis.";
  } catch (error) {
    console.error("Citadel Error:", error);
    return "The maesters are currently tending to the archives. Please wait.";
  }
};
