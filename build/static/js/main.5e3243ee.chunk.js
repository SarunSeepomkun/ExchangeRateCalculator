(this.webpackJsonpproject=this.webpackJsonpproject||[]).push([[0],{64:function(e,a,t){e.exports=t(91)},87:function(e,a,t){},91:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),r=t(7),c=t.n(r),u=t(25),E=t.n(u),m=t(34),v=t(30),o=t(51),s=t.n(o),R=function(){var e=Object(m.a)(E.a.mark((function e(a){var t,l,n;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a||(a="USD"),t="https://api.exchangerate-api.com/v4/latest/".concat(a),e.prev=2,e.next=5,s.a.get(t);case 5:return l=e.sent,n=l.data,e.abrupt("return",n);case 10:return e.prev=10,e.t0=e.catch(2),e.abrupt("return","Line 14 Exchange_rate.GetExchangeRate() , "+e.t0);case 13:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(a){return e.apply(this,arguments)}}(),D=(t(87),t(121)),i=t(125),P=t(126),N=t(130),p=t(133),K=t(131),S=t(129);var d=function(){var e=Object(l.useState)("USD"),a=Object(v.a)(e,2),t=a[0],r=a[1],c=Object(l.useState)("THB"),u=Object(v.a)(c,2),o=u[0],s=u[1],d=Object(l.useState)(),U=Object(v.a)(d,2),B=U[0],A=U[1],C=Object(l.useState)(1),H=Object(v.a)(C,2),O=H[0],f=H[1],G=Object(l.useState)(0),b=Object(v.a)(G,2),T=b[0],Y=b[1];Object(l.useEffect)((function(){h()}),[t,o,O]);var h=function(){var e=Object(m.a)(E.a.mark((function e(){var a;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R(t);case 2:a=e.sent,o||(o="THB"),A((function(){return B=a.rates[o].toFixed(2)})),Y((function(){return T=(B*O).toFixed(2)}));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return n.a.createElement("div",{className:"container"},n.a.createElement(D.a,{className:"container__card"},n.a.createElement(i.a,null,n.a.createElement("div",{className:"header"},n.a.createElement("p",{className:"textPrimary"},"Exhange Rate")),n.a.createElement("div",null,n.a.createElement(P.a,{variant:"body2",component:"p"},n.a.createElement(N.a,{id:"FromCurrency",defaultValue:"USD",value:t,onChange:function(e){return r(e.target.value)},className:"dropdown"},n.a.createElement(p.a,{value:"AED"},"AED"),n.a.createElement(p.a,{value:"ARS"},"ARS"),n.a.createElement(p.a,{value:"AUD"},"AUD"),n.a.createElement(p.a,{value:"BGN"},"BGN"),n.a.createElement(p.a,{value:"BRL"},"BRL"),n.a.createElement(p.a,{value:"BSD"},"BSD"),n.a.createElement(p.a,{value:"CAD"},"CAD"),n.a.createElement(p.a,{value:"CHF"},"CHF"),n.a.createElement(p.a,{value:"CLP"},"CLP"),n.a.createElement(p.a,{value:"CNY"},"CNY"),n.a.createElement(p.a,{value:"COP"},"COP"),n.a.createElement(p.a,{value:"CZK"},"CZK"),n.a.createElement(p.a,{value:"DKK"},"DKK"),n.a.createElement(p.a,{value:"DOP"},"DOP"),n.a.createElement(p.a,{value:"EGP"},"EGP"),n.a.createElement(p.a,{value:"EUR"},"EUR"),n.a.createElement(p.a,{value:"FJD"},"FJD"),n.a.createElement(p.a,{value:"GBP"},"GBP"),n.a.createElement(p.a,{value:"GTQ"},"GTQ"),n.a.createElement(p.a,{value:"HKD"},"HKD"),n.a.createElement(p.a,{value:"HRK"},"HRK"),n.a.createElement(p.a,{value:"HUF"},"HUF"),n.a.createElement(p.a,{value:"IDR"},"IDR"),n.a.createElement(p.a,{value:"ILS"},"ILS"),n.a.createElement(p.a,{value:"INR"},"INR"),n.a.createElement(p.a,{value:"ISK"},"ISK"),n.a.createElement(p.a,{value:"JPY"},"JPY"),n.a.createElement(p.a,{value:"KRW"},"KRW"),n.a.createElement(p.a,{value:"KZT"},"KZT"),n.a.createElement(p.a,{value:"MXN"},"MXN"),n.a.createElement(p.a,{value:"MYR"},"MYR"),n.a.createElement(p.a,{value:"NOK"},"NOK"),n.a.createElement(p.a,{value:"NZD"},"NZD"),n.a.createElement(p.a,{value:"PAB"},"PAB"),n.a.createElement(p.a,{value:"PEN"},"PEN"),n.a.createElement(p.a,{value:"PHP"},"PHP"),n.a.createElement(p.a,{value:"PKR"},"PKR"),n.a.createElement(p.a,{value:"PLN"},"PLN"),n.a.createElement(p.a,{value:"PYG"},"PYG"),n.a.createElement(p.a,{value:"RON"},"RON"),n.a.createElement(p.a,{value:"RUB"},"RUB"),n.a.createElement(p.a,{value:"SAR"},"SAR"),n.a.createElement(p.a,{value:"SEK"},"SEK"),n.a.createElement(p.a,{value:"SGD"},"SGD"),n.a.createElement(p.a,{value:"THB"},"THB"),n.a.createElement(p.a,{value:"TRY"},"TRY"),n.a.createElement(p.a,{value:"TWD"},"TWD"),n.a.createElement(p.a,{value:"UAH"},"UAH"),n.a.createElement(p.a,{value:"USD"},"USD"),n.a.createElement(p.a,{value:"UYU"},"UYU"),n.a.createElement(p.a,{value:"VND"},"VND"),n.a.createElement(p.a,{value:"ZAR"},"ZAR")),n.a.createElement(K.a,{placeholder:"0",type:"number",value:O,className:"text",onChange:function(e){return f(e.target.value)}}))),n.a.createElement("div",null,n.a.createElement(P.a,{variant:"body2",component:"p"},n.a.createElement(N.a,{id:"ToCurrency",defaultValue:"THB",value:o,onChange:function(e){return s(e.target.value)},className:"dropdown"},n.a.createElement(p.a,{value:"AED"},"AED"),n.a.createElement(p.a,{value:"ARS"},"ARS"),n.a.createElement(p.a,{value:"AUD"},"AUD"),n.a.createElement(p.a,{value:"BGN"},"BGN"),n.a.createElement(p.a,{value:"BRL"},"BRL"),n.a.createElement(p.a,{value:"BSD"},"BSD"),n.a.createElement(p.a,{value:"CAD"},"CAD"),n.a.createElement(p.a,{value:"CHF"},"CHF"),n.a.createElement(p.a,{value:"CLP"},"CLP"),n.a.createElement(p.a,{value:"CNY"},"CNY"),n.a.createElement(p.a,{value:"COP"},"COP"),n.a.createElement(p.a,{value:"CZK"},"CZK"),n.a.createElement(p.a,{value:"DKK"},"DKK"),n.a.createElement(p.a,{value:"DOP"},"DOP"),n.a.createElement(p.a,{value:"EGP"},"EGP"),n.a.createElement(p.a,{value:"EUR"},"EUR"),n.a.createElement(p.a,{value:"FJD"},"FJD"),n.a.createElement(p.a,{value:"GBP"},"GBP"),n.a.createElement(p.a,{value:"GTQ"},"GTQ"),n.a.createElement(p.a,{value:"HKD"},"HKD"),n.a.createElement(p.a,{value:"HRK"},"HRK"),n.a.createElement(p.a,{value:"HUF"},"HUF"),n.a.createElement(p.a,{value:"IDR"},"IDR"),n.a.createElement(p.a,{value:"ILS"},"ILS"),n.a.createElement(p.a,{value:"INR"},"INR"),n.a.createElement(p.a,{value:"ISK"},"ISK"),n.a.createElement(p.a,{value:"JPY"},"JPY"),n.a.createElement(p.a,{value:"KRW"},"KRW"),n.a.createElement(p.a,{value:"KZT"},"KZT"),n.a.createElement(p.a,{value:"MXN"},"MXN"),n.a.createElement(p.a,{value:"MYR"},"MYR"),n.a.createElement(p.a,{value:"NOK"},"NOK"),n.a.createElement(p.a,{value:"NZD"},"NZD"),n.a.createElement(p.a,{value:"PAB"},"PAB"),n.a.createElement(p.a,{value:"PEN"},"PEN"),n.a.createElement(p.a,{value:"PHP"},"PHP"),n.a.createElement(p.a,{value:"PKR"},"PKR"),n.a.createElement(p.a,{value:"PLN"},"PLN"),n.a.createElement(p.a,{value:"PYG"},"PYG"),n.a.createElement(p.a,{value:"RON"},"RON"),n.a.createElement(p.a,{value:"RUB"},"RUB"),n.a.createElement(p.a,{value:"SAR"},"SAR"),n.a.createElement(p.a,{value:"SEK"},"SEK"),n.a.createElement(p.a,{value:"SGD"},"SGD"),n.a.createElement(p.a,{value:"THB"},"THB"),n.a.createElement(p.a,{value:"TRY"},"TRY"),n.a.createElement(p.a,{value:"TWD"},"TWD"),n.a.createElement(p.a,{value:"UAH"},"UAH"),n.a.createElement(p.a,{value:"USD"},"USD"),n.a.createElement(p.a,{value:"UYU"},"UYU"),n.a.createElement(p.a,{value:"VND"},"VND"),n.a.createElement(p.a,{value:"ZAR"},"ZAR")),n.a.createElement(K.a,{placeholder:"0",type:"number",value:T,className:"text",InputProps:{readOnly:!0}}))),n.a.createElement("div",{className:"control"},n.a.createElement(K.a,{id:"swap_rate",className:"textRate",label:"Rate",value:B,defaultValue:"0.00",InputProps:{readOnly:!0},variant:"outlined"}),n.a.createElement(S.a,{id:"btnSwap",variant:"contained",color:"primary",onClick:function(){var e=t;r(o),s(e)},className:"swapButton"},"Swap"),n.a.createElement(S.a,{id:"btnExchange",variant:"contained",color:"primary",className:"exchangeButton",onClick:h},"Exchange")))))};c.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(d,null)),document.getElementById("root"))}},[[64,1,2]]]);
//# sourceMappingURL=main.5e3243ee.chunk.js.map