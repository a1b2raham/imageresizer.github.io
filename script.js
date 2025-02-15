let uploadedImage = null; 

        document.getElementById('inp').addEventListener('change', function(event) {
            const file = event.target.files[0];
            if (!file) return;



            const reader = new FileReader();
            reader.onload = function(e) {
                uploadedImage = new Image();
                uploadedImage.src = e.target.result;
                document.getElementById("cls").style.opacity=0;
                document.getElementById("cls").style.display="none";
                document.getElementById("sho").style.display="block";
                

                

                
            };
            reader.readAsDataURL(file);
        });

        function resizeImage() {
            var size = "";

            var radios = document.getElementsByName('size');
            for(let radio of radios){
                if(radio.checked){
                   size = radio.value;
                }
              
                }
            
            
            var width = Number(document.getElementById('width').value) 
            
            var height = Number(document.getElementById('height').value) 
            if(size=="a4"){
                console.log("a4");
                width=2480;
                height=3508;
            }
            if(size=="passp"){
                width=600;
                height=600;
            }
            if(width==0 && height==0){
                if(size==""){
                    window.alert("Please enter valid width and height");
                    return;

                }
                
            }
            if(size==""){
              for(let i of document.getElementsByName('std')){
                    if(i.checked){
                        size=i.value;
                    }
                }
            }
            if(size=="cm"){
                width=width*37.795275591;
                height=height*37.795275591;

            }

            




           
            const canvas = document.getElementById('canvas');
            const ctx = canvas.getContext('2d');

            canvas.width = width;
            canvas.height = height;
            ctx.drawImage(uploadedImage, 0, 0, width, height);

         
            const link = document.createElement('a');
            link.href = canvas.toDataURL("image/png");
         
            link.download = "resized-image.png";
            link.click();
        }
      