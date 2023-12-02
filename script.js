// const emailRegex = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;
const form =  document.querySelector('form'); 
const fullName = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const subject = document.getElementById('subject');
const mess = document.getElementById('message');


function sendEmail(){  
    const bodyMessage = `Full Name: ${fullName.value}<br/> Email: ${email.value}<br/> Phone: ${phone.value}<br/> Message: ${mess.value}` ; 
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "ali.kanan446@gmail.com",
        Password : "6FB45F1C8F00C98F56D37DE6CFCF92680A43",
        To : 'ali.kanan446@gmail.com',
        From : "ali.kanan446@gmail.com",
        Subject : subject.value,
        Body : bodyMessage
    }).then(
      message => {
        if (message == 'OK'){
            Swal.fire({
                title: "Success!",
                text: "Message Send successfully !",
                icon: "success"
              });
        }

      }
    );
}
function checkINputs() {
    const items = document.querySelectorAll('.item');
    for (const item of  items) {
        if (item.value == '') {
            item.classList.add('error');
            item.parentElement.classList.add("error")
        }
        item.addEventListener("keyup" , () => {
            if(item.value != ''){
                item.classList.remove('error');
                item.parentElement.classList.remove("error")
            }
            else { 
                item.classList.add('error');
                item.parentElement.classList.add("error")
            }
        })
    }
}

form.addEventListener('submit' ,  (e) => {
    e.preventDefault();
    checkINputs();

    // sendEmail();
});