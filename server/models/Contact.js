import mongoose from 'mongoose';

const ContactSchema = new mongoose.Schema({
    entreprise: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    telephone: {
        type: String,
        required: true
    },
    message: {
        type: String
    }
});

const ContactModel = mongoose.model('Contact', ContactSchema);

export default ContactModel;

