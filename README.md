## Card Theme Application
Card Theme app provides different look & feels to users just by changing json configuration.
This app will be aim to support customizable card interaction and animation.

This app consists of components using awesome library like react, redux, styled-components.
This app is under the heavy development.
We welcome you to develop this app.

### npm commands
You can simply launch this app on your web browser by the following.

$ npm install (for preparation)

$ npm start (for development)

$ npm test (for verifying features)

$ npm run build (for production)

### running on electron
If you want to run this app on electron, please run the following commands in each terminal.

$ npm run start-app
$ npm run start-electron

If react code is changed, just run 2nd command again.

### Trouble Shootings
If you have errors regarding watchers during 'npm test', try the following.
Increasing the limit of inotify watchers solves that problem.

```js
# echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf
# sudo sysctl -p
```
