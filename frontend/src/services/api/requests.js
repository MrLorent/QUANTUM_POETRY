export async function submit_text(text)
{
    let form_data = new FormData();

    form_data.append("text", text);

    const response = await fetch('http://127.0.0.1:5000/submit/text',  {
        method: 'POST',
        body: form_data,
    });

    const noise = await response.json();
    
    return noise;
}

export async function submit_prompt(user_prompt)
{
    const { Configuration, OpenAIApi } = require("openai");

    const configuration = new Configuration({
    apiKey: process.env.REACT_APP_OPENAI_API_KEY,
    });
    const openai = new OpenAIApi(configuration);

    const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: "",
    temperature: 0.7,
    max_tokens: 256,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
    });

    const poem = await response.json();

    return poem;
}