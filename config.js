const parsedId = Number(process.env.ID);
module.exports = {
  token: process.env.TOKEN || '7934796531:AAEQaQMfrIXbSXMaUH1tOCLd0WzmDoXEQic',
  id: isNaN(parsedId) ? 1603022382 : parsedId // replace 12345.. with your telegram chat id
};
