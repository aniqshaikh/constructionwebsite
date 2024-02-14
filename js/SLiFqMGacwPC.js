var playerInit=[];document.addEventListener('DOMContentLoaded',function(){const overlayMask=document.createElement('div');overlayMask.className='overlay-mask';let embedWrappers=document.querySelectorAll('.ep-embed-content-wraper');embedWrappers.forEach(wrapper=>{initPlayer(wrapper)});const observer=new MutationObserver(mutations=>{mutations.forEach(mutation=>{const addedNodes=Array.from(mutation.addedNodes);addedNodes.forEach(node=>{traverseAndInitPlayer(node)})})});observer.observe(document.body,{childList:!0,subtree:!0});function traverseAndInitPlayer(node){if(node.nodeType===Node.ELEMENT_NODE&&node.classList.contains('ep-embed-content-wraper')){initPlayer(node)}
if(node.hasChildNodes()){node.childNodes.forEach(childNode=>{traverseAndInitPlayer(childNode)})}}});function initPlayer(wrapper){const playerId=wrapper.getAttribute('data-playerid');let options=document.querySelector(`[data-playerid="${playerId}"]`)?.getAttribute('data-options');if(!options){return!1}
options=JSON.parse(options);const pipPlayIconElement=document.createElement('div');pipPlayIconElement.className='pip-play';pipPlayIconElement.innerHTML='<svg width="20" height="20" viewBox="-0.15 -0.112 0.9 0.9" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin" class="jam jam-play"><path fill="#fff" d="M.518.357A.037.037 0 0 0 .506.306L.134.08a.039.039 0 0 0-.02-.006.038.038 0 0 0-.038.037v.453c0 .007.002.014.006.02a.039.039 0 0 0 .052.012L.506.37A.034.034 0 0 0 .518.358zm.028.075L.174.658A.115.115 0 0 1 .017.622.109.109 0 0 1 0 .564V.111C0 .05.051 0 .114 0c.021 0 .042.006.06.017l.372.226a.11.11 0 0 1 0 .189z"/></svg>';pipPlayIconElement.style.display='none';const pipPauseIconElement=document.createElement('div');pipPauseIconElement.className='pip-pause';pipPauseIconElement.innerHTML='<svg fill="#fff" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 2.5 2.5" xml:space="preserve"><path d="M1.013.499 1.006.5V.499H.748a.054.054 0 0 0-.054.054v1.394c0 .03.024.054.054.054h.266a.054.054 0 0 0 .054-.054V.553a.054.054 0 0 0-.054-.054zm.793 1.448V.553a.054.054 0 0 0-.054-.054L1.745.5V.499h-.258a.054.054 0 0 0-.054.054v1.394c0 .03.024.054.054.054h.265a.054.054 0 0 0 .054-.054z"/></svg>';const pipCloseElement=document.createElement('div');pipCloseElement.className='pip-close';pipCloseElement.innerHTML='<svg width="20" height="20" viewBox="0 0 0.9 0.9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M.198.198a.037.037 0 0 1 .053 0L.45.397.648.199a.037.037 0 1 1 .053.053L.503.45l.198.198a.037.037 0 0 1-.053.053L.45.503.252.701A.037.037 0 0 1 .199.648L.397.45.198.252a.037.037 0 0 1 0-.053z" fill="#fff"/></svg>';if(playerId&&!wrapper.classList.contains('plyr-initialized')){let selector=`[data-playerid="${playerId}"] .ose-embedpress-responsive`;if(options.self_hosted&&options.hosted_format==='video'){selector=`[data-playerid="${playerId}"] .ose-embedpress-responsive video`}else if(options.self_hosted&&options.hosted_format==='audio'){selector=`[data-playerid="${playerId}"] .ose-embedpress-responsive audio`}
document.querySelector(`[data-playerid="${playerId}"]`).style.setProperty('--plyr-color-main',options.player_color);document.querySelector(`[data-playerid="${playerId}"].custom-player-preset-1, [data-playerid="${playerId}"].custom-player-preset-3, [data-playerid="${playerId}"].custom-player-preset-4`)?.style.setProperty('--plyr-range-fill-background','#ffffff');if(document.querySelector(`[data-playerid="${playerId}"] iframe`)){document.querySelector(`[data-playerid="${playerId}"] iframe`).setAttribute('data-poster',options.poster_thumbnail)}
const controls=['play-large',options.restart?'restart':'',options.rewind?'rewind':'','play',options.fast_forward?'fast-forward':'','progress','current-time','duration','mute','volume','captions','settings',options.pip?'pip':'','airplay',options.download?'download':'',options.fullscreen?'fullscreen':'',].filter(control=>control!=='');const player=new Plyr(selector,{controls:controls,seekTime:10,poster:options.poster_thumbnail,storage:{enabled:!0,key:'plyr_volume'},displayDuration:!0,tooltips:{controls:options.player_tooltip,seek:options.player_tooltip},hideControls:options.hide_controls,youtube:{...(options.autoplay&&{autoplay:options.autoplay}),...(options.start&&{start:options.start}),...(options.end&&{end:options.end}),...(options.rel&&{rel:options.rel}),...(options.fullscreen&&{fs:options.fullscreen})},vimeo:{byline:!1,portrait:!1,title:!1,speed:!0,transparent:!1,controls:!1,...(options.t&&{t:options.t}),...(options.vautoplay&&{autoplay:options.vautoplay}),...(options.autopause&&{autopause:options.autopause}),...(options.dnt&&{dnt:options.dnt}),}});playerInit[playerId]=player;wrapper.classList.add('plyr-initialized')}
const pipInterval=setInterval(()=>{let playerPip=document.querySelector(`[data-playerid="${playerId}"] [data-plyr="pip"]`);if(playerPip){clearInterval(pipInterval);let options=document.querySelector(`[data-playerid="${playerId}"]`).getAttribute('data-options');options=JSON.parse(options);if(!options.self_hosted){const iframeSelector=document.querySelector(`[data-playerid="${playerId}"] .plyr__video-wrapper`);playerPip.addEventListener('click',()=>{iframeSelector.classList.toggle('pip-mode');let parentElement=iframeSelector.parentElement;while(parentElement){parentElement.style.zIndex='9999';parentElement=parentElement.parentElement}});if(options.pip){iframeSelector.appendChild(pipPlayIconElement);iframeSelector.appendChild(pipPauseIconElement);iframeSelector.appendChild(pipCloseElement);const pipPlay=document.querySelector(`[data-playerid="${playerId}"] .plyr__video-wrapper .pip-play`);const pipPause=document.querySelector(`[data-playerid="${playerId}"] .plyr__video-wrapper .pip-pause`);const pipClose=document.querySelector(`[data-playerid="${playerId}"] .plyr__video-wrapper .pip-close`);console.log(pipClose);pipClose.addEventListener('click',()=>{iframeSelector.classList.remove('pip-mode');console.log(iframeSelector.classList)});iframeSelector.addEventListener('click',()=>{const ariaPressedValue=document.querySelector(`[data-playerid="${playerId}"] .plyr__controls [data-plyr="play"]`).getAttribute('aria-pressed');console.log(ariaPressedValue);if(ariaPressedValue==='true'){pipPause.style.display='none';pipPlay.style.display='flex'}else{pipPlay.style.display='none';pipPause.style.display='flex'}})}}}},200)}