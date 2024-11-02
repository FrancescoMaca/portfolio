import { PageContent } from "../content-handler";

export const companyPage: PageContent = {
  content: `
const intro: string = 'This is my company page :D'

const outro: string = \`If you'll ever need a website or a web application, feel free to let me know\`

open('[[URL:Swondi\` website,https://swondi.com]]')
const logo = \`It's a little pixelated sorry\`;

         let sum=(a,b)=
       >a+b;function mul(
     x,y){return x*y;};var 
    divide=(        a,b2)=>{
   return             a/b2;};
  square=         x=>  x*x;va
  r pow=        (b,pw   r)=>Ma
  th.pow      (b,pwr)   ;let p
  =1;var     q=1;let    f=(n)=
  >{if(n   ==1)retu   rn 1;if
  (n==0  )return    1;let p=
  f(n  -1);let    q=f(n-2);
     return p+   q;let g=   (n
    )=>{let    r=f(n)/f  (n-1)
   ;let ph   i=1.61803  3;retu
   rn r-p   hi<0.000    1?r:g(
  n+1)};   let phi      =g(10)
  ;const    gr=(        a)=>a*
   1.6180  33;c        onst ig
   r=(a)=>            a/1.618
    033;const       fbs=(n)=
     >n<=1?1:fbs(n-1)+fbs(n
       -2);const grs=(x)=
          >x*phi;const
`
};