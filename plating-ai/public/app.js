function setQ(t){const q=document.getElementById('q');q.value=t;q.focus();document.getElementById('assistant').scrollIntoView({behavior:'smooth',block:'center'})}

async function ask(){
  const q=document.getElementById('q').value.trim();
  if(!q)return;
  const chat=document.getElementById('chat');
  chat.innerHTML='<div class="bubble ai">Menganalisis pertanyaan...</div>';
  try{
    const r=await fetch('/api/chat',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({message:q})});
    const j=await r.json();
    const text = j.answer || j.error || 'Tidak ada respons.';
    // Menggunakan fungsi esc bawaan Anda agar aman dan tetap terhubung
    chat.innerHTML='<div class="bubble ai">'+esc(text).replace(/\n/g, '<br>')+'</div>';
  }catch(e){
    chat.innerHTML='<div class="bubble ai">Server belum terhubung. Pastikan backend PLATING AI sedang berjalan.</div>';
  }
}

function esc(s){return String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[c]))}

fetch('/api/health').then(r=>r.json()).then(x=>{document.getElementById('status').textContent=x.ai?'AI ONLINE':'RULE MODE'}).catch(()=>document.getElementById('status').textContent='OFFLINE')