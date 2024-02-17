function hideShow() {
    const findOut = document.getElementById('find-out');
    const showLess = document.getElementById('show-less');
    const stepFlowContent = document.getElementById('step-flow-content');
    if (findOut.style.display === "inline-block" && showLess.style.display === "none") {
        findOut.style.display = "none";
        findOut.style.height = "120px";
        stepFlowContent.style.height = "auto";
        showLess.style.height = "auto";
        showLess.style.display = "inline-block";
    }
    else{
        findOut.style.display = "inline-block";
        findOut.style.height = "120px";
        stepFlowContent.style.height = "120px";
        showLess.style.height = "auto";
        showLess.style.display = "none";
    }
}
function hideShow2() {
    const findOut2 = document.getElementById('find-out-2');
    const showLess2 = document.getElementById('show-less-2');
    const stepFlowContent2 = document.getElementById('step-flow-content-2');
    if (findOut2.style.display === "inline-block" && showLess2.style.display === "none") {
        findOut2.style.display = "none";
        findOut2.style.height = "120px";
        stepFlowContent2.style.height = "auto";
        showLess2.style.height = "auto";
        showLess2.style.display = "inline-block";
    }
    else{
        findOut2.style.display = "inline-block";
        findOut2.style.height = "120px";
        stepFlowContent2.style.height = "120px";
        showLess2.style.height = "auto";
        showLess2.style.display = "none";
    }
}
function hideShow3() {
    const findOut3 = document.getElementById('find-out-3');
    const showLess3 = document.getElementById('show-less-3');
    const stepFlowContent3 = document.getElementById('step-flow-content-3');
    if (findOut3.style.display === "inline-block" && showLess3.style.display === "none") {
        findOut3.style.display = "none";
        findOut3.style.height = "120px";
        stepFlowContent3.style.height = "auto";
        showLess3.style.height = "auto";
        showLess3.style.display = "inline-block";
    }
    else{
        findOut3.style.display = "inline-block";
        findOut3.style.height = "120px";
        stepFlowContent3.style.height = "120px";
        showLess3.style.height = "auto";
        showLess3.style.display = "none";
    }
}
function hideShow4() {
    const findOut4 = document.getElementById('find-out-4');
    const showLess4 = document.getElementById('show-less-4');
    const stepFlowContent4 = document.getElementById('step-flow-content-4');
    if (findOut4.style.display === "inline-block" && showLess4.style.display === "none") {
        findOut4.style.display = "none";
        findOut4.style.height = "120px";
        stepFlowContent4.style.height = "auto";
        showLess4.style.height = "auto";
        showLess4.style.display = "inline-block";
    }
    else{
        findOut4.style.display = "inline-block";
        findOut4.style.height = "120px";
        stepFlowContent4.style.height = "120px";
        showLess4.style.height = "auto";
        showLess4.style.display = "none";
    }
}
const accordion = function () {
    const courseLabels = document.querySelectorAll(".course-accordion-label"),
        buttons = document.querySelectorAll(".button"),
        privacyDescription = document.getElementsByClassName("course-accordion-description");

    // Accordion
    const toggleAccordion = (e) => {
        // Toggle chevron
        e.currentTarget.classList.toggle("active");

        // Toggle course-accordion-description opacity
        e.currentTarget.parentElement.nextElementSibling
            .querySelector("p")
            .classList.toggle("active");

        // Toggle collapsible
        if (e.currentTarget.parentElement.nextElementSibling.style.maxHeight) {
            e.currentTarget.parentElement.nextElementSibling.style.maxHeight = null;
        } else {
            e.currentTarget.parentElement.nextElementSibling.style.maxHeight =
                e.currentTarget.parentElement.nextElementSibling.scrollHeight + "px";
        }
    };

    courseLabels.forEach((label) => {
        label.addEventListener("click", toggleAccordion);
    });

    // Set Privacy
    const setPrivacy = (e) => {
        e.preventDefault();
        const active = e.currentTarget.parentElement.querySelector(".active");
        if (active) {
            active.classList.remove("active");
        }
        e.currentTarget.classList.add("active");
    };

    buttons.forEach((button) => {
        button.addEventListener("click", setPrivacy);
    });
};
accordion();


  