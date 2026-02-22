// Day 10: Strings & Numbers
function generatePassword(length) {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let pass = "";
    for (let i = 0; i < length; i++) {
        const randonNum = Math.floor(Math.random() * chars.length);
        pass += chars[randonNum];
    }
    return pass;
}

console.log(generatePassword(10))