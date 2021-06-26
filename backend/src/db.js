import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const userSchema = new Schema({
  user_id: { type: String, required: true },
  password: { type: String, required: true },
  group: { type: String, required: true },
  GPA: Number,
  college: String,
  school: String,
  isRegistered: Boolean, 
  duration: String,
  languageExam: String, 
  apply_list: [String],
});
  
const commentSchema = new Schema({
  author: { type: mongoose.Types.ObjectId, ref: 'users', required: true },
  content: { type: String, required: true },
  followers: [{ type: mongoose.Types.ObjectId, ref: 'users' }],
  replies: [{ type: mongoose.Types.ObjectId, ref: 'replies' }],
  group: String,
});

const replySchema = new Schema({
  author: { type: mongoose.Types.ObjectId, ref: 'users' },
  content: { type: String, required: true },
  comment: { type: mongoose.Types.ObjectId, ref: 'comments' },
});
  
const users = mongoose.model('users', userSchema);
const comments = mongoose.model('comments', commentSchema);
const replies = mongoose.model('replies', replySchema);

const db = {
  users,
  comments,
  replies,
}

export { db as default };
