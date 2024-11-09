<h2 align="center">
    <img src="./public/favicon.ico" alt="Logo" width="60" height="60" />
    <br />
    <a href="https://tf-chat.netlify.app">tf-chat.netlify.app</a>
</h2>

<div align="center">
    <img src="./src/images/_" alt="Illustration" />
</div>

Typeface assignment developed using Reactjs. This is the frontend for a chat application developed using ReactJS. You can find the deployed website [here](https://tf-chat.netlify.app)

# Table of contents

* [Pre-requisites](#pre-requisites)
* [Installation and Setup](#installation-and-setup)
* [Features](#features)
* [Deployment](#deployment)

## Pre-requisites

- Before proceeding, ensure that your system meets the following requirements:
  - [Node.js](https://nodejs.org/en/download/) (v22.11.0 is required)

## Installation and Setup

- Clone the repository
- Open the project and run following commands for setup

```bash
# install dependencies
npm install

# serve with hot reload at localhost:3000
npm start
```

## Features

- <b>Create one or more chats:</b> User can start new conversation from the contact list or continue an existing conversation.
- <b>Send, receive, and display messages:</b> User can send, receive and display text messages. The message object contains content, sender id, receiver id, content and timestamp.
- <b>Delete a chat:</b> User can delete a conversation. A confirmation  modal is shown before deletion happens.
- <b>Profile:</b> User can view the profile details of any contact as well as own profile.
- <b>Pinned conversations:</b> User has the option to pin important conversations to the top.
- <b>Search functionality:</b> User can search for a conversation using the searchbar. Debounce has been implemented in the searchbar to avoid overloading.
- <b>Read messages:</b> When a user opens any conversation with new messages, it is marked as read.
- <b>User Experience:</b> When a text is sent / received, on opening the conversation the message scroll immediately takes us to the latest message.
- <b>Error handling and code modularity:</b> 


## Deployment
Run build command with publish directory as `build`.

```bash
# build command
npm run build
```

The demo [website](https://tf-chat.netlify.app) is deployed on Netlify. Refer [Deploy React App](https://www.netlify.com/blog/2016/07/22/deploy-react-apps-in-less-than-30-seconds/) on how to deploy on netlify.