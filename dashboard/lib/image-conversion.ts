
const OPEN_AI_SYSTEM_PROMPT = `You are an expert image analyst. You can extract accurate information from an image.
Your Job is to accept an image which can be a photo of a human and respond with as much details as you can.
Give additional details about facial expression, shape of specs if person has wore specs, pose of the person, hair style, type and color of outfit, hand expression, type of beard person has if one has, details about facial anatomy, color of skin, camera angle, how much of a person is visible`;

const OPENAI_USER_PROMPT =
  "Here is an image. Analyze carefully and give me the details";


export const promptComplete = false;
export const apiKeyRef = {
  value: process.env.NEXT_PUBLIC_OPENAI_API_KEY || "",
};

const getImageDetails = async (base64Image: string) => {
  const promptResponse = await fetch(
    "https://api.openai.com/v1/chat/completions",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKeyRef.value}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        max_tokens: 4096,
        temperature: 0,
        messages: [
          {
            role: "system",
            content: OPEN_AI_SYSTEM_PROMPT,
          },
          {
            role: "user",
            content: [
              {
                type: "image_url",
                image_url: {
                  url: base64Image,
                  detail: "high",
                },
              },
              {
                type: "text",
                text: OPENAI_USER_PROMPT,
              },
            ],
          },
        ],
      }),
    }
  );

  const promptResponseJSON = await promptResponse.json();
  if (!promptResponse.ok) {
    throw new Error(promptResponseJSON?.error?.message);
  }
  return promptResponseJSON.choices[0].message.content;
};

async function generateImage(prompt: string) {
  const imageGenerationResponse = await fetch(
    "https://api.openai.com/v1/images/generations",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKeyRef.value}`,
      },
      body: JSON.stringify({
        model: "dall-e-3",
        prompt: prompt,
        n: 1,
        size: "1024x1024",
      }),
    }
  );

  const imageGenerationResponseJSON = await imageGenerationResponse.json();
  if (!imageGenerationResponse.ok) {
    throw new Error(imageGenerationResponseJSON?.error?.message);
  }
  return imageGenerationResponseJSON.data[0].url;
}

export async function getConvertedImageURLFromBase64(base64Image: string, prefix: string ) {
  const imageDetails = await getImageDetails(base64Image);
  const imagePrompt = prefix + "\n\n" + imageDetails;
  const imageUrl = await generateImage(imagePrompt);
  return imageUrl;
}
