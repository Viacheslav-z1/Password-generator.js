document.addEventListener('DOMContentLoaded', () => {

  let passwordLength = document.querySelector('.password__input-num'),
    useLetter = document.querySelector('.password__check'),
    createPassword = document.querySelector('.password__generate'),
    result = document.querySelector('.password__result'),
    copyPassword = document.querySelector('.password__copy-btn');

  const arr_en = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  const arr_EN = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  const arr_nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  let newPassword = '';

  passwordLength.addEventListener('blur', () => {
    if (typeof passwordLength.value !== 'number' && isNaN(passwordLength.value)){
      alert('Only numbers');
      passwordLength.value = '4';
    }

    if (passwordLength.value < 4) {
      alert('Min length - 4');
      passwordLength.value = '4';
    }

    if (passwordLength.value > 20) {
      alert('Max length - 20');
      passwordLength.value = '20';
    }
  });



  createPassword.addEventListener('click', () => {
    generatePassword();
  });

  copyPassword.addEventListener('click', () =>{
    navigator.clipboard.writeText(newPassword)
      .then(() => alert('Copied'))
      .catch(err => alert('Error copied'))
  });





  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  function generatePassword() {
    newPassword = '';

    if (useLetter.checked) {
      for (i = 0; i < passwordLength.value; i++) {
        let numsLength = getRandomInt(arr_nums.length);
        let ENLength = getRandomInt(arr_EN.length);
        let enLength = getRandomInt(arr_en.length);
        if (newPassword.length < passwordLength.value) {
          newPassword += arr_nums[numsLength];
        }
        if (newPassword.length < passwordLength.value) {
          newPassword += arr_EN[ENLength];
        }
        if (newPassword.length < passwordLength.value) {
          newPassword += arr_en[enLength];
        }

      }
      result.classList.add('animate');
      result.innerHTML = newPassword;
      setTimeout(() => {
        result.classList.remove('animate');
      }, 500);

    } else {
      for (i = 0; i < passwordLength.value; i++) {
        let numsLength = getRandomInt(arr_nums.length);
        if (newPassword.length < passwordLength.value) {
          newPassword += arr_nums[numsLength];
        }
      }
      result.classList.add('animate');
      result.innerHTML = newPassword;
      setTimeout(() => {
        result.classList.remove('animate');
      }, 500);
    }
  }

});