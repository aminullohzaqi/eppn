/* eslint-disable indent */
require('dotenv').config()
const DatabaseService = require('./Service/database/DatabaseService')
const ApiService = require('./Service/api/ApiService')
// const ProducerService = require('./Service/producer/ProducerService')

const databaseService = new DatabaseService()
const apiService = new ApiService()
// const producerService = ProducerService

async function runProcess (hostname, dataDb, dataApi) {
    const database = dataDb.filter(obj => obj.hostname === hostname)
    const api = dataApi.computers.filter(obj => obj.lastIPUsed === hostname)

    if (api[0] !== undefined) {
        const apiFilter = api.map((data) => {
            return {
                hostname: data.lastIPUsed,
                agentstatus: data.computerStatus.agentStatus,
                agentmessage: data.computerStatus.agentStatusMessages,
                lastcommunication: data.lastAgentCommunication
            }
        })
        const stringMessage = apiFilter[0].agentmessage.toString()

        if (database[0].agentstatus !== apiFilter[0].agentstatus) {
            const statusupdate = new Date().toISOString()
            const lastcommunication = new Date(apiFilter[0].lastcommunication).toLocaleString()

            await databaseService.updateAgentStatusServer(apiFilter[0].agentstatus, stringMessage, apiFilter[0].hostname, statusupdate)

            // const message = {
            //     hostname: database[0].hostname,
            //     displayname: database[0].displayname,
            //     agentstatus: apiFilter[0].agentstatus,
            //     agentmessage: stringMessage,
            //     statusupdate,
            //     lastcommunication,
            //     adminmail: database[0].email
            // }
            console.log(lastcommunication)
            await databaseService.insertLog(database[0].server_id, apiFilter[0].agentstatus, stringMessage, statusupdate)
            // await producerService.sendMessage('sendEmail:notif', JSON.stringify(message))
        }
    } else {
        console.log(hostname + ' is not found')
    }
}

async function init () {
    try {
        const dataDb = await databaseService.getServers()
        const dataApi = await apiService.getData()

        for (let i = 0; i < (dataDb.length); i++) {
            runProcess(dataDb[i].hostname, dataDb, dataApi)
        }
        console.log('Running Success')
    } catch (error) {
        console.log(error.message)
    }
}

init()
setInterval(init, 1800000)
