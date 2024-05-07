import mongoose from 'mongoose';

const ContactSchema = new mongoose.Schema({
    entreprise: {
        type: String,
        required: true,
        index: false
    },
    email: {
        type: String,
        required: true,
        index: true
    },
    telephone: {
        type: String,
        required: true,
        index: true
    },
    message: {
        type: String,
        index: false
    }
});

const ContactModel = mongoose.model('Contact', ContactSchema);

export default ContactModel;

