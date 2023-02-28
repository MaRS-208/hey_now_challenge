const dialogflow = require('dialogflow');
const config = require('../config/devkey');

const projectId = config.project_id;
const sessionId = config.session_id;

const credentials = {
    clientEmail: config.client_email,
    privateKey: config.private_key
}

const sessionClient = new dialogflow.SessionsClient({projectId, credentials});

const textQuery = async(userText, userId)=>{
    const sessionPath = sessionClient.sessionPath(projectId, sessionId+userId);
    const request = {
        session: sessionPath,
        queryInput: {
            text: {
                text:userText,
                langCode: config.dialogflow_session_lang_code
            }
        }
    }

    try{
        const response = await sessionClient.detectIntent(request)
        return response[0].queryResult
    }catch(err){
        console.log(err)
        return err
    }
    
}

module.exportts = {
    textQuery
}