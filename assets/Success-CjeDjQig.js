import{c as r,a as c,r as d,j as e}from"./index-Bz29fIqD.js";import{B as o}from"./button-Dg9seiCa.js";import a from"./index-ghQi_28l.js";import{C as m}from"./circle-check-CJFCBh8m.js";/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x=r("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p=r("House",[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n=r("MessageCircle",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}]]),g=()=>{const l=c();return d.useEffect(()=>{a.event("Purchase"),a.setTag("product","ebook_personalizado"),a.setTag("value","29.90"),a.setTag("currency","BRL");const i=()=>{const s=document.createElement("div");s.className="animate-bounce",s.style.cssText=`
        position: fixed;
        pointer-events: none;
        left: ${Math.random()*100}%;
        top: -10px;
        font-size: 24px;
        z-index: 9999;
        animation: fall ${2+Math.random()*1}s linear forwards;
      `,s.textContent=["🎉","✨","🎊","💖","⭐"][Math.floor(Math.random()*5)],document.body.appendChild(s),setTimeout(()=>s.remove(),3e3)},t=document.createElement("style");t.textContent=`
      @keyframes fall {
        to {
          transform: translateY(100vh) rotate(360deg);
          opacity: 0;
        }
      }
      
      @keyframes pulse-scale {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.1); }
      }
      
      .pulse-scale {
        animation: pulse-scale 2s ease-in-out infinite;
      }
    `,document.head.appendChild(t);for(let s=0;s<30;s++)setTimeout(i,s*50);return()=>{t.remove()}},[]),e.jsx("div",{className:"min-h-screen bg-gradient-to-br from-primary/5 via-background to-accent/5 flex items-center justify-center px-4 py-8",children:e.jsxs("div",{className:"max-w-2xl w-full",children:[e.jsxs("div",{className:"text-center mb-8",children:[e.jsx("div",{className:"flex justify-center mb-6",children:e.jsx("div",{className:"pulse-scale",children:e.jsx(m,{className:"w-24 h-24 text-primary"})})}),e.jsx("h1",{className:"text-4xl md:text-5xl font-bold text-foreground mb-4 break-words",children:"🎉 Parabéns!"}),e.jsx("p",{className:"text-xl text-muted-foreground mb-2 break-words",children:"Sua ordem foi confirmada com sucesso!"})]}),e.jsxs("div",{className:"space-y-4 mb-8",children:[e.jsx("div",{className:"bg-card rounded-xl border border-primary/20 p-6 shadow-card hover:shadow-lg transition-shadow",children:e.jsxs("div",{className:"flex items-start gap-4",children:[e.jsx("div",{className:"bg-primary/10 p-3 rounded-lg",children:e.jsx(n,{className:"w-6 h-6 text-primary"})}),e.jsxs("div",{className:"flex-1",children:[e.jsx("h3",{className:"font-semibold text-foreground mb-1",children:"Confira seu WhatsApp"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"Em instantes você receberá uma mensagem no WhatsApp com o link para baixar seu e-book personalizado."})]})]})}),e.jsx("div",{className:"bg-card rounded-xl border border-primary/20 p-6 shadow-card hover:shadow-lg transition-shadow",children:e.jsxs("div",{className:"flex items-start gap-4",children:[e.jsx("div",{className:"bg-accent/10 p-3 rounded-lg",children:e.jsx(x,{className:"w-6 h-6 text-accent"})}),e.jsxs("div",{className:"flex-1",children:[e.jsx("h3",{className:"font-semibold text-foreground mb-1",children:"Bônus inclusos"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"Junto com seu Livro, você também receberá todos os bônus: Guia de Oração, Atividades Bíblicas e Áudios das Histórias."})]})]})}),e.jsx("div",{className:"bg-primary/10 border-l-4 border-primary rounded-xl p-6",children:e.jsx("p",{className:"text-lg font-semibold text-primary text-center break-words",children:"✨ Obrigada por investir no legado de fé da sua criança! ✨"})})]}),e.jsxs("div",{className:"space-y-3 sm:space-y-0 sm:flex gap-4 justify-center",children:[e.jsxs(o,{variant:"cta",size:"lg",onClick:()=>l("/"),className:"w-full sm:w-auto flex items-center justify-center gap-2",children:[e.jsx(p,{className:"w-5 h-5"}),"Voltar ao Início"]}),e.jsxs(o,{variant:"outline",size:"lg",onClick:()=>window.open("https://wa.me/553184304153","_blank"),className:"w-full sm:w-auto flex items-center justify-center gap-2",children:[e.jsx(n,{className:"w-5 h-5"}),"Falar no WhatsApp"]})]}),e.jsxs("div",{className:"mt-12 text-center",children:[e.jsxs("p",{className:"text-sm text-muted-foreground mb-3",children:["Dúvidas? Fale conosco pelo WhatsApp:",e.jsx("a",{href:"https://wa.me/553184304153",target:"_blank",rel:"noopener noreferrer",className:"text-primary font-semibold ml-1",children:"+55 31 8430-4153"})]}),e.jsx("div",{className:"flex items-center justify-center gap-2 text-xs text-muted-foreground",children:e.jsx("span",{children:"🔒 Seus dados estão seguros"})})]})]})})};export{g as default};
