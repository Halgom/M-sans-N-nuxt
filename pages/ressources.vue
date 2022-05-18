<template>
  <section id="ressources">
    <div class="content-width main-content">
      <div id="go-further">
        <div class="content__text">
          <h2 class="h2">Pour aller plus loin...</h2>
          <p class="regular16">Cette page vous partage des ressources qui influencent et nourrissent notre action.</p>
        </div>
        <div class="gallery resource-gallery">

          <ResourceCard href="https://www.france.tv/france-2/infrarouge/427249-sexe-sans-consentement.html">
            <template v-slot:banner>
              <img class="photo cover" src="~/assets/5d701419-phpjiyq7k_png.jpg" alt="baniere documentaire sexe sans consentement" loading="lazy">
            </template>
            <template v-slot:title>Sexe sans Consentement</template>
            <template v-slot:director>Réalisé par Delphine Dhilly</template>
            <template v-slot:producer>Infrarouge sur France 2</template>
            <template v-slot:description>Ce documentaire reprend le témoignage de cinq femmes sur ce moment de la zone grise où l’expression du “non” n’est pas toujours entendu.</template>
          </ResourceCard>

          <ResourceCard href="https://boutique.arte.tv/detail/preliminaires">
            <template v-slot:banner>
              <img id="affiche__preliminaires" class="photo cover" src="~/assets/Preliminaires.jpg" alt="affiche reportage préliminaires" loading="lazy">
            </template>
            <template v-slot:title>Préliminaires</template>
            <template v-slot:director>Réalisé par Julie Talon</template>
            <template v-slot:producer>Arte</template>
            <template v-slot:description>Ce reportage est axé sur les témoignages d’adolescents et de jeunes adultes qui reviennent sur les prémisses de leur vie sexuelle. De nombreux sujets sont abordés...</template>
          </ResourceCard>

          <ResourceCard href="https://www.gallimard.fr/Catalogue/GALLIMARD/Blanche/Les-choses-humaines">
            <template v-slot:banner>
              <img class="photo cover" src="~/assets/les-choses-humaines.jpg" alt="couverture livre les choses humaines" loading="lazy">
            </template>
            <template v-slot:title>Les choses humaines</template>
            <template v-slot:director>Écrit par Karine Tuil</template>
            <template v-slot:producer>Gallimard</template>
            <template v-slot:description>Ce roman nous fait rencontrer des personnages profondément impactés par leur histoire personnelle et présente les mécanismes des relations...</template>
          </ResourceCard>

          <ResourceCard href="https://www.franceinter.fr/emissions/grand-bien-vous-fasse">
            <template v-slot:banner>
              <img class="photo cover" src="~/assets/grand-bien-vous-fasse.jpg" alt="banière emission grand bien vous fasse" loading="lazy">
            </template>
            <template v-slot:title>Grand bien vous fasse</template>
            <template v-slot:director>Réalisé par Ali Rebeihi</template>
            <template v-slot:producer>France Inter</template>
            <template v-slot:description>Cette émission de radio présente régulièrement des sujets de société et de la relation.</template>
          </ResourceCard>

        </div>
      </div>

      <div id="talking-about-us">
        <div class="content__text">
          <h2 class="h2">On parle de nous !</h2>
        </div>

        <div class="gallery resource-gallery">

          <ResourceCard href="http://idfm98.fr/emissions/la-parole-aux-associations-4/">
            <template v-slot:banner>
              <img class="photo cover" src="~/assets/la-parole-aux-associations.jpg" alt="illustration emission radio" loading="lazy">
            </template>
            <template v-slot:title>La Parole aux Associations</template>
            <template v-slot:director>Réalisé par Audrey Lamolie</template>
            <template v-slot:producer>idFM Radio</template>
            <template v-slot:description>Audrey Lamolie accueille Raphaëlle, fondatrice de l’association M sans N, pour parler de son parcours.</template>
          </ResourceCard>

        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ressources"
}
</script>

<style scoped>
.resource-gallery {
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  grid-gap: 20px;
}

#affiche__preliminaires {
  object-position: 50% 0;
}
</style>
