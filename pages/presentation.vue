<template>
  <section id="presentation">
    <div class="content-width main-content">
      <ResponsiveArticle reversed>
        <template v-slot:top>
          <div class="content__text">
            <h2 class="content__title h2">Les interventions</h2>
            <div class="content__paragraph">
              <p class="regular16">L’association M sans N intervient dans les collèges au sujet de l’Education à la vie Emotionnelle, Relationnelle et Collective. A travers ce triptyque (la relation à soi, à l’autre et aux autres), elle promeut le vivre-ensemble et veut lutter contre la violence sociale.</p>
              <p class="regular16">Ainsi, les thématiques abordées sont multiples mais surtout transversales : les émotions, les réseaux sociaux, le corps, le consentement, le harcèlement, les discriminations, la pornographie.</p>
            </div>
          </div>
        </template>
        <template v-slot:bot>
          <div id="photo__interventions__container" class="photo-container">
            <img id="photo__interventions" class="photo contain" src="~/assets/intervention.png" alt="illustration intervention" loading="lazy">
          </div>
        </template>
      </ResponsiveArticle>

      <ResponsiveArticle>
        <template v-slot:top>
          <div class="content__text">
            <h2 class="content__title h2">La méthode</h2>
            <div class="content__paragraph">
              <p class="regular16">Les interventions s’inspirent des principes de l’Education Populaire. L’idée n’est pas d’apporter un discours préconçu mais des outils issus de l’animation sociale afin que les collégiens puissent nourrir leur regard critique sur le monde social qui les entoure. L’utilisation de méthodes actives est au cœur de l’action rendant ainsi le jeune acteur de la réflexion collective.</p>
            </div>
          </div>
        </template>
        <template v-slot:bot>
          <div class="photo-container">
            <img id="photo__methodes" class="photo cover" src="~/assets/method.jpg" alt="photo post-it" loading="lazy">
          </div>
        </template>
      </ResponsiveArticle>

      <div class="content__text center">
        <h2 class="content__title h2">Les valeurs de l'association</h2>
        <div class="content__paragraph centered-small-container">
          <p class="regular16">Avec des valeurs de <span class="bold16">bienveillance</span>, de <span class="bold16">respect</span> et de <span class="bold16">non-jugement</span>, la démarche associative de M sans N vise à <span class="bold16">former de futurs adultes responsables et épanouis</span>.</p>
        </div>
      </div>

      <CollapsibleCard>
        <template v-slot:top>
          <ResponsiveArticle class="full-text">
            <template v-slot:top>
              <div class="quote">
                <h2 class="quote__symbol h2">“</h2>
                <p class="quote__text bold18">L'éducation est l'arme la plus puissante pour changer le monde.</p>
                <p class="h6 muted70">Nelson Mandela</p>
              </div>
            </template>
            <template v-slot:bot>
              <div class="content__text">
                <h2 class="content__title h2">La fondatrice</h2>
                <div class="content__paragraph">
                  <p class="regular16">Raphaëlle est responsable d’une maison de quartier (Gambetta – Suresnes 92) géré par l’IFAC.</p>
                </div>
                <div class="content__paragraph">
                  <p class="bold16 accent-text">Son objectif</p>
                  <p class="regular16">Créer du lien entre les habitants en mettant en place des actions socio-culturelles. La maison de quartier accueille aussi de façon régulière des enfants et adolescents et leur propose des activités inscrites dans le vivre ensemble. </p>
                </div>
              </div>
            </template>
          </ResponsiveArticle>
        </template>
        <template v-slot:collapsible>
          <ResponsiveArticle>
            <template v-slot:top>
              <div class="content__text">
                <h3 class="h3 muted60">Un engagement civique</h3>
                <div class="content__paragraph">
                  <p class="regular16">Après une licence de droit et un master de géopolitique, Raphaëlle a choisi de s’orienter vers le domaine du socio-éducatif, via un service civique auprès de l’association ZupdeCo qui aide les enfants en difficulté scolaire. </p>
                </div>
              </div>
            </template>
            <template v-slot:bot>
              <div class="photo-container">
                <img id="photo__zupdeco" class="photo contain" src="~/assets/zupdeco.png" alt="logo association Zupdeco" loading="lazy">
              </div>
            </template>
          </ResponsiveArticle>
          <ResponsiveArticle reversed>
            <template v-slot:top>
              <div class="content__text">
                <h3 class="h3 muted60">Une formation d’Education Populaire</h3>
                <div class="content__paragraph">
                  <p class="regular16">Par la suite, elle a décidé de passer un DEJEPS (Diplome d'Etat de la jeunesse, de l’éducation populaire et des sports). Cette formation lui a donné une connaissance des différentes méthodes et techniques pédagogiques. Pendant ce même temps, une expérience en tant que responsable d’animation aux Apprentis d’Auteuil (St Philippe – Meudon 92) lui a permis de mettre en place son premier projet d’Éducation à la vie Affective et Sexuelle.</p>
                </div>
              </div>
            </template>
            <template v-slot:bot>
              <div class="photo-container">
                <img id="photo__couveuse" class="photo contain" src="~/assets/couveuse.png" alt="logo la couveuse" loading="lazy">
              </div>
            </template>
          </ResponsiveArticle>
          <ResponsiveArticle>
            <template v-slot:top>
              <div class="content__text">
                <h3 class="h3 muted60">Une expérience d’éducatrice</h3>
                <div class="content__paragraph">
                  <p class="regular16">Elle a continué avec les Apprentis d’Auteuil (MECS Madelaine Delbrel – Hardricourt 78) en tant qu’éducatrice. Cette expérience avec des adolescents vivant des situations familiales difficiles et complexe a enrichi son observation sur l’important des liens relationnels particulièrement au moment de l’adolescence.</p>
                </div>
              </div>
            </template>
            <template v-slot:bot>
              <div class="photo-container">
                <img id="photo__appretisauteuil" class="photo contain" src="~/assets/apprentisauteuil.jpg" alt="logo apprentis d'Auteuil" loading="lazy">
              </div>
            </template>
          </ResponsiveArticle>
        </template>
      </CollapsibleCard>

      <div class="article">
        <div class="content__text">
          <h2 class="h2">La création de l’association</h2>
          <div class="content__paragraph column">
            <p class="regular16">A partir de ses expériences auprès des jeunes et de son intérêt pour les questions de vivre-ensemble, Raphaëlle a décidé de créer l’association M sans N, accompagnée par l’Institut de l’Engagement. Pour elle, il est fondamental de créer des espaces de parole au sein des collèges pour que les élèves complètent leur apprentissage scolaire par une éducation à la vie émotionnelle, relationnelle et collective. Elle continue de nourrir ses réflexions en participant à la promotion 2022 de SocialDemain et bénéficie d’un accompagnement individuel et collectif axé sur la santé avec le programme La Couveuse, du CRIPS.</p>
          </div>
        </div>
        <div class="photo-container">
          <img id="photo_intervention2" class="photo cover" src="~/assets/intervention2.jpg" alt="photo échange classe" loading="lazy">
        </div>
      </div>

      <CollapsibleCard>
        <template v-slot:top>
          <ResponsiveArticle class="full-text">
            <template v-slot:top>
              <div class="quote">
                <h2 class="quote__symbol h2">“</h2>
                <p class="quote__text bold18">L'enfant doit bénéficier d’une éducation qui contribue à sa culture générale et lui permette, dans des conditions d’égalité de chances, de développer ses facultés, son jugement personnel et son sens des responsabilités morales et sociales, et de devenir un membre utile de la société.</p>
                <p class="quote__author h6">Article 7 de la Déclaration des Droits de l’Enfant du 20 Novembre 1959</p>
              </div>
            </template>
            <template v-slot:bot>
              <div class="content__text">
                <h2 class="content__title h2">La présidente</h2>
                <div class="content__paragraph">
                  <p class="regular16">Clara est présidente de l’association et étudiante en master de droit privé à l’université Paris-Nanterre.</p>
                </div>
                <div class="content__paragraph">
                  <p class="bold16 accent-text">Son objectif</p>
                  <p class="regular16">Accompagner les jeunes a développer un rapport bienveillant avec eux meme et leurs entourages. C'est leur donner des clés de compréhension qui leurs permettent de faire face à leurs difficultés et leurs premières expériences sereinement.</p>
                </div>
              </div>
            </template>
          </ResponsiveArticle>
        </template>
        <template v-slot:collapsible>
          <ResponsiveArticle>
            <template v-slot:top>
              <div class="content__text">
                <h3 class="h3 muted60">Son engagement</h3>
                <div class="content__paragraph">
                  <p class="regular16">Après une licence en humanité, Clara choisit de poursuivre ses études dans le domaine juridique car elle considère que le droit est au cœur du fonctionnement de la société.</p>
                  <p class="regular16">Actuellement en stage dans un cabinet d’avocat qui traite notamment des procédures civiles et pénales concernant les mineurs, Clara porte un regard critique sur la protection à apporter aux mineurs et notamment sur l’action mise en place pour éviter que les jeunes entrent dans le cycle de la délinquance.</p>
                </div>
              </div>
            </template>
            <template v-slot:bot>
              <div class="photo-container">
                <img id="photo__parisnanterre" class="photo contain" src="~/assets/parisnanterre.png" alt="logo université Paris Nanterre" loading="lazy">
              </div>
            </template>
          </ResponsiveArticle>
          <ResponsiveArticle reversed>
            <template v-slot:top>
              <div class="content__text">
                <h3 class="h3 muted60">Un engagement scout</h3>
                <div class="content__paragraph">
                  <p class="regular16">Clara s’est beaucoup investie dans le scoutisme. Elle est actuellement responsable d’un groupe de louveteaux (8-12 ans) ce qui lui permet de profiter d’un lien de « grande sœur » avec les enfants et d’aborder les questions de la vie en communauté notamment lors des camps.</p>
                </div>
              </div>
            </template>
            <template v-slot:bot>
              <div class="photo-container">
                <img id="photo__scout" class="photo cover" src="~/assets/scout.jpg" alt="photo scout" loading="lazy">
              </div>
            </template>
          </ResponsiveArticle>
          <ResponsiveArticle>
            <template v-slot:top>
              <div class="content__text">
                <h3 class="h3 muted60">Un engagement associatif</h3>
                <div class="content__paragraph">
                  <p class="regular16">Après avoir bénévolement travaillé pour les hôpitaux de Paris durant la crise du Covid, Clara s’est engagée dans l’association CASA qui offre des visites de monuments historiques à travers la France. L’objectif de ses visites n’est pas que le guide touristique bénévole soit un « enseignant » mais un compagnon qui fait découvrir aux personnes intéressées l’histoires des monuments. L’échange est au cœur de cette démarche.</p>
                </div>
              </div>
            </template>
            <template v-slot:bot>
              <div class="photo-container">
                <img id="photo__handshake" class="photo cover" src="~/assets/handshake.jpg" alt="photo poignée de mains" loading="lazy">
              </div>
            </template>
          </ResponsiveArticle>
        </template>
      </CollapsibleCard>

    </div>
  </section>
</template>

<script>
export default {
  name: "presentation"
}
</script>

<style scoped>
.quote {
  display: flex;
  flex-flow: column nowrap;
  gap: 20px;
}

.quote__symbol {
  font-size: 108px;
}

.quote__text {
  font-size: 28px;
  line-height: 40px;
}

.article {
  display: flex;
  flex-flow: column nowrap;
  gap: 40px;
}

.column {
  column-count: 1;
  column-gap: 40px;
}

#photo__interventions__container {
  background-color: #ff914d;
}

#photo__interventions {
  max-height: 350px;
}

#photo__methodes {
  max-height: 350px;
  object-fit: cover;
}

#photo__zupdeco {
  max-height: 120px;
  object-fit: contain;
}

#photo__couveuse {
  max-height: 200px;
  object-fit: contain;
}

#photo__appretisauteuil {
  max-height: 200px;
  object-fit: contain;
}

#photo_intervention2 {
  height: 283px;
  object-fit: cover;
  object-position: center 10%;
}

#photo__parisnanterre {
  max-height: 250px;
  object-fit: contain;
}

#photo__scout {
  max-height: 250px;
  object-fit: cover;
}

#photo__handshake {
  max-height: 250px;
  object-fit: cover;
}

@media screen and (min-width: 768px) {
  .full-text {
    align-items: center;
  }

  .article {
    padding: 20px 40px;
  }

  .column {
    column-count: 2;
  }
}
</style>
