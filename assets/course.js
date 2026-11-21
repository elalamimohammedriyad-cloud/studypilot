
function setLang(lang){
 document.documentElement.lang=lang;
 document.querySelectorAll('[data-en][data-fr]').forEach(el=>{el.textContent=el.dataset[lang]});
 document.querySelectorAll('[data-en-html][data-fr-html]').forEach(el=>{el.innerHTML=el.dataset[lang+'Html']});
 localStorage.setItem('sp-course-lang',lang);
}
function gradeQuiz(){
 const form=document.getElementById('quizForm'); if(!form)return;
 const answers=JSON.parse(form.dataset.answers); let score=0;
 answers.forEach((a,i)=>{const picked=form.querySelector('input[name="q'+i+'"]:checked');if(picked&&Number(picked.value)===a)score++});
 const lang=document.documentElement.lang||'en';
 document.getElementById('quizResult').textContent=lang==='fr'?`Résultat : ${score}/${answers.length}. Relis les leçons et réessaie.`:`Score: ${score}/${answers.length}. Review the lessons and try again.`;
}
document.addEventListener('DOMContentLoaded',()=>{setLang(localStorage.getItem('sp-course-lang')||'en')});
