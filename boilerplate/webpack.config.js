const path = require('path')

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'public/scripts'),
        filename: 'bundle.js'
    }
}


        //absolute path i.e from root of the computer
        // __dirname specifies pat to avoid conflcts when the folderdirectory changes