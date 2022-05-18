<template>
  <section id="programme">
    <div class="content-width main-content">
      <div id="themes">
        <h2 class="h3 program__title">Les thématiques du programme</h2>
        <ResponsiveArticle reversed>
          <template v-slot:top>
            <div class="content__text">
              <p class="regular16">Consciente de ces nouveaux enjeux éducatifs, l'association aborde des thématiques qui permettent d’avoir une analyse plus globale des relations humaines.</p>
              <p class="regular16">Le vocabulaire et l’approche utilisés ne sont pas les mêmes selon les classes et sont adaptés à l’âge du public.</p>
              <p class="regular16">Le programme de l’intervention se déroule sur <span class="bold16">trois séances au minimum</span>.</p>
              <p class="regular16">Les séances ont été construites à partir d’outils d’animation sociale qui permettent l’expression de chacun, tout en donnant un cadre aux échanges. Cela permet aux jeunes de tout âge de pouvoir s’ouvrir dans un environnement sécurisant.</p>
              <p class="regular16">La régularité des séances est un aspect <span class="bold16">nécessaire</span> des interventions car cela créé un cadre <span class="bold16">bienveillant</span> et <span class="bold16">sécurisant</span> pour les élèves. De plus, cela permet aux collégiens de revenir sur une notion précédemment abordée (feed back) dans le cas où il aurait forgé une réflexion nouvelle les jours suivants l’intervention.</p>
            </div>
          </template>
          <template v-slot:bot>
            <div id="theme-gallery" class="gallery">
              <ThemeCard>
                <template v-slot:title>Les émotions</template>
                <template v-slot:text>Les identifier, et les utiliser. Introduction à la communication non violente.</template>
              </ThemeCard>
              <ThemeCard>
                <template v-slot:title>Le corps</template>
                <template v-slot:text>Réfléchir à la perception que l’on en a.</template>
              </ThemeCard>
              <ThemeCard>
                <template v-slot:title>Les discriminations</template>
                <template v-slot:text>Les décoder et ouvrir les jeunes à ce qui nous rassemble.</template>
              </ThemeCard>
              <ThemeCard>
                <template v-slot:title>Le harcèlement</template>
                <template v-slot:text>Comprendre son mécanisme et proposer des solutions.</template>
              </ThemeCard>
              <ThemeCard>
                <template v-slot:title>La pornographie</template>
                <template v-slot:text>Déconstruire les stéréotypes néfastes.</template>
              </ThemeCard>
              <ThemeCard>
                <template v-slot:title>Les réseaux sociaux</template>
                <template v-slot:text>Conscientiser sa pratique et créer une vigilance aux risques.</template>
              </ThemeCard>
              <ThemeCard>
                <template v-slot:title>L'amour et la sexualité</template>
                <template v-slot:text>S’interroger sur leurs représentations.</template>
              </ThemeCard>
            </div>
          </template>
        </ResponsiveArticle>
      </div>

      <div id="objectives">
        <h2 class="h3 program__title">Les objectifs des interventions</h2>
        <p class="regular18 program__text">Faire de la prévention contre la violence sociale :</p>
        <div id="objective-gallery" class="gallery">
          <ObjectiveCard>
            <template v-slot:title>Prévention</template>
            <template v-slot:text>L’objectif de ces ateliers d’Education à la vie Emotionnelle, Relationnelle et Collective est de prévenir la violence de notre société. Les enfants et adolescents en sont témoins, le but étant d’éviter qu'ils l'intègrent, l'a répètent ou l'a subissent. Dans ce cadre, il est important de conscientiser les mécanismes de la violence et leurs conséquences.</template>
          </ObjectiveCard>
          <ObjectiveCard inner>
            <template v-slot:title>Permettre l’expression et la critique de chacun</template>
            <template v-slot:text>La volonté associative est de créer des espaces de discussion, créer des moments lors desquels les jeunes expriment leur vision de ce qu’ils perçoivent de notre société.</template>
            <template v-slot:inner-text>C’est aussi le moment de forger une opinion, de structurer son esprit critique.</template>
          </ObjectiveCard>
          <ObjectiveCard>
            <template v-slot:title>Orienter en cas de besoin particulier</template>
            <template v-slot:text>Lorsqu’un/e adolescent/e rencontre une situation particulière et a le besoin de parler à un professionnel (psychologue, infirmière), il doit pouvoir s’adresser à une personne compétente qui pourra l’orienter vers les organismes compétents qui auront les moyens de l’accompagner (ex : planning familial).</template>
          </ObjectiveCard>
          <ObjectiveCard>
            <template v-slot:title>Apporter des connaissances sur le cadre légal des violences</template>
            <template v-slot:text>Il est important que les jeunes sachent comment la loi nous protège, mais aussi comment est-ce qu’elle punit et savoir quels sont les acteurs vers qui se tourner.</template>
          </ObjectiveCard>
          <ObjectiveCard>
            <template v-slot:title>Soigner</template>
            <template v-slot:text>L’âge adolescent est une période de transition durant laquelle une partie du cerveau, le cortex préfrontal, est en structuration. Accorder un soin particulier aux émotions et aux raisonnements de chacun permet de les guider vers un équilibre émotionnel qui favorise le bien-être commun.</template>
          </ObjectiveCard>
        </div>
      </div>

      <div id="exemples">
        <h2 class="h3 program__title">Intervention avec des troisièmes</h2>
        <div id="photo-gallery" class="gallery">
          <div class="photo-container">
            <img class="photo cover photo-gallery__photo" src="~/assets/intervention3e1.jpg" alt="illustration expérience" loading="lazy">
          </div>
          <div class="photo-container">
            <img class="photo cover photo-gallery__photo" src="~/assets/intervention3e2.jpg" alt="illustration expérience" loading="lazy">
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script>
export default {
  name: "programme"
}
</script>

<style scoped>
.program__text,
.program__title {
  margin-bottom: 30px;
}

#theme-gallery {
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  column-gap: 20px;
}

#objective-gallery {
  grid-template-columns: repeat(auto-fill, minmax(335px, 1fr));
  column-gap: 20px;
}

#photo-gallery {
  grid-template-columns: repeat(auto-fill, minmax(335px, 1fr));
  column-gap: 20px;
}

.photo-gallery__photo {
  max-height: 300px;
}

@media screen and (min-width: 550px) {
  #photo-gallery {
    grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
    column-gap: 20px;
  }
}

</style>
