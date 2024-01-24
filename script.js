//Don't need this file

function OpenaiFetchAPI(input) {
    console.log("Calling GPT3")
    let ans = "";
    var url = "https://api.openai.com/v1/chat/completions";
    var bearer = 'Bearer ' + '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'
    fetch(url, {
        method: 'POST',
        headers: {
            'Authorization': bearer,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "model": "gpt-3.5-turbo",
            "messages": [
                {
                    "role": "system",
                    "content": "You are a helpful counsellor.\n\nYou try to give people the best advice you can give."
                },
                {
                    "role": "user",
                    "content": `${input}`
                },
            ],
            "temperature": 1,
            "stream": false,
        })


    }).then(response => {
        
        return response.json()
       
    }).then(data=>{
        console.log(data)
        console.log(typeof data)
        console.log(Object.keys(data))
        console.log(data['choices'][0].message.content)
        ans = data['choices'][0].message.content;
    }).catch(error => {
            console.log('Something bad happened ' + error)
    });

    return ans;
}

//I start to shiver extremely when I'm on stage giving a speech or doing something. Why is that?