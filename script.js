// Mobile nav toggle
document.getElementById('navBtn').onclick = () =>{
  const m=document.getElementById('navMobile');
  m.style.display = m.style.display==='flex' ? 'none' : 'flex';
};

// Counter animation
let target=120, n=0;
let counter=setInterval(()=>{
  n++; document.getElementById('count').innerText=n;
  if(n>=target) clearInterval(counter);
},20);
