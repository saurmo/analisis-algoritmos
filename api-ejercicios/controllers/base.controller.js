const sendMessage = async (req, res) => {
  try {
    return res.send("Hola API");
  } catch (error) {
    console.error(error);
    return res.send(error);
  }
};

module.exports = { sendMessage };
