<template>
  <section id="accueil" class="main-content">
    <div class="content-width">
      <ResponsiveArticle>
        <template v-slot:top>
          <div class="head-text">
            <h1 class="h1 accent-text head-title">M sans N</h1>
            <p class="head-text-presentation bold18">L'association qui offre aux collégiens un espace de réflexion sur les questions liées à la sexualité et à la relation.</p>
            <a class="button-orange" href="Plaquette_presentation_M_sans_N.pdf" target="_blank">
              <span class="bold14 button-text">Plaquette de présentation</span>
              <span class="button-icon">
                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M3.90625 14.0625C4.33772 14.0625 4.6875 14.4123 4.6875 14.8438V20.3125H20.3125V14.8438C20.3125 14.4123 20.6623 14.0625 21.0938 14.0625C21.5252 14.0625 21.875 14.4123 21.875 14.8438V20.3125C21.875 20.7269 21.7104 21.1243 21.4174 21.4174C21.1243 21.7104 20.7269 21.875 20.3125 21.875H4.6875C4.2731 21.875 3.87567 21.7104 3.58265 21.4174C3.28962 21.1243 3.125 20.7269 3.125 20.3125V14.8438C3.125 14.4123 3.47478 14.0625 3.90625 14.0625Z" fill="white" />
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M12.5 3.125C12.9315 3.125 13.2812 3.47478 13.2812 3.90625V14.8438C13.2812 15.2752 12.9315 15.625 12.5 15.625C12.0685 15.625 11.7188 15.2752 11.7188 14.8438V3.90625C11.7188 3.47478 12.0685 3.125 12.5 3.125Z" fill="white"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M7.84601 10.1898C8.15111 9.88466 8.64577 9.88466 8.95086 10.1898L12.5 13.7389L16.0491 10.1898C16.3542 9.88466 16.8489 9.88466 17.154 10.1898C17.4591 10.4949 17.4591 10.9895 17.154 11.2946L13.0524 15.3962C12.7473 15.7013 12.2527 15.7013 11.9476 15.3962L7.84601 11.2946C7.54091 10.9895 7.54091 10.4949 7.84601 10.1898Z" fill="white"/>
                </svg>
              </span>
            </a>
          </div>
        </template>
        <template v-slot:bot>
          <div class="photo-container">
            <img id="photo__head" class="photo cover" src="~/assets/intervention.jpg" alt="photo intervention au collège" loading="lazy">
          </div>
        </template>
      </ResponsiveArticle>
    </div>

    <div id="context">
      <div class="centered-small-container">
        <p class="regular18">Depuis ces vingt dernières années, le bouleversement technologique a largement fait évoluer les rapports sociaux. L’influence grandissante des réseaux sociaux a fait naître de nouveaux enjeux éducatifs notamment dans le domaine de la sexualité.</p>
      </div>
    </div>

    <div class="content-width">
      <section id="content">
        <ResponsiveArticle reversed>
          <template v-slot:top>
            <div class="content__text">
              <h2 class="content__title h2">L’évolution de l’éducation sexuelle et affective</h2>
              <div class="content__paragraph">
                <p class="regular16">Après une information à la sexualité dans les années 1970 axé sur un aspect biologique, des cours à la sexualité basé sur la prévention des risques sanitaires se sont démocratisés à la fin des années 90. Aujourd’hui, alors que les réseaux sociaux bouleversent notre rapport à soi et aux autres, il semble fondamental d’apporter un apprentissage de la sexualité <span class="bold16">orienté sur les questions affectives et relationnelles</span>. En effet, les adolescents font face à un manque d’interlocuteurs. Il n’existe quasiment pas d’espace de parole et de réflexion collective pour les jeunes qui leur permettraient d’échanger sur leur vécu, entre eux et/ou avec des adultes.</p>
              </div>
            </div>
          </template>
          <template v-slot:bot>
            <div class="photo-container">
              <img id="photo__evolution" class="photo cover" src="~/assets/evolution.jpg" alt="photo éducation sexuelle d'époque" loading="lazy">
            </div>
          </template>
        </ResponsiveArticle>

        <ResponsiveArticle>
          <template v-slot:top>
            <div class="content__text">
              <h2 class="content__title h2">Le rôle central de l’école</h2>
              <div class="content__paragraph">
                <p class="regular16">L’Ecole a pour mission de former les citoyens. Elle est un lieu de sociabilisation où l’enfant apprend les règles de la vie collective. Si chaque parent peut donner l’éducation qu’il souhaite à ses enfants, l’école vient compléter cette éducation en apprenant aux jeunes à vivre en collectif et en leur apportant une intelligence académique mais aussi relationnelle. L’école joue un rôle important dans la formation de chaque individu et c’est sa mission d’accompagner les enfants et les adolescents à devenir des personnes responsables.</p>
              </div>
              <div class="reference">
                <p class="bold16 accent-text">“L’école, c’est le lieu où on apprend la relation aux autres, pourtant on n’a aucun cours là-dessus.”</p>
                <p class="regular16 uppercase">Dr. Philipe Haïm</p>
                <p class="regular14 muted70">Source : émission Grand bien vous fasse du 24 novembre 2021</p>
              </div>
            </div>
          </template>
          <template v-slot:bot>
            <div class="photo-container">
              <img id="photo__role" class="photo cover" src="~/assets/role.jpg" alt="dessin cours de récréation" loading="lazy">
            </div>
          </template>
        </ResponsiveArticle>

        <ResponsiveArticle reversed>
          <template v-slot:top>
            <div class="content__text">
              <h2 class="content__title h2">L’impact des expériences adolescentes</h2>
              <div class="content__paragraph">
                <p class="regular16">L’âge adolescent est une période durant laquelle le cerveau n’est pas encore achevé. Le cortex préfrontal n’est pas encore totalement développé. Cette zone du cerveau régule le comportement et la capacité à prendre des décisions, ce qui entraine une évaluation des situations différentes de celle de l’adulte. Les expériences vécues à cet âge (bonnes ou mauvaises) ont des répercussions sur le futur adulte, il faut donc être vigilant et savoir guider et accompagner les adolescents mais aussi leur apporter des outils de réflexion.</p>
              </div>
            </div>
          </template>
          <template v-slot:bot>
            <div class="photo-container">
              <img id="photo__experience" class="photo contain" src="~/assets/experience.jpg" alt="illustration expérience" loading="lazy">
            </div>
          </template>
        </ResponsiveArticle>

        <ResponsiveArticle>
          <template v-slot:top>
            <h2 class="join-title h5">Envie de nous rejoindre ?</h2>
          </template>
          <template v-slot:bot>
            <div>
              <div id="adhesion" class="card outer-card shadow50">
                <h3 class="h4">Devenir adhérent, c'est :</h3>
                <div class="card inner-card shadow20">
                  <div class="inner-card-icon">
                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M4.17133 6.42964C2.80645 7.04384 2.34375 7.73123 2.34375 8.20312C2.34375 8.67502 2.80645 9.36241 4.17133 9.97661C4.79076 10.2554 5.53615 10.4878 6.37288 10.6541C6.39216 10.6572 6.4112 10.6609 6.42998 10.6654C7.32326 10.8389 8.31876 10.9375 9.375 10.9375C10.4312 10.9375 11.4267 10.8389 12.32 10.6654C12.3388 10.6609 12.3578 10.6572 12.3771 10.6541C13.2139 10.4878 13.9592 10.2554 14.5787 9.97661C15.9436 9.36241 16.4062 8.67502 16.4062 8.20312C16.4062 7.73123 15.9436 7.04384 14.5787 6.42964C13.2871 5.84845 11.4481 5.46875 9.375 5.46875C7.30195 5.46875 5.46287 5.84845 4.17133 6.42964ZM11.7188 12.3464C10.9715 12.4469 10.1846 12.5 9.375 12.5C8.56539 12.5 7.77854 12.4469 7.03125 12.3464V14.6749C7.76219 14.7837 8.55001 14.8438 9.375 14.8438C10.2 14.8438 10.9878 14.7837 11.7188 14.6749V12.3464ZM13.2812 14.3461V12.0541C13.9899 11.8811 14.6424 11.6613 15.2199 11.4015C15.6385 11.2131 16.0426 10.991 16.4062 10.7354V12.1094C16.4062 12.5824 15.9436 13.2697 14.5794 13.8835C14.1929 14.0573 13.7574 14.2131 13.2812 14.3461ZM11.7188 16.7424C11.2804 16.6361 10.864 16.5124 10.4742 16.3733C10.1137 16.3951 9.74675 16.4062 9.375 16.4062C9.11198 16.4062 8.85137 16.4007 8.59375 16.3897V16.7969C8.59375 17.2699 9.05642 17.9572 10.4206 18.571C10.8071 18.7448 11.2426 18.9006 11.7188 19.0336V16.7424ZM13.2812 19.3624V17.0336C14.0279 17.1339 14.8149 17.1875 15.625 17.1875C16.4347 17.1875 17.2215 17.1344 17.9688 17.0341V19.3624C17.2378 19.4712 16.45 19.5312 15.625 19.5312C14.8 19.5312 14.0122 19.4712 13.2812 19.3624ZM5.46875 12.0541C4.76011 11.8811 4.10759 11.6613 3.53013 11.4015C3.11155 11.2131 2.70742 10.991 2.34375 10.7354V12.1094C2.34375 12.5824 2.80642 13.2697 4.17064 13.8835C4.55708 14.0573 4.99257 14.2131 5.46875 14.3461V12.0541ZM3.53013 5.00476C2.06744 5.66297 0.78125 6.73339 0.78125 8.20312V12.1094C0.78125 13.5797 2.06663 14.6502 3.52955 15.3084C4.51087 15.7499 5.70906 16.0754 7.03125 16.2529V16.7969C7.03125 18.2672 8.31663 19.3377 9.77955 19.9959C11.3155 20.6869 13.3826 21.0938 15.625 21.0938C17.8674 21.0938 19.9345 20.6869 21.4704 19.9959C22.9334 19.3377 24.2188 18.2672 24.2188 16.7969V12.8906L24.2187 12.8881C24.2174 11.5971 23.2135 10.6162 22.0226 9.96807C20.9471 9.38272 19.5398 8.96001 17.9688 8.74647V8.20312C17.9688 6.73339 16.6826 5.66297 15.2199 5.00476C13.6838 4.31355 11.6167 3.90625 9.375 3.90625C7.13333 3.90625 5.06615 4.31355 3.53013 5.00476ZM22.6562 15.424C22.2928 15.6794 21.8889 15.9014 21.4704 16.0896C20.8929 16.3495 20.2402 16.5692 19.5312 16.7421V19.0336C20.0074 18.9006 20.4429 18.7448 20.8294 18.571C22.1936 17.9572 22.6562 17.2699 22.6562 16.7969V15.424ZM15.625 15.625C16.6784 15.625 17.6712 15.5271 18.5623 15.3547C18.5862 15.3488 18.6106 15.344 18.6353 15.3404C19.4691 15.1742 20.2119 14.9425 20.8294 14.6647C22.1936 14.0509 22.6562 13.3636 22.6562 12.8906C22.6562 12.4836 22.318 11.9077 21.2757 11.3405C20.4476 10.8898 19.3079 10.5266 17.9688 10.3249V12.1094C17.9688 13.5797 16.6834 14.6502 15.2204 15.3084C14.9995 15.4078 14.7676 15.5013 14.5257 15.5886C14.8837 15.6125 15.2508 15.625 15.625 15.625Z" fill="#FCA100"/>
                    </svg>
                  </div>
                  <p class="regular16">Apporter plus de poids à notre projet en nous soutenant financièrement</p>
                </div>
                <div class="card inner-card shadow20">
                  <div class="inner-card-icon">
                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M16.3763 1.45592C15.6621 1.32999 14.9271 1.49293 14.3331 1.90889C13.9751 2.15958 13.6859 2.4898 13.4851 2.86897C13.1316 2.58795 12.7108 2.3962 12.2581 2.31637C11.5439 2.19044 10.8089 2.35338 10.2149 2.76934C9.62084 3.1853 9.21636 3.82021 9.09043 4.53439L7.81185 11.7855L7.34671 10.5045L7.3467 10.5044C7.09894 9.82216 6.5903 9.26625 5.93267 8.95901C5.27504 8.65176 4.52229 8.61834 3.84002 8.8661C3.15775 9.11385 2.60185 9.6225 2.2946 10.2801C1.99212 10.9276 1.95503 11.6672 2.19037 12.341C3.17088 15.9007 4.06451 18.4655 5.2994 20.2339C6.58511 22.0752 8.21607 23.0228 10.5186 23.4288C11.63 23.6248 12.7692 23.5999 13.871 23.3557C14.9728 23.1114 16.0156 22.6525 16.9401 22.0052C17.8646 21.3579 18.6525 20.5349 19.2588 19.583C19.8652 18.6312 20.2781 17.5693 20.4741 16.4579L21.8986 8.37942C22.0245 7.66523 21.8616 6.93027 21.4456 6.33622C21.0297 5.74217 20.3947 5.33769 19.6806 5.21176C19.2775 5.1407 18.8679 5.16163 18.4807 5.26811L18.5943 4.62357C18.7202 3.90939 18.5573 3.17443 18.1413 2.58038C17.7254 1.98633 17.0905 1.58185 16.3763 1.45592ZM16.512 7.43479C16.5123 7.43311 16.5126 7.43144 16.5129 7.42977L17.0555 4.35225C17.1095 4.04617 17.0397 3.73119 16.8614 3.4766C16.6831 3.222 16.411 3.04865 16.105 2.99468C15.7989 2.94071 15.4839 3.01054 15.2293 3.18881C14.9747 3.36708 14.8014 3.63918 14.7474 3.94526L14.4778 5.47448C14.4772 5.47766 14.4767 5.48084 14.4761 5.48403L13.323 12.0238C13.248 12.4487 12.8428 12.7324 12.4179 12.6575C11.993 12.5826 11.7093 12.1774 11.7842 11.7524L12.9364 5.218C12.9367 5.21623 12.937 5.21446 12.9373 5.2127L12.9384 5.20628C12.9903 4.90222 12.9202 4.58986 12.7432 4.33705C12.5649 4.08246 12.2928 3.90911 11.9868 3.85514C11.6807 3.80117 11.3657 3.871 11.1111 4.04926C10.8565 4.22753 10.6832 4.49964 10.6292 4.80571L8.84353 14.9327C8.78211 15.281 8.49431 15.5446 8.14194 15.5753C7.78956 15.606 7.46052 15.3961 7.33981 15.0637L5.87803 11.0378L5.87802 11.0377C5.77171 10.745 5.55346 10.5065 5.27129 10.3746C4.9891 10.2428 4.6661 10.2284 4.37335 10.3348C4.08059 10.4411 3.84206 10.6593 3.71022 10.9415C3.57838 11.2237 3.56404 11.5467 3.67035 11.8394C3.67744 11.859 3.68376 11.8788 3.68927 11.8988C4.676 15.4846 5.51467 17.8131 6.58047 19.3394C7.59863 20.7975 8.84171 21.5465 10.79 21.8901C11.6993 22.0504 12.6313 22.0301 13.5328 21.8302C14.4342 21.6304 15.2875 21.2549 16.0439 20.7253C16.8003 20.1957 17.4449 19.5223 17.941 18.7435C18.4371 17.9648 18.775 17.0959 18.9354 16.1866L20.3598 8.10809C20.4138 7.80201 20.344 7.48703 20.1657 7.23244C19.9874 6.97784 19.7153 6.8045 19.4092 6.75053C19.1032 6.69656 18.7882 6.76638 18.5336 6.94465C18.279 7.12292 18.1056 7.39502 18.0517 7.7011L17.1699 12.7021C17.0949 13.127 16.6897 13.4107 16.2648 13.3358C15.8399 13.2609 15.5562 12.8557 15.6311 12.4308L16.512 7.43479Z" fill="#FCA100"/>
                    </svg>
                  </div>
                  <p class="regular16">Apporter vos compétences si vous avez envie d’offrir de votre temps pour la cause en tant que bénévole</p>
                </div>
                <div class="card inner-card shadow20">
                  <div class="inner-card-icon">
                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M9.77542 3.89892C8.25322 3.80376 6.74864 4.26762 5.54426 5.20337C4.33988 6.13912 3.51857 7.48239 3.23457 8.98089C2.95058 10.4794 3.22344 12.03 4.00191 13.3416C4.11155 13.5263 4.14029 13.748 4.08139 13.9546L3.48491 16.0464L5.5768 15.45C5.78337 15.3911 6.00507 15.4198 6.18979 15.5294C7.50133 16.3079 9.05197 16.5808 10.5505 16.2968C12.049 16.0128 13.3922 15.1915 14.328 13.9871C15.2637 12.7827 15.7276 11.2781 15.6324 9.75593C15.5373 8.23373 14.8896 6.79863 13.8112 5.72017C12.7327 4.64171 11.2976 3.99408 9.77542 3.89892ZM4.58561 3.96952C6.09061 2.80019 7.97075 2.22056 9.87291 2.33947C11.7751 2.45838 13.5684 3.26766 14.916 4.61532C16.2637 5.96297 17.073 7.75628 17.1919 9.65844C17.3108 11.5606 16.7312 13.4407 15.5618 14.9457C14.3925 16.4507 12.714 17.4771 10.8414 17.832C9.08167 18.1655 7.2644 17.8844 5.69163 17.042L3.57361 17.6459L3.57084 17.6467C3.33707 17.7124 3.09 17.7147 2.85506 17.6533C2.62011 17.5919 2.40576 17.469 2.23405 17.2973C2.06234 17.1256 1.93946 16.9112 1.87805 16.6763C1.81664 16.4413 1.81891 16.1943 1.88464 15.9605L1.88543 15.9577L2.48936 13.8397C1.64693 12.267 1.36589 10.4497 1.6994 8.68994C2.05429 6.8174 3.08061 5.13884 4.58561 3.96952Z" fill="#FCA100"/>
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M15.2257 7.78133C15.2483 7.35045 15.616 7.01949 16.0468 7.04211C17.389 7.11257 18.6902 7.52853 19.8244 8.24969C20.9586 8.97085 21.8873 9.97274 22.5204 11.1583C23.1536 12.3438 23.4698 13.6728 23.4384 15.0165C23.4096 16.2452 23.0911 17.4481 22.5109 18.5278L23.1154 20.6479C23.1811 20.8817 23.1834 21.1288 23.122 21.3637C23.0606 21.5987 22.9377 21.813 22.766 21.9847C22.5943 22.1564 22.3799 22.2793 22.145 22.3407C21.91 22.4021 21.663 22.3999 21.4292 22.3341L21.4264 22.3334L19.3087 21.7295C18.3937 22.2205 17.3887 22.5244 16.3525 22.6221C15.202 22.7306 14.0418 22.5822 12.9556 22.1876C11.8695 21.793 10.8845 21.1621 10.0719 20.3404C9.25934 19.5187 8.63942 18.5268 8.25694 17.4363C8.11413 17.0292 8.32843 16.5833 8.73558 16.4405C9.14274 16.2977 9.58857 16.512 9.73137 16.9192C10.0373 17.7913 10.533 18.5846 11.1829 19.2417C11.8328 19.8989 12.6205 20.4034 13.4892 20.719C14.3578 21.0346 15.2857 21.1533 16.2058 21.0665C17.126 20.9797 18.0153 20.6896 18.8097 20.2172C18.8097 20.2172 18.9832 20.1552 19.0909 20.1374C19.1987 20.1196 19.4232 20.1374 19.4232 20.1374L21.5151 20.7339L20.9186 18.642C20.8596 18.435 20.8886 18.2128 20.9988 18.0279C21.5489 17.1045 21.8512 16.0546 21.8763 14.98C21.9014 13.9054 21.6486 12.8425 21.1422 11.8944C20.6358 10.9462 19.8931 10.145 18.986 9.56822C18.079 8.99148 17.0383 8.65881 15.9649 8.60246C15.534 8.57984 15.2031 8.21221 15.2257 7.78133Z" fill="#FCA100"/>
                    </svg>
                  </div>
                  <p class="regular16">Apporter vos idées/réflexions en participant à l’Assemblée Générale</p>
                </div>
                <div class="center-button">
                  <a class="button-orange" href="https://www.helloasso.com/associations/m-sans-n/adhesions/adhesion-m-sans-n" target="_blank">
                    <span class="bold14 button-text">Adhérer à l'association</span>
                    <span class="button-icon">
                      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M13.5 6C9.91015 6 7 8.91015 7 12.5C7 16.0511 9.84762 18.9371 13.3839 18.999C13.4226 18.9987 13.4613 18.9985 13.5 18.9985C13.5387 18.9985 13.5774 18.9987 13.6161 18.999C17.1524 18.9371 20 16.0511 20 12.5C20 8.91015 17.0899 6 13.5 6ZM5 12.5C5 15.5316 6.58704 18.1924 8.97561 19.6971C8.3574 19.8927 7.75101 20.1286 7.16043 20.4041C5.17521 21.3298 3.41685 22.6792 2.00892 24.3572C1.65393 24.7803 1.70914 25.411 2.13223 25.766C2.55532 26.121 3.18607 26.0658 3.54106 25.6427C4.76127 24.1884 6.28518 23.019 8.0057 22.2167C9.68891 21.4317 11.5203 21.0167 13.3765 20.9991C13.4176 20.9997 13.4588 21 13.5 21C13.5412 21 13.5824 20.9997 13.6234 20.9991C15.4796 21.0168 17.3111 21.4317 18.9943 22.2167C20.7148 23.019 22.2387 24.1884 23.4589 25.6427C23.8139 26.0658 24.4447 26.121 24.8677 25.766C25.2908 25.411 25.346 24.7803 24.9911 24.3572C23.5831 22.6792 21.8248 21.3298 19.8395 20.4041C19.249 20.1286 18.6426 19.8927 18.0244 19.6971C20.413 18.1924 22 15.5316 22 12.5C22 7.80558 18.1944 4 13.5 4C8.80558 4 5 7.80558 5 12.5ZM28 13C28.5523 13 29 13.4477 29 14V16H31C31.5523 16 32 16.4477 32 17C32 17.5523 31.5523 18 31 18H29V20C29 20.5523 28.5523 21 28 21C27.4477 21 27 20.5523 27 20V18H25C24.4477 18 24 17.5523 24 17C24 16.4477 24.4477 16 25 16H27V14C27 13.4477 27.4477 13 28 13Z" fill="white"/>
                      </svg>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </template>
        </ResponsiveArticle>
      </section>
    </div>
  </section>
</template>

<script>
export default {
  name: 'IndexPage'
}
</script>

<style scoped>
.head-text {
  display: flex;
  flex-flow: column nowrap;
  gap: 15px;
}
.head-title {
  font-size: 60px;
  line-height: 60px;
}
.head-text-presentation {
  line-height: 30px;
}
#photo__head {
  height: 275px;
  object-position: 50% 10%;
}
#context {
  background: #DFDFDF7F;
  padding: 30px 0;
}
#context p {
  text-align: center;
}
#content {
  display: flex;
  flex-flow: column nowrap;
  gap: 40px;
}
#photo__evolution {
  max-height: 350px;
  object-fit: cover;
}
#photo__role {
  max-height: 350px;
  object-fit: cover;
  object-position: center 67%;
}
#photo__experience {
  max-height: 350px;
  object-fit: contain;
}
.join-title {
  font-size: 30px;
  line-height: 40px;
}
.card {
  border-radius: 8px;
  background: var(--white);
}
.outer-card {
  padding: 20px;
  display: flex;
  flex-flow: column nowrap;
  gap: 20px;
}
.inner-card {
  width: 100%;
  padding: 10px;
  display: flex;
  flex-flow: row nowrap;
  align-items: flex-start;
  gap: 10px;
}
.inner-card-icon {
  height: 25px;
  width: 25px;
  flex-shrink: 0;
}
.center-button {
  display: flex;
  justify-content: center;
  margin: 10px 0;
}
@media screen and (min-width: 768px) {
  #content {
    gap: 80px;
  }
  .join-title {
    font-size: 80px;
    line-height: 87px;
  }
}
@media screen and (min-width: 992px) {
  #adhesion {
    margin-right: 40px;
  }
}
</style>
