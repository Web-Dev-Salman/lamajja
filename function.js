function hideShow(elementId, findOutId, showLessId) {
    const findOut = document.getElementById(findOutId);
    const showLess = document.getElementById(showLessId);
    const stepFlowContent = document.getElementById(elementId);

    if (findOut.style.display === "inline-block" && showLess.style.display === "none") {
        findOut.style.display = "none";
        showLess.style.display = "inline-block";
        stepFlowContent.style.maxHeight = stepFlowContent.scrollHeight + "px";
    } else {
        findOut.style.display = "inline-block";
        showLess.style.display = "none";
        stepFlowContent.style.maxHeight = "120px"; // Show at 120px height
        setTimeout(function() {
            stepFlowContent.style.maxHeight = "auto"; // Set height to auto after a delay
        }, 1); // Minimal delay to ensure proper transition
    }
}

document.getElementById('show-hide-item').addEventListener('click', function() {
    hideShow('step-flow-content', 'find-out', 'show-less');
});

document.getElementById('show-hide-item-2').addEventListener('click', function() {
    hideShow('step-flow-content-2', 'find-out-2', 'show-less-2');
});

document.getElementById('show-hide-item-3').addEventListener('click', function() {
    hideShow('step-flow-content-3', 'find-out-3', 'show-less-3');
});

document.getElementById('show-hide-item-4').addEventListener('click', function() {
    hideShow('step-flow-content-4', 'find-out-4', 'show-less-4');
});



// accordion function here 
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
            .querySelector("p, ul")
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



