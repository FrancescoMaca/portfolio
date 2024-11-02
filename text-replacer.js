const { isWhiteSpaceLike } = require("typescript")

const template = `
         @@@@@@@@@@@@@@
       @@@@@@@@@@@@@@@@@@
     @@@@@@@@@@@@@@@@@@@@@@
    @@@@@@@@        @@@@@@@@
   @@@@@@@            @@@@@@@
  @@@@@@@         @@@  @@@@@@
  @@@@@@        @@@@@   @@@@@@
  @@@@@@      @@@@@@@   @@@@@@
  @@@@@@    @@@@@@@@   @@@@@@@
  @@@@@@   @@@@@@@@   @@@@@@@
  @@@@@  @@@@@@@@   @@@@@@@@
  @@@  @@@@@@@@   @@@@@@@@@
     @@@@@@@@@   @@@@@@@@   @@
    @@@@@@@@   @@@@@@@@  @@@@@
   @@@@@@@   @@@@@@@@@  @@@@@@
   @@@@@@   @@@@@@@@    @@@@@@
  @@@@@@   @@@@@@@      @@@@@@
  @@@@@@   @@@@@        @@@@@@
   @@@@@@  @@@@        @@@@@@@
   @@@@@@@            @@@@@@@
    @@@@@@@@@      @@@@@@@@@
     @@@@@@@@@@@@@@@@@@@@@@
       @@@@@@@@@@@@@@@@@@
          @@@@@@@@@@@@@
`

const sub = `let sum=(a,b)=>a+b;function mul(x,y){return x*y;};var divide=(a,b2)=>{return a/b2;};square=x=>x*x;var pow=(b,pwr)=>Math.pow(b,pwr);let p=1;var q=1;let f=(n)=>{if(n==1)return 1;if(n==0)return 1;let p=f(n-1);let q=f(n-2);return p+q;let g=(n)=>{let r=f(n)/f(n-1);let phi=1.618033;return r-phi<0.0001?r:g(n+1)};let phi=g(10);const gr=(a)=>a*1.618033;const igr=(a)=>a/1.618033;const fbs=(n)=>n<=1?1:fbs(n-1)+fbs(n-2);const grs=(x)=>x*phi;const golden=(n)=>n*phi;const invgold=n=>n/phi;const ratio=1.618033;const phi=1.618`
let out = ''
for(let i = 0, subIndex = 0; i < template.length; i++) { 
  if (isWhiteSpaceLike(template[i])) {
    continue
  }

  if (template[i] === '@') {
    out += sub[subIndex++]
  }
  else {
    out += template[i]
  }
}

console.log(out);
