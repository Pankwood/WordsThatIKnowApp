/*const GitRevisionPlugin = require('git-revision-webpack-plugin');
const gitRevisionPlugin = new GitRevisionPlugin();

module.exports = {
    plugins: [
        new GitRevisionPlugin({
            'VERSION': JSON.stringify(gitRevisionPlugin.version()),
            'COMMITHASH': JSON.stringify(gitRevisionPlugin.commithash()),
            'BRANCH': JSON.stringify(gitRevisionPlugin.branch()),
        }),
    ]
}*/



/*var GitRevisionPlugin = require('git-revision-webpack-plugin')

module.exports = {
    plugins: [
        new GitRevisionPlugin()
    ]
}*/

var GitRevisionPlugin = require('git-revision-webpack-plugin');
var gitRevisionPlugin = new GitRevisionPlugin()

module.exports = {
    plugins: [
        new GitRevisionPlugin({
            'VERSION': JSON.stringify(gitRevisionPlugin.version()),
            'COMMITHASH': JSON.stringify(gitRevisionPlugin.commithash()),
        })
    ]
};

