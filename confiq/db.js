const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 5050;

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB connected: ${conn.connection.host}`);
    app.listen(PORT, () => {
      console.log(`running at http://localhost:${PORT}`);
    });
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDB;
