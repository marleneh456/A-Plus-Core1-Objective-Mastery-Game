const KEY="aPlus1201ObjectiveProfileV1";
let profile=JSON.parse(localStorage.getItem(KEY)||'{"xp":0,"history":[],"domainBest":{}}');
let deck=[],pos=0,score=0,selected=new Set(),answered=false,quest="";
const $=id=>document.getElementById(id);
const domains=["1.0 Mobile Devices","2.0 Networking","3.0 Hardware","4.0 Virtualization and Cloud Computing","5.0 Hardware and Network Troubleshooting"];
const weights={"1.0 Mobile Devices":13,"2.0 Networking":23,"3.0 Hardware":25,"4.0 Virtualization and Cloud Computing":11,"5.0 Hardware and Network Troubleshooting":28};
function save(){localStorage.setItem(KEY,JSON.stringify(profile));}
function level(){return Math.floor(profile.xp/250)+1}
function shuffle(a){return [...a].sort(()=>Math.random()-.5)}
function updateHome(){
 $("level").textContent="Level "+level(); $("xp").textContent=profile.xp+" XP"; $("gameXP").textContent=profile.xp+" XP";
 $("completed").textContent=profile.history.length;
 const best=profile.history.length?Math.max(...profile.history.map(x=>x.pct))+"%":"—"; $("best").textContent=best;
 const vals=domains.map(d=>profile.domainBest[d]||0); $("mastery").textContent=Math.round(vals.reduce((a,b)=>a+b,0)/vals.length)+"%";
 $("domains").innerHTML=domains.map(d=>`<button class="domain" data-domain="${d}"><b>${d}</b><span>${weights[d]}% of the exam • ${QUESTIONS.filter(q=>q.domain===d).length} practice challenges</span><div class="meter"><i style="width:${profile.domainBest[d]||0}%"></i></div><span>Best: ${profile.domainBest[d]||0}%</span></button>`).join("");
 document.querySelectorAll(".domain").forEach(b=>b.addEventListener("click",()=>start(b.dataset.domain)));
 renderHistory();
}
function renderHistory(){
 const h=$("history");
 if(!profile.history.length){h.innerHTML='<p>No completed quests yet. Finish one and your score will appear here.</p>';return}
 h.innerHTML=profile.history.slice().reverse().map(x=>`<div class="history-item"><div><b>${x.quest}</b><br><small>${x.date}</small></div><b>${x.score}/${x.total}</b><b>${x.pct}%</b></div>`).join("");
}
function start(which){
 quest=which;
 let pool=which==="Mixed Objective Quest"?QUESTIONS.filter(q=>domains.includes(q.domain)):QUESTIONS.filter(q=>q.domain===which);
 deck=shuffle(pool).slice(0,Math.min(which==="Mixed Objective Quest"?25:15,pool.length));
 pos=0;score=0;
 $("home").hidden=true;$("results").hidden=true;$("game").hidden=false;$("questName").textContent=which; render();
}
function render(){
 answered=false;selected.clear();const q=deck[pos];
 $("counter").textContent=`Question ${pos+1} of ${deck.length}`;$("bar").style.width=`${(pos/deck.length)*100}%`;
 $("obj").textContent=`Objective ${q.obj} • ${q.domain}`;$("question").textContent=q.q;
 $("instruction").textContent=q.ans.length>1?`Select ${q.ans.length} answers, then submit.`:"Select one answer, then submit.";
 $("options").innerHTML=q.opts.map((o,i)=>`<button class="option" data-i="${i}"><span class="mark">${String.fromCharCode(65+i)}.</span><span>${o}<small class="label"></small></span></button>`).join("");
 document.querySelectorAll(".option").forEach(b=>b.addEventListener("click",()=>pick(+b.dataset.i,q)));
 $("submit").disabled=true;$("submit").hidden=false;$("feedback").hidden=true;
}
function pick(i,q){if(answered)return;if(q.ans.length===1)selected.clear();selected.has(i)?selected.delete(i):selected.add(i);document.querySelectorAll(".option").forEach((b,j)=>b.classList.toggle("selected",selected.has(j)));$("submit").disabled=selected.size!==(q.ans.length);}
$("submit").addEventListener("click",()=>{
 if(answered)return;answered=true;const q=deck[pos];const ok=q.ans.length===selected.size&&q.ans.every(i=>selected.has(i));
 if(ok){score++;profile.xp+=10+(Math.min(10,pos));save();}
 document.querySelectorAll(".option").forEach((b,i)=>{const lab=b.querySelector(".label");b.disabled=true;
   if(q.ans.includes(i)){b.classList.add("correct");lab.textContent=selected.has(i)?"✓ Your answer — Correct":"✓ Correct answer";}
   else if(selected.has(i)){b.classList.add("wrong");lab.textContent="✕ Your answer — Incorrect";}
 });
 $("verdict").textContent=ok?"✓ Correct! Objective mastered.":"Not quite — study the explanation and keep going.";
 $("explain").innerHTML=q.opts.map((o,i)=>`<div class="explain-row"><b>${String.fromCharCode(65+i)}. ${o}</b><br>${q.why[i]}</div>`).join("");
 $("tip").innerHTML="<b>Remember Tip:</b> "+q.tip;$("feedback").hidden=false;$("submit").hidden=true;updateHome();
});
$("next").addEventListener("click",()=>{pos++;pos>=deck.length?finish():render()});
function finish(){const pct=Math.round(score/deck.length*100);profile.history.push({quest,score,total:deck.length,pct,date:new Date().toLocaleString()});if(domains.includes(quest))profile.domainBest[quest]=Math.max(profile.domainBest[quest]||0,pct);save();$("game").hidden=true;$("results").hidden=false;$("resultTitle").textContent=quest;$("scoreRing").innerHTML=`<div class="score ${pct>=75?"pass":"retry"}">${pct}%</div>`;$("resultText").textContent=`${score} correct out of ${deck.length}. ${pct>=75?"Great work — keep strengthening the objectives.":"Review the explanations and try this objective again."}`;updateHome();}
$("mixed").addEventListener("click",()=>start("Mixed Objective Quest"));$("acronym").addEventListener("click",()=>start("Acronym Challenge"));
$("quit").addEventListener("click",()=>{$("game").hidden=true;$("home").hidden=false;updateHome()});$("homeBtn").addEventListener("click",()=>{$("results").hidden=true;$("home").hidden=false;updateHome()});
$("resetXP").addEventListener("click",()=>{if(confirm("Reset XP, level, and objective best scores? Your Exam History will stay saved.")){profile.xp=0;profile.domainBest={};save();updateHome()}});
$("resetHistory").addEventListener("click",()=>{if(confirm("Clear all Exam History? Your XP and level will stay saved.")){profile.history=[];save();updateHome()}});
updateHome();