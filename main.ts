//tiny stack vm
import{mkdirSync as K,readdirSync as R,readFileSync as F,writeFileSync as W}from'fs'
let E=process.env,I=E.MAKEFUN_INPUT_DIR??'/input',O=E.MAKEFUN_OUTPUT_DIR??'/output',T='(9i,.237        1111111-111-111 111             HLLH(           -0              ,,),',D=new Int32Array(256),U=Buffer.alloc(65536),M,C,P,N,s,c,i,l,q,t,a,b,z,f,k,m,r,g,x,o,
X=e=>{throw e},p=v=>D[s++]=v,d=()=>b||X(4),J=()=>q+=P.readInt16LE(q-2),
A=[()=>X(0),()=>p(P[q-1]<<24>>24),()=>p(P.readInt32LE(q-4)),()=>0,()=>p(p(b)),()=>p(b)+p(a),()=>p(a)+p(b)+p(a),()=>p(a)+p(b)+p(z),,,,,,,,,()=>p(a+b),()=>p(a-b),()=>p(Math.imul(a,b)),()=>d(p(a/b)),()=>d(p(a%b)),()=>d(p((a>>>0)/(b>>>0))),()=>d(p((a>>>0)%(b>>>0))),()=>p(-b),()=>p(a&b),()=>p(a|b),()=>p(a^b),()=>p(~b),()=>p(a<<b),()=>p(a>>b),()=>p(a>>>b),,()=>p(a==b),()=>p(a<b),()=>p(a>>>0<b>>>0),,,,,,,,,,,,,,J,()=>b||J(),()=>b&&J(),()=>q=(c>63&&X(7),C[c++]=q,P[q-2]|P[q-1]<<8),()=>q=c?C[--c]:X(8),,,,,,,,,,,,()=>p(M[b>>>0>255?X(6):b]),()=>M[b>>>0>255?X(6):b]=a,,,,,,,,,,,,,,,()=>l+=U.write(x=''+b,l+x.length>65536?X(11):l),()=>U[l>65535?X(11):l++]=b,()=>p(N[i++]??-1),()=>X(b&255)]
for(g of R(I).sort()){P=F(I+`/${g}/program.bin`);N=F(I+`/${g}/input.bin`);M=new Int32Array(256);C=[];s=c=i=l=q=t=0
try{for(;;){t>=1e6&&X(10);f=A[o=P[q]??X(9)]||X(5);k=T.charCodeAt(o)-40;P[q+(m=k>>4)]??X(9);t++;q+=m+1;s<(r=k>>2&3)&&X(2);s-r+k%4>256&&X(3);b=D[s-1];a=D[s-2];z=D[s-3];s-=r;f()}}catch(e){K(g=O+'/'+g,{recursive:!0});W(g+'/stdout.bin',U.subarray(0,l));W(g+'/exit.txt',e+`
`)}}
