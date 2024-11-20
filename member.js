function skillsMember() {
    var member = this;
    member.skills = [
        { name: 'JavaScript', level: 10 },
        { name: 'HTML', level: 8 },
        { name: 'CSS', level: 7 },
        { name: 'Node.js', level: 6 },
        { name: 'MongoDB', level: 6 }
    ];
    member.getSkills = function() {
        return member.skills;
    };
    member.addSkill = function(skill) {
        member.skills.push(skill);
    };
}
    
