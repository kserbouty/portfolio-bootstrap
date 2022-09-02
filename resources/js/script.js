let nav_english = document.getElementById('nav-english');
let nav_french = document.getElementById('nav-french');
let nav_home = document.getElementById('nav-home');
let nav_skills = document.getElementById('nav-skills');
let nav_projects = document.getElementById('nav-projects');
let header_subtitle = document.getElementById('header-subtitle');
let skills_title = document.getElementById('skills-title');
let projects_title = document.getElementById('projects-title');
let project_info_1 = document.getElementById('project-info-1');
let project_info_2 = document.getElementById('project-info-2');
let project_info_3 = document.getElementById('project-info-3');
let project_info_4 = document.getElementById('project-info-4');
let project_info_5 = document.getElementById('project-info-5');
let project_info_6 = document.getElementById('project-info-6');
let project_info_7 = document.getElementById('project-info-7');
let in_progress = document.getElementById('in-progress');

const lang = {
    english: {
        nav_home: "Home",
        nav_skills: "Skills",
        nav_projects: "Projects",
        header_subtitle: "WELCOME TO MY JOURNEY AS A WEB DEVELOPER",
        skills_title: "SKILLS",
        projects_title: "PROJECTS",
        project_info_1: "Prototype of my portfolio to practice frontend without framework.",
        project_info_2: "API able to create, update or delete resources in JSON format.",
        project_info_3: "Graphical user interface to manage resources from the Symfony API.",
        project_info_4: "Prototype of Another Devboard to practice PHP 7 without framework.",
        project_info_5: "Module to buy vehicles, in order to combine MVC with others patterns.",
        project_info_6: "Showcase website available on mobile, tablet and desktop. Display an overview of my projects with links to the source code.",
        project_info_7: "Project management software started as an alternative of the Kanban system. Provide a dashboard to display scenarios, with task management for each iteration.",
        in_progress: "(In progress)"
    },
    french: {
        nav_home: "Accueil",
        nav_skills: "Compétences",
        nav_projects: "Projets",
        header_subtitle: "BIENVENUE DANS MA JOURNÉE DE DÉVELOPPEUR WEB",
        skills_title: "COMPÉTENCES",
        projects_title: "PROJETS",
        project_info_1: "Prototype de mon portfolio créée pour pratiquer le frontend sans framework.",
        project_info_2: "API pour la création, mise à jour et suppression de données au format JSON.",
        project_info_3: "Interface graphique se connectant à l'API Symfony afin de gérer ses ressources.",
        project_info_4: "Prototype de l'application Another Devboard créée pour pratiquer PHP 7 sans framework.",
        project_info_5: "Module de commande de véhicules dans le but d'associer MVC avec différents patterns.",
        project_info_6: "Site vitrine disponible sur mobile, tablette et bureau. Affiche un aperçu de mes projets avec les liens vers le code source.",
        project_info_7: "Application de gestion de projets proposant une alternative au système Kanban. Fournis un tableau de bord affichant les récits utilisateurs, et une gestion des tâches pour chaque itération.",
        in_progress: "(En cours)"
    }
};

function englishTranslation() {
    nav_english.style.display = 'none';
    nav_french.style.display = 'flex';
    nav_home.textContent = lang['english'].nav_home;
    nav_skills.textContent = lang['english'].nav_skills;
    nav_projects.textContent = lang['english'].nav_projects;
    header_subtitle.textContent = lang['english'].header_subtitle;
    skills_title.textContent = lang['english'].skills_title;
    projects_title.textContent = lang['english'].projects_title;
    project_info_1.textContent = lang['english'].project_info_1;
    project_info_2.textContent = lang['english'].project_info_2;
    project_info_3.textContent = lang['english'].project_info_3;
    project_info_4.textContent = lang['english'].project_info_4;
    project_info_5.textContent = lang['english'].project_info_5;
    project_info_6.textContent = lang['english'].project_info_6;
    project_info_7.textContent = lang['english'].project_info_7;
    in_progress.textContent = lang['english'].in_progress;
};

function frenchTranslation() {
    nav_english.style.display = 'flex';
    nav_french.style.display = 'none';
    nav_home.textContent = lang['french'].nav_home;
    nav_skills.textContent = lang['french'].nav_skills;
    nav_projects.textContent = lang['french'].nav_projects;
    header_subtitle.textContent = lang['french'].header_subtitle;
    skills_title.textContent = lang['french'].skills_title;
    projects_title.textContent = lang['french'].projects_title;
    project_info_1.textContent = lang['french'].project_info_1;
    project_info_2.textContent = lang['french'].project_info_2;
    project_info_3.textContent = lang['french'].project_info_3;
    project_info_4.textContent = lang['french'].project_info_4;
    project_info_5.textContent = lang['french'].project_info_5;
    project_info_6.textContent = lang['french'].project_info_6;
    project_info_7.textContent = lang['french'].project_info_7;
    in_progress.textContent = lang['french'].in_progress;
};

nav_english.addEventListener('click', function (event) {
    return englishTranslation();
});

nav_french.addEventListener('click', function (event) {
    return frenchTranslation();
});

let language = navigator.language;

function checkNavigator() {
    if (
        language === "en" ||
        language === "en-AU" ||
        language === "en-BZ" ||
        language === "en-CA" ||
        language === "en-GB" ||
        language === "en-IE" ||
        language === "en-JM" ||
        language === "en-NZ" ||
        language === "en-TT" ||
        language === "en-US"
    ) {
        return englishTranslation();
    }

    if (
        language === "fr" ||
        language === "fr-BE" ||
        language === "fr-CA" ||
        language === "fr-CH" ||
        language === "fr-LU"
    ) {
        return frenchTranslation();
    }
}

window.addEventListener('load', checkNavigator);

let toggler = document.getElementsByClassName('navbar-collapse');

toggler[0].addEventListener('click', function (event) {
    return toggler[0].classList.remove('show');
})