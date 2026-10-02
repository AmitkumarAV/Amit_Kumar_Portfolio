document.documentElement.classList.add("js");
// To link a project to its GitHub repo, add  link:"https://github.com/your-username/repo"  to that project below.
var projects=[
{t:"Python EDA Project",d:"Apr 2026 - Aug 2026",tools:["Python"],tags:["Python","Pandas","NumPy","Matplotlib","Jupyter Notebook"],n:"6,000+ records",
 b:["Cleaned a real-world dataset of 6,000+ records, handling missing values, duplicates, and outliers.","Ran exploratory and statistical analysis to find patterns, correlations, and trends.","Created charts with Matplotlib and NumPy to communicate findings.","Used generative AI tools to speed up debugging and analysis, and validated every output manually.","Output: Uncovered key trends and correlations in 6,000+ records and presented them in visual charts and a report."]},
{t:"Sales Data Analysis Dashboard",d:"Jan 2026 - Mar 2026",tools:["Excel","Power BI"],tags:["Excel","Power Query","Power BI"],n:"3,000+ records",
 b:["Cleaned and transformed 3,000+ records of raw sales data using Excel and Power Query.","Built an interactive Power BI dashboard to monitor sales performance and key metrics.","Analyzed sales trends across regions, products, and time periods.","Output: Identified top-performing regions and products and spotted monthly sales dips through the dashboard."]},
{t:"SQL Data Analysis Project",d:"Sep 2025 - Dec 2025",tools:["SQL"],tags:["SQL"],n:"3,000+ records",
 b:["Analyzed 3,000+ customer and sales records to extract business insights.","Wrote queries with JOIN, GROUP BY, HAVING, subqueries, and window functions.","Improved data retrieval efficiency with optimized queries.","Output: Identified top customers and best-selling products in 3,000+ records and summarized them in reports."]}
];
var filters=["All","SQL","Python","Power BI","Excel"],cur="All",chips=document.querySelector(".chips"),list=document.getElementById("list");
function esc(s){return s.replace(/[&<>"]/g,function(c){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]})}
function render(){
 var rows=projects.filter(function(p){return cur=="All"||p.tools.indexOf(cur)>-1});
 document.getElementById("where").innerHTML=cur=="All"?"":'<span class="k">WHERE</span> tool = <span class="s">\''+cur+"'</span>";
 document.getElementById("count").textContent=rows.length+(rows.length==1?" row":" rows")+" returned";
 list.innerHTML=rows.map(function(p){
  var link=p.link?' | <a href="'+esc(p.link)+'" target="_blank" rel="noopener">View on GitHub</a>':"";
  return '<article class="card pop"><h3>'+esc(p.t)+'</h3><div class="meta">'+esc(p.d)+link+'</div><ul>'+p.b.map(function(x){return"<li>"+(x.indexOf("Output:")==0?"<b>Output:</b>"+esc(x.slice(7)):esc(x))+"</li>"}).join("")+'</ul><div class="tags">'+p.tags.map(function(x){return'<span class="tag">'+esc(x)+"</span>"}).join("")+'<span class="tag n">'+esc(p.n)+"</span></div></article>"}).join("");
 [].forEach.call(chips.children,function(c){c.setAttribute("aria-pressed",c.textContent==cur)});
}
filters.forEach(function(f){var b=document.createElement("button");b.className="chip";b.type="button";b.textContent=f;b.onclick=function(){cur=f;render()};chips.appendChild(b)});
render();
// hero bars
var bars=document.querySelector(".bars");for(var i=0;i<16;i++){var e=document.createElement("i");e.style.setProperty("--i",i);e.style.height=(30+Math.abs(Math.sin(i*1.7))*70)+"%";bars.appendChild(e)}
// typing
var words=["SQL","Python","Power BI","Excel"],wi=0,ci=0,del=false,tp=document.getElementById("typed");
function tick(){var w=words[wi];tp.textContent="I analyze data with "+w.slice(0,ci);
 if(!del&&ci<w.length){ci++;setTimeout(tick,110)}else if(!del){del=true;setTimeout(tick,1300)}
 else if(ci>0){ci--;setTimeout(tick,55)}else{del=false;wi=(wi+1)%words.length;setTimeout(tick,300)}}
tick();
// scroll progress
var bar=document.getElementById("bar");addEventListener("scroll",function(){var h=document.documentElement;bar.style.width=(h.scrollTop/(h.scrollHeight-h.clientHeight)*100)+"%"},{passive:true});
// reveal + count up
function count(el){var to=+el.dataset.to,dec=+(el.dataset.dec||0),sfx=el.dataset.sfx||"",t0=performance.now();
 (function f(t){var p=Math.min((t-t0)/1400,1),v=to*(1-Math.pow(1-p,3));el.textContent=(dec?v.toFixed(dec):Math.round(v).toLocaleString("en-IN"))+(p==1?sfx:"");if(p<1)requestAnimationFrame(f)})(t0)}
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add("in");[].forEach.call(e.target.querySelectorAll("[data-to]"),count);io.unobserve(e.target)}})},{threshold:.15});
[].forEach.call(document.querySelectorAll(".rv"),function(el,i){el.style.transitionDelay=(i%3)*.08+"s";io.observe(el)});
document.getElementById("theme").onclick=function(){var r=document.documentElement,dark=r.dataset.theme?r.dataset.theme=="dark":matchMedia("(prefers-color-scheme:dark)").matches;r.dataset.theme=dark?"light":"dark"};
