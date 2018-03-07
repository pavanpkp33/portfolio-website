var projects = [{
    "id" : 1,
    "name": "Verizon Intelligent Parking",
    "technologies" : "Node.js, Angular 5, Redux, HTML5, CSS3",
    "description" : "An intelligent parking solution to efficiently manage parking lots across USA."
},{
    "id" : 2,
    "name": "ITSM Dashboard",
    "technologies" : "Java, Angular 1, REST, Highcharts, Datatables, HTML5, CSS3",
    "description" : "An intuitive IT service management dashboard to visualize, track, and generate reports about technical support, with subscription notifications"
},{
    "id" : 3,
    "name": "Timesheet Compliance tool",
    "technologies" : "Java, Angular 1, REST, C#, Highcharts, Datatables, HTML5, CSS3",
    "description" : "An intrusive WF application that won't let you proceed until you are Timesheet compliant. Saved millions of dollars in billing loss. "
},{
    "id" : 4,
    "name": "Investigation helper",
    "technologies" : "Java, Angular 1, REST, MySQL, HTML5, CSS3",
    "description" : "Automating incident investigation for known and recurring problems by process automation."
},{
    "id" : 5,
    "name": "Instore Touch",
    "technologies" : "Java,Android, REST, Spring MVC, MSSQL",
    "description" : "An Android application for field agents to manage inventory,audit vendor stores and collect order information."
},{
    "id" : 6,
    "name": "Timesheet Compliance tool",
    "technologies" : "Java, Angular 1, REST, C#, Highcharts, Datatables, HTML5, CSS3",
    "description" : "An "
},{
    "id" : 7,
    "name": "Health Pro",
    "technologies" : "Java, Android, Firebase",
    "description" : "An Android application to manage vitals and personal health record for you and your family."
},{
    "id" : 8,
    "name": "SDSU Connect",
    "technologies" : "Java, Android, Firebase",
    "description" : "An Android application for SDSU students to connect with each other."
},{
    "id" : 9,
    "name": "Real time tracker",
    "technologies" : "Node.js, Springboot, Java, Socket.io, Apache Kafka, Angular 2, HTML5, CSS3",
    "description" : "An application on top of Verizon's IoT platform to track assets in real time."
},{
    "id" : 10,
    "name": "E-commerce prototype",
    "technologies" : "Java, Rest, Angular 1, HTML5, CSS3",
    "description" : "An ecommerce application like flipkart.com"
},{
    "id" : 11,
    "name": "GameDay",
    "technologies" : "Node.js, REST, Socket.io, Angular 1, HTML5, CSS3",
    "description" : "An application where user predicts the events for an ongoing football game for in-game surprises and gits."
},{
    "id" : 12,
    "name": "VaSa Rideshare",
    "technologies" : "Node.js, Java, Socket.io, Apache Kafka, Angular 2, HTML5, CSS3",
    "description" : "An real time on demand car pooling app for corporates."
},{
    "id" : 13,
    "name": "Real time tracker",
    "technologies" : "Node.js, Springboot, Java, Socket.io, Apache Kafka, Angular 2, HTML5, CSS3",
    "description" : "An application on top of Verizon's IoT platform to track assets in real time."
}


];

$(document).ready(function () {
    $("#back-btn").on('click', function () {
        window.location.href="index.html";
    });
    var projectList = "";
    for(var i =0; i<projects.length; i++){
        projectList += "<div class=\"card\">"+
                        "<div class=\"card-ribbon\"></div>"+
                        "<h5 class=\"card-title\">"+projects[i].name+"</h5>"+
                        "<div class=\"badge\">Technologies</div>"+
                        "<div class=\"card-body\">" +projects[i].technologies+"</div>"+
                        "<hr>"+
                        "<div class=\"info-btn\">MORE INFO</div></div>";
    }

    console.log(projectList);
    $("#project-list").html(projectList);
});
