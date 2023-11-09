function createArrayForSkills(newSkills: string) {
    const newSkillsList = newSkills.split(',');
    const trimmedSkillsList = []

    for (let skill of newSkillsList) {
        const trimmedSkill = skill.trim();
        trimmedSkillsList.push(trimmedSkill);
    }

    return trimmedSkillsList;
}

export { createArrayForSkills }