let form = document.getElementById("form");
        let username = document.getElementById("username");
        let password = document.getElementById("password");

        let permittedUsername = "Lily";
        let permittedPassword = "122024";


        form.addEventListener('submit', function(e){
            e.preventDefault();
            console.log("submitted!");
            console.log(username);
            console.log(password);

            if(username.value === permittedUsername && password.value === permittedPassword){
                console.log('Approved!');
                location.href = "./pages/welcome.html";
            } else{
                form.reset();
            }

        })

