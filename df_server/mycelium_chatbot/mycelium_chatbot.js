const dialogflow = require('dialogflow').v2beta1;
const config = require('../config/devkey');

const projectId = config.project_id;
const sessionId = config.dialogflow_session_id;

const credentials = {
    clientEmail: config.client_email,
    privateKey: config.private_key
}

//const sessionClient = new dialogflow.SessionClient({projectId, credentials});

const knowledgeBaseId = {
    fungiallyKnowledgeBaseId: "MTI3MzYxNTQ0NTc0MzYzMjM4NA",
    growcycleKnowledgeBaseId: "MjY2MTQyNzgxODQxNTUyMTc5Mg"
}
const knowledgeBasePath = 
    'projects/' + projectId + '/knowledgeBases/' + knowledgeBaseId + '';

const textQuery = async(userText, userId)=>{
    const sessionPath = sessionClient.sessionPath(projectId, sessionId+userId);
    const request = {
        session: sessionPath,
        queryInput: {
            text: {
                text:userText,
                langCode: config.dialogflow_session_lang_code
            }
        },
        queryParams: {
            knowledgeBaseNames: [knowledgeBasePath],
        },
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