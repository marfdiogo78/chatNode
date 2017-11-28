module.exports = (application) => {
  application.post('/chat', (req, res) => {
    application.app.controllers.chat.chatGet(application, req, res);
  })
  application.get('/chat', (req, res) => {
    application.app.controllers.chat.chatGet(application, req, res);
  })
}