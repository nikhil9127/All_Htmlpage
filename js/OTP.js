const generateOtp = () => {
    let OTP = "";
  
  
    for (let i = 0; i < 6; i++) {
      OTP += Math.floor(Math.random() * 10);
  

      
    };
    
    var span = document.querySelector('.box span');
    span.innerHTML = OTP;
}