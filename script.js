let uploadedImage = null; // Store the uploaded image

        document.getElementById('inp').addEventListener('change', function(event) {
            const file = event.target.files[0];
            if (!file) return;



            const reader = new FileReader();
            reader.onload = function(e) {
                uploadedImage = new Image();
                uploadedImage.src = e.target.result;
                document.getElementById("preview").src = e.target.result;
                
                document.getElementById("final").style.opacity = 1;
                
                

                
            };
            reader.readAsDataURL(file);
        });

        function resizeImage() {
         

            const width = Number(document.getElementById('width').value) 
            
            const height = Number(document.getElementById('height').value) 

            if(width==0 && height==0){
              window.alert("Please enter the values");
              return;

            }
            const canvas = document.getElementById('canvas');
            const ctx = canvas.getContext('2d');

            canvas.width = width;
            canvas.height = height;
            ctx.drawImage(uploadedImage, 0, 0, width, height);

            // Create a download link
            const link = document.createElement('a');
            link.href = canvas.toDataURL("image/png");
            link.download = "resized-image.png";
            link.click();
        }