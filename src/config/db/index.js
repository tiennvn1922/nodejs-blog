import mongoose from 'mongoose';

async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/f8_education_dev');
        console.log('connect db success');
    } catch (error) {
        console.log('connect db fail');
    }
}

export default { connect };
