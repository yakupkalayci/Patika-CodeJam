const leftArrowBtn = document.querySelector(".leftArrow");
const rightArrowBtn = document.querySelector(".rightArrow");
const userNameDOM = document.querySelector("#name");
const profilePhotoDOM = document.querySelector("#profile-photo");
const descriptionDOM = document.querySelector("#description");
const projectsDOM = document.querySelector(".projects");


const user1 = {
    name: "Yakup Kalaycı",
    profilePhoto: "profile.jpg",
    description: "Merhaba, ben Yakup. Yıldız Teknik Üniversitesi Bilgisayar ve Öğretim Teknolojileri Bölümü 3.sınıf öğrencisiyim. 21 yaşındayım ve İstanbulda yaşıyourm.Yazılımla ilk defa 2 sene önce tanıştım ve o günden beri kendimi geliştirmek için çabalıyorum. <br>Ancak asıl gelişimi Patika ile tanıştıktan sonra gerçekleştirdiğimi düşünüyorum.<br>Umarım bu şekilde devam eder.<br>Frontend web development patikasında ilerliyorum ve şuanda React bölümündeyim. Sürekli yeni şeyler öğrenmeyi seviyorum.<br>Şimdiye kadar yaptığım bazı projeleri aşağıda inceleyebilirsiniz..",
    projects: [
        {
            name: "TodoList",
            description: "Patika'daki Javascript Dersi kapsamında hazırlamış olduğum To do List projesidir.",
            technologies: "HTML, CSS, Bootstrap, Javascript",
            url: "https://github.com/yakupkalayci/JS-TodoList"
        },
        {
            name: "Medium Clone",
            description: "Medium web sitesinin hazırlamış olduğum clone versiyonudur.",
            technologies: "HTML, CSS, Bootstrap",
            url: "https://github.com/yakupkalayci/Medium-Clone"
        },
        {
            name: "Translate Application",
            description: "andex Translate Api'sini kullanarak hazırlamış olduğum, kullanıcıların üç farklı dilde çeviri yapmasını sağlayan bir uygulamadır.",
            technologies: "HTML, CSS, Bootstrap, Javascript",
            url: "https://github.com/yakupkalayci/Js-Translate-Application"
        }, 
        {
            name: "Currency Converter App",
            description: "Rest Api ve Fetch yapılarını kullanarak hazırlamış olduğum döviz çeviri uygulamasıdır.",
            technologies: "HTML, CSS, Javascript",
            url: "https://github.com/yakupkalayci/Js-Currency-Converter-App"
        },
        {
            name: "Github Kullanıcı Görüntüleme Uygulaması",
            description: "Kullanıcı adı girilen Github kullanıcısının profil bilgilerini ve repo bilgilerini ekrana getiren Github Rest Api'sinin kullanıldığı bir uygulamadır.",
            technologies: "HTML, CSS, Bootstrap, Javascript",
            url: "https://github.com/yakupkalayci/JS-Github-Users"
        },
        {
            name: "Javascript Film Viewer",
            description: "Javascript ES6 Class yapsını kullanarak hazırlamış olduğum, kullanıcıların film bilgilerini girdikten sonra ekranda filmi ekranda görüntülemesini ve filmlerin local storage kaydedilerek kaybolmamasını sağlayan bir uygulamadır.",
            technologies: "HTML, CSS, Bootstrap, Javascript",
            url: "https://github.com/yakupkalayci/JS--Film-Project"
        },


    ]

}

const user2 = {
    name: "Hicabi Yılmaz",
    profilePhoto: "https://pbs.twimg.com/profile_images/1243852813391798273/fOzBwZB7_400x400.jpg",
    description: "Merhaba, ben Hicabi. 29 yaşındayım. Frontend Developer olmak için çalışıyorum. Patika.dev üzerinden Frontend Patikasını takip ediyorum. Şu an React öğreniyorum. Öğrenmek benim için bir tutku. ",
    projects: [
        {
            name: "React TodoList",
            description: "Patika'daki Javascript Dersi kapsamında hazırlamış olduğum To do List projesidir.",
            technologies: "HTML, CSS, ReactJs, Javascript",
            url: "https://github.com/hcbylmz/react-to-do"
        },
        {
            name: "Asian Kitchen",
            description: "Asya mutfağına dair bir websitesi.",
            technologies: "HTML, CSS, Bootstrap,Javascript",
            url: "https://github.com/hcbylmz/asiankitchen"
        },
        {
            name: "Instagram Clone with Bootstrap",
            description: "Patika.dev ödevi olarak hazırlamış olduğum Instagram Clone.",

            technologies: "HTML, CSS, Javascript",
            url: "https://github.com/hcbylmz/bootstrap-instagram-clone"
        }

    ]

}

const user3 = {
    name: "Hasret Bayar",
    profilePhoto: "https://scontent.fist15-1.fna.fbcdn.net/v/t39.30808-6/246629020_5023908354304809_1293860839732677461_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=qikIueoBkA8AX_Vvqln&_nc_ht=scontent.fist15-1.fna&oh=47bda3658ec15c5dea9c574c3d364b05&oe=6179434C",
    description: "Projelerimi aşağıdan inceleyebilirsiniz.. Hakkımda daha detaylı bilgi için sosyal medya hesaplarımdan iletişime geçebilirsiniz.",
    projects: [
        {
            name: "TodoList",
            description: "Patika'daki Javascript Dersi kapsamında hazırlamış olduğum To do List projesidir.",
            technologies: "HTML, CSS, Bootstrap, Javascript",
            url: "https://github.com/hasretbayar/kodluyoruzTodoList-Js"
        },
        {
            name: "Linkedin Clone",
            description: "Linkedin web sitesinin hazırlamış olduğum clone versiyonudur.",
            technologies: "HTML, CSS, Bootstrap",
            url: "https://github.com/hasretbayar/kodluyoruz-linkedin-clone"
        },
        {
            name: "Javascript Saat ve Gün Gösterimi",
            description: "Javascript ile saatin ve günün gösterildiği bir websitesi yaptım.",
            technologies: "HTML, CSS, Javascript",
            url: "https://github.com/hasretbayar/Javascript-clock-odev-1"
        }

    ]
}

const users = [user1, user2, user3];

addEventListeners();

function addEventListeners() {
    leftArrowBtn.addEventListener("click", changeUser);
    rightArrowBtn.addEventListener("click", changeUser);
}

let index = 1;

function changeUser() {
    const user = users[index];
    userNameDOM.innerText = user.name;
    profilePhotoDOM.src = user.profilePhoto;

    descriptionDOM.innerText = "";
    descriptionDOM.innerHTML = user.description;

    projectsDOM.innerHTML = "";

    const projects = user.projects;

    projects.forEach((project) => {
        const newProject = document.createElement("div");
        newProject.className = "project";

        newProject.innerHTML = `
        <div>
                    <h3>Proje İsmi:</h3>
                    <p>${project.name}.</p>
                </div>
                <div>
                    <h3>Proje Açıklaması:</h3>
                    <p>${project.description}</p>
                </div>
                <div>
                    <h3>Kullanılan Teknolojiler:</h3>
                    <p>${project.technologies}</p>
                </div>
                <div>
                    <h3>Github Linki</h3>
                    <a href="${project.url}" target="_blank">${project.url}</a>
                </div>
        `;
        projectsDOM.appendChild(newProject);
    })

    if (index < 3) {
        index++;
    }
    if (index == 3) {
        index = 0;
    }
}