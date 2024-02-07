function calculateAge() {
    const birthdateInput = document.getElementById("birthdate");
    const birthdate = new Date(birthdateInput.value);

    // Check if the birthdate input is empty
    if (!birthdateInput.value) {
        alert("Please select your date of birth.");
        return; // Exit the function early if birthdate is not provideds
    }

    const today = new Date();
    const ageYears = today.getFullYear() - birthdate.getFullYear();
    const ageMonths = today.getMonth() - birthdate.getMonth();
    const ageDays = today.getDate() - birthdate.getDate();

    if (ageMonths < 0 || (ageMonths === 0 && today.getDate() < birthdate.getDate())) {
        ageYears--;
        ageMonths += 12;
    }

    // If age is less than 1 month, only count days
    if (ageYears === 0 && ageMonths === 0) {
        var daysDiff = Math.ceil((today.getTime() - birthdate.getTime()) / (1000 * 3600 * 24));
        document.getElementById("result").textContent = "Age: " + daysDiff + " days";
        return;
    }

    if (ageDays < 0) {
        ageMonths--;
        var tempDate = new Date(today.getFullYear(), today.getMonth(), 0);
        ageDays += tempDate.getDate();
    }

    //The calculated age (either in years, months, and days or just days) is displayed below the input field.
    var result = "Age: " + ageYears + " years, " + ageMonths + " months, and " + ageDays + " days";
    document.getElementById("result").textContent = result;
}
