const input=(e)=>{
    const text=document.getElementById('Write');
    const value=(e.target.value);
      text.innerHTML=value;
}


document.getElementById('input-field').addEventListener('input',input);