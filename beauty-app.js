// ../../../../Desktop/BeautyStudioCRM_v4.jsx
import { useState, useMemo, useEffect, useCallback } from "react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
var C = {
  rose: "#be185d",
  roseDk: "#9d174d",
  roseLt: "#fdf2f8",
  roseGl: "rgba(190,24,93,.09)",
  roseRing: "rgba(190,24,93,.18)",
  gold: "#b45309",
  goldLt: "#fffbeb",
  ink: "#1c0f17",
  slate: "#52334a",
  mist: "#9d7d92",
  fog: "#f8f4f7",
  snow: "#ffffff",
  border: "#ede0e9",
  green: "#166534",
  greenLt: "#f0fdf4",
  greenBd: "#bbf7d0",
  amber: "#92400e",
  amberLt: "#fffbeb",
  amberBd: "#fde68a",
  blue: "#1e40af",
  blueLt: "#eff6ff",
  blueBd: "#bfdbfe",
  purple: "#6d28d9",
  purpleLt: "#f5f3ff",
  purpleBd: "#ddd6fe",
  danger: "#991b1b",
  dangerLt: "#fff1f2",
  dangerBd: "#fecaca",
  shadow: "0 1px 3px rgba(28,15,23,.08),0 4px 16px rgba(28,15,23,.06)",
  shadowM: "0 4px 24px rgba(190,24,93,.14)",
  shadowL: "0 8px 48px rgba(190,24,93,.20)"
};
var USER_COLORS = ["#be185d", "#6d28d9", "#0369a1", "#15803d", "#b45309", "#9f1239"];
var hexToRgb = (hex) => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `${r},${g},${b}`;
};
var CSS = `
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,500;0,700;1,500&family=Outfit:wght@300;400;500;600;700&display=swap');
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
html{scroll-behavior:smooth}
body{font-family:'Outfit',sans-serif;background:${C.fog};color:${C.ink};-webkit-font-smoothing:antialiased}
::-webkit-scrollbar{width:5px}::-webkit-scrollbar-track{background:transparent}::-webkit-scrollbar-thumb{background:${C.border};border-radius:99px}
::selection{background:${C.roseLt};color:${C.rose}}
.shell{display:flex;min-height:100vh}
.sidebar{width:252px;min-width:252px;background:${C.ink};display:flex;flex-direction:column;position:sticky;top:0;height:100vh;overflow-y:auto;z-index:100}
.content{flex:1;min-width:0;display:flex;flex-direction:column}
.topbar{background:${C.snow};border-bottom:1px solid ${C.border};padding:13px 26px;display:flex;align-items:center;justify-content:space-between;gap:12px;flex-wrap:wrap;position:sticky;top:0;z-index:50}
.main{padding:22px 26px;flex:1}
.mobile-nav{display:none}
/* LOGIN */
.login-bg{min-height:100vh;background:linear-gradient(160deg,${C.ink} 0%,#3d1a30 60%,#1a0a14 100%);display:flex;align-items:center;justify-content:center;padding:24px;overflow:hidden;position:relative}
.login-bg::before{content:'\u2726';position:absolute;font-size:380px;color:rgba(190,24,93,.04);top:-60px;right:-60px;pointer-events:none}
.login-card{background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.10);border-radius:28px;padding:42px;max-width:410px;width:100%;backdrop-filter:blur(20px);box-shadow:0 24px 80px rgba(0,0,0,.4)}
.login-logo{text-align:center;margin-bottom:30px}
.login-logo-name{font-family:'Playfair Display',serif;font-size:28px;color:#fff}
.login-logo-tag{font-size:10px;color:rgba(255,255,255,.35);letter-spacing:2.5px;text-transform:uppercase;margin-top:4px}
.lprofile{display:flex;align-items:center;gap:14px;padding:13px 15px;border-radius:13px;border:1.5px solid rgba(255,255,255,.10);background:rgba(255,255,255,.04);cursor:pointer;transition:all .18s;margin-bottom:8px}
.lprofile:hover{background:rgba(255,255,255,.09);border-color:rgba(255,255,255,.22)}
.lprofile.sel{border-color:var(--uc);background:rgba(var(--ucr),.15)}
.lavatar{width:44px;height:44px;border-radius:13px;display:flex;align-items:center;justify-content:center;font-size:19px;font-weight:700;color:#fff;flex-shrink:0}
.lpname{font-size:15px;font-weight:700;color:#fff}
.lprole{font-size:12px;color:rgba(255,255,255,.4);margin-top:1px}
.pin-dots{display:flex;gap:12px;justify-content:center;margin:12px 0}
.pin-dot{width:14px;height:14px;border-radius:50%;border:2px solid rgba(255,255,255,.25);transition:all .15s}
.pin-dot.filled{background:${C.rose};border-color:${C.rose}}
.numpad{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-top:6px}
.numkey{padding:14px;border-radius:12px;border:1.5px solid rgba(255,255,255,.10);background:rgba(255,255,255,.05);color:#fff;font-size:18px;font-weight:600;cursor:pointer;transition:all .15s;font-family:'Outfit',sans-serif;text-align:center}
.numkey:hover{background:rgba(255,255,255,.12);border-color:rgba(255,255,255,.22)}
.numkey:active{transform:scale(.95)}
.pin-err{color:#fca5a5;font-size:13px;text-align:center;margin-top:8px;min-height:20px}
/* SIDEBAR */
.sb-logo{padding:18px 16px 14px;border-bottom:1px solid rgba(255,255,255,.07);display:flex;align-items:center;gap:11px}
.sb-logo-av{width:36px;height:36px;border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:16px;color:#fff;flex-shrink:0}
.sb-logo-name{font-family:'Playfair Display',serif;font-size:16px;color:#fff;line-height:1.2}
.sb-logo-tag{font-size:10px;color:rgba(255,255,255,.32);letter-spacing:2px;text-transform:uppercase;margin-top:2px}
.sb-user{padding:9px 13px;border-bottom:1px solid rgba(255,255,255,.07);display:flex;align-items:center;gap:9px;cursor:pointer}
.sb-user:hover{background:rgba(255,255,255,.04)}
.sb-uav{width:32px;height:32px;border-radius:9px;display:flex;align-items:center;justify-content:center;font-size:14px;color:#fff;flex-shrink:0}
.sb-uname{font-size:13px;font-weight:600;color:#fff;flex:1}
.sb-urole{font-size:11px;color:rgba(255,255,255,.38)}
.sb-out{font-size:11px;color:rgba(255,255,255,.28);padding:2px 7px;border-radius:6px;border:1px solid rgba(255,255,255,.10)}
.sb-nav{flex:1;padding:7px 7px}
.sb-sec{font-size:9.5px;color:rgba(255,255,255,.27);letter-spacing:2px;text-transform:uppercase;padding:10px 9px 4px}
.sb-btn{display:flex;align-items:center;gap:10px;width:100%;padding:9px 9px;border-radius:9px;border:none;cursor:pointer;font-size:13px;font-family:'Outfit',sans-serif;font-weight:500;color:rgba(255,255,255,.52);background:transparent;transition:all .15s;text-align:left;margin-bottom:1px;position:relative}
.sb-btn:hover{background:rgba(255,255,255,.07);color:rgba(255,255,255,.9)}
.sb-btn.active{background:linear-gradient(135deg,${C.rose},${C.roseDk});color:#fff;font-weight:600;box-shadow:0 4px 12px rgba(190,24,93,.35)}
.sb-btn .icon{font-size:14px;width:20px;text-align:center;flex-shrink:0}
.sb-badge{position:absolute;right:9px;top:50%;transform:translateY(-50%);background:${C.rose};color:#fff;border-radius:99px;font-size:10px;font-weight:700;padding:1px 6px;min-width:17px;text-align:center}
.sb-footer{padding:9px 7px;border-top:1px solid rgba(255,255,255,.07);display:flex;flex-direction:column;gap:5px}
.sf-btn{width:100%;padding:8px 12px;border-radius:8px;border:none;cursor:pointer;font-size:11.5px;font-family:'Outfit',sans-serif;font-weight:600;transition:all .15s;text-align:left}
.sf-btn.p{background:${C.rose};color:#fff}.sf-btn.p:hover{background:${C.roseDk}}
.sf-btn.g{background:rgba(255,255,255,.07);color:rgba(255,255,255,.58);border:1px solid rgba(255,255,255,.09)}.sf-btn.g:hover{background:rgba(255,255,255,.12)}
/* TOPBAR */
.tb-title{font-family:'Playfair Display',serif;font-size:24px;font-weight:700;color:${C.ink}}
.tb-sub{font-size:12.5px;color:${C.mist};margin-top:1px}
.tb-chips{display:flex;align-items:center;gap:7px;flex-wrap:wrap}
.chip{display:inline-flex;align-items:center;gap:5px;padding:4px 11px;border-radius:99px;font-size:12px;font-weight:600}
.chip-rose{background:${C.roseLt};color:${C.rose};border:1px solid ${C.roseRing}}
.chip-green{background:${C.greenLt};color:${C.green};border:1px solid ${C.greenBd}}
.chip-amber{background:${C.amberLt};color:${C.amber};border:1px solid ${C.amberBd}}
.chip-blue{background:${C.blueLt};color:${C.blue};border:1px solid ${C.blueBd}}
.chip-purple{background:${C.purpleLt};color:${C.purple};border:1px solid ${C.purpleBd}}
.chip-gray{background:${C.fog};color:${C.mist};border:1px solid ${C.border}}
/* NEXT BANNER */
.next-banner{border-radius:14px;padding:14px 18px;display:flex;align-items:center;justify-content:space-between;gap:12px;margin-bottom:18px;box-shadow:${C.shadowM}}
.nb-title{font-size:12px;font-weight:700;opacity:.85}
.nb-name{font-size:17px;font-weight:700;font-family:'Playfair Display',serif;color:#fff}
.nb-detail{font-size:12px;opacity:.72;margin-top:2px;color:#fff}
/* TOAST */
.toast-wrap{position:fixed;top:18px;right:18px;z-index:9999;display:flex;flex-direction:column;gap:7px;pointer-events:none}
.toast{background:${C.ink};color:#fff;border-radius:12px;padding:11px 16px;font-size:13px;font-weight:500;box-shadow:${C.shadowL};pointer-events:all;display:flex;align-items:center;gap:9px;animation:slideIn .25s ease;max-width:330px}
.toast.success{background:#14532d}.toast.error{background:#7f1d1d}.toast.warn{background:#78350f}.toast.info{background:${C.blue}}
@keyframes slideIn{from{transform:translateX(36px);opacity:0}to{transform:translateX(0);opacity:1}}
/* MODAL / LIGHTBOX */
.modal-bg{position:fixed;inset:0;background:rgba(28,15,23,.6);z-index:200;display:flex;align-items:center;justify-content:center;padding:20px;backdrop-filter:blur(4px)}
/* CARDS */
.card{background:${C.snow};border:1px solid ${C.border};border-radius:18px;padding:20px;box-shadow:${C.shadow}}
.card-title{font-family:'Playfair Display',serif;font-size:18px;font-weight:700;color:${C.ink};margin-bottom:4px}
.card-sub{font-size:13px;color:${C.mist};margin-bottom:14px}
/* METRIC */
.metric{background:${C.snow};border:1px solid ${C.border};border-radius:18px;padding:20px;box-shadow:${C.shadow};position:relative;overflow:hidden;transition:transform .15s,box-shadow .15s}
.metric:hover{transform:translateY(-2px);box-shadow:${C.shadowM}}
.metric::after{content:'';position:absolute;bottom:-18px;right:-18px;width:80px;height:80px;border-radius:50%;background:${C.roseGl}}
.metric-icon{font-size:20px;margin-bottom:11px}
.metric-lbl{font-size:10.5px;letter-spacing:1.5px;text-transform:uppercase;color:${C.mist};font-weight:600}
.metric-val{font-family:'Playfair Display',serif;font-size:26px;font-weight:700;color:${C.ink};margin-top:4px;line-height:1}
.metric-hlp{font-size:12px;color:${C.mist};margin-top:5px}
/* GRIDS */
.g4{display:grid;grid-template-columns:repeat(4,1fr);gap:14px;margin-bottom:18px}
.g3{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}
.g2{display:grid;grid-template-columns:1fr 1fr;gap:16px}
.g21{display:grid;grid-template-columns:1.35fr 1fr;gap:16px}
.gauto{display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:16px}
/* FORMS */
.fgrid{display:flex;flex-direction:column;gap:12px}
.frow{display:grid;grid-template-columns:1fr 1fr;gap:10px}
.flabel{font-size:10.5px;letter-spacing:1px;text-transform:uppercase;color:${C.mist};font-weight:600;display:block;margin-bottom:5px}
.ffield{display:flex;flex-direction:column}
input,textarea,select{width:100%;padding:9px 12px;border:1.5px solid ${C.border};border-radius:10px;background:${C.snow};color:${C.ink};font-size:13.5px;font-family:'Outfit',sans-serif;outline:none;transition:border-color .15s,box-shadow .15s}
input:focus,textarea:focus,select:focus{border-color:${C.rose};box-shadow:0 0 0 3px ${C.roseRing}}
input::placeholder,textarea::placeholder{color:${C.mist}}
textarea{resize:vertical;min-height:72px;line-height:1.5}
select{cursor:pointer}
/* BUTTONS */
.btn{display:inline-flex;align-items:center;justify-content:center;gap:7px;padding:9px 16px;border-radius:10px;border:none;cursor:pointer;font-size:13px;font-family:'Outfit',sans-serif;font-weight:600;transition:all .15s;white-space:nowrap;text-decoration:none}
.btn-p{background:${C.rose};color:#fff}.btn-p:hover{background:${C.roseDk};box-shadow:${C.shadowM}}
.btn-g{background:${C.snow};color:${C.ink};border:1.5px solid ${C.border}}.btn-g:hover{border-color:${C.rose};color:${C.rose}}
.btn-d{background:${C.dangerLt};color:${C.danger};border:1.5px solid ${C.dangerBd}}.btn-d:hover{background:#ffe4e6}
.btn-gr{background:${C.greenLt};color:${C.green};border:1.5px solid ${C.greenBd}}.btn-gr:hover{background:#dcfce7}
.btn-pu{background:${C.purpleLt};color:${C.purple};border:1.5px solid ${C.purpleBd}}
.btn-sm{padding:6px 11px;font-size:12px;border-radius:8px}
.btn-xs{padding:4px 8px;font-size:11px;border-radius:7px}
.btn-full{width:100%}
.btn-wa{background:#25d366;color:#fff;border:none}.btn-wa:hover{background:#1da851}
/* ROWS */
.row{display:flex;align-items:flex-start;justify-content:space-between;gap:11px;padding:12px 14px;border:1.5px solid ${C.border};border-radius:12px;background:${C.snow};margin-bottom:8px;transition:border-color .15s,box-shadow .15s}
.row:hover{border-color:${C.roseRing};box-shadow:0 2px 8px rgba(190,24,93,.06)}
.row-title{font-size:13.5px;font-weight:600;color:${C.ink}}
.row-sub{font-size:12px;color:${C.mist};margin-top:3px;line-height:1.4}
.row-extra{font-size:11px;color:${C.mist};margin-top:2px}
.row-actions{display:flex;gap:5px;flex-shrink:0;flex-wrap:wrap}
/* CLIENT CARDS */
.cc{display:flex;align-items:center;gap:10px;padding:10px 12px;border:1.5px solid ${C.border};border-radius:12px;cursor:pointer;margin-bottom:7px;background:${C.snow};transition:all .15s}
.cc:hover{border-color:${C.roseRing};box-shadow:0 2px 8px rgba(190,24,93,.06)}
.cc.sel{border-color:${C.rose};background:${C.roseLt}}
.cc-av{width:36px;height:36px;border-radius:10px;background:${C.roseLt};display:flex;align-items:center;justify-content:center;font-size:15px;flex-shrink:0}
.cc-name{font-size:13px;font-weight:600;color:${C.ink}}
.cc-info{font-size:11.5px;color:${C.mist};margin-top:2px}
/* INFO BOX */
.ibox{background:${C.fog};border-radius:10px;padding:10px 13px;margin-top:8px}
.ibox-lbl{font-size:10px;letter-spacing:1.5px;text-transform:uppercase;color:${C.mist};font-weight:700;margin-bottom:4px}
.ibox-val{font-size:13px;color:${C.ink};line-height:1.5}
/* SUMMARY */
.summary{background:linear-gradient(135deg,${C.roseLt},#fff0f7);border:1.5px solid ${C.roseRing};border-radius:12px;padding:12px 16px;display:flex;justify-content:space-between;align-items:center}
.summary-lbl{font-size:12px;color:${C.rose};font-weight:600}
.summary-val{font-family:'Playfair Display',serif;font-size:21px;color:${C.rose};font-weight:700}
hr{border:none;border-top:1px solid ${C.border};margin:15px 0}
/* ALERTS */
.alert{border-radius:10px;padding:10px 13px;font-size:13px;font-weight:600;margin-bottom:11px;display:flex;align-items:flex-start;gap:8px}
.alert-amber{background:${C.amberLt};color:${C.amber};border:1px solid ${C.amberBd}}
.alert-rose{background:${C.roseLt};color:${C.rose};border:1px solid ${C.roseRing}}
.alert-green{background:${C.greenLt};color:${C.green};border:1px solid ${C.greenBd}}
/* CALENDAR */
.cal-nav{display:flex;align-items:center;justify-content:space-between;margin-bottom:12px}
.cal-month{font-family:'Playfair Display',serif;font-size:18px;font-weight:700;text-transform:capitalize;color:${C.ink}}
.cal-wds{display:grid;grid-template-columns:repeat(7,1fr);gap:3px;margin-bottom:4px}
.cal-wd{text-align:center;font-size:10px;font-weight:700;color:${C.mist};padding:3px 0;letter-spacing:.5px}
.cal-grid{display:grid;grid-template-columns:repeat(7,1fr);gap:3px}
.cal-day{min-height:66px;border-radius:9px;border:1.5px solid ${C.border};background:${C.snow};padding:6px;cursor:pointer;text-align:left;transition:all .15s;position:relative;overflow:hidden}
.cal-day:hover{border-color:${C.roseRing}}
.cal-day.active{border-color:${C.rose};background:${C.roseLt};box-shadow:${C.shadowM}}
.cal-day.om{opacity:.36}
.cal-day.tod{border-color:${C.rose}55}
.cal-dn{font-size:12px;font-weight:700}
.cal-dots{display:flex;flex-direction:column;gap:2px;margin-top:4px}
.cal-dot{font-size:9px;font-weight:700;color:${C.rose};background:${C.roseLt};border-radius:4px;padding:1px 4px;width:fit-content}
.cal-hol{font-size:9px;color:${C.amber};font-weight:700;margin-top:2px}
.cal-stripe{height:3px;border-radius:2px;margin-bottom:2px}
.cal-uf{display:flex;gap:5px;flex-wrap:wrap;margin-bottom:10px}
.uf-btn{padding:4px 11px;border-radius:99px;font-size:11.5px;font-weight:600;cursor:pointer;border:2px solid transparent;transition:all .15s;color:#fff}
/* CHECKLIST */
.cl{display:flex;flex-direction:column;gap:5px;margin-top:7px;max-height:210px;overflow-y:auto}
.cl-item{display:flex;align-items:center;gap:9px;padding:9px 12px;border:1.5px solid ${C.border};border-radius:9px;cursor:pointer;transition:all .15s;background:${C.snow}}
.cl-item.sel{border-color:${C.rose};background:${C.roseLt}}
.cl-item input{width:auto;accent-color:${C.rose}}
.cl-text{font-size:12.5px;color:${C.ink};flex:1}
.cl-price{font-size:11.5px;color:${C.mist};flex-shrink:0}
/* STOCK CHECKLIST */
.scl{display:flex;flex-direction:column;gap:5px;margin-top:6px;max-height:190px;overflow-y:auto}
.scl-item{display:flex;align-items:center;gap:9px;padding:9px 12px;border:1.5px solid ${C.border};border-radius:9px;cursor:pointer;transition:all .15s;background:${C.snow}}
.scl-item.sel{border-color:${C.amber};background:${C.amberLt}}
.scl-item input[type=checkbox]{width:auto;accent-color:${C.amber}}
/* PHOTO */
.photo-lbl{display:flex;flex-direction:column;align-items:center;justify-content:center;height:130px;border:2px dashed ${C.border};border-radius:11px;cursor:pointer;text-align:center;gap:7px;transition:border-color .15s;overflow:hidden;background:${C.fog}}
.photo-lbl:hover{border-color:${C.rose}}
/* PROGRESS */
.prog-track{height:5px;background:${C.fog};border-radius:99px;overflow:hidden;margin-top:6px}
.prog-bar{height:100%;border-radius:99px;transition:width .3s}
/* CHART */
.chart-col{display:flex;flex-direction:column;align-items:stretch;flex:1}
.chart-bar{flex:1;border-radius:6px 6px 0 0;transition:all .3s;cursor:pointer;position:relative;min-width:0}
.chart-bar:hover::after{content:attr(data-tip);position:absolute;bottom:100%;left:50%;transform:translateX(-50%);background:${C.ink};color:#fff;border-radius:6px;padding:3px 7px;font-size:10.5px;font-weight:600;white-space:nowrap;margin-bottom:5px;pointer-events:none;z-index:10}
.chart-lbl{font-size:9px;color:${C.mist};text-align:center;margin-top:4px;font-weight:600}
/* SEARCH */
.search-wrap{position:relative;margin-bottom:11px}
.search-wrap input{padding-left:34px}
.search-icon{position:absolute;left:11px;top:50%;transform:translateY(-50%);font-size:13px;color:${C.mist};pointer-events:none}
/* MISC */
.empty{border:2px dashed ${C.border};border-radius:12px;padding:26px;text-align:center;color:${C.mist};font-size:13px}
.st{font-size:10.5px;letter-spacing:1.8px;text-transform:uppercase;color:${C.mist};font-weight:700;margin-bottom:9px}
.sl{max-height:390px;overflow-y:auto;padding-right:2px}
.tab-pills{display:flex;gap:6px;flex-wrap:wrap;margin-bottom:14px}
.tab-pill{padding:5px 13px;border-radius:99px;font-size:12px;font-weight:600;cursor:pointer;border:1.5px solid ${C.border};background:${C.snow};color:${C.slate};transition:all .15s}
.tab-pill.active{background:${C.rose};color:#fff;border-color:${C.rose}}
.period-selector{display:flex;gap:5px;flex-wrap:wrap;margin-bottom:14px}
.period-btn{padding:5px 13px;border-radius:8px;font-size:12px;font-weight:600;cursor:pointer;border:1.5px solid ${C.border};background:${C.snow};color:${C.mist};transition:all .15s}
.period-btn.active{background:${C.rose};color:#fff;border-color:${C.rose}}
.goal-track{height:9px;background:${C.fog};border-radius:99px;overflow:hidden;margin:7px 0}
.goal-bar{height:100%;background:linear-gradient(90deg,${C.rose},${C.roseDk});border-radius:99px;transition:width .5s}
.gallery{display:grid;grid-template-columns:repeat(auto-fill,minmax(95px,1fr));gap:7px;margin-top:9px}
.gallery-img{width:100%;aspect-ratio:1;object-fit:cover;border-radius:9px;cursor:pointer;transition:transform .15s}
.gallery-img:hover{transform:scale(1.04)}
.bday-row{display:flex;align-items:center;gap:9px;padding:9px 11px;background:${C.roseLt};border-radius:9px;margin-bottom:6px}
.conflict-banner{background:${C.dangerLt};border:1.5px solid ${C.dangerBd};border-radius:10px;padding:10px 13px;font-size:13px;font-weight:600;color:${C.danger};margin-bottom:9px}
.earn-row{display:flex;align-items:center;gap:10px;padding:9px 13px;border-radius:10px;margin-bottom:6px}
/* MSG */
.msg-tmpl{padding:12px 14px;border:1.5px solid ${C.border};border-radius:12px;background:${C.snow};margin-bottom:8px;cursor:pointer;transition:all .15s}
.msg-tmpl:hover{border-color:${C.rose};background:${C.roseLt}}
.msg-tmpl-title{font-size:13px;font-weight:700;color:${C.ink};margin-bottom:3px}
.msg-tmpl-body{font-size:12px;color:${C.mist};line-height:1.5}
/* AI */
.ai-loading{display:flex;gap:4px;align-items:center;padding:10px 0}
.ai-dot{width:7px;height:7px;border-radius:50%;background:${C.purple};animation:aib .8s ease infinite}
.ai-dot:nth-child(2){animation-delay:.15s}.ai-dot:nth-child(3){animation-delay:.3s}
@keyframes aib{0%,80%,100%{transform:scale(.7);opacity:.5}40%{transform:scale(1);opacity:1}}
/* PUBLIC */
.pub-bg{min-height:100vh;background:linear-gradient(160deg,${C.ink} 0%,#3d1a30 100%);display:flex;align-items:center;justify-content:center;padding:24px}
.pub-card{background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.10);border-radius:24px;padding:34px;max-width:430px;width:100%;backdrop-filter:blur(20px)}
.pub-card.wide{max-width:860px}
.pub-title{font-family:'Playfair Display',serif;font-size:26px;color:#fff;text-align:center;margin-bottom:4px}
.pub-sub{font-size:13px;color:rgba(255,255,255,.45);text-align:center;margin-bottom:26px}
.pub-card .flabel{color:rgba(255,255,255,.42)}
.pub-input{background:rgba(255,255,255,.08)!important;border:1.5px solid rgba(255,255,255,.15)!important;color:#fff!important;border-radius:11px!important}
.pub-input::placeholder{color:rgba(255,255,255,.28)!important}
.pub-btn{background:${C.rose};color:#fff;width:100%;padding:12px;border-radius:11px;border:none;font-family:'Outfit',sans-serif;font-size:15px;font-weight:700;cursor:pointer;margin-top:5px;transition:background .15s}
.pub-btn:hover{background:${C.roseDk}}
.pub-muted{color:rgba(255,255,255,.46);font-size:12px;line-height:1.5}
.pub-days{display:grid;grid-template-columns:repeat(7,1fr);gap:7px;margin:16px 0}
.pub-day{border:1.5px solid rgba(255,255,255,.12);background:rgba(255,255,255,.06);border-radius:12px;padding:10px 8px;color:#fff;cursor:pointer;text-align:left;font-family:'Outfit',sans-serif;transition:all .15s}
.pub-day:hover{border-color:rgba(255,255,255,.26);background:rgba(255,255,255,.10)}
.pub-day.active{border-color:${C.rose};background:rgba(190,24,93,.26);box-shadow:0 6px 22px rgba(190,24,93,.22)}
.pub-day-name{font-size:10px;letter-spacing:1px;text-transform:uppercase;color:rgba(255,255,255,.4);font-weight:700}
.pub-day-num{font-family:'Playfair Display',serif;font-size:23px;font-weight:700;margin-top:2px}
.pub-day-count{font-size:11px;color:rgba(255,255,255,.55);margin-top:2px}
.pub-cal{border:1px solid rgba(255,255,255,.12);background:rgba(255,255,255,.045);border-radius:18px;padding:16px;margin:16px 0}
.pub-cal-nav{display:flex;align-items:center;justify-content:space-between;gap:10px;margin-bottom:13px}
.pub-cal-title{font-family:'Playfair Display',serif;font-size:22px;font-weight:700;color:#fff;text-transform:capitalize}
.pub-cal-wds{display:grid;grid-template-columns:repeat(7,1fr);gap:6px;margin-bottom:6px}
.pub-cal-wd{text-align:center;font-size:10px;font-weight:800;letter-spacing:1px;text-transform:uppercase;color:rgba(255,255,255,.36);padding:3px 0}
.pub-cal-grid{display:grid;grid-template-columns:repeat(7,1fr);gap:6px}
.pub-cal-day{min-height:76px;border:1.5px solid rgba(255,255,255,.10);background:rgba(255,255,255,.055);border-radius:13px;padding:9px;text-align:left;color:#fff;cursor:pointer;font-family:'Outfit',sans-serif;transition:all .15s}
.pub-cal-day:hover{border-color:rgba(255,255,255,.28);background:rgba(255,255,255,.09)}
.pub-cal-day.active{border-color:${C.rose};background:rgba(190,24,93,.28);box-shadow:0 8px 28px rgba(190,24,93,.24)}
.pub-cal-day.om{opacity:.3}
.pub-cal-day.past{opacity:.24;cursor:not-allowed}
.pub-cal-day.empty-day{border-style:dashed}
.pub-cal-num{font-size:14px;font-weight:800}
.pub-cal-count{font-size:10.5px;color:rgba(255,255,255,.56);margin-top:7px;line-height:1.2}
.pub-slot-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(150px,1fr));gap:8px;margin-top:11px}
.pub-slot{border:1.5px solid rgba(255,255,255,.12);background:rgba(255,255,255,.07);border-radius:12px;padding:10px 12px;color:#fff;display:flex;align-items:center;justify-content:space-between;gap:8px}
.pub-slot-time{font-size:15px;font-weight:800}
.pub-slot-user{font-size:11px;color:rgba(255,255,255,.5);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.pub-summary{background:rgba(190,24,93,.14);border:1px solid rgba(190,24,93,.35);border-radius:13px;padding:13px 15px;display:flex;align-items:center;justify-content:space-between;gap:12px}
.pub-pros{display:flex;gap:8px;flex-wrap:wrap}
.pub-pro{border:1.5px solid rgba(255,255,255,.13);background:rgba(255,255,255,.065);border-radius:999px;color:#fff;padding:8px 12px;font-size:12.5px;font-weight:800;font-family:'Outfit',sans-serif;cursor:pointer;transition:all .15s}
.pub-pro:hover{border-color:rgba(255,255,255,.28);background:rgba(255,255,255,.1)}
.pub-pro.active{border-color:${C.rose};background:rgba(190,24,93,.34);box-shadow:0 5px 18px rgba(190,24,93,.22)}
.codebox{font-family:ui-monospace,SFMono-Regular,Consolas,'Liberation Mono',monospace;font-size:11.5px;line-height:1.45;background:${C.ink};color:#fff;border-radius:10px;border:1px solid rgba(255,255,255,.12);padding:12px;white-space:pre-wrap;max-height:240px;overflow:auto}
.cloud-dot{width:9px;height:9px;border-radius:50%;display:inline-block}
.cloud-ok{background:${C.green}}.cloud-warn{background:${C.amber}}.cloud-off{background:${C.mist}}.cloud-err{background:${C.danger}}
@media(max-width:1280px){.g4{grid-template-columns:repeat(2,1fr)}}
@media(max-width:960px){.sidebar{display:none}.topbar{padding:12px 14px}.mobile-nav{display:block;max-width:280px}.main{padding:14px}.g4{grid-template-columns:1fr 1fr}.g3,.g2,.g21{grid-template-columns:1fr}}
@media(max-width:600px){.topbar{align-items:stretch}.mobile-nav{max-width:none}.tb-chips{width:100%}.g4{grid-template-columns:1fr}.frow{grid-template-columns:1fr}.pub-card{padding:24px}.pub-days{grid-template-columns:repeat(2,1fr)}.pub-cal{padding:11px}.pub-cal-grid,.pub-cal-wds{gap:4px}.pub-cal-day{min-height:58px;padding:6px;border-radius:10px}.pub-cal-count{font-size:9px}.pub-summary{align-items:flex-start;flex-direction:column}}
`;
var todayISO = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
var uid = () => Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
var money = (v) => new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(Number(v || 0));
var addDays = (iso, n) => {
  const d = /* @__PURE__ */ new Date(iso + "T12:00:00");
  d.setDate(d.getDate() + Number(n));
  return d.toISOString().slice(0, 10);
};
var daysBetween = (iso) => Math.ceil((/* @__PURE__ */ new Date(iso + "T12:00:00") - /* @__PURE__ */ new Date(todayISO + "T12:00:00")) / 864e5);
var fmtDate = (iso) => {
  if (!iso || !String(iso).includes("-")) return "\u2014";
  const [y, m, d] = String(iso).split("-");
  return `${d}/${m}/${y}`;
};
var fmtMonth = (iso) => new Intl.DateTimeFormat("pt-BR", { month: "long", year: "numeric" }).format(/* @__PURE__ */ new Date(iso + "T12:00:00"));
var fmtShortM = (iso) => new Intl.DateTimeFormat("pt-BR", { month: "short" }).format(/* @__PURE__ */ new Date(iso + "T12:00:00")).replace(".", "");
var startOfMonth = (iso) => iso.slice(0, 8) + "01";
var shiftMonth = (iso, n) => {
  const d = /* @__PURE__ */ new Date(iso + "T12:00:00");
  d.setMonth(d.getMonth() + n, 1);
  return d.toISOString().slice(0, 10);
};
var calDays = (m) => {
  const first = /* @__PURE__ */ new Date(startOfMonth(m) + "T12:00:00");
  const sw = first.getDay();
  const s = new Date(first);
  s.setDate(first.getDate() - sw);
  return Array.from({ length: 42 }, (_, i) => {
    const d = new Date(s);
    d.setDate(s.getDate() + i);
    return d.toISOString().slice(0, 10);
  });
};
var f2b64 = (f) => new Promise((res, rej) => {
  if (!f.type?.startsWith("image/")) {
    const r2 = new FileReader();
    r2.onload = () => res(r2.result);
    r2.onerror = rej;
    r2.readAsDataURL(f);
    return;
  }
  const r = new FileReader();
  r.onerror = rej;
  r.onload = () => {
    const img = new Image();
    img.onerror = rej;
    img.onload = () => {
      const max = 1200;
      const ratio = Math.min(1, max / Math.max(img.width, img.height));
      const canvas = document.createElement("canvas");
      canvas.width = Math.round(img.width * ratio);
      canvas.height = Math.round(img.height * ratio);
      const ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      res(canvas.toDataURL("image/jpeg", 0.82));
    };
    img.src = r.result;
  };
  r.readAsDataURL(f);
});
var onlyNums = (s) => String(s || "").replace(/\D/g, "");
var normalizeWaPhone = (phone) => {
  const n = onlyNums(phone);
  if (!n) return "";
  return n.startsWith("55") ? n : `55${n}`;
};
var waLink = (phone, msg) => `https://wa.me/${normalizeWaPhone(phone)}?text=${encodeURIComponent(msg)}`;
var isBdayMonth = (b, m) => b && b.slice(5, 7) === m.slice(5, 7);
var isBdayToday = (b) => b && b.slice(5) === todayISO.slice(5);
var t2min = (t) => {
  const [h = "0", m = "0"] = String(t || "00:00").split(":");
  return parseInt(h || 0) * 60 + parseInt(m || 0);
};
var min2t = (min) => `${String(Math.floor(min / 60)).padStart(2, "0")}:${String(min % 60).padStart(2, "0")}`;
var WORK_START = 9 * 60;
var WORK_END = 19 * 60;
var SLOT_STEP = 30;
var BLOCKING_STATUSES = ["Agendado", "Confirmado", "Em atendimento"];
var CLOUD_CFG_KEY = "bapp-cloud-v1";
var CLOUD_TABLE = "beauty_workspaces";
var DEFAULT_WORKSPACE_ID = "beauty-studio-karina-ket";
var DEFAULT_SUPABASE_URL = "https://taeojfhhuuvuitvoghal.supabase.co";
var DEFAULT_SUPABASE_PUBLIC_KEY = "sb_publishable_QRagVmcRiofjkQu5thvnZg_WHV9e7iB";
var DEFAULT_CLOUD_CONFIG = {
  enabled: !!(DEFAULT_SUPABASE_URL && DEFAULT_SUPABASE_PUBLIC_KEY),
  url: DEFAULT_SUPABASE_URL,
  anonKey: DEFAULT_SUPABASE_PUBLIC_KEY,
  workspaceId: DEFAULT_WORKSPACE_ID,
  lastSync: ""
};
var normalizeCloudConfig = (saved = {}) => {
  const hasSavedAccess = !!(saved.url || saved.anonKey);
  return {
    ...DEFAULT_CLOUD_CONFIG,
    ...saved,
    url: saved.url || DEFAULT_CLOUD_CONFIG.url,
    anonKey: saved.anonKey || DEFAULT_CLOUD_CONFIG.anonKey,
    workspaceId: saved.workspaceId || DEFAULT_WORKSPACE_ID,
    enabled: hasSavedAccess ? saved.enabled ?? DEFAULT_CLOUD_CONFIG.enabled : DEFAULT_CLOUD_CONFIG.enabled
  };
};
var SUPABASE_SQL = `create table if not exists public.beauty_workspaces (
  workspace_id text primary key,
  data jsonb not null,
  updated_at timestamptz not null default now()
);

alter table public.beauty_workspaces enable row level security;

grant usage on schema public to anon, authenticated;
grant select, insert, update on public.beauty_workspaces to anon, authenticated;

drop policy if exists "beauty workspace read" on public.beauty_workspaces;
drop policy if exists "beauty workspace insert" on public.beauty_workspaces;
drop policy if exists "beauty workspace update" on public.beauty_workspaces;

create policy "beauty workspace read"
on public.beauty_workspaces
for select
to anon, authenticated
using (workspace_id = 'beauty-studio-karina-ket');

create policy "beauty workspace insert"
on public.beauty_workspaces
for insert
to anon, authenticated
with check (workspace_id = 'beauty-studio-karina-ket');

create policy "beauty workspace update"
on public.beauty_workspaces
for update
to anon, authenticated
using (workspace_id = 'beauty-studio-karina-ket')
with check (workspace_id = 'beauty-studio-karina-ket');`;
var stockDeltas = (before = [], after = []) => {
  const map = /* @__PURE__ */ new Map();
  before.forEach((s) => map.set(s.productId, (map.get(s.productId) || 0) - Number(s.qty || 0)));
  after.forEach((s) => map.set(s.productId, (map.get(s.productId) || 0) + Number(s.qty || 0)));
  return [...map.entries()].filter(([, qty]) => qty !== 0).map(([productId, qty]) => ({ productId, qty }));
};
var localAiMessage = ({ prompt, studio, client, appointments, attendances, techMap }) => {
  const p = prompt.toLowerCase();
  const first = "{nome}";
  const studioName = "{studio}";
  const lastAtt = client ? attendances.filter((a) => a.clientId === client.id).sort((a, b) => b.date.localeCompare(a.date))[0] : null;
  const servico = lastAtt ? lastAtt.itemIds.map((id) => techMap[id]?.name).filter(Boolean).join(" + ") : "{servico}";
  const nextAppt = client ? appointments.filter((a) => a.clientId === client.id && a.date >= todayISO).sort((a, b) => a.date.localeCompare(b.date))[0] : null;
  if (p.includes("anivers")) return `Parab\xE9ns, ${first}! \u{1F389} O ${studioName} te deseja um dia lindo, cheio de cuidado e beleza. Quando quiser se mimar, vamos amar te receber. \u2728`;
  if (p.includes("sumiu") || p.includes("falta") || p.includes("retenc")) return `Oi, ${first}! \u{1F338} Sentimos sua falta por aqui. Que tal reservar um hor\xE1rio para renovar seu ${servico}? Vai ser um prazer te receber novamente.`;
  if (p.includes("retorno") || p.includes("manuten")) return `Oi, ${first}! \u{1F338} Est\xE1 chegando o momento ideal para o retorno de ${servico}. Quer que eu veja um hor\xE1rio especial para voc\xEA?`;
  if (p.includes("promo") || p.includes("desconto") || p.includes("oferta")) return `Oi, ${first}! \u2728 O ${studioName} preparou uma condi\xE7\xE3o especial para voc\xEA hoje. Quer aproveitar e garantir seu hor\xE1rio?`;
  if (p.includes("confirm")) return `Oi, ${first}! \u{1F338} Passando para confirmar seu agendamento${nextAppt ? ` para ${fmtDate(nextAppt.date)} \xE0s ${nextAppt.time}` : ""}. Pode me confirmar, por favor?`;
  if (p.includes("lembrete")) return `Oi, ${first}! \u{1F338} Lembrete carinhoso do seu hor\xE1rio${nextAppt ? ` em ${fmtDate(nextAppt.date)} \xE0s ${nextAppt.time}` : ""}. Estamos te esperando.`;
  return `Oi, ${first}! \u{1F338} ${prompt.trim()} Passando com carinho pelo ${studioName}. Quer que eu te ajude a escolher o melhor hor\xE1rio?`;
};
var STATUS_CFG = {
  "Agendado": { cls: "chip-blue" },
  "Confirmado": { cls: "chip-green" },
  "Em atendimento": { cls: "chip-rose" },
  "Finalizado": { cls: "chip-gray" },
  "Cancelado": { cls: "chip-gray" },
  "N\xE3o compareceu": { cls: "chip-amber" }
};
var CATS = ["C\xEDlios", "Sobrancelha", "Unhas", "Outros"];
var STATUSES = ["Agendado", "Confirmado", "Em atendimento", "Finalizado", "Cancelado", "N\xE3o compareceu"];
var REMINDERS = ["Sem aviso", "30 minutos antes", "1 hora antes", "1 dia antes"];
var MSG_CATS = ["todos", "agenda", "lembrete", "retorno", "especial", "retencao", "marketing"];
var INIT = {
  users: [
    { id: "u1", name: "Administradora", role: "Admin", pin: "1234", color: "#be185d", emoji: "\u{1F451}" },
    { id: "u2", name: "Karina", role: "Profissional", pin: "5678", color: "#6d28d9", emoji: "\u{1F485}" },
    { id: "u3", name: "Juliana", role: "Profissional", pin: "0000", color: "#0369a1", emoji: "\u2728" }
  ],
  clients: [
    { id: "c1", name: "Mariana Souza", phone: "47999991111", birthDate: "1998-05-22", allergies: "Sens\xEDvel a cola forte", lashMap: "Curvatura D, espessura 0.07, tamanho 9 a 12", brow: "Henna castanho claro, design natural", nails: "Nude, formato amendoado", notes: "Gosta de c\xEDlios volume brasileiro.", contacted: false },
    { id: "c2", name: "Camila Pereira", phone: "47988882222", birthDate: "1995-09-10", allergies: "Sem alergias", lashMap: "Volume brasileiro, curvatura C", brow: "Sobrancelha mais marcada", nails: "Francesinha ou nude", notes: "Prefere atendimento \xE0 tarde.", contacted: false },
    { id: "c3", name: "Fernanda Lima", phone: "47977773333", birthDate: "2000-05-12", allergies: "Nenhuma", lashMap: "Curvatura C, fio a fio", brow: "Design simples", nails: "Gel nude", notes: "", contacted: false }
  ],
  techniques: [
    { id: "t1", category: "C\xEDlios", name: "Fio a fio", price: 120, duration: 120, returnDays: 20, materialCost: 18, active: true, stockUse: "Pads, cola e fios", notes: "Efeito cl\xE1ssico." },
    { id: "t2", category: "C\xEDlios", name: "Volume brasileiro", price: 140, duration: 150, returnDays: 18, materialCost: 22, active: true, stockUse: "Pads, cola e fios", notes: "Efeito marcante." },
    { id: "t3", category: "C\xEDlios", name: "Manuten\xE7\xE3o de c\xEDlios", price: 90, duration: 90, returnDays: 18, materialCost: 12, active: true, stockUse: "Cola e fios", notes: "" },
    { id: "t4", category: "Sobrancelha", name: "Design simples", price: 45, duration: 40, returnDays: 25, materialCost: 5, active: true, stockUse: "Algod\xE3o e pin\xE7a", notes: "" },
    { id: "t5", category: "Sobrancelha", name: "Design com henna", price: 65, duration: 60, returnDays: 20, materialCost: 8, active: true, stockUse: "1 dose de henna", notes: "" },
    { id: "t6", category: "Unhas", name: "Unhas em gel", price: 130, duration: 150, returnDays: 25, materialCost: 28, active: true, stockUse: "Gel, lixa e top coat", notes: "" }
  ],
  coupons: [
    { id: "cp1", code: "PRIMEIRA10", type: "percent", value: 10, active: true },
    { id: "cp2", code: "VOLTA20", type: "fixed", value: 20, active: true }
  ],
  combos: [
    { id: "cb1", name: "Combo Olhar", itemIds: ["t2", "t5"], price: 190, duration: 210 },
    { id: "cb2", name: "Combo Completa", itemIds: ["t5", "t6"], price: 180, duration: 210 }
  ],
  products: [
    { id: "p1", name: "Cola de c\xEDlios", category: "C\xEDlios", unit: "ml", quantity: 10, minQuantity: 3, cost: 65, usagePerService: 1 },
    { id: "p2", name: "Henna castanho claro", category: "Sobrancelha", unit: "dose", quantity: 2, minQuantity: 3, cost: 35, usagePerService: 1 },
    { id: "p3", name: "Top coat", category: "Unhas", unit: "ml", quantity: 20, minQuantity: 5, cost: 22, usagePerService: 2 }
  ],
  holidays: [
    { id: "h1", date: "2026-01-01", name: "Confraterniza\xE7\xE3o Universal" },
    { id: "h2", date: "2026-05-01", name: "Dia do Trabalho" },
    { id: "h4", date: "2026-12-25", name: "Natal" }
  ],
  appointments: [
    { id: "a1", clientId: "c1", userId: "u2", date: todayISO, time: "09:00", itemIds: ["t5"], comboId: "", status: "Agendado", discount: 0, couponCode: "", reminder: "30 minutos antes", notes: "Sem atraso." },
    { id: "a2", clientId: "c2", userId: "u1", date: todayISO, time: "14:30", itemIds: ["t2", "t4"], comboId: "", status: "Confirmado", discount: 10, couponCode: "", reminder: "30 minutos antes", notes: "" },
    { id: "a3", clientId: "c3", userId: "u3", date: addDays(todayISO, 2), time: "10:00", itemIds: ["t6"], comboId: "", status: "Agendado", discount: 0, couponCode: "", reminder: "1 dia antes", notes: "" }
  ],
  attendances: [
    { id: "at1", clientId: "c1", userId: "u2", date: addDays(todayISO, -12), itemIds: ["t5"], value: 65, discount: 0, materialCost: 8, nextReturnDate: addDays(addDays(todayISO, -12), 20), stockUsed: [{ productId: "p2", qty: 1 }], productsUsed: "Henna castanho claro", notes: "Mapeamento natural.", beforePhoto: "", afterPhoto: "" },
    { id: "at2", clientId: "c2", userId: "u1", date: addDays(todayISO, -5), itemIds: ["t2"], value: 140, discount: 0, materialCost: 22, nextReturnDate: addDays(addDays(todayISO, -5), 18), stockUsed: [{ productId: "p1", qty: 1 }], productsUsed: "Cola e fios", notes: "", beforePhoto: "", afterPhoto: "" },
    { id: "at3", clientId: "c3", userId: "u3", date: addDays(todayISO, -8), itemIds: ["t6"], value: 130, discount: 0, materialCost: 28, nextReturnDate: addDays(addDays(todayISO, -8), 25), stockUsed: [{ productId: "p3", qty: 2 }], productsUsed: "Gel e top coat", notes: "", beforePhoto: "", afterPhoto: "" }
  ],
  links: { whatsapp: "5547999991111", instagram: "https://instagram.com/", location: "https://maps.google.com/" },
  goal: { monthly: 2e3 },
  studio: { name: "Beauty Studio", tagline: "Real\xE7ando sua beleza natural" },
  msgTemplates: [
    { id: "m1", title: "Confirma\xE7\xE3o de agendamento", category: "agenda", body: "Oi {nome}! \u{1F338} Confirmando seu agendamento para {data} \xE0s {hora}. Nos vemos em breve! \u{1F495}" },
    { id: "m2", title: "Lembrete 30 minutos", category: "lembrete", body: "Oi {nome}! \u{1F550} Lembrete: seu hor\xE1rio \xE9 em 30 minutinhos! Te esperamos com tudo pronto. \u{1F338}" },
    { id: "m3", title: "Retorno de servi\xE7o", category: "retorno", body: "Oi {nome}! \u{1F338} Est\xE1 na hora do seu retorno de {servico}. Quer garantir seu hor\xE1rio? \u{1F495}" },
    { id: "m4", title: "Anivers\xE1rio", category: "especial", body: "Parab\xE9ns {nome}! \u{1F389}\u{1F338} O {studio} te deseja um dia lindo! Que tal se mimar hoje? \u2728" },
    { id: "m5", title: "Sumiu! Sentimos falta", category: "retencao", body: "Oi {nome}! \u{1F338} Sentimos sua falta! Quando podemos te receber novamente? \u{1F495}" },
    { id: "m6", title: "Promo\xE7\xE3o rel\xE2mpago", category: "marketing", body: "Oi {nome}! \u26A1 Temos uma novidade especial pra voc\xEA hoje! Fala com a gente! \u{1F338}" }
  ]
};
function useToast() {
  const [toasts, setToasts] = useState([]);
  const show = useCallback((msg, type = "success") => {
    const id = uid();
    setToasts((p) => [...p, { id, msg, type }]);
    setTimeout(() => setToasts((p) => p.filter((t) => t.id !== id)), 3800);
  }, []);
  return { toasts, show };
}
function useAutoSave(data) {
  useEffect(() => {
    const t = setTimeout(() => {
      try {
        localStorage.setItem("bapp-v4", JSON.stringify({ ...data, _ts: Date.now() }));
      } catch (e) {
      }
    }, 900);
    return () => clearTimeout(t);
  }, [data]);
}
function checkConflict(appointments, form, editId, techMap) {
  const dur = form.itemIds.reduce((s, id) => s + Number(techMap[id]?.duration || 0), 0);
  const sMin = t2min(form.time);
  const eMin = sMin + dur;
  return appointments.filter((a) => {
    if (a.id === editId || a.date !== form.date || a.userId !== form.userId) return false;
    if (["Cancelado", "N\xE3o compareceu", "Finalizado"].includes(a.status)) return false;
    const aDur = a.itemIds.reduce((s, id) => s + Number(techMap[id]?.duration || 0), 0);
    const aS = t2min(a.time);
    const aE = aS + aDur;
    return sMin < aE && eMin > aS;
  });
}
var Empty = ({ text }) => /* @__PURE__ */ jsx("div", { className: "empty", children: text || "Nenhum item." });
var Alrt = ({ type = "amber", icon, children }) => /* @__PURE__ */ jsxs("div", { className: `alert alert-${type}`, children: [
  icon && /* @__PURE__ */ jsx("span", { children: icon }),
  children
] });
var Field = ({ label, children }) => /* @__PURE__ */ jsxs("div", { className: "ffield", children: [
  /* @__PURE__ */ jsx("label", { className: "flabel", children: label }),
  children
] });
var Chip = ({ children, cls = "chip-gray" }) => /* @__PURE__ */ jsx("span", { className: `chip ${cls}`, children });
var SummaryBox = ({ label, value, sub }) => /* @__PURE__ */ jsxs("div", { className: "summary", children: [
  /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("div", { className: "summary-lbl", children: label }),
    sub && /* @__PURE__ */ jsx("div", { style: { fontSize: 11, color: C.rose, opacity: 0.7, marginTop: 1 }, children: sub })
  ] }),
  /* @__PURE__ */ jsx("div", { className: "summary-val", children: value })
] });
var CheckList = ({ items, selected, toggle }) => /* @__PURE__ */ jsxs("div", { className: "cl", children: [
  items.map((item) => /* @__PURE__ */ jsxs("label", { className: `cl-item${selected.includes(item.id) ? " sel" : ""}`, children: [
    /* @__PURE__ */ jsx("input", { type: "checkbox", checked: selected.includes(item.id), onChange: () => toggle(item.id) }),
    /* @__PURE__ */ jsxs("span", { className: "cl-text", children: [
      item.category,
      " \xB7 ",
      item.name
    ] }),
    /* @__PURE__ */ jsxs("span", { className: "cl-price", children: [
      money(item.price),
      " \xB7 ",
      item.duration,
      "min"
    ] })
  ] }, item.id)),
  items.length === 0 && /* @__PURE__ */ jsx("div", { style: { color: C.mist, fontSize: 13, padding: "8px 0" }, children: "Nenhum servi\xE7o ativo." })
] });
var PhotoUpload = ({ label, image, onChange }) => /* @__PURE__ */ jsxs("label", { className: "photo-lbl", children: [
  image ? /* @__PURE__ */ jsx("img", { src: image, alt: label, style: { width: "100%", height: "100%", objectFit: "cover" } }) : /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("span", { style: { fontSize: 24 }, children: "\u{1F5BC}\uFE0F" }),
    /* @__PURE__ */ jsx("span", { style: { fontSize: 12, color: C.mist }, children: label })
  ] }),
  /* @__PURE__ */ jsx("input", { type: "file", accept: "image/*", capture: "environment", onChange, style: { display: "none" } })
] });
var ToastContainer = ({ toasts }) => /* @__PURE__ */ jsx("div", { className: "toast-wrap", children: toasts.map((t) => /* @__PURE__ */ jsxs("div", { className: `toast ${t.type}`, children: [
  /* @__PURE__ */ jsx("span", { children: t.type === "success" ? "\u2713" : t.type === "error" ? "\u2715" : t.type === "info" ? "\u2139" : "\u26A0" }),
  t.msg
] }, t.id)) });
var UserAvatar = ({ user, size = 30, style = {} }) => /* @__PURE__ */ jsx("div", { style: { width: size, height: size, borderRadius: Math.round(size * 0.3), background: user?.color || C.rose, display: "flex", alignItems: "center", justifyContent: "center", fontSize: Math.round(size * 0.44), flexShrink: 0, ...style }, children: user?.emoji || "\u{1F464}" });
var BarChart = ({ data, color = C.rose }) => {
  const max = Math.max(...data.map((d) => d.value), 1);
  return /* @__PURE__ */ jsx("div", { style: { display: "flex", alignItems: "flex-end", gap: 4, height: 120 }, children: data.map((d, i) => /* @__PURE__ */ jsxs("div", { className: "chart-col", children: [
    /* @__PURE__ */ jsx("div", { className: "chart-bar", style: { height: `${Math.max(4, d.value / max * 100)}%`, background: d.value > 0 ? color : C.border, opacity: i === data.length - 1 ? 1 : 0.6 }, "data-tip": `${d.label}: ${money(d.value)}` }),
    /* @__PURE__ */ jsx("div", { className: "chart-lbl", children: d.label })
  ] }, i)) });
};
function NextBanner({ appointments, userId, clientMap, techMap }) {
  const [now, setNow] = useState(/* @__PURE__ */ new Date());
  useEffect(() => {
    const t = setInterval(() => setNow(/* @__PURE__ */ new Date()), 3e4);
    return () => clearInterval(t);
  }, []);
  const nowMin = now.getHours() * 60 + now.getMinutes();
  const todayStr = now.toISOString().slice(0, 10);
  const mine = appointments.filter((a) => a.date === todayStr && a.userId === userId && !["Cancelado", "N\xE3o compareceu", "Finalizado"].includes(a.status)).sort((a, b) => a.time.localeCompare(b.time));
  const current = mine.find((a) => {
    const s = t2min(a.time);
    const dur = a.itemIds.reduce((x, id) => x + Number(techMap[id]?.duration || 0), 0);
    return nowMin >= s && nowMin < s + dur;
  });
  const soon = mine.find((a) => {
    const diff2 = t2min(a.time) - nowMin;
    return diff2 > 0 && diff2 <= 30;
  });
  const next = mine.find((a) => t2min(a.time) > nowMin);
  const show = current || soon || next;
  if (!show) return null;
  const item = current || soon || next;
  const c = clientMap[item.clientId];
  const diff = t2min(item.time) - nowMin;
  const bg = current ? `linear-gradient(135deg,${C.green},#14532d)` : soon ? `linear-gradient(135deg,${C.rose},${C.roseDk})` : `linear-gradient(135deg,${C.blue},#1e3a8a)`;
  return /* @__PURE__ */ jsxs("div", { className: "next-banner", style: { background: bg }, children: [
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("div", { className: "nb-title", style: { color: "rgba(255,255,255,.8)" }, children: current ? "\u25B6 Em atendimento agora" : soon ? `\u23F0 Pr\xF3ximo em ${diff} minuto${diff !== 1 ? "s" : ""}!` : `\u{1F4C5} Pr\xF3ximo atendimento \xB7 em ${diff}min` }),
      /* @__PURE__ */ jsx("div", { className: "nb-name", children: c?.name }),
      /* @__PURE__ */ jsxs("div", { className: "nb-detail", children: [
        item.itemIds.map((id) => techMap[id]?.name).filter(Boolean).join(" + "),
        " \xB7 ",
        item.time
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { style: { fontSize: 26 }, children: current ? "\u{1F485}" : soon ? "\u{1F338}" : "\u{1F4C5}" })
  ] });
}
function LoginScreen({ users, studio, onLogin }) {
  const [sel, setSel] = useState(null);
  const [pin, setPin] = useState("");
  const [err, setErr] = useState("");
  const u = users.find((x) => x.id === sel);
  const handleNum = (n) => {
    if (pin.length >= 4) return;
    const np = pin + n;
    setPin(np);
    setErr("");
    if (np.length === 4) {
      if (u && u.pin === np) {
        onLogin(u.id);
      } else {
        setErr("PIN incorreto.");
        setTimeout(() => setPin(""), 400);
      }
    }
  };
  return /* @__PURE__ */ jsx("div", { className: "login-bg", children: /* @__PURE__ */ jsxs("div", { className: "login-card", children: [
    /* @__PURE__ */ jsxs("div", { className: "login-logo", children: [
      /* @__PURE__ */ jsx("div", { style: { fontSize: 36, marginBottom: 8 }, children: "\u2726" }),
      /* @__PURE__ */ jsx("div", { className: "login-logo-name", children: studio.name }),
      /* @__PURE__ */ jsx("div", { className: "login-logo-tag", children: "Sistema de gest\xE3o" })
    ] }),
    !sel ? /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx("div", { style: { fontSize: 11, color: "rgba(255,255,255,.38)", letterSpacing: 1.5, textTransform: "uppercase", fontWeight: 600, marginBottom: 10 }, children: "Quem est\xE1 entrando?" }),
      users.map((u2) => /* @__PURE__ */ jsxs("div", { className: "lprofile", style: { "--uc": u2.color, "--ucr": hexToRgb(u2.color) }, onClick: () => {
        setSel(u2.id);
        setPin("");
        setErr("");
      }, children: [
        /* @__PURE__ */ jsx("div", { className: "lavatar", style: { background: u2.color }, children: u2.emoji }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("div", { className: "lpname", children: u2.name }),
          /* @__PURE__ */ jsx("div", { className: "lprole", children: u2.role })
        ] })
      ] }, u2.id))
    ] }) : /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsxs("div", { style: { display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }, children: [
        /* @__PURE__ */ jsx("div", { className: "lavatar", style: { background: u.color, width: 40, height: 40, borderRadius: 11, flexShrink: 0 }, children: u.emoji }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("div", { style: { color: "#fff", fontWeight: 700, fontSize: 14 }, children: u.name }),
          /* @__PURE__ */ jsx("button", { onClick: () => {
            setSel(null);
            setPin("");
          }, style: { color: "rgba(255,255,255,.38)", fontSize: 11, background: "none", border: "none", cursor: "pointer", padding: 0, marginTop: 2 }, children: "\u2190 Trocar usu\xE1rio" })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { style: { fontSize: 11, color: "rgba(255,255,255,.38)", letterSpacing: 1.5, textTransform: "uppercase", fontWeight: 600 }, children: "Digite seu PIN" }),
      /* @__PURE__ */ jsx("div", { className: "pin-dots", children: [0, 1, 2, 3].map((i) => /* @__PURE__ */ jsx("div", { className: `pin-dot${i < pin.length ? " filled" : ""}`, style: i < pin.length ? { background: u.color, borderColor: u.color } : {} }, i)) }),
      /* @__PURE__ */ jsx("div", { className: "numpad", children: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "", "0", "\u232B"].map((n, i) => /* @__PURE__ */ jsx("button", { className: "numkey", style: { visibility: n === "" ? "hidden" : "visible" }, onClick: () => n === "\u232B" ? setPin((p) => p.slice(0, -1)) : handleNum(n), children: n }, i)) }),
      /* @__PURE__ */ jsx("div", { className: "pin-err", children: err }),
      /* @__PURE__ */ jsx("div", { style: { fontSize: 11, color: "rgba(255,255,255,.22)", textAlign: "center", marginTop: 4 }, children: "Admin=1234 \xB7 Karina=5678 \xB7 Juliana=0000" })
    ] })
  ] }) });
}
function PublicAvailability({ studio, techniques, appointments, users, holidays, links, techMap, onClose }) {
  const active = techniques.filter((t) => t.active);
  const [date, setDate] = useState(todayISO);
  const [calMonth, setCalMonth] = useState(startOfMonth(todayISO));
  const [userId, setUserId] = useState("all");
  const [itemIds, setItemIds] = useState(active[0] ? [active[0].id] : []);
  const duration = Math.max(30, itemIds.reduce((s, id) => s + Number(techMap[id]?.duration || 0), 0) || 60);
  const serviceName = itemIds.map((id) => techMap[id]?.name).filter(Boolean).join(" + ") || "servi\xE7o";
  const total = itemIds.reduce((s, id) => s + Number(techMap[id]?.price || 0), 0);
  const visibleUsers = users.filter((u) => userId === "all" || u.id === userId);
  const slotsForDay = (day) => {
    if (day < todayISO || holidays.some((h) => h.date === day)) return [];
    const slots = [];
    for (const prof of visibleUsers) {
      for (let start = WORK_START; start + duration <= WORK_END; start += SLOT_STEP) {
        if (day === todayISO && start <= (/* @__PURE__ */ new Date()).getHours() * 60 + (/* @__PURE__ */ new Date()).getMinutes()) continue;
        const end = start + duration;
        const busy = appointments.some((a) => {
          if (a.date !== day || a.userId !== prof.id || !BLOCKING_STATUSES.includes(a.status)) return false;
          const aStart = t2min(a.time);
          const aDur = (a.itemIds || []).reduce((s, id) => s + Number(techMap[id]?.duration || 0), 0) || 30;
          const aEnd = aStart + aDur;
          return start < aEnd && end > aStart;
        });
        if (!busy) slots.push({ time: min2t(start), end: min2t(end), user: prof });
      }
    }
    return slots;
  };
  const daySlots = slotsForDay(date);
  const shownSlots = daySlots.slice(0, 10);
  const selectedHoliday = holidays.find((h) => h.date === date);
  const textSlots = daySlots.slice(0, 8).map((s) => `${s.time} com ${s.user.name}`).join(", ");
  const waMessage = daySlots.length ? `Oi! Vi o calend\xE1rio de hor\xE1rios do ${studio.name}. Tenho interesse em ${serviceName} no dia ${fmtDate(date)}. Pode me ajudar a escolher e confirmar um hor\xE1rio?` : `Oi! Vi o calend\xE1rio do ${studio.name}, mas n\xE3o encontrei hor\xE1rio livre para ${serviceName} em ${fmtDate(date)}. Pode me ajudar com outro dia?`;
  const toggleItem = (id) => setItemIds((p) => p.includes(id) ? p.filter((x) => x !== id) : [...p, id]);
  return /* @__PURE__ */ jsx("div", { className: "pub-bg", children: /* @__PURE__ */ jsxs("div", { className: "pub-card wide", children: [
    onClose && /* @__PURE__ */ jsx("button", { className: "btn btn-g btn-sm", onClick: onClose, style: { marginBottom: 14 }, children: "\u2190 Voltar ao sistema" }),
    /* @__PURE__ */ jsxs("div", { style: { textAlign: "center", marginBottom: 22 }, children: [
      /* @__PURE__ */ jsx("div", { style: { fontSize: 34, marginBottom: 8 }, children: "\u2726" }),
      /* @__PURE__ */ jsx("div", { className: "pub-title", children: studio.name }),
      /* @__PURE__ */ jsx("div", { className: "pub-sub", children: studio.tagline })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "pub-summary", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("div", { style: { fontFamily: "'Playfair Display',serif", fontSize: 20, fontWeight: 700, color: "#fff" }, children: "Hor\xE1rios dispon\xEDveis" }),
        /* @__PURE__ */ jsx("div", { className: "pub-muted", children: "Escolha o servi\xE7o e veja os espa\xE7os livres. A reserva \xE9 confirmada pelo WhatsApp." })
      ] }),
      /* @__PURE__ */ jsx("a", { className: "btn btn-wa", href: waLink(links.whatsapp, waMessage), target: "_blank", rel: "noopener noreferrer", children: "\u{1F4AC} Chamar no WhatsApp" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "g2", style: { marginTop: 16 }, children: [
      /* @__PURE__ */ jsx("div", { className: "fgrid", children: /* @__PURE__ */ jsx(Field, { label: "Servi\xE7o", children: /* @__PURE__ */ jsx("div", { className: "cl", style: { maxHeight: 190 }, children: active.map((t) => /* @__PURE__ */ jsxs("label", { className: `cl-item${itemIds.includes(t.id) ? " sel" : ""}`, style: { background: itemIds.includes(t.id) ? "rgba(190,24,93,.24)" : "rgba(255,255,255,.06)", borderColor: itemIds.includes(t.id) ? C.rose : "rgba(255,255,255,.12)" }, children: [
        /* @__PURE__ */ jsx("input", { type: "checkbox", checked: itemIds.includes(t.id), onChange: () => toggleItem(t.id) }),
        /* @__PURE__ */ jsxs("span", { className: "cl-text", style: { color: "#fff" }, children: [
          t.category,
          " \xB7 ",
          t.name
        ] }),
        /* @__PURE__ */ jsxs("span", { className: "cl-price", style: { color: "rgba(255,255,255,.5)" }, children: [
          t.duration,
          "min"
        ] })
      ] }, t.id)) }) }) }),
      /* @__PURE__ */ jsxs("div", { className: "fgrid", children: [
        /* @__PURE__ */ jsx(Field, { label: "Profissional", children: /* @__PURE__ */ jsxs("div", { className: "pub-pros", children: [
          /* @__PURE__ */ jsx("button", { className: `pub-pro${userId === "all" ? " active" : ""}`, onClick: () => setUserId("all"), children: "Todas" }),
          users.map((u) => /* @__PURE__ */ jsxs("button", { className: `pub-pro${userId === u.id ? " active" : ""}`, onClick: () => setUserId(u.id), children: [
            u.emoji,
            " ",
            u.name
          ] }, u.id))
        ] }) }),
        /* @__PURE__ */ jsxs("div", { style: { background: "rgba(255,255,255,.06)", border: "1px solid rgba(255,255,255,.12)", borderRadius: 13, padding: "13px 15px" }, children: [
          /* @__PURE__ */ jsx("div", { className: "pub-muted", children: "Dura\xE7\xE3o estimada" }),
          /* @__PURE__ */ jsxs("div", { style: { fontFamily: "'Playfair Display',serif", fontSize: 24, fontWeight: 700, color: "#fff" }, children: [
            duration,
            " min"
          ] }),
          total > 0 && /* @__PURE__ */ jsx("div", { className: "pub-muted", children: money(total) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "pub-cal", children: [
      /* @__PURE__ */ jsxs("div", { className: "pub-cal-nav", children: [
        /* @__PURE__ */ jsx("button", { className: "btn btn-g btn-sm", onClick: () => setCalMonth(shiftMonth(calMonth, -1)), children: "\u2190" }),
        /* @__PURE__ */ jsx("div", { className: "pub-cal-title", children: fmtMonth(calMonth) }),
        /* @__PURE__ */ jsx("button", { className: "btn btn-g btn-sm", onClick: () => setCalMonth(shiftMonth(calMonth, 1)), children: "\u2192" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "pub-cal-wds", children: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "S\xE1b"].map((d) => /* @__PURE__ */ jsx("div", { className: "pub-cal-wd", children: d }, d)) }),
      /* @__PURE__ */ jsx("div", { className: "pub-cal-grid", children: calDays(calMonth).map((day) => {
        const inM = day.slice(0, 7) === calMonth.slice(0, 7);
        const past = day < todayISO;
        const holiday = holidays.find((h) => h.date === day);
        const count = slotsForDay(day).length;
        const cls = `pub-cal-day${date === day ? " active" : ""}${!inM ? " om" : ""}${past ? " past" : ""}${!count && !holiday && !past ? " empty-day" : ""}`;
        return /* @__PURE__ */ jsxs("button", { className: cls, disabled: past, onClick: () => {
          setDate(day);
          setCalMonth(startOfMonth(day));
        }, children: [
          /* @__PURE__ */ jsx("div", { className: "pub-cal-num", children: Number(day.slice(8, 10)) }),
          /* @__PURE__ */ jsx("div", { className: "pub-cal-count", children: holiday ? "Feriado" : count ? `${count} livre${count !== 1 ? "s" : ""}` : past ? "passou" : "sem vaga" })
        ] }, day);
      }) })
    ] }),
    /* @__PURE__ */ jsxs("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", gap: 10, flexWrap: "wrap" }, children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("div", { style: { fontFamily: "'Playfair Display',serif", fontSize: 20, fontWeight: 700, color: "#fff" }, children: fmtDate(date) }),
        /* @__PURE__ */ jsx("div", { className: "pub-muted", children: selectedHoliday ? `Feriado: ${selectedHoliday.name}` : `${daySlots.length} hor\xE1rio(s) livre(s) para ${serviceName}` })
      ] }),
      /* @__PURE__ */ jsx("button", { className: "btn btn-g btn-sm", onClick: () => navigator.clipboard?.writeText(`Hor\xE1rios dispon\xEDveis em ${fmtDate(date)}: ${textSlots || "sem hor\xE1rios livres"}`), children: "\u{1F4CB} Copiar op\xE7\xF5es" })
    ] }),
    daySlots.length === 0 ? /* @__PURE__ */ jsx("div", { className: "empty", style: { borderColor: "rgba(255,255,255,.16)", color: "rgba(255,255,255,.48)", marginTop: 12 }, children: "Nenhum espa\xE7o livre nesse dia." }) : /* @__PURE__ */ jsxs("div", { className: "pub-slot-grid", children: [
      shownSlots.map((s, i) => /* @__PURE__ */ jsxs("div", { className: "pub-slot", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("div", { className: "pub-slot-time", children: s.time }),
          /* @__PURE__ */ jsxs("div", { className: "pub-slot-user", children: [
            "at\xE9 ",
            s.end
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "pub-slot-user", children: [
          s.user.emoji,
          " ",
          s.user.name
        ] })
      ] }, `${s.user.id}-${s.time}-${i}`)),
      daySlots.length > shownSlots.length && /* @__PURE__ */ jsxs("div", { className: "pub-muted", style: { display: "flex", alignItems: "center", padding: "0 4px" }, children: [
        "+ ",
        daySlots.length - shownSlots.length,
        " op\xE7\xF5es livres nesse dia"
      ] })
    ] })
  ] }) });
}
function MensagensTab({ clients, msgTemplates, setMsgTemplates, studio, appointments, attendances, techMap, toast }) {
  const [selClient, setSelClient] = useState(clients[0]?.id || "");
  const [search, setSearch] = useState("");
  const [preview, setPreview] = useState(null);
  const [aiPrompt, setAiPrompt] = useState("");
  const [aiLoading, setAiLoading] = useState(false);
  const [aiResult, setAiResult] = useState("");
  const [catFilter, setCatFilter] = useState("todos");
  const [msgForm, setMsgForm] = useState({ title: "", category: "agenda", body: "" });
  const client = clients.find((c) => c.id === selClient) || clients[0];
  const fill = (body) => {
    if (!client) return body;
    const lastAtt = attendances.filter((a) => a.clientId === client.id).sort((a, b) => b.date.localeCompare(a.date))[0];
    const servico = lastAtt ? lastAtt.itemIds.map((id) => techMap[id]?.name).filter(Boolean).join(" + ") : "servi\xE7o";
    const nextAppt = appointments.filter((a) => a.clientId === client.id && a.date >= todayISO).sort((a, b) => a.date.localeCompare(b.date))[0];
    return body.replace(/\{nome\}/g, client.name.split(" ")[0]).replace(/\{nomeCompleto\}/g, client.name).replace(/\{servico\}/g, servico).replace(/\{studio\}/g, studio.name).replace(/\{data\}/g, nextAppt ? fmtDate(nextAppt.date) : "pr\xF3xima data").replace(/\{hora\}/g, nextAppt ? nextAppt.time : "hor\xE1rio combinado");
  };
  const filtered = msgTemplates.filter((m) => catFilter === "todos" || m.category === catFilter);
  const generateAI = async () => {
    if (!aiPrompt.trim()) return;
    setAiLoading(true);
    setAiResult("");
    await new Promise((res) => setTimeout(res, 350));
    setAiResult(localAiMessage({ prompt: aiPrompt, studio, client, appointments, attendances, techMap }));
    setAiLoading(false);
  };
  const catLabels = { todos: "Todos", agenda: "Agenda", lembrete: "Lembrete", retorno: "Retorno", especial: "Especial", retencao: "Reten\xE7\xE3o", marketing: "Marketing" };
  return /* @__PURE__ */ jsxs("div", { className: "g2", children: [
    /* @__PURE__ */ jsxs("div", { style: { display: "flex", flexDirection: "column", gap: 16 }, children: [
      /* @__PURE__ */ jsxs("div", { className: "card", children: [
        /* @__PURE__ */ jsx("div", { className: "card-title", children: "Templates de mensagem" }),
        /* @__PURE__ */ jsx("div", { className: "card-sub", children: "Clique para pr\xE9-visualizar e enviar" }),
        /* @__PURE__ */ jsx("div", { className: "tab-pills", children: MSG_CATS.map((c) => /* @__PURE__ */ jsx("button", { className: `tab-pill${catFilter === c ? " active" : ""}`, onClick: () => setCatFilter(c), children: catLabels[c] }, c)) }),
        /* @__PURE__ */ jsxs("div", { className: "sl", children: [
          filtered.map((m) => /* @__PURE__ */ jsxs("div", { className: "msg-tmpl", onClick: () => setPreview(m), children: [
            /* @__PURE__ */ jsxs("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center" }, children: [
              /* @__PURE__ */ jsx("div", { className: "msg-tmpl-title", children: m.title }),
              /* @__PURE__ */ jsxs("div", { style: { display: "flex", gap: 5 }, children: [
                /* @__PURE__ */ jsx(Chip, { cls: "chip-gray", children: m.category }),
                /* @__PURE__ */ jsx("button", { className: "btn btn-d btn-xs", onClick: (e) => {
                  e.stopPropagation();
                  if (window.confirm("Excluir?")) setMsgTemplates((p) => p.filter((x) => x.id !== m.id));
                }, style: { padding: "2px 7px" }, children: "\u2715" })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "msg-tmpl-body", children: [
              m.body.slice(0, 75),
              m.body.length > 75 ? "..." : ""
            ] })
          ] }, m.id)),
          filtered.length === 0 && /* @__PURE__ */ jsx(Empty, { text: "Nenhum template nesta categoria." })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "card", children: [
        /* @__PURE__ */ jsx("div", { className: "card-title", children: "Criar template" }),
        /* @__PURE__ */ jsxs("div", { className: "fgrid", children: [
          /* @__PURE__ */ jsx(Field, { label: "T\xEDtulo", children: /* @__PURE__ */ jsx("input", { placeholder: "Ex: Confirma\xE7\xE3o de agendamento", value: msgForm.title, onChange: (e) => setMsgForm((p) => ({ ...p, title: e.target.value })) }) }),
          /* @__PURE__ */ jsx(Field, { label: "Categoria", children: /* @__PURE__ */ jsx("select", { value: msgForm.category, onChange: (e) => setMsgForm((p) => ({ ...p, category: e.target.value })), children: MSG_CATS.filter((c) => c !== "todos").map((c) => /* @__PURE__ */ jsx("option", { value: c, children: catLabels[c] }, c)) }) }),
          /* @__PURE__ */ jsx(Field, { label: "Texto", children: /* @__PURE__ */ jsx("textarea", { placeholder: "Use {nome}, {servico}, {data}, {hora}, {studio}...", value: msgForm.body, onChange: (e) => setMsgForm((p) => ({ ...p, body: e.target.value })), style: { minHeight: 90 } }) }),
          /* @__PURE__ */ jsxs("div", { style: { fontSize: 11, color: C.mist }, children: [
            "Vari\xE1veis: ",
            "{nome}",
            " ",
            "{servico}",
            " ",
            "{data}",
            " ",
            "{hora}",
            " ",
            "{studio}"
          ] }),
          /* @__PURE__ */ jsx("button", { className: "btn btn-p btn-full", onClick: () => {
            if (!msgForm.title || !msgForm.body) return toast("Preencha t\xEDtulo e texto.", "warn");
            setMsgTemplates((p) => [{ id: uid(), ...msgForm }, ...p]);
            setMsgForm({ title: "", category: "agenda", body: "" });
            toast("Template criado!");
          }, children: "Salvar template" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { style: { display: "flex", flexDirection: "column", gap: 16 }, children: [
      /* @__PURE__ */ jsxs("div", { className: "card", children: [
        /* @__PURE__ */ jsx("div", { className: "card-title", children: "Enviar mensagem" }),
        /* @__PURE__ */ jsx("div", { className: "card-sub", children: "Selecione cliente e template" }),
        /* @__PURE__ */ jsxs("div", { className: "search-wrap", children: [
          /* @__PURE__ */ jsx("span", { className: "search-icon", children: "\u{1F50D}" }),
          /* @__PURE__ */ jsx("input", { placeholder: "Buscar cliente...", value: search, onChange: (e) => setSearch(e.target.value) })
        ] }),
        /* @__PURE__ */ jsx("div", { style: { maxHeight: 190, overflowY: "auto", marginBottom: 12 }, children: clients.filter((c) => (c.name + c.phone).toLowerCase().includes(search.toLowerCase())).map((c) => /* @__PURE__ */ jsxs("div", { className: `cc${selClient === c.id ? " sel" : ""}`, onClick: () => setSelClient(c.id), children: [
          /* @__PURE__ */ jsx("div", { className: "cc-av", children: "\u{1F338}" }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("div", { className: "cc-name", children: c.name }),
            /* @__PURE__ */ jsx("div", { className: "cc-info", children: c.phone })
          ] })
        ] }, c.id)) }),
        preview && client ? /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("div", { style: { fontSize: 10.5, letterSpacing: 1.5, textTransform: "uppercase", color: C.mist, fontWeight: 700, marginBottom: 7 }, children: [
            "Pr\xE9-visualiza\xE7\xE3o para ",
            client.name.split(" ")[0]
          ] }),
          /* @__PURE__ */ jsx("div", { style: { background: C.fog, borderRadius: 11, padding: "11px 14px", fontSize: 13, lineHeight: 1.6, color: C.ink, whiteSpace: "pre-wrap", marginBottom: 11, border: `1px solid ${C.border}` }, children: fill(preview.body) }),
          /* @__PURE__ */ jsxs("div", { style: { display: "flex", gap: 7 }, children: [
            /* @__PURE__ */ jsx("a", { className: "btn btn-wa btn-full", href: waLink(client.phone, fill(preview.body)), target: "_blank", rel: "noopener noreferrer", children: "\u{1F4AC} Enviar no WhatsApp" }),
            /* @__PURE__ */ jsx("button", { className: "btn btn-g btn-sm", onClick: () => setPreview(null), children: "\u2715" })
          ] })
        ] }) : /* @__PURE__ */ jsx("div", { className: "empty", style: { padding: 14, fontSize: 13 }, children: "\u2190 Clique em um template para visualizar" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "card", children: [
        /* @__PURE__ */ jsx("div", { className: "card-title", children: "\u2728 Criar mensagem" }),
        /* @__PURE__ */ jsx("div", { className: "card-sub", children: "Gera uma sugest\xE3o local, pronta para copiar, enviar ou salvar" }),
        /* @__PURE__ */ jsxs("div", { className: "fgrid", children: [
          /* @__PURE__ */ jsx(Field, { label: "O que voc\xEA quer dizer?", children: /* @__PURE__ */ jsx("textarea", { placeholder: "Ex: mensagem carinhosa para cliente que sumiu h\xE1 2 meses...", value: aiPrompt, onChange: (e) => setAiPrompt(e.target.value), style: { minHeight: 76 } }) }),
          /* @__PURE__ */ jsx("button", { className: "btn btn-pu btn-full", onClick: generateAI, disabled: aiLoading || !aiPrompt.trim(), children: aiLoading ? "Gerando..." : "\u2728 Gerar com IA" }),
          aiLoading && /* @__PURE__ */ jsxs("div", { className: "ai-loading", children: [
            /* @__PURE__ */ jsx("div", { className: "ai-dot" }),
            /* @__PURE__ */ jsx("div", { className: "ai-dot" }),
            /* @__PURE__ */ jsx("div", { className: "ai-dot" }),
            /* @__PURE__ */ jsx("span", { style: { fontSize: 12, color: C.mist, marginLeft: 5 }, children: "Criando mensagem..." })
          ] }),
          aiResult && /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("div", { style: { background: C.purpleLt, borderRadius: 11, padding: "12px 14px", fontSize: 13, lineHeight: 1.6, border: `1.5px solid ${C.purpleBd}`, whiteSpace: "pre-wrap", marginBottom: 9 }, children: client ? fill(aiResult) : aiResult }),
            /* @__PURE__ */ jsxs("div", { style: { display: "flex", gap: 7 }, children: [
              /* @__PURE__ */ jsx("button", { className: "btn btn-g btn-sm", onClick: () => {
                navigator.clipboard?.writeText(client ? fill(aiResult) : aiResult);
                toast("Copiado!");
              }, children: "\u{1F4CB} Copiar" }),
              /* @__PURE__ */ jsx("button", { className: "btn btn-p btn-sm", onClick: () => {
                if (!aiResult) return;
                setMsgTemplates((p) => [{ id: uid(), title: "Mensagem IA", category: "marketing", body: aiResult }, ...p]);
                toast("Template salvo!");
                setAiResult("");
                setAiPrompt("");
              }, children: "\u{1F4BE} Salvar" }),
              client && /* @__PURE__ */ jsx("a", { className: "btn btn-wa btn-sm", href: waLink(client.phone, fill(aiResult)), target: "_blank", rel: "noopener noreferrer", children: "\u{1F4AC} Enviar" })
            ] })
          ] })
        ] })
      ] })
    ] })
  ] });
}
function BeautyApp() {
  const { toasts, show: toast } = useToast();
  const [loggedId, setLoggedId] = useState(null);
  const [publicMode, setPublicMode] = useState(() => {
    try {
      return new URLSearchParams(window.location.search).get("public") === "1";
    } catch {
      return false;
    }
  });
  const [tab, setTab] = useState("dashboard");
  const [lightbox, setLightbox] = useState(null);
  const [finPeriod, setFinPeriod] = useState("month");
  const [calFilterUser, setCalFilterUser] = useState("all");
  const [users, setUsers] = useState(INIT.users);
  const [clients, setClients] = useState(INIT.clients);
  const [techniques, setTechniques] = useState(INIT.techniques);
  const [appointments, setAppointments] = useState(INIT.appointments);
  const [attendances, setAttendances] = useState(INIT.attendances);
  const [products, setProducts] = useState(INIT.products);
  const [coupons, setCoupons] = useState(INIT.coupons);
  const [combos, setCombos] = useState(INIT.combos);
  const [holidays, setHolidays] = useState(INIT.holidays);
  const [links, setLinks] = useState(INIT.links);
  const [goal, setGoal] = useState(INIT.goal);
  const [studio, setStudio] = useState(INIT.studio);
  const [msgTemplates, setMsgTemplates] = useState(INIT.msgTemplates);
  const [cloud, setCloud] = useState(() => {
    try {
      return normalizeCloudConfig(JSON.parse(localStorage.getItem(CLOUD_CFG_KEY) || "{}"));
    } catch {
      return DEFAULT_CLOUD_CONFIG;
    }
  });
  const [cloudReady, setCloudReady] = useState(false);
  const [cloudBusy, setCloudBusy] = useState(false);
  const [cloudMsg, setCloudMsg] = useState("");
  const [cloudKind, setCloudKind] = useState("off");
  const [selectedDate, setSelectedDate] = useState(todayISO);
  const [calMonth, setCalMonth] = useState(startOfMonth(todayISO));
  const [selectedClientId, setSelectedClientId] = useState("c1");
  const [clientSearch, setClientSearch] = useState("");
  useEffect(() => {
    try {
      const raw = localStorage.getItem("bapp-v4");
      if (!raw) return;
      const d = JSON.parse(raw);
      if (d.users) setUsers(d.users);
      if (d.clients) setClients(d.clients);
      if (d.techniques) setTechniques(d.techniques);
      if (d.appointments) setAppointments(d.appointments);
      if (d.attendances) setAttendances(d.attendances);
      if (d.products) setProducts(d.products);
      if (d.coupons) setCoupons(d.coupons);
      if (d.combos) setCombos(d.combos);
      if (d.holidays) setHolidays(d.holidays);
      if (d.links) setLinks(d.links);
      if (d.goal) setGoal(d.goal);
      if (d.studio) setStudio(d.studio);
      if (d.msgTemplates) setMsgTemplates(d.msgTemplates);
    } catch (e) {
    }
  }, []);
  useEffect(() => {
    try {
      localStorage.setItem(CLOUD_CFG_KEY, JSON.stringify(cloud));
    } catch (e) {
    }
  }, [cloud]);
  const appData = useMemo(() => ({ users, clients, techniques, appointments, attendances, products, coupons, combos, holidays, links, goal, studio, msgTemplates }), [users, clients, techniques, appointments, attendances, products, coupons, combos, holidays, links, goal, studio, msgTemplates]);
  useAutoSave(appData);
  const cloudConfigured = !!(cloud.url && cloud.anonKey && cloud.workspaceId);
  const clientMap = useMemo(() => Object.fromEntries(clients.map((c) => [c.id, c])), [clients]);
  const techMap = useMemo(() => Object.fromEntries(techniques.map((t) => [t.id, t])), [techniques]);
  const userMap = useMemo(() => Object.fromEntries(users.map((u) => [u.id, u])), [users]);
  const loggedUser = userMap[loggedId] || null;
  const iT = (ids) => ids.reduce((s, id) => s + Number(techMap[id]?.price || 0), 0);
  const iC = (ids) => ids.reduce((s, id) => s + Number(techMap[id]?.materialCost || 0), 0);
  const iD = (ids) => ids.reduce((s, id) => s + Number(techMap[id]?.duration || 0), 0);
  const iN = (ids) => ids.map((id) => techMap[id]?.name).filter(Boolean).join(" + ") || "\u2014";
  const calcFinal = (base, disc, code) => {
    const cp = coupons.find((c) => c.active && c.code === String(code || "").toUpperCase());
    let t = Number(base || 0) - Number(disc || 0);
    if (cp) t = cp.type === "percent" ? t * (1 - cp.value / 100) : t - cp.value;
    return Math.max(0, t);
  };
  const lowStock = products.filter((p) => Number(p.quantity) <= Number(p.minQuantity));
  const returns = attendances.map((a) => ({ ...a, days: daysBetween(a.nextReturnDate) })).filter((a) => a.days <= 7).sort((a, b) => a.days - b.days);
  const missingClients = clients.filter((c) => {
    const last = attendances.filter((a) => a.clientId === c.id).sort((a, b) => b.date.localeCompare(a.date))[0];
    return last && daysBetween(last.date) < -30;
  });
  const loyalty = Object.fromEntries(clients.map((c) => [c.id, attendances.filter((a) => a.clientId === c.id).reduce((s, a) => s + Math.floor(Number(a.value || 0) / 10), 0)]));
  const birthdayClients = clients.filter((c) => isBdayMonth(c.birthDate, todayISO));
  const birthdayToday = clients.filter((c) => isBdayToday(c.birthDate));
  const filteredClients = clients.filter((c) => (c.name + c.phone + c.notes).toLowerCase().includes(clientSearch.toLowerCase()));
  const selectedClient = clientMap[selectedClientId] || clients[0];
  const todayAppts = appointments.filter((a) => a.date === todayISO);
  const dayAppts = appointments.filter((a) => a.date === selectedDate).sort((a, b) => a.time.localeCompare(b.time));
  const todayHoliday = holidays.find((h) => h.date === selectedDate);
  const filterAtt = useCallback((period) => {
    const now = /* @__PURE__ */ new Date(todayISO + "T12:00:00");
    return attendances.filter((a) => {
      const d = /* @__PURE__ */ new Date(a.date + "T12:00:00");
      if (period === "today") return a.date === todayISO;
      if (period === "week") {
        const s = new Date(now);
        s.setDate(now.getDate() - 6);
        return d >= s;
      }
      if (period === "month") return a.date.slice(0, 7) === todayISO.slice(0, 7);
      return true;
    });
  }, [attendances]);
  const filteredAtt = useMemo(() => filterAtt(finPeriod), [filterAtt, finPeriod]);
  const revenue = filteredAtt.reduce((s, a) => s + Number(a.value || 0), 0);
  const costTotal = filteredAtt.reduce((s, a) => s + Number(a.materialCost || 0), 0);
  const profit = revenue - costTotal;
  const avgTicket = filteredAtt.length ? revenue / filteredAtt.length : 0;
  const monthlyRevenue = useMemo(() => Array.from({ length: 6 }, (_, i) => {
    const m = shiftMonth(startOfMonth(todayISO), i - 5);
    const val = attendances.filter((a) => a.date.slice(0, 7) === m.slice(0, 7)).reduce((s, a) => s + Number(a.value || 0), 0);
    return { label: fmtShortM(m), value: val };
  }), [attendances]);
  const thisMonthRev = attendances.filter((a) => a.date.slice(0, 7) === todayISO.slice(0, 7)).reduce((s, a) => s + Number(a.value || 0), 0);
  const goalPct = Math.min(100, goal.monthly > 0 ? thisMonthRev / goal.monthly * 100 : 0);
  const userEarnings = useMemo(() => users.map((u) => {
    const atts = attendances.filter((a) => a.userId === u.id && a.date.slice(0, 7) === todayISO.slice(0, 7));
    return { ...u, revenue: atts.reduce((s, a) => s + Number(a.value || 0), 0), count: atts.length };
  }), [users, attendances]);
  const blankClient = { name: "", phone: "", birthDate: "", allergies: "", lashMap: "", brow: "", nails: "", notes: "", contacted: false };
  const blankTech = { category: "C\xEDlios", name: "", price: 100, duration: 90, returnDays: 20, materialCost: 10, active: true, stockUse: "", notes: "" };
  const mkBlankAppt = useCallback(() => ({ clientId: clients[0]?.id || "", userId: loggedId || users[0]?.id || "", date: todayISO, time: "10:00", itemIds: [], comboId: "", status: "Agendado", discount: 0, couponCode: "", reminder: "30 minutos antes", notes: "" }), [clients, loggedId, users]);
  const mkBlankAtt = useCallback(() => ({ clientId: clients[0]?.id || "", userId: loggedId || users[0]?.id || "", date: todayISO, itemIds: [], stockUsed: [], discount: 0, productsUsed: "", notes: "", beforePhoto: "", afterPhoto: "", sourceAppointmentId: "", sourceAppointmentStatus: "" }), [clients, loggedId, users]);
  const blankProd = { name: "", category: "C\xEDlios", unit: "un", quantity: 1, minQuantity: 1, cost: 0, usagePerService: 1 };
  const blankCoupon = { code: "", type: "percent", value: 10, active: true };
  const blankCombo = { name: "", itemIds: [], price: 0, duration: 0 };
  const blankUser = { name: "", role: "Profissional", pin: "0000", color: "#be185d", emoji: "\u{1F485}" };
  const blankHoliday = { date: todayISO, name: "" };
  const [clientForm, setClientForm] = useState(blankClient);
  const [editClientId, setEditClientId] = useState("");
  const [techForm, setTechForm] = useState(blankTech);
  const [editTechId, setEditTechId] = useState("");
  const [apptForm, setApptForm] = useState({ clientId: "", userId: "", date: todayISO, time: "10:00", itemIds: [], comboId: "", status: "Agendado", discount: 0, couponCode: "", reminder: "30 minutos antes", notes: "" });
  const [editApptId, setEditApptId] = useState("");
  const [attForm, setAttForm] = useState({ clientId: "", userId: "", date: todayISO, itemIds: [], stockUsed: [], discount: 0, productsUsed: "", notes: "", beforePhoto: "", afterPhoto: "", sourceAppointmentId: "", sourceAppointmentStatus: "" });
  const [editAttId, setEditAttId] = useState("");
  const [prodForm, setProdForm] = useState(blankProd);
  const [editProdId, setEditProdId] = useState("");
  const [couponForm, setCouponForm] = useState(blankCoupon);
  const [editCouponId, setEditCouponId] = useState("");
  const [comboForm, setComboForm] = useState(blankCombo);
  const [editComboId, setEditComboId] = useState("");
  const [userForm, setUserForm] = useState(blankUser);
  const [editUserId, setEditUserId] = useState("");
  const [holidayForm, setHolidayForm] = useState(blankHoliday);
  const [editHolidayId, setEditHolidayId] = useState("");
  const conflicts = useMemo(() => checkConflict(appointments, apptForm, editApptId, techMap), [appointments, apptForm, editApptId, techMap]);
  const apptBase = apptForm.comboId ? Number(combos.find((x) => x.id === apptForm.comboId)?.price || 0) : iT(apptForm.itemIds);
  const apptFinal = calcFinal(apptBase, apptForm.discount, apptForm.couponCode);
  const apptDur = apptForm.comboId ? Number(combos.find((x) => x.id === apptForm.comboId)?.duration || 0) : iD(apptForm.itemIds);
  useEffect(() => {
    if (loggedId) {
      setApptForm((p) => ({ ...p, userId: loggedId, clientId: clients[0]?.id || "" }));
      setAttForm((p) => ({ ...p, userId: loggedId, clientId: clients[0]?.id || "" }));
    }
  }, [loggedId]);
  useEffect(() => {
    if (!loggedId) return;
    const check = () => {
      const now = /* @__PURE__ */ new Date();
      const nowMin = now.getHours() * 60 + now.getMinutes();
      const todayStr = now.toISOString().slice(0, 10);
      appointments.filter((a) => a.date === todayStr && a.userId === loggedId && !["Cancelado", "N\xE3o compareceu", "Finalizado"].includes(a.status)).forEach((a) => {
        const diff = t2min(a.time) - nowMin;
        if (diff === 30) {
          const c = clientMap[a.clientId];
          toast(`\u23F0 Pr\xF3ximo em 30min: ${c?.name} \xE0s ${a.time}`, "info");
        }
      });
    };
    check();
    const t = setInterval(check, 6e4);
    return () => clearInterval(t);
  }, [loggedId, appointments, clientMap, toast]);
  const saveClient = () => {
    if (!clientForm.name.trim()) return toast("Informe o nome.", "warn");
    if (editClientId) {
      setClients((p) => p.map((c) => c.id === editClientId ? { ...c, ...clientForm } : c));
      setEditClientId("");
      toast("Atualizada!");
    } else {
      const nc = { id: uid(), ...clientForm };
      setClients((p) => [nc, ...p]);
      setSelectedClientId(nc.id);
      toast("Cadastrada!");
    }
    setClientForm(blankClient);
  };
  const editClient = (c) => {
    setEditClientId(c.id);
    setClientForm({ name: c.name, phone: c.phone, birthDate: c.birthDate || "", allergies: c.allergies || "", lashMap: c.lashMap || "", brow: c.brow || "", nails: c.nails || "", notes: c.notes || "", contacted: c.contacted || false });
  };
  const saveTech = () => {
    if (!techForm.name.trim()) return toast("Informe o nome.", "warn");
    const pl = { ...techForm, price: Number(techForm.price), duration: Number(techForm.duration), returnDays: Number(techForm.returnDays), materialCost: Number(techForm.materialCost) };
    if (editTechId) {
      setTechniques((p) => p.map((t) => t.id === editTechId ? { ...t, ...pl } : t));
      setEditTechId("");
      toast("Atualizada!");
    } else {
      setTechniques((p) => [{ id: uid(), ...pl }, ...p]);
      toast("Criada!");
    }
    setTechForm(blankTech);
  };
  const saveAppt = () => {
    if (!apptForm.itemIds.length && !apptForm.comboId) return toast("Selecione ao menos um servi\xE7o.", "warn");
    if (conflicts.length > 0 && !window.confirm("Conflito detectado. Confirmar mesmo assim?")) return;
    if (editApptId) {
      setAppointments((p) => p.map((a) => a.id === editApptId ? { ...a, ...apptForm } : a));
      setEditApptId("");
      toast("Atualizado!");
    } else {
      setAppointments((p) => [{ id: uid(), ...apptForm }, ...p]);
      toast("Agendado!");
    }
    setSelectedDate(apptForm.date);
    setCalMonth(startOfMonth(apptForm.date));
    setApptForm(mkBlankAppt());
  };
  const editAppt = (a) => {
    setEditApptId(a.id);
    setApptForm({ clientId: a.clientId, userId: a.userId, date: a.date, time: a.time, itemIds: a.itemIds || [], comboId: a.comboId || "", status: a.status, discount: a.discount || 0, couponCode: a.couponCode || "", reminder: a.reminder || "30 minutos antes", notes: a.notes || "" });
  };
  const delAppt = (id) => {
    if (!window.confirm("Excluir?")) return;
    setAppointments((p) => p.filter((x) => x.id !== id));
    toast("Removido.", "warn");
  };
  const togApptItem = (id) => setApptForm((p) => ({ ...p, itemIds: p.itemIds.includes(id) ? p.itemIds.filter((x) => x !== id) : [...p.itemIds, id], comboId: "" }));
  const applyCombo = (cid) => {
    const c = combos.find((x) => x.id === cid);
    setApptForm((p) => ({ ...p, comboId: cid, itemIds: c?.itemIds || [] }));
  };
  const applyStockUsage = (before = [], after = []) => {
    const deltas = stockDeltas(before, after);
    if (!deltas.length) return;
    setProducts((prev) => prev.map((prod) => {
      const delta = deltas.find((d) => d.productId === prod.id);
      if (!delta) return prod;
      const nq = Math.max(0, Number((Number(prod.quantity || 0) - Number(delta.qty || 0)).toFixed(2)));
      if (delta.qty > 0 && nq <= Number(prod.minQuantity || 0)) toast(`\u26A0\uFE0F Estoque baixo: ${prod.name} (${nq} ${prod.unit})!`, "warn");
      return { ...prod, quantity: nq };
    }));
  };
  const convertToAtt = (appt) => {
    const ids = appt.itemIds || [];
    setEditAttId("");
    setAttForm({ clientId: appt.clientId, userId: appt.userId, date: appt.date || todayISO, itemIds: ids, stockUsed: [], discount: appt.discount || 0, productsUsed: "", notes: appt.notes || "", beforePhoto: "", afterPhoto: "", sourceAppointmentId: appt.id, sourceAppointmentStatus: appt.status || "Agendado" });
    setAppointments((p) => p.map((a) => a.id === appt.id ? { ...a, status: "Em atendimento" } : a));
    toast("Atendimento carregado. Confira produtos usados e salve para finalizar.", "info");
    setTab("atendimento");
  };
  const saveAtt = () => {
    const ids = attForm.itemIds;
    if (!ids.length) return toast("Selecione ao menos um servi\xE7o.", "warn");
    const final = calcFinal(iT(ids), attForm.discount, "");
    const retDays = Math.max(...ids.map((id) => Number(techMap[id]?.returnDays || 20)), 1);
    const previous = editAttId ? attendances.find((a) => a.id === editAttId) : null;
    const pl = { ...attForm, date: attForm.date || todayISO, value: final, materialCost: iC(ids), nextReturnDate: addDays(attForm.date || todayISO, retDays) };
    applyStockUsage(previous?.stockUsed || [], pl.stockUsed || []);
    if (editAttId) {
      setAttendances((p) => p.map((a) => a.id === editAttId ? { ...a, ...pl } : a));
      setEditAttId("");
      toast("Atualizado!");
    } else {
      setAttendances((p) => [{ id: uid(), ...pl }, ...p]);
      toast("Registrado!");
    }
    if (pl.sourceAppointmentId) setAppointments((p) => p.map((a) => a.id === pl.sourceAppointmentId ? { ...a, status: "Finalizado" } : a));
    setAttForm(mkBlankAtt());
  };
  const editAtt = (a) => {
    setEditAttId(a.id);
    setAttForm({ clientId: a.clientId, userId: a.userId, date: a.date || todayISO, itemIds: a.itemIds || [], stockUsed: a.stockUsed || [], discount: a.discount || 0, productsUsed: a.productsUsed || "", notes: a.notes || "", beforePhoto: a.beforePhoto || "", afterPhoto: a.afterPhoto || "", sourceAppointmentId: a.sourceAppointmentId || "", sourceAppointmentStatus: a.sourceAppointmentStatus || "" });
  };
  const delAtt = (id) => {
    const att = attendances.find((x) => x.id === id);
    if (!window.confirm("Excluir atendimento? Os produtos usados ser\xE3o devolvidos ao estoque.")) return;
    applyStockUsage(att?.stockUsed || [], []);
    setAttendances((p) => p.filter((x) => x.id !== id));
    toast("Removido.", "warn");
  };
  const cancelAttForm = () => {
    if (attForm.sourceAppointmentId && !editAttId) setAppointments((p) => p.map((a) => a.id === attForm.sourceAppointmentId ? { ...a, status: attForm.sourceAppointmentStatus || "Agendado" } : a));
    setEditAttId("");
    setAttForm(mkBlankAtt());
  };
  const togAttItem = (id) => setAttForm((p) => ({ ...p, itemIds: p.itemIds.includes(id) ? p.itemIds.filter((x) => x !== id) : [...p.itemIds, id] }));
  const togStockItem = (productId) => {
    setAttForm((p) => {
      const ex = p.stockUsed.find((s) => s.productId === productId);
      if (ex) return { ...p, stockUsed: p.stockUsed.filter((s) => s.productId !== productId) };
      const prod = products.find((x) => x.id === productId);
      return { ...p, stockUsed: [...p.stockUsed, { productId, qty: prod?.usagePerService || 1 }] };
    });
  };
  const updStockQty = (productId, qty) => setAttForm((p) => ({ ...p, stockUsed: p.stockUsed.map((s) => s.productId === productId ? { ...s, qty: Number(qty) } : s) }));
  const saveProd = () => {
    if (!prodForm.name.trim()) return toast("Informe o nome.", "warn");
    const pl = { ...prodForm, quantity: Number(prodForm.quantity), minQuantity: Number(prodForm.minQuantity), cost: Number(prodForm.cost), usagePerService: Number(prodForm.usagePerService) };
    if (editProdId) {
      setProducts((p) => p.map((x) => x.id === editProdId ? { ...x, ...pl } : x));
      setEditProdId("");
      toast("Atualizado!");
    } else {
      setProducts((p) => [{ id: uid(), ...pl }, ...p]);
      toast("Cadastrado!");
    }
    setProdForm(blankProd);
  };
  const saveCoupon = () => {
    if (!couponForm.code.trim()) return toast("Informe o c\xF3digo.", "warn");
    const pl = { ...couponForm, code: couponForm.code.toUpperCase(), value: Number(couponForm.value) };
    if (editCouponId) {
      setCoupons((p) => p.map((x) => x.id === editCouponId ? { ...x, ...pl } : x));
      setEditCouponId("");
      toast("Atualizado!");
    } else {
      setCoupons((p) => [{ id: uid(), ...pl }, ...p]);
      toast("Criado!");
    }
    setCouponForm(blankCoupon);
  };
  const saveCombo = () => {
    if (!comboForm.name.trim()) return toast("Informe o nome.", "warn");
    const pl = { ...comboForm, price: Number(comboForm.price), duration: Number(comboForm.duration) };
    if (editComboId) {
      setCombos((p) => p.map((x) => x.id === editComboId ? { ...x, ...pl } : x));
      setEditComboId("");
      toast("Atualizado!");
    } else {
      setCombos((p) => [{ id: uid(), ...pl }, ...p]);
      toast("Criado!");
    }
    setComboForm(blankCombo);
  };
  const togComboItem = (id) => setComboForm((p) => ({ ...p, itemIds: p.itemIds.includes(id) ? p.itemIds.filter((x) => x !== id) : [...p.itemIds, id] }));
  const saveUser = () => {
    if (!userForm.name.trim()) return toast("Informe o nome.", "warn");
    if (!userForm.pin || userForm.pin.length !== 4) return toast("PIN deve ter 4 d\xEDgitos.", "warn");
    if (editUserId) {
      setUsers((p) => p.map((x) => x.id === editUserId ? { ...x, ...userForm } : x));
      setEditUserId("");
      toast("Atualizado!");
    } else if (users.length >= 3) {
      toast("M\xE1ximo 3 usu\xE1rios.", "warn");
    } else {
      setUsers((p) => [...p, { id: uid(), ...userForm }]);
      toast("Adicionado!");
    }
    setUserForm(blankUser);
  };
  const saveHoliday = () => {
    if (!holidayForm.name.trim()) return toast("Informe o nome.", "warn");
    if (editHolidayId) {
      setHolidays((p) => p.map((x) => x.id === editHolidayId ? { ...x, ...holidayForm } : x));
      setEditHolidayId("");
      toast("Atualizado!");
    } else {
      setHolidays((p) => [{ id: uid(), ...holidayForm }, ...p]);
      toast("Adicionado!");
    }
    setHolidayForm(blankHoliday);
  };
  const applyImportedData = (d) => {
    if (Array.isArray(d.users)) {
      setUsers(d.users);
      if (!d.users.some((u) => u.id === loggedId)) setLoggedId(d.users[0]?.id || null);
    }
    if (Array.isArray(d.clients)) {
      setClients(d.clients);
      setSelectedClientId(d.clients[0]?.id || "");
    }
    if (Array.isArray(d.techniques)) setTechniques(d.techniques);
    if (Array.isArray(d.appointments)) setAppointments(d.appointments);
    if (Array.isArray(d.attendances)) setAttendances(d.attendances);
    if (Array.isArray(d.products)) setProducts(d.products);
    if (Array.isArray(d.coupons)) setCoupons(d.coupons);
    if (Array.isArray(d.combos)) setCombos(d.combos);
    if (Array.isArray(d.holidays)) setHolidays(d.holidays);
    if (d.links && typeof d.links === "object") setLinks(d.links);
    if (d.goal && typeof d.goal === "object") setGoal(d.goal);
    if (d.studio && typeof d.studio === "object") setStudio(d.studio);
    if (Array.isArray(d.msgTemplates)) setMsgTemplates(d.msgTemplates);
  };
  const cloudHeaders = (extra = {}) => ({
    apikey: cloud.anonKey,
    Authorization: `Bearer ${cloud.anonKey}`,
    ...extra
  });
  const cloudBase = () => `${cloud.url.replace(/\/$/, "")}/rest/v1/${CLOUD_TABLE}`;
  const setCloudState = (msg, kind = "off") => {
    setCloudMsg(msg);
    setCloudKind(kind);
  };
  const pullCloud = async (showToast = true) => {
    if (!cloudConfigured) {
      setCloudState("Preencha URL, anon key e workspace.", "warn");
      return;
    }
    setCloudBusy(true);
    try {
      const res = await fetch(`${cloudBase()}?workspace_id=eq.${encodeURIComponent(cloud.workspaceId)}&select=data,updated_at`, { headers: cloudHeaders() });
      if (!res.ok) throw new Error(await res.text());
      const rows = await res.json();
      if (rows[0]?.data) {
        applyImportedData(rows[0].data);
        setCloud((p) => ({ ...p, lastSync: (/* @__PURE__ */ new Date()).toISOString() }));
        setCloudReady(true);
        setCloudState(`Dados baixados da nuvem${rows[0].updated_at ? ` (${new Date(rows[0].updated_at).toLocaleString("pt-BR")})` : ""}.`, "ok");
        if (showToast) toast("Dados baixados da nuvem!");
      } else {
        setCloudReady(true);
        setCloudState("Workspace vazio. Clique em Enviar dados atuais para criar a base.", "warn");
        if (showToast) toast("Workspace vazio. Envie os dados atuais.", "warn");
      }
    } catch (e) {
      setCloudReady(false);
      setCloudState("Erro ao baixar da nuvem. Confira SQL, URL e anon key.", "err");
      if (showToast) toast("Erro ao baixar da nuvem.", "error");
    } finally {
      setCloudBusy(false);
    }
  };
  const pushCloud = async (showToast = true) => {
    if (!cloudConfigured) {
      setCloudState("Preencha URL, anon key e workspace.", "warn");
      return;
    }
    setCloudBusy(true);
    try {
      const res = await fetch(`${cloudBase()}?on_conflict=workspace_id`, {
        method: "POST",
        headers: cloudHeaders({ "Content-Type": "application/json", Prefer: "resolution=merge-duplicates,return=representation" }),
        body: JSON.stringify([{ workspace_id: cloud.workspaceId, data: appData, updated_at: (/* @__PURE__ */ new Date()).toISOString() }])
      });
      if (!res.ok) throw new Error(await res.text());
      setCloud((p) => ({ ...p, lastSync: (/* @__PURE__ */ new Date()).toISOString() }));
      setCloudReady(true);
      setCloudState("Dados enviados para a nuvem.", "ok");
      if (showToast) toast("Dados enviados para a nuvem!");
    } catch (e) {
      setCloudReady(false);
      setCloudState("Erro ao enviar para a nuvem. Confira SQL, URL e anon key.", "err");
      if (showToast) toast("Erro ao enviar para a nuvem.", "error");
    } finally {
      setCloudBusy(false);
    }
  };
  useEffect(() => {
    if (!cloud.enabled || !cloudConfigured) return;
    pullCloud(false);
  }, []);
  useEffect(() => {
    if (!cloud.enabled || !cloudConfigured || !cloudReady) return;
    const t = setTimeout(() => pushCloud(false), 2600);
    return () => clearTimeout(t);
  }, [appData, cloud.enabled, cloudReady]);
  useEffect(() => {
    if (!cloud.enabled || !cloudConfigured || !cloudReady) return;
    const t = setInterval(() => pullCloud(false), 3e4);
    return () => clearInterval(t);
  }, [cloud.enabled, cloudReady, cloud.url, cloud.anonKey, cloud.workspaceId]);
  const exportBackup = () => {
    const blob = new Blob([JSON.stringify(appData, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `beauty-${todayISO}.json`;
    a.click();
    URL.revokeObjectURL(url);
    toast("Exportado!");
  };
  const importBackup = async (e) => {
    const f = e.target.files?.[0];
    if (!f) return;
    try {
      const text = await f.text();
      applyImportedData(JSON.parse(text));
      toast("Importado!");
    } catch {
      toast("Arquivo inv\xE1lido.", "error");
    } finally {
      e.target.value = "";
    }
  };
  const resetDemo = () => {
    if (!window.confirm("Resetar todos os dados para os dados de demonstra\xE7\xE3o?")) return;
    applyImportedData(INIT);
    setSelectedClientId(INIT.clients[0]?.id || "");
    setSelectedDate(todayISO);
    setCalMonth(startOfMonth(todayISO));
    const resetUser = INIT.users.some((u) => u.id === loggedId) ? loggedId : INIT.users[0]?.id || "";
    setLoggedId(resetUser || null);
    setClientForm(blankClient);
    setTechForm(blankTech);
    setApptForm({ clientId: INIT.clients[0]?.id || "", userId: resetUser, date: todayISO, time: "10:00", itemIds: [], comboId: "", status: "Agendado", discount: 0, couponCode: "", reminder: "30 minutos antes", notes: "" });
    setAttForm({ clientId: INIT.clients[0]?.id || "", userId: resetUser, date: todayISO, itemIds: [], stockUsed: [], discount: 0, productsUsed: "", notes: "", beforePhoto: "", afterPhoto: "", sourceAppointmentId: "", sourceAppointmentStatus: "" });
    setProdForm(blankProd);
    setCouponForm(blankCoupon);
    setComboForm(blankCombo);
    setUserForm(blankUser);
    setHolidayForm(blankHoliday);
    setEditClientId("");
    setEditTechId("");
    setEditApptId("");
    setEditAttId("");
    setEditProdId("");
    setEditCouponId("");
    setEditComboId("");
    setEditUserId("");
    setEditHolidayId("");
    toast("Dados resetados.", "warn");
  };
  const deleteClient = (c) => {
    const apptCount = appointments.filter((a) => a.clientId === c.id).length;
    const attCount = attendances.filter((a) => a.clientId === c.id).length;
    const extra = apptCount || attCount ? ` Tamb\xE9m ser\xE3o removidos ${apptCount} agendamento(s) e ${attCount} atendimento(s).` : "";
    if (!window.confirm(`Excluir ${c.name}?${extra}`)) return;
    setClients((p) => p.filter((x) => x.id !== c.id));
    setAppointments((p) => p.filter((x) => x.clientId !== c.id));
    setAttendances((p) => p.filter((x) => x.clientId !== c.id));
    if (selectedClientId === c.id) setSelectedClientId(clients.find((x) => x.id !== c.id)?.id || "");
    if (editClientId === c.id) {
      setEditClientId("");
      setClientForm(blankClient);
    }
    toast("Cliente removida.", "warn");
  };
  const openPublicAvailability = () => {
    setPublicMode(true);
    try {
      const url = new URL(window.location.href);
      url.searchParams.set("public", "1");
      window.history.replaceState(null, "", url.toString());
    } catch (e) {
    }
  };
  const publicAvailabilityUrl = () => {
    try {
      const url = new URL(window.location.href);
      url.searchParams.set("public", "1");
      return url.toString();
    } catch (e) {
      return "";
    }
  };
  const closePublicAvailability = () => {
    setPublicMode(false);
    try {
      const url = new URL(window.location.href);
      url.searchParams.delete("public");
      window.history.replaceState(null, "", url.toString());
    } catch (e) {
    }
  };
  const NAV = [
    { id: "dashboard", icon: "\u25C8", label: "Dashboard" },
    { id: "agenda", icon: "\u25F7", label: "Agenda" },
    { id: "clientes", icon: "\u25C9", label: "Clientes" },
    { id: "atendimento", icon: "\u25CE", label: "Atendimento" },
    { id: "retornos", icon: "\u21BA", label: "Retornos", badge: returns.filter((r) => r.days <= 3).length },
    { id: "mensagens", icon: "\u2709", label: "Mensagens" },
    { id: "financeiro", icon: "\u25C6", label: "Financeiro" },
    { id: "tecnicas", icon: "\u2726", label: "T\xE9cnicas" },
    { id: "estoque", icon: "\u25A6", label: "Estoque", badge: lowStock.length },
    { id: "marketing", icon: "\u25D1", label: "Cupons & Combos" },
    { id: "links", icon: "\u2295", label: "Links & Online" },
    { id: "config", icon: "\u25CD", label: "Configura\xE7\xF5es" }
  ];
  if (publicMode) return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("style", { children: CSS }),
    /* @__PURE__ */ jsx(ToastContainer, { toasts }),
    /* @__PURE__ */ jsx(PublicAvailability, { studio, techniques, appointments, users, holidays, links, techMap, onClose: loggedId ? closePublicAvailability : null })
  ] });
  if (!loggedId) return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("style", { children: CSS }),
    /* @__PURE__ */ jsx(ToastContainer, { toasts }),
    /* @__PURE__ */ jsx(LoginScreen, { users, studio, onLogin: (id) => {
      setLoggedId(id);
      toast(`Bem-vinda, ${userMap[id]?.name || ""}! \u{1F338}`, "success");
    } })
  ] });
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("style", { children: CSS }),
    /* @__PURE__ */ jsx(ToastContainer, { toasts }),
    lightbox && /* @__PURE__ */ jsx("div", { className: "modal-bg", onClick: () => setLightbox(null), style: { zIndex: 300 }, children: /* @__PURE__ */ jsx("img", { src: lightbox, alt: "foto", style: { maxWidth: "90vw", maxHeight: "90vh", borderRadius: 14, boxShadow: "0 8px 60px rgba(0,0,0,.5)" }, onClick: (e) => e.stopPropagation() }) }),
    /* @__PURE__ */ jsxs("div", { className: "shell", children: [
      /* @__PURE__ */ jsxs("aside", { className: "sidebar", children: [
        /* @__PURE__ */ jsxs("div", { className: "sb-logo", children: [
          /* @__PURE__ */ jsx("div", { className: "sb-logo-av", style: { background: loggedUser?.color || C.rose }, children: loggedUser?.emoji || "\u2726" }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("div", { className: "sb-logo-name", children: studio.name }),
            /* @__PURE__ */ jsx("div", { className: "sb-logo-tag", children: "CRM" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "sb-user", onClick: () => setLoggedId(null), children: [
          /* @__PURE__ */ jsx("div", { className: "sb-uav", style: { background: loggedUser?.color || C.rose }, children: loggedUser?.emoji }),
          /* @__PURE__ */ jsxs("div", { style: { flex: 1 }, children: [
            /* @__PURE__ */ jsx("div", { className: "sb-uname", children: loggedUser?.name }),
            /* @__PURE__ */ jsx("div", { className: "sb-urole", children: loggedUser?.role })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "sb-out", children: "Sair" })
        ] }),
        /* @__PURE__ */ jsxs("nav", { className: "sb-nav", children: [
          /* @__PURE__ */ jsx("div", { className: "sb-sec", children: "Principal" }),
          NAV.slice(0, 5).map((n) => /* @__PURE__ */ jsxs("button", { className: `sb-btn${tab === n.id ? " active" : ""}`, onClick: () => setTab(n.id), children: [
            /* @__PURE__ */ jsx("span", { className: "icon", children: n.icon }),
            n.label,
            n.badge > 0 && /* @__PURE__ */ jsx("span", { className: "sb-badge", children: n.badge })
          ] }, n.id)),
          /* @__PURE__ */ jsx("div", { className: "sb-sec", children: "Operacional" }),
          NAV.slice(5, 10).map((n) => /* @__PURE__ */ jsxs("button", { className: `sb-btn${tab === n.id ? " active" : ""}`, onClick: () => setTab(n.id), children: [
            /* @__PURE__ */ jsx("span", { className: "icon", children: n.icon }),
            n.label,
            n.badge > 0 && /* @__PURE__ */ jsx("span", { className: "sb-badge", children: n.badge })
          ] }, n.id)),
          /* @__PURE__ */ jsx("div", { className: "sb-sec", children: "Outros" }),
          NAV.slice(10).map((n) => /* @__PURE__ */ jsxs("button", { className: `sb-btn${tab === n.id ? " active" : ""}`, onClick: () => setTab(n.id), children: [
            /* @__PURE__ */ jsx("span", { className: "icon", children: n.icon }),
            n.label
          ] }, n.id))
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "sb-footer", children: [
          /* @__PURE__ */ jsx("button", { className: "sf-btn g", onClick: exportBackup, children: "\u2B07 Exportar backup" }),
          /* @__PURE__ */ jsxs("label", { className: "sf-btn g", style: { cursor: "pointer" }, children: [
            "\u2B06 Importar backup",
            /* @__PURE__ */ jsx("input", { type: "file", accept: ".json", onChange: importBackup, style: { display: "none" } })
          ] }),
          /* @__PURE__ */ jsx("button", { className: "sf-btn g", onClick: openPublicAvailability, children: "\u{1F310} Hor\xE1rios para cliente" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "content", children: [
        /* @__PURE__ */ jsxs("div", { className: "topbar", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("div", { className: "tb-title", children: NAV.find((n) => n.id === tab)?.label }),
            /* @__PURE__ */ jsxs("div", { className: "tb-sub", children: [
              fmtDate(todayISO),
              " \xB7 ",
              todayAppts.length,
              " agendamento(s) hoje \xB7 ",
              loggedUser?.name
            ] })
          ] }),
          /* @__PURE__ */ jsx("select", { className: "mobile-nav", value: tab, onChange: (e) => setTab(e.target.value), "aria-label": "Navega\xE7\xE3o", children: NAV.map((n) => /* @__PURE__ */ jsx("option", { value: n.id, children: n.label }, n.id)) }),
          /* @__PURE__ */ jsxs("div", { className: "tb-chips", children: [
            birthdayToday.map((c) => /* @__PURE__ */ jsxs("span", { className: "chip chip-rose", children: [
              "\u{1F382} ",
              c.name.split(" ")[0]
            ] }, c.id)),
            lowStock.length > 0 && /* @__PURE__ */ jsxs("span", { className: "chip chip-amber", style: { cursor: "pointer" }, onClick: () => setTab("estoque"), children: [
              "\u26A0\uFE0F ",
              lowStock.length,
              " estoque baixo"
            ] }),
            returns.filter((r) => r.days <= 0).length > 0 && /* @__PURE__ */ jsxs("span", { className: "chip chip-rose", children: [
              "\u{1F501} ",
              returns.filter((r) => r.days <= 0).length,
              " retorno(s) atrasado(s)"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "main", children: [
          /* @__PURE__ */ jsx(NextBanner, { appointments, userId: loggedId, clientMap, techMap }),
          tab === "dashboard" && /* @__PURE__ */ jsxs(Fragment, { children: [
            /* @__PURE__ */ jsxs("div", { className: "card", style: { marginBottom: 16 }, children: [
              /* @__PURE__ */ jsxs("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 10 }, children: [
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("div", { className: "card-title", style: { marginBottom: 0 }, children: "Meta mensal" }),
                  /* @__PURE__ */ jsxs("div", { className: "card-sub", style: { marginBottom: 0 }, children: [
                    money(thisMonthRev),
                    " de ",
                    money(goal.monthly),
                    " \xB7 ",
                    goalPct.toFixed(0),
                    "%"
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { style: { display: "flex", gap: 8, alignItems: "center" }, children: [
                  /* @__PURE__ */ jsx(Chip, { cls: goalPct >= 100 ? "chip-green" : goalPct >= 60 ? "chip-blue" : "chip-amber", children: goalPct >= 100 ? "\u{1F389} Meta atingida!" : goalPct >= 60 ? "\u{1F4C8} No caminho" : "\u26A1 Acelere!" }),
                  /* @__PURE__ */ jsx("input", { type: "number", value: goal.monthly, onChange: (e) => setGoal((p) => ({ ...p, monthly: Number(e.target.value) })), style: { width: 95, fontSize: 13 }, placeholder: "Meta R$" })
                ] })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "goal-track", children: /* @__PURE__ */ jsx("div", { className: "goal-bar", style: { width: `${goalPct}%` } }) })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "g4", children: [
              /* @__PURE__ */ jsxs("div", { className: "metric", children: [
                /* @__PURE__ */ jsx("div", { className: "metric-icon", children: "\u{1F4B0}" }),
                /* @__PURE__ */ jsx("div", { className: "metric-lbl", children: "Faturamento (m\xEAs)" }),
                /* @__PURE__ */ jsx("div", { className: "metric-val", children: money(thisMonthRev) }),
                /* @__PURE__ */ jsxs("div", { className: "metric-hlp", children: [
                  attendances.filter((a) => a.date.slice(0, 7) === todayISO.slice(0, 7)).length,
                  " atendimentos"
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "metric", children: [
                /* @__PURE__ */ jsx("div", { className: "metric-icon", children: "\u{1F4C8}" }),
                /* @__PURE__ */ jsx("div", { className: "metric-lbl", children: "Lucro estimado" }),
                /* @__PURE__ */ jsx("div", { className: "metric-val", children: money(attendances.filter((a) => a.date.slice(0, 7) === todayISO.slice(0, 7)).reduce((s, a) => s + Number(a.value || 0) - Number(a.materialCost || 0), 0)) }),
                /* @__PURE__ */ jsx("div", { className: "metric-hlp", children: "Receita menos material" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "metric", children: [
                /* @__PURE__ */ jsx("div", { className: "metric-icon", children: "\u{1F465}" }),
                /* @__PURE__ */ jsx("div", { className: "metric-lbl", children: "Clientes" }),
                /* @__PURE__ */ jsx("div", { className: "metric-val", children: clients.length }),
                /* @__PURE__ */ jsxs("div", { className: "metric-hlp", children: [
                  missingClients.length,
                  " sumida(s)"
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "metric", children: [
                /* @__PURE__ */ jsx("div", { className: "metric-icon", children: "\u{1F4C5}" }),
                /* @__PURE__ */ jsx("div", { className: "metric-lbl", children: "Agend. hoje" }),
                /* @__PURE__ */ jsx("div", { className: "metric-val", children: todayAppts.length }),
                /* @__PURE__ */ jsxs("div", { className: "metric-hlp", children: [
                  todayAppts.filter((a) => a.userId === loggedId).length,
                  " seus"
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "card", style: { marginBottom: 16 }, children: [
              /* @__PURE__ */ jsxs("div", { className: "card-title", children: [
                "Ganhos por profissional \u2014 ",
                new Intl.DateTimeFormat("pt-BR", { month: "long" }).format(/* @__PURE__ */ new Date())
              ] }),
              /* @__PURE__ */ jsx("div", { className: "card-sub", children: "Faturamento individual do m\xEAs" }),
              userEarnings.map((u) => {
                const pct = thisMonthRev > 0 ? u.revenue / thisMonthRev * 100 : 0;
                return /* @__PURE__ */ jsxs("div", { className: "earn-row", style: { background: u.id === loggedId ? `${u.color}12` : C.fog }, children: [
                  /* @__PURE__ */ jsx(UserAvatar, { user: u, size: 34 }),
                  /* @__PURE__ */ jsxs("div", { style: { flex: 1 }, children: [
                    /* @__PURE__ */ jsxs("div", { style: { display: "flex", justifyContent: "space-between", marginBottom: 4 }, children: [
                      /* @__PURE__ */ jsxs("span", { style: { fontSize: 13.5, fontWeight: 700 }, children: [
                        u.name,
                        " ",
                        u.id === loggedId && /* @__PURE__ */ jsx(Chip, { cls: "chip-rose", children: "Voc\xEA" })
                      ] }),
                      /* @__PURE__ */ jsx("span", { style: { fontFamily: "'Playfair Display',serif", fontSize: 16, fontWeight: 700, color: u.color }, children: money(u.revenue) })
                    ] }),
                    /* @__PURE__ */ jsx("div", { style: { height: 4, background: C.border, borderRadius: 99, overflow: "hidden" }, children: /* @__PURE__ */ jsx("div", { style: { height: "100%", width: `${pct}%`, background: u.color, borderRadius: 99, transition: "width .5s" } }) }),
                    /* @__PURE__ */ jsxs("div", { style: { fontSize: 11, color: C.mist, marginTop: 3 }, children: [
                      u.count,
                      " atendimentos \xB7 ",
                      pct.toFixed(0),
                      "%"
                    ] })
                  ] })
                ] }, u.id);
              })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "g3", children: [
              /* @__PURE__ */ jsxs("div", { className: "card", children: [
                /* @__PURE__ */ jsx("div", { className: "card-title", children: "\u{1F4C8} Evolu\xE7\xE3o mensal" }),
                /* @__PURE__ */ jsx("div", { className: "card-sub", children: "\xDAltimos 6 meses" }),
                /* @__PURE__ */ jsx(BarChart, { data: monthlyRevenue })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "card", children: [
                /* @__PURE__ */ jsx("div", { className: "card-title", children: "\u{1F501} Retornos pr\xF3ximos" }),
                /* @__PURE__ */ jsx("div", { className: "card-sub", children: "Pr\xF3ximos 7 dias" }),
                /* @__PURE__ */ jsx("div", { className: "sl", children: returns.length === 0 ? /* @__PURE__ */ jsx(Empty, { text: "Nenhum." }) : returns.map((r) => {
                  const c = clientMap[r.clientId];
                  return /* @__PURE__ */ jsxs("div", { className: "row", style: { marginBottom: 7 }, children: [
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx("div", { className: "row-title", children: c?.name }),
                      /* @__PURE__ */ jsx("div", { className: "row-sub", children: iN(r.itemIds) }),
                      /* @__PURE__ */ jsx("div", { className: "row-extra", style: { color: r.days < 0 ? C.danger : r.days === 0 ? C.rose : C.mist }, children: r.days < 0 ? `\u26A0\uFE0F ${Math.abs(r.days)}d atrasado` : r.days === 0 ? "\u{1F4CD} Hoje!" : `${r.days}d` })
                    ] }),
                    /* @__PURE__ */ jsx("a", { className: "btn btn-wa btn-xs", href: waLink(c?.phone, `Oi ${c?.name}! \u{1F338} Est\xE1 na hora do retorno de ${iN(r.itemIds)}. Quer agendar?`), target: "_blank", rel: "noopener noreferrer", children: "WA" })
                  ] }, r.id);
                }) })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "card", children: [
                /* @__PURE__ */ jsx("div", { className: "card-title", children: "\u{1F382} Aniversariantes" }),
                /* @__PURE__ */ jsx("div", { className: "card-sub", children: "Este m\xEAs" }),
                birthdayClients.length === 0 ? /* @__PURE__ */ jsx(Empty, { text: "Nenhum este m\xEAs." }) : birthdayClients.map((c) => /* @__PURE__ */ jsxs("div", { className: "bday-row", children: [
                  /* @__PURE__ */ jsxs("div", { style: { flex: 1 }, children: [
                    /* @__PURE__ */ jsx("div", { style: { fontSize: 13, fontWeight: 600 }, children: c.name }),
                    /* @__PURE__ */ jsx("div", { style: { fontSize: 12, color: C.mist }, children: fmtDate(c.birthDate) })
                  ] }),
                  /* @__PURE__ */ jsx("a", { className: "btn btn-wa btn-sm", href: waLink(c.phone, `Parab\xE9ns ${c.name.split(" ")[0]}! \u{1F389}\u{1F338} ${studio.name} te deseja um dia lindo!`), target: "_blank", rel: "noopener noreferrer", children: "WA" })
                ] }, c.id))
              ] })
            ] })
          ] }),
          tab === "agenda" && /* @__PURE__ */ jsxs("div", { className: "g21", children: [
            /* @__PURE__ */ jsxs("div", { style: { display: "flex", flexDirection: "column", gap: 16 }, children: [
              /* @__PURE__ */ jsxs("div", { className: "card", children: [
                /* @__PURE__ */ jsxs("div", { className: "cal-nav", children: [
                  /* @__PURE__ */ jsx("button", { className: "btn btn-g btn-sm", onClick: () => setCalMonth(shiftMonth(calMonth, -1)), children: "\u2190 Ant." }),
                  /* @__PURE__ */ jsx("span", { className: "cal-month", children: fmtMonth(calMonth) }),
                  /* @__PURE__ */ jsx("button", { className: "btn btn-g btn-sm", onClick: () => setCalMonth(shiftMonth(calMonth, 1)), children: "Pr\xF3x. \u2192" })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "cal-uf", children: [
                  /* @__PURE__ */ jsx("button", { className: "uf-btn", style: { background: calFilterUser === "all" ? C.ink : "rgba(0,0,0,.12)", border: `2px solid ${calFilterUser === "all" ? C.ink : C.border}`, color: calFilterUser === "all" ? "#fff" : C.mist, fontSize: 11.5, fontWeight: 600, padding: "3px 11px", borderRadius: 99, cursor: "pointer" }, onClick: () => setCalFilterUser("all"), children: "Todos" }),
                  users.map((u) => /* @__PURE__ */ jsxs("button", { className: "uf-btn", style: { background: calFilterUser === u.id ? u.color : "rgba(0,0,0,.07)", border: `2px solid ${calFilterUser === u.id ? u.color : "transparent"}`, fontSize: 11.5, padding: "3px 11px", cursor: "pointer", opacity: calFilterUser !== "all" && calFilterUser !== u.id ? 0.5 : 1 }, onClick: () => setCalFilterUser((p) => p === u.id ? "all" : u.id), children: [
                    u.emoji,
                    " ",
                    u.name.split(" ")[0]
                  ] }, u.id))
                ] }),
                /* @__PURE__ */ jsx("div", { className: "cal-wds", children: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "S\xE1b"].map((d) => /* @__PURE__ */ jsx("div", { className: "cal-wd", children: d }, d)) }),
                /* @__PURE__ */ jsx("div", { className: "cal-grid", children: calDays(calMonth).map((day) => {
                  const inM = day.slice(0, 7) === calMonth.slice(0, 7);
                  const dayList = appointments.filter((a) => a.date === day && (calFilterUser === "all" || a.userId === calFilterUser));
                  const isHol = holidays.some((h) => h.date === day);
                  const isToday = day === todayISO;
                  const userCounts = users.map((u) => ({ ...u, cnt: appointments.filter((a) => a.date === day && a.userId === u.id).length })).filter((u) => u.cnt > 0);
                  return /* @__PURE__ */ jsxs("button", { className: `cal-day${day === selectedDate ? " active" : ""}${!inM ? " om" : ""}${isToday ? " tod" : ""}`, onClick: () => setSelectedDate(day), children: [
                    /* @__PURE__ */ jsx("div", { className: "cal-dn", style: { color: isToday ? C.rose : void 0 }, children: Number(day.slice(8, 10)) }),
                    /* @__PURE__ */ jsxs("div", { className: "cal-dots", children: [
                      userCounts.map((u) => /* @__PURE__ */ jsx("div", { className: "cal-stripe", style: { background: u.color, width: `${Math.min(100, u.cnt * 28)}%`, minWidth: u.cnt > 0 ? 5 : 0 } }, u.id)),
                      dayList.length > 0 && /* @__PURE__ */ jsxs("span", { className: "cal-dot", children: [
                        dayList.length,
                        " ag."
                      ] }),
                      isHol && /* @__PURE__ */ jsx("div", { className: "cal-hol", children: "\u{1F38C}" })
                    ] })
                  ] }, day);
                }) }),
                /* @__PURE__ */ jsx("div", { style: { display: "flex", gap: 7, flexWrap: "wrap", marginTop: 9 }, children: users.map((u) => /* @__PURE__ */ jsxs("div", { style: { display: "flex", alignItems: "center", gap: 4, fontSize: 11, color: C.mist }, children: [
                  /* @__PURE__ */ jsx("div", { style: { width: 9, height: 9, borderRadius: 3, background: u.color } }),
                  u.name.split(" ")[0]
                ] }, u.id)) })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "card", children: [
                /* @__PURE__ */ jsxs("div", { className: "card-title", children: [
                  "Agenda \xB7 ",
                  fmtDate(selectedDate)
                ] }),
                todayHoliday && /* @__PURE__ */ jsxs(Alrt, { type: "amber", icon: "\u{1F38C}", children: [
                  "Feriado: ",
                  todayHoliday.name
                ] }),
                /* @__PURE__ */ jsx("div", { className: "sl", children: dayAppts.filter((a) => calFilterUser === "all" || a.userId === calFilterUser).length === 0 ? /* @__PURE__ */ jsx(Empty, { text: "Nenhum agendamento." }) : dayAppts.filter((a) => calFilterUser === "all" || a.userId === calFilterUser).map((a) => {
                  const c = clientMap[a.clientId];
                  const sc = STATUS_CFG[a.status] || {};
                  const prof = userMap[a.userId];
                  return /* @__PURE__ */ jsxs("div", { className: "row", style: { flexWrap: "wrap" }, children: [
                    /* @__PURE__ */ jsxs("div", { style: { flex: 1, minWidth: 0 }, children: [
                      /* @__PURE__ */ jsxs("div", { style: { display: "flex", gap: 7, alignItems: "center", flexWrap: "wrap" }, children: [
                        /* @__PURE__ */ jsx("span", { style: { fontFamily: "'Playfair Display',serif", fontSize: 17, fontWeight: 700, color: prof?.color || C.rose }, children: a.time }),
                        /* @__PURE__ */ jsx("span", { style: { fontWeight: 700, fontSize: 14 }, children: c?.name }),
                        /* @__PURE__ */ jsx(Chip, { cls: sc.cls, children: a.status })
                      ] }),
                      /* @__PURE__ */ jsxs("div", { className: "row-sub", children: [
                        iN(a.itemIds),
                        " \xB7 ",
                        iD(a.itemIds),
                        "min \xB7 ",
                        money(calcFinal(iT(a.itemIds), a.discount, a.couponCode))
                      ] }),
                      /* @__PURE__ */ jsxs("div", { className: "row-extra", style: { display: "flex", alignItems: "center", gap: 5 }, children: [
                        /* @__PURE__ */ jsx(UserAvatar, { user: prof, size: 16 }),
                        " ",
                        prof?.name,
                        " \xB7 \u{1F514} ",
                        a.reminder
                      ] }),
                      a.notes && /* @__PURE__ */ jsx("div", { className: "row-extra", style: { fontStyle: "italic" }, children: a.notes })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "row-actions", children: [
                      /* @__PURE__ */ jsx("button", { className: "btn btn-gr btn-sm", onClick: () => convertToAtt(a), children: "\u2713 Atender" }),
                      /* @__PURE__ */ jsx("button", { className: "btn btn-g btn-sm", onClick: () => editAppt(a), children: "Editar" }),
                      /* @__PURE__ */ jsx("button", { className: "btn btn-d btn-sm", onClick: () => delAppt(a.id), children: "Excluir" })
                    ] })
                  ] }, a.id);
                }) })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "card", children: [
              /* @__PURE__ */ jsx("div", { className: "card-title", children: editApptId ? "Editar" : "Novo agendamento" }),
              conflicts.length > 0 && /* @__PURE__ */ jsxs("div", { className: "conflict-banner", children: [
                "\u26A0\uFE0F Conflito: ",
                conflicts.map((a) => `${clientMap[a.clientId]?.name} \xE0s ${a.time}`).join(", ")
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "fgrid", children: [
                /* @__PURE__ */ jsx(Field, { label: "Cliente", children: /* @__PURE__ */ jsx("select", { value: apptForm.clientId, onChange: (e) => setApptForm((p) => ({ ...p, clientId: e.target.value })), children: clients.map((c) => /* @__PURE__ */ jsx("option", { value: c.id, children: c.name }, c.id)) }) }),
                /* @__PURE__ */ jsx(Field, { label: "Profissional", children: /* @__PURE__ */ jsx("select", { value: apptForm.userId, onChange: (e) => setApptForm((p) => ({ ...p, userId: e.target.value })), children: users.map((u) => /* @__PURE__ */ jsxs("option", { value: u.id, children: [
                  u.emoji,
                  " ",
                  u.name
                ] }, u.id)) }) }),
                /* @__PURE__ */ jsxs("div", { className: "frow", children: [
                  /* @__PURE__ */ jsx(Field, { label: "Data", children: /* @__PURE__ */ jsx("input", { type: "date", value: apptForm.date, onChange: (e) => setApptForm((p) => ({ ...p, date: e.target.value })) }) }),
                  /* @__PURE__ */ jsx(Field, { label: "Hora", children: /* @__PURE__ */ jsx("input", { type: "time", value: apptForm.time, onChange: (e) => setApptForm((p) => ({ ...p, time: e.target.value })) }) })
                ] }),
                /* @__PURE__ */ jsx(Field, { label: "Status", children: /* @__PURE__ */ jsx("select", { value: apptForm.status, onChange: (e) => setApptForm((p) => ({ ...p, status: e.target.value })), children: STATUSES.map((s) => /* @__PURE__ */ jsx("option", { children: s }, s)) }) }),
                /* @__PURE__ */ jsx(Field, { label: "Combo", children: /* @__PURE__ */ jsxs("select", { value: apptForm.comboId, onChange: (e) => applyCombo(e.target.value), children: [
                  /* @__PURE__ */ jsx("option", { value: "", children: "Sem combo" }),
                  combos.map((c) => /* @__PURE__ */ jsxs("option", { value: c.id, children: [
                    c.name,
                    " \xB7 ",
                    money(c.price)
                  ] }, c.id))
                ] }) }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("label", { className: "flabel", children: "Servi\xE7os" }),
                  /* @__PURE__ */ jsx(CheckList, { items: techniques.filter((t) => t.active), selected: apptForm.itemIds, toggle: togApptItem })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "frow", children: [
                  /* @__PURE__ */ jsx(Field, { label: "Cupom", children: /* @__PURE__ */ jsx("input", { type: "text", placeholder: "C\xD3DIGO", value: apptForm.couponCode, onChange: (e) => setApptForm((p) => ({ ...p, couponCode: e.target.value.toUpperCase() })) }) }),
                  /* @__PURE__ */ jsx(Field, { label: "Desconto R$", children: /* @__PURE__ */ jsx("input", { type: "number", placeholder: "0", value: apptForm.discount, onChange: (e) => setApptForm((p) => ({ ...p, discount: e.target.value })) }) })
                ] }),
                /* @__PURE__ */ jsx(Field, { label: "Aviso", children: /* @__PURE__ */ jsx("select", { value: apptForm.reminder, onChange: (e) => setApptForm((p) => ({ ...p, reminder: e.target.value })), children: REMINDERS.map((r) => /* @__PURE__ */ jsx("option", { children: r }, r)) }) }),
                /* @__PURE__ */ jsx(Field, { label: "Observa\xE7\xF5es", children: /* @__PURE__ */ jsx("textarea", { placeholder: "Notas...", value: apptForm.notes, onChange: (e) => setApptForm((p) => ({ ...p, notes: e.target.value })) }) }),
                /* @__PURE__ */ jsx(SummaryBox, { label: "Valor estimado", value: money(apptFinal), sub: `${apptDur} minutos` }),
                /* @__PURE__ */ jsx("button", { className: "btn btn-p btn-full", onClick: saveAppt, children: editApptId ? "Salvar altera\xE7\xF5es" : "Criar agendamento" }),
                editApptId && /* @__PURE__ */ jsx("button", { className: "btn btn-g btn-full", onClick: () => {
                  setEditApptId("");
                  setApptForm(mkBlankAppt());
                }, children: "Cancelar" })
              ] })
            ] })
          ] }),
          tab === "clientes" && /* @__PURE__ */ jsxs("div", { className: "g3", children: [
            /* @__PURE__ */ jsxs("div", { className: "card", children: [
              /* @__PURE__ */ jsx("div", { className: "card-title", children: "Clientes" }),
              /* @__PURE__ */ jsxs("div", { className: "card-sub", children: [
                clients.length,
                " cadastradas"
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "search-wrap", children: [
                /* @__PURE__ */ jsx("span", { className: "search-icon", children: "\u{1F50D}" }),
                /* @__PURE__ */ jsx("input", { placeholder: "Buscar...", value: clientSearch, onChange: (e) => setClientSearch(e.target.value) })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "sl", children: [
                filteredClients.map((c) => /* @__PURE__ */ jsxs("div", { className: `cc${selectedClientId === c.id ? " sel" : ""}`, onClick: () => setSelectedClientId(c.id), children: [
                  /* @__PURE__ */ jsx("div", { className: "cc-av", children: isBdayMonth(c.birthDate, todayISO) ? "\u{1F382}" : "\u{1F338}" }),
                  /* @__PURE__ */ jsxs("div", { style: { flex: 1 }, children: [
                    /* @__PURE__ */ jsx("div", { className: "cc-name", children: c.name }),
                    /* @__PURE__ */ jsxs("div", { className: "cc-info", children: [
                      c.phone,
                      " \xB7 ",
                      loyalty[c.id] || 0,
                      " pts"
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxs("span", { className: "chip chip-rose", style: { fontSize: 10 }, children: [
                    attendances.filter((a) => a.clientId === c.id).length,
                    "\xD7"
                  ] })
                ] }, c.id)),
                filteredClients.length === 0 && /* @__PURE__ */ jsx(Empty, { text: "Nenhuma." })
              ] })
            ] }),
            selectedClient && /* @__PURE__ */ jsxs("div", { className: "card", children: [
              /* @__PURE__ */ jsxs("div", { style: { display: "flex", gap: 11, alignItems: "flex-start", marginBottom: 14 }, children: [
                /* @__PURE__ */ jsx("div", { className: "cc-av", style: { width: 44, height: 44, fontSize: 19, borderRadius: 13, flexShrink: 0 }, children: isBdayToday(selectedClient.birthDate) ? "\u{1F382}" : "\u{1F338}" }),
                /* @__PURE__ */ jsxs("div", { style: { flex: 1 }, children: [
                  /* @__PURE__ */ jsx("div", { style: { fontFamily: "'Playfair Display',serif", fontSize: 19, fontWeight: 700 }, children: selectedClient.name }),
                  /* @__PURE__ */ jsxs("div", { style: { fontSize: 13, color: C.mist }, children: [
                    selectedClient.phone,
                    selectedClient.birthDate ? ` \xB7 \u{1F382} ${fmtDate(selectedClient.birthDate)}` : ""
                  ] }),
                  /* @__PURE__ */ jsxs("div", { style: { display: "flex", gap: 6, marginTop: 7, flexWrap: "wrap" }, children: [
                    /* @__PURE__ */ jsx("button", { className: "btn btn-g btn-sm", onClick: () => editClient(selectedClient), children: "Editar" }),
                    /* @__PURE__ */ jsx("a", { className: "btn btn-wa btn-sm", href: waLink(selectedClient.phone, `Oi ${selectedClient.name}! \u{1F338}`), target: "_blank", rel: "noopener noreferrer", children: "WhatsApp" }),
                    /* @__PURE__ */ jsx("button", { className: "btn btn-d btn-sm", onClick: () => deleteClient(selectedClient), children: "Excluir" })
                  ] })
                ] })
              ] }),
              selectedClient.allergies && /* @__PURE__ */ jsx(Alrt, { type: "amber", icon: "\u26A0\uFE0F", children: selectedClient.allergies }),
              /* @__PURE__ */ jsxs("div", { className: "ibox", children: [
                /* @__PURE__ */ jsx("div", { className: "ibox-lbl", children: "Mapa de c\xEDlios" }),
                /* @__PURE__ */ jsx("div", { className: "ibox-val", children: selectedClient.lashMap || /* @__PURE__ */ jsx("span", { style: { color: C.mist, fontStyle: "italic" }, children: "N\xE3o informado" }) })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "ibox", children: [
                /* @__PURE__ */ jsx("div", { className: "ibox-lbl", children: "Sobrancelha" }),
                /* @__PURE__ */ jsx("div", { className: "ibox-val", children: selectedClient.brow || /* @__PURE__ */ jsx("span", { style: { color: C.mist, fontStyle: "italic" }, children: "N\xE3o informado" }) })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "ibox", children: [
                /* @__PURE__ */ jsx("div", { className: "ibox-lbl", children: "Unhas" }),
                /* @__PURE__ */ jsx("div", { className: "ibox-val", children: selectedClient.nails || /* @__PURE__ */ jsx("span", { style: { color: C.mist, fontStyle: "italic" }, children: "N\xE3o informado" }) })
              ] }),
              selectedClient.notes && /* @__PURE__ */ jsxs("div", { className: "ibox", children: [
                /* @__PURE__ */ jsx("div", { className: "ibox-lbl", children: "Obs" }),
                /* @__PURE__ */ jsx("div", { className: "ibox-val", children: selectedClient.notes })
              ] }),
              /* @__PURE__ */ jsx("hr", {}),
              (() => {
                const photos = attendances.filter((a) => a.clientId === selectedClient.id && (a.beforePhoto || a.afterPhoto));
                if (!photos.length) return null;
                return /* @__PURE__ */ jsxs(Fragment, { children: [
                  /* @__PURE__ */ jsx("div", { className: "st", children: "Galeria" }),
                  /* @__PURE__ */ jsx("div", { className: "gallery", children: photos.flatMap((a) => [a.beforePhoto, a.afterPhoto].filter(Boolean)).map((img, i) => /* @__PURE__ */ jsx("img", { src: img, className: "gallery-img", alt: "", onClick: () => setLightbox(img) }, i)) }),
                  /* @__PURE__ */ jsx("hr", {})
                ] });
              })(),
              /* @__PURE__ */ jsx("div", { className: "st", children: "Hist\xF3rico" }),
              /* @__PURE__ */ jsxs("div", { className: "sl", children: [
                attendances.filter((a) => a.clientId === selectedClient.id).sort((a, b) => b.date.localeCompare(a.date)).map((a) => /* @__PURE__ */ jsxs("div", { className: "row", style: { flexDirection: "column" }, children: [
                  /* @__PURE__ */ jsxs("div", { style: { display: "flex", justifyContent: "space-between" }, children: [
                    /* @__PURE__ */ jsx("span", { style: { fontWeight: 600, fontSize: 13 }, children: iN(a.itemIds) }),
                    /* @__PURE__ */ jsx(Chip, { cls: "chip-rose", children: fmtDate(a.date) })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "row-sub", children: [
                    money(a.value),
                    " \xB7 Retorno: ",
                    fmtDate(a.nextReturnDate)
                  ] })
                ] }, a.id)),
                attendances.filter((a) => a.clientId === selectedClient.id).length === 0 && /* @__PURE__ */ jsx(Empty, { text: "Sem atendimentos." })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "card", children: [
              /* @__PURE__ */ jsx("div", { className: "card-title", children: editClientId ? "Editar" : "Nova cliente" }),
              /* @__PURE__ */ jsxs("div", { className: "fgrid", children: [
                /* @__PURE__ */ jsxs("div", { className: "frow", children: [
                  /* @__PURE__ */ jsx(Field, { label: "Nome", children: /* @__PURE__ */ jsx("input", { placeholder: "Nome completo", value: clientForm.name, onChange: (e) => setClientForm((p) => ({ ...p, name: e.target.value })) }) }),
                  /* @__PURE__ */ jsx(Field, { label: "WhatsApp", children: /* @__PURE__ */ jsx("input", { type: "tel", placeholder: "47999991111", value: clientForm.phone, onChange: (e) => setClientForm((p) => ({ ...p, phone: e.target.value })) }) })
                ] }),
                /* @__PURE__ */ jsx(Field, { label: "Nascimento", children: /* @__PURE__ */ jsx("input", { type: "date", value: clientForm.birthDate, onChange: (e) => setClientForm((p) => ({ ...p, birthDate: e.target.value })) }) }),
                /* @__PURE__ */ jsx(Field, { label: "Alergias", children: /* @__PURE__ */ jsx("input", { placeholder: "Alergias ou restri\xE7\xF5es", value: clientForm.allergies, onChange: (e) => setClientForm((p) => ({ ...p, allergies: e.target.value })) }) }),
                /* @__PURE__ */ jsx(Field, { label: "Mapa de c\xEDlios", children: /* @__PURE__ */ jsx("textarea", { placeholder: "Curvatura, espessura, tamanho...", value: clientForm.lashMap, onChange: (e) => setClientForm((p) => ({ ...p, lashMap: e.target.value })) }) }),
                /* @__PURE__ */ jsx(Field, { label: "Sobrancelha", children: /* @__PURE__ */ jsx("textarea", { placeholder: "Prefer\xEAncia...", value: clientForm.brow, onChange: (e) => setClientForm((p) => ({ ...p, brow: e.target.value })) }) }),
                /* @__PURE__ */ jsx(Field, { label: "Unhas", children: /* @__PURE__ */ jsx("textarea", { placeholder: "Formato, cor...", value: clientForm.nails, onChange: (e) => setClientForm((p) => ({ ...p, nails: e.target.value })) }) }),
                /* @__PURE__ */ jsx(Field, { label: "Observa\xE7\xF5es", children: /* @__PURE__ */ jsx("textarea", { placeholder: "Notas importantes...", value: clientForm.notes, onChange: (e) => setClientForm((p) => ({ ...p, notes: e.target.value })) }) }),
                /* @__PURE__ */ jsx("button", { className: "btn btn-p btn-full", onClick: saveClient, children: editClientId ? "Salvar" : "Cadastrar" }),
                editClientId && /* @__PURE__ */ jsx("button", { className: "btn btn-g btn-full", onClick: () => {
                  setEditClientId("");
                  setClientForm(blankClient);
                }, children: "Cancelar" })
              ] })
            ] })
          ] }),
          tab === "atendimento" && /* @__PURE__ */ jsxs("div", { className: "g2", children: [
            /* @__PURE__ */ jsxs("div", { className: "card", children: [
              /* @__PURE__ */ jsx("div", { className: "card-title", children: editAttId ? "Editar" : "Registrar atendimento" }),
              /* @__PURE__ */ jsxs("div", { className: "fgrid", children: [
                /* @__PURE__ */ jsx(Field, { label: "Cliente", children: /* @__PURE__ */ jsx("select", { value: attForm.clientId, onChange: (e) => setAttForm((p) => ({ ...p, clientId: e.target.value })), children: clients.map((c) => /* @__PURE__ */ jsx("option", { value: c.id, children: c.name }, c.id)) }) }),
                /* @__PURE__ */ jsx(Field, { label: "Profissional", children: /* @__PURE__ */ jsx("select", { value: attForm.userId, onChange: (e) => setAttForm((p) => ({ ...p, userId: e.target.value })), children: users.map((u) => /* @__PURE__ */ jsxs("option", { value: u.id, children: [
                  u.emoji,
                  " ",
                  u.name
                ] }, u.id)) }) }),
                /* @__PURE__ */ jsx(Field, { label: "Data do atendimento", children: /* @__PURE__ */ jsx("input", { type: "date", value: attForm.date, onChange: (e) => setAttForm((p) => ({ ...p, date: e.target.value })) }) }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("label", { className: "flabel", children: "Servi\xE7os realizados" }),
                  /* @__PURE__ */ jsx(CheckList, { items: techniques.filter((t) => t.active), selected: attForm.itemIds, toggle: togAttItem })
                ] }),
                /* @__PURE__ */ jsx(SummaryBox, { label: "Valor sugerido", value: money(calcFinal(iT(attForm.itemIds), attForm.discount, "")), sub: "Retorno calculado automaticamente" }),
                /* @__PURE__ */ jsx(Field, { label: "Desconto R$", children: /* @__PURE__ */ jsx("input", { type: "number", placeholder: "0", value: attForm.discount, onChange: (e) => setAttForm((p) => ({ ...p, discount: e.target.value })) }) }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("label", { className: "flabel", children: "\u{1F4E6} Produtos usados (baixa autom\xE1tica no estoque)" }),
                  products.length === 0 ? /* @__PURE__ */ jsx("div", { style: { fontSize: 13, color: C.mist, padding: "7px 0" }, children: "Nenhum produto cadastrado." }) : /* @__PURE__ */ jsx("div", { className: "scl", children: products.map((prod) => {
                    const sel = attForm.stockUsed.find((s) => s.productId === prod.id);
                    const low = Number(prod.quantity) <= Number(prod.minQuantity);
                    return /* @__PURE__ */ jsxs("div", { className: `scl-item${sel ? " sel" : ""}`, children: [
                      /* @__PURE__ */ jsx("input", { type: "checkbox", checked: !!sel, onChange: () => togStockItem(prod.id) }),
                      /* @__PURE__ */ jsxs("div", { style: { flex: 1 }, children: [
                        /* @__PURE__ */ jsxs("div", { style: { fontSize: 13, fontWeight: 600 }, children: [
                          prod.name,
                          " ",
                          low && "\u26A0\uFE0F"
                        ] }),
                        /* @__PURE__ */ jsxs("div", { style: { fontSize: 11, color: C.mist }, children: [
                          prod.category,
                          " \xB7 ",
                          prod.quantity,
                          " ",
                          prod.unit,
                          " dispon\xEDvel"
                        ] })
                      ] }),
                      sel && /* @__PURE__ */ jsxs("div", { style: { display: "flex", alignItems: "center", gap: 5 }, children: [
                        /* @__PURE__ */ jsx("span", { style: { fontSize: 11, color: C.mist }, children: "Qtd:" }),
                        /* @__PURE__ */ jsx("input", { type: "number", value: sel.qty, onChange: (e) => updStockQty(prod.id, e.target.value), style: { width: 50, padding: "3px 7px", fontSize: 12 }, min: 0.1, step: 0.5 }),
                        /* @__PURE__ */ jsx("span", { style: { fontSize: 11, color: C.mist }, children: prod.unit })
                      ] })
                    ] }, prod.id);
                  }) }),
                  attForm.stockUsed.length > 0 && /* @__PURE__ */ jsx("div", { style: { marginTop: 6, fontSize: 11.5, color: C.amber, fontWeight: 600 }, children: "\u26A0\uFE0F Ao salvar, o estoque ser\xE1 descontado automaticamente." })
                ] }),
                /* @__PURE__ */ jsx(Field, { label: "Observa\xE7\xF5es", children: /* @__PURE__ */ jsx("textarea", { placeholder: "Notas do atendimento...", value: attForm.notes, onChange: (e) => setAttForm((p) => ({ ...p, notes: e.target.value })) }) }),
                /* @__PURE__ */ jsxs("div", { className: "frow", children: [
                  /* @__PURE__ */ jsx(Field, { label: "Foto \u2014 antes", children: /* @__PURE__ */ jsx(PhotoUpload, { label: "\u{1F4F7} Antes", image: attForm.beforePhoto, onChange: async (e) => {
                    const f = e.target.files?.[0];
                    if (!f) return;
                    const b = await f2b64(f);
                    setAttForm((p) => ({ ...p, beforePhoto: b }));
                  } }) }),
                  /* @__PURE__ */ jsx(Field, { label: "Foto \u2014 depois", children: /* @__PURE__ */ jsx(PhotoUpload, { label: "\u{1F4F7} Depois", image: attForm.afterPhoto, onChange: async (e) => {
                    const f = e.target.files?.[0];
                    if (!f) return;
                    const b = await f2b64(f);
                    setAttForm((p) => ({ ...p, afterPhoto: b }));
                  } }) })
                ] }),
                /* @__PURE__ */ jsx("button", { className: "btn btn-p btn-full", onClick: saveAtt, children: editAttId ? "Salvar" : "Registrar" }),
                (editAttId || attForm.sourceAppointmentId) && /* @__PURE__ */ jsx("button", { className: "btn btn-g btn-full", onClick: cancelAttForm, children: "Cancelar" })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "card", children: [
              /* @__PURE__ */ jsx("div", { className: "card-title", children: "Hist\xF3rico" }),
              /* @__PURE__ */ jsxs("div", { className: "card-sub", children: [
                attendances.length,
                " registros"
              ] }),
              /* @__PURE__ */ jsx("div", { className: "sl", children: attendances.length === 0 ? /* @__PURE__ */ jsx(Empty, { text: "Nenhum atendimento." }) : [...attendances].sort((a, b) => b.date.localeCompare(a.date)).map((a) => {
                const c = clientMap[a.clientId];
                const u = userMap[a.userId];
                return /* @__PURE__ */ jsxs("div", { className: "row", style: { flexDirection: "column" }, children: [
                  /* @__PURE__ */ jsxs("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center" }, children: [
                    /* @__PURE__ */ jsxs("div", { style: { display: "flex", alignItems: "center", gap: 7 }, children: [
                      /* @__PURE__ */ jsx(UserAvatar, { user: u, size: 22 }),
                      /* @__PURE__ */ jsx("span", { style: { fontWeight: 700, fontSize: 13.5 }, children: c?.name })
                    ] }),
                    /* @__PURE__ */ jsx(Chip, { cls: "chip-rose", children: fmtDate(a.date) })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "row-sub", children: [
                    iN(a.itemIds),
                    " \xB7 ",
                    money(a.value)
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "row-extra", children: [
                    "Retorno: ",
                    fmtDate(a.nextReturnDate)
                  ] }),
                  a.stockUsed?.length > 0 && /* @__PURE__ */ jsxs("div", { className: "row-extra", children: [
                    "\u{1F4E6} ",
                    a.stockUsed.map((s) => {
                      const p = products.find((x) => x.id === s.productId);
                      return `${p?.name || "?"} (${s.qty} ${p?.unit || ""})`;
                    }).join(", ")
                  ] }),
                  a.notes && /* @__PURE__ */ jsx("div", { className: "row-extra", style: { fontStyle: "italic" }, children: a.notes }),
                  (a.beforePhoto || a.afterPhoto) && /* @__PURE__ */ jsxs("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6, marginTop: 7 }, children: [
                    a.beforePhoto && /* @__PURE__ */ jsx("img", { src: a.beforePhoto, style: { width: "100%", height: 76, objectFit: "cover", borderRadius: 8, cursor: "pointer" }, onClick: () => setLightbox(a.beforePhoto), alt: "antes" }),
                    a.afterPhoto && /* @__PURE__ */ jsx("img", { src: a.afterPhoto, style: { width: "100%", height: 76, objectFit: "cover", borderRadius: 8, cursor: "pointer" }, onClick: () => setLightbox(a.afterPhoto), alt: "depois" })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "row-actions", style: { marginTop: 7 }, children: [
                    /* @__PURE__ */ jsx("button", { className: "btn btn-g btn-sm", onClick: () => editAtt(a), children: "Editar" }),
                    /* @__PURE__ */ jsx("button", { className: "btn btn-d btn-sm", onClick: () => delAtt(a.id), children: "Excluir" })
                  ] })
                ] }, a.id);
              }) })
            ] })
          ] }),
          tab === "retornos" && /* @__PURE__ */ jsxs("div", { className: "g2", children: [
            /* @__PURE__ */ jsxs("div", { className: "card", children: [
              /* @__PURE__ */ jsx("div", { className: "card-title", children: "Retornos pr\xF3ximos" }),
              /* @__PURE__ */ jsx("div", { className: "card-sub", children: "Pr\xF3ximos 7 dias" }),
              returns.length === 0 ? /* @__PURE__ */ jsx(Empty, { text: "Nenhum." }) : returns.map((r) => {
                const c = clientMap[r.clientId];
                return /* @__PURE__ */ jsxs("div", { className: "row", children: [
                  /* @__PURE__ */ jsxs("div", { style: { flex: 1 }, children: [
                    /* @__PURE__ */ jsx("div", { className: "row-title", children: c?.name }),
                    /* @__PURE__ */ jsxs("div", { className: "row-sub", children: [
                      iN(r.itemIds),
                      " \xB7 ",
                      fmtDate(r.nextReturnDate)
                    ] }),
                    /* @__PURE__ */ jsx("div", { className: "row-extra", style: { color: r.days < 0 ? C.danger : r.days === 0 ? C.rose : C.mist }, children: r.days < 0 ? `\u26A0\uFE0F ${Math.abs(r.days)} dias atrasado` : r.days === 0 ? "\u{1F4CD} Hoje!" : `\u{1F4C5} em ${r.days} dias` }),
                    c?.contacted && /* @__PURE__ */ jsx("div", { style: { fontSize: 11, color: C.green, marginTop: 2 }, children: "\u2713 J\xE1 contatada" })
                  ] }),
                  /* @__PURE__ */ jsx("a", { className: "btn btn-wa btn-sm", href: waLink(c?.phone, `Oi ${c?.name}! \u{1F338} Est\xE1 chegando o momento ideal para seu retorno de ${iN(r.itemIds)}. Quer agendar?`), target: "_blank", rel: "noopener noreferrer", onClick: () => setClients((p) => p.map((x) => x.id === c?.id ? { ...x, contacted: true } : x)), children: "WhatsApp" })
                ] }, r.id);
              })
            ] }),
            /* @__PURE__ */ jsxs("div", { style: { display: "flex", flexDirection: "column", gap: 16 }, children: [
              /* @__PURE__ */ jsxs("div", { className: "card", children: [
                /* @__PURE__ */ jsx("div", { className: "card-title", children: "Clientes sumidas" }),
                /* @__PURE__ */ jsx("div", { className: "card-sub", children: "Sem visita h\xE1 +30 dias" }),
                missingClients.length === 0 ? /* @__PURE__ */ jsx(Empty, { text: "Nenhuma." }) : missingClients.map((c) => /* @__PURE__ */ jsxs("div", { className: "row", children: [
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("div", { className: "row-title", children: c.name }),
                    /* @__PURE__ */ jsx("div", { className: "row-sub", children: c.phone })
                  ] }),
                  /* @__PURE__ */ jsx("a", { className: "btn btn-wa btn-sm", href: waLink(c.phone, `Oi ${c.name}! \u{1F338} Sentimos sua falta! Quer agendar?`), target: "_blank", rel: "noopener noreferrer", children: "Reconquistar" })
                ] }, c.id))
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "card", children: [
                /* @__PURE__ */ jsx("div", { className: "card-title", children: "Avisos pendentes" }),
                /* @__PURE__ */ jsx("div", { className: "card-sub", children: "Confirma\xE7\xF5es a enviar" }),
                appointments.filter((a) => a.date >= todayISO && a.reminder !== "Sem aviso" && !["Cancelado", "Finalizado"].includes(a.status)).length === 0 ? /* @__PURE__ */ jsx(Empty, { text: "Nenhum aviso." }) : appointments.filter((a) => a.date >= todayISO && a.reminder !== "Sem aviso" && !["Cancelado", "Finalizado"].includes(a.status)).sort((a, b) => a.date.localeCompare(b.date)).map((a) => /* @__PURE__ */ jsxs("div", { className: "row", children: [
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("div", { className: "row-title", children: clientMap[a.clientId]?.name }),
                    /* @__PURE__ */ jsxs("div", { className: "row-sub", children: [
                      fmtDate(a.date),
                      " \xE0s ",
                      a.time,
                      " \xB7 ",
                      iN(a.itemIds)
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "row-extra", children: [
                      "\u{1F514} ",
                      a.reminder
                    ] })
                  ] }),
                  /* @__PURE__ */ jsx("a", { className: "btn btn-wa btn-xs", href: waLink(clientMap[a.clientId]?.phone, `Oi ${clientMap[a.clientId]?.name}! \u{1F338} Lembrete: agendamento dia ${fmtDate(a.date)} \xE0s ${a.time}. Confirma? \u{1F495}`), target: "_blank", rel: "noopener noreferrer", children: "Confirmar" })
                ] }, a.id))
              ] })
            ] })
          ] }),
          tab === "mensagens" && /* @__PURE__ */ jsx(MensagensTab, { clients, msgTemplates, setMsgTemplates, studio, appointments, attendances, techMap, toast }),
          tab === "financeiro" && /* @__PURE__ */ jsxs(Fragment, { children: [
            /* @__PURE__ */ jsx("div", { className: "period-selector", children: [["today", "Hoje"], ["week", "Semana"], ["month", "Este m\xEAs"], ["all", "Tudo"]].map(([k, l]) => /* @__PURE__ */ jsx("button", { className: `period-btn${finPeriod === k ? " active" : ""}`, onClick: () => setFinPeriod(k), children: l }, k)) }),
            /* @__PURE__ */ jsxs("div", { className: "g4", style: { marginBottom: 16 }, children: [
              /* @__PURE__ */ jsxs("div", { className: "metric", children: [
                /* @__PURE__ */ jsx("div", { className: "metric-icon", children: "\u{1F4B0}" }),
                /* @__PURE__ */ jsx("div", { className: "metric-lbl", children: "Faturamento" }),
                /* @__PURE__ */ jsx("div", { className: "metric-val", children: money(revenue) }),
                /* @__PURE__ */ jsxs("div", { className: "metric-hlp", children: [
                  filteredAtt.length,
                  " atendimentos"
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "metric", children: [
                /* @__PURE__ */ jsx("div", { className: "metric-icon", children: "\u{1F4B8}" }),
                /* @__PURE__ */ jsx("div", { className: "metric-lbl", children: "Custo material" }),
                /* @__PURE__ */ jsx("div", { className: "metric-val", children: money(costTotal) }),
                /* @__PURE__ */ jsx("div", { className: "metric-hlp", children: "Insumos" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "metric", children: [
                /* @__PURE__ */ jsx("div", { className: "metric-icon", children: "\u{1F4C8}" }),
                /* @__PURE__ */ jsx("div", { className: "metric-lbl", children: "Lucro estimado" }),
                /* @__PURE__ */ jsx("div", { className: "metric-val", children: money(profit) }),
                /* @__PURE__ */ jsxs("div", { className: "metric-hlp", children: [
                  "Margem: ",
                  revenue > 0 ? (profit / revenue * 100).toFixed(0) : 0,
                  "%"
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "metric", children: [
                /* @__PURE__ */ jsx("div", { className: "metric-icon", children: "\u{1F3AF}" }),
                /* @__PURE__ */ jsx("div", { className: "metric-lbl", children: "Ticket m\xE9dio" }),
                /* @__PURE__ */ jsx("div", { className: "metric-val", children: money(avgTicket) }),
                /* @__PURE__ */ jsx("div", { className: "metric-hlp", children: "Por atendimento" })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "g2", children: [
              /* @__PURE__ */ jsxs("div", { className: "card", children: [
                /* @__PURE__ */ jsx("div", { className: "card-title", children: "Evolu\xE7\xE3o mensal" }),
                /* @__PURE__ */ jsx("div", { className: "card-sub", children: "\xDAltimos 6 meses" }),
                /* @__PURE__ */ jsx(BarChart, { data: monthlyRevenue }),
                /* @__PURE__ */ jsx("hr", {}),
                /* @__PURE__ */ jsx("div", { className: "st", children: "Por categoria" }),
                CATS.map((cat) => {
                  const val = filteredAtt.filter((a) => a.itemIds?.some((id) => techMap[id]?.category === cat)).reduce((s, a) => s + Number(a.value || 0), 0);
                  if (!val) return null;
                  const pct = revenue > 0 ? val / revenue * 100 : 0;
                  return /* @__PURE__ */ jsxs("div", { style: { marginBottom: 9 }, children: [
                    /* @__PURE__ */ jsxs("div", { style: { display: "flex", justifyContent: "space-between", marginBottom: 4 }, children: [
                      /* @__PURE__ */ jsx("span", { style: { fontSize: 13, fontWeight: 600 }, children: cat }),
                      /* @__PURE__ */ jsxs("span", { style: { fontSize: 13, color: C.rose, fontWeight: 700 }, children: [
                        money(val),
                        " (",
                        pct.toFixed(0),
                        "%)"
                      ] })
                    ] }),
                    /* @__PURE__ */ jsx("div", { className: "prog-track", children: /* @__PURE__ */ jsx("div", { className: "prog-bar", style: { width: `${pct}%`, background: C.rose } }) })
                  ] }, cat);
                }),
                /* @__PURE__ */ jsx("hr", {}),
                /* @__PURE__ */ jsx("div", { className: "st", children: "Por profissional" }),
                userEarnings.map((u) => {
                  const attsPer = filteredAtt.filter((a) => a.userId === u.id);
                  const revPer = attsPer.reduce((s, a) => s + Number(a.value || 0), 0);
                  const pct = revenue > 0 ? revPer / revenue * 100 : 0;
                  return /* @__PURE__ */ jsxs("div", { style: { marginBottom: 9, display: "flex", alignItems: "center", gap: 9 }, children: [
                    /* @__PURE__ */ jsx(UserAvatar, { user: u, size: 26 }),
                    /* @__PURE__ */ jsxs("div", { style: { flex: 1 }, children: [
                      /* @__PURE__ */ jsxs("div", { style: { display: "flex", justifyContent: "space-between" }, children: [
                        /* @__PURE__ */ jsx("span", { style: { fontSize: 12.5, fontWeight: 600 }, children: u.name }),
                        /* @__PURE__ */ jsx("span", { style: { fontSize: 13, fontWeight: 700, color: u.color }, children: money(revPer) })
                      ] }),
                      /* @__PURE__ */ jsx("div", { style: { height: 4, background: C.border, borderRadius: 99, overflow: "hidden", marginTop: 4 }, children: /* @__PURE__ */ jsx("div", { style: { height: "100%", width: `${pct}%`, background: u.color, borderRadius: 99 } }) })
                    ] })
                  ] }, u.id);
                })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "card", children: [
                /* @__PURE__ */ jsx("div", { className: "card-title", children: "Atendimentos" }),
                /* @__PURE__ */ jsxs("div", { className: "card-sub", children: [
                  filteredAtt.length,
                  " no per\xEDodo"
                ] }),
                /* @__PURE__ */ jsx("div", { className: "sl", children: filteredAtt.length === 0 ? /* @__PURE__ */ jsx(Empty, { text: "Nenhum." }) : filteredAtt.sort((a, b) => b.date.localeCompare(a.date)).map((a) => /* @__PURE__ */ jsxs("div", { className: "row", children: [
                  /* @__PURE__ */ jsxs("div", { style: { flex: 1 }, children: [
                    /* @__PURE__ */ jsxs("div", { style: { display: "flex", alignItems: "center", gap: 6 }, children: [
                      /* @__PURE__ */ jsx(UserAvatar, { user: userMap[a.userId], size: 20 }),
                      /* @__PURE__ */ jsx("div", { className: "row-title", children: clientMap[a.clientId]?.name })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "row-sub", children: [
                      fmtDate(a.date),
                      " \xB7 ",
                      iN(a.itemIds)
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "row-extra", children: [
                      "Receita: ",
                      money(a.value),
                      " \xB7 Material: ",
                      money(a.materialCost)
                    ] })
                  ] }),
                  /* @__PURE__ */ jsx(Chip, { cls: "chip-green", children: money(Number(a.value) - Number(a.materialCost)) })
                ] }, a.id)) })
              ] })
            ] })
          ] }),
          tab === "tecnicas" && /* @__PURE__ */ jsxs("div", { className: "g2", children: [
            /* @__PURE__ */ jsxs("div", { className: "card", children: [
              /* @__PURE__ */ jsx("div", { className: "card-title", children: editTechId ? "Editar" : "Nova t\xE9cnica" }),
              /* @__PURE__ */ jsxs("div", { className: "fgrid", children: [
                /* @__PURE__ */ jsx(Field, { label: "Categoria", children: /* @__PURE__ */ jsx("select", { value: techForm.category, onChange: (e) => setTechForm((p) => ({ ...p, category: e.target.value })), children: CATS.map((c) => /* @__PURE__ */ jsx("option", { children: c }, c)) }) }),
                /* @__PURE__ */ jsx(Field, { label: "Nome", children: /* @__PURE__ */ jsx("input", { placeholder: "Ex: Volume brasileiro", value: techForm.name, onChange: (e) => setTechForm((p) => ({ ...p, name: e.target.value })) }) }),
                /* @__PURE__ */ jsxs("div", { className: "frow", children: [
                  /* @__PURE__ */ jsx(Field, { label: "Pre\xE7o R$", children: /* @__PURE__ */ jsx("input", { type: "number", value: techForm.price, onChange: (e) => setTechForm((p) => ({ ...p, price: e.target.value })) }) }),
                  /* @__PURE__ */ jsx(Field, { label: "Dura\xE7\xE3o (min)", children: /* @__PURE__ */ jsx("input", { type: "number", value: techForm.duration, onChange: (e) => setTechForm((p) => ({ ...p, duration: e.target.value })) }) })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "frow", children: [
                  /* @__PURE__ */ jsx(Field, { label: "Retorno (dias)", children: /* @__PURE__ */ jsx("input", { type: "number", value: techForm.returnDays, onChange: (e) => setTechForm((p) => ({ ...p, returnDays: e.target.value })) }) }),
                  /* @__PURE__ */ jsx(Field, { label: "Custo material R$", children: /* @__PURE__ */ jsx("input", { type: "number", value: techForm.materialCost, onChange: (e) => setTechForm((p) => ({ ...p, materialCost: e.target.value })) }) })
                ] }),
                /* @__PURE__ */ jsx(Field, { label: "Uso de estoque", children: /* @__PURE__ */ jsx("input", { placeholder: "Ex: 1 dose henna, cola, pads", value: techForm.stockUse, onChange: (e) => setTechForm((p) => ({ ...p, stockUse: e.target.value })) }) }),
                /* @__PURE__ */ jsx(Field, { label: "Status", children: /* @__PURE__ */ jsxs("select", { value: String(techForm.active), onChange: (e) => setTechForm((p) => ({ ...p, active: e.target.value === "true" })), children: [
                  /* @__PURE__ */ jsx("option", { value: "true", children: "Ativa" }),
                  /* @__PURE__ */ jsx("option", { value: "false", children: "Inativa" })
                ] }) }),
                /* @__PURE__ */ jsx("button", { className: "btn btn-p btn-full", onClick: saveTech, children: editTechId ? "Salvar" : "Criar" }),
                editTechId && /* @__PURE__ */ jsx("button", { className: "btn btn-g btn-full", onClick: () => {
                  setEditTechId("");
                  setTechForm(blankTech);
                }, children: "Cancelar" })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "card", children: [
              /* @__PURE__ */ jsx("div", { className: "card-title", children: "T\xE9cnicas cadastradas" }),
              CATS.map((cat) => {
                const items = techniques.filter((t) => t.category === cat);
                if (!items.length) return null;
                return /* @__PURE__ */ jsxs("div", { style: { marginBottom: 16 }, children: [
                  /* @__PURE__ */ jsx("div", { className: "st", children: cat }),
                  items.map((t) => /* @__PURE__ */ jsxs("div", { className: "row", children: [
                    /* @__PURE__ */ jsxs("div", { style: { flex: 1 }, children: [
                      /* @__PURE__ */ jsxs("div", { className: "row-title", children: [
                        t.name,
                        " ",
                        !t.active && /* @__PURE__ */ jsx(Chip, { cls: "chip-gray", children: "Inativa" })
                      ] }),
                      /* @__PURE__ */ jsxs("div", { className: "row-sub", children: [
                        money(t.price),
                        " \xB7 ",
                        t.duration,
                        "min \xB7 retorno ",
                        t.returnDays,
                        "d \xB7 custo ",
                        money(t.materialCost)
                      ] }),
                      t.stockUse && /* @__PURE__ */ jsxs("div", { className: "row-extra", children: [
                        "\u{1F4E6} ",
                        t.stockUse
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "row-actions", children: [
                      /* @__PURE__ */ jsx("button", { className: "btn btn-g btn-sm", onClick: () => {
                        setEditTechId(t.id);
                        setTechForm({ category: t.category, name: t.name, price: t.price, duration: t.duration, returnDays: t.returnDays, materialCost: t.materialCost, active: t.active, stockUse: t.stockUse || "", notes: t.notes || "" });
                      }, children: "Editar" }),
                      /* @__PURE__ */ jsx("button", { className: "btn btn-d btn-sm", onClick: () => {
                        if (window.confirm("Excluir?")) setTechniques((p) => p.filter((x) => x.id !== t.id));
                        toast("Removida.", "warn");
                      }, children: "Excluir" })
                    ] })
                  ] }, t.id))
                ] }, cat);
              })
            ] })
          ] }),
          tab === "estoque" && /* @__PURE__ */ jsxs("div", { className: "g2", children: [
            /* @__PURE__ */ jsxs("div", { className: "card", children: [
              /* @__PURE__ */ jsx("div", { className: "card-title", children: editProdId ? "Editar" : "Novo produto" }),
              /* @__PURE__ */ jsxs("div", { className: "fgrid", children: [
                /* @__PURE__ */ jsx(Field, { label: "Nome", children: /* @__PURE__ */ jsx("input", { placeholder: "Ex: Cola de c\xEDlios", value: prodForm.name, onChange: (e) => setProdForm((p) => ({ ...p, name: e.target.value })) }) }),
                /* @__PURE__ */ jsx(Field, { label: "Categoria", children: /* @__PURE__ */ jsx("select", { value: prodForm.category, onChange: (e) => setProdForm((p) => ({ ...p, category: e.target.value })), children: CATS.map((c) => /* @__PURE__ */ jsx("option", { children: c }, c)) }) }),
                /* @__PURE__ */ jsxs("div", { className: "frow", children: [
                  /* @__PURE__ */ jsx(Field, { label: "Unidade", children: /* @__PURE__ */ jsx("input", { placeholder: "ml, un, dose", value: prodForm.unit, onChange: (e) => setProdForm((p) => ({ ...p, unit: e.target.value })) }) }),
                  /* @__PURE__ */ jsx(Field, { label: "Quantidade", children: /* @__PURE__ */ jsx("input", { type: "number", value: prodForm.quantity, onChange: (e) => setProdForm((p) => ({ ...p, quantity: e.target.value })) }) })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "frow", children: [
                  /* @__PURE__ */ jsx(Field, { label: "M\xEDnimo", children: /* @__PURE__ */ jsx("input", { type: "number", value: prodForm.minQuantity, onChange: (e) => setProdForm((p) => ({ ...p, minQuantity: e.target.value })) }) }),
                  /* @__PURE__ */ jsx(Field, { label: "Uso por atend.", children: /* @__PURE__ */ jsx("input", { type: "number", value: prodForm.usagePerService, onChange: (e) => setProdForm((p) => ({ ...p, usagePerService: e.target.value })) }) })
                ] }),
                /* @__PURE__ */ jsx(Field, { label: "Custo R$", children: /* @__PURE__ */ jsx("input", { type: "number", value: prodForm.cost, onChange: (e) => setProdForm((p) => ({ ...p, cost: e.target.value })) }) }),
                /* @__PURE__ */ jsx("button", { className: "btn btn-p btn-full", onClick: saveProd, children: editProdId ? "Salvar" : "Adicionar" }),
                editProdId && /* @__PURE__ */ jsx("button", { className: "btn btn-g btn-full", onClick: () => {
                  setEditProdId("");
                  setProdForm(blankProd);
                }, children: "Cancelar" })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "card", children: [
              /* @__PURE__ */ jsx("div", { className: "card-title", children: "Estoque atual" }),
              /* @__PURE__ */ jsx("div", { className: "card-sub", children: lowStock.length > 0 ? `\u26A0\uFE0F ${lowStock.length} abaixo do m\xEDnimo` : "Tudo ok!" }),
              products.map((p) => {
                const low = Number(p.quantity) <= Number(p.minQuantity);
                const pct = Math.min(100, Number(p.quantity) / (Number(p.minQuantity) * 3) * 100);
                const srv = Math.floor(Number(p.quantity) / Number(p.usagePerService || 1));
                return /* @__PURE__ */ jsxs("div", { className: "row", style: { flexDirection: "column", alignItems: "stretch", marginBottom: 10 }, children: [
                  /* @__PURE__ */ jsxs("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center" }, children: [
                    /* @__PURE__ */ jsx("span", { className: "row-title", children: p.name }),
                    low ? /* @__PURE__ */ jsxs(Chip, { cls: "chip-amber", children: [
                      "\u26A0\uFE0F ",
                      p.quantity,
                      " ",
                      p.unit
                    ] }) : /* @__PURE__ */ jsxs(Chip, { cls: "chip-green", children: [
                      "\u2713 ",
                      p.quantity,
                      " ",
                      p.unit
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "row-sub", children: [
                    p.category,
                    " \xB7 custo ",
                    money(p.cost),
                    " \xB7 ~",
                    srv,
                    " servi\xE7o(s)"
                  ] }),
                  /* @__PURE__ */ jsx("div", { className: "prog-track", children: /* @__PURE__ */ jsx("div", { className: "prog-bar", style: { width: `${pct}%`, background: low ? C.amber : C.rose } }) }),
                  /* @__PURE__ */ jsxs("div", { className: "row-actions", style: { marginTop: 7 }, children: [
                    /* @__PURE__ */ jsx("button", { className: "btn btn-g btn-sm", onClick: () => {
                      setEditProdId(p.id);
                      setProdForm({ name: p.name, category: p.category, unit: p.unit, quantity: p.quantity, minQuantity: p.minQuantity, cost: p.cost, usagePerService: p.usagePerService });
                    }, children: "Editar" }),
                    /* @__PURE__ */ jsx("button", { className: "btn btn-d btn-sm", onClick: () => {
                      if (window.confirm("Excluir?")) {
                        setProducts((prev) => prev.filter((x) => x.id !== p.id));
                        toast("Removido.", "warn");
                      }
                    }, children: "Excluir" })
                  ] })
                ] }, p.id);
              })
            ] })
          ] }),
          tab === "marketing" && /* @__PURE__ */ jsxs("div", { className: "g2", children: [
            /* @__PURE__ */ jsxs("div", { className: "card", children: [
              /* @__PURE__ */ jsx("div", { className: "card-title", children: "Cupons de desconto" }),
              /* @__PURE__ */ jsxs("div", { className: "fgrid", children: [
                /* @__PURE__ */ jsx(Field, { label: "C\xF3digo", children: /* @__PURE__ */ jsx("input", { placeholder: "CUPOM10", value: couponForm.code, onChange: (e) => setCouponForm((p) => ({ ...p, code: e.target.value.toUpperCase() })) }) }),
                /* @__PURE__ */ jsxs("div", { className: "frow", children: [
                  /* @__PURE__ */ jsx(Field, { label: "Tipo", children: /* @__PURE__ */ jsxs("select", { value: couponForm.type, onChange: (e) => setCouponForm((p) => ({ ...p, type: e.target.value })), children: [
                    /* @__PURE__ */ jsx("option", { value: "percent", children: "Percentual (%)" }),
                    /* @__PURE__ */ jsx("option", { value: "fixed", children: "Valor fixo (R$)" })
                  ] }) }),
                  /* @__PURE__ */ jsx(Field, { label: "Valor", children: /* @__PURE__ */ jsx("input", { type: "number", value: couponForm.value, onChange: (e) => setCouponForm((p) => ({ ...p, value: e.target.value })) }) })
                ] }),
                /* @__PURE__ */ jsx(Field, { label: "Status", children: /* @__PURE__ */ jsxs("select", { value: String(couponForm.active), onChange: (e) => setCouponForm((p) => ({ ...p, active: e.target.value === "true" })), children: [
                  /* @__PURE__ */ jsx("option", { value: "true", children: "Ativo" }),
                  /* @__PURE__ */ jsx("option", { value: "false", children: "Inativo" })
                ] }) }),
                /* @__PURE__ */ jsx("button", { className: "btn btn-p btn-full", onClick: saveCoupon, children: editCouponId ? "Salvar" : "Criar" }),
                editCouponId && /* @__PURE__ */ jsx("button", { className: "btn btn-g btn-full", onClick: () => {
                  setEditCouponId("");
                  setCouponForm(blankCoupon);
                }, children: "Cancelar" })
              ] }),
              /* @__PURE__ */ jsx("hr", {}),
              coupons.map((c) => /* @__PURE__ */ jsxs("div", { className: "row", children: [
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("div", { className: "row-title", children: c.code }),
                  /* @__PURE__ */ jsxs("div", { className: "row-sub", children: [
                    c.type === "percent" ? `${c.value}%` : `${money(c.value)}`,
                    " de desconto"
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { style: { display: "flex", gap: 5, alignItems: "center" }, children: [
                  /* @__PURE__ */ jsx(Chip, { cls: c.active ? "chip-green" : "chip-gray", children: c.active ? "Ativo" : "Inativo" }),
                  /* @__PURE__ */ jsx("button", { className: "btn btn-g btn-sm", onClick: () => {
                    setEditCouponId(c.id);
                    setCouponForm({ code: c.code, type: c.type, value: c.value, active: c.active });
                  }, children: "Editar" }),
                  /* @__PURE__ */ jsx("button", { className: "btn btn-d btn-sm", onClick: () => {
                    if (window.confirm("Excluir?")) {
                      setCoupons((p) => p.filter((x) => x.id !== c.id));
                      toast("Removido.", "warn");
                    }
                  }, children: "Excluir" })
                ] })
              ] }, c.id))
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "card", children: [
              /* @__PURE__ */ jsx("div", { className: "card-title", children: "Combos" }),
              /* @__PURE__ */ jsxs("div", { className: "fgrid", children: [
                /* @__PURE__ */ jsx(Field, { label: "Nome", children: /* @__PURE__ */ jsx("input", { placeholder: "Ex: Combo Olhar Perfeito", value: comboForm.name, onChange: (e) => setComboForm((p) => ({ ...p, name: e.target.value })) }) }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("label", { className: "flabel", children: "Servi\xE7os" }),
                  /* @__PURE__ */ jsx(CheckList, { items: techniques, selected: comboForm.itemIds, toggle: togComboItem })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "frow", children: [
                  /* @__PURE__ */ jsx(Field, { label: "Pre\xE7o R$", children: /* @__PURE__ */ jsx("input", { type: "number", value: comboForm.price, onChange: (e) => setComboForm((p) => ({ ...p, price: e.target.value })) }) }),
                  /* @__PURE__ */ jsx(Field, { label: "Dura\xE7\xE3o (min)", children: /* @__PURE__ */ jsx("input", { type: "number", value: comboForm.duration, onChange: (e) => setComboForm((p) => ({ ...p, duration: e.target.value })) }) })
                ] }),
                /* @__PURE__ */ jsx("button", { className: "btn btn-p btn-full", onClick: saveCombo, children: editComboId ? "Salvar" : "Criar" }),
                editComboId && /* @__PURE__ */ jsx("button", { className: "btn btn-g btn-full", onClick: () => {
                  setEditComboId("");
                  setComboForm(blankCombo);
                }, children: "Cancelar" })
              ] }),
              /* @__PURE__ */ jsx("hr", {}),
              combos.map((c) => /* @__PURE__ */ jsxs("div", { className: "row", children: [
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("div", { className: "row-title", children: c.name }),
                  /* @__PURE__ */ jsx("div", { className: "row-sub", children: c.itemIds.map((id) => techMap[id]?.name).filter(Boolean).join(" + ") }),
                  /* @__PURE__ */ jsxs("div", { className: "row-extra", children: [
                    money(c.price),
                    " \xB7 ",
                    c.duration,
                    "min"
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "row-actions", children: [
                  /* @__PURE__ */ jsx("button", { className: "btn btn-g btn-sm", onClick: () => {
                    setEditComboId(c.id);
                    setComboForm({ name: c.name, itemIds: c.itemIds || [], price: c.price, duration: c.duration });
                  }, children: "Editar" }),
                  /* @__PURE__ */ jsx("button", { className: "btn btn-d btn-sm", onClick: () => {
                    if (window.confirm("Excluir?")) {
                      setCombos((p) => p.filter((x) => x.id !== c.id));
                      toast("Removido.", "warn");
                    }
                  }, children: "Excluir" })
                ] })
              ] }, c.id))
            ] })
          ] }),
          tab === "links" && /* @__PURE__ */ jsxs("div", { className: "g2", children: [
            /* @__PURE__ */ jsxs("div", { className: "card", children: [
              /* @__PURE__ */ jsx("div", { className: "card-title", children: "Links do est\xFAdio" }),
              /* @__PURE__ */ jsxs("div", { className: "fgrid", children: [
                /* @__PURE__ */ jsx(Field, { label: "WhatsApp", children: /* @__PURE__ */ jsx("input", { type: "tel", value: links.whatsapp, onChange: (e) => setLinks((p) => ({ ...p, whatsapp: e.target.value })) }) }),
                /* @__PURE__ */ jsx(Field, { label: "Instagram", children: /* @__PURE__ */ jsx("input", { value: links.instagram, onChange: (e) => setLinks((p) => ({ ...p, instagram: e.target.value })) }) }),
                /* @__PURE__ */ jsx(Field, { label: "Localiza\xE7\xE3o", children: /* @__PURE__ */ jsx("input", { value: links.location, onChange: (e) => setLinks((p) => ({ ...p, location: e.target.value })) }) })
              ] }),
              /* @__PURE__ */ jsxs("div", { style: { display: "flex", gap: 8, flexWrap: "wrap", marginTop: 12 }, children: [
                /* @__PURE__ */ jsx("a", { className: "btn btn-wa", href: `https://wa.me/${normalizeWaPhone(links.whatsapp)}`, target: "_blank", rel: "noopener noreferrer", children: "\u{1F4F1} WhatsApp" }),
                /* @__PURE__ */ jsx("a", { className: "btn", style: { background: C.rose, color: "#fff" }, href: links.instagram, target: "_blank", rel: "noopener noreferrer", children: "\u{1F4F8} Instagram" }),
                /* @__PURE__ */ jsx("a", { className: "btn", style: { background: C.blue, color: "#fff" }, href: links.location, target: "_blank", rel: "noopener noreferrer", children: "\u{1F4CD} Mapa" })
              ] }),
              /* @__PURE__ */ jsx("hr", {}),
              /* @__PURE__ */ jsx("div", { style: { fontSize: 15, fontWeight: 700, fontFamily: "'Playfair Display',serif", marginBottom: 10 }, children: "Calend\xE1rio de hor\xE1rios dispon\xEDveis" }),
              /* @__PURE__ */ jsxs("div", { className: "fgrid", children: [
                /* @__PURE__ */ jsx(Field, { label: "Nome do est\xFAdio", children: /* @__PURE__ */ jsx("input", { value: studio.name, onChange: (e) => setStudio((p) => ({ ...p, name: e.target.value })) }) }),
                /* @__PURE__ */ jsx(Field, { label: "Slogan", children: /* @__PURE__ */ jsx("input", { placeholder: "Real\xE7ando sua beleza natural", value: studio.tagline, onChange: (e) => setStudio((p) => ({ ...p, tagline: e.target.value })) }) })
              ] }),
              /* @__PURE__ */ jsx("button", { className: "btn btn-p btn-full", style: { marginTop: 12 }, onClick: openPublicAvailability, children: "\u{1F310} Abrir calend\xE1rio p\xFAblico" }),
              /* @__PURE__ */ jsx("button", { className: "btn btn-g btn-full", style: { marginTop: 8 }, onClick: () => {
                navigator.clipboard?.writeText(publicAvailabilityUrl());
                toast("Link do calend\xE1rio copiado!");
              }, children: "\u{1F4CB} Copiar link do calend\xE1rio" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "card", children: [
              /* @__PURE__ */ jsx("div", { className: "card-title", children: "Enviar links para cliente" }),
              /* @__PURE__ */ jsx("div", { className: "tab-pills", children: clients.map((c) => /* @__PURE__ */ jsx("button", { className: `tab-pill${selectedClientId === c.id ? " active" : ""}`, onClick: () => setSelectedClientId(c.id), children: c.name.split(" ")[0] }, c.id)) }),
              selectedClient && /* @__PURE__ */ jsxs("div", { style: { display: "flex", flexDirection: "column", gap: 7 }, children: [
                /* @__PURE__ */ jsx("a", { className: "btn btn-wa btn-full", href: waLink(selectedClient.phone, `Oi ${selectedClient.name}! \u{1F338}

\u{1F4F1} WhatsApp: https://wa.me/${normalizeWaPhone(links.whatsapp)}
\u{1F4F8} Instagram: ${links.instagram}
\u{1F4CD} Como chegar: ${links.location}
\u{1F5D3} Hor\xE1rios dispon\xEDveis: ${publicAvailabilityUrl()}`), target: "_blank", rel: "noopener noreferrer", children: "\u{1F4AC} Enviar links" }),
                /* @__PURE__ */ jsx("a", { className: "btn btn-wa btn-full", style: { background: C.rose }, href: waLink(selectedClient.phone, `Oi ${selectedClient.name}! \u{1F338} Est\xE1 chegando o momento do seu retorno. Quer agendar?`), target: "_blank", rel: "noopener noreferrer", children: "\u{1F501} Mensagem de retorno" }),
                isBdayMonth(selectedClient.birthDate, todayISO) && /* @__PURE__ */ jsx("a", { className: "btn btn-full", style: { background: C.gold, color: "#fff" }, href: waLink(selectedClient.phone, `\u{1F389} Parab\xE9ns ${selectedClient.name.split(" ")[0]}! ${studio.name} te deseja um dia lindo! \u2728\u{1F338}`), target: "_blank", rel: "noopener noreferrer", children: "\u{1F382} Mensagem de anivers\xE1rio" })
              ] })
            ] })
          ] }),
          tab === "config" && /* @__PURE__ */ jsxs("div", { className: "g2", children: [
            /* @__PURE__ */ jsxs("div", { className: "card", children: [
              /* @__PURE__ */ jsx("div", { className: "card-title", children: "Usu\xE1rios do sistema" }),
              /* @__PURE__ */ jsx("div", { className: "card-sub", children: "M\xE1ximo 3 profissionais \u2014 cada uma com PIN pr\xF3prio" }),
              /* @__PURE__ */ jsxs("div", { className: "fgrid", children: [
                /* @__PURE__ */ jsxs("div", { className: "frow", children: [
                  /* @__PURE__ */ jsx(Field, { label: "Nome", children: /* @__PURE__ */ jsx("input", { placeholder: "Nome", value: userForm.name, onChange: (e) => setUserForm((p) => ({ ...p, name: e.target.value })) }) }),
                  /* @__PURE__ */ jsx(Field, { label: "Fun\xE7\xE3o", children: /* @__PURE__ */ jsx("input", { placeholder: "Admin, Profissional...", value: userForm.role, onChange: (e) => setUserForm((p) => ({ ...p, role: e.target.value })) }) })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "frow", children: [
                  /* @__PURE__ */ jsx(Field, { label: "PIN (4 d\xEDgitos)", children: /* @__PURE__ */ jsx("input", { placeholder: "1234", maxLength: 4, value: userForm.pin, onChange: (e) => setUserForm((p) => ({ ...p, pin: e.target.value.replace(/\D/g, "").slice(0, 4) })) }) }),
                  /* @__PURE__ */ jsx(Field, { label: "Emoji", children: /* @__PURE__ */ jsx("select", { value: userForm.emoji, onChange: (e) => setUserForm((p) => ({ ...p, emoji: e.target.value })), children: ["\u{1F485}", "\u{1F451}", "\u2728", "\u{1F338}", "\u{1F484}", "\u{1F98B}", "\u{1F33A}", "\u{1F4AB}", "\u2B50", "\u{1F380}"].map((e) => /* @__PURE__ */ jsx("option", { value: e, children: e }, e)) }) })
                ] }),
                /* @__PURE__ */ jsx(Field, { label: "Cor", children: /* @__PURE__ */ jsx("div", { style: { display: "flex", gap: 7, flexWrap: "wrap" }, children: USER_COLORS.map((col) => /* @__PURE__ */ jsx("button", { onClick: () => setUserForm((p) => ({ ...p, color: col })), style: { width: 30, height: 30, borderRadius: 8, background: col, border: userForm.color === col ? `3px solid ${C.ink}` : "3px solid transparent", cursor: "pointer" } }, col)) }) }),
                /* @__PURE__ */ jsx("button", { className: "btn btn-p btn-full", onClick: saveUser, children: editUserId ? "Salvar" : "Adicionar" }),
                editUserId && /* @__PURE__ */ jsx("button", { className: "btn btn-g btn-full", onClick: () => {
                  setEditUserId("");
                  setUserForm(blankUser);
                }, children: "Cancelar" })
              ] }),
              /* @__PURE__ */ jsx("hr", {}),
              users.map((u) => /* @__PURE__ */ jsxs("div", { className: "row", children: [
                /* @__PURE__ */ jsxs("div", { style: { display: "flex", gap: 9, alignItems: "center" }, children: [
                  /* @__PURE__ */ jsx(UserAvatar, { user: u, size: 38 }),
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsxs("div", { className: "row-title", children: [
                      u.name,
                      " ",
                      u.id === loggedId && /* @__PURE__ */ jsx(Chip, { cls: "chip-rose", children: "Logado" })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "row-sub", children: [
                      u.role,
                      " \xB7 PIN: ",
                      u.id === loggedId ? u.pin : "\u2022\u2022\u2022\u2022"
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "row-actions", children: [
                  /* @__PURE__ */ jsx("button", { className: "btn btn-g btn-sm", onClick: () => {
                    setEditUserId(u.id);
                    setUserForm({ name: u.name, role: u.role, pin: u.pin, color: u.color || C.rose, emoji: u.emoji || "\u{1F485}" });
                  }, children: "Editar" }),
                  u.id !== loggedId && /* @__PURE__ */ jsx("button", { className: "btn btn-d btn-sm", onClick: () => {
                    if (window.confirm("Excluir?")) {
                      setUsers((p) => p.filter((x) => x.id !== u.id));
                      toast("Removido.", "warn");
                    }
                  }, children: "Excluir" })
                ] })
              ] }, u.id))
            ] }),
            /* @__PURE__ */ jsxs("div", { style: { display: "flex", flexDirection: "column", gap: 16 }, children: [
              /* @__PURE__ */ jsxs("div", { className: "card", children: [
                /* @__PURE__ */ jsx("div", { className: "card-title", children: "Nuvem compartilhada" }),
                /* @__PURE__ */ jsx("div", { className: "card-sub", children: "Supabase para Karina e KET verem a mesma agenda" }),
                /* @__PURE__ */ jsx(Alrt, { type: "amber", icon: "\u26A0\uFE0F", children: "A nuvem j\xE1 est\xE1 configurada para o piloto. A sincroniza\xE7\xE3o \xE9 por workspace e usa a chave p\xFAblica publishable/anon do Supabase." }),
                /* @__PURE__ */ jsxs("div", { className: "fgrid", children: [
                  /* @__PURE__ */ jsx(Field, { label: "Supabase URL", children: /* @__PURE__ */ jsx("input", { placeholder: "https://xxxxx.supabase.co", value: cloud.url, onChange: (e) => {
                    setCloudReady(false);
                    setCloud((p) => ({ ...p, url: e.target.value.trim() }));
                  } }) }),
                  /* @__PURE__ */ jsx(Field, { label: "Chave p\xFAblica Supabase", children: /* @__PURE__ */ jsx("textarea", { placeholder: "sb_publishable_... ou eyJ...", value: cloud.anonKey, onChange: (e) => {
                    setCloudReady(false);
                    setCloud((p) => ({ ...p, anonKey: e.target.value.trim() }));
                  }, style: { minHeight: 64 } }) }),
                  /* @__PURE__ */ jsx(Field, { label: "Workspace ID", children: /* @__PURE__ */ jsx("input", { value: cloud.workspaceId, onChange: (e) => {
                    setCloudReady(false);
                    setCloud((p) => ({ ...p, workspaceId: e.target.value.trim() || DEFAULT_WORKSPACE_ID }));
                  } }) }),
                  /* @__PURE__ */ jsxs("label", { className: "cl-item", style: { margin: 0 }, children: [
                    /* @__PURE__ */ jsx("input", { type: "checkbox", checked: cloud.enabled, onChange: (e) => {
                      setCloudReady(false);
                      setCloud((p) => ({ ...p, enabled: e.target.checked }));
                    } }),
                    /* @__PURE__ */ jsx("span", { className: "cl-text", children: "Ativar sincroniza\xE7\xE3o autom\xE1tica" })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { style: { display: "flex", gap: 7, flexWrap: "wrap" }, children: [
                    /* @__PURE__ */ jsx("button", { className: "btn btn-p btn-sm", disabled: cloudBusy, onClick: () => pullCloud(true), children: "\u2601 Baixar da nuvem" }),
                    /* @__PURE__ */ jsx("button", { className: "btn btn-g btn-sm", disabled: cloudBusy, onClick: () => pushCloud(true), children: "\u2191 Enviar dados atuais" }),
                    /* @__PURE__ */ jsx("button", { className: "btn btn-g btn-sm", onClick: () => {
                      navigator.clipboard?.writeText(SUPABASE_SQL);
                      toast("SQL copiado!");
                    }, children: "\u{1F4CB} Copiar SQL" })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { style: { display: "flex", alignItems: "center", gap: 7, fontSize: 12, color: C.mist }, children: [
                    /* @__PURE__ */ jsx("span", { className: `cloud-dot cloud-${cloudKind}` }),
                    /* @__PURE__ */ jsx("span", { children: cloudBusy ? "Sincronizando..." : cloudMsg || "Nuvem ainda n\xE3o configurada." })
                  ] }),
                  cloud.lastSync && /* @__PURE__ */ jsxs("div", { style: { fontSize: 11, color: C.mist }, children: [
                    "\xDAltima sincroniza\xE7\xE3o neste navegador: ",
                    new Date(cloud.lastSync).toLocaleString("pt-BR")
                  ] }),
                  /* @__PURE__ */ jsxs("details", { children: [
                    /* @__PURE__ */ jsx("summary", { style: { fontSize: 12, fontWeight: 700, cursor: "pointer", color: C.rose }, children: "Ver SQL da tabela" }),
                    /* @__PURE__ */ jsx("div", { className: "codebox", style: { marginTop: 8 }, children: SUPABASE_SQL })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "card", children: [
                /* @__PURE__ */ jsx("div", { className: "card-title", children: "Feriados" }),
                /* @__PURE__ */ jsxs("div", { className: "fgrid", children: [
                  /* @__PURE__ */ jsxs("div", { className: "frow", children: [
                    /* @__PURE__ */ jsx(Field, { label: "Data", children: /* @__PURE__ */ jsx("input", { type: "date", value: holidayForm.date, onChange: (e) => setHolidayForm((p) => ({ ...p, date: e.target.value })) }) }),
                    /* @__PURE__ */ jsx(Field, { label: "Nome", children: /* @__PURE__ */ jsx("input", { placeholder: "Ex: Natal", value: holidayForm.name, onChange: (e) => setHolidayForm((p) => ({ ...p, name: e.target.value })) }) })
                  ] }),
                  /* @__PURE__ */ jsx("button", { className: "btn btn-p btn-full", onClick: saveHoliday, children: editHolidayId ? "Salvar" : "Adicionar" }),
                  editHolidayId && /* @__PURE__ */ jsx("button", { className: "btn btn-g btn-full", onClick: () => {
                    setEditHolidayId("");
                    setHolidayForm(blankHoliday);
                  }, children: "Cancelar" })
                ] }),
                /* @__PURE__ */ jsx("hr", {}),
                [...holidays].sort((a, b) => a.date.localeCompare(b.date)).map((h) => /* @__PURE__ */ jsxs("div", { className: "row", children: [
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("div", { className: "row-title", children: h.name }),
                    /* @__PURE__ */ jsx("div", { className: "row-sub", children: fmtDate(h.date) })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "row-actions", children: [
                    /* @__PURE__ */ jsx("button", { className: "btn btn-g btn-sm", onClick: () => {
                      setEditHolidayId(h.id);
                      setHolidayForm({ date: h.date, name: h.name });
                    }, children: "Editar" }),
                    /* @__PURE__ */ jsx("button", { className: "btn btn-d btn-sm", onClick: () => {
                      if (window.confirm("Excluir?")) {
                        setHolidays((p) => p.filter((x) => x.id !== h.id));
                        toast("Removido.", "warn");
                      }
                    }, children: "Excluir" })
                  ] })
                ] }, h.id))
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "card", children: [
                /* @__PURE__ */ jsx("div", { className: "card-title", children: "Dados & Backup" }),
                /* @__PURE__ */ jsxs("div", { style: { display: "flex", flexDirection: "column", gap: 7, marginTop: 11 }, children: [
                  /* @__PURE__ */ jsx("button", { className: "btn btn-p btn-full", onClick: () => {
                    try {
                      localStorage.setItem("bapp-v4", JSON.stringify(appData));
                      toast("Dados salvos!");
                    } catch {
                      toast("Erro.", "error");
                    }
                  }, children: "\u{1F4BE} Salvar agora" }),
                  /* @__PURE__ */ jsx("button", { className: "btn btn-g btn-full", onClick: exportBackup, children: "\u2B07 Exportar JSON" }),
                  /* @__PURE__ */ jsxs("label", { className: "btn btn-g btn-full", style: { cursor: "pointer", justifyContent: "center" }, children: [
                    "\u2B06 Importar JSON",
                    /* @__PURE__ */ jsx("input", { type: "file", accept: ".json", onChange: importBackup, style: { display: "none" } })
                  ] }),
                  /* @__PURE__ */ jsx("button", { className: "btn btn-d btn-full", onClick: resetDemo, children: "\u{1F5D1} Resetar demonstra\xE7\xE3o" })
                ] })
              ] })
            ] })
          ] })
        ] })
      ] })
    ] })
  ] });
}
export {
  BeautyApp as default
};
