(this.webpackJsonparkareact=this.webpackJsonparkareact||[]).push([[0],{21:function(e){e.exports=JSON.parse('{"a":[{"layers":[[{"position":[0,2.5,-10],"userDataType":"blue"},{"position":[-5,0,-10],"userDataType":"yellow"},{"position":[0,0,-10],"userDataType":"yellow"},{"position":[5,0,-10],"userDataType":"yellow"},{"position":[0,-2.5,-10],"userDataType":"blue"}],[{"position":[-2.5,1.25,-5],"userDataType":"pink"},{"position":[2.5,1.25,-5],"userDataType":"pink"},{"position":[-2.5,-1.25,-5],"userDataType":"red"},{"position":[2.5,-1.25,-5],"userDataType":"red"}]]}]}')},23:function(e,t,a){e.exports=a.p+"static/media/brick.eed03f13.mp3"},24:function(e,t,a){e.exports=a.p+"static/media/wall.4c0964a4.mp3"},29:function(e,t,a){e.exports=a.p+"static/media/cross.00397b42.jpg"},35:function(e,t,a){e.exports=a(44)},43:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var n=a(2),r=a(0),i=a.n(r),o=a(10),s=a.n(o),c=a(8),u=a(48),l=new function e(){var t=this;return Object(c.a)(this,e),this.launchGame=function(){t.inGame.next(!0)},this.launchBall=function(){t.ballLaunched.next(!0)},this.resetBall=function(){t.ballLaunched.next(!1)},this.setGlitching=function(e){return t.glitching.next(e)},e.instance||(console.log("init gamestore..."),e.instance=this,this.balls=new u.a(3),this.inGame=new u.a(!1),this.ballLaunched=new u.a(!1),this.currentLevel=new u.a(1),this.score=new u.a(0),this.tiles=new u.a([]),this.glitching=new u.a(!1)),e.instance};Object.freeze(l);var m=a(20),f=Object(m.a)((function(e,t){return{tiles:[],getTiles:function(){return t().tiles},buildLevel:function(t){e((function(){return{tiles:t}}))}}})),h=Object(n.a)(f,1)[0],d=a(21);function p(){var e=h().buildLevel;return Object(r.useEffect)((function(){e(d.a[0].layers.flat())}),[e]),i.a.createElement("div",{id:"welcome",onClick:l.launchGame,style:{margin:"auto"}},"Click to start")}var b=a(6),v=a(45),g=a(1),y=a(22),E=a.n(y),O=a(23),w=a.n(O),j=a(24),D=a.n(j);function x(e){var t=e.position,a=e.size,o=void 0===a?[2,2,2]:a,s=e.userData,c=e.id,u=Object(r.useState)(3),m=Object(n.a)(u,2),f=m[0],h=m[1];Object(r.useLayoutEffect)((function(){var e=l.balls.subscribe(h);return function(){return e.unsubscribe()}}),[]);var d=isNaN(s.strength),p=isNaN(s.isCorner),y=Object(r.useState)(),O=Object(n.a)(y,2),j=O[0],x=O[1];var M=null;d?M=D.a:s.isRoof||(M=w.a);var S=new E.a(M),F=Object(b.e)().scene,P=Object(v.c)((function(){return{type:p?"Static":"Kinematic",args:o.map((function(e){return e/2})),position:t,userData:s,onCollide:function(e){S.play(),d?s.isRoof&&(l.resetBall(),l.setGlitching(!0),setTimeout((function(){l.setGlitching(!1),h(f-1)}),300)):(s.strength--,z.position.set(-1e3,-1e3,-100),x(function(){for(var e=new g.Geometry,t=new g.PointsMaterial({color:s.color,size:.9,transparent:!0,depthTest:!1,sizeAttenuation:!0,opacity:.9}),a=0;a<25;a++){var n=2.5*Math.random()-1.25+C.current.position.x,r=2.5*Math.random()-1.25+C.current.position.y,i=2.5*Math.random()-1.25+C.current.position.z,o=new g.Vector3(n,r,i);e.vertices.push(o)}var c=new g.Points(e,t);return c.customRotation=2*Math.random()-1,F.add(c),c}()))}}})),_=Object(n.a)(P,2),C=_[0],z=_[1];return Object(b.c)((function(){j&&j.material.opacity>0&&(j.material.opacity-=.0075,j.scale.x+=.01,j.scale.y+=.01,j.rotation.x+=j.customRotation/50)})),i.a.createElement("mesh",{key:c,ref:C,receiveShadow:!0,userData:s},i.a.createElement("boxGeometry",{attach:"geometry",args:o}),i.a.createElement("meshStandardMaterial",{attach:"material",color:s.color}))}var M=a(5);function S(e){var t=e.position,a=e.userData;return i.a.createElement(x,{position:t,userData:a})}function F(){return(0,h().getTiles)().map((function(e,t){return i.a.createElement(S,{key:t,position:e.position,userData:M.a[e.userDataType]})}))}function P(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(x,{position:[-12.5,0,0],userData:M.b.side,size:[1,25,130]}),i.a.createElement(x,{position:[12.5,0,0],userData:M.b.side,size:[1,25,130]}),i.a.createElement(x,{position:[0,12.5,0],userData:M.b.side,size:[25,1,130]}),i.a.createElement(x,{position:[0,-12.5,0],userData:M.b.side,size:[25,1,130]}),i.a.createElement(x,{position:[0,0,-12.5],userData:M.b.ground,size:[25,25,1],rotation:Math.PI/2}),i.a.createElement(x,{position:[-12,-12,-12.5],userData:M.b.corner,size:[.25,.25,130],rotation:Math.PI/2}),i.a.createElement(x,{position:[-12,12,-12.5],userData:M.b.corner,size:[.25,.25,130],rotation:Math.PI/2}),i.a.createElement(x,{position:[12,12,-12.5],userData:M.b.corner,size:[.25,.25,130],rotation:Math.PI/2}),i.a.createElement(x,{position:[12,-12,-12.5],userData:M.b.corner,size:[.25,.25,130],rotation:Math.PI/2}),i.a.createElement(x,{position:[0,12,-12],userData:M.b.corner,size:[130,.25,.25],rotation:Math.PI/2}),i.a.createElement(x,{position:[0,-12,-12],userData:M.b.corner,size:[130,.25,.25],rotation:Math.PI/2}),i.a.createElement(x,{position:[12,0,-12],userData:M.b.corner,size:[.25,120,.25],rotation:Math.PI}),i.a.createElement(x,{position:[-12,0,-12],userData:M.b.corner,size:[.25,120,.25],rotation:Math.PI}),i.a.createElement(x,{position:[0,0,45],userData:M.b.roof,size:[24,24,.001],rotation:Math.PI/2}))}var _=a(29),C=a.n(_);function z(){var e=Object(r.useState)(!1),t=Object(n.a)(e,2),a=t[0],o=t[1];Object(r.useLayoutEffect)((function(){var e=l.ballLaunched.subscribe(o);return function(){return e.unsubscribe()}}),[]);var s=Object(b.d)(g.TextureLoader,C.a),c=Object(v.e)((function(){return{mass:1,args:1,position:[0,0,0],onCollide:function(e){}}})),u=Object(n.a)(c,2),m=u[0],f=u[1];return Object(b.c)((function(e){a||(f.position.set(10*e.mouse.x,10*e.mouse.y,17.6),f.velocity.set(0,0,0,1))})),i.a.createElement("mesh",{castShadow:!0,receiveShadow:!0,ref:m},i.a.createElement("sphereBufferGeometry",{attach:"geometry",args:[.5,64,64]}),i.a.createElement("meshStandardMaterial",{map:s,attach:"material"}))}function T(){var e=Object(v.e)((function(){return{args:1.3,scale:[1,1,.01],position:[0,0,10],sleepSpeedLimit:4,onCollide:function(e){}}})),t=Object(n.a)(e,2),a=t[0],r=t[1];function o(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,a=e<0;return a?e<-t?-t:e:e>t?t:e}return Object(b.c)((function(e){var t=10*e.mouse.x,n=10*e.mouse.y,i=t-a.current.position.x,s=n-a.current.position.y;r.position.set(a.current.position.x+o(i),a.current.position.y+o(s),18)})),i.a.createElement(i.a.Fragment,null,i.a.createElement("mesh",{ref:a,castShadow:!0},i.a.createElement("boxGeometry",{attach:"geometry",args:[5,5,1]}),i.a.createElement("meshBasicMaterial",{attach:"material",wireframe:!0,color:"#FFF"})))}function G(){var e=Object(r.useRef)();return Object(r.useLayoutEffect)((function(){e.current.shadow.camera=new g.OrthographicCamera(-100,100,100,-100,.5,100),e.current.shadow.mapSize.width=2048,e.current.shadow.mapSize.height=2048}),[]),i.a.createElement(i.a.Fragment,null,i.a.createElement("ambientLight",{intensity:.75}),i.a.createElement("directionalLight",{ref:e,position:[0,0,25],"shadow-camera-near":.1,"shadow-camera-far":1500,castShadow:!0}))}var L=a(31),k=a(30),R=a(32),B=a(33),I=a(4),U={uniforms:{tDiffuse:{value:null},tDisp:{value:null},byp:{value:0},amount:{value:.08},angle:{value:.02},seed:{value:.02},seed_x:{value:.02},seed_y:{value:.02},distortion_x:{value:.5},distortion_y:{value:.6},col_s:{value:.05}},vertexShader:"varying vec2 vUv;\n    void main() {\n      vUv = uv;\n      gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n    }",fragmentShader:"uniform int byp; //should we apply the glitch\n    uniform sampler2D tDiffuse;\n    uniform sampler2D tDisp;\n    uniform float amount;\n    uniform float angle;\n    uniform float seed;\n    uniform float seed_x;\n    uniform float seed_y;\n    uniform float distortion_x;\n    uniform float distortion_y;\n    uniform float col_s;\n    varying vec2 vUv;\n    float rand(vec2 co){\n      return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453);\n    }\n    void main() {\n      if(byp<1) {\n        vec2 p = vUv;\n        float xs = floor(gl_FragCoord.x / 0.5);\n        float ys = floor(gl_FragCoord.y / 0.5);\n        //based on staffantans glitch shader for unity https://github.com/staffantan/unityglitch\n        vec4 normal = texture2D (tDisp, p*seed*seed);\n        if(p.y<distortion_x+col_s && p.y>distortion_x-col_s*seed) {\n          if(seed_x>0.){\n            p.y = 1. - (p.y + distortion_y);\n          }\n          else {\n            p.y = distortion_y;\n          }\n        }\n        p.x+=normal.x*seed_x*(seed/5.);\n        p.y+=normal.y*seed_y*(seed/5.);\n        //base from RGB shift shader\n        vec2 offset = amount * vec2( cos(angle), sin(angle));\n        vec4 cr = texture2D(tDiffuse, p + offset);\n        vec4 cga = texture2D(tDiffuse, p);\n        vec4 cb = texture2D(tDiffuse, p - offset);\n        gl_FragColor = vec4(cr.r, cga.g, cb.b, cga.a);\n        //add noise\n        vec4 snow = 200.*amount*vec4(rand(vec2(xs * seed,ys * seed*50.))*0.05);\n        gl_FragColor = gl_FragColor+ snow;\n      }\n      else {\n        gl_FragColor=texture2D (tDiffuse, vUv);\n      }\n    }"},N=function(e){I.a.call(this),void 0===U&&console.error("THREE.GlitchPass relies on THREE.DigitalGlitch");var t=U;this.uniforms=g.UniformsUtils.clone(t.uniforms),void 0===e&&(e=64),this.uniforms.tDisp.value=this.generateHeightmap(e),this.material=new g.ShaderMaterial({uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.camera=new g.OrthographicCamera(-1,1,1,-1,0,1),this.scene=new g.Scene,this.quad=new g.Mesh(new g.PlaneBufferGeometry(2,2),null),this.quad.frustumCulled=!1,this.scene.add(this.quad),this.factor=0};function A(e){var t=Object(r.useState)(!1),a=Object(n.a)(t,2),o=a[0],s=a[1];Object(r.useLayoutEffect)((function(){var e=l.glitching.subscribe(s);return function(){return e.unsubscribe()}}),[]);var c=Object(r.useRef)(),u=Object(b.e)(),m=u.scene,f=u.gl,h=u.size,d=Object(r.useMemo)((function(){return new g.Vector2(h.width,h.height)}),[h]);return Object(r.useEffect)((function(){c.current.setSize(h.width,h.height)}),[h]),Object(b.c)((function(){return c.current.render()}),1),i.a.createElement("effectComposer",{ref:c,args:[f]},i.a.createElement("renderPass",{attachArray:"passes",scene:m,camera:e.camera}),i.a.createElement("unrealBloomPass",{attachArray:"passes",args:[d,.25,.2,0]}),i.a.createElement("glitchPass",{attachArray:"passes",factor:o?1:0}),i.a.createElement("filmPass",{attachArray:"passes",args:[.35,.6,1500,!1]}))}function q(){var e=Object(r.useState)(3),t=Object(n.a)(e,2),a=t[0],o=t[1],s=Object(r.useState)(!1),c=Object(n.a)(s,2),u=c[0],m=c[1],f=Object(r.useState)(1),h=Object(n.a)(f,2),d=h[0],p=h[1];Object(r.useLayoutEffect)((function(){var e=l.balls.subscribe(o);return e.add(l.currentLevel.subscribe(p)),e.add(l.ballLaunched.subscribe(m)),function(){return e.unsubscribe()}}),[]);var y=Object(r.useMemo)((function(){var e=new g.PerspectiveCamera(45,1,1,57);return e.position.set(0,0,45),e}),[]);return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{id:"game",onClick:function(){a<0?l.resetGame():u||l.launchBall()}},a>=0?i.a.createElement("div",{id:"canvas"},i.a.createElement(b.a,{shadowMap:!0,camera:y},i.a.createElement(G,null),i.a.createElement(v.a,{iterations:20,tolerance:1e-4,defaultContactMaterial:{friction:0,restitution:1},gravity:[0,0,0],allowSleep:!1},i.a.createElement(P,null),i.a.createElement(F,null),i.a.createElement(T,null),i.a.createElement(z,null),i.a.createElement(A,{camera:y})))):i.a.createElement("div",null,i.a.createElement("p",null,"Game Over"),i.a.createElement("p",null,"Click to restart")),i.a.createElement("div",{id:"hud"},i.a.createElement("p",null,"Balls: ",a),i.a.createElement("p",null,"Level: ",d),i.a.createElement("p",{onClick:l.resetGame},"Click to restart"))))}N.prototype=Object.assign(Object.create(I.a.prototype),{constructor:N,render:function(e,t,a,n,r){var i=Math.max(0,this.factor);this.uniforms.tDiffuse.value=a.texture,this.uniforms.seed.value=Math.random()*i,this.uniforms.byp.value=0,i?(this.uniforms.amount.value=Math.random()/90*i,this.uniforms.angle.value=g.Math.randFloat(-Math.PI,Math.PI)*i,this.uniforms.distortion_x.value=g.Math.randFloat(0,1)*i,this.uniforms.distortion_y.value=g.Math.randFloat(0,1)*i,this.uniforms.seed_x.value=g.Math.randFloat(-.3,.3)*i,this.uniforms.seed_y.value=g.Math.randFloat(-.3,.3)*i):this.uniforms.byp.value=1,this.quad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),e.render(this.scene,this.camera)):(e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera))},generateHeightmap:function(e){for(var t=new Float32Array(e*e*3),a=e*e,n=0;n<a;n++){var r=g.Math.randFloat(0,1);t[3*n+0]=r,t[3*n+1]=r,t[3*n+2]=r}var i=new g.DataTexture(t,e,e,g.RGBFormat,g.FloatType);return i.needsUpdate=!0,i}}),Object(b.b)({EffectComposer:L.a,RenderPass:k.a,UnrealBloomPass:R.a,FilmPass:B.a,GlitchPass:N});a(43);function H(){var e=Object(r.useState)(!1),t=Object(n.a)(e,2),a=t[0],o=t[1];return Object(r.useLayoutEffect)((function(){var e=l.inGame.subscribe(o);return function(){return e.unsubscribe()}}),[]),i.a.createElement("div",{className:"main"},a?i.a.createElement(q,null):i.a.createElement(p,null))}a.d(t,"default",(function(){return H})),s.a.render(i.a.createElement(H,null),document.getElementById("root"))},5:function(e){e.exports=JSON.parse('{"a":{"red":{"color":"#fe5e51","bonusProbability":0,"strength":2,"score":500},"pink":{"color":"#ffb5ff","bonusProbability":0,"strength":1,"score":250},"blue":{"color":"#36abb5","bonusProbability":0,"strength":3,"score":1000},"yellow":{"color":"#f6db5f","bonusProbability":0,"strength":2,"score":500}},"b":{"side":{"color":"#5433FF"},"ground":{"color":"#5433FF"},"roof":{"isRoof":true,"color":"#000"},"corner":{"color":"#FFF","isCorner":true}}}')}},[[35,1,2]]]);
//# sourceMappingURL=main.1065ea74.chunk.js.map