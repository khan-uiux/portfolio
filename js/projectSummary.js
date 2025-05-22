// dental clinic

let h1MainHeading = document.querySelector('#h1MainHeading');
let projectTitle = document.querySelector('#projectTitle');
let clientName = document.querySelector('#clientName');
let projectDuration = document.querySelector('#projectDuration');
let projectName = document.querySelector('#projectName');
let projectPara1 = document.querySelector('#projectPara1');
let projectPara2 = document.querySelector('#projectPara2');
let projectLink = document.querySelector('#projectLink');

let dentalClinic = document.querySelector('#dentalClinic');
let InsurancePortal = document.querySelector('#InsurancePortal');
let adoshaEcom = document.querySelector('#adoshaEcom');
let bribooks = document.querySelector('#bribooks');
let hautITSolutions = document.querySelector('#hautITSolutions');


if(dentalClinic) {
    dentalClinic.addEventListener('click', () => {
        localStorage.setItem('newh1Heading', `<span>🦷</span> Dental Clinic Website`);
        localStorage.setItem('projectTitle', `Dental Healthcare`);
        localStorage.setItem('clientName', 'Dr. Ishita');
        localStorage.setItem('projectDuration', '2022 - 2023');
        localStorage.setItem('projectLink', 'https://fab32dental.com/')
        localStorage.setItem('projectName', 'Crafting a Modern Smile Online');
        localStorage.setItem('projectPara1', 'This project involved the comprehensive UI/UX design and development of the official website for Fab32 Dental Clinic, led by Dr. Ishita. Our primary goal was to create a digital presence that not only reflects the clinic commitment to modern dentistry and patient care but also provides a seamless and intuitive user experience.');
        localStorage.setItem('projectPara2', 'We focused on delivering a clean, professional, and trustworthy online platform that allows prospective patients to easily learn about services, book appointments, and connect with the clinic, ultimately enhancing patient engagement and clinic visibility in the competitive healthcare landscape.')
        window.location.href = 'project-detail.html';
    })
}

if(InsurancePortal) {
    InsurancePortal.addEventListener('click', () => {
        localStorage.setItem('newh1Heading', `<span>🛡️ </span>Insurance Portal Development`);
        localStorage.setItem('projectTitle', `Insurance Comparison Platform`);
        localStorage.setItem('clientName', 'Naval Goel');
        localStorage.setItem('projectDuration', '2022 - 2025');
        localStorage.setItem('projectLink', 'https://www.policyx.com/')
        localStorage.setItem('projectName', 'Simplifying Insurance Comparison for Digital Users');
        localStorage.setItem('projectPara1', 'This project focused on the comprehensive UI/UX redesign and optimization of PolicyX.com, a leading online insurance comparison platform. Our core objective was to transform a complex and data-heavy user journey into a simple, intuitive, and trustworthy experience. We concentrated on enhancing clarity in policy comparison, streamlining the quote generation process, and improving overall navigational flow.');
        localStorage.setItem('projectPara2', 'The design strategy aimed to build user confidence, ensure easy access to vital information, and ultimately facilitate informed decision-making for customers seeking diverse insurance solutions online. This involved extensive user research, iterative prototyping, and a focus on responsive design to deliver a seamless experience across all devices.')
        window.location.href = 'project-detail.html';
    })
}

if(adoshaEcom) {
    adoshaEcom.addEventListener('click', () => {
        localStorage.setItem('newh1Heading', `<span>🛒</span> E-Commerce Website`);
        localStorage.setItem('projectTitle', `Holistic Wellness & Healthcare`);
        localStorage.setItem('clientName', 'Naval Goel');
        localStorage.setItem('projectDuration', '2022 - 2023');
        localStorage.setItem('projectLink', 'https://adoshawellness.com/')
        localStorage.setItem('projectName', 'Designing a Path to Holistic Well-being Online');
        localStorage.setItem('projectPara1', 'This project involved the comprehensive UI/UX strategy and design for Adosha Wellness, a platform dedicated to integrating traditional wisdom with modern science for holistic health. Our primary objective was to create a digital experience that exudes calm, trust, and clarity, guiding users seamlessly through diverse wellness programs and expert consultations.');
        localStorage.setItem('projectPara2', 'The design emphasized intuitive navigation, warm visual aesthetics, and a clear call-to-action for booking consultations and understanding programs, ultimately aiming to foster a sense of well-being and confidence in Adosha approach to holistic care.')
        window.location.href = 'project-detail.html';
    })
}

if(bribooks) {
    bribooks.addEventListener('click', () => {
        localStorage.setItem('newh1Heading', `<span>📚 </span>Bribooks-Book Publishing Platform`);
        localStorage.setItem('projectTitle', `Self-Publishing Platform`);
        localStorage.setItem('clientName', 'Rashid Khan');
        localStorage.setItem('projectDuration', '2023 - 2024');
        localStorage.setItem('projectLink', 'https://www.bribooks.com/')
        localStorage.setItem('projectName', 'Empowering Aspiring Authors Through Intuitive Publishing Design');
        localStorage.setItem('projectPara1', 'This project involved a comprehensive UI/UX strategy and design for BriBooks, an innovative online platform dedicated to democratizing the book creation and self-publishing process. Our primary objective was to simplify the often-complex journey from concept to published book, making it accessible and engaging for aspiring authors of all ages and backgrounds. We focused on designing intuitive writing and illustration tools, a streamlined publishing workflow, and a clear marketplace experience for readers.');
        localStorage.setItem('projectPara2', 'The design aimed to inspire creativity, build user confidence in the self-publishing journey, and ensure seamless navigation between content creation, publishing, and sales functionalities. This project emphasized a user-friendly interface that empowers storytellers to bring their narratives to life, connecting them with a global audience effortlessly.')
        window.location.href = 'project-detail.html';
    })
}

if(hautITSolutions) {
    hautITSolutions.addEventListener('click', () => {
        localStorage.setItem('newh1Heading', `<span>💼 </span>Haut IT Solutions-Corporate Website`);
        localStorage.setItem('projectTitle', `IT Solutions`);
        localStorage.setItem('clientName', 'Ranjeet Kumar');
        localStorage.setItem('projectDuration', '2022 - 2023');
        localStorage.setItem('projectLink', 'https://hautitsolutions.com/')
        localStorage.setItem('projectName', 'Designing the Digital Gateway for Modern IT Solutions');
        localStorage.setItem('projectPara1', 'This project involved the comprehensive UI/UX strategy and redesign of the corporate website for Haut IT Solutions, a dynamic firm specializing in digital transformation and innovative IT services. Our core objective was to create a digital showcase that not only highlights their diverse service offerings—from web and mobile development to cloud solutions and digital marketing—but also establishes their brand as a trusted and forward-thinking technology partner. We focused on crafting an intuitive and professional user experience, ensuring seamless navigation to service details, clear presentation of their expertise, and compelling calls-to-action for potential clients.');
        localStorage.setItem('projectPara2', 'The design aimed to convey reliability and technological prowess, facilitating effortless engagement for businesses seeking cutting-edge digital solutions and fostering a strong online presence for Haut IT Solutions.')
        window.location.href = 'project-detail.html';
    })
}


if(h1MainHeading) {
    const newh1Heading = localStorage.getItem('newh1Heading');
    if (newh1Heading) {
        h1MainHeading.innerHTML = newh1Heading;
    }
}

if (projectTitle) {
    const storedProjectTitle = localStorage.getItem('projectTitle');
    if (storedProjectTitle) {
        projectTitle.textContent = storedProjectTitle;
    }
}

if (clientName) {
    const storedclientName = localStorage.getItem('clientName');
    if (storedclientName) {
        clientName.textContent = storedclientName;
    }
}

if (projectDuration) {
    const storedprojectDuration = localStorage.getItem('projectDuration');
    if (storedprojectDuration) {
        projectDuration.textContent = storedprojectDuration;
    }
}

if(projectLink) {
    const storedprojectLink = localStorage.getItem('projectLink');
    if(storedprojectLink) {
        projectLink.textContent = storedprojectLink;
    }
}

if (projectName) {
    const storedprojectName = localStorage.getItem('projectName');
    if (storedprojectName) {
        projectName.textContent = storedprojectName;
    }
}

if (projectPara1) {
    const storedprojectPara1 = localStorage.getItem('projectPara1')
    if(storedprojectPara1) {
        projectPara1.textContent = storedprojectPara1;
    }
}

if(projectPara2) {
    const storedprojectPara2 = localStorage.getItem('projectPara2');
    if(storedprojectPara2) {
        projectPara2.textContent = storedprojectPara2;
    }
}