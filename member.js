function skillsMember() {
    var member = document.getElementById("member");
    var skills = document.getElementById("skills");
    var memberBtn = document.getElementById("memberBtn");
    var skillsBtn = document.getElementById("skillsBtn");
    member.style.display = "block";
    skills.style.display = "none";
    memberBtn.style.borderBottom = "2px solid #fff";
    skillsBtn.style.borderBottom = "2px solid #f9f9f9";
}