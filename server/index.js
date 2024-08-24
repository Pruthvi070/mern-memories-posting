import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import postRoutes from './routes/posts.js';

const app = express();

app.use('/posts', postRoutes);  // Connecting routes to the app. Use '/posts' as the prefix for all posts routes.  // Note: This is a very basic implementation and you might want to add more security measures in a production environment.  // For example, you could implement authentication middleware to ensure only authorized users can access the posts.  // Also, you could limit the size of the uploaded images or videos.  // Lastly, you could use a

const CONNECTION_URL = 'mongodb+srv://Raj:21512757@newmern.t70lv.mongodb.net/?retryWrites=true&w=majority&appName=Newmern';
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server Running on Port: ${PORT}`)))
    .catch((error) => console.log(`${error} did not connect`));

app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());
