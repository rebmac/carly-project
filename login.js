function onSubmit() {

  if (document.getElementById('pass').value == 'bigboobz') {
    // This is the confusing code that gets the hidden html file and replaces it in the HTML
    // It's a bit easier to do in a framework, in pure javascript it looks SUPER weird, I had to look it up myself
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'crnwp_88_86.template.html', true);
    xhr.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        document.body.innerHTML = this.responseText;
      }
    };
    xhr.send();

  } else {
    alert('Access Denied, Please try again');
  }
  return false;
}
