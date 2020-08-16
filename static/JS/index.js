// Click function to 'Preview' button
document.getElementById("send-radius")
    .addEventListener("click", () => {
        let code = "";
        let property = document.getElementById("radius")
            .value;

        code = `${property}px`;

        document.getElementById("box")
            .style.borderRadius = code;

        document.getElementById("code")
            .textContent = `{ border-radius: ${code} }`;

        document.getElementById("send-code")
            .style.display = "block"
    });

// Click function to 'Copy Code' button
document.getElementById("send-code")
    .addEventListener("click", () => {
        let copyText = document.getElementById("code");

        copyText.select();

        document.execCommand("copy");

        alert("Code copied!");
    });
