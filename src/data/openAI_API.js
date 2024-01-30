export const callChatGpt = async (setButtonDisabled, setButtonText, setResponse, prompt) => {
    try {
        setButtonDisabled(true);
        setButtonText("Generando...");
        
        const apiResponse = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": 'Bearer ' + import.meta.env.VITE_OPENAI_API_KEY
        },
        body: JSON.stringify({
          "model": "gpt-3.5-turbo",
          "messages": [
            {"role": "user", "content": prompt}
          ]
        })
      });
    
      setButtonDisabled(false);
      setButtonText("Generar respuesta");

      const responseData = await apiResponse.json();

      setResponse(responseData.choices[0].message.content);
    } catch (error) {
        setButtonDisabled(false);
        setButtonText("Error, intentalo de nuevo...");
        console.error("Error fetching data:", error);
    }

}
