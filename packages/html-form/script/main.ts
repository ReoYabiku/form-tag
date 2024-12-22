const onSubmitForm = async (event: SubmitEvent) => {
    event.preventDefault();

    const form = event.target as HTMLFormElement;
    if (!form) return;

    const formData: FormData = new FormData(form);

    try {
        const req = await fetch("http://localhost:3000/users", {
            method: "POST",
            body: formData,
        });

        const resp = await req.json();
        if (!resp) return;

        const nameP: HTMLElement = document.createElement("p");
        const ageP: HTMLElement = document.createElement("p");
        nameP.innerHTML = `name: ${resp["name"]}`;
        ageP.innerHTML = `age: ${resp["age"]}`;

        const respDiv = document.getElementById("response");
        if (!respDiv) return;
        respDiv.appendChild(nameP);
        respDiv.appendChild(ageP);
    } catch (error) {
        console.error("Error:", error);
        alert(error);
    }
};

document.getElementById("form")?.addEventListener("submit", onSubmitForm);