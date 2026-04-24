function getGrade(score) {
    let grade;

    switch (true) {
        case (score >= 90 && score <= 100):
            grade = "A";
            break;
        case (score >= 75 && score < 90):
            grade = "B";
            break;
        case (score >= 55 && score < 75):
            grade = "C";
            break;
        default:
            grade = "X";
    }

    return grade;
}

// Test the function with different scores
let scores = [100, 95, 90, 89, 85, 75, 74, 65, 55, 54, 33, 9, 0];
scores.forEach(score => {
    console.log(`Score: ${score}, Grade: ${getGrade(score)}`);
});