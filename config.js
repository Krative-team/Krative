const SUPABASE_URL = "https://pfrpgijjqajwuhyfcdgw.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBmcnBnaWpqcWFqd3VoeWZjZGd3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTIwNjMzNzksImV4cCI6MjEwNzYzOTM3OX0.T9aMtCBX7RJwhJr6RXMVjhQKnPTNX_BNfuLXle9z5go";
let supabaseClient = null;
function initSupabase(){
  if(typeof supabase !== 'undefined'){
    supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
  }
}
function getSupabase(){ if(!supabaseClient) initSupabase(); return supabaseClient; }
function updateHomeBtn(){
  const btn = document.getElementById('homeBtn'); if(!btn) return;
  if(localStorage.getItem('logged') === 'yes'){
    btn.textContent = 'Dashboard'; btn.onclick = ()=> window.location.href='templates.html';
  } else {
    btn.textContent = 'Login'; btn.onclick = ()=> window.location.href='auth.html';
  }
}
function handleHomeBtn(){
  if(localStorage.getItem('logged') === 'yes') location.href='index.html';
  else location.href='auth.html';
}