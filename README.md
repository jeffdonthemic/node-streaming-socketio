node-streaming-socketio
=======================

Node demo that streams newly created and updated Account records in Salesforce.com to the browser using socket.io. You can run the demo by opening two browsers:

1. [salesforce CRUD demo with Node](http://node-nforce-demo.herokuapp.com) - Create a new Account record in this app.
2. [node-streaming-socketio demo](http://node-streaming-socketio.herokuapp.com/) - New Account record are streamed to this app and display in the browser using socket.io.

### Setup Remote Access in Salesforce.com

Setup a new Remote Access to get your OAuth tokens. If you are unfamiliar with settng this up, see 4:45 of my [Salesforce.com Primer for New Developers](http://www.youtube.com/watch?v=fq2ju2ML9GM). For your callback, simply use: http://localhost:3001/oauth/_callback

### Create a PushTopic in Salesforce.com

Create a new PushTopic from the Developer Console in your org with the following. This will setup the endpoint for nforce to listen to:

```
PushTopic pt = new PushTopic();  
pt.apiversion = 24.0;  
pt.name = 'AllAccounts';
pt.description = 'All new account records';  
pt.query = 'SELECT Id, Name FROM Account';  
insert pt;  
System.debug('Created new PushTopic: '+ pt.Id);
```

You can also set up PushTopics using the [Workbench](https://workbench.developerforce.com).

### Running the Application Locally

```
git clone https://github.com/jeffdonthemic/node-streaming-socketio.git
cd node-streaming-socketio
npm install
```

This will clone this repo locally so you simply have to make your config changes and be up and running. Now replace your OAuth tokens and credentials in the config.js file then run the following to start the server:

```
node app.js
```

Open your browser to  [http://localhost:3001](http://localhost:3001) and make a change to an Account record in Salesforce and see it appear on the page.
