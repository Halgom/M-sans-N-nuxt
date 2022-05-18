<template>
  <header id="header" class="header scroll-header">
    <div class="content-width">
      <nav class="nav">
        <div class="logo-container">
          <nuxt-link to="/">
            <img class="logo" src="@/assets/header-logo.svg" alt="logo m sans n">
          </nuxt-link>
        </div>

        <div id="nav-overlay" class="nav-overlay" :class="this.open ? 'show-overlay' : ''" @click="showNav"></div>
        <div id="nav-menu" class="nav-menu" :class="this.open ? 'show-menu' : ''">
          <div class="nav-title" @click="showNav">
            <div class="close-button"></div>
            <p class="bold18">Menu</p>
          </div>

          <ul class="nav-list">
            <li class="nav-item">
              <nuxt-link class="nav_link active-link" to="/" @click="closeNav">
                <div id="icone-accueil" class="link-icon">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path id="home-path" d="M19.0134 26.3024V20.3023C19.0134 20.0371 18.9081 19.7827 18.7205 19.5952C18.533 19.4076 18.2786 19.3023 18.0134 19.3023H14.0134C13.7482 19.3023 13.4939 19.4076 13.3063 19.5952C13.1188 19.7827 13.0134 20.0371 13.0134 20.3023V26.3024C13.0134 26.5676 12.9081 26.8219 12.7206 27.0095C12.5331 27.197 12.2787 27.3024 12.0136 27.3024L6.01429 27.3032C5.88295 27.3032 5.7529 27.2774 5.63156 27.2271C5.51022 27.1769 5.39997 27.1032 5.3071 27.0104C5.21423 26.9175 5.14055 26.8073 5.09029 26.6859C5.04003 26.5646 5.01416 26.4345 5.01416 26.3032V14.7457C5.01416 14.6063 5.04327 14.4686 5.09963 14.3411C5.15599 14.2137 5.23834 14.0995 5.34142 14.0058L15.3407 4.91393C15.5248 4.74656 15.7647 4.65382 16.0134 4.65381C16.2622 4.6538 16.5021 4.74653 16.6862 4.91388L26.6868 14.0058C26.7899 14.0995 26.8723 14.2137 26.9287 14.3412C26.985 14.4686 27.0142 14.6064 27.0142 14.7457V26.3032C27.0142 26.4345 26.9883 26.5646 26.938 26.6859C26.8878 26.8073 26.8141 26.9175 26.7212 27.0104C26.6284 27.1032 26.5181 27.1769 26.3968 27.2271C26.2754 27.2774 26.1454 27.3032 26.014 27.3032L20.0133 27.3024C19.7481 27.3024 19.4938 27.197 19.3063 27.0095C19.1188 26.8219 19.0134 26.5676 19.0134 26.3024V26.3024Z" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
                <span class="bold14">Accueil</span>
              </nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link class="nav_link" to="/presentation" @click="closeNav">
                <div id="icone-presentation" class="link-icon">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path id="megaphone-path" fill-rule="evenodd" clip-rule="evenodd" d="M10.5722 11.0347L6.691 12.0024C5.40431 12.3232 4.29776 13.1421 3.61477 14.2787C2.93179 15.4154 2.72832 16.7768 3.04913 18.0635C3.36994 19.3502 4.18875 20.4568 5.32542 21.1398C6.17342 21.6493 7.14651 21.8919 8.12034 21.8491C8.13644 21.96 8.17158 22.07 8.22716 22.1746L11.4309 28.2036L11.4321 28.2059C11.5831 28.4884 11.7998 28.7305 12.0639 28.9118C12.328 29.093 12.6318 29.2083 12.9497 29.2477C13.2676 29.2871 13.5903 29.2496 13.8907 29.1383C14.1904 29.0272 14.4592 28.8459 14.6744 28.6096L14.6758 28.6081L15.7844 27.3953C16.0105 27.1516 16.1718 26.8551 16.2536 26.5329C16.3355 26.2104 16.3351 25.8726 16.2526 25.5504L14.9483 20.3192C17.0673 20.0222 22.3435 19.7101 28.2548 22.5876C28.4253 22.6693 28.6155 22.701 28.8034 22.679C28.9912 22.657 29.1689 22.5822 29.3159 22.4633C29.463 22.3444 29.5732 22.1862 29.634 22.0071C29.6948 21.8281 29.7035 21.6354 29.6592 21.4516L24.9538 2.57935C24.9066 2.39624 24.8085 2.23026 24.6708 2.10068C24.533 1.97109 24.3614 1.88321 24.1758 1.84723C23.9901 1.81125 23.7981 1.82864 23.6219 1.89739C23.4458 1.96614 23.2927 2.08343 23.1805 2.23565C19.3107 7.55336 14.5036 9.75451 12.4944 10.4864C12.3349 9.98916 11.8146 9.69433 11.3006 9.8225C10.7647 9.95611 10.4386 10.4988 10.5722 11.0347L10.5722 11.0347ZM12.9827 12.4358C13.0986 12.3951 13.2238 12.3498 13.3576 12.2995C14.1368 12.0066 15.2129 11.5438 16.4522 10.8507C18.5466 9.67948 21.1205 7.8425 23.508 5.04745L27.2239 19.9512C23.8037 18.6041 20.6686 18.1906 18.2696 18.1397C16.85 18.1095 15.6826 18.2061 14.857 18.3134C14.7153 18.3318 14.5835 18.3505 14.4621 18.369L12.9827 12.4358ZM12.5076 18.7971L11.056 12.9753L7.17484 13.943C6.40283 14.1355 5.7389 14.6268 5.32911 15.3088C4.91932 15.9908 4.79724 16.8077 4.98972 17.5797C5.18221 18.3517 5.67349 19.0156 6.3555 19.4254C7.0375 19.8352 7.85436 19.9573 8.62638 19.7648L12.5076 18.7971ZM12.9914 20.7377L10.1102 21.4561L13.1958 27.2629L13.1977 27.2608L14.311 26.0427L14.3135 26.0401L12.9914 20.7377Z" fill="#000"/>
                  </svg>
                </div>
                <span class="bold14">Présentation</span>
              </nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link class="nav_link" to="/programme" @click="closeNav">
                <div id="icone-programme" class="link-icon">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path id="lamp-path" fill-rule="evenodd" clip-rule="evenodd" d="M21.0903 5.57523C19.5316 4.50607 17.6758 3.9548 15.7862 3.99959C10.9096 4.11196 6.97747 8.17439 6.99997 13.0578L6.99998 13.0591C7.00442 14.4154 7.31748 15.7529 7.91545 16.9702C8.51342 18.1876 9.38061 19.2529 10.4513 20.0854L9.83747 20.8749L10.4563 20.0893C10.9338 20.4655 11.3205 20.9443 11.5877 21.4902C11.8549 22.0361 11.9958 22.6352 12 23.243L12 23.2499L12 23.9999H20L20 23.2479C20.0012 22.6343 20.1427 22.029 20.4136 21.4784C20.684 20.9291 21.0761 20.4487 21.56 20.0738C23.0454 18.9067 24.1258 17.3018 24.6483 15.4865C25.1712 13.6701 25.1088 11.7351 24.4702 9.95615C23.8315 8.17715 22.649 6.64439 21.0903 5.57523ZM9.22086 21.6621C7.91184 20.6436 6.85158 19.3407 6.12032 17.852C5.38854 16.3622 5.00542 14.7254 4.99999 13.0656L5.99998 13.0624L4.99999 13.067L4.99999 13.0656C4.97321 7.0997 9.76633 2.13791 15.7392 2.00015C18.0485 1.94554 20.3167 2.61931 22.2216 3.92593C24.1267 5.23268 25.572 7.10606 26.3526 9.28039C27.1331 11.4547 27.2093 13.8196 26.5703 16.0397C25.9313 18.2597 24.6096 20.2222 22.7925 21.6489L22.7866 21.6536C22.5423 21.8424 22.3444 22.0845 22.2081 22.3616C22.0719 22.6383 22.0007 22.9425 22 23.2509V23.9999C22 24.5303 21.7893 25.039 21.4142 25.4141C21.0391 25.7892 20.5304 25.9999 20 25.9999H12C11.4696 25.9999 10.9608 25.7892 10.5858 25.4141C10.2107 25.039 9.99998 24.5303 9.99998 23.9999V23.2536C9.99743 22.947 9.92613 22.6449 9.79132 22.3695C9.65647 22.094 9.46153 21.8523 9.22086 21.6621ZM10 28.9999C10 28.4476 10.4477 27.9999 11 27.9999H21C21.5523 27.9999 22 28.4476 22 28.9999C22 29.5522 21.5523 29.9999 21 29.9999H11C10.4477 29.9999 10 29.5522 10 28.9999ZM17.1796 6.1139C16.635 6.02159 16.1188 6.38818 16.0265 6.9327C15.9342 7.47721 16.3008 7.99346 16.8453 8.08576C17.8634 8.25835 18.8028 8.74268 19.5339 9.47192C20.265 10.2012 20.7517 11.1393 20.9269 12.157C21.0206 12.7013 21.5378 13.0665 22.0821 12.9728C22.6264 12.8791 22.9916 12.362 22.8979 11.8177C22.6525 10.392 21.9706 9.07756 20.9463 8.0559C19.922 7.03424 18.6059 6.35569 17.1796 6.1139Z" fill="#000"/>
                  </svg>
                </div>
                <span class="bold14">Programme</span>
              </nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link class="nav_link" to="/ressources" @click="closeNav">
                <div id="icone-ressources" class="link-icon">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path id="info-path" fill-rule="evenodd" clip-rule="evenodd" d="M16 5C9.92487 5 5 9.92487 5 16C5 22.0751 9.92487 27 16 27C22.0751 27 27 22.0751 27 16C27 9.92487 22.0751 5 16 5ZM3 16C3 8.8203 8.8203 3 16 3C23.1797 3 29 8.8203 29 16C29 23.1797 23.1797 29 16 29C8.8203 29 3 23.1797 3 16ZM14 15C14 14.4477 14.4477 14 15 14H16C16.5523 14 17 14.4477 17 15V21C17.5523 21 18 21.4477 18 22C18 22.5523 17.5523 23 17 23H16C15.4477 23 15 22.5523 15 22V16C14.4477 16 14 15.5523 14 15ZM17.25 10.5C17.25 11.3284 16.5784 12 15.75 12C14.9216 12 14.25 11.3284 14.25 10.5C14.25 9.67157 14.9216 9 15.75 9C16.5784 9 17.25 9.67157 17.25 10.5Z" fill="#000"/>
                  </svg>
                </div>
                <span class="bold14">Ressources</span>
              </nuxt-link>
            </li>
          </ul>

          <div class="contact">
            <p class="bold16">Suivez-nous</p>
            <div class="contact-item">
              <div class="contact-logo">
                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M12.5 9.375C10.7741 9.375 9.375 10.7741 9.375 12.5C9.375 14.2259 10.7741 15.625 12.5 15.625C14.2259 15.625 15.625 14.2259 15.625 12.5C15.625 10.7741 14.2259 9.375 12.5 9.375ZM7.8125 12.5C7.8125 9.91117 9.91117 7.8125 12.5 7.8125C15.0888 7.8125 17.1875 9.91117 17.1875 12.5C17.1875 15.0888 15.0888 17.1875 12.5 17.1875C9.91117 17.1875 7.8125 15.0888 7.8125 12.5Z" fill="black"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M8.20312 4.29688C6.04576 4.29688 4.29688 6.04576 4.29688 8.20312V16.7969C4.29688 18.9542 6.04576 20.7031 8.20312 20.7031H16.7969C18.9542 20.7031 20.7031 18.9542 20.7031 16.7969V8.20312C20.7031 6.04576 18.9542 4.29688 16.7969 4.29688H8.20312ZM2.73438 8.20312C2.73438 5.18282 5.18282 2.73438 8.20312 2.73438H16.7969C19.8172 2.73438 22.2656 5.18282 22.2656 8.20312V16.7969C22.2656 19.8172 19.8172 22.2656 16.7969 22.2656H8.20312C5.18282 22.2656 2.73438 19.8172 2.73438 16.7969V8.20312Z" fill="black"/>
                  <path d="M17.5781 8.59375C18.2253 8.59375 18.75 8.06908 18.75 7.42188C18.75 6.77467 18.2253 6.25 17.5781 6.25C16.9309 6.25 16.4062 6.77467 16.4062 7.42188C16.4062 8.06908 16.9309 8.59375 17.5781 8.59375Z" fill="white"/>
                </svg>
              </div>
              <a class="regular14" href="https://www.instagram.com/m.sans.n/" target="_blank">Instagram</a>
            </div>
            <div class="contact-item">
              <div class="contact-logo">
                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M3.90625 12.5C3.90625 7.7538 7.7538 3.90625 12.5 3.90625C17.2462 3.90625 21.0938 7.7538 21.0938 12.5C21.0938 16.9828 17.6613 20.664 13.2813 21.0587L13.2813 14.8438H15.625C16.0565 14.8438 16.4062 14.494 16.4062 14.0625C16.4062 13.631 16.0565 13.2812 15.625 13.2812H13.2813L13.2813 10.9375L13.2813 10.9342C13.2804 10.7292 13.3201 10.5261 13.3982 10.3365C13.4762 10.147 13.5911 9.97473 13.736 9.82977C13.881 9.68481 14.0532 9.56999 14.2428 9.49193C14.4323 9.41388 14.6355 9.37414 14.8405 9.375H16.4063C16.8377 9.375 17.1875 9.02522 17.1875 8.59375C17.1875 8.16228 16.8377 7.8125 16.4063 7.8125H14.8453C13.1185 7.8125 11.7188 9.2123 11.7188 10.939V13.2812H9.375C8.94353 13.2812 8.59375 13.631 8.59375 14.0625C8.59375 14.494 8.94353 14.8438 9.375 14.8438H11.7188V21.0587C7.33868 20.664 3.90625 16.9828 3.90625 12.5ZM12.5 22.6562C18.1091 22.6562 22.6562 18.1091 22.6562 12.5C22.6562 6.89086 18.1091 2.34375 12.5 2.34375C6.89086 2.34375 2.34375 6.89086 2.34375 12.5C2.34375 18.1091 6.89086 22.6562 12.5 22.6562Z" fill="black"/>
                </svg>
              </div>
              <a class="regular14" href="https://www.facebook.com/M-sans-N-103006345539385/" target="_blank">Facebook</a>
            </div>
          </div>
        </div>

        <div id="nav-toggle" class="nav-toggle" @click="showNav">
          <div class="burger-line" />
          <div class="burger-line" />
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: "TheHeader",
  data() {
    return {
      open: false
    }
  },
  methods: {
    showNav() {
      this.open = ! this.open;
    },
    closeNav() {
      this.open = false;
    }
  }
}
</script>

<style scoped>
.header {
  height: var(--header-height);
  width: 100%;
  position: fixed;
  z-index: 40;
  background: linear-gradient(180deg, #FFFFFF 73.61%, rgba(255, 255, 255, 0.2) 602.31%);
  --nav-menu-width: 188px;
}
.nav {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.header .logo-container {
  height: 68px;
  margin-right: 20px;
}
.header .logo {
  height: 68px;
}
.nav-overlay {
  position: fixed;
  z-index: 45;
  width: 100vw;
  height: 100vh;
  top: 0;
  display: none;
}
.nav-overlay.show-overlay {
  display: block;
}
.nav-menu {
  width: var(--nav-menu-width);
  height: 100vh;
  overflow-y: auto;
  position: fixed;
  top: 0;
  right: -100%;
  z-index: 50;
  background: var(--white);
  padding: 48px 24px;
  background: linear-gradient(180deg, #FFFFFF 73.61%, rgba(255, 255, 255, 0.2) 602.31%);
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-items: center;
  gap: 50px;
  transition: right 0.3s ease;
}
.nav-menu.show-menu {
  right: 0;
}
.nav-title {
  width: 100%;
  position: relative;
}
.nav-title .close-button {
  height: 25px;
  width: 25px;
  padding: 4px;
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
}
.nav-title .close-button::before,
.nav-title .close-button::after {
  content: '';
  position: absolute;
  top: 45%;
  transform: translateY(-50%);
  height: 2px;
  width: 25px;
  background-color: black;
  border-radius: 2px;
}
.nav-title .close-button::before {
  transform: rotate(45deg);
}
.nav-title .close-button::after {
  transform: rotate(-45deg);
}
.nav-title p {
  width: 100%;
  text-align: center;
}
.nav-list {
  list-style: none;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  gap: 40px;
}
.nav-item a {
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  text-decoration: none;
  color: var(--black);
}
.nav-item .link-icon {
  width: 25px;
  height: 25px;
  margin-bottom: 4px;
}
.nav-item svg {
  opacity: 0;
  transition: opacity 0.2s ease;
}
#home-path {
  stroke: var(--black);
  transition: color 0.2s ease;
}
#megaphone-path,
#lamp-path,
#info-path {
  fill: var(--black);
  transition: color 0.2s ease;
}
a.nuxt-link-exact-active svg,
a:hover svg {
  opacity: 1;
}
a.nuxt-link-exact-active {
  color: var(--orange100);
}
a.nuxt-link-exact-active #home-path {
  stroke: var(--orange100);
}
a.nuxt-link-exact-active #megaphone-path,
a.nuxt-link-exact-active #lamp-path,
a.nuxt-link-exact-active #info-path {
  fill: var(--orange100);
}
.header .contact {
  display: flex;
  flex-direction: column;
  gap: 15px
}
.contact-item {
  display: flex;
  align-items: center;
  font-weight: 400;
}
.contact-logo {
  width: 32px;
  height: 32px;
  margin-right: 8px;
}
a {
  text-decoration: none;
  color: var(--black);
}
.nav-toggle {
  width: 25px;
  height: 25px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  gap: 5px;
}
.burger-line {
  width: 21px;
  height: 2px;
  background: var(--black);
}
@media screen and (min-width: 992px) {
  .nav-toggle {
    display: none;
  }
  .nav-title,
  .header .contact {
    display: none;
  }
  .nav-overlay {
    display: none;
  }
  .nav-overlay.show-overlay {
    display: none;
  }
  .nav-menu {
    width: unset;
    height: unset;
    position: static;
    top: unset;
    right: unset;
    background: transparent;
    padding: unset;
    display: block;
    transform: unset;
    transition: unset;
  }
  .nav-list {
    flex-flow: row nowrap;
  }
  .link-icon {
    margin-right: 8px;
    margin-bottom: unset;
  }
  .nav-item a {
    flex-flow: row nowrap;
  }
}
</style>
