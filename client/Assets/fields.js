const Stage1 = [{
  Question: 'Name?',
  type:'Required'
},
{
  Question: 'Email Address?',
  type:'Required'
},
{
  Question: 'Phone Number?',
  type: "Boolean",
  value:true
},
{
  Question: 'Are you currently working with a real estate agent?',
  type: "Boolean",
  value: true
},
{
  Question: 'Where did you hear about this open house',
  type: "Boolean",
  value: false
}]

const Stage2 = [
  {
    Question: 'Background Image',
    type: "Image",
    value: true
  },
  {
    Question: 'Listing Price',
    type: "Boolean",
    value: true
  },
  {
    Question: 'Bedrooms & Bathrooms',
    type: "Boolean",
    value: true
  },
  {
    Question: 'Square Footage',
    type: "Boolean",
    value: false
  }]

  const Stage3 = [{
    type: 'Add Hashtags',
    value: []
  }]
const fields =[ Stage1, Stage2, Stage3 ]

module.exports = fields;