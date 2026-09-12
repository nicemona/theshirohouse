const dialog=document.querySelector('dialog');
for(const button of document.querySelectorAll('.preview')){button.addEventListener('click',()=>{document.querySelector('#preview-name').textContent=button.dataset.name;document.querySelector('#preview-thai').textContent=button.dataset.thai;const image=document.querySelector('#preview-image');image.src=button.dataset.image;image.alt=button.dataset.name+' product artwork';dialog.showModal();});}
document.querySelector('.close').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',event=>{if(event.target===dialog){const r=dialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)dialog.close();}});
