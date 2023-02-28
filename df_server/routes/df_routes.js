const mycelium_chatbot = require('../mycelium_chatbot/mycelium_chatbot')
module.exports = app =>{

    app.get('/text_query', async(req, res)=>{
        console.log(req)
        const {text, userId} = req.body;
        const resultQuery = await mycelium_chatbot.textQuery(text, userId)
        console.log(resultQuery)
        const resObj = {
            intentName: resultQuery.intent.displayName,
            userQuery: resultQuery.queryText,
            fulfilmentText: resultQuery.fulfilmentText
        }
        res.send("Text Query")
    })

    //app.post('/event_query', (req, res)=>{
    //    console.log(req)
    //    res.send("Text Query")
    //})
}