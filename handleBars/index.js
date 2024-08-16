const handlebars = require('handlebars');
const fs = require('fs');

// Read the Handlebars template file
const templateSource = fs.readFileSync('backPain5.hbs', 'utf8');
const template = handlebars.compile(templateSource);

// JSON data
const questionnaireData = [
    {
        "question": "Do you have difficulty passing or controlling urine since your back pain started?",
        "answer": "Yes"
    },
    {
        "question": "Do you have numbness or tingling around your genitals or inner thighs since your back pain started?",
        "answer": "No"
    },
    {
        "question": "Have you noticed a loss of bowel control since your back pain started?",
        "answer": "No"
    },
    {
        "question": "Have you noticed a change in the ability to achieve an erection or ejaculate since your back pain started? (MALES ONLY)",
        "answer": "Yes"
    }
];

const RecipientName = "Ashok"

// Compile the template with data
const htmlOutput = template({ questions: questionnaireData , RecipientName:RecipientName});

// Output HTML (or use it in your email sending logic)
fs.writeFileSync('output.html', htmlOutput);
console.log('HTML file generated successfully.');
