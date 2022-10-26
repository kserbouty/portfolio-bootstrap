let nav_english = document.getElementById('nav-english');
let nav_french = document.getElementById('nav-french');

let nav_home = document.getElementById('nav-home');
let nav_skills = document.getElementById('nav-skills');
let nav_projects = document.getElementById('nav-projects');
let header_subtitle = document.getElementById('header-subtitle');
let skills_title = document.getElementById('skills-title');

let projects_title_1 = document.getElementById('projects-title-1');
let projects_title_2 = document.getElementById('projects-title-2');
let projects_title_3 = document.getElementById('projects-title-3');

let project_title_1 = document.getElementById('project-title-1');
let project_title_2 = document.getElementById('project-title-2');
let project_title_4 = document.getElementById('project-title-4');
let project_title_5 = document.getElementById('project-title-5');
let project_title_8 = document.getElementById('project-title-8');
let project_title_9 = document.getElementById('project-title-9');

let project_info_1 = document.getElementById('project-info-1');
let project_info_2 = document.getElementById('project-info-2');
let project_info_3 = document.getElementById('project-info-3');
let project_info_4 = document.getElementById('project-info-4');
let project_info_5 = document.getElementById('project-info-5');
let project_info_6 = document.getElementById('project-info-6');
let project_info_7 = document.getElementById('project-info-7');
let project_info_8 = document.getElementById('project-info-8');
let project_info_9 = document.getElementById('project-info-9');
let project_info_10 = document.getElementById('project-info-10');
let project_info_11 = document.getElementById('project-info-11');
let project_info_12 = document.getElementById('project-info-12');

const lang = {
    english: {
        nav_home: "Home",
        nav_skills: "Skills",
        nav_projects: "Projects",
        header_subtitle: "WELCOME TO MY JOURNEY AS A WEB DEVELOPER",
        skills_title: "SKILLS",

        projects_title_1: "PROJECTS IN PROGRESS",
        projects_title_2: "PERSONAL PROJECTS",
        projects_title_3: "EDUCATION PROJECTS",

        project_title_1: "ProAbono: Library",
        project_title_2: "ProAbono: Website",
        project_title_4: "CRUD: API REST with Symfony",
        project_title_5: "CRUD: Interface with Vue.js",
        project_title_8: "MVC with PHP",
        project_title_9: "Authentication with Symfony",

        project_info_1: "Library able to integrate the ProAbono subscription system into a PHP website.",
        project_info_2: "Demo website using the ProAbono library.",
        project_info_3: "First version of my portfolio.",
        project_info_4: "API REST allowing serialization in JSON format.",
        project_info_5: "Graphical interface build to manage resources from my Symfony API.",
        project_info_6: "Prototype of Devboard.",
        project_info_7: "Testing ground for built-in PHP functions.",
        project_info_8: "Implementation of the MVC pattern with dependency injection.",
        project_info_9: "Authentication system with registration form and login.",
        project_info_10: "Graphical interface to provide a showcase of my projects.",

        project_info_11: "E-commerce website for the purchase of articles, with a notification system linked to the customer's email.",
        project_info_12: "Task management for web projects focused on user stories. Graphically represents features by priority, and organize them by domain."
    },
    french: {
        nav_home: "Accueil",
        nav_skills: "Compétences",
        nav_projects: "Projets",
        header_subtitle: "BIENVENUE DANS MA JOURNÉE DE DÉVELOPPEUR WEB",
        skills_title: "COMPÉTENCES",

        projects_title_1: "PROJETS EN COURS",
        projects_title_2: "PROJETS PERSONNELS",
        projects_title_3: "PROJETS DE FORMATION",

        project_title_1: "ProAbono: Librairie",
        project_title_2: "ProAbono: Site Web",
        project_title_4: "CRUD: API REST avec Symfony",
        project_title_5: "CRUD: Interface avec Vue.js",
        project_title_8: "MVC avec PHP",
        project_title_9: "Authentification avec Symfony",

        project_info_1: "Librairie permettant d'intégrer la gestion d'abonnements ProAbono dans un site web PHP.",
        project_info_2: "Site web de démo afin d'utiliser la librairie ProAbono PHP.",
        project_info_3: "Première version de mon portfolio.",
        project_info_4: "API REST permettant la sérialisation des données au format JSON.",
        project_info_5: "Interface graphique pour manipuler les données de l'API Symfony.",
        project_info_6: "Prototype de Devboard.",
        project_info_7: "Terrain d'essai pour tester le fonctionnement PHP.",
        project_info_8: "Mise en place d'un pattern MVC avec de l'injection de dépendances.",
        project_info_9: "Système d'authentification avec formulaires d'inscription et de connexion.",
        project_info_10: "Interface graphique pour la présentation de mes projets.",
        
        project_info_11: "Site web e-commerce pour l'achat d'articles, avec un système de notification lié à l'email du client.",
        project_info_12: "Gestion des tâches pour projets web centré sur les récits utilisateurs. Permets de représenter les fonctionnalités graphiquement par ordre de priorité et de les organiser par domaines."
    }
};

function englishTranslation() {
    nav_french.style.display = 'flex';
    nav_english.style.display = 'none';

    nav_home.textContent = lang['english'].nav_home;
    nav_skills.textContent = lang['english'].nav_skills;
    nav_projects.textContent = lang['english'].nav_projects;
    header_subtitle.textContent = lang['english'].header_subtitle;
    skills_title.textContent = lang['english'].skills_title;

    projects_title_1.textContent = lang['english'].projects_title_1;
    projects_title_2.textContent = lang['english'].projects_title_2;
    projects_title_3.textContent = lang['english'].projects_title_3;

    project_title_1.textContent = lang['english'].project_title_1;
    project_title_2.textContent = lang['english'].project_title_2;
    project_title_4.textContent = lang['english'].project_title_4;
    project_title_5.textContent = lang['english'].project_title_5;
    project_title_8.textContent = lang['english'].project_title_8;
    project_title_9.textContent = lang['english'].project_title_9;

    project_info_1.textContent = lang['english'].project_info_1;
    project_info_2.textContent = lang['english'].project_info_2;
    project_info_3.textContent = lang['english'].project_info_3;
    project_info_4.textContent = lang['english'].project_info_4;
    project_info_5.textContent = lang['english'].project_info_5;
    project_info_6.textContent = lang['english'].project_info_6;
    project_info_7.textContent = lang['english'].project_info_7;
    project_info_8.textContent = lang['english'].project_info_8;
    project_info_9.textContent = lang['english'].project_info_9;
    project_info_10.textContent = lang['english'].project_info_10;
    project_info_11.textContent = lang['english'].project_info_11;
    project_info_12.textContent = lang['english'].project_info_12;
}

function frenchTranslation() {
    nav_english.style.display = 'flex';
    nav_french.style.display = 'none';

    nav_home.textContent = lang['french'].nav_home;
    nav_skills.textContent = lang['french'].nav_skills;
    nav_projects.textContent = lang['french'].nav_projects;
    header_subtitle.textContent = lang['french'].header_subtitle;
    skills_title.textContent = lang['french'].skills_title;

    projects_title_1.textContent = lang['french'].projects_title_1;
    projects_title_2.textContent = lang['french'].projects_title_2;
    projects_title_3.textContent = lang['french'].projects_title_3;

    project_title_1.textContent = lang['french'].project_title_1;
    project_title_2.textContent = lang['french'].project_title_2;
    project_title_4.textContent = lang['french'].project_title_4;
    project_title_5.textContent = lang['french'].project_title_5;
    project_title_8.textContent = lang['french'].project_title_8;
    project_title_9.textContent = lang['french'].project_title_9;

    project_info_1.textContent = lang['french'].project_info_1;
    project_info_2.textContent = lang['french'].project_info_2;
    project_info_3.textContent = lang['french'].project_info_3;
    project_info_4.textContent = lang['french'].project_info_4;
    project_info_5.textContent = lang['french'].project_info_5;
    project_info_6.textContent = lang['french'].project_info_6;
    project_info_7.textContent = lang['french'].project_info_7;
    project_info_8.textContent = lang['french'].project_info_8;
    project_info_9.textContent = lang['french'].project_info_9;
    project_info_10.textContent = lang['french'].project_info_10;
    project_info_11.textContent = lang['french'].project_info_11;
    project_info_12.textContent = lang['french'].project_info_12;
}

nav_english.addEventListener('click', function () {
    return englishTranslation();
});

nav_french.addEventListener('click', function () {
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

toggler[0].addEventListener('click', function () {
    return toggler[0].classList.remove('show');
})