
const maskEmail = (email) => {
    const atSymbol = email.indexOf("@");
    const userEmail = email.slice(0, atSymbol);
    const usersEmailDomain = email.slice(atSymbol);


    const maskedEmail = userEmail[0] + "*".repeat(userEmail.length-2) + userEmail[userEmail.length - 1] + usersEmailDomain
    return maskedEmail;
}
const email = "myEmail@email.com"
console.log(maskEmail(email))



