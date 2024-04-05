var mainButton = document.getElementById("mainButton");
var skillsButton = document.getElementById("skillsButton");
var educationButton = document.getElementById("educationButton");
var sourceCodeButton = document.getElementById("sourceCodeButton");
var experienceButton = document.getElementById("experienceButton");
var textBox = document.getElementById("textBox");

var toggleVisible = false;
var toggleSkills = false;

sourceCodeButton.onclick = function() {
	if (toggleSkills == false) {
		sourceCodePosChange(sourceCodeButton);
		experiencePosChange(experienceButton);
		educationPosChange(educationButton);
		skillPosChange(skillsButton);
		mainButton.classList.add("mainPos2")
		sourceCodePosSelect(sourceCodeButton)
		textBoxToggleOn()
	}
}

experienceButton.onclick = function() {
	if (toggleSkills == false) {
		sourceCodePosChange(sourceCodeButton);
		experiencePosChange(experienceButton);
		educationPosChange(educationButton);
		skillPosChange(skillsButton);
		mainButton.classList.add("mainPos2")
		experiencePosSelect(experienceButton)
		textBoxToggleOn()
	}
}

educationButton.onclick = function() {
	if (toggleSkills == false) {
		sourceCodePosChange(sourceCodeButton);
		experiencePosChange(experienceButton);
		educationPosChange(educationButton);
		skillPosChange(skillsButton);
		mainButton.classList.add("mainPos2")
		educationPosSelect(educationButton)
		textBoxToggleOn()
	}
}

skillsButton.onclick = function() {
	if (toggleSkills == false) {
		sourceCodePosChange(sourceCodeButton);
		experiencePosChange(experienceButton);
		educationPosChange(educationButton);
		skillPosChange(skillsButton);
		mainButton.classList.add("mainPos2")
		skillPosSelect(skillsButton)
		textBoxToggleOn()
	}
}

mainButton.onclick = function() {
	if (toggleVisible == false) {
		buttonAppear(skillsButton);
		buttonAppear(educationButton);
		buttonAppear(sourceCodeButton);
		buttonAppear(experienceButton);
		toggleVisible = true;
		
	} else {
		buttonDisappear(skillsButton);
		buttonDisappear(educationButton);
		buttonDisappear(sourceCodeButton);
		buttonDisappear(experienceButton);
		toggleVisible = false;
	}
}

function textBoxToggleOn() {
	textBox.classList.remove("objectHidden");
	textBox.classList.add("animated");
	textBox.classList.add("zoomIn");
}

function buttonAppear(idButton) {
	idButton.classList.remove("objectHidden");
	idButton.classList.remove("animated");
	idButton.classList.remove("zoomOut");
	idButton.classList.add("objectVisible");
	idButton.classList.add("animated");
	idButton.classList.add("zoomIn");
	setTimeout(function(){
		idButton.classList.remove("animated");
	}, 600);
}

function buttonDisappear(idButton) {
	idButton.classList.remove("objectVisible");
	idButton.classList.remove("animated");
	idButton.classList.remove("zoomIn");
	idButton.classList.add("animated");
	idButton.classList.add("zoomOut");
}

function skillPosChange(idButton) {
	idButton.classList.add("skillPos2");
	idButton.classList.remove("buttonRound");
	idButton.classList.remove("selectedSceneSkills");
}

function skillPosSelect(idButton) {
	idButton.classList.remove("skillPos2");
	idButton.classList.add("selectedSceneSkills");
}

function educationPosChange(idButton) {
	idButton.classList.add("educationPos2");
	idButton.classList.remove("buttonRound");
	idButton.classList.remove("selectedSceneEducation");
}

function educationPosSelect(idButton) {
	idButton.classList.remove("educationPos2");
	idButton.classList.add("selectedSceneEducation");
}

function experiencePosChange(idButton) {
	idButton.classList.add("experiencePos2");
	idButton.classList.remove("buttonRound");
	idButton.classList.remove("selectedSceneExperience");
}

function experiencePosSelect(idButton) {
	idButton.classList.remove("experiencePos2");
	idButton.classList.add("selectedSceneExperience");
}

function sourceCodePosChange(idButton) {
	idButton.classList.add("sourceCodePos2");
	idButton.classList.remove("buttonRound");
	idButton.classList.remove("selectedSceneSourceCode");
}

function sourceCodePosSelect(idButton) {
	idButton.classList.remove("sourceCodePos2");
	idButton.classList.add("selectedSceneSourceCode");
}