// @ts-ignore
const { generateService } = require('@umijs/openapi')
// const {join} = require('path')

generateService({
    schemaPath: `https://api.findprice.money/swagger/user.swagger.json`,
    // schemaPath: join(__dirname, 'user.swagger.json'),
    serversPath: './src/service',
    requestLibPath: "import request from 'umi-request'",
    apiPrefix: "process.env.REACT_APP_BACKEND_URL + '/.netlify/functions'",
    projectName: "user",
})