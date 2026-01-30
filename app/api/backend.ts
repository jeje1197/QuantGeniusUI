export async function generateQuestion() {
    const response = await fetch('http://localhost:8000/quiz/generate', {
        method: 'POST',
        body: JSON.stringify({
            count: 1
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then((response) => response.json())
    .catch(error => console.error('API call failed'));

    return response;
}