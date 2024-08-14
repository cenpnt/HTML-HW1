function displayTranscipt() {
    const name = document.getElementById("name").value;
    const dateOfBirth = document.getElementById("birth").value;
    const studentID = document.getElementById("studentID").value;
    const admissionDate = document.getElementById("admissionDate").value;
    const graduationDate = document.getElementById("graduationDate").value;
    const degree = document.getElementById("degree").value;
    const major = document.getElementById("major").value;

    // Transfer Credit
    const courseIDTransferCredit1 = document.getElementById("courseIDTransferCredit1").value;
    const courseNameTransferCredit1 = document.getElementById("courseNameTransferCredit1").value;
    const creditTransferCredit1 = document.getElementById("creditTransferCredit1").value;
    const gradeTransferCredit1 = document.getElementById("gradeTransferCredit1").value;

    const courseIDTransferCredit2 = document.getElementById("courseIDTransferCredit2").value;
    const courseNameTransferCredit2 = document.getElementById("courseNameTransferCredit2").value;
    const creditTransferCredit2 = document.getElementById("creditTransferCredit2").value;
    const gradeTransferCredit2 = document.getElementById("gradeTransferCredit2").value;

    const gpaTransferCredit = document.getElementById("gpaTransferCredit").value;

    // First Year First Semester
    const courseIDFirstSemester1 = document.getElementById("courseIDFirstSemester1").value;
    const courseNameFirstSemester1 = document.getElementById("courseNameFirstSemester1").value;
    const creditFirstSemester1 = document.getElementById("creditFirstSemester1").value;
    const gradeFirstSemester1 = document.getElementById("gradeFirstSemester1").value;
    
    const courseIDFirstSemester2 = document.getElementById("courseIDFirstSemester2").value;
    const courseNameFirstSemester2 = document.getElementById("courseNameFirstSemester2").value;
    const creditFirstSemester2 = document.getElementById("creditFirstSemester2").value;
    const gradeFirstSemester2 = document.getElementById("gradeFirstSemester2").value;
    
    const courseIDFirstSemester3 = document.getElementById("courseIDFirstSemester3").value;
    const courseNameFirstSemester3 = document.getElementById("courseNameFirstSemester3").value;
    const creditFirstSemester3 = document.getElementById("creditFirstSemester3").value;
    const gradeFirstSemester3 = document.getElementById("gradeFirstSemester3").value;

    const courseIDFirstSemester4 = document.getElementById("courseIDFirstSemester4").value;
    const courseNameFirstSemester4 = document.getElementById("courseNameFirstSemester4").value;
    const creditFirstSemester4 = document.getElementById("creditFirstSemester4").value;
    const gradeFirstSemester4 = document.getElementById("gradeFirstSemester4").value;

    const courseIDFirstSemester5 = document.getElementById("courseIDFirstSemester5").value;
    const courseNameFirstSemester5 = document.getElementById("courseNameFirstSemester5").value;
    const creditFirstSemester5 = document.getElementById("creditFirstSemester5").value;
    const gradeFirstSemester5 = document.getElementById("gradeFirstSemester5").value;

    const courseIDFirstSemester6 = document.getElementById("courseIDFirstSemester6").value;
    const courseNameFirstSemester6 = document.getElementById("courseNameFirstSemester6").value;
    const creditFirstSemester6 = document.getElementById("creditFirstSemester6").value;
    const gradeFirstSemester6 = document.getElementById("gradeFirstSemester6").value;
    const gpsFirstSemester = document.getElementById("gpsFirstSemester").value;
    const gpaFirstSemester = document.getElementById("gpaFirstSemester").value;

    // First Year Second Semester
    const courseIDSecondSemester1 = document.getElementById("courseIDSecondSemester1").value;
    const courseNameSecondSemester1 = document.getElementById("courseNameSecondSemester1").value;
    const creditSecondSemester1 = document.getElementById("creditSecondSemester1").value;
    const gradeSecondSemester1 = document.getElementById("gradeSecondSemester1").value;

    const courseIDSecondSemester2 = document.getElementById("courseIDSecondSemester2").value;
    const courseNameSecondSemester2 = document.getElementById("courseNameSecondSemester2").value;
    const creditSecondSemester2 = document.getElementById("creditSecondSemester2").value;
    const gradeSecondSemester2 = document.getElementById("gradeSecondSemester2").value;

    const courseIDSecondSemester3 = document.getElementById("courseIDSecondSemester3").value;
    const courseNameSecondSemester3 = document.getElementById("courseNameSecondSemester3").value;
    const creditSecondSemester3 = document.getElementById("creditSecondSemester3").value;
    const gradeSecondSemester3 = document.getElementById("gradeSecondSemester3").value;

    const courseIDSecondSemester4 = document.getElementById("courseIDSecondSemester4").value;
    const courseNameSecondSemester4 = document.getElementById("courseNameSecondSemester4").value;
    const creditSecondSemester4 = document.getElementById("creditSecondSemester4").value;
    const gradeSecondSemester4 = document.getElementById("gradeSecondSemester4").value;

    const courseIDSecondSemester5 = document.getElementById("courseIDSecondSemester5").value;
    const courseNameSecondSemester5 = document.getElementById("courseNameSecondSemester5").value;
    const creditSecondSemester5 = document.getElementById("creditSecondSemester5").value;
    const gradeSecondSemester5 = document.getElementById("gradeSecondSemester5").value;

    const courseIDSecondSemester6 = document.getElementById("courseIDSecondSemester6").value;
    const courseNameSecondSemester6 = document.getElementById("courseNameSecondSemester6").value;
    const creditSecondSemester6 = document.getElementById("creditSecondSemester6").value;
    const gradeSecondSemester6 = document.getElementById("gradeSecondSemester6").value;

    const courseIDSecondSemester7 = document.getElementById("courseIDSecondSemester7").value;
    const courseNameSecondSemester7 = document.getElementById("courseNameSecondSemester7").value;
    const creditSecondSemester7 = document.getElementById("creditSecondSemester7").value;
    const gradeSecondSemester7 = document.getElementById("gradeSecondSemester7").value;

    const gpsSecondSemester = document.getElementById("gpsSecondSemester").value;
    const gpaSecondSemester = document.getElementById("gpaSecondSemester").value;

    // Second Year First Semester
    const courseID2FirstSemester1 = document.getElementById("courseID2FirstSemester1").value;
    const courseName2FirstSemester1 = document.getElementById("courseName2FirstSemester1").value;
    const credit2FirstSemester1 = document.getElementById("credit2FirstSemester1").value;
    const grade2FirstSemester1 = document.getElementById("grade2FirstSemester1").value;

    const courseID2FirstSemester2 = document.getElementById("courseID2FirstSemester2").value;
    const courseName2FirstSemester2 = document.getElementById("courseName2FirstSemester2").value;
    const credit2FirstSemester2 = document.getElementById("credit2FirstSemester2").value;
    const grade2FirstSemester2 = document.getElementById("grade2FirstSemester2").value;

    const courseID2FirstSemester3 = document.getElementById("courseID2FirstSemester3").value;
    const courseName2FirstSemester3 = document.getElementById("courseName2FirstSemester3").value;
    const credit2FirstSemester3 = document.getElementById("credit2FirstSemester3").value;
    const grade2FirstSemester3 = document.getElementById("grade2FirstSemester3").value;

    const courseID2FirstSemester4 = document.getElementById("courseID2FirstSemester4").value;
    const courseName2FirstSemester4 = document.getElementById("courseName2FirstSemester4").value;
    const credit2FirstSemester4 = document.getElementById("credit2FirstSemester4").value;
    const grade2FirstSemester4 = document.getElementById("grade2FirstSemester4").value;

    const courseID2FirstSemester5 = document.getElementById("courseID2FirstSemester5").value;
    const courseName2FirstSemester5 = document.getElementById("courseName2FirstSemester5").value;
    const credit2FirstSemester5 = document.getElementById("credit2FirstSemester5").value;
    const grade2FirstSemester5 = document.getElementById("grade2FirstSemester5").value;

    const courseID2FirstSemester6 = document.getElementById("courseID2FirstSemester6").value;
    const courseName2FirstSemester6 = document.getElementById("courseName2FirstSemester6").value;
    const credit2FirstSemester6 = document.getElementById("credit2FirstSemester6").value;
    const grade2FirstSemester6 = document.getElementById("grade2FirstSemester6").value;

    const courseID2FirstSemester7 = document.getElementById("courseID2FirstSemester7").value;
    const courseName2FirstSemester7 = document.getElementById("courseName2FirstSemester7").value;
    const credit2FirstSemester7 = document.getElementById("credit2FirstSemester7").value;
    const grade2FirstSemester7 = document.getElementById("grade2FirstSemester7").value;

    const courseID2FirstSemester8 = document.getElementById("courseID2FirstSemester8").value;
    const courseName2FirstSemester8 = document.getElementById("courseName2FirstSemester8").value;
    const credit2FirstSemester8 = document.getElementById("credit2FirstSemester8").value;
    const grade2FirstSemester8 = document.getElementById("grade2FirstSemester8").value;

    const gps2FirstSemester = document.getElementById("gps2FirstSemester").value;
    const gpa2FirstSemester = document.getElementById("gpa2FirstSemester").value;

    const transcriptDetails = `
    Name: ${name}
    Date of Birth: ${dateOfBirth}
    Student ID: ${studentID}
    Admission Date: ${admissionDate}
    Graduation Date: ${graduationDate}
    Degree: ${degree}
    Major: ${major}
    
    Transfer Credits:
    1. Course ID: ${courseIDTransferCredit1}
       Course Name: ${courseNameTransferCredit1}
       Credit: ${creditTransferCredit1}
       Grade: ${gradeTransferCredit1}
    2. Course ID: ${courseIDTransferCredit2}
       Course Name: ${courseNameTransferCredit2}
       Credit: ${creditTransferCredit2}
       Grade: ${gradeTransferCredit2}
    GPA: ${gpaTransferCredit}
    
    First Semester:
    1. Course ID: ${courseIDFirstSemester1}
       Course Name: ${courseNameFirstSemester1}
       Credit: ${creditFirstSemester1}
       Grade: ${gradeFirstSemester1}
    2. Course ID: ${courseIDFirstSemester2}
       Course Name: ${courseNameFirstSemester2}
       Credit: ${creditFirstSemester2}
       Grade: ${gradeFirstSemester2}
    3. Course ID: ${courseIDFirstSemester3}
       Course Name: ${courseNameFirstSemester3}
       Credit: ${creditFirstSemester3}
       Grade: ${gradeFirstSemester3}
    4. Course ID: ${courseIDFirstSemester4}
       Course Name: ${courseNameFirstSemester4}
       Credit: ${creditFirstSemester4}
       Grade: ${gradeFirstSemester4}
    5. Course ID: ${courseIDFirstSemester5}
       Course Name: ${courseNameFirstSemester5}
       Credit: ${creditFirstSemester5}
       Grade: ${gradeFirstSemester5}
    6. Course ID: ${courseIDFirstSemester6}
       Course Name: ${courseNameFirstSemester6}
       Credit: ${creditFirstSemester6}
       Grade: ${gradeFirstSemester6}
    GPS: ${gpsFirstSemester}
    GPA: ${gpa2FirstSemester}

    Second Semester:
    1. Course ID: ${courseIDSecondSemester1}
       Course Name: ${courseNameSecondSemester1}
       Credit: ${creditSecondSemester1}
       Grade: ${gradeSecondSemester1}
    2. Course ID: ${courseIDSecondSemester2}
       Course Name: ${courseNameSecondSemester2}
       Credit: ${creditSecondSemester2}
       Grade: ${gradeSecondSemester2}
    3. Course ID: ${courseIDSecondSemester3}
       Course Name: ${courseNameSecondSemester3}
       Credit: ${creditSecondSemester3}
       Grade: ${gradeSecondSemester3}
    4. Course ID: ${courseIDSecondSemester4}
       Course Name: ${courseNameSecondSemester4}
       Credit: ${creditSecondSemester4}
       Grade: ${gradeSecondSemester4}
    5. Course ID: ${courseIDSecondSemester5}
       Course Name: ${courseNameSecondSemester5}
       Credit: ${creditSecondSemester5}
       Grade: ${gradeSecondSemester5}
    6. Course ID: ${courseIDSecondSemester6}
       Course Name: ${courseNameSecondSemester6}
       Credit: ${creditSecondSemester6}
       Grade: ${gradeSecondSemester6}
    7. Course ID: ${courseIDSecondSemester7}
       Course Name: ${courseNameSecondSemester7}
       Credit: ${creditSecondSemester7}
       Grade: ${gradeSecondSemester7}
    GPS: ${gpsSecondSemester}
    GPA: ${gpaSecondSemester}

    First Semester (Second Year):
    1. Course ID: ${courseID2FirstSemester1}
       Course Name: ${courseName2FirstSemester1}
       Credit: ${credit2FirstSemester1}
       Grade: ${grade2FirstSemester1}
    2. Course ID: ${courseID2FirstSemester2}
       Course Name: ${courseName2FirstSemester2}
       Credit: ${credit2FirstSemester2}
       Grade: ${grade2FirstSemester2}
    3. Course ID: ${courseID2FirstSemester3}
       Course Name: ${courseName2FirstSemester3}
       Credit: ${credit2FirstSemester3}
       Grade: ${grade2FirstSemester3}
    4. Course ID: ${courseID2FirstSemester4}
       Course Name: ${courseName2FirstSemester4}
       Credit: ${credit2FirstSemester4}
       Grade: ${grade2FirstSemester4}
    5. Course ID: ${courseID2FirstSemester5}
       Course Name: ${courseName2FirstSemester5}
       Credit: ${credit2FirstSemester5}
       Grade: ${grade2FirstSemester5}
    6. Course ID: ${courseID2FirstSemester6}
       Course Name: ${courseName2FirstSemester6}
       Credit: ${credit2FirstSemester6}
       Grade: ${grade2FirstSemester6}
    7. Course ID: ${courseID2FirstSemester7}
       Course Name: ${courseName2FirstSemester7}
       Credit: ${credit2FirstSemester7}
       Grade: ${grade2FirstSemester7}
    8. Course ID: ${courseID2FirstSemester8}
       Course Name: ${courseName2FirstSemester8}
       Credit: ${credit2FirstSemester8}
       Grade: ${grade2FirstSemester8}
    GPS: ${gps2FirstSemester}
    GPA: ${gpa2FirstSemester}
    `;

    // Show the details in an alert
    alert(transcriptDetails);
}