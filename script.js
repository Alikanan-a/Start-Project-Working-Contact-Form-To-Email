// const emailRegex = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;
const form =  document.querySelector('form'); 
function sendEmail(){  
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "ali.kanan446@gmail.com",
        Password : "6FB45F1C8F00C98F56D37DE6CFCF92680A43",
        To : 'ali.kanan446@gmail.com',
        From : "ali.kanan446@gmail.com",
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
}