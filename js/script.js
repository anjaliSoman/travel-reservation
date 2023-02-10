// alert("Travel Reservation Form");
function validate() {
    let n = document.getElementById("name").value;
    let e = document.getElementById("email").value;
    let s = document.getElementById("package").value;
    let d = document.getElementById("adate").value;
    let p = document.getElementById("persons").value;
    let agree = document.getElementById("agree");
    let dagree = document.getElementById("disagree");
    let nregx = /^[a-z A-Z]{2,15}$/;
    let eregx = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if (n == "") {
        alert("Name is mandatory!");
        return false;
    } else if (e == "") {
        alert("Email is mandatory!");
    } else if (d == "") {
        alert("Date is Mandatory!");
        return false;
    } else if (p == "") {
        alert("Number of Persons is mandatory!");
        return false;
    } else if (!nregx.test(n)) {
        alert(
            "Name must only contain letters and minimum should be 2 characters!"
        );
        return false;
    } else if (!eregx.test(e)) {
        alert("Not a valid email");
        return false;
    } else if (s == "select") {
        alert("Please choose a package");
        return false;
    } else if (isNaN(p)) {
        alert("Number of persons should be a number!");
        return false;
    } else if (p <= 0) {
        alert("Minimum 1 person should be included!");
        return false;
    } else if (agree.checked == false && dagree.checked == false) {
        alert("Please Agree or Disagree the terms and Conditions");
        return false;
    } else if (
        document.getElementById("bc").checked == false &&
        document.getElementById("fc").checked == false &&
        document.getElementById("sc").checked == false
    ) {
        alert("Please Choose Availments");
        return false;
    } else {
        return true;
    }
}
