const validator = require("validator");

const isValidEmail = (email) => {
    if (typeof email !== "string") {
        return false;
    }
    return validator.isEmail(email);
};

const testEmails = [
    { email: "mango@mail.com" },
    { email: "Mangozedog.com" },
    { email: "test.user+alias@gmail.com" },
    { email: "test@" },
    { email: null },
    { email: 12345 },
];

testEmails.forEach(({ email, description }) => {
    console.log(
        `Is "${email}" a valid email?: ${isValidEmail(email)}`
    );
});
