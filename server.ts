import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import dotenv from "dotenv";
import { GoogleGenAI, Type } from "@google/genai";

dotenv.config();

const app = express();
app.use(express.json());

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY || "",
  httpOptions: {
    headers: {
      "User-Agent": "aistudio-build",
    },
  },
});

// API endpoint for AI Gift Recommendations
app.post("/api/generate-gifts", async (req, res) => {
  try {
    const { recipient, relationship, occasion, budget, interests, vibe, age } = req.body;

    const prompt = `Act as an expert personal gift curator and shopper. Generate 5 highly tailored, creative, and thoughtful gift ideas for the following recipient:
- Recipient Name / Title: ${recipient || 'Amigo/Familiar'}
- Relationship: ${relationship || 'Amigo'}
- Age: ${age || 'No especificada'}
- Occasion: ${occasion || 'Cumpleaños / Celebración'}
- Budget: ${budget || 'Flexible'}
- Interests / Hobbies / Preferences: ${interests || 'General'}
- Vibe / Tone: ${vibe || 'Emotivo y útil'}

Provide realistic, specific gift ideas ranging across different price points within the budget. Return the response in Spanish.`;

    const response = await ai.models.generateContent({
      model: "gemini-3.8-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              title: { type: Type.STRING, description: "Nombre específico del regalo" },
              category: { type: Type.STRING, description: "Categoría (Ej: Tecnología, Experiencias, Moda, Manualidades, Decoración)" },
              estimatedPrice: { type: Type.STRING, description: "Precio estimado (ej: $30 - $50 USD)" },
              whyItsGood: { type: Type.STRING, description: "Por qué es perfecto para este destinatario y ocasión" },
              whereToFind: { type: Type.STRING, description: "Dónde buscar o comprar (tiendas online o físicas recomendadas)" },
              personalizationTip: { type: Type.STRING, description: "Consejo para hacerlo aún más especial" },
              tag: { type: Type.STRING, description: "Etiqueta destacada (Ej: Más popular, Más emotivo, Original, Económico)" }
            },
            required: ["title", "category", "estimatedPrice", "whyItsGood", "whereToFind", "personalizationTip", "tag"]
          }
        }
      }
    });

    let gifts = [];
    try {
      gifts = JSON.parse(response.text || "[]");
    } catch (e) {
      console.error("Failed to parse AI gift JSON:", response.text);
      gifts = [];
    }

    res.json({ gifts });
  } catch (error: any) {
    console.error("Error generating gifts:", error);
    res.status(500).json({ error: error.message || "Error al generar regalos" });
  }
});

// API endpoint for AI Gift Assistant Chat
app.post("/api/gift-chat", async (req, res) => {
  try {
    const { messages } = req.body; // Array of { role: 'user' | 'model', content: string }

    const formattedContents = messages.map((m: any) => ({
      role: m.role === "user" ? "user" : "model",
      parts: [{ text: m.content }]
    }));

    const response = await ai.models.generateContent({
      model: "gemini-3.8-flash",
      contents: formattedContents,
      config: {
        systemInstruction: "Eres 'Regalos Resueltos', un asistente experto en encontrar el regalo perfecto, amable, creativo, empático y detallista. Responde siempre en español, dando consejos prácticos, ideas de última hora, etiquetas y sugerencias de presentación."
      }
    });

    res.json({ reply: response.text });
  } catch (error: any) {
    console.error("Error in gift chat:", error);
    res.status(500).json({ error: error.message || "Error en el chat de regalos" });
  }
});

// API endpoint for Quick Surprise Generator
app.post("/api/surprise-idea", async (req, res) => {
  try {
    const { category, recipientType } = req.body;
    const prompt = `Genera 1 idea de regalo sorpresa única, original y memorable para alguien que es ${recipientType || 'un ser querido'} en la categoría de ${category || 'cualquier ocasión'}. Devuelve un objeto JSON con título, descripción, precioEstimado y consejoSorpresa en español.`;

    const response = await ai.models.generateContent({
      model: "gemini-3.8-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            title: { type: Type.STRING },
            description: { type: Type.STRING },
            estimatedPrice: { type: Type.STRING },
            consejoSorpresa: { type: Type.STRING }
          },
          required: ["title", "description", "estimatedPrice", "consejoSorpresa"]
        }
      }
    });

    const idea = JSON.parse(response.text || "{}");
    res.json({ idea });
  } catch (error: any) {
    console.error("Error in surprise idea:", error);
    res.status(500).json({ error: error.message });
  }
});

async function startServer() {
  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: "spa",
  });

  app.use(vite.middlewares);

  const PORT = 3000;
  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
