let mongoose = require('mongoose');
let Schema = mongoose.Schema;

//movie schema definition
let MovieSchema = new Schema(
  {
    title: { type: String, required: true },
    author: { type: String, required: true },
    year: { type: Number, required: true },
    createdAt: { type: Date, default: Date.now },    
  }, 
  { 
    versionKey: false
  }
);

// Sets the createdAt parameter equal to the current time
MovieSchema.pre('save', next => {
  now = new Date();
  if(!this.createdAt) {
    this.createdAt = now;
  }
  next();
});

//Exports the BookSchema for use elsewhere.
module.exports = mongoose.model('movie', MovieSchema);