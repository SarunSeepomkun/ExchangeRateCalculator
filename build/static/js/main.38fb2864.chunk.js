(this.webpackJsonpproject=this.webpackJsonpproject||[]).push([[0],{69:function(e,a,t){e.exports=t(96)},75:function(e,a,t){},96:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),r=t(7),c=t.n(r),u=t(27),E=t.n(u),m=t(37),v=t(32),o=(t(75),t(54)),D=t.n(o),R=function(){var e=Object(m.a)(E.a.mark((function e(a){var t,l,n;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a||(a="USD"),t="https://api.exchangerate-api.com/v4/latest/".concat(a),e.prev=2,e.next=5,D.a.get(t);case 5:return l=e.sent,n=l.data,e.abrupt("return",n);case 10:return e.prev=10,e.t0=e.catch(2),e.abrupt("return","Line 14 Exchange_rate.GetExchangeRate() , "+e.t0);case 13:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(a){return e.apply(this,arguments)}}(),P=t(125),i=t(135),s=t(127),K=t(129),p=t(130),N=t(134),S=t(138),C=t(136),U=t(133),A=Object(P.a)({root:{maxWidth:600}});var B=function(){var e=A(),a=Object(l.useState)(""),t=Object(v.a)(a,2),r=t[0],c=t[1],u=Object(l.useState)(""),o=Object(v.a)(u,2),D=o[0],P=o[1],B=Object(l.useState)(0),H=Object(v.a)(B,2),O=H[0],d=H[1],f=Object(l.useState)(1),h=Object(v.a)(f,2),G=h[0],b=h[1],Y=Object(l.useState)(0),T=Object(v.a)(Y,2),x=T[0],g=T[1],I=function(){var e=Object(m.a)(E.a.mark((function e(){var a;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R(r);case 2:a=e.sent,D||(D="THB"),d((function(){return O=a.rates[D].toFixed(2)})),g((function(){return x=(O*G).toFixed(2)})),console.log(x);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return n.a.createElement(i.a,{display:"flex",flexDirection:"column",flexWrap:"wrap",justifyContent:"center",alignItems:"center"},n.a.createElement(s.a,{className:e.root},n.a.createElement(K.a,null,n.a.createElement(i.a,{m:1},n.a.createElement(p.a,{variant:"h5",component:"h2"},"Exhange Rate Calculator"),n.a.createElement(p.a,{color:"textSecondary"},"Choose the currency and the amounts to get the exchange rate")),n.a.createElement(i.a,{m:1},n.a.createElement(p.a,{variant:"body2",component:"p"},n.a.createElement(N.a,{id:"FromCurrency",defaultValue:"USD",onChange:function(e){return c(e.target.value)}},n.a.createElement(S.a,{value:"AED"},"AED"),n.a.createElement(S.a,{value:"ARS"},"ARS"),n.a.createElement(S.a,{value:"AUD"},"AUD"),n.a.createElement(S.a,{value:"BGN"},"BGN"),n.a.createElement(S.a,{value:"BRL"},"BRL"),n.a.createElement(S.a,{value:"BSD"},"BSD"),n.a.createElement(S.a,{value:"CAD"},"CAD"),n.a.createElement(S.a,{value:"CHF"},"CHF"),n.a.createElement(S.a,{value:"CLP"},"CLP"),n.a.createElement(S.a,{value:"CNY"},"CNY"),n.a.createElement(S.a,{value:"COP"},"COP"),n.a.createElement(S.a,{value:"CZK"},"CZK"),n.a.createElement(S.a,{value:"DKK"},"DKK"),n.a.createElement(S.a,{value:"DOP"},"DOP"),n.a.createElement(S.a,{value:"EGP"},"EGP"),n.a.createElement(S.a,{value:"EUR"},"EUR"),n.a.createElement(S.a,{value:"FJD"},"FJD"),n.a.createElement(S.a,{value:"GBP"},"GBP"),n.a.createElement(S.a,{value:"GTQ"},"GTQ"),n.a.createElement(S.a,{value:"HKD"},"HKD"),n.a.createElement(S.a,{value:"HRK"},"HRK"),n.a.createElement(S.a,{value:"HUF"},"HUF"),n.a.createElement(S.a,{value:"IDR"},"IDR"),n.a.createElement(S.a,{value:"ILS"},"ILS"),n.a.createElement(S.a,{value:"INR"},"INR"),n.a.createElement(S.a,{value:"ISK"},"ISK"),n.a.createElement(S.a,{value:"JPY"},"JPY"),n.a.createElement(S.a,{value:"KRW"},"KRW"),n.a.createElement(S.a,{value:"KZT"},"KZT"),n.a.createElement(S.a,{value:"MXN"},"MXN"),n.a.createElement(S.a,{value:"MYR"},"MYR"),n.a.createElement(S.a,{value:"NOK"},"NOK"),n.a.createElement(S.a,{value:"NZD"},"NZD"),n.a.createElement(S.a,{value:"PAB"},"PAB"),n.a.createElement(S.a,{value:"PEN"},"PEN"),n.a.createElement(S.a,{value:"PHP"},"PHP"),n.a.createElement(S.a,{value:"PKR"},"PKR"),n.a.createElement(S.a,{value:"PLN"},"PLN"),n.a.createElement(S.a,{value:"PYG"},"PYG"),n.a.createElement(S.a,{value:"RON"},"RON"),n.a.createElement(S.a,{value:"RUB"},"RUB"),n.a.createElement(S.a,{value:"SAR"},"SAR"),n.a.createElement(S.a,{value:"SEK"},"SEK"),n.a.createElement(S.a,{value:"SGD"},"SGD"),n.a.createElement(S.a,{value:"THB"},"THB"),n.a.createElement(S.a,{value:"TRY"},"TRY"),n.a.createElement(S.a,{value:"TWD"},"TWD"),n.a.createElement(S.a,{value:"UAH"},"UAH"),n.a.createElement(S.a,{value:"USD"},"USD"),n.a.createElement(S.a,{value:"UYU"},"UYU"),n.a.createElement(S.a,{value:"VND"},"VND"),n.a.createElement(S.a,{value:"ZAR"},"ZAR")),n.a.createElement(C.a,{placeholder:"0",type:"number",value:G,onChange:function(e){return b(e.target.value)}}))),n.a.createElement(i.a,{m:1,display:"flex",justifyContent:"flex-end"},n.a.createElement(p.a,{variant:"body2",component:"div"},n.a.createElement(U.a,{id:"btnExchange",variant:"contained",color:"primary",onClick:I},"Exchange"),n.a.createElement("label",{id:"swap_rate"},O)," Rate")),n.a.createElement(i.a,{m:1},n.a.createElement(p.a,{variant:"body2",component:"p"},n.a.createElement(N.a,{id:"ToCurrency",defaultValue:"THB",onChange:function(e){return P(e.target.value)}},n.a.createElement(S.a,{value:"AED"},"AED"),n.a.createElement(S.a,{value:"ARS"},"ARS"),n.a.createElement(S.a,{value:"AUD"},"AUD"),n.a.createElement(S.a,{value:"BGN"},"BGN"),n.a.createElement(S.a,{value:"BRL"},"BRL"),n.a.createElement(S.a,{value:"BSD"},"BSD"),n.a.createElement(S.a,{value:"CAD"},"CAD"),n.a.createElement(S.a,{value:"CHF"},"CHF"),n.a.createElement(S.a,{value:"CLP"},"CLP"),n.a.createElement(S.a,{value:"CNY"},"CNY"),n.a.createElement(S.a,{value:"COP"},"COP"),n.a.createElement(S.a,{value:"CZK"},"CZK"),n.a.createElement(S.a,{value:"DKK"},"DKK"),n.a.createElement(S.a,{value:"DOP"},"DOP"),n.a.createElement(S.a,{value:"EGP"},"EGP"),n.a.createElement(S.a,{value:"EUR"},"EUR"),n.a.createElement(S.a,{value:"FJD"},"FJD"),n.a.createElement(S.a,{value:"GBP"},"GBP"),n.a.createElement(S.a,{value:"GTQ"},"GTQ"),n.a.createElement(S.a,{value:"HKD"},"HKD"),n.a.createElement(S.a,{value:"HRK"},"HRK"),n.a.createElement(S.a,{value:"HUF"},"HUF"),n.a.createElement(S.a,{value:"IDR"},"IDR"),n.a.createElement(S.a,{value:"ILS"},"ILS"),n.a.createElement(S.a,{value:"INR"},"INR"),n.a.createElement(S.a,{value:"ISK"},"ISK"),n.a.createElement(S.a,{value:"JPY"},"JPY"),n.a.createElement(S.a,{value:"KRW"},"KRW"),n.a.createElement(S.a,{value:"KZT"},"KZT"),n.a.createElement(S.a,{value:"MXN"},"MXN"),n.a.createElement(S.a,{value:"MYR"},"MYR"),n.a.createElement(S.a,{value:"NOK"},"NOK"),n.a.createElement(S.a,{value:"NZD"},"NZD"),n.a.createElement(S.a,{value:"PAB"},"PAB"),n.a.createElement(S.a,{value:"PEN"},"PEN"),n.a.createElement(S.a,{value:"PHP"},"PHP"),n.a.createElement(S.a,{value:"PKR"},"PKR"),n.a.createElement(S.a,{value:"PLN"},"PLN"),n.a.createElement(S.a,{value:"PYG"},"PYG"),n.a.createElement(S.a,{value:"RON"},"RON"),n.a.createElement(S.a,{value:"RUB"},"RUB"),n.a.createElement(S.a,{value:"SAR"},"SAR"),n.a.createElement(S.a,{value:"SEK"},"SEK"),n.a.createElement(S.a,{value:"SGD"},"SGD"),n.a.createElement(S.a,{value:"THB"},"THB"),n.a.createElement(S.a,{value:"TRY"},"TRY"),n.a.createElement(S.a,{value:"TWD"},"TWD"),n.a.createElement(S.a,{value:"UAH"},"UAH"),n.a.createElement(S.a,{value:"USD"},"USD"),n.a.createElement(S.a,{value:"UYU"},"UYU"),n.a.createElement(S.a,{value:"VND"},"VND"),n.a.createElement(S.a,{value:"ZAR"},"ZAR")),n.a.createElement(C.a,{placeholder:"0",type:"number",value:x}))))))};c.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(B,null)),document.getElementById("root"))}},[[69,1,2]]]);
//# sourceMappingURL=main.38fb2864.chunk.js.map