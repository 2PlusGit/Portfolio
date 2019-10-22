const Home ={
    template:`
    <div>
        <div id="top-message">
            <h1>HELLO, here is my PORTFOLIO!</h1>
        </div>

        <div class="drop drop-one"></div>
        <div class="drop drop-two"></div>
        <div class="drop drop-three"></div>
    </div>

    `
}
const About ={
    template:`
    <div>
        <div class="page-title">
            <h1>ABOUT</h1>
        </div>
        <div class="container page-contents">
            <div class="card-group">
                <div class="card">
                    <div class="card-body">
                    <p class="card-title"><i class="far fa-sticky-note"></i> \t 経歴</p>
                        <p class="card-text"><i class="fas fa-user-edit"></i> \t 2017年より某メーカーで組み込みエンジニアとして製品開発(Cを使用)</p>
                        <p class="card-text"><i class="fas fa-user-edit"></i> \t 現在はフロントエンドエンジニアとして働くため学習中</p>
                        <p class="card-text"><i class="fas fa-user-edit"></i> \t 将来的にはフルスタックをカバーできるエンジニアになりたい</p>
                    </div>
                </div>

                <div class="card">
                    <div class="card-body">
                    <p class="card-title"><i class="fas fa-code"></i> \t スキル</p>
                        <div class="row">
                            <div class="col-4">
                                <p class="skill-icon"><i id="html" class="col-4 fab fa-html5"></i></p>
                                <p class="skill-name">HTML</p>
                            </div>
                            <div class="col-4">
                                <p class="skill-icon"><i id="css" class="col-4 fab fa-css3-alt"></i></p>
                                <p class="skill-name">CSS</p>
                            </div>
                            <div class="col-4">
                                <p class="skill-icon"><i id="javascript" class="ol-4 fab fa-js-square"></i></p>
                                <p class="skill-name">JavaScript</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-4">
                                <p class="skill-icon"><i id="bootstrap" class="fab fa-bootstrap"></i></p>
                                <p class="skill-name">Bootstrap</p>
                            </div>
                            <div class="col-4">
                                <p class="skill-icon"><i id="vue" class="col-6 fab fa-vuejs"></i></p>
                                <p class="skill-name">Vue.js</p>
                            </div>
                            <div class="col-4">
                                <p class="skill-icon"><i id="git" class="col fab fa-github"></i></p>
                                <p class="skill-name">Git/Github</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `
}
const Portfolio ={
    template:`
    <div>
        <div class="page-title">
            <h1>PORTFOLIO</h1>
        </div>
        <div class="container page-contents">
            <div class="row">
                <div class="col-sm-6">
                <div class="card text-center">
                    <div class="card-body">
                        <p class="card-title" >ポートフォリオ</p>
                        <p class="card-text">自己紹介のサイト(このサイトです)</p>
                        <p class="card-text">
                            <span class="badge badge-warning">HTML/CSS</span>
                            <span class="badge badge-info">Bootstrap</span>
                            <span class="badge badge-primary">JavaScript</span>
                            <span class="badge badge-success">Vue</span>
                            <span class="badge badge-secondary">Git</span>
                        </p>
                    </div>
                </div>
                </div>
                <div class="col-sm-6">
                <div class="card">
                    <div class="card-body">
                    <p class="card-title" >
                    <a href='https://github.com/2PlusGit/vuegle_keep' target="_blank">Vuegle Keep</a></p>
                    <p class="card-text">簡単なメモアプリ</p>
                    <p class="card-text">
                        <span class="badge badge-warning">HTML/CSS</span>
                        <span class="badge badge-info">Bootstrap-vue</span>
                        <span class="badge badge-primary">JavaScript</span>
                        <span class="badge badge-success">Vue</span>
                        <span class="badge badge-success">Vuex</span>
                        <span class="badge badge-secondary">Git</span>
                    </p>
                </div>
                </div>
                </div>
            </div>
        </div>
    </div>
        
    `
}
const Contact ={
    template:`
    <div>
        <div class="page-title">
            <h1>CONTACT</h1>
        </div>
        <div class="page-contents container">
            <div class="row">
                <div class="col-sm-6">

                    <div class="card text-center">
                        <div class="card-body">
                            <span class="contact-icon">
                                <i class="fab fa-github"></i>
                            </span>
                            <p class="card-title">GitHub</p>
                            <p class="card-text">ポートフォリオのリポジトリを公開しています</p>
                            <a href="https://github.com/2PlusGit" class="btn btn-secondary">Go to 2PlusGit</a>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6">
                    <div class="card text-center" >
                        <div class="card-body">
                            <span class="contact-icon">
                                <i class="fab fa-twitter-square"></i>
                            </span>
                            <p class="card-title">Twitter</p>
                            <p class="card-text">日々感じたことを呟いています</p>
                            <a href="https://twitter.com/2plus_increment" class="btn btn-secondary" target="_blank">Go to @2plus_increment</a>
                        </div>
                    </div>
                </div>    
            </div>
        </div>
    </div>
    `
}

const routes = [
    {path: '/', component: Home},
    {path: '/about', component: About},
    {path: '/portfolio', component: Portfolio},
    {path: '/contact', component: Contact}
]

const router = new VueRouter({
    routes: routes
})

const vm = new Vue({
    el:"#app",
    data:{
        isOpen:false
    },

    methods:{
        toggleOpen(){
            // ハンバーガーメニューのクラスを切り替える
            this.isOpen = !this.isOpen
        }
    },
    router
})
