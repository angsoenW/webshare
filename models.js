import mongoose from 'mongoose';

let models = {};

main().catch(err => console.log(err))
async function main(){
    console.log('connecting to mongodb')
    await mongoose.connect('mongodb+srv://angsoen:BzwCjknLvhK2MPVr@cluster0.pzn6zqp.mongodb.net/?retryWrites=true')

    console.log('succesffully connected to mongodb!')

    const postSchema = new mongoose.Schema({
        url: String,
        description: String,
        rating: Number,
        created_date: String
    })

    models.Post = mongoose.model('webs', postSchema)
    console.log('mongoose models created')
}

export default models;