/* eslint-disable indent */
require('dotenv').config()
const fetch = require('node-fetch')
const https = require('https')

const httpsAgent = new https.Agent({
    rejectUnauthorized: false
})

class ApiService {
    constructor () {
        this.url = process.env.URL
        this.apiKey = process.env.APIKEY
    }

    async getData () {
        const response = await fetch(this.url, {
            method: 'get',
            headers: {
                'api-secret-key': this.apiKey,
                'api-version': 'v1'
            },
            agent: httpsAgent
        })
        const data = await response.json()

        return data
    }
}

module.exports = ApiService
