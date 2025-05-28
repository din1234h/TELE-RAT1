const parsedId = Number(process.env.ID);
module.exports = {
  token: process.env.TOKEN || '7207301191:AAGTd6a3SE1CkV6okNh8cYZGiIgD1l1p0nM',
  id: isNaN(parsedId) ? 1603022382 : parsedId // replace 12345.. with your telegram chat id
};
