import mongoose from 'mongoose';
const { Schema } = mongoose;

const Course = new Schema({
    name: { type: String, maxLength: 255 }, // String is shorthand for {type: String}
    description: { type: String, maxLength: 600 },
    img: { type: String, maxLength: 255 },
    createdAt: { type: Date, default: Date.now },
    updatedAT: { type: Date, default: Date.now },
});
export default mongoose.model('Course', Course);
