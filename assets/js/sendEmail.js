function sendMail(contactForm) {
    emailjs.send("gmail","rosie", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "project_request": contactForm.projectsummary.value
    })
    .then (
        function(response) {
            console.log("Success!", response);
        },
        function(error) {
            console.log("Failed", error);
        });

    return false;
}