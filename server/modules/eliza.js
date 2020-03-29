const ElizaBot = require('../vendor/elizabot/elizabot');

module.exports = {
    elizaInit: function() {
        return new ElizaBot();
    },
    elizaInitialPhrase: function(elizaInstance) {
        return elizaInstance.getInitial();
    },
    elizaReply: function(elizaInstance, message) {
        return elizaInstance.transform(message);
    },
};
